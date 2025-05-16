"use client"

import { useEffect, useState } from "react"
import { Loader2, PhoneCall, PhoneMissed, Calendar } from "lucide-react"
import { mockCalls, mockAppointments } from "@/lib/mock-data"

type Activity = {
  id: string
  type: "call" | "appointment" | "message"
  title: string
  description: string
  timestamp: string
  icon: any
  iconColor: string
}

export function CustomerActivityFeed({ customerId }: { customerId: string }) {
  const [loading, setLoading] = useState(true)
  const [activities, setActivities] = useState<Activity[]>([])

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      // Filter calls for this customer
      const calls = mockCalls.filter((call) => call.customer_id === customerId)

      // Filter appointments for this customer
      const appointments = mockAppointments.filter((appointment) => appointment.customer_id === customerId)

      // Format calls
      const formattedCalls = calls.map((call) => ({
        id: call.id,
        type: "call" as const,
        title: `${call.direction === "inbound" ? "Incoming" : "Outgoing"} call`,
        description: call.notes || `${call.result} call (${Math.floor(call.duration / 60)} min)`,
        timestamp: call.timestamp,
        icon: call.result === "answered" ? PhoneCall : PhoneMissed,
        iconColor: call.result === "answered" ? "text-green-500" : "text-red-500",
      }))

      // Format appointments
      const formattedAppointments = appointments.map((appointment) => ({
        id: appointment.id,
        type: "appointment" as const,
        title: appointment.title,
        description: appointment.description || `${appointment.type} (${appointment.duration} min)`,
        timestamp: appointment.datetime,
        icon: Calendar,
        iconColor: "text-blue-500",
      }))

      // Combine and sort by timestamp
      const allActivities = [...formattedCalls, ...formattedAppointments].sort(
        (a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime(),
      )

      setActivities(allActivities)
      setLoading(false)
    }, 800) // Simulate network delay

    return () => clearTimeout(timer)
  }, [customerId])

  if (loading) {
    return (
      <div className="flex justify-center py-8">
        <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
      </div>
    )
  }

  if (activities.length === 0) {
    return <div className="text-center py-8 text-muted-foreground">No activity recorded for this customer yet.</div>
  }

  return (
    <div className="space-y-4">
      {activities.map((activity) => (
        <div key={`${activity.type}-${activity.id}`} className="flex gap-4 pb-4 border-b">
          <div className={`mt-1 h-8 w-8 rounded-full bg-muted flex items-center justify-center ${activity.iconColor}`}>
            <activity.icon className="h-4 w-4" />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <h4 className="font-medium">{activity.title}</h4>
              <time className="text-sm text-muted-foreground">{new Date(activity.timestamp).toLocaleString()}</time>
            </div>
            <p className="text-sm text-muted-foreground mt-1">{activity.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
