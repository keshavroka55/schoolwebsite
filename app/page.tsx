import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { GraduationCap, BookOpen, Users } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-[#00F6ED]/10 to-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl">
                  Welcome to Gumi School
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl">
                  Empowering young minds through quality education, innovation, and values.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/gallery" passHref>
                  <Button style={{ backgroundColor: "#00F6ED", color: "#000" }}>View Gallery</Button>
                </Link>
                <Link href="/notices" passHref>
                  <Button variant="outline">View Notices</Button>
                </Link>
              </div>
            </div>
            <div className="mx-auto lg:mx-0">
              <Image
                src="/placeholder.svg?height=550&width=550"
                alt="School Building"
                width={550}
                height={550}
                className="rounded-xl object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#CAD8DE]/20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Mission</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                To provide a stimulating learning environment that encourages all students to realize their full
                potential, both academically and as well-rounded citizens prepared for the challenges of an
                ever-changing world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">School Highlights</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Discover what makes our school special
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
            <div className="grid gap-1 p-6 bg-white rounded-lg shadow-sm border">
              <GraduationCap className="h-12 w-12 text-[#00F6ED]" />
              <h3 className="text-xl font-bold">Academic Excellence</h3>
              <p className="text-sm text-gray-500">
                Consistently achieving top results with innovative teaching methods
              </p>
            </div>
            <div className="grid gap-1 p-6 bg-white rounded-lg shadow-sm border">
              <Users className="h-12 w-12 text-[#00F6ED]" />
              <h3 className="text-xl font-bold">Exceptional Faculty</h3>
              <p className="text-sm text-gray-500">Experienced teachers dedicated to student success and wellbeing</p>
            </div>
            <div className="grid gap-1 p-6 bg-white rounded-lg shadow-sm border">
              <BookOpen className="h-12 w-12 text-[#00F6ED]" />
              <h3 className="text-xl font-bold">Modern Curriculum</h3>
              <p className="text-sm text-gray-500">Future-focused curriculum that balances academics and life skills</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#00F6ED]/10">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Get Started?</h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join our community of learners today
              </p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
