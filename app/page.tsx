export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold tracking-widest uppercase">
          For Freelancers &amp; Consultants
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Predict Cash Flow from<br />
          <span className="text-[#58a6ff]">Invoice Payment Patterns</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Stop guessing when clients will pay. Freelancer Payment Forecast analyzes your invoice history, flags late-payment risks, and shows you exactly what money is coming — and when.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Forecasting — $19/mo
        </a>
        <p className="mt-3 text-xs text-[#484f58]">Cancel anytime. No contracts.</p>

        {/* Feature pills */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {['Cash flow predictions','Late payment alerts','Client risk scores','30/60/90-day forecasts','Payment pattern analytics','Invoice trend reports'].map((f) => (
            <span key={f} className="px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-sm text-[#8b949e]">{f}</span>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="rounded-2xl border border-[#30363d] bg-[#161b22] p-8 text-center">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#58a6ff] mb-2">Pro Plan</p>
          <div className="flex items-end justify-center gap-1 mb-1">
            <span className="text-5xl font-bold text-white">$19</span>
            <span className="text-[#8b949e] mb-2">/mo</span>
          </div>
          <p className="text-sm text-[#8b949e] mb-6">Everything you need to stay cash-flow positive</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Unlimited clients & invoices',
              'AI-powered payment predictions',
              'Late payment risk alerts',
              '30 / 60 / 90-day cash flow forecast',
              'Client payment behavior scores',
              'CSV export & reporting',
              'Email digest summaries'
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm">
                <span className="text-[#58a6ff] mt-0.5">&#10003;</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-sm transition-colors"
          >
            Get Started Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="border border-[#30363d] rounded-xl p-6 bg-[#161b22]">
            <h3 className="font-semibold text-white mb-2">How does the payment prediction work?</h3>
            <p className="text-sm text-[#8b949e]">We analyze your historical invoice data — due dates, actual payment dates, and client behavior — to build a statistical model that forecasts when future invoices are likely to be paid and flags clients who tend to pay late.</p>
          </div>
          <div className="border border-[#30363d] rounded-xl p-6 bg-[#161b22]">
            <h3 className="font-semibold text-white mb-2">Do I need to connect my bank account?</h3>
            <p className="text-sm text-[#8b949e]">No. You simply import or manually enter your invoice data. There is no bank connection required — your financial data stays private and under your control.</p>
          </div>
          <div className="border border-[#30363d] rounded-xl p-6 bg-[#161b22]">
            <h3 className="font-semibold text-white mb-2">Can I cancel my subscription at any time?</h3>
            <p className="text-sm text-[#8b949e]">Yes, absolutely. You can cancel anytime from your account settings with no penalties or hidden fees. Your data remains accessible until the end of your billing period.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#21262d] py-6 text-center text-xs text-[#484f58]">
        &copy; {new Date().getFullYear()} Freelancer Payment Forecast. All rights reserved.
      </footer>
    </main>
  )
}
