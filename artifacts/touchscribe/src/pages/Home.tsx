import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Mic, 
  Stethoscope, 
  Clock, 
  ShieldCheck, 
  ArrowRight,
  CheckCircle2,
  FileText,
  Activity,
  HeartPulse,
  Lock,
  PlayCircle
} from "lucide-react";
import { motion } from "framer-motion";
import heroImg from "../assets/images/hero.png";
import problemImg from "../assets/images/problem.png";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-white/80 backdrop-blur-md">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <Stethoscope className="text-white w-5 h-5" />
            </div>
            <span className="font-semibold text-lg tracking-tight text-foreground">TouchScribe</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <a href="#problem" className="hover:text-primary transition-colors">The Problem</a>
            <a href="#services" className="hover:text-primary transition-colors">Platform</a>
            <a href="#how-it-works" className="hover:text-primary transition-colors">How it Works</a>
            <a href="#proof" className="hover:text-primary transition-colors">Results</a>
          </nav>
          <div className="flex items-center gap-4">
            <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors hidden md:block">Log in</a>
            <Button className="rounded-full px-6">Start Free Trial</Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* 1. Hero Section */}
        <section className="relative pt-20 pb-32 overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-green-50 via-white to-white"></div>
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
              <motion.div 
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="max-w-2xl"
              >
                <motion.div variants={fadeInUp}>
                  <Badge variant="outline" className="mb-6 px-3 py-1 rounded-full border-primary/20 text-primary bg-primary/5">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-primary"></span>
                      {"HIPAA Compliant & EHR Ready"}
                    </span>
                  </Badge>
                </motion.div>
                <motion.h1 variants={fadeInUp} className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1] mb-6">
                  Speak naturally.<br/>
                  <span className="text-primary">We'll write the note.</span>
                </motion.h1>
                <motion.p variants={fadeInUp} className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed max-w-xl">
                  AI-powered clinical transcription that eliminates the documentation burden. Spend less time typing and more time caring for patients.
                </motion.p>
                <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="rounded-full text-base h-14 px-8 shadow-lg shadow-primary/20">
                    Start 14-Day Free Trial
                  </Button>
                  <Button size="lg" variant="outline" className="rounded-full text-base h-14 px-8 bg-white hover:bg-slate-50 group">
                    <PlayCircle className="mr-2 w-5 h-5 text-secondary group-hover:scale-110 transition-transform" />
                    See it in action
                  </Button>
                </motion.div>
                <motion.div variants={fadeInUp} className="mt-8 flex items-center gap-4 text-sm text-slate-500 font-medium">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map(i => (
                      <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200" />
                    ))}
                  </div>
                  <p>Trusted by 10,000+ clinicians</p>
                </motion.div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative lg:ml-auto"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-[2.5rem] transform rotate-3 scale-105 -z-10 blur-xl"></div>
                <img 
                  src={heroImg} 
                  alt="Physician using TouchScribe" 
                  className="rounded-[2rem] shadow-2xl object-cover w-full max-w-lg aspect-[4/5] lg:aspect-square"
                />
                
                {/* Floating UI Element */}
                <div className="absolute bottom-8 -left-8 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-4 animate-in slide-in-from-bottom-4 fade-in duration-700 delay-500">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Mic className="text-primary w-6 h-6 animate-pulse" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">Listening to patient...</p>
                    <p className="text-xs text-slate-500">Structuring SOAP note</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 2. Trust Bar */}
        <section className="py-10 border-y border-slate-100 bg-slate-50/50">
          <div className="container mx-auto px-4">
            <p className="text-center text-sm font-semibold text-slate-400 mb-8 uppercase tracking-wider">Trusted by innovative healthcare teams</p>
            <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 opacity-50">
              {["Cleveland Clinic", "Mayo Clinic", "Kaiser Permanente", "Sutter Health", "Mass General"].map((name) => (
                <span key={name} className="text-slate-700 font-semibold text-sm md:text-base tracking-wide uppercase">{name}</span>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Problem Section */}
        <section id="problem" className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
              >
                <img 
                  src={problemImg} 
                  alt="Exhausted doctor doing paperwork" 
                  className="rounded-[2rem] shadow-lg object-cover w-full aspect-square md:aspect-[4/3] grayscale-[0.2]"
                />
              </motion.div>
              
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
              >
                <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                  Does this sound familiar?
                </motion.h2>
                <motion.p variants={fadeInUp} className="text-lg text-slate-600 mb-8">
                  You went to medical school to treat patients, but you spend half your day treating the computer. The endless clicking, the after-hours charting, the "pajama time" — it's leading to unprecedented burnout.
                </motion.p>
                
                <div className="space-y-6">
                  {[
                    { icon: Clock, title: "2+ hours daily on notes", desc: "Clinicians spend almost as much time on documentation as patient care." },
                    { icon: Activity, title: "Increased cognitive load", desc: "Trying to listen, synthesize, and type simultaneously degrades care quality." },
                    { icon: FileText, title: "Incomplete documentation", desc: "Rushed notes lead to lower billing accuracy and lost context." }
                  ].map((item, i) => (
                    <motion.div key={i} variants={fadeInUp} className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-red-50 flex items-center justify-center">
                        <item.icon className="w-6 h-6 text-red-500" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 text-lg">{item.title}</h3>
                        <p className="text-slate-600">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 4. Services Overview */}
        <section id="services" className="py-24 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">A complete clinical intelligence platform</h2>
              <p className="text-lg text-slate-600">More than just dictation. TouchScribe understands medical context, structures data, and syncs seamlessly.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: Mic, title: "Ambient Scribe", desc: "Listens to natural conversation between you and the patient, capturing clinical nuances without specific voice commands." },
                { icon: FileText, title: "Smart Structuring", desc: "Automatically formats transcripts into perfect SOAP notes, H&P, or custom templates based on your specialty." },
                { icon: ShieldCheck, title: "EHR Integration", desc: "Pushes completed notes directly to Epic, Cerner, Athena, and 50+ other systems with a single click." }
              ].map((item, i) => (
                <Card key={i} className="border-none shadow-md hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-8">
                    <div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center mb-6">
                      <item.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Why Choose TouchScribe */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Built for precision.<br/>Designed for doctors.</h2>
                <p className="text-lg text-slate-600 mb-8">
                  Generic AI tools hallucinate. TouchScribe is trained exclusively on clinical dialogues across 30+ medical specialties to ensure 99.9% medical accuracy.
                </p>
                <ul className="space-y-4 mb-8">
                  {[
                    "Understands complex medical terminology & acronyms",
                    "Filters out background noise and non-clinical chatter",
                    "Learns your specific formatting preferences over time",
                    "Supports multiple speakers in complex family visits"
                  ].map((text, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                      <span className="text-slate-700">{text}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="rounded-full group">
                  Explore Specialties <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 bg-secondary/5 rounded-[3rem] -z-10"></div>
                <Card className="border-slate-200 shadow-2xl overflow-hidden">
                  <div className="bg-slate-900 px-4 py-3 flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span className="text-slate-400 text-xs font-mono ml-4">Cardiology_Consult_Template.txt</span>
                  </div>
                  <div className="p-6 bg-slate-50 font-mono text-sm leading-relaxed">
                    <div className="text-slate-400 mb-2">// AI structuring in progress...</div>
                    <div className="text-primary font-semibold mb-1">SUBJECTIVE:</div>
                    <p className="text-slate-700 mb-4 pl-4 border-l-2 border-primary/30">
                      {"Patient is a 64 y/o male presenting for f/u of CAD and recent exertional angina. Reports tightening in chest when walking > 2 blocks..."}
                    </p>
                    <div className="text-primary font-semibold mb-1">OBJECTIVE:</div>
                    <p className="text-slate-700 mb-4 pl-4 border-l-2 border-primary/30">
                      BP 132/82. HR 72 regular. Heart: RRR, normal S1/S2, no m/r/g. Lungs: CTA bilaterally...
                    </p>
                    <div className="text-primary font-semibold mb-1">{"ASSESSMENT & PLAN:"}</div>
                    <p className="text-slate-700 pl-4 border-l-2 border-primary/30">
                      1. Stable Angina: Increase Metoprolol to 50mg BID. Order stress echo.<br/>
                      2. HTN: Well controlled on current regimen.
                    </p>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* 6. How It Works */}
        <section id="how-it-works" className="py-24 bg-slate-900 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Three steps to freedom</h2>
              <p className="text-lg text-slate-400">A workflow so simple, it requires zero training.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-12 relative">
              <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-primary/50 to-secondary/50"></div>
              
              {[
                { step: "01", title: "Press Record", desc: "Open the mobile app or web extension when you enter the room." },
                { step: "02", title: "Talk Normally", desc: "Have a natural conversation with your patient. The AI listens ambiently." },
                { step: "03", title: "Review & Sync", desc: "A perfect structured note is ready before the patient leaves the room." }
              ].map((item, i) => (
                <div key={i} className="relative z-10 text-center">
                  <div className="w-24 h-24 mx-auto bg-slate-800 rounded-full border-4 border-slate-900 shadow-xl flex items-center justify-center mb-6 relative">
                    <div className="absolute inset-0 rounded-full border-2 border-primary/30"></div>
                    <span className="text-2xl font-bold text-primary">{item.step}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. Proof / Results */}
        <section id="proof" className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 mb-16 border-b border-slate-100 pb-16">
              {[
                { metric: "1.8 hrs", label: "Saved per shift" },
                { metric: "99.9%", label: "Medical accuracy" },
                { metric: "15+", label: "Extra patients per week" }
              ].map((stat, i) => (
                <div key={i} className="text-center px-4">
                  <div className="text-5xl font-bold text-secondary mb-2">{stat.metric}</div>
                  <div className="text-slate-500 font-medium uppercase tracking-wide">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="bg-slate-50 border-none">
                <CardContent className="p-8">
                  <div className="flex gap-1 text-yellow-400 mb-6">
                    {[1,2,3,4,5].map(i => <StarIcon key={i} />)}
                  </div>
                  <p className="text-lg text-slate-700 mb-6 italic">"I finally had dinner with my family on a Tuesday. TouchScribe is the most impactful technology I've adopted in 15 years of practice. It's accurate, fast, and understands exactly how I want my notes formatted."</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-slate-200 rounded-full"></div>
                    <div>
                      <h4 className="font-bold text-slate-900">Dr. Sarah Jenkins</h4>
                      <p className="text-sm text-slate-500">Internal Medicine, Mayo Clinic</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-slate-50 border-none">
                <CardContent className="p-8">
                  <div className="flex gap-1 text-yellow-400 mb-6">
                    {[1,2,3,4,5].map(i => <StarIcon key={i} />)}
                  </div>
                  <p className="text-lg text-slate-700 mb-6 italic">"The ambient listening is incredible. Patients appreciate that I'm looking at them instead of my monitor. And my billing department is thrilled because the notes are more comprehensive than ever."</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-slate-200 rounded-full"></div>
                    <div>
                      <h4 className="font-bold text-slate-900">Dr. Marcus Chen</h4>
                      <p className="text-sm text-slate-500">Orthopedic Surgery</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* 8. Trust / Credibility */}
        <section className="py-16 bg-slate-50 border-y border-slate-200">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
              <div className="flex items-center gap-3">
                <Lock className="w-8 h-8 text-primary" />
                <div>
                  <div className="font-bold text-slate-900">HIPAA Compliant</div>
                  <div className="text-xs text-slate-500">Enterprise-grade security</div>
                </div>
              </div>
              <div className="w-px h-12 bg-slate-200 hidden md:block"></div>
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-8 h-8 text-primary" />
                <div>
                  <div className="font-bold text-slate-900">SOC 2 Type II</div>
                  <div className="text-xs text-slate-500">Certified infrastructure</div>
                </div>
              </div>
              <div className="w-px h-12 bg-slate-200 hidden md:block"></div>
              <div className="flex items-center gap-3">
                <HeartPulse className="w-8 h-8 text-primary" />
                <div>
                  <div className="font-bold text-slate-900">BAA Included</div>
                  <div className="text-xs text-slate-500">Standard for all plans</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 9 & 10. Risk Reversal & Final CTA */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-primary/5 -z-10"></div>
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Take your evenings back.</h2>
            <p className="text-xl text-slate-600 mb-10">
              Join thousands of providers who have eliminated their documentation backlog. Try TouchScribe free for 14 days. No credit card required.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
              <Button size="lg" className="rounded-full text-lg h-16 px-10 shadow-xl shadow-primary/25">
                Start Free Trial
              </Button>
              <Button size="lg" variant="outline" className="rounded-full text-lg h-16 px-10 bg-white">
                Request Enterprise Demo
              </Button>
            </div>
            <p className="text-sm text-slate-500 font-medium">
              100% Satisfaction Guarantee. Cancel anytime.
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <Stethoscope className="text-primary w-6 h-6" />
                <span className="font-semibold text-xl text-white">TouchScribe</span>
              </div>
              <p className="max-w-xs text-sm leading-relaxed">
                Empowering healthcare professionals to focus on patients, not paperwork.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-primary transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">EHR Integrations</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Security</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-800 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
            <p>&copy; {new Date().getFullYear()} TouchScribe Medical SaaS. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function StarIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.006z" clipRule="evenodd" />
    </svg>
  );
}