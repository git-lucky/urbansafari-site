// Homepage practice hunt. No network calls, persistent storage or real game submissions:
// chosen photos and videos are previewed from local object URLs and never leave the browser.
import { practiceChallenges, type PracticeKind } from '@/content/practice';

const dialog = document.getElementById('challenge-demo') as HTMLDialogElement | null;

if (dialog) {
  const challenges = Object.fromEntries(practiceChallenges.map((c) => [c.id, c])) as Record<PracticeKind, (typeof practiceChallenges)[number]>;
  type State = { completed: boolean; pending: boolean; answer: string; media: 'file' | 'sample' | null; url: string | null };
  const empty = (): State => ({ completed: false, pending: false, answer: '', media: null, url: null });
  const ids = practiceChallenges.map((c) => c.id);
  let states = Object.fromEntries(ids.map((id) => [id, empty()])) as Record<PracticeKind, State>;
  const timers = new Map<PracticeKind, number>();
  let current: PracticeKind | null = null;
  const $ = <T extends HTMLElement = HTMLElement>(id: string) => document.getElementById(id) as T;
  const form = $<HTMLFormElement>('challenge-demo-form');
  const inputs = $('demo-inputs');
  const feedback = $('demo-feedback');
  const submit = $<HTMLButtonElement>('demo-submit');
  const reset = $<HTMLButtonElement>('demo-reset');
  const triggers = [...document.querySelectorAll<HTMLElement>('[data-demo-kind]')];

  function updateScore() {
    const done = ids.filter((id) => states[id].completed);
    const score = done.reduce((sum, id) => sum + challenges[id].points, 0);
    document.querySelectorAll('[data-demo-score]').forEach((el) => { el.textContent = String(score); });
    document.querySelectorAll('[data-demo-count]').forEach((el) => { el.textContent = `${done.length} of 5`; });
    (document.querySelector('.demo-progress') as HTMLElement).style.setProperty('--done', String(done.length / 5));
    document.querySelectorAll<HTMLElement>('.pv-tile.t-you,.pv-tag').forEach((el) => el.style.setProperty('--f', String((done.length / 5) * 0.82)));
    triggers.forEach((el) => {
      const id = el.dataset.demoKind as PracticeKind;
      el.classList.toggle('is-complete', states[id].completed);
      el.setAttribute('aria-label', `${challenges[id].kind}: ${challenges[id].title}${states[id].completed ? ', completed' : `, ${challenges[id].points} points`}`);
    });
    document.querySelectorAll<HTMLElement>('[data-kind-state]').forEach((el) => {
      const id = el.dataset.kindState as PracticeKind;
      el.textContent = states[id].completed ? `Completed · +${challenges[id].points}` : `Try it · ${challenges[id].points} points`;
    });
    document.querySelectorAll<HTMLElement>('[data-mini-done]').forEach((el) => { el.hidden = !states[el.dataset.miniDone as PracticeKind].completed; });
    reset.disabled = !Object.values(states).some((s) => s.completed || s.pending || s.answer || s.media);
  }

  function releaseMedia(state: State) {
    if (state.url) URL.revokeObjectURL(state.url);
    state.url = null;
    state.media = null;
  }

  function renderMedia(id: PracticeKind) {
    const state = states[id];
    const area = $('media-preview');
    area.replaceChildren();
    if (state.media === 'file' && state.url) {
      const preview = document.createElement(id === 'photo' ? 'img' : 'video');
      preview.src = state.url;
      if (preview instanceof HTMLImageElement) preview.alt = 'Your selected practice photo';
      else { preview.controls = true; preview.playsInline = true; preview.preload = 'metadata'; }
      area.append(preview);
    } else if (state.media === 'sample' && id === 'photo') {
      const img = document.createElement('img');
      img.src = '/img/team-in-action-900.webp';
      img.alt = 'Sample Urban Safari group photo';
      area.append(img);
    } else {
      const label = document.createElement('p');
      label.className = 'media-placeholder';
      label.textContent = state.media === 'sample' ? 'Demo video submission selected. No recording needed.' : `Choose a ${id === 'photo' ? 'photo' : 'video'}, or try a demo submission.`;
      area.append(label);
    }
    $('media-selection').textContent = state.media ? (state.media === 'file' ? 'Your file is ready in this preview only.' : 'Demo submission ready.') : '';
    submit.disabled = !state.media || state.pending || state.completed;
  }

  function renderInputs(id: PracticeKind) {
    const state = states[id];
    inputs.replaceChildren();
    if (id === 'photo' || id === 'video') {
      const noun = id === 'photo' ? 'photo' : 'video';
      inputs.innerHTML = `<div class="media-preview" id="media-preview"></div><div class="media-actions"><label class="btn btn-line file-choice">Choose a ${noun}<input type="file" id="demo-file" accept="${id === 'photo' ? 'image/*' : 'video/*'}"></label><button type="button" class="btn btn-quiet" id="demo-sample">Use a demo ${noun}</button></div><p class="media-selection" id="media-selection" aria-live="polite"></p>`;
      $('demo-sample').addEventListener('click', () => {
        if (state.pending || state.completed) return;
        releaseMedia(state);
        state.media = 'sample';
        feedback.textContent = '';
        renderMedia(id);
        updateScore();
      });
      $<HTMLInputElement>('demo-file').addEventListener('change', (e) => {
        const file = (e.target as HTMLInputElement).files?.[0];
        if (!file || state.pending || state.completed) return;
        if (!file.type.startsWith(id === 'photo' ? 'image/' : 'video/')) { feedback.textContent = `Choose a ${noun} file.`; return; }
        releaseMedia(state);
        state.url = URL.createObjectURL(file);
        state.media = 'file';
        feedback.textContent = '';
        renderMedia(id);
        updateScore();
      });
      renderMedia(id);
    } else if (id === 'choice') {
      inputs.innerHTML = '<fieldset class="sample-choices"><legend>Which place fits?</legend><label class="opt"><input type="radio" name="practice-choice" value="bank"><span>A bank</span></label><label class="opt"><input type="radio" name="practice-choice" value="bakery"><span>A bakery</span></label><label class="opt"><input type="radio" name="practice-choice" value="library"><span>A library</span></label></fieldset>';
      inputs.querySelectorAll<HTMLInputElement>('input').forEach((el) => { el.checked = el.value === state.answer; });
    } else {
      inputs.innerHTML = id === 'trivia'
        ? '<label for="practice-answer" class="sample-label">Your answer</label><input id="practice-answer" type="text" autocomplete="off" placeholder="Type a direction" maxlength="80">'
        : '<label for="practice-answer" class="sample-label">Your expedition title</label><textarea id="practice-answer" rows="2" placeholder="The Great Saturday Escape…" maxlength="120"></textarea>';
      $<HTMLInputElement>('practice-answer').value = state.answer;
    }
  }

  function render(id: PracticeKind) {
    const item = challenges[id];
    const state = states[id];
    current = id;
    $('demo-kind').textContent = item.kind;
    $('demo-title').textContent = item.title;
    $('demo-worth').textContent = `${item.points} points`;
    $('demo-description').textContent = item.description;
    $('demo-answer-kind').textContent = item.answer;
    const art = $<HTMLImageElement>('demo-art');
    art.src = item.art;
    art.alt = id === 'photo' ? 'An Urban Safari group sharing a photo challenge' : 'Atlas the Urban Safari elephant';
    $('demo-visual').classList.toggle('is-illustration', id !== 'photo');
    dialog!.dataset.kind = id;
    dialog!.classList.toggle('is-complete', state.completed);
    feedback.textContent = state.pending ? 'Submitting your practice challenge…' : '';
    submit.hidden = state.completed;
    submit.disabled = state.pending;
    submit.textContent = state.pending ? 'Submitting…' : 'Submit demo';
    $('demo-back').hidden = !state.completed;
    $('demo-complete').hidden = !state.completed;
    $('demo-earned').textContent = `Completed · +${item.points} points`;
    inputs.hidden = state.completed;
    renderInputs(id);
    if (state.pending || state.completed) inputs.querySelectorAll<HTMLInputElement>('input,button,textarea').forEach((el) => { el.disabled = true; });
  }

  triggers.forEach((button) => button.addEventListener('click', () => {
    render(button.dataset.demoKind as PracticeKind);
    if (!dialog.open) dialog.showModal();
    document.body.classList.add('challenge-demo-open');
    (dialog.querySelector('.challenge-scroll') as HTMLElement).scrollTop = 0;
    $('demo-close').focus({ preventScroll: true });
  }));
  $('demo-close').addEventListener('click', () => dialog.close());
  $('demo-back').addEventListener('click', () => dialog.close());
  dialog.addEventListener('close', () => { document.body.classList.remove('challenge-demo-open'); });

  inputs.addEventListener('input', (e) => {
    if (!current) return;
    const state = states[current];
    if (state.pending || state.completed) return;
    const target = e.target as HTMLInputElement;
    if (target.id === 'practice-answer' || target.name === 'practice-choice') {
      state.answer = target.value;
      feedback.textContent = '';
      updateScore();
    }
  });
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const id = current;
    if (!id) return;
    const state = states[id];
    if (state.completed || state.pending) return;
    if ((id === 'photo' || id === 'video') && !state.media) { feedback.textContent = 'Choose a file or use the demo submission first.'; return; }
    if (id === 'trivia' && !['s', 'south'].includes(state.answer.trim().toLowerCase().replace(/[.!?]/g, ''))) {
      feedback.textContent = state.answer.trim() ? 'Not quite. Think of the direction opposite north. Try again. This is practice.' : 'Type your answer first.';
      $('practice-answer').focus();
      return;
    }
    if (id === 'choice' && state.answer !== 'bank') {
      feedback.textContent = state.answer ? 'Not quite. Which business has branches in different places? Try again.' : 'Pick one answer first.';
      return;
    }
    if (id === 'text' && state.answer.trim().length < 3) { feedback.textContent = 'Give your expedition a name with at least three characters.'; $('practice-answer').focus(); return; }
    state.pending = true;
    render(id);
    updateScore();
    timers.set(id, window.setTimeout(() => {
      timers.delete(id);
      state.pending = false;
      state.completed = true;
      updateScore();
      if (dialog.open && current === id) render(id);
    }, 550));
  });
  reset.addEventListener('click', () => {
    timers.forEach((timer) => clearTimeout(timer));
    timers.clear();
    Object.values(states).forEach(releaseMedia);
    states = Object.fromEntries(ids.map((id) => [id, empty()])) as Record<PracticeKind, State>;
    if (dialog.open) dialog.close();
    current = null;
    updateScore();
  });
  updateScore();
}
