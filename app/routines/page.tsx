"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TableIcon, Calendar, Clock, BookOpen } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

// Mock data for class routines
const classes = ["Class 6", "Class 7", "Class 8", "Class 9", "Class 10", "Class 11", "Class 12"]

const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]

const routines = {
  "Class 6": [
    {
      day: "Monday",
      periods: [
        { time: "8:00 AM - 9:00 AM", subject: "Mathematics", teacher: "Dr. Emily Johnson" },
        { time: "9:10 AM - 10:10 AM", subject: "English", teacher: "Ms. Sarah Williams" },
        { time: "10:20 AM - 11:20 AM", subject: "Science", teacher: "Dr. Lisa Martinez" },
        { time: "11:50 AM - 12:50 PM", subject: "Social Studies", teacher: "Mr. Robert Thompson" },
        { time: "1:00 PM - 2:00 PM", subject: "Computer Science", teacher: "Mr. David Wilson" },
      ],
    },
    {
      day: "Tuesday",
      periods: [
        { time: "8:00 AM - 9:00 AM", subject: "Science", teacher: "Dr. Lisa Martinez" },
        { time: "9:10 AM - 10:10 AM", subject: "Mathematics", teacher: "Dr. Emily Johnson" },
        { time: "10:20 AM - 11:20 AM", subject: "English", teacher: "Ms. Sarah Williams" },
        { time: "11:50 AM - 12:50 PM", subject: "Physical Education", teacher: "Mr. James Anderson" },
        { time: "1:00 PM - 2:00 PM", subject: "Art", teacher: "Ms. Olivia Parker" },
      ],
    },
    {
      day: "Wednesday",
      periods: [
        { time: "8:00 AM - 9:00 AM", subject: "English", teacher: "Ms. Sarah Williams" },
        { time: "9:10 AM - 10:10 AM", subject: "Science", teacher: "Dr. Lisa Martinez" },
        { time: "10:20 AM - 11:20 AM", subject: "Mathematics", teacher: "Dr. Emily Johnson" },
        { time: "11:50 AM - 12:50 PM", subject: "Computer Science", teacher: "Mr. David Wilson" },
        { time: "1:00 PM - 2:00 PM", subject: "Social Studies", teacher: "Mr. Robert Thompson" },
      ],
    },
    {
      day: "Thursday",
      periods: [
        { time: "8:00 AM - 9:00 AM", subject: "Mathematics", teacher: "Dr. Emily Johnson" },
        { time: "9:10 AM - 10:10 AM", subject: "English", teacher: "Ms. Sarah Williams" },
        { time: "10:20 AM - 11:20 AM", subject: "Science Lab", teacher: "Dr. Lisa Martinez" },
        { time: "11:50 AM - 12:50 PM", subject: "Social Studies", teacher: "Mr. Robert Thompson" },
        { time: "1:00 PM - 2:00 PM", subject: "Music", teacher: "Ms. Rebecca Lewis" },
      ],
    },
    {
      day: "Friday",
      periods: [
        { time: "8:00 AM - 9:00 AM", subject: "Science", teacher: "Dr. Lisa Martinez" },
        { time: "9:10 AM - 10:10 AM", subject: "Mathematics", teacher: "Dr. Emily Johnson" },
        { time: "10:20 AM - 11:20 AM", subject: "English", teacher: "Ms. Sarah Williams" },
        { time: "11:50 AM - 12:50 PM", subject: "Library", teacher: "Ms. Sarah Williams" },
        { time: "1:00 PM - 2:00 PM", subject: "Computer Lab", teacher: "Mr. David Wilson" },
      ],
    },
  ],
  "Class 7": [
    // Similar structure for other classes
  ],
  // Other classes
}

export default function RoutinesPage() {
  const [selectedClass, setSelectedClass] = useState("Class 6")

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-[#00F6ED]/10 to-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Class Routines</h1>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  View the weekly class schedules for all grades
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="mb-8">
              <div className="max-w-xs mx-auto md:mx-0">
                <Select value={selectedClass} onValueChange={setSelectedClass}>
                  <SelectTrigger className="w-full bg-white shadow-none">
                    <SelectValue placeholder="Select class" />
                  </SelectTrigger>
                  <SelectContent>
                    {classes.map((className) => (
                      <SelectItem key={className} value={className}>
                        {className}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-2xl">
                    <div className="flex items-center">
                      <TableIcon className="mr-2 h-6 w-6 text-[#00F6ED]" />
                      {selectedClass} Weekly Routine
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <div className="space-y-8">
                      {routines[selectedClass as keyof typeof routines]?.map((dayRoutine) => (
                        <div key={dayRoutine.day} className="rounded-lg border p-4">
                          <h3 className="mb-4 text-xl font-bold flex items-center">
                            <Calendar className="mr-2 h-5 w-5 text-[#00F6ED]" />
                            {dayRoutine.day}
                          </h3>
                          <div className="space-y-4">
                            {dayRoutine.periods.map((period, index) => (
                              <div
                                key={index}
                                className="grid grid-cols-1 gap-2 sm:grid-cols-3 sm:gap-4 p-2 rounded-md hover:bg-gray-50"
                              >
                                <div className="flex items-center text-gray-700">
                                  <Clock className="mr-2 h-4 w-4 text-[#00F6ED] shrink-0" />
                                  <span>{period.time}</span>
                                </div>
                                <div className="flex items-center font-medium">
                                  <BookOpen className="mr-2 h-4 w-4 text-[#00F6ED] shrink-0" />
                                  <span>{period.subject}</span>
                                </div>
                                <div className="text-gray-500">{period.teacher}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 flex justify-center">
              <Button variant="outline" style={{ borderColor: "#00F6ED", color: "#00F6ED" }}>
                Download PDF Routine
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
