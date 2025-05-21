"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { ArrowLeft, Calendar, Camera, Download, Share2, Tag } from "lucide-react"

// Mock album data
const albums = {
  "graduation-2024": {
    id: "graduation-2024",
    title: "Graduation Ceremony 2024",
    category: "events",
    date: "June 15, 2024",
    description:
      "Celebrating the achievements of our graduating class of 2024. The ceremony was held in the school auditorium with parents, teachers, and distinguished guests in attendance. Students received their diplomas and special awards were presented for academic excellence, leadership, and community service.",
    coverImage: "/placeholder.svg?height=600&width=800",
    images: Array.from({ length: 12 }, (_, i) => ({
      id: i + 1,
      src: `/placeholder.svg?height=800&width=1200&text=Graduation+Photo+${i + 1}`,
      caption: `Graduation ceremony moment ${i + 1}`,
      tags: ["graduation", "class-of-2024", "ceremony"],
    })),
  },
  "alumni-reunion-2023": {
    id: "alumni-reunion-2023",
    title: "Alumni Reunion 2023",
    category: "alumni",
    date: "December 10, 2023",
    description:
      "Former students from the classes of 1990-2000 gathered for a memorable reunion. The event included campus tours, a formal dinner, and presentations about the school's history and future plans. Alumni shared stories about their time at the school and how it shaped their careers and lives.",
    coverImage: "/placeholder.svg?height=600&width=800",
    images: Array.from({ length: 15 }, (_, i) => ({
      id: i + 1,
      src: `/placeholder.svg?height=800&width=1200&text=Alumni+Reunion+Photo+${i + 1}`,
      caption: `Alumni reunion moment ${i + 1}`,
      tags: ["alumni", "reunion", "memories"],
    })),
  },
  "science-fair-2023": {
    id: "science-fair-2023",
    title: "Science Fair 2023",
    category: "achievements",
    date: "November 5, 2023",
    description:
      "Our students showcasing their innovative science projects and experiments. The annual science fair featured projects in physics, chemistry, biology, environmental science, and technology. Several projects received recognition from visiting scientists and educators from local universities.",
    coverImage: "/placeholder.svg?height=600&width=800",
    images: Array.from({ length: 10 }, (_, i) => ({
      id: i + 1,
      src: `/placeholder.svg?height=800&width=1200&text=Science+Fair+Photo+${i + 1}`,
      caption: `Science fair project ${i + 1}`,
      tags: ["science", "projects", "innovation"],
    })),
  },
  "first-graduating-class": {
    id: "first-graduating-class",
    title: "First Graduating Class (1985)",
    category: "alumni",
    date: "June 20, 1985",
    description:
      "Historic photos of the first batch of students to graduate from Modern School. These photographs represent an important milestone in our school's history, showing the pioneering students who set the foundation for our academic tradition. Many of these alumni have gone on to distinguished careers and continue to support the school.",
    coverImage: "/placeholder.svg?height=600&width=800",
    images: Array.from({ length: 8 }, (_, i) => ({
      id: i + 1,
      src: `/placeholder.svg?height=800&width=1200&text=Historic+Photo+${i + 1}`,
      caption: `First graduating class photo ${i + 1}`,
      tags: ["history", "first-batch", "graduation"],
    })),
  },
  "school-foundation": {
    id: "school-foundation",
    title: "School Foundation Day",
    category: "events",
    date: "March 15, 1980",
    description:
      "Rare photographs from the school's foundation ceremony. These images capture the inaugural ceremony when our school was officially established, showing the founding members, the original campus, and the first cohort of students and teachers. These photographs are an important part of our institutional heritage.",
    coverImage: "/placeholder.svg?height=600&width=800",
    images: Array.from({ length: 6 }, (_, i) => ({
      id: i + 1,
      src: `/placeholder.svg?height=800&width=1200&text=Foundation+Photo+${i + 1}`,
      caption: `School foundation ceremony photo ${i + 1}`,
      tags: ["history", "foundation", "ceremony"],
    })),
  },
}

// For other album IDs not specifically defined
const defaultAlbum = {
  title: "Photo Album",
  category: "events",
  date: "2023",
  description: "A collection of photos from this event.",
  coverImage: "/placeholder.svg?height=600&width=800",
  images: Array.from({ length: 8 }, (_, i) => ({
    id: i + 1,
    src: `/placeholder.svg?height=800&width=1200&text=Photo+${i + 1}`,
    caption: `Photo ${i + 1}`,
    tags: ["school", "event"],
  })),
}

export default function AlbumPage() {
  const params = useParams()
  const albumId = params.albumId as string

  const album = albums[albumId as keyof typeof albums] || { ...defaultAlbum, id: albumId }

  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="w-full py-12 md:py-16 bg-gradient-to-b from-[#00F6ED]/10 to-white">
          <div className="container px-4 md:px-6">
            <Link href="/gallery" className="inline-flex items-center text-[#00F6ED] hover:underline mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Gallery
            </Link>

            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="md:w-1/3">
                <div className="rounded-lg overflow-hidden">
                  <Image
                    src={album.coverImage || "/placeholder.svg"}
                    alt={album.title}
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>

              <div className="md:w-2/3 space-y-4">
                <h1 className="text-3xl font-bold">{album.title}</h1>

                <div className="flex flex-wrap gap-3 text-sm text-gray-500">
                  <div className="flex items-center">
                    <Calendar className="mr-1 h-4 w-4 text-[#00F6ED]" />
                    <span>{album.date}</span>
                  </div>
                  <div className="flex items-center">
                    <Tag className="mr-1 h-4 w-4 text-[#00F6ED]" />
                    <span className="capitalize">{album.category.replace("-", " ")}</span>
                  </div>
                  <div className="flex items-center">
                    <Camera className="mr-1 h-4 w-4 text-[#00F6ED]" />
                    <span>{album.images.length} photos</span>
                  </div>
                </div>

                <p className="text-gray-700">{album.description}</p>

                <div className="flex flex-wrap gap-2">
                  <Button variant="outline" size="sm" className="gap-1">
                    <Share2 className="h-4 w-4" /> Share
                  </Button>
                  <Button variant="outline" size="sm" className="gap-1">
                    <Download className="h-4 w-4" /> Download All
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl font-bold mb-6">Photos ({album.images.length})</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {album.images.map((image, index) => (
                <Dialog key={image.id}>
                  <DialogTrigger asChild>
                    <div
                      className="cursor-pointer rounded-lg overflow-hidden border bg-background hover:shadow-md transition-shadow"
                      onClick={() => setSelectedImage(index)}
                    >
                      <div className="aspect-[4/3] overflow-hidden">
                        <Image
                          src={image.src || "/placeholder.svg"}
                          alt={image.caption}
                          width={1200}
                          height={800}
                          className="w-full h-full object-cover hover:scale-105 transition-transform"
                        />
                      </div>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-4xl">
                    <div className="grid gap-4 py-4">
                      <div className="relative">
                        <Image
                          src={image.src || "/placeholder.svg"}
                          alt={image.caption}
                          width={1200}
                          height={800}
                          className="w-full h-auto rounded-lg"
                        />
                      </div>
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="text-sm text-gray-700">{image.caption}</p>
                          <div className="mt-2 flex flex-wrap gap-2">
                            {image.tags.map((tag) => (
                              <span
                                key={tag}
                                className="inline-flex items-center rounded-full bg-[#CAD8DE]/20 px-2.5 py-0.5 text-xs font-medium"
                              >
                                #{tag}
                              </span>
                            ))}
                          </div>
                        </div>
                        <Button variant="outline" size="sm" className="gap-1">
                          <Download className="h-4 w-4" /> Download
                        </Button>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              ))}
            </div>

            {album.images.length > 20 && (
              <div className="mt-8 flex justify-center">
                <Button variant="outline" className="mx-2">
                  Load More Photos
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* Related Albums Section */}
        <section className="w-full py-12 bg-[#CAD8DE]/10">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl font-bold mb-6">Related Albums</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {Object.values(albums)
                .filter((a) => a.id !== albumId && a.category === album.category)
                .slice(0, 3)
                .map((relatedAlbum) => (
                  <Link
                    key={relatedAlbum.id}
                    href={`/gallery/${relatedAlbum.id}`}
                    className="group overflow-hidden rounded-lg border bg-background shadow-sm transition-all hover:shadow-md"
                  >
                    <div className="aspect-[4/3] overflow-hidden">
                      <Image
                        src={relatedAlbum.coverImage || "/placeholder.svg"}
                        alt={relatedAlbum.title}
                        width={600}
                        height={400}
                        className="h-full w-full object-cover transition-all group-hover:scale-105"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium">{relatedAlbum.title}</h3>
                      <div className="mt-1 flex items-center text-xs text-gray-500">
                        <Calendar className="mr-1 h-3 w-3" />
                        <span>{relatedAlbum.date}</span>
                        <span className="mx-1">•</span>
                        <Camera className="mr-1 h-3 w-3" />
                        <span>{relatedAlbum.images.length} photos</span>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
