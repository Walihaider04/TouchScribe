import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Stethoscope, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const SECTIONS = [
  {
    title: "1. Information We Collect",
    body: `We collect information you provide directly to us when you fill out a form, request a demo, or communicate with our team. This includes your name, email address, phone number, and practice information. We also collect information automatically when you visit our website, such as your IP address, browser type, and pages viewed.`,
  },
  {
    title: "2. How We Use Your Information",
    body: `We use the information we collect to respond to your inquiries and demo requests, provide and improve our services, send you relevant communications about TouchScribe, comply with legal obligations, and protect the security of our platform. We do not sell your personal information to third parties.`,
  },
  {
    title: "3. HIPAA Compliance",
    body: `TouchScribe is fully HIPAA compliant. All Protected Health Information (PHI) processed through our platform is handled in accordance with the Health Insurance Portability and Accountability Act of 1996 and its implementing regulations. We sign a Business Associate Agreement (BAA) with every healthcare practice we work with. PHI is never stored outside of your approved and designated systems.`,
  },
  {
    title: "4. Information Sharing",
    body: `We do not share your personal information with third parties except in the following circumstances: with your consent, with service providers who assist us in operating our business (bound by confidentiality obligations), when required by law or legal process, or to protect the rights, property, or safety of TouchScribe or others.`,
  },
  {
    title: "5. Data Security",
    body: `We implement industry-standard security measures to protect your information from unauthorized access, disclosure, alteration, or destruction. All data transmissions are encrypted in transit using TLS. Access to patient-related data is restricted to authorized personnel only and is subject to audit logging.`,
  },
  {
    title: "6. Data Retention",
    body: `We retain personal information for as long as necessary to fulfil the purposes described in this policy, or as required by law. When information is no longer needed, it is securely deleted or anonymized.`,
  },
  {
    title: "7. Your Rights",
    body: `Depending on your location, you may have the right to access the personal information we hold about you, request correction or deletion of your information, object to or restrict certain processing, and withdraw consent where processing is based on consent. To exercise any of these rights, please contact us at privacy@touchscribe.com.`,
  },
  {
    title: "8. Cookies",
    body: `Our website uses essential cookies to ensure the site functions correctly. We may also use analytics cookies to understand how visitors use our site. You can control cookie settings through your browser preferences. Disabling certain cookies may affect the functionality of the site.`,
  },
  {
    title: "9. Third-Party Links",
    body: `Our website may contain links to third-party websites. We are not responsible for the privacy practices of those sites and encourage you to review their privacy policies before providing any personal information.`,
  },
  {
    title: "10. Changes to This Policy",
    body: `We may update this Privacy Policy from time to time. When we do, we will revise the effective date at the top of this page. We encourage you to review this policy periodically to stay informed about how we protect your information.`,
  },
  {
    title: "11. Contact Us",
    body: `If you have questions about this Privacy Policy or how we handle your information, please contact us at:\n\nTouchScribe\nEmail: touchscribe@gmail.com`,
  },
];

export default function Privacy() {
  const [, navigate] = useLocation();

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <header className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/90 backdrop-blur-md">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <button onClick={() => navigate("/")} className="flex items-center gap-2">
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
        <div className="bg-gradient-to-br from-primary/5 via-blue-50/30 to-white border-b border-slate-100 py-14 px-4">
          <div className="container mx-auto max-w-2xl text-center">
            <motion.p
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
              className="text-sm font-semibold text-primary uppercase tracking-widest mb-3"
            >
              Legal
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.05 }}
              className="text-3xl md:text-4xl font-bold text-slate-900 mb-3"
            >
              Privacy Policy
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
              className="text-slate-500"
            >
              Effective date: January 1, 2025
            </motion.p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16 max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-slate-600 leading-relaxed mb-12 text-base"
          >
            TouchScribe ("we," "us," or "our") is committed to protecting your privacy and handling your information with care. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
          </motion.p>

          <div className="space-y-10">
            {SECTIONS.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: 0.05 * (i % 4) }}
              >
                <h2 className="text-lg font-bold text-slate-900 mb-3">{s.title}</h2>
                <p className="text-slate-600 leading-relaxed text-sm whitespace-pre-line">{s.body}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 pt-8 border-t border-slate-200 flex flex-col sm:flex-row gap-4">
            <Button className="rounded-full px-8" onClick={() => navigate("/book-demo?type=service")}>
              Book Now
            </Button>
            <Button variant="outline" className="rounded-full px-8" onClick={() => navigate("/")}>
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back to Home
            </Button>
          </div>
        </div>
      </main>

      <footer className="border-t border-slate-100 py-6 text-center text-sm text-slate-400">
        &copy; {new Date().getFullYear()} TouchScribe. All rights reserved.
      </footer>
    </div>
  );
}
