import { GoogleGenerativeAI } from "@google/generative-ai";

export const maxDuration = 30;

export async function POST(req: Request) {
  try {
    // Check if Google Gemini API key is configured
    if (!process.env.GOOGLE_API_KEY) {
      return new Response(
        JSON.stringify({
          error: "Google Gemini API key is not configured. Please set the GOOGLE_API_KEY environment variable.",
        }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    const { messages }: { messages: { role: string; content: string }[] } = await req.json();

    // Initialize Gemini AI
    const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    // Convert messages format to Gemini API's expected structure
    const formattedMessages = messages.map((msg) => ({
      role: msg.role,
      parts: [{ text: msg.content }],
    }));

    // Add system message if not present
    if (!messages.some((m: { role: string }) => m.role === "system")) {
      formattedMessages.unshift({
        role: "system",
        parts: [
          {
            text: "You are a helpful AI financial assistant called FinAI. Provide accurate, educational information about investing, financial planning, and market trends. Keep responses concise and focused on financial topics. Do not provide specific investment advice or recommendations for individual securities.",
          },
        ],
      });
    }

    // Generate response
    const result = await model.generateContent({ contents: formattedMessages });

    // Extract response text safely
    const responseText = result.response?.text() || "No response generated.";

    return new Response(JSON.stringify({ response: responseText }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error in chat API:", error);

    // Determine if it's a rate limit error
    const isRateLimit =
      typeof error === "object" &&
      error !== null &&
      "message" in error &&
      typeof (error as any).message === "string" &&
      ((error as any).message.includes("rate limit") || (error as any).message.includes("429"));

    return new Response(
      JSON.stringify({
        error: isRateLimit
          ? "Rate limit exceeded. Please try again in a moment."
          : "Failed to process chat request. Please try again later.",
      }),
      {
        status: isRateLimit ? 429 : 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
