"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Dumbbell, Users, Trophy, Clock } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function HomePage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      name: "Sarah Johnson",
      text: "Power transformed my life! The facilities are amazing and the equipment is top-notch.",
      rating: 5,
    },
    {
      name: "Mike Chen",
      text: "Best gym I've ever been to. The community here is incredibly supportive.",
      rating: 5,
    },
    {
      name: "Emily Davis",
      text: "The variety of sports facilities and equipment is outstanding. Highly recommend!",
      rating: 5,
    },
  ]

  const stats = [
    { icon: Users, number: "2000+", label: "Happy Members" },
    { icon: Dumbbell, number: "200+", label: "Equipment Pieces" },
    { icon: Trophy, number: "15+", label: "Awards Won" },
    { icon: Clock, number: "24/7", label: "Access Available" },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

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
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-16">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/ambitious-studio-rick-barrett-w7jYaN7GqyA-unsplash.jpg')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-primary/20"></div>
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold font-serif text-foreground mb-6 animate-fade-in-up">
            Push Your <span className="text-primary">Limits</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in-up animate-delay-200 font-light">
            Train harder, get stronger, live better with our world-class facilities and expert guidance
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animate-delay-400">
            <Button
              size="lg"
              className="bg-primary hover:bg-secondary text-primary-foreground text-lg px-8 py-4 font-semibold"
            >
              Start Your Journey
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-4 font-semibold bg-transparent"
            >
              <Link href="/sports">View Sports</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-on-scroll">
                <div className="flex justify-center mb-4">
                  <stat.icon className="w-12 h-12 text-primary" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold font-serif text-foreground mb-2">{stat.number}</h3>
                <p className="text-muted-foreground font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <h2 className="text-4xl md:text-5xl font-bold font-serif text-foreground mb-6">
                Why Choose <span className="text-primary">Power</span>?
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                At Power, we believe fitness is more than just working out—it's about transforming your life. Our
                state-of-the-art facility combines cutting-edge equipment with expert guidance to help you achieve your
                fitness goals.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                With over 10 years of experience, we've helped thousands of members push their limits and discover their
                true potential.
              </p>
              <Link href="/about">
                <Button className="bg-primary hover:bg-secondary text-primary-foreground font-semibold">
                  Learn More About Us
                </Button>
              </Link>
            </div>
            <div className="animate-on-scroll">
              <img src="/muscular-brunette-woman-training-with-ropes.jpg" alt="Power Interior" className="rounded-lg shadow-2xl w-full h-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Sports Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold font-serif text-foreground mb-4">
              Featured <span className="text-primary">Sports</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Discover our most popular sports facilities and training areas designed to challenge and inspire you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                name: "Weight Training",
                image: "wight-training.webp",
                description: "Complete weight training facility with Olympic barbells and resistance machines",
                access: "24/7",
              },
              {
                name: "Cardio Zone",
                image: "cardio.jpg",
                description: "State-of-the-art cardio equipment with entertainment systems",
                access: "24/7",
              },
              {
                name: "Basketball Court",
                image: "basketball.webp",
                description: "Full-size basketball court for games and individual practice",
                access: "6AM-10PM",
              },
            ].map((sport, index) => (
              <Card
                key={index}
                className="group hover:scale-105 transition-transform duration-300 animate-on-scroll bg-background border-border"
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={`/${sport.image}`}
                    alt={sport.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/40 transition-colors duration-300"></div>
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                    {sport.access}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold font-serif text-foreground mb-2">{sport.name}</h3>
                  <p className="text-muted-foreground leading-relaxed">{sport.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center animate-on-scroll">
            <Link href="/sports">
              <Button size="lg" className="bg-primary hover:bg-secondary text-primary-foreground font-semibold px-8">
                View All Sports
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold font-serif text-foreground mb-4">
              What Our <span className="text-primary">Members</span> Say
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Real stories from real people who transformed their lives at Power
            </p>
          </div>

          <div className="relative">
            <Card className="bg-card border-border animate-on-scroll">
              <CardContent className="p-8 text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-xl text-muted-foreground mb-6 italic leading-relaxed">
                  "{testimonials[currentTestimonial].text}"
                </p>
                <h4 className="text-xl font-bold font-serif text-foreground">
                  {testimonials[currentTestimonial].name}
                </h4>
              </CardContent>
            </Card>

            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial ? "bg-primary" : "bg-muted"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-primary-foreground mb-6 animate-on-scroll">
            Ready to Transform Your Life?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 animate-on-scroll leading-relaxed">
            Join thousands of members who have already started their fitness journey with us
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-on-scroll">
            <Link href="/membership">
              <Button
                size="lg"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold px-8 py-4"
              >
                View Membership Plans
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-semibold px-8 py-4 bg-transparent"
              >
                Contact Us Today
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
