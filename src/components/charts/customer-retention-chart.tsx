"use client"

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts"
import { ChartShell, ChartTooltip } from "@/components/ui/chart"

const teal = "#16a34a"
const red  = "#ef4444"

/* fake 12-month trend */
const data = [
  { m: "Jan", r: 93, c: 7 },
  { m: "Feb", r: 92, c: 8 },
  { m: "Mar", r: 90, c: 10 },
  { m: "Apr", r: 89, c: 11 },
  { m: "May", r: 88, c: 12 },
  { m: "Jun", r: 88, c: 12 },
  { m: "Jul", r: 87, c: 13 },
  { m: "Aug", r: 88, c: 12 },
  { m: "Sep", r: 89, c: 11 },
  { m: "Oct", r: 90, c: 10 },
  { m: "Nov", r: 91, c: 9 },
  { m: "Dec", r: 92, c: 8 },
]

export default function CustomerRetentionChart() {
  return (
    <ChartShell>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="retGrad" x1="0" x2="0" y1="0" y2="1">
              <stop offset="5%" stopColor={teal} stopOpacity={0.5} />
              <stop offset="95%" stopColor={teal} stopOpacity={0.05} />
            </linearGradient>
          </defs>
          <CartesianGrid vertical={false} stroke="hsl(0 0% 90%)" />
          <Tooltip
            content={
              <ChartTooltip format={(v) => `${v}%`} />
            }
          />
          <XAxis
            dataKey="m"
            tickLine={false}
            axisLine={false}
            style={{ fontSize: 11, fill: "#6b7280" }}
          />
          <YAxis
            hide
            domain={[70, 100]}
          />
          <Area
            type="monotone"
            dataKey="r"
            stroke={teal}
            fill="url(#retGrad)"
            strokeWidth={2}
            name="Retention"
          />
          <Area
            type="monotone"
            dataKey="c"
            stroke={red}
            fill="hsl(0 84% 60% / .1)"
            strokeWidth={2}
            name="Churn"
          />
        </AreaChart>
      </ResponsiveContainer>
    </ChartShell>
  )
}
