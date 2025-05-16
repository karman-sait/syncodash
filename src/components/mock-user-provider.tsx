"use client"

import { createContext, useContext, type ReactNode } from "react"

// Create a mock user object
const mockUser = {
  id: "mock-user-id",
  email: "admin@zeego.com",
  user_metadata: {
    first_name: "Admin",
    last_name: "User",
  },
}

// Create context
const MockUserContext = createContext<any>(null)

export function useMockUser() {
  const context = useContext(MockUserContext)
  if (!context) {
    throw new Error("useMockUser must be used within a MockUserProvider")
  }
  return context
}

export function MockUserProvider({ children }: { children: ReactNode }) {
  return <MockUserContext.Provider value={mockUser}>{children}</MockUserContext.Provider>
}
