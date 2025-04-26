import { ShieldAlert, Activity, BarChart3 } from "lucide-react"

export function DashboardHeader() {
  return (
    <div className="w-full bg-black/40 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto py-4 px-4">
        <div className="flex items-center gap-3">
          <div className="bg-rose-600/20 p-2 rounded-lg">
            <ShieldAlert className="h-6 w-6 text-rose-500" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-foreground">AI Safety Incident Dashboard</h1>
            <p className="text-sm text-muted-foreground">Monitor, analyze, and report AI safety incidents</p>
          </div>
          <div className="ml-auto flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2 bg-secondary/50 px-3 py-1.5 rounded-md">
              <Activity className="h-4 w-4 text-rose-400" />
              <span className="text-xs font-medium">5 Active Incidents</span>
            </div>
            <div className="hidden md:flex items-center gap-2 bg-secondary/50 px-3 py-1.5 rounded-md">
              <BarChart3 className="h-4 w-4 text-emerald-400" />
              <span className="text-xs font-medium">Risk Level: Moderate</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
