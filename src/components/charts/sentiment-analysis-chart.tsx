"use client"

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts"
import { ChartShell, ChartTooltip } from "@/components/ui/chart"
import { PALETTE as C } from "./palette"

const COLORS = [C.green, C.yellow, C.magenta]

const data = [
  { name: "Positive", value: 68 },
  { name: "Neutral",  value: 20 },
  { name: "Negative", value: 12 },
]

export default function SentimentAnalysisChart() {
  return (
    <ChartShell>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Tooltip content={<ChartTooltip format={(v) => `${v}%`} />} />
          <Pie
            data={data}
            dataKey="value"
            outerRadius={80}
            innerRadius={40}
            stroke="none"
            paddingAngle={3}
          >
            {data.map((_, i) => (
              <Cell key={i} fill={COLORS[i]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </ChartShell>
  )
}
