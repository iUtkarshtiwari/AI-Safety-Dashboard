import { Incidents } from "@/components/incidents"
import { DashboardLayout } from "@/components/dashboard-layout"
import { DashboardHeader } from "@/components/dashboard-header"

export default function Home() {
  return (
    <DashboardLayout>
      <DashboardHeader />
      <Incidents />
    </DashboardLayout>
  )
}
