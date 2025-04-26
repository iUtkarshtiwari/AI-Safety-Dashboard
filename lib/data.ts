import type { Incident } from "./types"

export const mockIncidents: Incident[] = [
  {
    id: 1,
    title: "Biased Recommendation Algorithm",
    description:
      "Algorithm consistently favored certain demographics in job recommendations, leading to unequal opportunity distribution. The system was trained on historical hiring data that contained inherent biases, perpetuating these biases in its recommendations.\n\nInitial investigation shows a 35% higher recommendation rate for male candidates in technical roles despite similar qualifications. The issue affects approximately 15,000 users across the platform.",
    severity: "Medium",
    reported_at: "2025-03-15T10:00:00Z",
  },
  {
    id: 2,
    title: "LLM Hallucination in Critical Info",
    description:
      "Large Language Model provided incorrect safety procedure information when asked about emergency protocols in a chemical manufacturing context. The model hallucinated non-existent safety procedures that, if followed, could have led to dangerous situations.\n\nThe model confidently provided fabricated emergency protocols that contradicted established safety guidelines. This incident was caught during validation before deployment but represents a critical safety risk had it gone undetected.",
    severity: "High",
    reported_at: "2025-04-01T14:30:00Z",
  },
  {
    id: 3,
    title: "Minor Data Leak via Chatbot",
    description:
      "Chatbot inadvertently exposed non-sensitive user metadata in its responses. The system occasionally included session identifiers in its debug information which was visible to users.\n\nWhile no personally identifiable information was exposed, the leak could potentially be used to track user sessions. Approximately 200 users were affected before the issue was patched.",
    severity: "Low",
    reported_at: "2025-03-20T09:15:00Z",
  },
  {
    id: 4,
    title: "Facial Recognition False Positives",
    description:
      "Security system's facial recognition algorithm produced an unusually high rate of false positives when identifying individuals of certain ethnicities. The system incorrectly flagged innocent individuals as persons of interest.\n\nAnalysis showed a 23% higher false positive rate for individuals with darker skin tones. This bias appears to stem from imbalanced training data and inadequate testing across diverse populations.",
    severity: "High",
    reported_at: "2025-03-25T16:45:00Z",
  },
  {
    id: 5,
    title: "Content Moderation Failure",
    description:
      "AI content moderation system failed to detect harmful content in multiple languages, allowing policy-violating material to remain on the platform for several hours. The system was primarily trained on English content and performed poorly on other languages.\n\nApproximately 150 posts containing harmful content in Spanish, French, and Arabic remained visible for an average of 4 hours before being manually flagged and removed.",
    severity: "Medium",
    reported_at: "2025-04-05T08:20:00Z",
  },
]
