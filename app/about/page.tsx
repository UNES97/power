"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Award, Heart, Target, Users, Dumbbell, Clock, Shield, Zap } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: "Passion for Fitness",
      description: "We live and breathe fitness, and our passion drives everything we do to help you succeed.",
    },
    {
      icon: Target,
      title: "Goal-Oriented",
      description: "Every program and service is designed to help you reach your specific fitness goals efficiently.",
    },
    {
      icon: Users,
      title: "Community First",
      description: "We believe in building a supportive community where everyone motivates each other to excel.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We maintain the highest standards in equipment, training, and customer service.",
    },
  ]

  const features = [
    {
      icon: Dumbbell,
      title: "State-of-the-Art Equipment",
      description: "Latest fitness technology and premium equipment from leading brands worldwide.",
    },
    {
      icon: Clock,
      title: "24/7 Access",
      description: "Train on your schedule with round-the-clock access to our facilities.",
    },
    {
      icon: Shield,
      title: "Safe Environment",
      description: "Clean, secure, and well-maintained facilities with professional safety protocols.",
    },
    {
      icon: Zap,
      title: "High-Energy Atmosphere",
      description: "Motivating environment with energizing music and positive vibes.",
    },
  ]

  const milestones = [
    { year: "2014", event: "Power Founded", description: "Started with a vision to transform lives through fitness" },
    { year: "2016", event: "First Expansion", description: "Doubled our space and added specialized training areas" },
    { year: "2018", event: "Award Recognition", description: "Named 'Best Gym in the City' by Fitness Magazine" },
    { year: "2020", event: "Digital Innovation", description: "Launched virtual training and mobile app integration" },
    {
      year: "2022",
      event: "Community Impact",
      description: "Reached 2000+ members and launched charity fitness programs",
    },
    { year: "2024", event: "Future Ready", description: "Continuing to innovate with AI-powered fitness solutions" },
  ]

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
              About <span className="text-primary">Power</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in-up animate-delay-200">
              More than just a gym - we're your partners in transformation, dedicated to helping you achieve your
              fitness dreams and live your best life.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <h2 className="text-4xl md:text-5xl font-bold font-serif text-foreground mb-6">
                Our <span className="text-primary">Story</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Founded in 2014 with a simple yet powerful vision: to create a space where fitness meets community, and
                dreams become reality. What started as a small neighborhood gym has grown into a premier fitness
                destination that has transformed thousands of lives.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Our founders, both fitness enthusiasts and former athletes, recognized the need for a gym that combined
                cutting-edge equipment with personalized attention and genuine care for each member's journey.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Today, Power stands as a testament to what's possible when passion meets purpose. We've helped members
                lose weight, build strength, compete in competitions, and most importantly, gain confidence that extends
                far beyond the gym walls.
              </p>
              <Link href="/contact">
                <Button className="bg-primary hover:bg-secondary text-primary-foreground font-semibold">
                  Join Our Story
                </Button>
              </Link>
            </div>
            <div className="animate-on-scroll">
              <img src="/muscular-brunette-woman-training-with-ropes.jpg" alt="Power Story" className="rounded-lg shadow-2xl w-full h-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold font-serif text-foreground mb-4">
              Our <span className="text-primary">Values</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              The principles that guide everything we do and shape the Power experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="group hover:scale-105 transition-transform duration-300 animate-on-scroll bg-background border-border"
              >
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <value.icon className="w-12 h-12 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-xl font-bold font-serif text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold font-serif text-foreground mb-4">
              Why Choose <span className="text-primary">Power</span>?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Discover what sets us apart and makes Power the premier choice for fitness enthusiasts
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group hover:scale-105 transition-transform duration-300 animate-on-scroll bg-card border-border"
              >
                <CardContent className="p-8 flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <feature.icon className="w-10 h-10 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-serif text-foreground mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold font-serif text-foreground mb-4">
              Our <span className="text-primary">Journey</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A decade of growth, innovation, and community impact
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary/20"></div>
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`relative flex items-center mb-12 animate-on-scroll ${
                  index % 2 === 0 ? "justify-start" : "justify-end"
                }`}
              >
                <div className={`w-full max-w-md ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                  <Card className="bg-background border-border">
                    <CardContent className="p-6">
                      <div className="text-2xl font-bold font-serif text-primary mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold text-foreground mb-2">{milestone.event}</h3>
                      <p className="text-muted-foreground leading-relaxed">{milestone.description}</p>
                    </CardContent>
                  </Card>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-primary-foreground mb-6 animate-on-scroll">
            Ready to Be Part of Our Story?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 animate-on-scroll leading-relaxed">
            Join the Power family and start writing your own transformation story today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-on-scroll">
            <Link href="/membership">
              <Button
                size="lg"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold px-8 py-4"
              >
                Start Your Journey
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-semibold px-8 py-4 bg-transparent"
              >
                Schedule a Tour
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
