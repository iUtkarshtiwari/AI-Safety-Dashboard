import type React from "react"

interface DashboardLayoutProps {
  children: React.ReactNode
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-background relative overflow-hidden">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiNmZmZmZmYiIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBoMzB2MzBIMzB6TTAgMGgzMHYzMEgweiIgZmlsbC1vcGFjaXR5PSIuNSIgZmlsbD0iI2ZmZmZmZiIvPjwvZz48L3N2Zz4=')]"></div>

        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-rose-500/5 rounded-full filter blur-3xl animate-blob"></div>
        <div className="absolute top-3/4 left-1/2 w-96 h-96 bg-purple-500/5 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>

        <svg className="absolute inset-0 w-full h-full opacity-[0.07]" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,50 Q25,25 50,50 T100,50" stroke="currentColor" strokeWidth="0.5" fill="none" />
          <path d="M0,70 Q35,20 70,70 T100,70" stroke="currentColor" strokeWidth="0.5" fill="none" />
          <path d="M0,30 Q65,80 30,30 T100,30" stroke="currentColor" strokeWidth="0.5" fill="none" />
        </svg>

        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-rose-500/20 rounded-full"></div>
        <div className="absolute top-3/4 left-1/2 w-2 h-2 bg-purple-500/20 rounded-full"></div>
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-cyan-500/20 rounded-full"></div>
        <div className="absolute top-2/3 right-1/3 w-2 h-2 bg-amber-500/20 rounded-full"></div>
        <div className="absolute top-1/2 left-1/3 w-2 h-2 bg-emerald-500/20 rounded-full"></div>
      </div>

      <div className="relative z-10">{children}</div>
    </div>
  )
}
