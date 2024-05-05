import React from 'react'

const CTA = () => {
  return (
    <>
     <div className="relative mx-auto max-w-5xl my-20">
      <div className="rounded-xl p-1 " style={{ backgroundImage: "linear-gradient(to right bottom, rgba(79, 70, 229, 0.3) 0%, rgba(165, 56, 164, 0.3) 50%, rgba(220, 38, 38, 0.3) 100%)" }}>
        <div className="rounded-lg bg-black/80 backdrop-blur">
          <div className="flex w-full flex-wrap items-center justify-between gap-4 px-8 py-10 sm:px-16 lg:flex-nowrap">
            <div className="lg:max-w-xl">
              <h2 className="block w-full pb-2 bg-gradient-to-b from-white to-gray-400 bg-clip-text font-bold text-transparent text-3xl sm:text-4xl">
                Connect with Us to get your own virtual try On
              </h2>
              <p className="my-4 bg-transparent font-medium leading-relaxed tracking-wide text-gray-400">
              Our team assists with the seamless installation of the plugin on your platform
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-6">
                <a href='/contact'>

                <button className="flex items-center justify-center whitespace-nowrap rounded-md border border-zinc-700 bg-zinc-900 text-center text-white backdrop-blur transition-all hover:bg-zinc-800 px-8 py-3 text-xs sm:text-sm">Request a demo</button>
                </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default CTA