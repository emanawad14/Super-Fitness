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


export function Navbar() {
  return (
    <nav className="bg-[#FFFFFF99] fixed w-full z-20 top-0 start-0 shadow-md">
      <div className="container mx-auto flex items-center justify-between px-6 py-2">

     
        <div className="flex items-center">
          <img
            src="/src/assets/images/auth1.png"
            alt="Logo"
            className="w-14 h-14 rounded-full"
          />
        </div>

       
        <div className="hidden md:flex space-x-20 font-semibold">
          <a href="/" className="hover:text-[#ff4500]">Home</a>
          <a href="/about" className="hover:text-[#ff4500]">About</a>
          <a href="/classes" className="hover:text-[#ff4500]">Classes</a>
          <a href="/healthy" className="hover:text-[#ff4500]">Healthy</a>
        </div>

        
        <div className="hidden md:flex space-x-12 items-center">
          <Button type="signup" text="Login" />
          <Button type="login" text="Register" />
        </div>

        
        <div className="md:hidden">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Menu</NavigationMenuTrigger>

                <NavigationMenuContent className="bg-[#141414] p-4 rounded-lg space-y-3">

                  <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                    <a href="/">Home</a>
                  </NavigationMenuLink>

                  <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                    <a href="/classes">Classes</a>
                  </NavigationMenuLink>

                  <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                    <a href="/healthy">Healthy</a>
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
