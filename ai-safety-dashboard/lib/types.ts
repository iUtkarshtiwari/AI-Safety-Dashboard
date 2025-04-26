export interface Incident {
  id: number
  title: string
  description: string
  severity: string
  reported_at: string
}

export interface AnalysisResult {
  severity: string
  confidence: number
  keyFactors: string[]
  keyPhrases: string[]
}
