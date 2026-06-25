import FooterMinimal from '@/components/sections/footer/FooterMinimal';
import NavbarInline from '@/components/ui/NavbarInline';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import { MapPin, Phone } from "lucide-react";
import { Outlet } from 'react-router-dom';
import { StyleProvider } from "@/components/ui/StyleProvider";

export default function Layout() {
  const navItems = [
  {
    "name": "Home",
    "href": "#hero"
  },
  {
    "name": "Products",
    "href": "#products"
  },
  {
    "name": "About",
    "href": "#about"
  },
  {
    "name": "Contact",
    "href": "#contact"
  },
  {
    "name": "Metrics",
    "href": "#metrics"
  },
  {
    "name": "Testimonials",
    "href": "#testimonials"
  },
  {
    "name": "Faq",
    "href": "#faq"
  }
];

  return (
    <StyleProvider buttonVariant="expand" siteBackground="aurora" heroBackground="horizonGlow">
      <SiteBackgroundSlot />
      <SectionErrorBoundary name="navbar">
        <NavbarInline
      logo="Sony KMB Market"
      ctaButton={{
        text: "Visit Us",
        href: "#contact",
      }}
     navItems={navItems} />
      </SectionErrorBoundary>
      <main className="flex-grow">
        <Outlet />
      </main>
      <SectionErrorBoundary name="footer">
        <FooterMinimal
      brand="Sony KMB Market"
      copyright="© 2024 Sony KMB Market. All rights reserved."
      socialLinks={[
        {
          icon: Phone,
          href: "tel:+393512617506",
        },
        {
          icon: MapPin,
          href: "https://maps.google.com/?q=Via+G.+Matteotti,+49,+43017+San+Secondo+Parmense+PR",
        },
      ]}
    />
      </SectionErrorBoundary>
    </StyleProvider>
  );
}
