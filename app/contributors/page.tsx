import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Code, DollarSign, Heart, Mail, Users } from "lucide-react"

// Mock contributors data
const financialContributors = [
  {
    id: 1,
    name: "John Anderson",
    image: "/placeholder.svg?height=300&width=300",
    role: "Alumni & Major Donor",
    contribution: "$25,000",
    year: "2024",
    description: "Funded the new computer lab and digital learning resources.",
    contact: "john.anderson@example.com",
  },
  {
    id: 2,
    name: "Sarah Williams Foundation",
    image: "/placeholder.svg?height=300&width=300",
    role: "Educational Foundation",
    contribution: "$50,000",
    year: "2023",
    description: "Provided scholarships for 20 underprivileged students and funded the library expansion.",
    contact: "grants@swfoundation.org",
  },
  {
    id: 3,
    name: "Robert & Emily Johnson",
    image: "/placeholder.svg?height=300&width=300",
    role: "Parents",
    contribution: "$15,000",
    year: "2023",
    description: "Contributed to the sports facilities renovation project.",
    contact: "johnson.family@example.com",
  },
  {
    id: 4,
    name: "TechFuture Inc.",
    image: "/placeholder.svg?height=300&width=300",
    role: "Corporate Sponsor",
    contribution: "$35,000",
    year: "2022",
    description: "Provided technology equipment and sponsored the annual science fair.",
    contact: "community@techfuture.com",
  },
  {
    id: 5,
    name: "Alumni Association",
    image: "/placeholder.svg?height=300&width=300",
    role: "Alumni Group",
    contribution: "$20,000",
    year: "2022",
    description: "Collective contribution for campus beautification and scholarship fund.",
    contact: "alumni@modernschool.edu",
  },
]

const websiteContributors = [
  {
    id: 1,
    name: "Michael Chen",
    image: "/placeholder.svg?height=300&width=300",
    role: "Lead Developer",
    contribution: "Website Architecture & Development",
    year: "2023-Present",
    description:
      "Designed and developed the school website architecture, implemented responsive design and core functionality.",
    contact: "michael.chen@example.com",
  },
  {
    id: 2,
    name: "Sophia Rodriguez",
    image: "/placeholder.svg?height=300&width=300",
    role: "UI/UX Designer",
    contribution: "Website Design & User Experience",
    year: "2023-Present",
    description: "Created the visual design, user interface components, and overall user experience of the website.",
    contact: "sophia.r@example.com",
  },
  {
    id: 3,
    name: "David Wilson",
    image: "/placeholder.svg?height=300&width=300",
    role: "Content Manager",
    contribution: "Content Creation & Management",
    year: "2023-Present",
    description:
      "Manages website content, updates information, and coordinates with departments for accurate representation.",
    contact: "david.wilson@modernschool.edu",
  },
  {
    id: 4,
    name: "Emma Thompson",
    image: "/placeholder.svg?height=300&width=300",
    role: "Photography Contributor",
    contribution: "School Photography & Gallery Management",
    year: "2023-Present",
    description: "Provides professional photography for school events and manages the online gallery.",
    contact: "emma.t@example.com",
  },
  {
    id: 5,
    name: "James Parker",
    image: "/placeholder.svg?height=300&width=300",
    role: "Technical Support",
    contribution: "Server Management & Technical Maintenance",
    year: "2023-Present",
    description: "Manages the website hosting, security, and technical maintenance.",
    contact: "james.parker@example.com",
  },
]

const volunteerContributors = [
  {
    id: 1,
    name: "Student Technology Club",
    image: "/placeholder.svg?height=300&width=300",
    role: "Student Group",
    contribution: "Content Creation & Technical Support",
    year: "2023-Present",
    description:
      "A group of students who help create content, test new features, and provide technical support for school events.",
    contact: "techclub@modernschool.edu",
  },
  {
    id: 2,
    name: "Parent-Teacher Association",
    image: "/placeholder.svg?height=300&width=300",
    role: "Community Group",
    contribution: "Event Coverage & Content Review",
    year: "2023-Present",
    description:
      "PTA members who help document school events, review website content, and provide feedback for improvements.",
    contact: "pta@modernschool.edu",
  },
]

// Annual updates data
const annualUpdates = [
  {
    year: "2024",
    updates: [
      "Redesigned the gallery section with album functionality",
      "Added contributors recognition page",
      "Improved mobile responsiveness across all pages",
      "Enhanced accessibility features for users with disabilities",
      "Integrated social media sharing capabilities",
    ],
    contributors: ["Michael Chen", "Sophia Rodriguez", "Student Technology Club"],
  },
  {
    year: "2023",
    updates: [
      "Initial website launch with core functionality",
      "Created teachers, notices, and class routines sections",
      "Implemented basic gallery features",
      "Established content management system",
      "Set up hosting and security infrastructure",
    ],
    contributors: ["Michael Chen", "Sophia Rodriguez", "David Wilson", "James Parker"],
  },
]

export default function ContributorsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-[#00F6ED]/10 to-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Contributors</h1>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Recognizing the generous individuals and organizations who help make our school and website possible.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <Tabs defaultValue="website" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList className="grid w-full max-w-md grid-cols-3">
                  <TabsTrigger value="website">Website Team</TabsTrigger>
                  <TabsTrigger value="financial">Financial Donors</TabsTrigger>
                  <TabsTrigger value="volunteer">Volunteers</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="website" className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {websiteContributors.map((contributor) => (
                    <Card key={contributor.id} className="overflow-hidden">
                      <div className="aspect-square max-h-64 overflow-hidden">
                        <Image
                          src={contributor.image || "/placeholder.svg"}
                          alt={contributor.name}
                          width={300}
                          height={300}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardHeader className="pb-2">
                        <CardTitle>{contributor.name}</CardTitle>
                        <CardDescription>{contributor.role}</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        <div className="flex items-start">
                          <Code className="mr-2 h-4 w-4 text-[#00F6ED] mt-1" />
                          <div>
                            <p className="font-medium">Contribution:</p>
                            <p className="text-sm text-gray-500">{contributor.contribution}</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <Calendar className="mr-2 h-4 w-4 text-[#00F6ED] mt-1" />
                          <div>
                            <p className="font-medium">Period:</p>
                            <p className="text-sm text-gray-500">{contributor.year}</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <Mail className="mr-2 h-4 w-4 text-[#00F6ED] mt-1" />
                          <div>
                            <p className="font-medium">Contact:</p>
                            <p className="text-sm text-gray-500">{contributor.contact}</p>
                          </div>
                        </div>
                        <p className="text-sm text-gray-700 mt-2">{contributor.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="financial" className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {financialContributors.map((contributor) => (
                    <Card key={contributor.id} className="overflow-hidden">
                      <div className="aspect-square max-h-64 overflow-hidden">
                        <Image
                          src={contributor.image || "/placeholder.svg"}
                          alt={contributor.name}
                          width={300}
                          height={300}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardHeader className="pb-2">
                        <CardTitle>{contributor.name}</CardTitle>
                        <CardDescription>{contributor.role}</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        <div className="flex items-start">
                          <DollarSign className="mr-2 h-4 w-4 text-[#00F6ED] mt-1" />
                          <div>
                            <p className="font-medium">Contribution:</p>
                            <p className="text-sm text-gray-500">{contributor.contribution}</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <Calendar className="mr-2 h-4 w-4 text-[#00F6ED] mt-1" />
                          <div>
                            <p className="font-medium">Year:</p>
                            <p className="text-sm text-gray-500">{contributor.year}</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <Mail className="mr-2 h-4 w-4 text-[#00F6ED] mt-1" />
                          <div>
                            <p className="font-medium">Contact:</p>
                            <p className="text-sm text-gray-500">{contributor.contact}</p>
                          </div>
                        </div>
                        <p className="text-sm text-gray-700 mt-2">{contributor.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="volunteer" className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {volunteerContributors.map((contributor) => (
                    <Card key={contributor.id} className="overflow-hidden">
                      <div className="aspect-square max-h-64 overflow-hidden">
                        <Image
                          src={contributor.image || "/placeholder.svg"}
                          alt={contributor.name}
                          width={300}
                          height={300}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardHeader className="pb-2">
                        <CardTitle>{contributor.name}</CardTitle>
                        <CardDescription>{contributor.role}</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        <div className="flex items-start">
                          <Heart className="mr-2 h-4 w-4 text-[#00F6ED] mt-1" />
                          <div>
                            <p className="font-medium">Contribution:</p>
                            <p className="text-sm text-gray-500">{contributor.contribution}</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <Calendar className="mr-2 h-4 w-4 text-[#00F6ED] mt-1" />
                          <div>
                            <p className="font-medium">Period:</p>
                            <p className="text-sm text-gray-500">{contributor.year}</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <Mail className="mr-2 h-4 w-4 text-[#00F6ED] mt-1" />
                          <div>
                            <p className="font-medium">Contact:</p>
                            <p className="text-sm text-gray-500">{contributor.contact}</p>
                          </div>
                        </div>
                        <p className="text-sm text-gray-700 mt-2">{contributor.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Annual Website Updates Section */}
        <section className="w-full py-12 md:py-24 bg-[#CAD8DE]/10">
          <div className="container px-4 md:px-6">
            <div className="mb-10">
              <h2 className="text-3xl font-bold tracking-tight">Annual Website Updates</h2>
              <p className="mt-2 text-gray-500">A record of improvements and changes made to our website each year</p>
            </div>

            <div className="space-y-12">
              {annualUpdates.map((update) => (
                <div key={update.year} className="rounded-lg border bg-background p-6 shadow-sm">
                  <h3 className="text-2xl font-bold mb-4 flex items-center">
                    <Calendar className="mr-2 h-5 w-5 text-[#00F6ED]" />
                    {update.year} Updates
                  </h3>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-lg font-medium mb-3">Key Improvements</h4>
                      <ul className="space-y-2">
                        {update.updates.map((item, index) => (
                          <li key={index} className="flex items-start">
                            <Code className="mr-2 h-4 w-4 text-[#00F6ED] mt-1" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-medium mb-3">Contributors</h4>
                      <div className="flex items-start">
                        <Users className="mr-2 h-4 w-4 text-[#00F6ED] mt-1" />
                        <div>
                          {update.contributors.map((person, index) => (
                            <span
                              key={index}
                              className="inline-block mr-2 mb-2 rounded-full bg-[#CAD8DE]/20 px-2.5 py-0.5 text-sm"
                            >
                              {person}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Become a Contributor CTA */}
        <section className="w-full py-12 md:py-24 bg-[#00F6ED]/10">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tight">Become a Contributor</h2>
            <p className="mt-4 max-w-[700px] mx-auto text-gray-700">
              Interested in contributing to our school or website? We welcome financial donations, technical expertise,
              content creation, and volunteer support. Your contributions help us maintain and improve our educational
              resources.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-[#00F6ED] px-4 py-2 text-sm font-medium text-black shadow transition-colors hover:bg-[#00F6ED]/90 focus-visible:outline-none focus-visible:ring-1"
              >
                Contact Us
              </a>
              <a
                href="/donate"
                className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1"
              >
                Make a Donation
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
