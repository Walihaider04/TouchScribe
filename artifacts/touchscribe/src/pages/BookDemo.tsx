import { useState, useEffect, useRef } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Stethoscope, CheckCircle2, ShieldCheck, Clock, ArrowLeft, Send } from "lucide-react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

export default function BookDemo() {
  const [, navigate] = useLocation();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    practice: "",
    specialty: "",
    size: "",
    booking_type: "",
    message: "",
  });

  const urlType = new URLSearchParams(window.location.search).get("type");
  const isService = urlType === "service";
  const formHeading = isService ? "Requesting Service" : "Book a Free Demo";
  const intentValue = isService ? "Service Request" : "Demo Request";
  const subjectLine = isService ? "New Service Request - TouchScribe" : "New Demo Request - TouchScribe";
  const defaultBookingType = isService ? "Service" : "Demo";

  useEffect(() => {
    document.title = isService
      ? "Book a Service — TouchScribe"
      : "Book a Free Demo — TouchScribe";
    setForm(prev => ({ ...prev, booking_type: defaultBookingType }));
  }, [isService]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    const data = new FormData();
    data.append("firstName", form.firstName);
    data.append("lastName", form.lastName);
    data.append("email", form.email);
    data.append("phone", form.phone);
    data.append("practice", form.practice);
    data.append("specialty", form.specialty);
    data.append("size", form.size);
    data.append("booking_type", form.booking_type);
    data.append("intent", intentValue);
    data.append("message", form.message);
    data.append("_subject", subjectLine);
    data.append("_template", "table");
    data.append("_captcha", "true");
    try {
      const res = await fetch("https://formsubmit.co/ajax/nayeemkhattak@gmail.com", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      const json = await res.json();
      if (json.success === "true" || json.success === true) {
        setSubmitted(true);
      } else {
        setError("Something went wrong. Please try again or email us directly.");
      }
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Nav */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/90 backdrop-blur-md">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 group"
          >
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <Stethoscope className="text-white w-5 h-5" />
            </div>
            <span className="font-semibold text-lg tracking-tight text-slate-900">TouchScribe</span>
          </button>
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-1.5 text-sm font-medium text-slate-500 hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero strip */}
        <div className="bg-gradient-to-br from-primary/5 via-blue-50/50 to-white border-b border-slate-100 py-14 px-4">
          <div className="container mx-auto text-center max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-sm font-semibold text-primary uppercase tracking-widest mb-3"
            >
              {isService ? "Book a Service" : "Free Demo"}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 leading-tight"
            >
              {formHeading}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-slate-500 text-lg leading-relaxed"
            >
              Fill in your details and our team will reach out within one business day to schedule a personalised walkthrough.
            </motion.p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16 max-w-6xl">
          <div className="grid lg:grid-cols-[1fr_380px] gap-12 items-start">

            {/* Form */}
            {!submitted ? (
              <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
              >
                <form
                  onSubmit={handleSubmit}
                  className="space-y-6"
                  aria-label={formHeading}
                  noValidate
                >
                  {/* Honeypot — hidden from real users, catches bots */}
                  <input type="text" name="_honey" style={{ display: "none" }} tabIndex={-1} autoComplete="off" aria-hidden="true" />
                  {/* Booking type dropdown */}
                  <motion.div variants={fadeInUp}>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">Booking Type <span className="text-red-400">*</span></label>
                    <select
                      name="booking_type"
                      value={form.booking_type}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all appearance-none"
                    >
                      <option value="">Select Booking Type</option>
                      <option value="Demo">Free Demo</option>
                      <option value="Service">Paid Service</option>
                    </select>
                  </motion.div>
                  {/* Name row */}
                  <motion.div variants={fadeInUp} className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-1.5">First Name <span className="text-red-400">*</span></label>
                      <input
                        name="firstName"
                        value={form.firstName}
                        onChange={handleChange}
                        required
                        placeholder="Jane"
                        aria-label="First Name"
                        autoComplete="given-name"
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-1.5">Last Name <span className="text-red-400">*</span></label>
                      <input
                        name="lastName"
                        value={form.lastName}
                        onChange={handleChange}
                        required
                        placeholder="Smith"
                        aria-label="Last Name"
                        autoComplete="family-name"
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                      />
                    </div>
                  </motion.div>

                  {/* Contact row */}
                  <motion.div variants={fadeInUp} className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-1.5">Work Email <span className="text-red-400">*</span></label>
                      <input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="jane@clinicname.com"
                        aria-label="Work Email"
                        autoComplete="email"
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-1.5">Phone Number</label>
                      <input
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 000-0000"
                        aria-label="Phone Number"
                        autoComplete="tel"
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                      />
                    </div>
                  </motion.div>

                  {/* Practice */}
                  <motion.div variants={fadeInUp}>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">Practice / Organization Name <span className="text-red-400">*</span></label>
                    <input
                      name="practice"
                      value={form.practice}
                      onChange={handleChange}
                      required
                      placeholder="e.g. Riverside Internal Medicine"
                      aria-label="Practice or Organization Name"
                      autoComplete="organization"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                    />
                  </motion.div>

                  {/* Specialty + Size */}
                  <motion.div variants={fadeInUp} className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-1.5">Specialty</label>
                      <select
                        name="specialty"
                        value={form.specialty}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all appearance-none"
                      >
                        <option value="">Select specialty</option>
                        <option>Internal Medicine</option>
                        <option>Family Medicine</option>
                        <option>Urgent Care</option>
                        <option>Multi-provider Group</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-1.5">Practice Size</label>
                      <select
                        name="size"
                        value={form.size}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all appearance-none"
                      >
                        <option value="">Select size</option>
                        <option>Solo provider</option>
                        <option>2–5 providers</option>
                        <option>6–15 providers</option>
                        <option>16+ providers</option>
                      </select>
                    </div>
                  </motion.div>

                  {/* Message */}
                  <motion.div variants={fadeInUp}>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">Anything specific you'd like to discuss?</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="e.g. We use Epic and need help with prior auth workflows..."
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all resize-none"
                    />
                  </motion.div>

                  {error && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
                      role="alert"
                    >
                      {error}
                    </motion.div>
                  )}

                  <motion.div variants={fadeInUp}>
                    <Button
                      type="submit"
                      size="lg"
                      disabled={loading}
                      aria-busy={loading}
                      className="w-full rounded-full h-14 text-base font-semibold shadow-lg shadow-primary/20 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {loading ? (
                        <>
                          <svg className="animate-spin mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                          </svg>
                          Sending…
                        </>
                      ) : (
                        <>
                          {isService ? "Request Service" : "Book My Free Demo"}
                          <Send className="ml-2 w-4 h-4" />
                        </>
                      )}
                    </Button>
                    <p className="text-xs text-slate-400 text-center mt-3">No obligation. No pressure. We'll reach out within 1 business day.</p>
                  </motion.div>
                </form>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col items-center justify-center text-center py-20"
              >
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-10 h-10 text-primary" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-3">You're all set!</h2>
                <p className="text-slate-500 text-lg max-w-md leading-relaxed mb-8">
                  Thanks for reaching out. Our team will contact you within one business day to schedule your personalised demo.
                </p>
                <Button variant="outline" className="rounded-full px-8" onClick={() => navigate("/")}>
                  <ArrowLeft className="mr-2 w-4 h-4" />
                  Back to Home
                </Button>
              </motion.div>
            )}

            {/* Sidebar */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="space-y-5"
            >
              <motion.div variants={fadeInUp}>
                <Card className="bg-slate-50 border-slate-200">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-slate-900 mb-4">What to expect</h3>
                    <ul className="space-y-3">
                      {[
                        "30-minute live walkthrough tailored to your specialty",
                        "See real-time scribing and documentation in action",
                        "Custom workflow plan for your practice",
                        "Q&A with a TouchScribe specialist",
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-3 text-sm text-slate-600">
                          <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="border-primary/20 bg-primary/5">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <ShieldCheck className="w-5 h-5 text-primary" />
                      <span className="font-bold text-slate-900 text-sm">HIPAA Compliant</span>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      All information you share is handled with full HIPAA compliance and never shared with third parties.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="border-slate-200">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Clock className="w-5 h-5 text-primary" />
                      <span className="font-bold text-slate-900 text-sm">Response time</span>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Our team responds within <strong className="text-slate-800">1 business day</strong> to confirm your demo slot.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <blockquote className="border-l-4 border-primary/30 pl-4">
                  <p className="text-sm italic text-slate-600 leading-relaxed">
                    "TouchScribe significantly reduced our documentation load and improved turnaround time. The combination of human expertise and AI QA made a noticeable difference."
                  </p>
                  <footer className="mt-2 text-xs font-semibold text-slate-500 not-italic">— Practice Administrator, US-based Practice</footer>
                </blockquote>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </main>

      <footer className="border-t border-slate-100 py-6 text-center text-sm text-slate-400">
        &copy; {new Date().getFullYear()} TouchScribe. All rights reserved.
      </footer>
    </div>
  );
}
