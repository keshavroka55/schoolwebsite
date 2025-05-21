import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Mail, Phone, ArrowLeft, Clock, Calendar, Award, BookOpen, Star } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

// Mock teacher data
const teachers = [
  {
    id: 1,
    name: "Dr. Emily Johnson",
    subject: "Mathematics",
    qualification: "Ph.D. in Applied Mathematics",
    image: "/placeholder.svg?height=500&width=500",
    email: "emily.johnson@modernschool.edu",
    phone: "+1 (123) 456-7890",
    bio: "Dr. Emily Johnson has been teaching mathematics at Modern School for over 10 years. She specializes in calculus and advanced algebra. Her research in applied mathematics has been published in several international journals. Dr. Johnson is passionate about making mathematics accessible and enjoyable for all students.",
    expertise: ["Calculus", "Linear Algebra", "Statistics", "Mathematical Modeling"],
    education: [
      "Ph.D. in Applied Mathematics, Stanford University",
      "M.Sc. in Mathematics, MIT",
      "B.Sc. in Mathematics (Honors), Columbia University",
    ],
    schedule: [
      {
        day: "Monday",
        classes: ["Grade 11 - Advanced Math (9:00 AM - 10:30 AM)", "Grade 12 - Calculus (1:00 PM - 2:30 PM)"],
      },
      { day: "Tuesday", classes: ["Grade 10 - Algebra (9:00 AM - 10:30 AM)", "Office Hours (1:00 PM - 3:00 PM)"] },
      { day: "Wednesday", classes: ["Grade 11 - Advanced Math (9:00 AM - 10:30 AM)", "Math Club (3:30 PM - 5:00 PM)"] },
      {
        day: "Thursday",
        classes: ["Grade 12 - Calculus (9:00 AM - 10:30 AM)", "Grade 9 - Pre-Algebra (1:00 PM - 2:30 PM)"],
      },
      { day: "Friday", classes: ["Research and Planning", "Individual Student Support (1:00 PM - 3:00 PM)"] },
    ],
    status: "current",
    serviceTime: "10 years (2015 - Present)",
    achievements: [
      "Teacher of the Year Award (2018, 2022)",
      "Published 5 research papers in mathematics education",
      "Led the school's mathematics team to national competition finals",
      "Developed innovative curriculum for advanced mathematics",
    ],
  },
  {
    id: 2,
    name: "Prof. Michael Chen",
    subject: "Physics",
    qualification: "M.Sc. in Theoretical Physics",
    image: "/placeholder.svg?height=500&width=500",
    email: "michael.chen@modernschool.edu",
    phone: "+1 (123) 456-7891",
    bio: "Professor Michael Chen is an accomplished physicist with a passion for teaching. Before joining Modern School, he worked in research at CERN. His innovative teaching methods combine theoretical concepts with practical experiments, helping students develop a deep understanding of physics principles.",
    expertise: ["Mechanics", "Electromagnetism", "Quantum Physics", "Astrophysics"],
    education: [
      "M.Sc. in Theoretical Physics, California Institute of Technology",
      "B.Sc. in Physics, University of Washington",
    ],
    schedule: [
      {
        day: "Monday",
        classes: ["Grade 11 - Physics (10:45 AM - 12:15 PM)", "Grade 12 - Advanced Physics (2:45 PM - 4:15 PM)"],
      },
      {
        day: "Tuesday",
        classes: ["Grade 10 - Basic Physics (10:45 AM - 12:15 PM)", "Science Club (3:30 PM - 5:00 PM)"],
      },
      {
        day: "Wednesday",
        classes: ["Grade 11 - Physics Lab (10:45 AM - 12:15 PM)", "Office Hours (2:45 PM - 4:15 PM)"],
      },
      {
        day: "Thursday",
        classes: ["Grade 12 - Advanced Physics Lab (10:45 AM - 12:15 PM)", "Faculty Meeting (3:30 PM - 5:00 PM)"],
      },
      {
        day: "Friday",
        classes: ["Grade 10 - Basic Physics (10:45 AM - 12:15 PM)", "Individual Student Support (2:45 PM - 4:15 PM)"],
      },
    ],
    status: "current",
    serviceTime: "8 years (2017 - Present)",
    achievements: [
      "Science Department Head (2020 - Present)",
      "Organized annual science fair for 5 consecutive years",
      "Mentored 3 students who received national science awards",
      "Developed partnership with local university for advanced lab access",
    ],
  },
  {
    id: 7,
    name: "Dr. Richard Brown",
    subject: "Chemistry",
    qualification: "Ph.D. in Organic Chemistry",
    image: "/placeholder.svg?height=500&width=500",
    email: "richard.brown@alumni.modernschool.edu",
    phone: "+1 (123) 456-7897",
    bio: "Dr. Richard Brown was a cornerstone of our Chemistry department for 15 years. His dedication to experimental learning transformed our science curriculum. During his tenure, he established the school's advanced chemistry lab and mentored countless students who went on to pursue careers in chemistry and related fields.",
    expertise: ["Organic Chemistry", "Biochemistry", "Analytical Chemistry", "Chemical Education"],
    education: [
      "Ph.D. in Organic Chemistry, Harvard University",
      "M.Sc. in Chemistry, Yale University",
      "B.Sc. in Chemistry, Princeton University",
    ],
    schedule: [],
    status: "past",
    serviceTime: "15 years (2000 - 2015)",
    achievements: [
      "Lifetime Achievement Award in Science Education (2015)",
      "Published chemistry textbook used in 50+ schools nationwide",
      "Established the school's annual Chemistry Olympiad",
      "Secured grants totaling over $500,000 for laboratory equipment",
    ],
  },
]

export default function TeacherProfilePage({ params }: { params: { id: string } }) {
  const teacherId = Number.parseInt(params.id)
  const teacher = teachers.find((t) => t.id === teacherId)

  if (!teacher) {
    notFound()
  }

  const isPastTeacher = teacher.status === "past"

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="container px-4 py-8 md:px-6 md:py-12">
          <Link href="/teachers" className="inline-flex items-center text-[#00F6ED] hover:underline mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to all teachers
          </Link>

          <div className="grid gap-8 md:grid-cols-3 lg:gap-12">
            <div className="flex flex-col gap-4">
              <div className="overflow-hidden rounded-xl border">
                <Image
                  src={teacher.image || "/placeholder.svg"}
                  alt={teacher.name}
                  width={500}
                  height={500}
                  className={`h-full w-full object-cover ${isPastTeacher ? "grayscale" : ""}`}
                />
              </div>
              <div className="rounded-xl border p-4">
                <h2 className="mb-2 text-xl font-bold">Contact Information</h2>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Mail className="mr-2 h-4 w-4 text-[#00F6ED]" />
                    <span>{teacher.email}</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="mr-2 h-4 w-4 text-[#00F6ED]" />
                    <span>{teacher.phone}</span>
                  </div>
                  <div className="flex items-center mt-4 pt-4 border-t">
                    <Clock className="mr-2 h-4 w-4 text-[#00F6ED]" />
                    <span className="font-medium">Service Time:</span>
                    <span className="ml-2">{teacher.serviceTime}</span>
                  </div>
                  <div className="flex items-center">
                    <BookOpen className="mr-2 h-4 w-4 text-[#00F6ED]" />
                    <span className="font-medium">Status:</span>
                    <span className="ml-2 capitalize">{teacher.status} Teacher</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-2 space-y-8">
              <div>
                <h1 className="text-3xl font-bold">{teacher.name}</h1>
                <h2 className="text-xl font-medium text-[#00F6ED]">{teacher.subject}</h2>
                <p className="text-gray-500">{teacher.qualification}</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">About</h2>
                <p className="text-gray-700">{teacher.bio}</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Areas of Expertise</h2>
                <div className="flex flex-wrap gap-2">
                  {teacher.expertise.map((skill, index) => (
                    <div key={index} className="rounded-full border bg-[#CAD8DE]/20 px-3 py-1 text-sm">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Education</h2>
                <ul className="space-y-2">
                  {teacher.education.map((edu, index) => (
                    <li key={index} className="flex items-start">
                      <Award className="mr-2 h-5 w-5 text-[#00F6ED] shrink-0 mt-0.5" />
                      <span>{edu}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Achievements</h2>
                <ul className="space-y-2">
                  {teacher.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start">
                      <Star className="mr-2 h-5 w-5 text-[#00F6ED] shrink-0 mt-0.5" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {!isPastTeacher && teacher.schedule.length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold mb-4">Weekly Schedule</h2>
                  <div className="rounded-xl border">
                    {teacher.schedule.map((day, index) => (
                      <div key={index} className={`p-4 ${index < teacher.schedule.length - 1 ? "border-b" : ""}`}>
                        <h3 className="font-bold flex items-center">
                          <Calendar className="mr-2 h-4 w-4 text-[#00F6ED]" />
                          {day.day}
                        </h3>
                        <ul className="mt-2 space-y-1 pl-6">
                          {day.classes.map((cls, idx) => (
                            <li key={idx} className="flex items-start text-gray-700">
                              <Clock className="mr-2 h-4 w-4 text-[#00F6ED] shrink-0 mt-0.5" />
                              <span>{cls}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
