import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Button from "@/shared/Button";
import logo from "../../src/assets/images/auth1.png"
import { NavLink } from "react-router-dom";


export function Navbar() {
  return (
    <nav className="bg-[#FFFFFF99] fixed w-full z-20 top-0 start-0 shadow-md">
      <div className="container mx-auto flex items-center justify-between px-6 py-2">

     
        <div className="flex items-center">
          <img
            src={logo}
            alt="Logo"
            className="w-14 h-14 rounded-full"
          />
        </div>

       
        <div className="hidden md:flex space-x-20 font-semibold">
          <NavLink to="/" className="hover:text-[#ff4500]">Home</NavLink>
          <NavLink to="/AboutSection" className="hover:text-[#ff4500]">About</NavLink>
          <NavLink to="/workout" className="hover:text-[#ff4500]">Classes</NavLink>
          <NavLink to="/meals" className="hover:text-[#ff4500]">Healthy</NavLink>
        </div>

        
        <div className="hidden md:flex space-x-12 items-center">
          <Button  type="signup" text="Login" />
          <Button type="login" text="Register" />
        </div>

        
        <div className="md:hidden">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Menu</NavigationMenuTrigger>

                <NavigationMenuContent className="bg-[#141414] p-4 rounded-lg space-y-3">

                  <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                    <NavLink to="/">Home</NavLink>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                    <NavLink to="/AboutSection">About</NavLink>
                  </NavigationMenuLink>

                  <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                    <NavLink to="/workout">Classes</NavLink>
                  </NavigationMenuLink>

                  <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                    <NavLink to="/meals">Healthy</NavLink>
                  </NavigationMenuLink>

                  <div className="flex flex-col gap-3 mt-4">
                    <Button type="signup" text="Login" />
                    <Button type="login" text="Register" />
                  </div>

                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

      </div>
    </nav>
  );
}
