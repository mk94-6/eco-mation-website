"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import Link from "next/link"
import { ChevronDown, Menu, X, Check, BarChart3, Target, TrendingUp, Zap, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"
import { sendEmail } from "@/app/actions"

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Animation refs
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [aboutRef, aboutInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [servicesRef, servicesInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [technologyRef, technologyInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [businessRef, businessInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [sdgRef, sdgInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [objectivesRef, objectivesInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [challengesRef, challengesInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [financialRef, financialInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [teamRef, teamInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [contactRef, contactInView] = useInView({ triggerOnce: true, threshold: 0.1 })

  // Smooth scroll function
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setMobileMenuOpen(false)
    }
  }

  // Handle email submission
  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!email.trim() || !message.trim()) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    try {
      await sendEmail({ email, message })
      toast({
        title: "Success",
        description: "Your message has been sent!",
      })
      setEmail("")
      setMessage("")
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Image src="/eco-logo.png" alt="Eco-mation Logo" width={40} height={40} className="mr-2" />
            <span className="text-xl font-bold text-green-600">Eco-mation</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            <button
              onClick={() => scrollToSection("home")}
              className="text-gray-700 hover:text-green-600 transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-700 hover:text-green-600 transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-gray-700 hover:text-green-600 transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("technology")}
              className="text-gray-700 hover:text-green-600 transition-colors"
            >
              Technology
            </button>
            <button
              onClick={() => scrollToSection("business")}
              className="text-gray-700 hover:text-green-600 transition-colors"
            >
              Business
            </button>
            <button
              onClick={() => scrollToSection("sdg")}
              className="text-gray-700 hover:text-green-600 transition-colors"
            >
              SDGs
            </button>
            <button
              onClick={() => scrollToSection("objectives")}
              className="text-gray-700 hover:text-green-600 transition-colors"
            >
              Objectives
            </button>
            <button
              onClick={() => scrollToSection("challenges")}
              className="text-gray-700 hover:text-green-600 transition-colors"
            >
              Challenges
            </button>
            <button
              onClick={() => scrollToSection("financial")}
              className="text-gray-700 hover:text-green-600 transition-colors"
            >
              Financial
            </button>
            <button
              onClick={() => scrollToSection("team")}
              className="text-gray-700 hover:text-green-600 transition-colors"
            >
              Team
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-700 hover:text-green-600 transition-colors"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-700" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white"
          >
            <div className="flex flex-col space-y-4 px-4 py-6">
              <button
                onClick={() => scrollToSection("home")}
                className="text-gray-700 hover:text-green-600 py-2 transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-700 hover:text-green-600 py-2 transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-gray-700 hover:text-green-600 py-2 transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("technology")}
                className="text-gray-700 hover:text-green-600 py-2 transition-colors"
              >
                Technology
              </button>
              <button
                onClick={() => scrollToSection("business")}
                className="text-gray-700 hover:text-green-600 py-2 transition-colors"
              >
                Business
              </button>
              <button
                onClick={() => scrollToSection("sdg")}
                className="text-gray-700 hover:text-green-600 py-2 transition-colors"
              >
                SDGs
              </button>
              <button
                onClick={() => scrollToSection("objectives")}
                className="text-gray-700 hover:text-green-600 py-2 transition-colors"
              >
                Objectives
              </button>
              <button
                onClick={() => scrollToSection("challenges")}
                className="text-gray-700 hover:text-green-600 py-2 transition-colors"
              >
                Challenges
              </button>
              <button
                onClick={() => scrollToSection("financial")}
                className="text-gray-700 hover:text-green-600 py-2 transition-colors"
              >
                Financial
              </button>
              <button
                onClick={() => scrollToSection("team")}
                className="text-gray-700 hover:text-green-600 py-2 transition-colors"
              >
                Team
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-700 hover:text-green-600 py-2 transition-colors"
              >
                Contact
              </button>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <motion.section
        id="home"
        ref={heroRef}
        initial="hidden"
        animate={heroInView ? "visible" : "hidden"}
        variants={fadeInUp}
        className="pt-24 pb-16 md:pt-32 md:pb-24 px-4 bg-gradient-to-b from-green-50 to-white"
      >
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-green-600 mb-4">
                Smart Farming for a Sustainable Future
              </motion.h1>
              <motion.p variants={fadeInUp} className="text-lg text-gray-600 mb-6">
                We provide innovative automation solutions that reduce environmental impact, increase efficiency, and
                transform Egyptian agriculture into a tech-driven sector.
              </motion.p>
              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={() => scrollToSection("services")}
                  className="bg-green-600 hover:bg-green-700 text-white"
                >
                  Our Services
                </Button>
                <Button
                  onClick={() => scrollToSection("contact")}
                  variant="outline"
                  className="border-green-600 text-green-600 hover:bg-green-50"
                >
                  Contact Us
                </Button>
              </motion.div>
            </div>
            <motion.div variants={fadeInUp} className="md:w-1/2 flex justify-center">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/idea.jpg-73XaufgLOVNFdL9gwK2yOUWmNN0iTl.jpeg"
                alt="Agricultural Automation"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="flex justify-center mt-12"
          >
            <button
              onClick={() => scrollToSection("about")}
              className="flex flex-col items-center text-gray-500 hover:text-green-600 transition-colors"
            >
              <span className="mb-2">Learn More</span>
              <ChevronDown className="animate-bounce" />
            </button>
          </motion.div>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section
        id="about"
        ref={aboutRef}
        initial="hidden"
        animate={aboutInView ? "visible" : "hidden"}
        variants={staggerContainer}
        className="py-16 px-4 bg-white"
      >
        <div className="container mx-auto">
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-center text-green-600 mb-12">
            About Eco-mation
          </motion.h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <motion.div variants={fadeInUp} className="md:w-1/2">
              <Image
                src="/about-eco.png"
                alt="About Eco-mation"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </motion.div>
            <motion.div variants={fadeInUp} className="md:w-1/2">
              <h3 className="text-2xl font-semibold text-green-600 mb-4">Our Mission</h3>
              <p className="text-gray-600 mb-6">
                At Eco-mation, we're revolutionizing Egyptian agriculture through advanced technology. Our mission is to
                improve crop monitoring, enhance agricultural processes, and advance land reclamation through innovative
                automation solutions.
              </p>
              <p className="text-gray-600 mb-6">
                We develop multifunctional autonomous tractors equipped with sensors and cameras that monitor crops
                24/7, detecting and solving problems without human error. This leads to perfect agricultural processes
                in less time and optimal crop monitoring under any condition throughout the year.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">20%</h4>
                  <p className="text-sm text-gray-600">Yield Increase</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">50%</h4>
                  <p className="text-sm text-gray-600">Cost Reduction</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">90%</h4>
                  <p className="text-sm text-gray-600">Monitoring Accuracy</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">24/7</h4>
                  <p className="text-sm text-gray-600">Autonomous Operation</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section
        id="services"
        ref={servicesRef}
        initial="hidden"
        animate={servicesInView ? "visible" : "hidden"}
        variants={staggerContainer}
        className="py-16 px-4 bg-green-50"
      >
        <div className="container mx-auto">
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-center text-green-600 mb-12">
            Our Services
          </motion.h2>
          <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div variants={fadeInUp} className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-green-600 mb-2">Autonomous Farming</h3>
              <p className="text-gray-600 mb-4">
                Our AI-powered autonomous tractors can perform multiple agricultural tasks simultaneously, reducing
                labor dependency and human error.
              </p>
              <ul className="text-gray-600 space-y-2 mb-4">
                <li className="flex items-center">
                  <svg className="h-4 w-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Plowing and seeding automation
                </li>
                <li className="flex items-center">
                  <svg className="h-4 w-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  24/7 operation capability
                </li>
                <li className="flex items-center">
                  <svg className="h-4 w-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Multi-functional capabilities
                </li>
              </ul>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-green-600 mb-2">Crop Monitoring</h3>
              <p className="text-gray-600 mb-4">
                Our advanced sensors and cameras provide 24/7 monitoring of crop conditions, detecting problems early
                and providing solutions automatically.
              </p>
              <ul className="text-gray-600 space-y-2 mb-4">
                <li className="flex items-center">
                  <svg className="h-4 w-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Real-time crop health analysis
                </li>
                <li className="flex items-center">
                  <svg className="h-4 w-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Early disease detection
                </li>
                <li className="flex items-center">
                  <svg className="h-4 w-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Automated problem resolution
                </li>
              </ul>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-green-600 mb-2">Land Reclamation</h3>
              <p className="text-gray-600 mb-4">
                Our technology helps improve land reclamation efforts, making previously unusable land productive
                through precision agriculture techniques.
              </p>
              <ul className="text-gray-600 space-y-2 mb-4">
                <li className="flex items-center">
                  <svg className="h-4 w-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Soil analysis and improvement
                </li>
                <li className="flex items-center">
                  <svg className="h-4 w-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Precision resource application
                </li>
                <li className="flex items-center">
                  <svg className="h-4 w-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Sustainable land development
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Technology Section */}
      <motion.section
        id="technology"
        ref={technologyRef}
        initial="hidden"
        animate={technologyInView ? "visible" : "hidden"}
        variants={staggerContainer}
        className="py-16 px-4 bg-white"
      >
        <div className="container mx-auto">
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-center text-green-600 mb-12">
            Our Technology
          </motion.h2>

          <motion.div variants={fadeInUp} className="mb-16">
            <h3 className="text-2xl font-semibold text-green-600 mb-6 text-center">Agricultural Automation Systems</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-gray-600 mb-4">
                  Our autonomous agricultural robots are designed to revolutionize farming practices. These systems can
                  work 24/7 in various conditions, performing multiple tasks simultaneously with precision and
                  efficiency.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>AI-powered decision making for optimal resource usage</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Drone integration for aerial monitoring and assessment</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Autonomous navigation and obstacle avoidance</span>
                  </li>
                </ul>
              </div>
              <div className="flex justify-center">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/idea.jpg-73XaufgLOVNFdL9gwK2yOUWmNN0iTl.jpeg"
                  alt="Agricultural Robot"
                  width={500}
                  height={300}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="mb-16">
            <h3 className="text-2xl font-semibold text-green-600 mb-6 text-center">Prototype Development</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1 flex justify-center">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/protype.jpg-frhO7lHWjbjan5g4nli6qf6JmzIBVM.jpeg"
                  alt="Initial Prototype"
                  width={500}
                  height={300}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="order-1 md:order-2">
                <p className="text-gray-600 mb-4">
                  Our initial prototype features a robust platform with multiple wheels for stability and
                  maneuverability across various terrains. The design prioritizes durability and adaptability for
                  agricultural environments.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Modular design for easy maintenance and upgrades</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>All-terrain capability for various farming conditions</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Weather-resistant construction for year-round operation</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h3 className="text-2xl font-semibold text-green-600 mb-6 text-center">Advanced Robotic System</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-gray-600 mb-4">
                  Our future prototype incorporates advanced robotics with precise control systems. The detailed
                  technical design includes multiple axes of movement, allowing for complex agricultural operations with
                  high precision.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Multi-axis control for precise movement and operations</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Stepper motors for accurate positioning and control</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>End effector system for various agricultural tasks</span>
                  </li>
                </ul>
              </div>
              <div className="flex justify-center">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/future%20protype.jpg-2QWRTta1iU0CkLnhXXxO4eZ2HqJDri.jpeg"
                  alt="Advanced Robotic System"
                  width={500}
                  height={300}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Business Brief Section */}
      <motion.section
        id="business"
        ref={businessRef}
        initial="hidden"
        animate={businessInView ? "visible" : "hidden"}
        variants={staggerContainer}
        className="py-16 px-4 bg-green-50"
      >
        <div className="container mx-auto">
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-center text-green-600 mb-12">
            Business Brief
          </motion.h2>

          <motion.div variants={fadeInUp} className="mb-16">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold text-green-600 mb-6">SWOT Analysis</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-green-50 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold text-green-700 mb-4">Strengths</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                      <span>Innovative technology reduces human errors</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                      <span>Highly scalable solution</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                      <span>First AI-powered farming solution in Egypt</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-red-50 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold text-red-700 mb-4">Weaknesses</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <X className="h-5 w-5 text-red-600 mr-2 mt-0.5" />
                      <span>High initial cost</span>
                    </li>
                    <li className="flex items-start">
                      <X className="h-5 w-5 text-red-600 mr-2 mt-0.5" />
                      <span>Requires farmer education</span>
                    </li>
                    <li className="flex items-start">
                      <X className="h-5 w-5 text-red-600 mr-2 mt-0.5" />
                      <span>Technology adoption barriers</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold text-blue-700 mb-4">Opportunities</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <TrendingUp className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                      <span>Rising demand for sustainable farming</span>
                    </li>
                    <li className="flex items-start">
                      <TrendingUp className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                      <span>Government support for agricultural innovation</span>
                    </li>
                    <li className="flex items-start">
                      <TrendingUp className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                      <span>Growing agricultural robotics market (projected $20B by 2030)</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-amber-50 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold text-amber-700 mb-4">Threats</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Shield className="h-5 w-5 text-amber-600 mr-2 mt-0.5" />
                      <span>Competition from traditional farming methods</span>
                    </li>
                    <li className="flex items-start">
                      <Shield className="h-5 w-5 text-amber-600 mr-2 mt-0.5" />
                      <span>Resistance to new technology adoption</span>
                    </li>
                    <li className="flex items-start">
                      <Shield className="h-5 w-5 text-amber-600 mr-2 mt-0.5" />
                      <span>Competitive market with emerging players</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="mb-16">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold text-green-600 mb-6">SMART Goals</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-green-50 p-6 rounded-lg text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="h-8 w-8 text-green-600" />
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">Development</h4>
                  <p className="text-gray-600">Develop & deploy multiple systems within 2 years</p>
                </div>
                <div className="bg-green-50 p-6 rounded-lg text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BarChart3 className="h-8 w-8 text-green-600" />
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">Accuracy</h4>
                  <p className="text-gray-600">90% crop monitoring accuracy with IoT sensors</p>
                </div>
                <div className="bg-green-50 p-6 rounded-lg text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="h-8 w-8 text-green-600" />
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">Partnerships</h4>
                  <p className="text-gray-600">Partner with 10 agricultural cooperatives in year one</p>
                </div>
                <div className="bg-green-50 p-6 rounded-lg text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="h-8 w-8 text-green-600" />
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">Profitability</h4>
                  <p className="text-gray-600">Reach break-even within 2 years of operation</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold text-green-600 mb-6">Target Customers</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="border border-green-200 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-green-700 mb-3">Large-Scale Farms</h4>
                  <p className="text-gray-600">Commercial farms seeking efficiency and automation</p>
                </div>
                <div className="border border-green-200 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-green-700 mb-3">Hydroponic Farms</h4>
                  <p className="text-gray-600">Modern farms with controlled environments</p>
                </div>
                <div className="border border-green-200 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-green-700 mb-3">Government Projects</h4>
                  <p className="text-gray-600">Agricultural development initiatives</p>
                </div>
                <div className="border border-green-200 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-green-700 mb-3">Land Reclamation</h4>
                  <p className="text-gray-600">Projects converting desert to arable land</p>
                </div>
                <div className="border border-green-200 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-green-700 mb-3">Agribusiness Companies</h4>
                  <p className="text-gray-600">Companies seeking technological advantage</p>
                </div>
                <div className="border border-green-200 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-green-700 mb-3">Hotels & Resorts</h4>
                  <p className="text-gray-600">Establishments with private farms</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Sustainable Development Goals Section */}
      <motion.section
        id="sdg"
        ref={sdgRef}
        initial="hidden"
        animate={sdgInView ? "visible" : "hidden"}
        variants={staggerContainer}
        className="py-16 px-4 bg-white"
      >
        <div className="container mx-auto">
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-center text-green-600 mb-12">
            Sustainable Development Goals
          </motion.h2>

          <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-yellow-500 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-yellow-600 font-bold text-xl">2</span>
                </div>
                <h3 className="text-xl font-semibold text-green-600">Zero Hunger</h3>
              </div>
              <p className="text-gray-600">Improve food security through efficient agricultural automation</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-red-500 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-red-600 font-bold text-xl">8</span>
                </div>
                <h3 className="text-xl font-semibold text-green-600">Decent Work</h3>
              </div>
              <p className="text-gray-600">Create skilled jobs in the agricultural technology sector</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-bold text-xl">9</span>
                </div>
                <h3 className="text-xl font-semibold text-green-600">Industry & Innovation</h3>
              </div>
              <p className="text-gray-600">Advance smart farming technology in Egypt and beyond</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-amber-500 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-amber-600 font-bold text-xl">12</span>
                </div>
                <h3 className="text-xl font-semibold text-green-600">Responsible Production</h3>
              </div>
              <p className="text-gray-600">Optimize resource use through precision agriculture</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-green-600 font-bold text-xl">13</span>
                </div>
                <h3 className="text-xl font-semibold text-green-600">Climate Action</h3>
              </div>
              <p className="text-gray-600">Reduce environmental impact of agricultural practices</p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Objectives Section */}
      <motion.section
        id="objectives"
        ref={objectivesRef}
        initial="hidden"
        animate={objectivesInView ? "visible" : "hidden"}
        variants={staggerContainer}
        className="py-16 px-4 bg-green-50"
      >
        <div className="container mx-auto">
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-center text-green-600 mb-12">
            Our Objectives
          </motion.h2>

          <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-green-600"></div>
              <h3 className="text-xl font-semibold text-green-600 mb-4">Increase Agricultural Efficiency</h3>
              <p className="text-gray-600">
                Leverage AI-powered automation to significantly improve farming efficiency, reducing waste and
                maximizing yield.
              </p>
              <div className="mt-6 flex items-center">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                  <svg
                    className="w-5 h-5 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className="text-gray-700">20% yield increase target</span>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-green-600"></div>
              <h3 className="text-xl font-semibold text-green-600 mb-4">Reduce Labor Dependency</h3>
              <p className="text-gray-600">
                Address labor shortages in agriculture through autonomous systems that can operate 24/7 without human
                intervention.
              </p>
              <div className="mt-6 flex items-center">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                  <svg
                    className="w-5 h-5 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className="text-gray-700">50% labor cost reduction</span>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-green-600"></div>
              <h3 className="text-xl font-semibold text-green-600 mb-4">Optimize Resource Usage</h3>
              <p className="text-gray-600">
                Use AI analysis to optimize water, fertilizer, and seed usage, creating more sustainable farming
                practices.
              </p>
              <div className="mt-6 flex items-center">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                  <svg
                    className="w-5 h-5 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className="text-gray-700">40% water usage reduction</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Challenges & Risks Section */}
      <motion.section
        id="challenges"
        ref={challengesRef}
        initial="hidden"
        animate={challengesInView ? "visible" : "hidden"}
        variants={staggerContainer}
        className="py-16 px-4 bg-white"
      >
        <div className="container mx-auto">
          <motion.div variants={fadeInUp} className="flex justify-center mb-12">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-WZNDUwqvRFRbMIgCnMwyNbDOzfW3du.png"
              alt="Challenges & Risks"
              width={600}
              height={120}
              className="max-w-full"
            />
          </motion.div>

          <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200 hover:border-green-300 transition-colors">
              <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg
                  className="w-8 h-8 text-red-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center text-gray-800 mb-4">High Initial Cost</h3>
              <p className="text-gray-600 text-center mb-4">
                The advanced technology requires significant upfront investment, which may be prohibitive for small
                farmers.
              </p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-medium text-green-700 mb-2">Our Solution:</h4>
                <p className="text-gray-600">
                  Offer flexible leasing models and financing options to make our technology accessible to farms of all
                  sizes.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200 hover:border-green-300 transition-colors">
              <div className="w-16 h-16 bg-amber-50 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg
                  className="w-8 h-8 text-amber-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center text-gray-800 mb-4">Technology Adoption Barriers</h3>
              <p className="text-gray-600 text-center mb-4">
                Traditional farmers may be resistant to adopting new technologies due to unfamiliarity or skepticism.
              </p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-medium text-green-700 mb-2">Our Solution:</h4>
                <p className="text-gray-600">
                  Implement comprehensive training programs and demonstrations to build trust and showcase tangible
                  benefits.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200 hover:border-green-300 transition-colors">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg
                  className="w-8 h-8 text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center text-gray-800 mb-4">Competitive Market</h3>
              <p className="text-gray-600 text-center mb-4">
                As agricultural technology advances, competition from both local and international players is
                increasing.
              </p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-medium text-green-700 mb-2">Our Solution:</h4>
                <p className="text-gray-600">
                  Focus on continuous innovation, localized solutions for Egyptian agriculture, and exceptional customer
                  support.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Financial Section */}
      <motion.section
        id="financial"
        ref={financialRef}
        initial="hidden"
        animate={financialInView ? "visible" : "hidden"}
        variants={staggerContainer}
        className="py-16 px-4 bg-green-50"
      >
        <div className="container mx-auto">
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-center text-green-600 mb-12">
            Financial Plan
          </motion.h2>

          <motion.div variants={fadeInUp} className="mb-16">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-green-100">
              <h3 className="text-2xl font-semibold text-green-600 mb-6">Financial Highlights</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-4">Key Metrics</h4>
                  <div className="overflow-x-auto">
                    <table className="min-w-full bg-white rounded-lg overflow-hidden">
                      <thead className="bg-green-100">
                        <tr>
                          <th className="py-3 px-4 text-left font-semibold text-gray-700">Metric</th>
                          <th className="py-3 px-4 text-right font-semibold text-gray-700">Value (EGP)</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr>
                          <td className="py-3 px-4 text-gray-700">Total Initial Investment</td>
                          <td className="py-3 px-4 text-right font-medium text-gray-900">350,000</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4 text-gray-700">3-Year Net Profit</td>
                          <td className="py-3 px-4 text-right font-medium text-gray-900">2,266,000</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4 text-gray-700">ROI</td>
                          <td className="py-3 px-4 text-right font-medium text-green-600">677%</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4 text-gray-700">Payback Period</td>
                          <td className="py-3 px-4 text-right font-medium text-gray-900">1.4 Years</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-4">Investment Breakdown</h4>
                  <div className="overflow-x-auto">
                    <table className="min-w-full bg-white rounded-lg overflow-hidden">
                      <thead className="bg-green-100">
                        <tr>
                          <th className="py-3 px-4 text-left font-semibold text-gray-700">Component</th>
                          <th className="py-3 px-4 text-right font-semibold text-gray-700">Cost (EGP)</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr>
                          <td className="py-3 px-4 text-gray-700">Hardware (Lasers, Sensors)</td>
                          <td className="py-3 px-4 text-right font-medium text-gray-900">147,000</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4 text-gray-700">Manufacturing</td>
                          <td className="py-3 px-4 text-right font-medium text-gray-900">106,000</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4 text-gray-700">First-Year Operations</td>
                          <td className="py-3 px-4 text-right font-medium text-gray-900">97,000</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4 font-medium text-gray-900">Total</td>
                          <td className="py-3 px-4 text-right font-medium text-green-600">350,000</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="mb-16">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-green-100">
              <h3 className="text-2xl font-semibold text-green-600 mb-6">Profit Projections</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white rounded-lg overflow-hidden">
                  <thead className="bg-green-100">
                    <tr>
                      <th className="py-3 px-4 text-left font-semibold text-gray-700">Year</th>
                      <th className="py-3 px-4 text-right font-semibold text-gray-700">Revenue (EGP)</th>
                      <th className="py-3 px-4 text-right font-semibold text-gray-700">Expenses (EGP)</th>
                      <th className="py-3 px-4 text-right font-semibold text-gray-700">Net Profit (EGP)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="py-3 px-4 text-gray-700">2027</td>
                      <td className="py-3 px-4 text-right font-medium text-gray-900">300,000</td>
                      <td className="py-3 px-4 text-right font-medium text-gray-900">194,000</td>
                      <td className="py-3 px-4 text-right font-medium text-green-600">106,000</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-gray-700">2028</td>
                      <td className="py-3 px-4 text-right font-medium text-gray-900">900,000</td>
                      <td className="py-3 px-4 text-right font-medium text-gray-900">240,000</td>
                      <td className="py-3 px-4 text-right font-medium text-green-600">660,000</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-gray-700">2029</td>
                      <td className="py-3 px-4 text-right font-medium text-gray-900">1,800,000</td>
                      <td className="py-3 px-4 text-right font-medium text-gray-900">300,000</td>
                      <td className="py-3 px-4 text-right font-medium text-green-600">1,500,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <div className="bg-white p-8 rounded-xl shadow-lg border border-green-100">
              <h3 className="text-2xl font-semibold text-green-600 mb-6">Revenue Model</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-green-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-green-700 mb-3">Robot Sales</h4>
                  <p className="text-gray-700 mb-2">Direct sales of autonomous farming robots</p>
                  <p className="text-lg font-medium text-green-600">EGP 300,000 - 900,000 per unit</p>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-green-700 mb-3">Subscription Model</h4>
                  <p className="text-gray-700 mb-2">Monthly service and monitoring fees</p>
                  <p className="text-lg font-medium text-green-600">EGP 1,500 - 4,500 per month</p>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-green-700 mb-3">Maintenance & Parts</h4>
                  <p className="text-gray-700 mb-2">Ongoing service and replacement parts</p>
                  <p className="text-lg font-medium text-green-600">EGP 15,000 - 60,000 per year</p>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-green-700 mb-3">Customization</h4>
                  <p className="text-gray-700 mb-2">Tailored solutions for specific farm needs</p>
                  <p className="text-lg font-medium text-green-600">EGP 60,000 - 150,000 per upgrade</p>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-green-700 mb-3">Leasing Model</h4>
                  <p className="text-gray-700 mb-2">Flexible leasing options for farmers</p>
                  <p className="text-lg font-medium text-green-600">EGP 15,000 - 30,000 per month</p>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-green-700 mb-3">Cost Savings</h4>
                  <p className="text-gray-700 mb-2">Traditional vs Smart Farming (per acre)</p>
                  <p className="text-lg font-medium text-green-600">EGP 7,800 savings per acre</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Team Section */}
      <motion.section
        id="team"
        ref={teamRef}
        initial="hidden"
        animate={teamInView ? "visible" : "hidden"}
        variants={staggerContainer}
        className="py-16 px-4 bg-white"
      >
        <div className="container mx-auto">
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-center text-green-600 mb-12">
            Our Team
          </motion.h2>

          <motion.div variants={fadeInUp} className="mb-16">
            <h3 className="text-2xl font-semibold text-green-600 mb-8 text-center">Leadership</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="flex flex-col items-center transform transition-transform duration-300 hover:scale-105">
                <div className="relative mb-6">
                  <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-green-500">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/eslam%20hassan-vg53uqjynEEmqyGmDk8SghELRHJ43J.png"
                      alt="Eslam Hassan"
                      width={200}
                      height={200}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                    CEO
                  </div>
                </div>
                <h4 className="text-xl font-semibold text-gray-800">Eslam Hassan</h4>
                <p className="text-gray-600 text-center mt-2 max-w-xs">
                  Leads our vision and strategic direction with expertise in agricultural technology.
                </p>
              </div>

              <div className="flex flex-col items-center transform transition-transform duration-300 hover:scale-105">
                <div className="relative mb-6">
                  <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-green-500">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/moahmed%20wael-sDoplXTrs43i1O3Ko4lTcxiqgkLxO5.png"
                      alt="Mohamed Wael"
                      width={200}
                      height={200}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                    VP
                  </div>
                </div>
                <h4 className="text-xl font-semibold text-gray-800">Mohamed Wael</h4>
                <p className="text-gray-600 text-center mt-2 max-w-xs">
                  Oversees operations and product development with a focus on innovation.
                </p>
              </div>

              <div className="flex flex-col items-center transform transition-transform duration-300 hover:scale-105">
                <div className="relative mb-6">
                  <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-green-500">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mohamed%20bahaa-pR2WHn5pNNqR5f2Fi8NO26bs4mnppk.png"
                      alt="Mohamed Bahaa"
                      width={200}
                      height={200}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                    COO
                  </div>
                </div>
                <h4 className="text-xl font-semibold text-gray-800">Mohamed Bahaa</h4>
                <p className="text-gray-600 text-center mt-2 max-w-xs">
                  Manages day-to-day operations and supply chain logistics.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h3 className="text-2xl font-semibold text-green-600 mb-8 text-center">Executive Team</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="flex flex-col items-center transform transition-transform duration-300 hover:scale-105">
                <div className="relative mb-6">
                  <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-green-500">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Moustafa%20Kamal-GzEbbso781EuRmP7kmzPLDGzJIziTa.png"
                      alt="Moustafa Kamal"
                      width={200}
                      height={200}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                    CIO
                  </div>
                </div>
                <h4 className="text-xl font-semibold text-gray-800">Moustafa Kamal</h4>
                <p className="text-gray-600 text-center mt-2 max-w-xs">
                  Leads our technology development and robotics innovation.
                </p>
              </div>

              <div className="flex flex-col items-center transform transition-transform duration-300 hover:scale-105">
                <div className="relative mb-6">
                  <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-green-500">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mohamed%20taha-18MQ8khaBQ3w3nC7rbhxOG364kmcJl.png"
                      alt="Mohamed Taha"
                      width={200}
                      height={200}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                    CMO
                  </div>
                </div>
                <h4 className="text-xl font-semibold text-gray-800">Mohamed Taha</h4>
                <p className="text-gray-600 text-center mt-2 max-w-xs">
                  Directs our marketing strategy and customer relationships.
                </p>
              </div>

              <div className="flex flex-col items-center transform transition-transform duration-300 hover:scale-105">
                <div className="relative mb-6">
                  <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-green-500">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sama%20fekry-RKHKzV8Rb14GGGjqNycQiawpEbzH59.png"
                      alt="Sama Fekry"
                      width={200}
                      height={200}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                    CHRO
                  </div>
                </div>
                <h4 className="text-xl font-semibold text-gray-800">Sama Fekry</h4>
                <p className="text-gray-600 text-center mt-2 max-w-xs">
                  Manages our human resources and organizational development.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="mt-12 text-center">
            <p className="text-gray-600">
              Our team combines expertise in agricultural science, robotics, AI, and business management to deliver
              innovative solutions for sustainable farming.
            </p>
            <Button
              onClick={() => scrollToSection("contact")}
              variant="outline"
              className="mt-6 border-green-600 text-green-600 hover:bg-green-50"
            >
              Get in Touch With Our Team
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        ref={contactRef}
        initial="hidden"
        animate={contactInView ? "visible" : "hidden"}
        variants={staggerContainer}
        className="py-16 px-4 bg-green-50"
      >
        <div className="container mx-auto">
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-center text-green-600 mb-12">
            Contact Us
          </motion.h2>
          <div className="flex flex-col md:flex-row gap-8">
            <motion.div variants={fadeInUp} className="md:w-1/2">
              <h3 className="text-2xl font-semibold text-green-600 mb-4">Get in Touch</h3>
              <p className="text-gray-600 mb-6">
                Have questions about our agricultural automation solutions or want to learn how we can help transform
                your farming operations? Reach out to us!
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-green-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Phone</h4>
                    <p className="text-gray-600">01022240982</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-green-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Email</h4>
                    <p className="text-gray-600">ecomationfarm@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-green-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Address</h4>
                    <p className="text-gray-600">Cairo, Egypt</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div variants={fadeInUp} className="md:w-1/2">
              <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    required
                    className="w-full"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="How can we help you?"
                    required
                    className="w-full min-h-[150px]"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-8 md:mb-0">
              <div className="flex items-center mb-4">
                <Image src="/eco-logo.png" alt="Eco-mation Logo" width={40} height={40} className="mr-2" />
                <span className="text-xl font-bold text-green-400">Eco-mation</span>
              </div>
              <p className="text-gray-400 max-w-xs">
                Smart Farming for a Sustainable Future. Transforming Egyptian agriculture through innovative automation
                solutions.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li>
                    <button
                      onClick={() => scrollToSection("home")}
                      className="text-gray-400 hover:text-green-400 transition-colors"
                    >
                      Home
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => scrollToSection("about")}
                      className="text-gray-400 hover:text-green-400 transition-colors"
                    >
                      About
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => scrollToSection("services")}
                      className="text-gray-400 hover:text-green-400 transition-colors"
                    >
                      Services
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => scrollToSection("technology")}
                      className="text-gray-400 hover:text-green-400 transition-colors"
                    >
                      Technology
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => scrollToSection("team")}
                      className="text-gray-400 hover:text-green-400 transition-colors"
                    >
                      Team
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => scrollToSection("contact")}
                      className="text-gray-400 hover:text-green-400 transition-colors"
                    >
                      Contact
                    </button>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Services</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                      Autonomous Farming
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                      Crop Monitoring
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                      Land Reclamation
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Connect</h3>
                <div className="flex space-x-4">
                  <Link href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                    </svg>
                  </Link>
                  <Link href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </Link>
                  <Link href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                  </Link>
                  <Link href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Eco-mation. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
