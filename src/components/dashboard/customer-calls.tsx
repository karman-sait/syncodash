"use client"

import { useEffect, useState } from "react"
import { Loader2, PhoneCall, PhoneForwarded } from "lucide-react"
import { mockCalls } from "@/lib/mock-data"

type Call = {
  id: string
  timestamp: string
  duration: number
  direction: string
  result: string
  notes: string
}

export function CustomerCalls({ customerId }: { customerId: string }) {
  const [loading, setLoading] = useState(true)
  const [calls, setCalls] = useState<Call[]>([])

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      // Filter calls for this customer
      const customerCalls = mockCalls.filter((call) => call.customer_id === customerId)
      setCalls(customerCalls)
      setLoading(false)
    }, 700) // Simulate network delay

    return () => clearTimeout(timer)
  }, [customerId])

  if (loading) {
    return (
      <div className="flex justify-center py-8">
        <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
      </div>
    )
  }

  if (calls.length === 0) {
    return <div className="text-center py-8 text-muted-foreground">No calls recorded with this customer.</div>
  }

  return (
    <div className="space-y-4">
      {calls.map((call) => (
        <div key={call.id} className="flex items-start gap-4 pb-4 border-b">
          <div
            className={`mt-1 h-10 w-10 rounded-full flex items-center justify-center ${
              call.result === "answered"
                ? "bg-green-100 text-green-600"
                : call.result === "missed"
                  ? "bg-red-100 text-red-600"
                  : "bg-amber-100 text-amber-600"
            }`}
          >
            {call.direction === "inbound" ? <PhoneCall className="h-5 w-5" /> : <PhoneForwarded className="h-5 w-5" />}
          </div>
          <div className="flex-1">
            <div className="flex items-start justify-between">
              <div>
                <h4 className="font-medium">
                  {call.direction === "inbound" ? "Incoming call" : "Outgoing call"}
                  {call.result !== "answered" && ` (${call.result})`}
                </h4>
                <p className="text-sm text-muted-foreground mt-1">
                  {new Date(call.timestamp).toLocaleString()}
                  {call.duration > 0 &&
                    ` • ${Math.floor(call.duration / 60)}:${String(call.duration % 60).padStart(2, "0")}`}
                </p>
                {call.notes && <p className="text-sm mt-2">{call.notes}</p>}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
