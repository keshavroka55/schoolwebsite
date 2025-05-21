"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Calendar, Camera, Tag, ImageIcon } from "lucide-react"

// Mock gallery albums data
const albumCategories = [
  { id: "all", name: "All Albums     " },

  //{ id: "alumni", name: "Alumni" },

  //{ id: "events", name: "School Events" },
  //{ id: "trips", name: "School Trips" },
  //{ id: "achievements", name: "Achievements" },
  //{ id: "campus", name: "Campus Life" },
]

const albums = [
  {
    id: "graduation-2024",
    title: "Graduation Ceremony 2024",
    category: "events",
    date: "June 15, 2024",
    description: "Celebrating the achievements of our graduating class of 2024.",
    coverImage: "/placeholder.svg?height=600&width=800",
    imageCount: 42,
    featured: true,
  },
  {
    id: "alumni-reunion-2023",
    title: "Alumni Reunion 2023",
    category: "alumni",
    date: "December 10, 2023",
    description: "Former students from the classes of 1990-2000 gathered for a memorable reunion.",
    coverImage: "/placeholder.svg?height=600&width=800",
    imageCount: 78,
    featured: true,
  },
  {
    id: "science-fair-2023",
    title: "Science Fair 2023",
    category: "achievements",
    date: "November 5, 2023",
    description: "Our students showcasing their innovative science projects and experiments.",
    coverImage: "/placeholder.svg?height=600&width=800",
    imageCount: 56,
    featured: false,
  },
  {
    id: "museum-trip-2023",
    title: "Natural History Museum Trip",
    category: "trips",
    date: "October 12, 2023",
    description: "Educational excursion to the Natural History Museum for grades 8-10.",
    coverImage: "/placeholder.svg?height=600&width=800",
    imageCount: 65,
    featured: false,
  },
  {
    id: "sports-day-2023",
    title: "Annual Sports Day 2023",
    category: "events",
    date: "September 25, 2023",
    description: "A day of athletic competitions, team sports, and physical activities.",
    coverImage: "/placeholder.svg?height=600&width=800",
    imageCount: 120,
    featured: true,
  },
  {
    id: "class-2010-reunion",
    title: "Class of 2010 Reunion",
    category: "alumni",
    date: "August 20, 2023",
    description: "Alumni from the class of 2010 visiting their alma mater after 13 years.",
    coverImage: "/placeholder.svg?height=600&width=800",
    imageCount: 45,
    featured: false,
  },
  {
    id: "science-lab-inauguration",
    title: "New Science Lab Inauguration",
    category: "campus",
    date: "July 15, 2022",
    description: "Opening ceremony of our state-of-the-art science laboratory.",
    coverImage: "/placeholder.svg?height=600&width=800",
    imageCount: 32,
    featured: false,
  },
  {
    id: "japan-exchange-2022",
    title: "Japan Exchange Program 2022",
    category: "trips",
    date: "May 10-24, 2022",
    description: "Our students during their visit to Japan as part of the international exchange program.",
    coverImage: "/placeholder.svg?height=600&width=800",
    imageCount: 95,
    featured: true,
  },
  {
    id: "cultural-day-2022",
    title: "Cultural Day Performances",
    category: "events",
    date: "April 5, 2022",
    description: "Students showcasing diverse cultural performances during the annual cultural day.",
    coverImage: "/placeholder.svg?height=600&width=800",
    imageCount: 87,
    featured: false,
  },
  {
    id: "math-olympiad-2021",
    title: "Math Olympiad 2021",
    category: "achievements",
    date: "November 12, 2021",
    description: "Our mathematics team competing and winning at the Regional Math Olympiad.",
    coverImage: "/placeholder.svg?height=600&width=800",
    imageCount: 28,
    featured: false,
  },
  {
    id: "first-graduating-class",
    title: "First Graduating Class (1985)",
    category: "alumni",
    date: "June 20, 1985",
    description: "Historic photos of the first batch of students to graduate from Modern School.",
    coverImage: "/placeholder.svg?height=600&width=800",
    imageCount: 15,
    featured: true,
  },
  {
    id: "school-foundation",
    title: "School Foundation Day",
    category: "events",
    date: "March 15, 1980",
    description: "Rare photographs from the school's foundation ceremony.",
    coverImage: "/placeholder.svg?height=600&width=800",
    imageCount: 12,
    featured: true,
  },
]

// Years for filtering
const years = ["All Years", "2024", "2023", "2022", "2021", "2020", "Before 2020"]

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedYear, setSelectedYear] = useState("All Years")

  // Filter albums based on selected category
  const filteredAlbums = albums.filter((album) => {
    const matchesCategory = selectedCategory === "all" || album.category === selectedCategory

    // Extract year from date
    const albumYear = new Date(album.date).getFullYear().toString()
    const matchesYear =
      selectedYear === "All Years" ||
      (selectedYear === "Before 2020" ? Number.parseInt(albumYear) < 2020 : albumYear === selectedYear)

    return matchesCategory && matchesYear
  })

  // Featured albums
  const featuredAlbums = albums.filter((album) => album.featured).slice(0, 3)

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-[#00F6ED]/10 to-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">School Memories</h1>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  A collection of memorable moments from our school's history, alumni gatherings, and special events.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Albums Section */}
        <section className="w-full py-12 bg-[#CAD8DE]/10">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl font-bold mb-8">Featured Albums</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredAlbums.map((album) => (
                <Link
                  key={album.id}
                  href={`/gallery/${album.id}`}
                  className="group overflow-hidden rounded-lg border bg-background shadow-sm transition-all hover:shadow-md"
                >
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <Image
                      src={album.coverImage || "/placeholder.svg"}
                      alt={album.title}
                      width={800}
                      height={600}
                      className="h-full w-full object-cover transition-all group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button variant="secondary" className="font-medium">
                        View Album
                      </Button>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg">{album.title}</h3>
                    <div className="flex items-center mt-1 text-sm text-gray-500">
                      <Calendar className="mr-1 h-4 w-4" />
                      <span>{album.date}</span>
                      <span className="mx-2">•</span>
                      <ImageIcon className="mr-1 h-4 w-4" />
                      <span>{album.imageCount} photos</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-16">
          <div className="container px-4 md:px-6">
            {/* Filters */}
            <div className="mb-8 flex flex-col md:flex-row gap-4 justify-between">
              <Tabs
                defaultValue="all"
                value={selectedCategory}
                onValueChange={setSelectedCategory}
                className="w-full md:max-w-md"
              >
                <TabsList className="grid grid-cols-3 md:grid-cols-6">
                  {albumCategories.map((category) => (
                    <TabsTrigger key={category.id} value={category.id}>
                      {category.name}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>

              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4 text-gray-500" />
                <select
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  {years.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Albums Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredAlbums.length > 0 ? (
                filteredAlbums.map((album) => (
                  <Link
                    key={album.id}
                    href={`/gallery/${album.id}`}
                    className="group overflow-hidden rounded-lg border bg-background shadow-sm transition-all hover:shadow-md"
                  >
                    <div className="aspect-[4/3] overflow-hidden relative">
                      <Image
                        src={album.coverImage || "/placeholder.svg"}
                        alt={album.title}
                        width={800}
                        height={600}
                        className="h-full w-full object-cover transition-all group-hover:scale-105"
                      />
                      <div className="absolute bottom-0 right-0 bg-black/70 text-white text-xs px-2 py-1 rounded-tl-md">
                        {album.imageCount} photos
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium line-clamp-1">{album.title}</h3>
                      <div className="mt-1 flex items-center text-xs text-gray-500">
                        <Calendar className="mr-1 h-3 w-3" />
                        <span>{album.date}</span>
                        <span className="mx-1">•</span>
                        <Tag className="mr-1 h-3 w-3" />
                        <span className="capitalize">{album.category.replace("-", " ")}</span>
                      </div>
                      <p className="mt-2 text-sm text-gray-500 line-clamp-2">{album.description}</p>
                      <div className="mt-3 text-[#00F6ED] text-sm font-medium group-hover:underline">View album</div>
                    </div>
                  </Link>
                ))
              ) : (
                <div className="col-span-full flex flex-col items-center justify-center py-12 text-center">
                  <Camera className="h-12 w-12 text-gray-400 mb-4" />
                  <h3 className="text-lg font-medium">No albums found</h3>
                  <p className="text-gray-500 mt-1">Try adjusting your filters to see more results</p>
                </div>
              )}
            </div>

            {/* Navigation buttons for larger collections */}
            {filteredAlbums.length > 12 && (
              <div className="mt-8 flex justify-center">
                <Button variant="outline" className="mx-2">
                  Previous
                </Button>
                <Button variant="outline" className="mx-2">
                  Next
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* Share Your Memories CTA */}
        <section className="w-full py-12 md:py-24 bg-[#00F6ED]/10">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tight">Save Our Memories</h2>
            <p className="mt-4 max-w-[700px] mx-auto text-gray-700">
              Are you have an alumnus or memorable photos from school events? We'd love to add your memories to our
              gallery. Share your photos and stories with us to help preserve our school's rich history.
            </p>
            {/* <Button className="mt-6" style={{ backgroundColor: "#00F6ED", color: "#000" }}>
              Submit Your Photos
            </Button> */}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
