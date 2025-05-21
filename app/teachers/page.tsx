import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Mail, Clock, Calendar } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Mock teacher data
const currentTeachers = [
  {
    id: 1,
    name: "Harka Bhahadur Chettri",
    subject: "English Subject",
    qualification: "Ph.D. in English Literature",
    image: "/harka.jpg?height=400&width=400",
    email: "emily.johnson@modernschool.edu",
    serviceTime: "10 years (2015 - Present)",
  },
  // {
  //   id: 2,
  //   name: "Prof. Michael Chen",
  //   subject: "Physics",
  //   qualification: "M.Sc. in Theoretical Physics",
  //   image: "/placeholder.svg?height=400&width=400",
  //   email: "michael.chen@modernschool.edu",
  //   serviceTime: "8 years (2017 - Present)",
  // },
  // {
  //   id: 3,
  //   name: "Ms. Sarah Williams",
  //   subject: "English Literature",
  //   qualification: "M.A. in English Literature",
  //   image: "/placeholder.svg?height=400&width=400",
  //   email: "sarah.williams@modernschool.edu",
  //   serviceTime: "5 years (2020 - Present)",
  // },
  // {
  //   id: 4,
  //   name: "Mr. Robert Thompson",
  //   subject: "History",
  //   qualification: "M.Phil in World History",
  //   image: "/placeholder.svg?height=400&width=400",
  //   email: "robert.thompson@modernschool.edu",
  //   serviceTime: "7 years (2018 - Present)",
  // },
  // {
  //   id: 5,
  //   name: "Dr. Lisa Martinez",
  //   subject: "Biology",
  //   qualification: "Ph.D. in Molecular Biology",
  //   image: "/placeholder.svg?height=400&width=400",
  //   email: "lisa.martinez@modernschool.edu",
  //   serviceTime: "6 years (2019 - Present)",
  // },
  // {
  //   id: 6,
  //   name: "Mr. David Wilson",
  //   subject: "Computer Science",
  //   qualification: "M.S. in Computer Science",
  //   image: "/placeholder.svg?height=400&width=400",
  //   email: "david.wilson@modernschool.edu",
  //   serviceTime: "4 years (2021 - Present)",
  // },
]

const pastTeachers = [
  {
    id: 7,
    name: "Min Bahadur Gurung",
    subject: "English & Health",
    qualification: "M.Sc. in English & Health",
    image: "/placeholder.svg?height=400&width=400",
    email: "richard.brown@alumni.modernschool.edu",
    serviceTime: "15 years (2000 - 2015)",
  },
  // {
  //   id: 8,
  //   name: "Mrs. Jennifer Adams",
  //   subject: "Mathematics",
  //   qualification: "M.Sc. in Mathematics",
  //   image: "/placeholder.svg?height=400&width=400",
  //   email: "jennifer.adams@alumni.modernschool.edu",
  //   serviceTime: "20 years (1995 - 2015)",
  // },
  // {
  //   id: 9,
  //   name: "Prof. Thomas Clark",
  //   subject: "Physics",
  //   qualification: "Ph.D. in Astrophysics",
  //   image: "/placeholder.svg?height=400&width=400",
  //   email: "thomas.clark@alumni.modernschool.edu",
  //   serviceTime: "12 years (2005 - 2017)",
  // },
  // {
  //   id: 10,
  //   name: "Ms. Elizabeth Turner",
  //   subject: "Art & Design",
  //   qualification: "M.F.A. in Fine Arts",
  //   image: "/placeholder.svg?height=400&width=400",
  //   email: "elizabeth.turner@alumni.modernschool.edu",
  //   serviceTime: "10 years (2008 - 2018)",
  // },
]

export default function TeachersPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-[#00F6ED]/10 to-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Teachers</h1>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Meet our dedicated and experienced teaching staff who inspire our students every day.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <Tabs defaultValue="current" className="w-full mb-8">
              <div className="flex justify-center mb-8">
                <TabsList className="grid w-full max-w-md grid-cols-2">
                  <TabsTrigger value="current">Current Teachers</TabsTrigger>
                  <TabsTrigger value="past">Past Teachers</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="current">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
                  {currentTeachers.map((teacher) => (
                    <Link
                      key={teacher.id}
                      href={`/teachers/${teacher.id}`}
                      className="group relative overflow-hidden rounded-lg border bg-background p-2 transition-all hover:shadow-md"
                    >
                      <div className="aspect-square overflow-hidden rounded-md">
                        <Image
                          src={teacher.image || "/placeholder.svg"}
                          alt={teacher.name}
                          width={400}
                          height={400}
                          className="h-full w-full object-cover transition-all group-hover:scale-105"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold text-xl tracking-tight">{teacher.name}</h3>
                        <h4 className="font-medium text-[#00F6ED]">{teacher.subject}</h4>
                        <p className="text-sm text-gray-500 mt-1">{teacher.qualification}</p>
                        <div className="flex items-center mt-3 text-sm text-gray-500">
                          <Mail className="mr-2 h-4 w-4" />
                          <span>{teacher.email}</span>
                        </div>
                        <div className="flex items-center mt-2 text-sm text-gray-500">
                          <Clock className="mr-2 h-4 w-4" />
                          <span>{teacher.serviceTime}</span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="past">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
                  {pastTeachers.map((teacher) => (
                    <Link
                      key={teacher.id}
                      href={`/teachers/${teacher.id}`}
                      className="group relative overflow-hidden rounded-lg border bg-background p-2 transition-all hover:shadow-md"
                    >
                      <div className="aspect-square overflow-hidden rounded-md">
                        <Image
                          src={teacher.image || "/placeholder.svg"}
                          alt={teacher.name}
                          width={400}
                          height={400}
                          className="h-full w-full object-cover transition-all group-hover:scale-105 grayscale"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold text-xl tracking-tight">{teacher.name}</h3>
                        <h4 className="font-medium text-[#00F6ED]">{teacher.subject}</h4>
                        <p className="text-sm text-gray-500 mt-1">{teacher.qualification}</p>
                        <div className="flex items-center mt-3 text-sm text-gray-500">
                          <Mail className="mr-2 h-4 w-4" />
                          <span>{teacher.email}</span>
                        </div>
                        <div className="flex items-center mt-2 text-sm text-gray-500">
                          <Calendar className="mr-2 h-4 w-4" />
                          <span>{teacher.serviceTime}</span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
