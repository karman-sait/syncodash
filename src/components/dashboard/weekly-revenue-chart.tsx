"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MoreHorizontal, Phone, Plus } from "lucide-react"

// Mock data for recent calls
const recentCalls = [
  {
    id: 1,
    name: "Sarah Johnson",
    phone: "(555) 123-4567",
    date: "Today",
    time: "10:30 AM",
    duration: "4:25",
    status: "new",
    priority: "high",
  },
  {
    id: 2,
    name: "Michael Chen",
    phone: "(555) 987-6543",
    date: "Today",
    time: "9:15 AM",
    duration: "2:10",
    status: "qualified",
    priority: "medium",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    phone: "(555) 234-5678",
    date: "Yesterday",
    time: "3:45 PM",
    duration: "5:30",
    status: "followup",
    priority: "medium",
  },
  {
    id: 4,
    name: "David Kim",
    phone: "(555) 876-5432",
    date: "Yesterday",
    time: "11:20 AM",
    duration: "3:15",
    status: "new",
    priority: "low",
  },
  {
    id: 5,
    name: "Jessica Taylor",
    phone: "(555) 345-6789",
    date: "Apr 15",
    time: "2:00 PM",
    duration: "6:45",
    status: "qualified",
    priority: "high",
  },
]

export function WeeklyRevenueChart() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Recent Calls</CardTitle>
            <CardDescription>Review your latest incoming leads</CardDescription>
          </div>
          <div className="flex items-center space-x-2">
            <Select defaultValue="all">
              <SelectTrigger className="h-8 w-[130px]">
                <SelectValue placeholder="Filter by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Calls</SelectItem>
                <SelectItem value="new">New Leads</SelectItem>
                <SelectItem value="followup">Need Follow-up</SelectItem>
                <SelectItem value="qualified">Qualified</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="newest">
              <SelectTrigger className="h-8 w-[130px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest First</SelectItem>
                <SelectItem value="oldest">Oldest First</SelectItem>
                <SelectItem value="duration">Call Duration</SelectItem>
                <SelectItem value="priority">Priority</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recentCalls.map((call) => (
            <div key={call.id} className="flex items-center justify-between border-b pb-3">
              <div className="flex items-center space-x-3">
                <div
                  className={`h-2 w-2 rounded-full ${call.priority === "high" ? "bg-red-500" : call.priority === "medium" ? "bg-amber-500" : "bg-green-500"}`}
                />
                <div>
                  <div className="font-medium">{call.name}</div>
                  <div className="text-sm text-muted-foreground">{call.phone}</div>
                </div>
              </div>
              <div className="text-sm text-right">
                <div>{call.date}</div>
                <div className="text-muted-foreground">
                  {call.time} · {call.duration}
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Badge
                  variant={call.status === "new" ? "default" : call.status === "qualified" ? "secondary" : "outline"}
                >
                  {call.status}
                </Badge>
                <Button variant="ghost" size="icon">
                  <Phone className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="border-t pt-4">
        <Button variant="outline" size="sm" className="w-full">
          <Plus className="mr-2 h-4 w-4" /> Add Call Manually
        </Button>
      </CardFooter>
    </Card>
  )
}
