"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, Users, Target, MapPin, Star } from "lucide-react"

const sports = [
  {
    id: 1,
    name: "Weight Training",
    category: "Strength",
    equipment: "Free Weights, Machines, Barbells",
    area: "Strength Training Zone",
    image: "/wight-training.webp",
    description: "Complete weight training facility with Olympic barbells, dumbbells, and resistance machines.",
    features: ["Olympic Barbells", "Dumbbell Sets 5-100lbs", "Cable Machines", "Power Racks"],
    availability: "24/7 Access",
    difficulty: "All Levels",
  },
  {
    id: 2,
    name: "Cardio Training",
    category: "Cardio",
    equipment: "Treadmills, Bikes, Ellipticals",
    area: "Cardio Zone",
    image: "/cardio.jpg",
    description: "State-of-the-art cardio equipment with entertainment systems and heart rate monitoring.",
    features: ["20 Treadmills", "15 Stationary Bikes", "10 Ellipticals", "Rowing Machines"],
    availability: "24/7 Access",
    difficulty: "All Levels",
  },
  {
    id: 3,
    name: "Functional Training",
    category: "Functional",
    equipment: "TRX, Kettlebells, Battle Ropes",
    area: "Functional Training Area",
    image: "/functional.webp",
    description: "Dedicated space for functional movement training and athletic conditioning.",
    features: ["TRX Suspension Trainers", "Kettlebell Sets", "Battle Ropes", "Agility Ladders"],
    availability: "6 AM - 10 PM",
    difficulty: "Intermediate",
  },
  {
    id: 4,
    name: "Basketball",
    category: "Sports",
    equipment: "Full Court, Basketballs",
    area: "Sports Court",
    image: "/basketball.webp",
    description: "Full-size basketball court available for pickup games and individual practice.",
    features: ["Full Size Court", "Professional Hoops", "Quality Basketballs", "Scoreboard"],
    availability: "6 AM - 10 PM",
    difficulty: "All Levels",
  },
  {
    id: 5,
    name: "Swimming",
    category: "Aquatic",
    equipment: "25m Pool, Lanes",
    area: "Aquatic Center",
    image: "/pool.jpg",
    description: "25-meter swimming pool with dedicated lanes for lap swimming and water exercises.",
    features: ["6 Swimming Lanes", "Heated Pool", "Pool Equipment", "Changing Rooms"],
    availability: "5 AM - 11 PM",
    difficulty: "All Levels",
  },
  {
    id: 6,
    name: "Stretching & Recovery",
    category: "Recovery",
    equipment: "Mats, Foam Rollers, Stretching Area",
    area: "Recovery Zone",
    image: "/recovery.webp",
    description: "Dedicated quiet space for stretching, mobility work, and post-workout recovery.",
    features: ["Yoga Mats", "Foam Rollers", "Massage Balls", "Stretching Guides"],
    availability: "24/7 Access",
    difficulty: "All Levels",
  },
]

const categories = ["All", "Strength", "Cardio", "Functional", "Sports", "Aquatic", "Recovery"]

export default function SportsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredSports =
    selectedCategory === "All" ? sports : sports.filter((sport) => sport.category === selectedCategory)

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold font-serif mb-6">
            Sports & <span className="text-[#C92027]">Facilities</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Explore our comprehensive range of sports facilities and training equipment. From strength training to
            aquatic sports, we have everything you need for your fitness journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#C92027] hover:bg-red-700 text-white px-8 py-3">
              Start Your Membership
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-black px-8 py-3 bg-transparent"
            >
              Take a Tour
            </Button>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={
                  selectedCategory === category
                    ? "bg-[#C92027] hover:bg-red-700 text-white"
                    : "border-gray-600 text-gray-300 hover:bg-gray-800"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Sports Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSports.map((sport) => (
              <div
                key={sport.id}
                className="bg-gray-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="relative">
                  <img src={sport.image || "/placeholder.svg"} alt={sport.name} className="w-full h-48 object-cover" />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-[#C92027] text-white">{sport.category}</Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge variant="outline" className="border-white text-white bg-black/50">
                      {sport.difficulty}
                    </Badge>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{sport.name}</h3>
                  <p className="text-gray-400 mb-4">{sport.description}</p>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2 text-sm text-gray-300">
                      <MapPin className="w-4 h-4 text-[#C92027]" />
                      <span>{sport.area}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-300">
                      <Clock className="w-4 h-4 text-[#C92027]" />
                      <span>{sport.availability}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-300">
                      <Target className="w-4 h-4 text-[#C92027]" />
                      <span>{sport.equipment}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-2 text-[#C92027]">Available Equipment:</h4>
                    <div className="flex flex-wrap gap-2">
                      {sport.features.map((feature, index) => (
                        <Badge key={index} variant="outline" className="border-gray-600 text-gray-300 text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Button className="w-full bg-[#C92027] hover:bg-red-700 text-white">Learn More</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Overview */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-serif mb-4">
              World-Class <span className="text-[#C92027]">Facilities</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our state-of-the-art facilities are designed to support every aspect of your fitness journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-[#C92027] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">5000+ sq ft</h3>
              <p className="text-gray-400">Training Space</p>
            </div>
            <div className="text-center">
              <div className="bg-[#C92027] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">200+</h3>
              <p className="text-gray-400">Equipment Pieces</p>
            </div>
            <div className="text-center">
              <div className="bg-[#C92027] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">24/7</h3>
              <p className="text-gray-400">Access Available</p>
            </div>
            <div className="text-center">
              <div className="bg-[#C92027] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">6</h3>
              <p className="text-gray-400">Sport Categories</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#C92027] to-red-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold font-serif mb-4">Ready to Start Your Fitness Journey?</h2>
          <p className="text-xl mb-8 text-red-100">
            Join our gym today and get access to all sports facilities and equipment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-[#C92027] hover:bg-gray-100 px-8 py-3">
              View Membership Plans
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#C92027] px-8 py-3 bg-transparent"
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
