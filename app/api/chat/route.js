import { openai } from "@ai-sdk/openai"
import { streamText } from "ai"

// Allow streaming responses up to 30 seconds
export const maxDuration = 30

export async function POST(req) {
  try {
    const { messages } = await req.json()

    // Add system message if not present
    const finalMessages = messages.some((m) => m.role === "system")
      ? messages
      : [
          {
            role: "system",
            content:
              "You are a helpful AI financial assistant. Provide accurate, educational information about investing, financial planning, and market trends. Do not provide specific investment advice or recommendations for individual securities. Always encourage users to do their own research and consider consulting with a financial advisor for personalized advice.",
          },
          ...messages,
        ]

    const result = streamText({
      model: openai("gpt-3.5-turbo"),
      messages: finalMessages,
    })

    return result.toDataStreamResponse()
  } catch (error) {
    console.error("Error in chat API:", error)
    return new Response(JSON.stringify({ error: "Failed to process chat request" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    })
  }
}

