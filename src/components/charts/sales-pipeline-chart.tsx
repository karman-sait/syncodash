"use client"

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts"
import { ChartShell, ChartTooltip } from "@/components/ui/chart"
import { PALETTE as C } from "./palette"

const low  = C.yellow
const mid  = C.blue
const high = C.magenta

const data = [
  { stage: "Prospect",  Low: 150_000, Mid: 100_000, High:  50_000 },
  { stage: "Qualify",   Low: 120_000, Mid: 180_000, High:  80_000 },
  { stage: "Needs",     Low:  80_000, Mid: 160_000, High: 120_000 },
  { stage: "Proposal",  Low:  50_000, Mid: 120_000, High: 180_000 },
  { stage: "Negotiate", Low:  30_000, Mid:  80_000, High: 220_000 },
]

export default function SalesPipelineChart() {
  return (
    <ChartShell>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <Tooltip content={<ChartTooltip format={(v) => `$${v.toLocaleString()}`} />} />
          <XAxis dataKey="stage" tickLine={false} axisLine={false} style={{ fontSize: 11, fill: "#6b7280" }} />
          <YAxis hide domain={[0, 400_000]} />
          <Bar dataKey="Low"  stackId="a" fill={low}  radius={[4, 4, 0, 0]} />
          <Bar dataKey="Mid"  stackId="a" fill={mid}  radius={0} />
          <Bar dataKey="High" stackId="a" fill={high} radius={0} />
        </BarChart>
      </ResponsiveContainer>
    </ChartShell>
  )
}
