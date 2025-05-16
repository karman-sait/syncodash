"use client"

import { useEffect, useState } from "react"
import { Loader2, Video, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { mockAppointments } from "@/lib/mock-data"

type Appointment = {
  id: string
  title: string
  description: string
  datetime: string
  duration: number
  type: string
  location: string
  status: string
}

export function CustomerAppointments({ customerId }: { customerId: string }) {
  const [loading, setLoading] = useState(true)
  const [appointments, setAppointments] = useState<Appointment[]>([])

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      // Filter appointments for this customer
      const customerAppointments = mockAppointments.filter((appointment) => appointment.customer_id === customerId)
      setAppointments(customerAppointments)
      setLoading(false)
    }, 600) // Simulate network delay

    return () => clearTimeout(timer)
  }, [customerId])

  if (loading) {
    return (
      <div className="flex justify-center py-8">
        <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
      </div>
    )
  }

  if (appointments.length === 0) {
    return <div className="text-center py-8 text-muted-foreground">No appointments scheduled with this customer.</div>
  }

  return (
    <div className="space-y-4">
      {appointments.map((appointment) => (
        <div key={appointment.id} className="flex items-start gap-4 pb-4 border-b">
          <div
            className={`mt-1 h-10 w-10 rounded-full flex items-center justify-center ${
              appointment.type === "video_meeting" ? "bg-blue-100 text-blue-600" : "bg-green-100 text-green-600"
            }`}
          >
            {appointment.type === "video_meeting" ? <Video className="h-5 w-5" /> : <Phone className="h-5 w-5" />}
          </div>
          <div className="flex-1">
            <div className="flex items-start justify-between">
              <div>
                <h4 className="font-medium">{appointment.title}</h4>
                <p className="text-sm text-muted-foreground mt-1">
                  {new Date(appointment.datetime).toLocaleString()} ({appointment.duration} min)
                </p>
                {appointment.description && <p className="text-sm mt-2">{appointment.description}</p>}
              </div>
              <div className="flex items-center gap-2">
                <div
                  className={`px-2 py-1 text-xs rounded-full ${
                    appointment.status === "scheduled"
                      ? "bg-blue-100 text-blue-700"
                      : appointment.status === "completed"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                  }`}
                >
                  {appointment.status.charAt(0).toUpperCase() + appointment.status.slice(1)}
                </div>
              </div>
            </div>
            <div className="mt-3 flex gap-2">
              {appointment.status === "scheduled" && (
                <>
                  <Button variant="outline" size="sm">
                    Reschedule
                  </Button>
                  <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700">
                    Cancel
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
