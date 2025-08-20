"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Check, X, Dumbbell, Users, Clock, Wifi, Car, Shield, Heart, Zap, Star } from "lucide-react"

export default function MembershipPage() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly")

  const membershipPlans = [
    {
      name: "Basic",
      description: "Perfect for getting started on your fitness journey",
      monthlyPrice: 29,
      annualPrice: 290,
      popular: false,
      features: [
        { name: "Gym Access", included: true },
        { name: "Locker Room Access", included: true },
        { name: "Basic Equipment", included: true },
        { name: "Mobile App Access", included: true },
        { name: "Sports Facilities", included: false },
        { name: "Personal Training", included: false },
        { name: "Nutrition Consultation", included: false },
        { name: "Guest Passes", included: false },
        { name: "24/7 Access", included: false },
        { name: "Premium Equipment", included: false },
      ],
      perks: ["Free fitness assessment", "Basic workout plan"],
    },
    {
      name: "Standard",
      description: "Our most popular plan with group classes included",
      monthlyPrice: 49,
      annualPrice: 490,
      popular: true,
      features: [
        { name: "Gym Access", included: true },
        { name: "Locker Room Access", included: true },
        { name: "Basic Equipment", included: true },
        { name: "Mobile App Access", included: true },
        { name: "Sports Facilities", included: true },
        { name: "Personal Training", included: "1 session/month" },
        { name: "Nutrition Consultation", included: false },
        { name: "Guest Passes", included: "2/month" },
        { name: "24/7 Access", included: false },
        { name: "Premium Equipment", included: true },
      ],
      perks: ["Free fitness assessment", "Custom workout plan", "Progress tracking"],
    },
    {
      name: "Premium",
      description: "Complete fitness solution with all amenities",
      monthlyPrice: 79,
      annualPrice: 790,
      popular: false,
      features: [
        { name: "Gym Access", included: true },
        { name: "Locker Room Access", included: true },
        { name: "Basic Equipment", included: true },
        { name: "Mobile App Access", included: true },
        { name: "Sports Facilities", included: true },
        { name: "Personal Training", included: "2 sessions/month" },
        { name: "Nutrition Consultation", included: true },
        { name: "Guest Passes", included: "4/month" },
        { name: "24/7 Access", included: true },
        { name: "Premium Equipment", included: true },
      ],
      perks: [
        "Free fitness assessment",
        "Custom workout & nutrition plan",
        "Progress tracking",
        "Priority class booking",
        "Towel service",
      ],
    },
  ]

  const facilities = [
    {
      icon: Dumbbell,
      name: "Strength Training Zone",
      description: "State-of-the-art free weights and resistance machines",
    },
    {
      icon: Heart,
      name: "Cardio Theater",
      description: "Premium cardio equipment with entertainment systems",
    },
    {
      icon: Users,
      name: "Group Fitness Studio",
      description: "Spacious studio for yoga, HIIT, and group classes",
    },
    {
      icon: Zap,
      name: "Functional Training Area",
      description: "CrossFit equipment and functional movement space",
    },
    {
      icon: Shield,
      name: "Recovery Zone",
      description: "Stretching area with foam rollers and massage tools",
    },
    {
      icon: Clock,
      name: "24/7 Access",
      description: "Round-the-clock access for Premium members",
    },
    {
      icon: Users,
      name: "Sports Facilities",
      description: "Multiple sports courts and specialized training areas",
    },
  ]

  const amenities = [
    { icon: Car, name: "Free Parking", description: "Ample parking space for all members" },
    { icon: Wifi, name: "High-Speed WiFi", description: "Stay connected during your workout" },
    { icon: Shield, name: "Secure Lockers", description: "Safe storage for your belongings" },
    { icon: Users, name: "Member Lounge", description: "Relax and socialize with other members" },
  ]

  const testimonials = [
    {
      name: "Jennifer Smith",
      membership: "Premium Member",
      text: "The Premium membership is worth every penny. The personal training sessions and sports facilities have completely transformed my approach to fitness.",
      rating: 5,
      duration: "2 years",
    },
    {
      name: "Mark Johnson",
      membership: "Standard Member",
      text: "Perfect balance of value and features. The sports facilities are fantastic and the equipment is always well-maintained.",
      rating: 5,
      duration: "1 year",
    },
    {
      name: "Rachel Davis",
      membership: "Basic Member",
      text: "Great starter plan! I've been able to establish a consistent workout routine and I'm already seeing results.",
      rating: 4,
      duration: "6 months",
    },
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
              Choose Your <span className="text-primary">Membership</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in-up animate-delay-200">
              Flexible membership options designed to fit your lifestyle and fitness goals. Start your transformation
              journey today with the plan that's right for you.
            </p>
          </div>
        </div>
      </section>

      {/* Billing Toggle */}
      <section className="py-12 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-on-scroll">
            <h3 className="text-lg font-semibold text-foreground mb-4">Choose Your Billing Cycle</h3>
            <div className="inline-flex items-center bg-background rounded-lg p-1 border border-border">
              <button
                onClick={() => setBillingCycle("monthly")}
                className={`px-6 py-2 rounded-md font-semibold transition-colors ${
                  billingCycle === "monthly"
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle("annual")}
                className={`px-6 py-2 rounded-md font-semibold transition-colors ${
                  billingCycle === "annual"
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Annual
                <Badge className="ml-2 bg-secondary text-secondary-foreground text-xs">Save 17%</Badge>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Plans */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {membershipPlans.map((plan, index) => (
              <Card
                key={index}
                className={`relative hover:scale-105 transition-transform duration-300 animate-on-scroll ${
                  plan.popular ? "ring-2 ring-primary bg-card scale-105" : "bg-card"
                } border-border`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground px-4 py-1 text-sm font-semibold">
                      Most Popular
                    </Badge>
                  </div>
                )}

                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold font-serif text-foreground mb-2">{plan.name}</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{plan.description}</p>
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-primary">
                        ${billingCycle === "monthly" ? plan.monthlyPrice : Math.round(plan.annualPrice / 12)}
                      </span>
                      <span className="text-muted-foreground">/{billingCycle === "monthly" ? "month" : "month"}</span>
                      {billingCycle === "annual" && (
                        <div className="text-sm text-muted-foreground mt-1">Billed annually (${plan.annualPrice})</div>
                      )}
                    </div>
                  </div>

                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        {feature.included === true ? (
                          <Check className="w-5 h-5 text-primary flex-shrink-0" />
                        ) : feature.included === false ? (
                          <X className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                        ) : (
                          <Check className="w-5 h-5 text-primary flex-shrink-0" />
                        )}
                        <span
                          className={`${
                            feature.included === false ? "text-muted-foreground" : "text-foreground"
                          } flex-1`}
                        >
                          {feature.name}
                          {typeof feature.included === "string" && (
                            <span className="text-primary font-semibold ml-1">({feature.included})</span>
                          )}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mb-8">
                    <h4 className="font-semibold text-foreground mb-3">Included Perks:</h4>
                    <ul className="space-y-2">
                      {plan.perks.map((perk, perkIndex) => (
                        <li key={perkIndex} className="text-sm text-muted-foreground flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                          <span>{perk}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button
                    className={`w-full font-semibold ${
                      plan.popular
                        ? "bg-primary hover:bg-secondary text-primary-foreground"
                        : "bg-card hover:bg-primary text-foreground hover:text-primary-foreground border border-border"
                    }`}
                  >
                    Choose {plan.name}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold font-serif text-foreground mb-4">
              World-Class <span className="text-primary">Facilities</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              State-of-the-art equipment and facilities designed to support every aspect of your fitness journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <Card
                key={index}
                className="group hover:scale-105 transition-transform duration-300 animate-on-scroll bg-background border-border"
              >
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <facility.icon className="w-12 h-12 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-xl font-bold font-serif text-foreground mb-3">{facility.name}</h3>
                  <p className="text-muted-foreground leading-relaxed">{facility.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold font-serif text-foreground mb-4">
              Member <span className="text-primary">Amenities</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Enjoy these additional perks and services included with your membership
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {amenities.map((amenity, index) => (
              <Card
                key={index}
                className="group hover:scale-105 transition-transform duration-300 animate-on-scroll bg-card border-border"
              >
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <amenity.icon className="w-10 h-10 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-lg font-bold font-serif text-foreground mb-2">{amenity.name}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{amenity.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Member Testimonials */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold font-serif text-foreground mb-4">
              What Our <span className="text-primary">Members</span> Say
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Real feedback from real members about their Power experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="group hover:scale-105 transition-transform duration-300 animate-on-scroll bg-background border-border"
              >
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 italic leading-relaxed">"{testimonial.text}"</p>
                  <div className="text-center">
                    <h4 className="text-lg font-bold font-serif text-foreground">{testimonial.name}</h4>
                    <p className="text-primary font-semibold text-sm">{testimonial.membership}</p>
                    <p className="text-muted-foreground text-xs">Member for {testimonial.duration}</p>
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
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "Can I cancel my membership anytime?",
                answer:
                  "Yes, you can cancel your membership with 30 days notice. Annual memberships can be cancelled after the first 12 months.",
              },
              {
                question: "Are there any joining fees?",
                answer:
                  "No joining fees for any membership plan. What you see is what you pay - no hidden costs or surprise charges.",
              },
              {
                question: "Can I freeze my membership?",
                answer:
                  "Yes, you can freeze your membership for up to 3 months per year for medical reasons or extended travel.",
              },
              {
                question: "Do you offer corporate memberships?",
                answer:
                  "Yes, we offer special corporate rates for companies with 10+ employees. Contact us for custom pricing.",
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
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 animate-on-scroll leading-relaxed">
            Join thousands of members who have already transformed their lives at Power
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-on-scroll">
            <Button
              size="lg"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold px-8 py-4"
            >
              Start Your Membership
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-semibold px-8 py-4 bg-transparent"
            >
              Schedule a Tour
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
