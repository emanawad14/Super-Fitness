type test={
    number:string
     title: string;
  desc: string;

}

import image1 from "../../src/assets/images/Figure [image-anime].png"
import image2 from "../../src/assets/images/Figure [image-anime] (2).png"
import image3 from "../../src/assets/images/Figure [image-anime] (1).png"
import image4 from "../../src/assets/images/Figure [image-anime] (3).png"
import WhyUs from "../../src/assets/images/Why us.png"

export default function WhyUsSection() {
  return (
    <div className="w-full py-20 px-6 lg:px-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">

  
        <div>
          <div className="flex flex-col items-start gap-2 mb-4">
            <img src={WhyUs} alt="Why us" className="w-auto h-auto" />

            <div className="flex items-center gap-2">
              <i className="fa-solid fa-dumbbell text-[#ff4500] text-[20px]"></i>
              <span className="font-semibold tracking-wide text-[#ff4500]">
                Why Us
              </span>
            </div>
          </div>

          <h1 className="text-[40px] uppercase font-bold leading-tight mb-4">
            Elevate fitness with the
            <span className="text-[#ff4500]"> best way </span> possible
          </h1>

          <p className="text-[#242424] leading-relaxed mb-10">
            We offer a fitness journey that’s tailored to your goals, supported by professional 
            trainers and a welcoming community. Whether it's weight loss, strength building, 
            or overall wellness, our proven methods help you transform.
          </p>

         
          <div className="relative">

            <div className="absolute left-7 top-0 bottom-0 w-[2px] border-l-2 border-dashed border-[#24242424]"></div>

            <Step 
              number="01"
              title="Personalized Fitness Plans"
              desc="We tailor every workout to fit your unique goals and fitness level ensuring 
              that you make the most progress."
            />

            <Step 
              number="02"
              title="Results-Driven Focus"
              desc="Everything we do is designed to help you achieve measurable results, 
              whether you're aiming for weight loss."
            />

            <Step 
              number="03"
              title="state-of-the-art equipment"
              desc="We provide the latest in gym equipment, from cardio machines to free 
              weights, designed to support every type."
            />

          </div>
        </div>

       
        <div className="grid grid-cols-2 gap-6 mb-12">

          <div className="flex flex-col gap-6">
            <img 
              src={image1}
              alt=""
              className="rounded-2xl w-full h-[360px] object-cover"
            />
            <img 
              src={image2}
              alt=""
              className="rounded-2xl w-full h-[360px] object-cover"
            />
          </div>

          <div className="flex flex-col gap-6">
            <img 
              src={image3}
              alt=""
              className="rounded-2xl w-full h-[300px] object-cover"
            />
            <img 
              src={image4}
              alt=""
              className="rounded-2xl w-full h-[300px] object-cover"
            />
          </div>

        </div>

      </div>
    </div>
  );
}

function Step({ number, title, desc }:test) {
  return (
    <div className="flex items-start gap-6 mb-12">
      <div className="relative z-10 w-14 aspect-square rounded-full
        bg-[#ff4500] text-white flex items-center justify-center font-bold text-xl">
        {number}
      </div>

      <div>
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-gray-600">{desc}</p>
      </div>
    </div>
  );
}
