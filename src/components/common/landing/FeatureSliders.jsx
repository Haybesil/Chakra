import { useState, useEffect, useRef } from "react"
import { ArrowUpRight, CheckCircle } from "lucide-react"

const FeatureButton = ({ text, href = "#" }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="inline-block">
      {!isHovered ? (
        <a
          className="inline-block h-10 max-sm:h-8 rounded-full px-4 max-sm:px-3 py-2.5 max-sm:py-2 border border-[#fcebde] mr-6 max-sm:mr-4 text-[#fcebde]"
          onMouseEnter={() => setIsHovered(true)}
        >
          <div className="flex justify-center items-center gap-1.5">
            <div className="w-5 h-5 max-sm:w-4 max-sm:h-4">
              <CheckCircle className="w-5 h-5 max-sm:w-4 max-sm:h-4" />
            </div>
            <div className="text-center text-base font-medium leading-tight whitespace-nowrap max-sm:text-sm max-sm:leading-tight">
              {text}
            </div>
          </div>
        </a>
      ) : (
        <a
          href={href}
          className="inline-block h-10 max-sm:h-8 rounded-full px-4 max-sm:px-3 py-2.5 max-sm:py-2 border border-[#fcebde] mr-6 max-sm:mr-4 bg-[#fcebde] text-[#451e17]"
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="flex justify-center items-center gap-1.5">
            <div className="text-center text-base font-medium leading-tight whitespace-nowrap max-sm:text-sm max-sm:leading-tight">
              {text}
            </div>
            <div className="w-5 h-5 max-sm:w-4 max-sm:h-4">
              <ArrowUpRight className="w-5 h-5 max-sm:w-4 max-sm:h-4" />
            </div>
          </div>
        </a>
      )}
    </div>
  )
}

export default function FeatureSlider() {
  const scrollContainerRef = useRef(null)
  const scrollPositionRef = useRef(0)
  const animationRef = useRef(null)
  const [isPaused, setIsPaused] = useState(false)

  const features = [
    "Efficient Transactions",
    "Enhanced Security",
    "Optimized Resource Utilization",
    "Scalable Infrastructure",
    "Rapid Settlements",
    "Decentralized Control",
    "Seamless Integrations",
    "High Throughput",
  ]

  // Duplicate the features array to create an infinite scroll effect
  const allFeatures = [...features, ...features, ...features]

  const startScrollAnimation = () => {
    let lastTimestamp = 0
    const scrollSpeed = 0.5 // pixels per millisecond

    const step = (timestamp) => {
      if (!lastTimestamp) lastTimestamp = timestamp
      const deltaTime = timestamp - lastTimestamp

      if (!isPaused && scrollContainerRef.current) {
        // Update the scroll position
        scrollPositionRef.current += scrollSpeed * deltaTime

        // Apply the scroll position
        scrollContainerRef.current.scrollLeft = scrollPositionRef.current

        // Check if we need to reset the scroll position
        const firstSetWidth = scrollContainerRef.current.children[0].offsetWidth * features.length

        if (scrollPositionRef.current >= firstSetWidth) {
          // Reset to beginning when we've scrolled past the first set of features
          scrollPositionRef.current = 0
          scrollContainerRef.current.scrollLeft = 0
        }
      }

      lastTimestamp = timestamp
      animationRef.current = requestAnimationFrame(step)
    }

    animationRef.current = requestAnimationFrame(step)
  }

  useEffect(() => {
    // Start the animation
    startScrollAnimation()

    // Clean up on unmount
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [isPaused])

  // Handle container width changes
  useEffect(() => {
    const handleResize = () => {
      // Reset position when window resizes to prevent layout issues
      scrollPositionRef.current = 0
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollLeft = 0
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div id="feature-slider" className="w-full overflow-hidden bg-[#451e17] py-12 max-sm:py-6">
      <div className="overflow-hidden m-auto w-full">
        <div
          ref={scrollContainerRef}
          className="flex w-max overflow-x-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {allFeatures.map((feature, index) => (
            <FeatureButton key={`${feature}-${index}`} text={feature} />
          ))}
        </div>
      </div>
    </div>
  )
}
