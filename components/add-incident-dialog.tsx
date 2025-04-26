"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { AlertTriangle, AlertCircle, Info, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import type { Incident } from "@/lib/types"
import { analyzeSeverity } from "@/lib/ai-analyzer"

interface AddIncidentDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onAddIncident: (incident: Omit<Incident, "id" | "reported_at">) => void
}

export function AddIncidentDialog({ open, onOpenChange, onAddIncident }: AddIncidentDialogProps) {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [severity, setSeverity] = useState<string>("")
  const [aiAnalysis, setAiAnalysis] = useState<{
    severity: string
    confidence: number
    keyFactors: string[]
    keyPhrases: string[]
  } | null>(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [highlightedText, setHighlightedText] = useState("")

  useEffect(() => {
    if (description.length > 20) {
      setIsAnalyzing(true)
      const timer = setTimeout(() => {
        const result = analyzeSeverity(description)
        setAiAnalysis(result)
        setIsAnalyzing(false)
        if (result.keyPhrases.length > 0) {
          let highlighted = description
          result.keyPhrases.forEach((phrase) => {
            const regex = new RegExp(`(${phrase})`, "gi")
            highlighted = highlighted.replace(regex, "<mark>$1</mark>")
          })
          setHighlightedText(highlighted)
        } else {
          setHighlightedText("")
        }
      }, 500)

      return () => clearTimeout(timer)
    } else {
      setAiAnalysis(null)
      setHighlightedText("")
    }
  }, [description])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!title || !description || !severity) return

    onAddIncident({
      title,
      description,
      severity,
    })

    setTitle("")
    setDescription("")
    setSeverity("")
    setAiAnalysis(null)
    setHighlightedText("")
  }

  const applySuggestion = () => {
    if (aiAnalysis) {
      setSeverity(aiAnalysis.severity)
    }
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
        return "bg-red-100 text-red-800 hover:bg-red-200 dark:bg-red-900/30 dark:text-red-400"
      case "Medium":
        return "bg-amber-100 text-amber-800 hover:bg-amber-200 dark:bg-amber-900/30 dark:text-amber-400"
      case "Low":
        return "bg-green-100 text-green-800 hover:bg-green-200 dark:bg-green-900/30 dark:text-green-400"
      default:
        return ""
    }
  }

  const getConfidenceColor = (confidence: number) => {
    if (confidence >= 0.8) return "bg-green-600"
    if (confidence >= 0.6) return "bg-amber-500"
    return "bg-rose-500"
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[650px]">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Report New AI Safety Incident</DialogTitle>
            <DialogDescription>Provide details about the AI safety incident you want to report.</DialogDescription>
          </DialogHeader>
          <div className="grid gap-6 py-4">
            <div className="grid gap-2">
              <Label htmlFor="title">Incident Title</Label>
              <Input
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Brief title describing the incident"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Detailed description of what happened..."
                className="min-h-[120px]"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="severity">Severity Level</Label>
              <Select value={severity} onValueChange={setSeverity} required>
                <SelectTrigger id="severity">
                  <SelectValue placeholder="Select severity level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Low">Low</SelectItem>
                  <SelectItem value="Medium">Medium</SelectItem>
                  <SelectItem value="High">High</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {isAnalyzing && (
              <div className="bg-muted p-4 rounded-md">
                <div className="flex items-center gap-2 mb-2">
                  <div className="animate-pulse h-5 w-5 rounded-full bg-muted-foreground/20"></div>
                  <p className="text-sm text-muted-foreground">Analyzing description with NLP...</p>
                </div>
                <Progress value={45} className="h-1" />
              </div>
            )}

            {aiAnalysis && !isAnalyzing && (
              <div className="bg-muted p-4 rounded-md">
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <h4 className="text-sm font-medium">AI-Suggested Severity:</h4>
                    <div className="flex items-center gap-1">
                      {getSeverityIcon(aiAnalysis.severity)}
                      <Badge variant="outline" className={`font-medium ${getSeverityColor(aiAnalysis.severity)}`}>
                        {aiAnalysis.severity}
                      </Badge>
                    </div>
                  </div>
                  <Button type="button" variant="outline" size="sm" onClick={applySuggestion} className="gap-1">
                    <Check className="h-3 w-3" />
                    Apply
                  </Button>
                </div>

                <div className="mb-3">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs text-muted-foreground">Confidence</span>
                    <span className="text-xs font-medium">{Math.round(aiAnalysis.confidence * 100)}%</span>
                  </div>
                  <Progress
                    value={aiAnalysis.confidence * 100}
                    className={`h-1.5 ${getConfidenceColor(aiAnalysis.confidence)}`}
                  />
                </div>

                {aiAnalysis.keyFactors.length > 0 && (
                  <div className="mb-3">
                    <h5 className="text-xs font-medium mb-1">Key Factors:</h5>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      {aiAnalysis.keyFactors.map((factor, index) => (
                        <li key={index} className="flex items-start gap-1">
                          <span className="text-primary">•</span> {factor}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {highlightedText && (
                  <div>
                    <h5 className="text-xs font-medium mb-1">Key Phrases Detected:</h5>
                    <div
                      className="text-xs text-muted-foreground p-2 bg-background/50 rounded border border-border/50 max-h-[100px] overflow-y-auto"
                      dangerouslySetInnerHTML={{ __html: highlightedText }}
                    />
                  </div>
                )}
              </div>
            )}
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button
              type="submit"
              className="bg-rose-600 hover:bg-rose-700"
              disabled={!title || !description || !severity}
            >
              Submit Report
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
