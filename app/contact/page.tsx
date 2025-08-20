"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { MapPin, Phone, Mail, Clock, MessageSquare, Calendar, Users, Dumbbell } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    inquiryType: "general",
  })

  const inquiryTypes = [
    { value: "general", label: "General Information" },
    { value: "membership", label: "Membership Inquiry" },
    { value: "personal-training", label: "Personal Training" },
    { value: "facilities", label: "Sports Facilities" },
    { value: "corporate", label: "Corporate Membership" },
    { value: "tour", label: "Schedule a Tour" },
  ]

  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      details: "(555) 123-4567",
      description: "Speak with our friendly staff",
      availability: "Mon-Fri: 6AM-10PM, Sat-Sun: 7AM-9PM",
    },
    {
      icon: Mail,
      title: "Email Us",
      details: "info@power.com",
      description: "We'll respond within 24 hours",
      availability: "24/7 response time",
    },
    {
      icon: MessageSquare,
      title: "Live Chat",
      details: "Available on website",
      description: "Instant support during business hours",
      availability: "Mon-Fri: 9AM-6PM",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "123 Fitness Street",
      description: "Gym City, GC 12345",
      availability: "Open 24/7 for members",
    },
  ]

  const departments = [
    {
      icon: Users,
      name: "Membership Services",
      phone: "(555) 123-4567",
      email: "membership@power.com",
      description: "New memberships, billing, and account questions",
    },
    {
      icon: Dumbbell,
      name: "Personal Training",
      phone: "(555) 123-4568",
      email: "training@power.com",
      description: "Book sessions and training consultations",
    },
    {
      icon: Calendar,
      name: "Sports Facilities",
      phone: "(555) 123-4569",
      email: "facilities@power.com",
      description: "Facility access, equipment info, and sports bookings",
    },
    {
      icon: MessageSquare,
      name: "General Support",
      phone: "(555) 123-4570",
      email: "support@power.com",
      description: "Facility questions and general assistance",
    },
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      inquiryType: "general",
    })
    alert("Thank you for your message! We'll get back to you soon.")
  }

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in-up")
        }
      })
    }, observerOptions)

    const elements = document.querySelectorAll(".animate-on-scroll")
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-20 pb-20 bg-gradient-to-br from-background via-card to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold font-serif text-foreground mb-6 animate-fade-in-up">
              Get In <span className="text-primary">Touch</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in-up animate-delay-200">
              Ready to start your fitness journey? Have questions about our services? We're here to help you every step
              of the way.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold font-serif text-foreground mb-4">
              Ways to <span className="text-primary">Connect</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Choose the contact method that works best for you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <Card
                key={index}
                className="group hover:scale-105 transition-transform duration-300 animate-on-scroll bg-background border-border"
              >
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <method.icon className="w-12 h-12 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-xl font-bold font-serif text-foreground mb-2">{method.title}</h3>
                  <p className="text-primary font-semibold mb-2">{method.details}</p>
                  <p className="text-muted-foreground mb-3 leading-relaxed">{method.description}</p>
                  <p className="text-sm text-muted-foreground">{method.availability}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-on-scroll">
              <Card className="bg-card border-border">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold font-serif text-foreground mb-6">Send us a Message</h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                          Full Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your Name"
                          className="bg-background border-border text-foreground"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your.email@example.com"
                          className="bg-background border-border text-foreground"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">
                          Phone Number
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="(555) 123-4567"
                          className="bg-background border-border text-foreground"
                        />
                      </div>
                      <div>
                        <label htmlFor="inquiryType" className="block text-sm font-semibold text-foreground mb-2">
                          Inquiry Type
                        </label>
                        <select
                          id="inquiryType"
                          name="inquiryType"
                          value={formData.inquiryType}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 bg-background border border-border rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        >
                          {inquiryTypes.map((type) => (
                            <option key={type.value} value={type.value}>
                              {type.label}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-semibold text-foreground mb-2">
                        Subject *
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="What can we help you with?"
                        className="bg-background border-border text-foreground"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us more about your inquiry..."
                        rows={5}
                        className="bg-background border-border text-foreground"
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-primary hover:bg-secondary text-primary-foreground font-semibold"
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="animate-on-scroll space-y-8">
              <div>
                <h3 className="text-2xl font-bold font-serif text-foreground mb-6">Visit Our Gym</h3>
                <Card className="bg-card border-border">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-foreground">Address</p>
                          <p className="text-muted-foreground">123 Fitness Street</p>
                          <p className="text-muted-foreground">Gym City, GC 12345</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Phone className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-foreground">Phone</p>
                          <p className="text-muted-foreground">(555) 123-4567</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Mail className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-foreground">Email</p>
                          <p className="text-muted-foreground">info@power.com</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div>
                <h3 className="text-2xl font-bold font-serif text-foreground mb-6">Opening Hours</h3>
                <Card className="bg-card border-border">
                  <CardContent className="p-6">
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="font-semibold text-foreground">Monday - Friday</span>
                        <span className="text-muted-foreground">5:00 AM - 11:00 PM</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-semibold text-foreground">Saturday</span>
                        <span className="text-muted-foreground">6:00 AM - 10:00 PM</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-semibold text-foreground">Sunday</span>
                        <span className="text-muted-foreground">7:00 AM - 9:00 PM</span>
                      </div>
                      <div className="pt-3 border-t border-border">
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4 text-primary" />
                          <span className="text-sm text-primary font-semibold">24/7 Access for Premium Members</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div>
                <h3 className="text-2xl font-bold font-serif text-foreground mb-6">Interactive Map</h3>
                <Card className="bg-card border-border">
                  <CardContent className="p-0">
                    <div className="bg-muted rounded-lg h-64 flex items-center justify-center">
                      <div className="text-center">
                        <MapPin className="w-12 h-12 text-primary mx-auto mb-2" />
                        <p className="text-muted-foreground">Interactive Map</p>
                        <p className="text-sm text-muted-foreground">123 Fitness Street, Gym City</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Department Contacts */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold font-serif text-foreground mb-4">
              Department <span className="text-primary">Contacts</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Get in touch with the right department for faster, more specialized assistance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {departments.map((dept, index) => (
              <Card
                key={index}
                className="group hover:scale-105 transition-transform duration-300 animate-on-scroll bg-background border-border"
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <dept.icon className="w-10 h-10 text-primary group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold font-serif text-foreground mb-2">{dept.name}</h3>
                      <p className="text-muted-foreground mb-4 leading-relaxed">{dept.description}</p>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Phone className="w-4 h-4 text-primary" />
                          <span className="text-foreground font-semibold">{dept.phone}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Mail className="w-4 h-4 text-primary" />
                          <span className="text-foreground font-semibold">{dept.email}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold font-serif text-foreground mb-4">
              Quick <span className="text-primary">Answers</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Find answers to common questions before reaching out
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "How do I schedule a gym tour?",
                answer:
                  "You can schedule a tour by calling us at (555) 123-4567, using our contact form above, or stopping by during business hours. Tours are available daily and take about 15-20 minutes.",
              },
              {
                question: "What should I bring for my first visit?",
                answer:
                  "Bring a valid ID, comfortable workout clothes, athletic shoes, a water bottle, and a towel. We provide all necessary equipment for your workout.",
              },
              {
                question: "Do you offer trial memberships?",
                answer:
                  "Yes! We offer a 3-day trial pass for first-time visitors. This gives you full access to our facilities and group classes to experience what Power has to offer.",
              },
              {
                question: "How quickly can I expect a response?",
                answer:
                  "We respond to emails within 24 hours during business days. Phone calls are answered during business hours, and our live chat is available Monday-Friday 9AM-6PM.",
              },
            ].map((faq, index) => (
              <Card key={index} className="animate-on-scroll bg-card border-border">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold font-serif text-foreground mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-primary-foreground mb-6 animate-on-scroll">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 animate-on-scroll leading-relaxed">
            Don't wait - your fitness journey starts with a single step. Contact us today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-on-scroll">
            <Button
              size="lg"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold px-8 py-4"
            >
              Schedule Your Tour
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-semibold px-8 py-4 bg-transparent"
            >
              Call Us Now
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
