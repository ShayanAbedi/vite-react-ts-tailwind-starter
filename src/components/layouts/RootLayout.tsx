import { Link, Outlet, useLocation } from 'react-router-dom'
import { LayoutDashboard, Settings } from 'lucide-react'
import { cn } from '@/lib/utils'

const navigation = [
  {
    name: 'Dashboard',
    href: '/',
    icon: LayoutDashboard,
  },
  {
    name: 'Settings',
    href: '/settings',
    icon: Settings,
  },
]

const RootLayout = () => {
  const { pathname } = useLocation()

  return (
    <div className="grid min-h-screen grid-cols-[240px_1fr]">
      {/* Sidebar */}
      <aside className="border-r border-border bg-card">
        <div className="p-6">
          <Link to="/" className="text-lg font-semibold">
            Dashboard
          </Link>
        </div>
        <nav className="px-2">
          {navigation.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href
            return (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  'flex h-10 items-center gap-2 rounded-md px-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-primary',
                  isActive && 'bg-muted text-primary'
                )}
              >
                <Icon className="h-4 w-4" />
                <span>{item.name}</span>
              </Link>
            )
          })}
        </nav>
      </aside>

      {/* Content */}
      <main className="flex-1 bg-background">
        <div className="border-b">
          <div className="flex h-14 items-center px-6">
            <span className="text-sm font-medium">Hello there!</span>
          </div>
        </div>
        <div className="p-6">
          <Outlet />
        </div>
      </main>
    </div>
  )
}

export default RootLayout
