"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { X, Star } from "lucide-react"

type FilterDialogProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function FilterDialog({ open, onOpenChange }: FilterDialogProps) {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([])
  const [dateCategory, setDateCategory] = useState("daily")
  const [fromDate, setFromDate] = useState(new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString().split("T")[0])
  const [toDate, setToDate] = useState(new Date().toISOString().split("T")[0])

  const addFilter = (filter: string) => {
    if (!selectedFilters.includes(filter)) {
      setSelectedFilters([...selectedFilters, filter])
    }
  }

  const removeFilter = (filter: string) => {
    setSelectedFilters(selectedFilters.filter((f) => f !== filter))
  }

  const clearAllFilters = () => {
    setSelectedFilters([])
    setDateCategory("daily")
    setFromDate(new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString().split("T")[0])
    setToDate(new Date().toISOString().split("T")[0])
  }

  const handleApplyFilters = () => {
    // Add date category to filters
    addFilter(`Categorize: ${dateCategory}`)
    // Add date range to filters
    addFilter(`Date: ${fromDate} to ${toDate}`)
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader className="pb-2">
          <DialogTitle className="text-xl">Filters</DialogTitle>
        </DialogHeader>

        <div className="py-2 flex flex-wrap gap-2">
          {selectedFilters.map((filter) => (
            <Badge key={filter} variant="secondary" className="flex items-center gap-1">
              {filter}
              <X className="h-3 w-3 cursor-pointer" onClick={() => removeFilter(filter)} />
            </Badge>
          ))}
          {selectedFilters.length > 0 && (
            <Button variant="ghost" size="sm" onClick={clearAllFilters} className="text-xs h-6 px-2">
              Clear all
            </Button>
          )}
        </div>

        <div className="space-y-6 py-4">
          {/* Date Categorization */}
          <div className="space-y-2">
            <Label htmlFor="date-category">1. Categorize by date</Label>
            <select
              id="date-category"
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              value={dateCategory}
              onChange={(e) => setDateCategory(e.target.value)}
            >
              <option value="hourly">Hourly</option>
              <option value="12hours">12 Hours</option>
              <option value="daily">Daily</option>
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
              <option value="annually">Annually</option>
            </select>
          </div>

          {/* Date Range */}
          <div className="space-y-4">
            <Label>2. Date Range</Label>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="date-from">From</Label>
                <input
                  type="date"
                  id="date-from"
                  value={fromDate}
                  onChange={(e) => setFromDate(e.target.value)}
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="date-to">To</Label>
                <input
                  type="date"
                  id="date-to"
                  value={toDate}
                  onChange={(e) => setToDate(e.target.value)}
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                />
              </div>
            </div>
          </div>
        </div>

        <DialogFooter className="flex justify-between pt-2">
          <Button variant="outline" className="flex items-center gap-2" onClick={() => console.log("Add to favorites")}>
            <Star className="h-4 w-4" />
            Add Favorite
          </Button>
          <div className="flex gap-2">
            <Button variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button className="bg-zeego hover:bg-zeego-light" onClick={handleApplyFilters}>
              Apply Filters
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
