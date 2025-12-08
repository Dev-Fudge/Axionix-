import React from "react";
import { motion } from "framer-motion";
import { Ship, Truck, Plane, ShieldCheck, FileSearch, LifeBuoy, PhoneCall, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

/**
 * Axionix Website — Sleek, professional multi-modal cargo surveying interface
 * Focus: heavy vehicles, aircraft, and ships
 */

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function AxionixHome() {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-blue-50 via-white to-slate-100 text-slate-800 font-sans">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 w-full backdrop-blur bg-white/70 border-b border-slate-200 shadow-sm">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">
          <div className="flex items-center gap-2 font-bold text-xl tracking-tight text-blue-900">
            <span
              className="inline-block w-8 h-8 bg-[url('/Axionix.png')] bg-contain bg-no-repeat bg-center mr-2"
              role="img"
              aria-label="Axionix logo"
            ></span>
            AXIONIX
          </div>
          <div className="hidden md:flex gap-8 text-base font-medium">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="hover:text-blue-700 transition-colors duration-150"
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="hidden md:flex">
            <Button size="sm" asChild>
              <a href="#contact">Request a Survey</a>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="pt-10 pb-20 flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto px-6 gap-10"
      >
        <div className="flex-1 flex flex-col gap-6 items-start">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-4xl md:text-5xl font-extrabold text-blue-900"
          >
            Multi-Modal Cargo Surveying <br /> & Recoveries, Done Right
          </motion.h1>
          <p className="text-lg text-slate-700 max-w-lg">
            Axionix provides independent, technology-driven surveys for <b>heavy vehicles</b>,{" "}
            <b>aircraft</b>, and <b>ships</b>—backed by rapid recovery action and digital
            chain-of-custody you can trust.
          </p>
          <div className="flex gap-6 pt-2 flex-wrap">
            <span className="inline-flex items-center gap-2 text-blue-700 font-semibold">
              <ShieldCheck size={20} /> Insured & Certified
            </span>
            <span className="inline-flex items-center gap-2 text-blue-700 font-semibold">
              <FileSearch size={20} /> 24/7 Call-Outs
            </span>
          </div>
          <div className="flex gap-3">
            <Button size="lg" asChild>
              <a href="#contact">Request a Survey</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#services">View Services</a>
            </Button>
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="relative w-[420px] h-[320px] md:w-[500px] md:h-[360px] bg-gradient-to-br from-blue-200/40 via-white to-blue-100 rounded-3xl shadow-xl border border-slate-200 flex flex-col items-center justify-center"
            aria-hidden
          >
            <Truck className="absolute top-10 left-10 w-20 h-20 text-blue-700/70" />
            <Ship className="absolute bottom-12 right-16 w-24 h-24 text-blue-900/80" />
            <Plane className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-24 h-24 text-yellow-400/70" />
            <span className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-blue-900 text-white text-sm font-semibold rounded-full px-6 py-1 shadow">
              Heavy, Air, Sea
            </span>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-white border-y border-slate-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-10">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-shadow duration-200">
              <CardContent className="flex flex-col gap-4 items-center p-8">
                <Truck className="w-16 h-16 text-blue-700" aria-hidden />
                <h3 className="text-xl font-semibold">Heavy Vehicle Surveys</h3>
                <p className="text-center text-slate-600">
                  Detailed post-transport condition checks, damage analysis and claim documentation
                  for trucks, trailers, plant, mining, and special-move loads.
                </p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-xl transition-shadow duration-200">
              <CardContent className="flex flex-col gap-4 items-center p-8">
                <Plane className="w-16 h-16 text-yellow-400" aria-hidden />
                <h3 className="text-xl font-semibold">Aircraft Cargo Surveying</h3>
                <p className="text-center text-slate-600">
                  Loadmaster oversight, tie-down verification, incident surveys, and cargo
                  condition reporting for airfreight—including outsize, sensitive, and military
                  consignments.
                </p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-xl transition-shadow duration-200">
              <CardContent className="flex flex-col gap-4 items-center p-8">
                <Ship className="w-16 h-16 text-blue-900" aria-hidden />
                <h3 className="text-xl font-semibold">Marine Surveys & Recoveries</h3>
                <p className="text-center text-slate-600">
                  Cargo tally, loss assessment, salvage coordination and independent reporting for
                  ships, containers, break-bulk and project cargo.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-16 bg-gradient-to-br from-blue-50 via-white to-blue-100">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-blue-900 mb-8">How It Works</h2>
          <ol className="grid md:grid-cols-4 gap-8 text-center">
            <li className="flex flex-col items-center">
              <span className="rounded-full bg-blue-900 text-white w-14 h-14 flex items-center justify-center mb-2">
                <FileSearch size={30} aria-hidden />
              </span>
              <span className="font-semibold">Request</span>
              <span className="text-slate-500 text-sm">Call or email with your cargo details</span>
            </li>
            <li className="flex flex-col items-center">
              <span className="rounded-full bg-blue-700 text-white w-14 h-14 flex items-center justify-center mb-2">
                <ShieldCheck size={30} aria-hidden />
              </span>
              <span className="font-semibold">Survey</span>
              <span className="text-slate-500 text-sm">On-site inspection, digital evidence, rapid reporting</span>
            </li>
            <li className="flex flex-col items-center">
              <span className="rounded-full bg-yellow-400 text-blue-900 w-14 h-14 flex items-center justify-center mb-2">
                <LifeBuoy size={30} aria-hidden />
              </span>
              <span className="font-semibold">Recovery</span>
              <span className="text-slate-500 text-sm">Loss mitigation, salvage, claim support</span>
            </li>
            <li className="flex flex-col items-center">
              <span className="rounded-full bg-slate-300 text-blue-900 w-14 h-14 flex items-center justify-center mb-2">
                <Ship size={30} aria-hidden />
              </span>
              <span className="font-semibold">Report</span>
              <span className="text-slate-500 text-sm">Comprehensive docs for your underwriter</span>
            </li>
          </ol>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">About Axionix</h2>
            <p className="text-slate-600 leading-relaxed">
              Axionix is a modern, technology-enabled survey and recovery firm. We serve logistics
              providers, underwriters, and cargo owners with accuracy, independence, and
              speed—across air, sea, and heavy-road transport modes.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row gap-10 items-center">
          <div className="flex-1 space-y-4">
            <h2 className="text-3xl font-bold">Request a Survey</h2>
            <p className="text-slate-200">
              Need rapid support? Call us any time or send the consignment details to schedule a
              survey and recovery team.
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="tel:+1234567890"
                className="inline-flex items-center gap-2 text-lg font-semibold text-white"
              >
                <PhoneCall size={20} /> +1 (234) 567-890
              </a>
              <a
                href="mailto:ops@axionix.example"
                className="inline-flex items-center gap-2 text-lg font-semibold text-white"
              >
                <Mail size={20} /> ops@axionix.example
              </a>
            </div>
          </div>
          <div className="flex-1 w-full">
            <form className="bg-white text-slate-900 rounded-xl p-6 shadow-lg space-y-4">
              <div>
                <label className="block text-sm font-semibold text-slate-700">Name</label>
                <input
                  type="text"
                  className="w-full mt-1 rounded-lg border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700">Email</label>
                <input
                  type="email"
                  className="w-full mt-1 rounded-lg border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700">Cargo Details</label>
                <textarea
                  className="w-full mt-1 rounded-lg border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows={4}
                  placeholder="Describe the cargo, location, and timeline"
                />
              </div>
              <Button type="submit" className="w-full">
                Send Request
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
