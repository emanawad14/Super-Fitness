
type FeatureProps = {
  title: string;
  desc: string;
};

export default function AboutSection() {

    
  return (
    <div className="w-full py-30 px-6 lg:px-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">

       
        <div className="grid grid-cols-2 gap-3 mb-12">

          <div className="flex flex-col gap-6">
            <img
              src="../../src/assets/images/Images2.png"
              alt=""
              className="rounded-2xl w-full h-[500px] object-cover relative z-0"
            />
          </div>

          <div className="relative flex flex-col gap-6">
            <img
              src="../../src/assets/images/images3.png"
              alt=""
              className="rounded-2xl w-[222px] h-[188.0399932861328px] object-cover"
            />

            <img
              src="../../src/assets/images/images4.png"
              alt=""
              className="rounded-2xl w-[700px] h-[450px] object-cover
                relative -left-13 md:-bottom-0 z-10 shadow-xl"
            />
          </div>

        </div>

        {/* Content */}
        <div>

          {/* Title */}
          <div className="flex flex-col items-start gap-2 mb-4">
            <img src="../../src/assets/images/About us.png" alt="About us" />

            <div className="flex items-center gap-2">
              <i className="fa-solid fa-dumbbell text-[#ff4500] text-[25px]"></i>
              <span className="font-semibold tracking-wide text-[#ff4500]">
                About Us
              </span>
            </div>
          </div>

          <h1 className="text-[40px] font-bold leading-tight mb-4">
            EMPOWERING YOU TO ACHIEVE
            <span className="text-[#ff4500]"> YOUR FITNESS</span> GOALS
          </h1>

          <p className="text-gray-600 leading-relaxed mb-10">
            We believe fitness is more than just a workout—it's
            a lifestyle. With top-of-the-line facilities,
            certified trainers, and a supportive community,
            we're here to inspire and guide you every step
            of the way.
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Feature
              title="Personal Trainer"
              desc="Achieve your fitness goals with the guidance of our certified trainers."
            />
            <Feature
              title="Cardio Programs"
              desc="From steady-state runs to interval sprints, our treadmill programs."
            />
          </div>

          <hr className="mt-7" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-9">
            <Feature
              title="Quality Equipment"
              desc="Our gym is equipped with the latest cardio & strength machines."
            />
            <Feature
              title="Healthy Nutritions"
              desc="Fuel your fitness journey with customized meal plans for you."
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-between items-center gap-15 mt-10">

            {/* CTA */}
            <div className="relative">
              <button
                className="bg-[#ff4500] text-white px-10 py-3 rounded-full
                font-semibold hover:bg-[#e63e00] transition relative z-10"
              >
                Get Started
              </button>

              <div className="absolute top-2 -right-7 translate-y-1/2 z-20">
                <div className="bg-[#ff4500] text-white p-2 rounded-full shadow-lg
                  flex items-center justify-center w-10 h-10">
                  <i className="fa-solid fa-up-right-from-square"></i>
                </div>
              </div>
            </div>

            {/* Chat */}
            <div className="flex flex-col items-center md:items-start gap-2">
              <img className="w-30 h-30" src="../../src/assets/images/emo.png" alt="emo" />
              <button className="bg-[#e63e00] mb-20 text-white px-6 py-2 rounded-full">
                Hey Ask me
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

function Feature({ title, desc } :FeatureProps) {
  return (
    <div>
      <div className="flex items-center gap-5">
        <i className="fa-solid fa-up-right-from-square"></i>
        <h1 className="font-bold text-[17px]">{title}</h1>
      </div>
      <p className="mt-5">{desc}</p>
    </div>
  );
}
