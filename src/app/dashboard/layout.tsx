// app/dashboard/layout.tsx
export const dynamic = 'force-dynamic'   // stops static prerender for children

import type React from "react"
import { Sidebar } from "@/components/dashboard/sidebar"
import { Header } from "@/components/dashboard/header"
import { MockUserProvider } from "@/components/mock-user-provider"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <MockUserProvider>
      <div className="flex h-screen flex-col">
        <Header />

        {/* —— content area —— */}
        <div className="flex flex-1 overflow-hidden bg-gray-50">
          <Sidebar />

          {/* note the switch to overflow-y-auto so the grid can scroll */}
          <main className="relative flex-1 overflow-y-auto">
            {/* slim accent bar */}
            <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-[#228B22] to-teal-500" />

            {/* max-width container */}
            <div className="mx-auto flex h-full max-w-7xl flex-col px-4 pb-10 pt-6 sm:px-6 lg:px-8">
              <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                <div>
                  <h2 className="text-sm font-medium text-gray-500">
                    Smart Lead Management
                  </h2>
                  <p className="flex items-center gap-2 text-sm text-gray-400">
                    <span className="text-[#228B22]">Dashboard</span>/
                    {new Date().toLocaleDateString("en-US", {
                      weekday: "long",
                      month: "short",
                      day: "numeric",
                    })}
                  </p>
                </div>

                <p className="hidden text-sm text-gray-500 md:block">
                  <span className="font-medium">Active Leads:</span> 24&nbsp;•&nbsp;
                  <span className="font-medium">Today’s Appointments:</span> 8
                </p>
              </div>

              {/* make the white panel independently scroll too */}
              <div className="flex-1 overflow-y-auto rounded-2xl bg-white shadow-sm ring-1 ring-gray-100">
                {children}
              </div>
            </div>
          </main>
        </div>
      </div>
    </MockUserProvider>
  )
}
