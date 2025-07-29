"use client"

import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FadeInUp } from "@/components/ScrollAnimations"
import { useEffect, useRef, useState } from "react"

export const DesignerTestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Client",
      role: "Client",
      image: "",
      rating: 4,
      text: "Exceptional",
      project: "Digital Art & Graphics",
    },
    {
      id: 2,
      name: "Client",
      role: "Client",
      image: "",
      rating: 5,
      text: "I'm very satisfied!",
      project: "Digital Art & Graphics",
    },
    {
      id: 3,
      name: "Client",
      role: "Client",
      image: "",
      rating: 5,
      text: "I'm very satisfied!",
      project: "Digital Art & Graphics",
    }
  ]

  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoScrolling, setIsAutoScrolling] = useState(true)

  // Auto scroll functionality
  useEffect(() => {
    if (!isAutoScrolling) return

    const interval = setInterval(() => {
      if (scrollContainerRef.current) {
        const container = scrollContainerRef.current
        const cardWidth = container.children[0]?.clientWidth || 0
        const gap = 32 // 8 * 4 = 32px gap
        const scrollAmount = cardWidth + gap

        if (currentIndex >= testimonials.length - 1) {
          // Reset to beginning
          container.scrollTo({ left: 0, behavior: "smooth" })
          setCurrentIndex(0)
        } else {
          // Scroll to next
          const nextIndex = currentIndex + 1
          container.scrollTo({
            left: scrollAmount * nextIndex,
            behavior: "smooth",
          })
          setCurrentIndex(nextIndex)
        }
      }
    }, 4000) // Change every 4 seconds

    return () => clearInterval(interval)
  }, [currentIndex, isAutoScrolling, testimonials.length])

  const scrollToIndex = (index: number) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current
      const cardWidth = container.children[0]?.clientWidth || 0
      const gap = 32
      const scrollAmount = cardWidth + gap

      container.scrollTo({
        left: scrollAmount * index,
        behavior: "smooth",
      })
      setCurrentIndex(index)
    }
  }

  const scrollLeft = () => {
    setIsAutoScrolling(false)
    const newIndex = currentIndex > 0 ? currentIndex - 1 : testimonials.length - 1
    scrollToIndex(newIndex)
    setTimeout(() => setIsAutoScrolling(true), 10000) // Resume auto-scroll after 10s
  }

  const scrollRight = () => {
    setIsAutoScrolling(false)
    const newIndex = currentIndex < testimonials.length - 1 ? currentIndex + 1 : 0
    scrollToIndex(newIndex)
    setTimeout(() => setIsAutoScrolling(true), 10000) // Resume auto-scroll after 10s
  }

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${Math.random() * 4 + 4}s`,
            }}
          >
            <Star className="w-4 h-4 text-designer-primary" />
          </div>
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <FadeInUp>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-designer-foreground mb-4">
              <span className="gradient-text">What People Say</span>
            </h2>
            <p className="text-designer-foreground/70 max-w-2xl mx-auto text-lg">
              Don't just take my word for it - here's what my amazing clients have to say! 💕
            </p>
          </div>
        </FadeInUp>

        {/* Stats Row */}
        <FadeInUp delay={200}>
          <div className="grid grid-cols-3 gap-8 mb-16">
            {[
              { number: "12+", label: "Happy Clients", emoji: "😊" },
              { number: "4.9/5", label: "Average Rating", emoji: "⭐" },
              { number: "90%", label: "Client Satisfaction", emoji: "💯" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl mb-2">{stat.emoji}</div>
                <div className="text-3xl md:text-4xl font-bold text-designer-primary mb-1">{stat.number}</div>
                <div className="text-designer-foreground/70 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </FadeInUp>

        {/* Testimonials Horizontal Scroll */}
        <div className="relative mb-8">
          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mb-6">
            <Button
              variant="outline"
              size="icon"
              onClick={scrollLeft}
              className="rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>

            <Button
              variant="outline"
              size="icon"
              onClick={scrollRight}
              className="rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>

          {/* Scrollable Container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-8 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            onMouseEnter={() => setIsAutoScrolling(false)}
            onMouseLeave={() => setIsAutoScrolling(true)}
          >
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.id} className="flex-none w-80 md:w-96">
                <Card className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-none h-full flex flex-col">
                  {/* Quote Icon */}
                  <div className="mb-4">
                    <Quote className="w-8 h-8 text-designer-primary opacity-50" />
                  </div>

                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-designer-accent text-designer-accent" />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-designer-foreground/80 leading-relaxed mb-6 flex-grow">"{testimonial.text}"</p>

                  {/* Project Tag */}
                  <div className="mb-4">
                    <span className="px-3 py-1 bg-gradient-creative text-white text-xs font-medium rounded-full">
                      {testimonial.project}
                    </span>
                  </div>

                  {/* Client Info */}
                  <div className="flex items-center gap-3 pt-4 border-t border-designer-border">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-10 h-10 rounded-full object-cover border-2 border-designer-secondary"
                    />
                    <div>
                      <h4 className="font-semibold text-designer-foreground text-sm">{testimonial.name}</h4>
                      <p className="text-designer-foreground/60 text-xs">{testimonial.role}</p>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAutoScrolling(false)
                  scrollToIndex(index)
                  setTimeout(() => setIsAutoScrolling(true), 10000)
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-designer-primary w-8"
                    : "bg-designer-primary/30 hover:bg-designer-primary/50"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <FadeInUp delay={600}>
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-designer-primary via-designer-accent to-designer-creative rounded-3xl p-8 text-white shadow-xl">
              <h3 className="text-3xl font-bold mb-4">Ready to Join the Happy Client Club? 🎉</h3>
              <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
                Let's create something amazing together! I promise to put the same love and creativity into your project
                that made all these clients fall in love with their designs.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="" target="blank">
                  <button className="bg-white text-designer-primary hover:bg-gray-100 font-semibold px-6 py-3 rounded-full transition-all hover:scale-105">
                    Start Your Project
                  </button>
                </a>
              </div>
            </div>
          </div>
        </FadeInUp>
      </div>
    </section>
  )
}
