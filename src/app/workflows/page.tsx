"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  TrendingUp, 
  BarChart3, 
  Headphones, 
  Settings, 
  DollarSign, 
  Megaphone, 
  Users, 
  RefreshCw,
  CheckCircle2,
  Clock,
  ArrowRight,
  Search
} from "lucide-react";

const categories = ["All", "Sales", "Support", "Operations", "Reporting", "Marketing", "Finance", "HR"];

const workflows = [
  {
    id: 1,
    category: "Sales",
    icon: TrendingUp,
    iconColor: "text-purple-600",
    bgClass: "agent-card-green",
    title: "Sales Lead Qualification System",
    description: "Automatically qualify inbound leads, score prospects, update your CRM, and trigger smart follow-ups.",
    includes: [
      "Lead scoring logic",
      "CRM enrichment",
      "Auto follow-up sequences",
      "Demo request filtering"
    ],
    setup: "2–3 weeks",
    saves: "10+ hours/week",
    featured: true
  },
  {
    id: 2,
    category: "Reporting",
    icon: BarChart3,
    iconColor: "text-blue-600",
    bgClass: "agent-card-blue",
    title: "Weekly Executive Reporting System",
    description: "Automatically pull metrics from CRM, marketing, and finance tools — and generate decision-ready weekly summaries.",
    includes: [
      "KPI dashboards",
      "Automated weekly reports",
      "AI performance summaries",
      "Cross-tool data sync"
    ],
    setup: "2–4 weeks",
    saves: "8–15 hours/week",
    featured: true
  },
  {
    id: 3,
    category: "Support",
    icon: Headphones,
    iconColor: "text-yellow-600",
    bgClass: "agent-card-amber",
    title: "Customer Support Automation System",
    description: "Reduce inbox overload with AI-assisted replies, smart routing, and support summaries.",
    includes: [
      "AI draft replies",
      "Ticket summarization",
      "Escalation routing",
      "Knowledge base integration"
    ],
    setup: "2–3 weeks",
    saves: "10–20 hours/week",
    featured: true
  },
  {
    id: 4,
    category: "Operations",
    icon: Settings,
    iconColor: "text-green-600",
    bgClass: "agent-card-coral",
    title: "Internal Process Automation",
    description: "Eliminate repetitive Slack messages, approval bottlenecks, and manual task routing.",
    includes: [
      "Task automation",
      "Approval workflows",
      "Document processing",
      "Internal notifications"
    ],
    setup: "2–3 weeks",
    saves: "8–12 hours/week",
    featured: false
  },
  {
    id: 5,
    category: "Finance",
    icon: DollarSign,
    iconColor: "text-blue-600",
    bgClass: "agent-card-blue",
    title: "Finance & Admin Automation",
    description: "Automate invoice reminders, expense categorization, and financial tracking dashboards.",
    includes: [
      "Invoice automation",
      "Payment reminders",
      "Expense tracking",
      "Revenue dashboards"
    ],
    setup: "2–4 weeks",
    saves: "6–10 hours/week",
    featured: false
  },
  {
    id: 6,
    category: "Marketing",
    icon: Megaphone,
    iconColor: "text-pink-600",
    bgClass: "agent-card-teal",
    title: "Content Repurposing Engine",
    description: "Automatically turn blog posts, podcasts, or videos into LinkedIn posts, emails, and newsletters.",
    includes: [
      "AI content generation",
      "Multi-platform scheduling",
      "Competitor tracking",
      "SEO tracking automation"
    ],
    setup: "2–3 weeks",
    saves: "10–15 hours/week",
    featured: false
  },
  {
    id: 7,
    category: "HR",
    icon: Users,
    iconColor: "text-orange-600",
    bgClass: "agent-card-amber",
    title: "Hiring Workflow Automation",
    description: "Screen resumes, score candidates, and automate interview scheduling.",
    includes: [
      "Resume scoring",
      "Candidate shortlisting",
      "Interview coordination",
      "Onboarding workflows"
    ],
    setup: "2–3 weeks",
    saves: "8–12 hours/week",
    featured: false
  },
  {
    id: 8,
    category: "Operations",
    icon: RefreshCw,
    iconColor: "text-indigo-600",
    bgClass: "agent-card-green",
    title: "Client Retention & Follow-up System",
    description: "Track customer activity and trigger smart re-engagement workflows.",
    includes: [
      "Churn alerts",
      "Usage tracking",
      "Follow-up automation",
      "Client health dashboards"
    ],
    setup: "2–4 weeks",
    saves: "6–10 hours/week",
    featured: false
  }
];

export default function WorkflowsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredWorkflows = selectedCategory === "All" 
    ? workflows 
    : workflows.filter(w => w.category === selectedCategory);

  const featuredWorkflows = workflows.filter(w => w.featured);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="hero-gradient pt-28 pb-16 md:pt-32 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.1] text-foreground">
              AI Workflow <span className="text-primary">Systems</span>
            </h1>
            <p className="mt-4 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto font-medium">
              Built for Growing B2B Service Companies
            </p>
            <p className="mt-3 text-sm md:text-base text-muted-foreground max-w-3xl mx-auto">
              Eliminate repetitive work across sales, operations, support, and reporting — with practical AI-powered workflows designed for real business impact.
            </p>
            <motion.button
              className="mt-8 px-6 py-3 bg-primary text-primary-foreground text-sm font-semibold rounded-lg hover:bg-primary/90 transition-colors duration-200 shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book a Free Workflow Audit
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Browse by Function */}
      <section className="py-12 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-foreground flex items-center justify-center gap-2">
              <Search className="w-6 h-6" />
              Browse by Business Function
            </h2>
          </div>
          
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedCategory === cat
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Systems */}
      <section className="py-12 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-foreground">
              FEATURED SYSTEMS
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredWorkflows.map((workflow, index) => {
              const IconComponent = workflow.icon;
              return (
                <motion.div
                  key={workflow.id}
                  className={`${workflow.bgClass} rounded-2xl p-6 cursor-pointer group relative overflow-hidden shadow-lg hover:shadow-2xl border border-border/50`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-background/50">
                      <IconComponent className={`w-6 h-6 ${workflow.iconColor}`} strokeWidth={2.5} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg text-foreground leading-tight group-hover:text-primary transition-colors">
                        {workflow.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {workflow.description}
                  </p>

                  <div className="space-y-3 mb-4">
                    <p className="text-xs font-semibold text-foreground">Includes:</p>
                    <ul className="space-y-1.5">
                      {workflow.includes.map((item, idx) => (
                        <li key={idx} className="text-xs text-muted-foreground flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-primary mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-border/30 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Clock className="w-3.5 h-3.5" />
                      <span>Typical setup: {workflow.setup}</span>
                    </div>
                    <div className="font-semibold text-primary">
                      Saves: {workflow.saves}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Functional System Suites */}
      <section className="py-12 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-2">
              Functional System Suites
            </h2>
            <p className="text-base text-muted-foreground">
              Deeply integrated workflows that handle the complexities of specific business departments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredWorkflows.filter(w => !w.featured).map((workflow, index) => {
              const IconComponent = workflow.icon;
              return (
                <motion.div
                  key={workflow.id}
                  className={`${workflow.bgClass} rounded-2xl p-6 cursor-pointer group relative overflow-hidden shadow-lg hover:shadow-2xl border border-border/50`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-background/50">
                      <IconComponent className={`w-6 h-6 ${workflow.iconColor}`} strokeWidth={2.5} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg text-foreground leading-tight group-hover:text-primary transition-colors">
                        {workflow.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {workflow.description}
                  </p>

                  <div className="space-y-3 mb-4">
                    <p className="text-xs font-semibold text-foreground">Includes:</p>
                    <ul className="space-y-1.5">
                      {workflow.includes.map((item, idx) => (
                        <li key={idx} className="text-xs text-muted-foreground flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-primary mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-border/30 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Clock className="w-3.5 h-3.5" />
                      <span>Typical setup: {workflow.setup}</span>
                    </div>
                    <div className="font-semibold text-primary">
                      Saves: {workflow.saves}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Not Sure What You Need?
            </h2>
            <p className="text-xl font-semibold text-foreground mb-3">
              Get a Free Workflow Audit
            </p>
            <p className="text-base text-muted-foreground mb-8 max-w-2xl mx-auto">
              We'll identify where your team is losing time and recommend the highest-ROI automation opportunities.
            </p>
            <motion.button
              className="px-8 py-4 bg-primary text-primary-foreground text-base font-semibold rounded-lg hover:bg-primary/90 transition-colors duration-200 shadow-lg inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book My Audit
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
