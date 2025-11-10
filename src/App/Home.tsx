

import heroImage from "../../public/images/Theo Vance.png"; 

export default function Home() {
  return (
    <section className="bg-[#141414] text-white min-h-screen flex items-center">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center px-6 md:px-12 py-12 md:py-20 gap-8">
        
        
        <div className="flex flex-col items-start justify-center text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight uppercase">
            Your Body Can{" "}
            <span className="text-[#ff4500]">Stand</span> Almost{" "}
            <span className="text-[#ff4500]">Anything</span>
          </h1>

          <p className="text-gray-300 max-w-md">
            It's your mind that needs convincing. Push past your limits, stay
            committed, and watch as your body transform into a powerhouse of
            strength and resilience. Start your journey today & truly become
            capable of more!
          </p>

          
          <div className="flex flex-wrap gap-6 pt-4 justify-center md:justify-start">
            <div className="flex flex-col items-center md:items-start">
              <h2 className="text-2xl font-bold text-[#ff4500]">1200+</h2>
              <p className="text-gray-300 text-sm">Active Members</p>
            </div>

            <div className="flex flex-col items-center md:items-start">
              <h2 className="text-2xl font-bold text-[#ff4500]">12+</h2>
              <p className="text-gray-300 text-sm">Certified Trainers</p>
            </div>

            <div className="flex flex-col items-center md:items-start">
              <h2 className="text-2xl font-bold text-[#ff4500]">20+</h2>
              <p className="text-gray-300 text-sm">Years of Experience</p>
            </div>
          </div>

          
          <div className="flex flex-wrap gap-4 pt-6 justify-center md:justify-start">
            <button className="bg-[#ff4500] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#e63e00] transition">
              Get Started
            </button>
            <button className="border border-[#ff4500] text-[#ff4500] px-6 py-2 rounded-full font-semibold hover:bg-[#ff4500] hover:text-white transition">
              Explore More
            </button>
          </div>
        </div>

        
        <div className="flex justify-center md:justify-end">
          <img
            src={heroImage}
            alt="Hero"
            className="object-contain w-[280px] md:w-[450px] rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
}
