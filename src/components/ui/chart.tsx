"use client"

import { cn } from "@/lib/utils"
import type { ReactNode } from "react"
import { useEffect, useRef } from "react"

/* -------------------------------------------------------------
   ChartShell
   • Guarantees a visible height *at every breakpoint*.
   • Fires a one-off “resize” after mount so Recharts syncs.
   ------------------------------------------------------------- */
export function ChartShell({
  className,
  children,
}: {
  className?: string
  children: ReactNode
}) {
  // one-time resize nudge  ───────────────────────────
  const sent = useRef(false)
  useEffect(() => {
    if (sent.current) return
    sent.current = true
    const id = requestAnimationFrame(() =>
      window.dispatchEvent(new Event("resize"))
    )
    return () => cancelAnimationFrame(id)
  }, [])

  return (
    <div
      className={cn(
        /*  ↓↓↓  key change: a real height on mobile  ↓↓↓ */
        "relative w-full h-56 sm:h-64 lg:h-72 overflow-hidden",
        className
      )}
    >
      {children}
    </div>
  )
}

/* ----------------------------------------------------------------
   Minimal translucent tooltip (unchanged).
   ---------------------------------------------------------------- */
export function ChartTooltip({
  active,
  label,
  payload,
  format,
}: {
  active?: boolean
  label?: string | number
  payload?: any[]
  format?: (v: any) => string
}) {
  if (!active || !payload?.length) return null

  return (
    <div className="backdrop-blur-sm rounded-md border border-gray-200/70 bg-white/70 p-2 text-xs shadow-sm">
      <div className="mb-1 font-medium text-gray-800">{label}</div>
      {payload.map((p) => (
        <div key={p.dataKey} className="flex items-center gap-2">
          <span
            className="inline-block h-2 w-2 rounded-full"
            style={{ background: p.color ?? p.fill }}
          />
          <span className="flex-1 text-gray-600">
            {p.name ?? p.dataKey}
          </span>
          <span className="tabular-nums text-gray-900">
            {format ? format(p.value) : p.value}
          </span>
        </div>
      ))}
    </div>
  )
}
