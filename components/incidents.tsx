"use client"

import { useState } from "react"
import { PlusCircle, Filter, SortDesc } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { IncidentList } from "@/components/incident-list"
import { AddIncidentDialog } from "@/components/add-incident-dialog"
import { mockIncidents } from "@/lib/data"
import type { Incident } from "@/lib/types"

export function Incidents() {
  const [incidents, setIncidents] = useState<Incident[]>(mockIncidents)
  const [severityFilter, setSeverityFilter] = useState<string>("All")
  const [sortOrder, setSortOrder] = useState<"newest" | "oldest">("newest")
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)

  const filteredIncidents = incidents
    .filter((incident) => (severityFilter === "All" ? true : incident.severity === severityFilter))
    .sort((a, b) => {
      const dateA = new Date(a.reported_at).getTime()
      const dateB = new Date(b.reported_at).getTime()
      return sortOrder === "newest" ? dateB - dateA : dateA - dateB
    })

  const handleAddIncident = (incident: Omit<Incident, "id" | "reported_at">) => {
    const newIncident: Incident = {
      ...incident,
      id: incidents.length + 1,
      reported_at: new Date().toISOString(),
    }
    setIncidents([...incidents, newIncident])
    setIsAddDialogOpen(false)
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-2">Incident Reports</h2>
          <p className="text-muted-foreground">Track and manage AI safety incidents</p>
        </div>
        <Button onClick={() => setIsAddDialogOpen(true)} className="mt-4 md:mt-0 bg-rose-600 hover:bg-rose-700">
          <PlusCircle className="mr-2 h-4 w-4" />
          Report Incident
        </Button>
      </div>

      <Card className="mb-8 border-white/10 bg-black/40 backdrop-blur-sm">
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <label className="text-sm font-medium mb-2 block flex items-center gap-2">
                <Filter className="h-4 w-4 text-muted-foreground" />
                Filter by Severity
              </label>
              <Select value={severityFilter} onValueChange={setSeverityFilter}>
                <SelectTrigger className="bg-background/50 border-white/10">
                  <SelectValue placeholder="All Severities" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="All">All Severities</SelectItem>
                  <SelectItem value="Low">Low</SelectItem>
                  <SelectItem value="Medium">Medium</SelectItem>
                  <SelectItem value="High">High</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex-1">
              <label className="text-sm font-medium mb-2 block flex items-center gap-2">
                <SortDesc className="h-4 w-4 text-muted-foreground" />
                Sort by Date
              </label>
              <Select value={sortOrder} onValueChange={(value) => setSortOrder(value as "newest" | "oldest")}>
                <SelectTrigger className="bg-background/50 border-white/10">
                  <SelectValue placeholder="Sort by Date" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest First</SelectItem>
                  <SelectItem value="oldest">Oldest First</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      <IncidentList incidents={filteredIncidents} />

      <AddIncidentDialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen} onAddIncident={handleAddIncident} />
    </div>
  )
}
