import React from 'react'

/**
 * @param {{
 *   className?: string
 *   testimonials: { text: string; image: string; name: string; role: string }[]
 *   duration?: number
 * }} props
 */
export function TestimonialsColumn(props) {
  const { className, testimonials, duration = 10 } = props

  return (
    <div className={className}>
      <div
        className="testimonials-column-track flex flex-col gap-6 bg-transparent pb-6"
        style={{ '--testimonials-duration': `${duration}s` }}
      >
        {Array.from({ length: 2 }, (_, dupIndex) => (
          <React.Fragment key={dupIndex}>
            {testimonials.map((item, i) => (
              <div
                className="w-full max-w-xs rounded-3xl border border-black/10 bg-white p-8 shadow-lg shadow-black/10"
                key={`${dupIndex}-${i}-${item.name}`}
              >
                <div className="text-sm leading-relaxed text-[#333]">
                  {item.text}
                </div>
                <div className="mt-5 flex items-center gap-2">
                  <img
                    width={40}
                    height={40}
                    src={item.image}
                    alt={item.name}
                    className="h-10 w-10 rounded-full object-cover"
                  />
                  <div className="flex flex-col">
                    <div className="text-sm font-medium leading-5 tracking-tight text-[#111]">
                      {item.name}
                    </div>
                    <div className="text-sm leading-5 tracking-tight text-[#555] opacity-80">
                      {item.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}
