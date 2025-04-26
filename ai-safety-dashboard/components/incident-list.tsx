"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp, AlertTriangle, AlertCircle, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { Incident } from "@/lib/types"

interface IncidentListProps {
  incidents: Incident[]
}

export function IncidentList({ incidents }: IncidentListProps) {
  const [expandedIds, setExpandedIds] = useState<number[]>([])

  const toggleExpand = (id: number) => {
    setExpandedIds((prev) => (prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]))
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(date)
  }

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case "High":
        return <AlertTriangle className="h-5 w-5 text-red-500" />
      case "Medium":
        return <AlertCircle className="h-5 w-5 text-amber-500" />
      case "Low":
        return <Info className="h-5 w-5 text-green-500" />
      default:
        return null
    }
  }

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "High":
        return "bg-red-500/20 text-red-400 hover:bg-red-500/30"
      case "Medium":
        return "bg-amber-500/20 text-amber-400 hover:bg-amber-500/30"
      case "Low":
        return "bg-green-500/20 text-green-400 hover:bg-green-500/30"
      default:
        return ""
    }
  }

  if (incidents.length === 0) {
    return (
      <Card className="border-dashed border-white/10 bg-black/40 backdrop-blur-sm">
        <CardContent className="p-6 text-center">
          <p className="text-muted-foreground">No incidents found. Adjust filters or report a new incident.</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-4">
      {incidents.map((incident) => (
        <Card key={incident.id} className="overflow-hidden border-white/10 bg-black/40 backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="flex flex-col sm:flex-row justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  {getSeverityIcon(incident.severity)}
                  <h3 className="text-xl font-semibold">{incident.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline" className={getSeverityColor(incident.severity)}>
                    {incident.severity} Severity
                  </Badge>
                  <Badge variant="outline" className="bg-secondary/50 text-foreground">
                    Reported: {formatDate(incident.reported_at)}
                  </Badge>
                </div>
                {expandedIds.includes(incident.id) && (
                  <div className="mt-4 bg-background/20 p-4 rounded-md border border-white/5">
                    <h4 className="font-medium mb-2">Description:</h4>
                    <p className="text-muted-foreground whitespace-pre-line">{incident.description}</p>
                  </div>
                )}
              </div>
            </div>
          </CardContent>
          <CardFooter className="bg-background/10 px-6 py-3 border-t border-white/5">
            <Button variant="ghost" size="sm" onClick={() => toggleExpand(incident.id)} className="ml-auto">
              {expandedIds.includes(incident.id) ? (
                <>
                  <ChevronUp className="h-4 w-4 mr-2" />
                  Hide Details
                </>
              ) : (
                <>
                  <ChevronDown className="h-4 w-4 mr-2" />
                  View Details
                </>
              )}
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
