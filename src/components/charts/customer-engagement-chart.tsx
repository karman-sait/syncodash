"use client"

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts"
import { ChartShell, ChartTooltip } from "@/components/ui/chart"
import { PALETTE as C } from "./palette"

const stroke = C.green
const grad   = C.green

const data = [
  { day: "Mon", hits: 420 },
  { day: "Tue", hits: 510 },
  { day: "Wed", hits: 610 },
  { day: "Thu", hits: 550 },
  { day: "Fri", hits: 680 },
  { day: "Sat", hits: 340 },
  { day: "Sun", hits: 290 },
]

export default function CustomerEngagementChart() {
  return (
    <ChartShell>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="hitsGrad" x1="0" x2="0" y1="0" y2="1">
              <stop offset="5%"  stopColor={grad} stopOpacity={0.6} />
              <stop offset="95%" stopColor={grad} stopOpacity={0.05} />
            </linearGradient>
          </defs>
          <Tooltip content={<ChartTooltip format={(v) => `${v} hits`} />} />
          <XAxis dataKey="day" tickLine={false} axisLine={false} style={{ fontSize: 11, fill: "#6b7280" }} />
          <YAxis hide domain={[0, 800]} />
          <Area
            type="monotone"
            dataKey="hits"
            stroke={stroke}
            fill="url(#hitsGrad)"
            strokeWidth={2}
            activeDot={{ r: 4 }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </ChartShell>
  )
}
