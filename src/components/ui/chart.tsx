"use client"
import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

/** Consistent card-friendly container for Recharts components */
export function ChartShell({
  className,
  children,
}: {
  className?: string
  children: ReactNode
}) {
  return (
    <div
      className={cn(
        // phones: 16/9 aspect so nothing side-scrolls
        // ≥ sm: fixed height, allows cards to equalise nicely
        "relative w-full min-w-0 xs:aspect-video xs:h-auto sm:h-64 lg:h-72",
        className
      )}
    >
      {children}
    </div>
  )
}

/* translucent tooltip (unchanged) … */


/* ----------  Minimal tooltip that matches Apple-style translucency  -------- */
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
