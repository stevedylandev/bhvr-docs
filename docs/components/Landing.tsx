import { useState } from 'react'

export function Landing() {
  const [copied, setCopied] = useState(false)


  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText('bun create bhvr@latest')
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  return (
    <main className="flex max-w-lg sm:max-w-2xl mx-auto flex-col items-center justify-start p-4 ">
      <div className="w-full max-w-2xl flex flex-col items-center gap-8">
        <div className="flex flex-col items-center gap-3">
          <p className="text-xl text-muted-foreground">Bun + Hono + Vite + React</p>
          <p className="text-center max-w-md">Modern and lightweight stack for the open web</p>
        </div>

        <div className="w-full">
          <div className="relative w-full rounded-lg bg-zinc-100 dark:bg-zinc-800 p-4 overflow-hidden">
            <pre className="text-sm font-mono">
              <code>bun create bhvr@latest</code>
            </pre>
            <button
              className="absolute top-2 right-2 rounded-md p-2 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none"
              onClick={copyToClipboard}
            >
              {copied ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

    </main>
  )
}
