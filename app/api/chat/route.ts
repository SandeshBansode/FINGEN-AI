import { openai } from "@ai-sdk/openai"
import { streamText } from "ai"

export const maxDuration = 30

export async function POST(req: Request) {
  try {
    // Check if OpenAI API key is configured
    if (!process.env.OPENAI_API_KEY) {
      return new Response(
        JSON.stringify({
          error: "OpenAI API key is not configured. Please set the OPENAI_API_KEY environment variable.",
        }),
        { status: 500, headers: { "Content-Type": "application/json" } },
      )
    }

    const { messages } = await req.json()

    // Add system message if not present
    const finalMessages = messages.some((m: any) => m.role === "system")
      ? messages
      : [
          {
            role: "system",
            content:
              "You are a helpful AI financial assistant called FinAI. Provide accurate, educational information about investing, financial planning, and market trends. Keep responses concise and focused on financial topics. Do not provide specific investment advice or recommendations for individual securities.",
          },
          ...messages,
        ]

    const result = streamText({
      model: openai("gpt-3.5-turbo"),
      messages: finalMessages,
      maxTokens: 1000,
    })

    return result.toDataStreamResponse()
  } catch (error: any) {
    console.error("Error in chat API:", error)

    // Determine if it's a rate limit error
    const isRateLimit = error.message?.includes("rate limit") || error.message?.includes("429")

    return new Response(
      JSON.stringify({
        error: isRateLimit
          ? "Rate limit exceeded. Please try again in a moment."
          : "Failed to process chat request. Please try again later.",
      }),
      {
        status: isRateLimit ? 429 : 500,
        headers: { "Content-Type": "application/json" },
      },
    )
  }
}

