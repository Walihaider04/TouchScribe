import { useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Stethoscope,
  ArrowLeft,
  ArrowRight,
  Calendar,
  Tag,
  ChevronLeft,
  ChevronRight,
  Clock,
} from "lucide-react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const POSTS_PER_PAGE = 6;

const POSTS = [
  {
    category: "AI & Documentation",
    title: "How AI-Assisted Scribing Is Reducing Physician Burnout in 2025",
    excerpt:
      "Physician burnout is at an all-time high — and documentation is one of the biggest culprits. Here's how AI-powered scribing is changing the equation for practices across the US.",
    date: "May 10, 2025",
    readTime: "5 min read",
  },
  {
    category: "Medical Billing",
    title: "The Hidden Revenue Gaps in Your Practice (And How to Close Them)",
    excerpt:
      "Most practices lose revenue not from low patient volume, but from small, systematic gaps in billing and coding. We break down where the leaks happen and how to stop them.",
    date: "April 28, 2025",
    readTime: "6 min read",
  },
  {
    category: "Prior Authorization",
    title: "Prior Authorization Delays: Why They Happen and How to Minimize Them",
    excerpt:
      "Slow approvals disrupt care and strain staff. This article walks through the most common causes of PA delays and the workflow changes that lead to faster decisions.",
    date: "April 15, 2025",
    readTime: "4 min read",
  },
];

export default function Blog() {
  const [, navigate] = useLocation();
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(POSTS.length / POSTS_PER_PAGE);
  const paginatedPosts = POSTS.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  const goToPage = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Nav */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/90 backdrop-blur-md">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <button onClick={() => navigate("/")} className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <Stethoscope className="text-white w-5 h-5" />
            </div>
            <span className="font-semibold text-lg tracking-tight text-slate-900">TouchScribe</span>
          </button>
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate("/")}
              className="flex items-center gap-1.5 text-sm font-medium text-slate-500 hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </button>
            <button
              onClick={() => navigate("/blog")}
              className="text-sm font-medium text-primary transition-colors"
            >
              Blog
            </button>
            <Button className="rounded-full px-6" onClick={() => navigate("/book-demo?type=demo")}>
              Book a Free Demo
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">

        {/* Hero */}
        <div className="bg-gradient-to-br from-primary/5 via-blue-50/40 to-white border-b border-slate-100 py-16 px-4">
          <div className="container mx-auto text-center max-w-3xl">
            <motion.p
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
              className="text-sm font-semibold text-primary uppercase tracking-widest mb-3"
            >
              Resources
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.05 }}
              className="text-3xl md:text-5xl font-bold text-slate-900 mb-5 leading-tight"
            >
              Blog
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
              className="text-slate-500 text-lg leading-relaxed max-w-2xl mx-auto"
            >
              Insights on healthcare documentation, AI, billing, and workflow optimization.
            </motion.p>
          </div>
        </div>

        {/* Blog Grid */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {paginatedPosts.map((post, i) => (
                <motion.div key={i} variants={fadeInUp}>
                  <Card className="h-full bg-white border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col">
                    {/* Thumbnail */}
                    <div className="w-full h-48 bg-gradient-to-br from-primary/10 via-blue-50 to-slate-100 rounded-t-xl flex items-center justify-center">
                      <div className="w-16 h-16 rounded-2xl bg-white/70 flex items-center justify-center shadow-sm">
                        <Stethoscope className="w-8 h-8 text-primary/40" />
                      </div>
                    </div>
                    <CardContent className="p-6 flex flex-col flex-1">
                      {/* Category */}
                      <div className="flex items-center gap-2 mb-3">
                        <Tag className="w-3.5 h-3.5 text-primary" />
                        <span className="text-xs font-semibold text-primary uppercase tracking-widest">
                          {post.category}
                        </span>
                      </div>
                      {/* Title */}
                      <h2 className="text-base font-bold text-slate-900 leading-snug mb-3">
                        {post.title}
                      </h2>
                      {/* Excerpt */}
                      <p className="text-sm text-slate-500 leading-relaxed flex-1 mb-4">
                        {post.excerpt}
                      </p>
                      {/* Date + read time */}
                      <div className="flex items-center gap-3 text-xs text-slate-400 mb-4">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          {post.date}
                        </span>
                        <span>·</span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {post.readTime}
                        </span>
                      </div>
                      {/* Read More — placeholder, article not yet published */}
                      <div className="rounded-full border border-slate-200 bg-slate-50 text-slate-400 text-sm font-medium flex items-center justify-center gap-2 h-10 px-4 select-none cursor-default">
                        <span>Coming Soon</span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            {/* Pagination — only shown when there is more than one page */}
            {totalPages > 1 && (
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="flex items-center justify-center gap-2 mt-14"
              >
                {/* Prev */}
                <button
                  onClick={() => goToPage(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="w-9 h-9 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:border-primary hover:text-primary transition-colors disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:border-slate-200 disabled:hover:text-slate-400"
                  aria-label="Previous page"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                {/* Page numbers */}
                {Array.from({ length: totalPages }, (_, idx) => idx + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => goToPage(page)}
                    className={`w-9 h-9 rounded-full text-sm font-semibold flex items-center justify-center transition-colors ${
                      page === currentPage
                        ? "bg-primary text-white shadow-sm"
                        : "border border-slate-200 text-slate-500 hover:border-primary hover:text-primary"
                    }`}
                  >
                    {page}
                  </button>
                ))}

                {/* Next */}
                <button
                  onClick={() => goToPage(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="w-9 h-9 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:border-primary hover:text-primary transition-colors disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:border-slate-200 disabled:hover:text-slate-400"
                  aria-label="Next page"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </motion.div>
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 bg-slate-900 text-white text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={staggerContainer}
            className="container mx-auto max-w-2xl"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-4">
              Want to see TouchScribe in action?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-slate-400 text-lg mb-8 leading-relaxed">
              Book a free 30-minute demo tailored to your specialty and EHR.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Button
                size="lg"
                className="rounded-full h-14 px-10 text-base font-semibold shadow-lg shadow-primary/30"
                onClick={() => navigate("/book-demo?type=demo")}
              >
                Book a Free Demo
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
          </motion.div>
        </section>

      </main>

      <footer className="border-t border-slate-800 bg-slate-950 py-6 text-center text-sm text-slate-500">
        &copy; {new Date().getFullYear()} TouchScribe. All rights reserved.
      </footer>
    </div>
  );
}
