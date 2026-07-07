const suggestions = ['How do I report a flood risk nearby?', 'What actions reduce my household emissions?', 'Summarize recent local conservation efforts.']

function AIAssistantPage() {
  return (
    <div className="space-y-8">
      <section className="rounded-3xl border border-emerald-100 bg-white p-10 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-600">AI assistant</p>
        <h1 className="mt-3 text-4xl font-semibold text-slate-900 dark:text-white">Ask EcoVoice about climate action and local support</h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">Use conversational AI to get guidance on reports, environmental questions, and next steps for your community.</p>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <div className="min-h-[280px] rounded-3xl border border-dashed border-emerald-200 bg-emerald-50 p-6 dark:border-slate-700 dark:bg-slate-950">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-600">Chat</p>
            <p className="mt-4 text-slate-700 dark:text-slate-200">Your AI assistant will respond here with guidance, summaries, and practical next steps.</p>
          </div>
          <div className="mt-4 flex flex-wrap gap-3">
            {suggestions.map((item) => (
              <button key={item} type="button" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 transition hover:border-emerald-400 hover:text-emerald-600 dark:border-slate-700 dark:text-slate-300">
                {item}
              </button>
            ))}
          </div>
        </div>
        <div className="rounded-3xl border border-emerald-100 bg-emerald-50 p-8 shadow-sm dark:border-slate-800 dark:bg-slate-950">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-600">Capabilities</p>
          <ul className="mt-4 space-y-3 text-slate-700 dark:text-slate-200">
            <li>• Voice-guided support for quick questions.</li>
            <li>• Suggested prompts based on recent activity.</li>
            <li>• Context-aware assistance for reports and petitions.</li>
          </ul>
        </div>
      </section>
    </div>
  )
}

export default AIAssistantPage
