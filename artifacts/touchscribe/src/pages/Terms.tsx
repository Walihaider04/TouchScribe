import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Stethoscope, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

const SECTIONS = [
  {
    title: "1. Acceptance of Terms",
    body: `By accessing or using the TouchScribe website or services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services. These terms apply to all visitors, users, and others who access or use our services.`,
  },
  {
    title: "2. Description of Services",
    body: `TouchScribe provides AI-assisted clinical documentation services, including virtual medical scribing, EHR documentation support, prior authorization management, and medical billing and revenue cycle management. Our services are designed for licensed healthcare professionals and practices operating in compliance with applicable healthcare regulations.`,
  },
  {
    title: "3. Eligibility",
    body: `You must be at least 18 years of age and a licensed healthcare professional or authorized representative of a healthcare organization to use our services. By using TouchScribe, you represent and warrant that you meet these requirements.`,
  },
  {
    title: "4. Account Responsibilities",
    body: `You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account. TouchScribe is not liable for any loss resulting from unauthorized use of your account.`,
  },
  {
    title: "5. HIPAA and Compliance",
    body: `TouchScribe operates as a Business Associate under HIPAA. We will execute a Business Associate Agreement (BAA) with each covered entity we serve. You are responsible for ensuring that your use of our services complies with all applicable laws and regulations, including HIPAA, state privacy laws, and any applicable licensing requirements.`,
  },
  {
    title: "6. Service Availability",
    body: `We strive to provide reliable, uninterrupted services. However, we do not guarantee that our services will be available at all times. We may occasionally need to perform maintenance or experience technical issues that temporarily affect availability. We will make reasonable efforts to notify you of planned outages in advance.`,
  },
  {
    title: "7. Payment and Billing",
    body: `Fees for TouchScribe services are outlined in your service agreement. All fees are due as specified in that agreement. We reserve the right to adjust pricing with 30 days' written notice. Failure to pay fees may result in suspension or termination of services.`,
  },
  {
    title: "8. Cancellation and Termination",
    body: `Either party may terminate services with 30 days' written notice. TouchScribe reserves the right to terminate services immediately for cause, including but not limited to breach of these terms, non-payment, or misuse of the platform. Upon termination, you remain responsible for any outstanding fees.`,
  },
  {
    title: "9. Intellectual Property",
    body: `The TouchScribe name, logo, website content, and service processes are the intellectual property of TouchScribe and are protected by applicable copyright, trademark, and other laws. You may not copy, reproduce, or distribute any of our proprietary materials without written permission.`,
  },
  {
    title: "10. Limitation of Liability",
    body: `To the maximum extent permitted by law, TouchScribe shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services. Our total liability for any claim arising from these terms or your use of our services shall not exceed the fees paid by you in the three months preceding the claim.`,
  },
  {
    title: "11. Disclaimer of Warranties",
    body: `Our services are provided "as is" and "as available" without warranties of any kind, either express or implied. We do not warrant that our services will be error-free, uninterrupted, or free from harmful components. TouchScribe services are administrative and documentation support only and do not constitute medical advice or clinical decision-making.`,
  },
  {
    title: "12. Governing Law",
    body: `These Terms of Service are governed by and construed in accordance with the laws of the United States, without regard to conflict of law principles. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts in the applicable jurisdiction.`,
  },
  {
    title: "13. Changes to These Terms",
    body: `We reserve the right to modify these Terms of Service at any time. We will provide notice of significant changes by updating the effective date at the top of this page. Your continued use of our services after any changes constitutes your acceptance of the revised terms.`,
  },
  {
    title: "14. Contact Us",
    body: `If you have questions about these Terms of Service, please contact us at:\n\nTouchScribe\nEmail: legal@touchscribe.com`,
  },
];

export default function Terms() {
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
              Terms of Service
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
            Please read these Terms of Service carefully before using the TouchScribe website or services. These terms constitute a legally binding agreement between you and TouchScribe.
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
