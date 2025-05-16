// Mock user data
export const mockUser = {
  id: "user-1",
  email: "admin@zeego.com",
  user_metadata: {
    first_name: "Admin",
    last_name: "User",
    avatar_url: null,
  },
}

// Mock customers data
export const mockCustomers = [
  {
    id: "1",
    first_name: "John",
    last_name: "Smith",
    email: "john.smith@example.com",
    phone: "(555) 123-4567",
    company: "Acme Inc",
    lead_status: "customer",
    last_contact_date: new Date().toISOString(),
    tags: ["vip", "retail"],
    custom_fields: [],
    files: [],
    created_at: "2023-01-15T10:30:00Z",
    updated_at: "2023-04-20T14:45:00Z",
  },
  {
    id: "2",
    first_name: "Sarah",
    last_name: "Johnson",
    email: "sarah.j@example.com",
    phone: "(555) 987-6543",
    company: "Tech Solutions",
    lead_status: "qualified",
    last_contact_date: new Date().toISOString(),
    tags: ["tech", "new"],
    custom_fields: [],
    files: [],
    created_at: "2023-02-20T09:15:00Z",
    updated_at: "2023-04-18T11:30:00Z",
  },
  {
    id: "3",
    first_name: "Michael",
    last_name: "Brown",
    email: "michael.b@example.com",
    phone: "(555) 456-7890",
    company: "Brown Consulting",
    lead_status: "new",
    last_contact_date: new Date().toISOString(),
    tags: ["consulting"],
    custom_fields: [],
    files: [],
    created_at: "2023-03-10T15:45:00Z",
    updated_at: "2023-04-15T10:20:00Z",
  },
  {
    id: "4",
    first_name: "Emily",
    last_name: "Davis",
    email: "emily.d@example.com",
    phone: "(555) 234-5678",
    company: "Davis Design",
    lead_status: "contacted",
    last_contact_date: new Date().toISOString(),
    tags: ["design", "creative"],
    custom_fields: [],
    files: [],
    created_at: "2023-03-15T11:30:00Z",
    updated_at: "2023-04-10T09:45:00Z",
  },
  {
    id: "5",
    first_name: "David",
    last_name: "Wilson",
    email: "david.w@example.com",
    phone: "(555) 876-5432",
    company: "Wilson Enterprises",
    lead_status: "customer",
    last_contact_date: new Date().toISOString(),
    tags: ["enterprise", "priority"],
    custom_fields: [],
    files: [],
    created_at: "2023-02-05T14:20:00Z",
    updated_at: "2023-04-05T16:30:00Z",
  },
]

// Mock appointments data
export const mockAppointments = [
  {
    id: "1",
    customer_id: "1",
    title: "Initial Consultation",
    description: "Discuss project requirements and timeline",
    datetime: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(), // 2 days ago
    duration: 60,
    type: "in_person",
    location: "Office",
    status: "completed",
    created_at: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    updated_at: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    customers: {
      id: "1",
      first_name: "John",
      last_name: "Smith",
      email: "john.smith@example.com",
      phone: "(555) 123-4567",
    },
  },
  {
    id: "2",
    customer_id: "2",
    title: "Project Review",
    description: "Review progress and discuss next steps",
    datetime: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toISOString(), // 2 days from now
    duration: 45,
    type: "video_meeting",
    location: "Zoom",
    status: "scheduled",
    created_at: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
    updated_at: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
    customers: {
      id: "2",
      first_name: "Sarah",
      last_name: "Johnson",
      email: "sarah.j@example.com",
      phone: "(555) 987-6543",
    },
  },
  {
    id: "3",
    customer_id: "3",
    title: "Follow-up Call",
    description: "Discuss proposal and answer questions",
    datetime: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000).toISOString(), // 1 day from now
    duration: 30,
    type: "phone_call",
    location: "Phone",
    status: "scheduled",
    created_at: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
    updated_at: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
    customers: {
      id: "3",
      first_name: "Michael",
      last_name: "Brown",
      email: "michael.b@example.com",
      phone: "(555) 456-7890",
    },
  },
]

// Mock calls data
export const mockCalls = [
  {
    id: "1",
    customer_id: "1",
    timestamp: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(), // 3 days ago
    duration: 320,
    direction: "outbound",
    result: "answered",
    notes: "Discussed project timeline and requirements",
    created_at: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
    updated_at: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "2",
    customer_id: "2",
    timestamp: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(), // 1 day ago
    duration: 0,
    direction: "inbound",
    result: "missed",
    notes: "Need to call back",
    created_at: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
    updated_at: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "3",
    customer_id: "3",
    timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000).toISOString(), // 4 hours ago
    duration: 180,
    direction: "inbound",
    result: "answered",
    notes: "Initial inquiry about services",
    created_at: new Date(Date.now() - 4 * 60 * 60 * 1000).toISOString(),
    updated_at: new Date(Date.now() - 4 * 60 * 60 * 1000).toISOString(),
  },
]

// Mock auth functions
export const mockAuth = {
  getUser: () => Promise.resolve({ data: { user: mockUser }, error: null }),
  getSession: () => Promise.resolve({ data: { session: { user: mockUser } }, error: null }),
  signInWithPassword: ({ email, password }: { email: string; password: string }) => {
    if (email === "admin@zeego.com" && password === "Admin123!") {
      return Promise.resolve({ data: { user: mockUser }, error: null })
    }
    return Promise.resolve({
      data: { user: null },
      error: { message: "Invalid email or password" },
    })
  },
  signInWithOAuth: () => Promise.resolve({ error: null }),
  signUp: () => Promise.resolve({ data: { user: mockUser }, error: null }),
  resetPasswordForEmail: () => Promise.resolve({ error: null }),
  updateUser: () => Promise.resolve({ data: { user: mockUser }, error: null }),
  signOut: () => Promise.resolve({ error: null }),
}

// Mock database functions
export const mockDB = {
  // Generic query function that returns mock data based on table name
  from: (table: string) => {
    return {
      select: (columns: string) => {
        return {
          eq: (column: string, value: string) => {
            return {
              single: () => {
                if (table === "customers") {
                  const customer = mockCustomers.find((c) => c.id === value)
                  return Promise.resolve({ data: customer, error: customer ? null : { code: "PGRST116" } })
                }
                return Promise.resolve({ data: null, error: null })
              },
              order: (column: string, { ascending }: { ascending: boolean }) => {
                if (table === "calls") {
                  const calls = mockCalls.filter((c) => c.customer_id === value)
                  return Promise.resolve({ data: calls, error: null })
                }
                if (table === "appointments") {
                  const appointments = mockAppointments.filter((a) => a.customer_id === value)
                  return Promise.resolve({ data: appointments, error: null })
                }
                return Promise.resolve({ data: [], error: null })
              },
            }
          },
          order: (column: string, { ascending }: { ascending: boolean }) => {
            if (table === "customers") {
              return Promise.resolve({ data: mockCustomers, error: null })
            }
            if (table === "appointments") {
              return Promise.resolve({ data: mockAppointments, error: null })
            }
            return Promise.resolve({ data: [], error: null })
          },
        }
      },
      insert: (data: any[]) => Promise.resolve({ data, error: null }),
      update: (data: any) => Promise.resolve({ data, error: null }),
      upsert: (data: any) => Promise.resolve({ data, error: null }),
    }
  },
}

// Mock Supabase client
export const mockSupabase = {
  auth: mockAuth,
  ...mockDB,
}
