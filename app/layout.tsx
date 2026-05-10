import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Freelancer Payment Forecast — Predict Your Cash Flow',
  description: 'Analyze client payment history to predict future cash flow and identify late payment risks. Built for freelancers and consultants.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="907eb9e4-f5c6-4b04-ae43-be98bfe9e0ce"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">
        {children}
      </body>
    </html>
  )
}
