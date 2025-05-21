"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertTriangle, Calendar, FileText, Search, Tag } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

// Mock notice data
const notices = [
  {
    id: 1,
    title: "Annual Sports Day Announcement",
    description:
      "The Annual Sports Day will be held on July 15th. All students are requested to register for events by July 5th.",
    category: "Events",
    date: "2025-04-01",
    important: true,
  },
  {
    id: 2,
    title: "Examination Schedule for Semester 1",
    description:
      "The semester examination will commence from July 20th. Detailed schedule is available in the academic office.",
    category: "Academic",
    date: "2025-03-28",
    important: true,
  },
  {
    id: 3,
    title: "Parent-Teacher Meeting Notice",
    description:
      "A parent-teacher meeting has been scheduled for June 12th from 10:00 AM to 2:00 PM. Parents are requested to attend.",
    category: "Meetings",
    date: "2025-03-25",
    important: false,
  },
  {
    id: 4,
    title: "School Closed Due to Heavy Rain",
    description:
      "Due to the heavy rainfall prediction, the school will remain closed on June 5th, 2024. Online classes will continue as scheduled.",
    category: "Announcements",
    date: "2025-03-22",
    important: true,
  },
  {
    id: 5,
    title: "Science Exhibition Registration",
    description:
      "Registration for the annual science exhibition is now open. Students can register online or visit the science lab.",
    category: "Events",
    date: "2025-03-20",
    important: false,
  },
  {
    id: 6,
    title: "New Library Rules",
    description:
      "New library rules have been implemented from this month. Please check the library notice board for details.",
    category: "Announcements",
    date: "2025-03-15",
    important: false,
  },
  {
    id: 7,
    title: "Career Counseling Session",
    description:
      "A career counseling session will be conducted for class 10 and 12 students on May 28th in the school auditorium.",
    category: "Events",
    date: "2025-03-10",
    important: false,
  },
  {
    id: 8,
    title: "Holiday Homework Submission Date Extended",
    description: "The submission date for holiday homework has been extended to July 7th, 2024.",
    category: "Academic",
    date: "2025-03-05",
    important: false,
  },
]

const categories = ["All", "Academic", "Announcements", "Events", "Meetings"]

export default function NoticesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredNotices = notices.filter((notice) => {
    const matchesSearch =
      notice.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      notice.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "All" || notice.category === selectedCategory

    return matchesSearch && matchesCategory
  })

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-[#00F6ED]/10 to-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Notice Board</h1>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Stay updated with the latest announcements and important information
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="mb-8 grid gap-4 md:grid-cols-4">
              <div className="col-span-4 md:col-span-3">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                  <Input
                    type="search"
                    placeholder="Search notices..."
                    className="w-full bg-white pl-8 shadow-none"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-span-4 md:col-span-1">
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="w-full bg-white shadow-none">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredNotices.length > 0 ? (
                filteredNotices.map((notice) => (
                  <Card key={notice.id} className="overflow-hidden">
                    <CardHeader className="relative pb-2">
                      {notice.important && (
                        <div className="absolute right-4 top-4">
                          <AlertTriangle className="h-5 w-5 text-amber-500" />
                        </div>
                      )}
                      <CardTitle className="text-xl font-bold">{notice.title}</CardTitle>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center">
                          <Calendar className="mr-1 h-4 w-4 text-[#00F6ED]" />
                          {new Date(notice.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          })}
                        </div>
                        <div className="flex items-center">
                          <Tag className="mr-1 h-4 w-4 text-[#00F6ED]" />
                          {notice.category}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700">{notice.description}</p>
                    </CardContent>
                    <CardFooter className="pt-2">
                      <Button variant="ghost" size="sm" className="text-[#00F6ED]">
                        <FileText className="mr-2 h-4 w-4" /> Read More
                      </Button>
                    </CardFooter>
                  </Card>
                ))
              ) : (
                <div className="col-span-full text-center py-8">
                  <p className="text-lg font-medium">No notices found</p>
                  <p className="text-gray-500">Try adjusting your search or filter criteria</p>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
