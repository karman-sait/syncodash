"use client"

import {
  BarChart,
  Bar,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  Cell,
} from "recharts"
import { ChartShell, ChartTooltip } from "@/components/ui/chart"
import { PALETTE as C } from "./palette"

const COLORS = [C.green, C.blue, C.yellow, C.magenta]

const data = [
  { range: "1 – 2", leads: 55 },
  { range: "3 – 4", leads: 120 },
  { range: "5 – 6", leads: 210 },
  { range: "7 – 8", leads: 170 },
  { range: "9 – 10", leads: 90 },
]

export default function LeadScoringChart() {
  return (
    <ChartShell>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <Tooltip content={<ChartTooltip />} />
          <XAxis dataKey="range" tickLine={false} axisLine={false} style={{ fontSize: 11, fill: "#6b7280" }} />
          <YAxis tickLine={false} axisLine={false} width={30} style={{ fontSize: 11, fill: "#6b7280" }} />
          <Bar dataKey="leads" radius={[6, 6, 0, 0]} barSize={28}>
            {data.map((_, i) => (
              <Cell key={i} fill={COLORS[i % COLORS.length]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </ChartShell>
  )
}
