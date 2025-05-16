"use client"

import {
  FunnelChart,
  Funnel,
  Tooltip,
  ResponsiveContainer,
  LabelList,
  Cell,
} from "recharts"
import { ChartShell, ChartTooltip } from "@/components/ui/chart"
import { PALETTE as C } from "./palette"

const COLORS = [C.green, C.blue, C.yellow, C.magenta]

const data = [
  { name: "Leads",        value: 1200 },
  { name: "Qualified",    value: 800  },
  { name: "Proposals",    value: 500  },
  { name: "Negotiations", value: 350  },
  { name: "Closed",       value: 200  },
]

export default function LeadConversionChart() {
  return (
    <ChartShell>
      <ResponsiveContainer width="100%" height="100%">
        <FunnelChart>
          <Tooltip content={<ChartTooltip />} />
          <Funnel dataKey="value" data={data} isAnimationActive stroke="none">
            {data.map((_, i) => (
              <Cell key={i} fill={COLORS[i % COLORS.length]} />
            ))}
            <LabelList
              position="right"
              dataKey="name"
              style={{ fill: "#374151", fontSize: 12 }}
            />
          </Funnel>
        </FunnelChart>
      </ResponsiveContainer>
    </ChartShell>
  )
}
