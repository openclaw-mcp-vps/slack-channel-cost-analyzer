export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-medium px-3 py-1 rounded-full mb-6">
          For Operations &amp; HR Teams
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Know the Real Cost of Every{' '}
          <span className="text-[#58a6ff]">Slack Channel</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Connect your Slack workspace, enter employee salaries, and instantly see which channels drain budget and which ones drive value. Kill the noise, keep the signal.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start Analyzing — $15/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">Cancel anytime. No credit card required to connect.</p>

        {/* Stats row */}
        <div className="mt-16 grid grid-cols-3 gap-6 border border-[#30363d] rounded-xl bg-[#161b22] p-6">
          {[
            { value: '$4,200', label: 'Avg monthly waste found' },
            { value: '38%', label: 'Channels typically inactive' },
            { value: '< 2 min', label: 'Setup time' },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-2xl font-bold text-[#58a6ff]">{s.value}</div>
              <div className="text-xs text-[#8b949e] mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="border border-[#30363d] rounded-xl bg-[#161b22] p-8 text-center">
          <div className="text-sm text-[#58a6ff] font-medium mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$15</div>
          <div className="text-sm text-[#8b949e] mb-6">per month</div>
          <ul className="text-sm text-[#c9d1d9] space-y-3 text-left mb-8">
            {[
              'Unlimited Slack channels analyzed',
              'Cost-per-channel dashboard',
              'Inactive channel detection',
              'Employee salary input & hourly rate calc',
              'Monthly cost trend reports',
              'CSV export',
              'Email recommendations digest',
            ].map((f) => (
              <li key={f} className="flex items-start gap-2">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors text-sm"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-10">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {[
            {
              q: 'How does the cost calculation work?',
              a: 'You enter each employee\'s annual salary. We calculate their hourly rate and multiply it by the time they spend reading and writing in each channel, based on Slack activity data.',
            },
            {
              q: 'What Slack data do you access?',
              a: 'We use Slack\'s OAuth to read channel message counts, member lists, and activity timestamps. We never read message content — only metadata.',
            },
            {
              q: 'Can I cancel my subscription?',
              a: 'Yes, cancel anytime from your billing portal. You keep access until the end of your billing period with no questions asked.',
            },
          ].map((item) => (
            <div key={item.q} className="border border-[#30363d] rounded-lg bg-[#161b22] p-6">
              <div className="font-semibold text-white mb-2">{item.q}</div>
              <div className="text-sm text-[#8b949e] leading-relaxed">{item.a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-6 text-xs text-[#8b949e]">
        © {new Date().getFullYear()} Slack Channel Cost Analyzer. Not affiliated with Slack Technologies.
      </footer>
    </main>
  )
}
