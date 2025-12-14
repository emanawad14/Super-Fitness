 import logo from "../../src/assets/images/auth1.png"

export default function Footer() {
  return (
    <footer className="bg-white py-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-5">

        <div className="space-y-4 text-center md:text-left">
          <img src={logo} alt="Logo" className="h-12 mx-auto md:mx-0" />
          <p>Push harder, go further.</p>
          <p>Your fitness journey starts today!</p>
        </div>

        {/* Contact Us */}
        <div className="space-y-4 text-center md:text-left">
          <h2 className="text-xl font-bold mb-2">Contact Us</h2>

          <div className="flex items-center gap-3 justify-center md:justify-start">
            <div className="border rounded-full h-8 w-8 flex items-center justify-center text-[#e63e00]">
              <i className="fa-solid fa-phone"></i>
            </div>
            <p>+91 123 456 789</p>
          </div>

          <div className="flex items-center gap-3 justify-center md:justify-start">
            <div className="border rounded-full h-8 w-8 flex items-center justify-center text-[#e63e00]">
              <i className="fa-solid fa-envelope"></i>
            </div>
            <p>info@gmail.com</p>
          </div>
        </div>

        {/* Gym Timing */}
        <div className="space-y-4 text-center md:text-left">
          <h2 className="text-xl font-bold mb-2">Our Gym Timing</h2>
          <p>Mon - Fri : 08:00 AM - 10:00 PM</p>
          <p>Sat - Sun : 08:00 AM - 09:00 PM</p>
        </div>

        {/* Location */}
        <div className="space-y-4 text-center md:text-left">
          <h2 className="text-xl font-bold mb-2">Our Location</h2>
          <p>2715 Ash Dr. San Jose, South</p>
          <p>Dakota 83475</p>
        </div>

      </div>
    </footer>
  );
}
