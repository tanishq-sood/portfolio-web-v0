import { NextResponse } from "next/server"

// This is a simple API route that will fetch achievements from the backend
export async function GET() {
  try {
    const response = await fetch(`${process.env.API_URL || "http://localhost:5000"}/api/achievements`, {
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    })

    const data = await response.json()

    if (!response.ok) {
      throw new Error(data.message || "Failed to fetch achievements")
    }

    return NextResponse.json(data)
  } catch (error) {
    console.error("Error fetching achievements:", error)
    return NextResponse.json({ message: "Failed to fetch achievements" }, { status: 500 })
  }
}

