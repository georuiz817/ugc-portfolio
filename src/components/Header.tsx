"use client";
import { useState } from "react";

import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Menu } from "lucide-react";
import '../styles/header.css'

export function Header() {
   const [open, setOpen] = useState(false);

  const handleLinkClick = () => setOpen(false); // closes the menu

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Work", href: "#portfolio" },
    { label: "Services", href: "#services" },
    { label: "Reviews", href: "#reviews" },

    
  ];

  

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-inner">
          <div className="logo">
            <h1>RR UGC</h1>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="nav-desktop">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="nav-link"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile Navigation */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm" className="hamburger-btn">
                <Menu className="hamburger-icon" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="sheet-content">
              <div className="nav-mobile">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="mobile-nav-link"
                                  onClick={handleLinkClick}

                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}