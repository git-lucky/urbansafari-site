import { createRootRoute, Outlet } from '@tanstack/react-router'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export const Route = createRootRoute({
  component: RootLayout,
})

function RootLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
