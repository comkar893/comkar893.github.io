
import Link from 'next/link';
import Logo from '@/components/logo';
import { Button } from '@/components/ui/button';
import type { FC } from 'react';
import { Menu, UserRound, GraduationCap, Briefcase, WandSparkles, Lightbulb, Mail } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { cn } from '@/lib/utils';

interface NavItem {
  href: string;
  label: string;
  icon: FC<React.SVGProps<SVGSVGElement>>;
  id: string;
}

const navItems: NavItem[] = [
  { href: '/#about', label: 'About', icon: UserRound, id: 'about' },
  { href: '/#education', label: 'Education', icon: GraduationCap, id: 'education' },
  { href: '/#experience', label: 'Work Experience', icon: Briefcase, id: 'experience' },
  { href: '/#skills', label: 'Skills', icon: WandSparkles, id: 'skills' },
  { href: '/#projects', label: 'Projects & Publications', icon: Lightbulb, id: 'projects' },
  // { href: '/#contact', label: 'Contact', icon: Mail, id: 'contact' },
];

const Header: FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-screen-xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo />
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
          {navItems.map((item) => (
            <Button
              key={item.href}
              variant="ghost"
              asChild
              className={cn(
                "text-sm font-medium transition-all duration-300 hover:scale-105 hover:bg-transparent", // Added hover:bg-transparent
                "text-muted-foreground hover:text-primary"
              )}
            >
              <Link href={item.href} className="flex items-center gap-2 px-3 py-2">
                <item.icon className="h-4 w-4 shrink-0" />
                {item.label}
              </Link>
            </Button>
          ))}
        </nav>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary hover:bg-transparent"> {/* Added hover:bg-transparent */}
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] bg-background p-6">
              <nav className="flex flex-col space-y-4 mt-8">
                {navItems.map((item) => (
                  <SheetClose asChild key={item.href}>
                    <Button
                      variant="ghost"
                      asChild
                      className={cn(
                        "w-full justify-start text-lg font-medium transition-all duration-300 hover:scale-105 hover:bg-transparent", // Added hover:bg-transparent
                        "text-muted-foreground hover:text-primary"
                      )}
                    >
                      <Link href={item.href} className="flex items-center gap-3 p-3">
                        <item.icon className="h-5 w-5 shrink-0" />
                        {item.label}
                      </Link>
                    </Button>
                  </SheetClose>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
