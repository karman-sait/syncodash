"use client"

import { DropdownMenuTrigger } from "@/components/ui/dropdownmenu"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { SlidersHorizontal, Star, Download, Share2, MoreHorizontal, Calendar, Printer, Settings } from "lucide-react"
import { FilterDialog } from "@/components/dashboard/filter-dialog"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuCheckboxItem,
} from "@/components/ui/dropdownmenu"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, } from "@/components/ui/tooltip"

export function SettingsIsland() {
  const [filterDialogOpen, setFilterDialogOpen] = useState(false)
  const [isFavorite, setIsFavorite] = useState(false)
  const [customizeOpen, setCustomizeOpen] = useState(false)

  const [tools, setTools] = useState([
    {
      id: "filters",
      icon: SlidersHorizontal,
      label: "Filters",
      action: () => setFilterDialogOpen(true),
      visible: true,
    },
    {
      id: "favorite",
      icon: Star,
      label: "Favorite",
      action: () => setIsFavorite(!isFavorite),
      visible: true,
    },
    {
      id: "date",
      icon: Calendar,
      label: "Date Range",
      action: () => console.log("Date range"),
      visible: true,
    },
    {
      id: "export",
      icon: Download,
      label: "Export",
      action: () => console.log("Export"),
      visible: true,
    },
    {
      id: "print",
      icon: Printer,
      label: "Print",
      action: () => console.log("Print"),
      visible: true,
    },
    {
      id: "more",
      icon: MoreHorizontal,
      label: "More",
      isDropdown: true,
      visible: true,
    },
  ])

  const toggleToolVisibility = (toolId: string) => {
    setTools(tools.map((tool) => (tool.id === toolId ? { ...tool, visible: !tool.visible } : tool)))
  }

  return (
    <div className="mb-4">
      <div className="flex items-center gap-3 px-4 py-3 bg-gray-100 text-gray-800 rounded-lg shadow-sm w-fit my-4 mx-auto sm:mx-0">
        <TooltipProvider>
          {tools
            .filter((tool) => tool.visible)
            .map((tool, index) =>
              tool.isDropdown ? (
                <DropdownMenu key={tool.id}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 px-2 text-gray-800 hover:bg-gray-300 rounded-md"
                        >
                          <tool.icon className="h-4 w-4" />
                          <span className="ml-2 text-xs">{tool.label}</span>
                        </Button>
                      </DropdownMenuTrigger>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>More options</p>
                    </TooltipContent>
                  </Tooltip>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>
                      <Share2 className="mr-2 h-4 w-4" />
                      <span>Share Dashboard</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setCustomizeOpen(true)}>
                      <Settings className="mr-2 h-4 w-4" />
                      <span>Customize Tools</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Tooltip key={tool.id}>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={tool.action}
                      className={`h-8 px-2 hover:bg-gray-300 rounded-md ${
                        tool.id === "favorite" && isFavorite ? "text-yellow-500" : "text-gray-800"
                      }`}
                    >
                      <tool.icon
                        className={tool.id === "favorite" && isFavorite ? "h-4 w-4 fill-yellow-500" : "h-4 w-4"}
                      />
                      <span className="ml-2 text-xs">{tool.label}</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{tool.label}</p>
                  </TooltipContent>
                </Tooltip>
              ),
            )}
        </TooltipProvider>

        <FilterDialog open={filterDialogOpen} onOpenChange={setFilterDialogOpen} />
      </div>

      {/* Customization Dialog */}
      <DropdownMenu open={customizeOpen} onOpenChange={setCustomizeOpen}>
        <DropdownMenuContent align="start" className="w-64">
          <div className="p-2 font-medium">Customize Tools</div>
          <DropdownMenuSeparator />
          <div className="p-2">
            <div className="mb-2 font-medium text-sm">Manage Tools</div>
            {tools.map((tool) => (
              <div key={tool.id} className="flex items-center justify-between py-1">
                <DropdownMenuCheckboxItem
                  checked={tool.visible}
                  onCheckedChange={() => toggleToolVisibility(tool.id)}
                  className="flex-1"
                >
                  <tool.icon className="mr-2 h-4 w-4" />
                  {tool.label}
                </DropdownMenuCheckboxItem>
              </div>
            ))}
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
