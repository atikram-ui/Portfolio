import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json()

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 })
    }

    const WEB3FORMS_KEY = process.env.WEB3FORMS_ACCESS_KEY || "YOUR_WEB3FORMS_KEY"

    // Send email using Web3Forms API
    const formData = new FormData()
    formData.append("access_key", WEB3FORMS_KEY)
    formData.append("name", name)
    formData.append("email", email)
    formData.append("message", message)
    formData.append("subject", `Portfolio Contact from ${name}`)
    formData.append("from_name", "Portfolio Contact Form")
    formData.append("to", "cyber.secfor@gmail.com")

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    })

    const result = await response.json()

    if (result.success) {
      return NextResponse.json({ success: true, message: "Message sent successfully!" }, { status: 200 })
    } else {
      // Fallback to mailto if service fails
      const subject = encodeURIComponent(`Portfolio Contact from ${name}`)
      const body = encodeURIComponent(
        `Hi Atikram,

I found your portfolio and would like to get in touch.

Name: ${name}
Email: ${email}

Message:
${message}

Best regards,
${name}`,
      )

      const mailtoLink = `mailto:cyber.secfor@gmail.com?subject=${subject}&body=${body}`
      return NextResponse.json({ success: true, mailto: mailtoLink }, { status: 200 })
    }
  } catch (error) {
    console.error("Contact form error:", error)

    // Always provide mailto fallback
    const subject = encodeURIComponent("Portfolio Contact")
    const mailtoLink = `mailto:cyber.secfor@gmail.com?subject=${subject}`

    return NextResponse.json(
      {
        success: true,
        mailto: mailtoLink,
        message: "Opening email client as fallback...",
      },
      { status: 200 },
    )
  }
}
