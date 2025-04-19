"use client"

import { useEffect, useRef } from "react"

const TVLConfigs = () => {
  const scrollRef = useRef(null)

  // 1. CUSTOMIZE YOUR IMAGES HERE
  // Add as many images as you want to this array
  const images = [
    { id: 1, src: "/slides/image.webp", alt: "Blockchain 1 testing" },
    { id: 2, src: "/slides/image (1).webp", alt: "Blockchain 2" },
    { id: 3, src: "/slides/image (2).webp", alt: "Blockchain 3" },
    { id: 4, src: "/slides/image (3).webp", alt: "Blockchain 4" },
    { id: 5, src: "/slides/image (4).webp", alt: "Blockchain 5" },
    // Add more images here
    { id: 6, src: "/slides/image (5).webp", alt: "Blockchain 6" },
    { id: 7, src: "/slides/image (6).webp", alt: "Blockchain 7" },
    { id: 8, src: "/slides/image (7).webp", alt: "Blockchain 8" },
    { id: 9, src: "/slides/image (8).webp", alt: "Blockchain 9" },
    { id: 10, src: "/slides/image (10).webp", alt: "Blockchain 10" },
    { id: 10, src: "/slides/image (11).webp", alt: "Blockchain 10" },
    { id: 10, src: "/slides/image (12).webp", alt: "Blockchain 10" },
    { id: 10, src: "/slides/image (13).webp", alt: "Blockchain 10" },
    { id: 10, src: "/slides/image (14).webp", alt: "Blockchain 10" },
    { id: 10, src: "/slides/image (15).webp", alt: "Blockchain 10" },
    { id: 10, src: "/slides/image (16).webp", alt: "Blockchain 10" },
    { id: 10, src: "/slides/image (16).webp", alt: "Blockchain 10" },
    { id: 10, src: "/slides/image (17).webp", alt: "Blockchain 10" },
    { id: 10, src: "/slides/image (18).webp", alt: "Blockchain 10" },
    { id: 10, src: "/slides/image (19).webp", alt: "Blockchain 10" },
    { id: 10, src: "/slides/image (20).webp", alt: "Blockchain 10" },
    { id: 10, src: "/slides/image (21).webp", alt: "Blockchain 10" },
    { id: 10, src: "/slides/image (22).webp", alt: "Blockchain 10" },
  ]

  // 2. CUSTOMIZE MASK IMAGES HERE
  const maskDesktop = "/slides/image.webp" // Replace with your mask image
  const maskMobile = "/slides/image.webp" // Replace with your mobile mask image

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let animationId
    let scrollPosition = 0
    const scrollSpeed = 1 // 3. ADJUST SCROLL SPEED HERE (higher = faster)

    const scroll = () => {
      scrollPosition += scrollSpeed

      // Reset position when scrolled enough to create seamless loop effect
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0
      }

      scrollContainer.scrollLeft = scrollPosition
      animationId = requestAnimationFrame(scroll)
    }

    // Start the animation
    animationId = requestAnimationFrame(scroll)

    // Cleanup on unmount
    return () => {
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <div className="max-w-7xl m-auto w-full overflow-hidden" id="tvlConfigs">
      <div className="overflow-hidden m-auto w-full relative pt-16 max-sm:pt-9">
        {/* 4. MASK IMAGES */}
        {/* <img
          alt="Mask"
          loading="lazy"
          className="max-w-7xl h-10 absolute top-16 z-20 max-sm:hidden"
          src={maskDesktop || "/placeholder.svg"}
        /> */}
        {/* <img
          alt="Mobile Mask"
          loading="lazy"
          className="w-full max-w-7xl h-10 absolute top-9 z-20 sm:hidden"
          src={maskMobile || "/placeholder.svg"}
        /> */}

        {/* Scrolling Content */}
        <div ref={scrollRef} className="scrollBox w-full overflow-x-hidden">
          <div className="flex gap-12 w-max">
            
            {images.map((img) => (
              <img
                key={`first-${img.id}`}
                alt={img.alt}
                loading="lazy"
                className="w-auto h-10" // 6. ADJUST IMAGE SIZE HERE
                src={img.src || "/placeholder.svg"}
              />
            ))}

            
            {images.map((img) => (
              <img
                key={`second-${img.id}`}
                alt={img.alt}
                loading="lazy"
                className="w-auto h-10" // Must match size above
                src={img.src || "/placeholder.svg"}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function SlidingImages() {
  return (
    <div className="w-full overflow-hidden py-32 max-lg:py-24 max-sm:py-16 px-6 sm:px-20 max-xl:px-10 z-30">
      <TVLConfigs />
    </div>
  )
}
