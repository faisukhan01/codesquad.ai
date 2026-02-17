"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  TrendingUp, 
  Headphones, 
  Settings, 
  BarChart3, 
  Megaphone, 
  DollarSign,
  Palette,
  Server,
  Cloud,
  Briefcase,
  Coins,
  Building2,
  Heart,
  Shield,
  ShoppingCart,
  BookOpen,
  Building,
  PieChart,
  Target,
  Rocket,
  User,
  GraduationCap,
  Store,
  Home,
  Calculator,
  Laptop,
  ClipboardList,
  Users,
  Package,
  Truck,
  Hospital
} from "lucide-react";

const agentTypes = [
  {
    id: "sales-revenue",
    name: "Sales & Revenue",
    description: "Lead qualification, CRM automation, and follow-ups",
    icon: TrendingUp,
    color: "from-green-400 to-green-600",
    iconColor: "text-green-600",
    hoverColor: "border-green-500 bg-green-50",
    circleColor: "bg-green-500",
    borderColor: "border-green-500",
    bgGradient: "from-green-100/80 via-green-50/60 to-white/80",
    containerBorder: "border-green-300",
    emoji: "📈",
    industries: [
      { name: "Marketing Agencies", Icon: Palette, color: "text-pink-500" },
      { name: "IT Service Providers", Icon: Server, color: "text-blue-500" },
      { name: "SaaS Companies", Icon: Cloud, color: "text-sky-500" },
      { name: "Consulting Firms", Icon: Briefcase, color: "text-amber-500" },
      { name: "Financial Advisory", Icon: Coins, color: "text-yellow-500" },
      { name: "Real Estate", Icon: Building2, color: "text-slate-500" }
    ]
  },
  {
    id: "customer-support",
    name: "Customer Support Automation",
    description: "Handle support queries and manage tickets automatically",
    icon: Headphones,
    color: "from-blue-400 to-blue-600",
    iconColor: "text-blue-600",
    hoverColor: "border-blue-500 bg-blue-50",
    circleColor: "bg-blue-500",
    borderColor: "border-blue-500",
    bgGradient: "from-blue-100/80 via-blue-50/60 to-white/80",
    containerBorder: "border-blue-300",
    emoji: "💬",
    industries: [
      { name: "SaaS Companies", Icon: Laptop, color: "text-violet-500" },
      { name: "IT Support", Icon: Shield, color: "text-red-500" },
      { name: "E-commerce", Icon: ShoppingCart, color: "text-green-500" },
      { name: "Healthcare", Icon: Heart, color: "text-rose-500" },
      { name: "EdTech Platforms", Icon: BookOpen, color: "text-amber-500" },
      { name: "Financial Services", Icon: Building, color: "text-indigo-500" }
    ]
  },
  {
    id: "operations",
    name: "Operations Automation",
    description: "Streamline workflows and internal processes",
    icon: Settings,
    color: "from-yellow-400 to-yellow-600",
    iconColor: "text-yellow-600",
    hoverColor: "border-yellow-500 bg-yellow-50",
    circleColor: "bg-yellow-500",
    borderColor: "border-yellow-500",
    bgGradient: "from-yellow-100/80 via-yellow-50/60 to-white/80",
    containerBorder: "border-yellow-300",
    emoji: "⚙",
    industries: [
      { name: "Consulting Firms", Icon: PieChart, color: "text-purple-500" },
      { name: "Marketing Agencies", Icon: Megaphone, color: "text-pink-500" },
      { name: "IT Companies", Icon: Server, color: "text-yellow-500" },
      { name: "Logistics", Icon: Truck, color: "text-orange-500" },
      { name: "Healthcare Admin", Icon: Hospital, color: "text-teal-500" },
      { name: "Property Management", Icon: Home, color: "text-slate-500" }
    ]
  },
  {
    id: "reporting-analytics",
    name: "Reporting & Analytics Automation",
    description: "Track KPIs and generate executive reports",
    icon: BarChart3,
    color: "from-purple-400 to-purple-600",
    iconColor: "text-purple-600",
    hoverColor: "border-purple-500 bg-purple-50",
    circleColor: "bg-purple-500",
    borderColor: "border-purple-500",
    bgGradient: "from-purple-100/80 via-purple-50/60 to-white/80",
    containerBorder: "border-purple-300",
    emoji: "📊",
    industries: [
      { name: "FinTech", Icon: DollarSign, color: "text-emerald-500" },
      { name: "SaaS Companies", Icon: Cloud, color: "text-blue-500" },
      { name: "Marketing", Icon: TrendingUp, color: "text-pink-500" },
      { name: "Consulting", Icon: Target, color: "text-red-500" },
      { name: "Healthcare", Icon: Heart, color: "text-cyan-500" },
      { name: "Manufacturing", Icon: Building2, color: "text-gray-500" }
    ]
  },
  {
    id: "marketing-automation",
    name: "Marketing Automation",
    description: "Automate content, campaigns, and growth systems",
    icon: Megaphone,
    color: "from-pink-400 to-pink-600",
    iconColor: "text-pink-600",
    hoverColor: "border-pink-500 bg-pink-50",
    circleColor: "bg-pink-500",
    borderColor: "border-pink-500",
    bgGradient: "from-pink-100/80 via-pink-50/60 to-white/80",
    containerBorder: "border-pink-300",
    emoji: "📣",
    industries: [
      { name: "Marketing Agencies", Icon: Target, color: "text-rose-500" },
      { name: "Tech Startups", Icon: Rocket, color: "text-blue-500" },
      { name: "Professional Services", Icon: User, color: "text-slate-500" },
      { name: "EdTech", Icon: GraduationCap, color: "text-purple-500" },
      { name: "E-commerce", Icon: Store, color: "text-green-500" },
      { name: "Real Estate", Icon: Home, color: "text-amber-500" }
    ]
  },
  {
    id: "finance-automation",
    name: "Finance Automation",
    description: "Billing, invoicing, and compliance automation",
    icon: DollarSign,
    color: "from-orange-400 to-orange-600",
    iconColor: "text-orange-600",
    hoverColor: "border-orange-500 bg-orange-50",
    circleColor: "bg-orange-500",
    borderColor: "border-orange-500",
    bgGradient: "from-orange-100/80 via-orange-50/60 to-white/80",
    containerBorder: "border-orange-300",
    emoji: "💳",
    industries: [
      { name: "Accounting Firms", Icon: Calculator, color: "text-blue-500" },
      { name: "Financial Advisory", Icon: Briefcase, color: "text-indigo-500" },
      { name: "SaaS Companies", Icon: Laptop, color: "text-violet-500" },
      { name: "Healthcare", Icon: Hospital, color: "text-red-500" },
      { name: "Consulting", Icon: ClipboardList, color: "text-teal-500" },
      { name: "Marketing", Icon: PieChart, color: "text-pink-500" }
    ]
  },
  {
    id: "hr-hiring",
    name: "HR & Hiring Automation",
    description: "Recruitment and onboarding automation",
    icon: Users,
    color: "from-indigo-400 to-indigo-600",
    iconColor: "text-indigo-600",
    hoverColor: "border-indigo-500 bg-indigo-50",
    circleColor: "bg-indigo-500",
    borderColor: "border-indigo-500",
    bgGradient: "from-indigo-100/80 via-indigo-50/60 to-white/80",
    containerBorder: "border-indigo-300",
    emoji: "👥",
    industries: [
      { name: "IT & Software", Icon: Laptop, color: "text-blue-500" },
      { name: "Marketing", Icon: Megaphone, color: "text-pink-500" },
      { name: "Healthcare", Icon: Hospital, color: "text-red-500" },
      { name: "Education", Icon: GraduationCap, color: "text-purple-500" },
      { name: "Logistics", Icon: Package, color: "text-amber-500" },
      { name: "Professional Services", Icon: Briefcase, color: "text-slate-500" }
    ]
  },
];

const StepsSection = () => {
  const [selectedAgent, setSelectedAgent] = useState(0);

  // Auto-cycle through agents every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedAgent((prev) => (prev + 1) % agentTypes.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-12 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="font-bold text-center text-foreground leading-[1.1] tracking-tight mb-4"
          style={{ fontSize: '30px' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          Add an agent to your team in 3 simple steps
        </motion.h2>

        {/* Dynamic subtitle showing selected agent */}
        <motion.div
          className="text-center mb-8 mt-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <AnimatePresence mode="wait">
            <motion.h3
              key={selectedAgent}
              className="text-xl font-semibold text-muted-foreground"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.3 }}
            >
              {agentTypes[selectedAgent].emoji} {agentTypes[selectedAgent].name}
            </motion.h3>
          </AnimatePresence>
        </motion.div>

        {/* Main interactive area */}
        <motion.div
          className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 md:p-10 shadow-xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Left side - Agent selection */}
            <div className="space-y-4">
              <h4 className="text-base font-semibold text-gray-700 mb-5">
                Choose your automation area
              </h4>
              
              <div className="space-y-3">
                {agentTypes.map((agent, index) => (
                  <motion.button
                    key={agent.id}
                    onClick={() => setSelectedAgent(index)}
                    className={`w-full text-left p-3.5 rounded-xl border-2 transition-all duration-300 ${
                      selectedAgent === index
                        ? `${agent.hoverColor} shadow-md`
                        : "border-gray-200 bg-white hover:border-gray-300"
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                          selectedAgent === index
                            ? `${agent.borderColor} ${agent.circleColor}`
                            : "border-gray-300 bg-white"
                        }`}
                      >
                        {selectedAgent === index && (
                          <motion.div
                            className="w-2 h-2 rounded-full bg-white"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.2 }}
                          />
                        )}
                      </div>
                      <span className="font-medium text-gray-800">{agent.name}</span>
                    </div>
                  </motion.button>
                ))}
              </div>

              <motion.button
                className="mt-5 px-5 py-2 bg-foreground text-background rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore More
              </motion.button>
            </div>

            {/* Right side - Clean, professional light design */}
            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-2xl">
                
                <AnimatePresence mode="wait">
                  <motion.div 
                    key={`container-${selectedAgent}`}
                    className={`relative bg-white rounded-3xl p-10 shadow-xl border-2 ${agentTypes[selectedAgent].containerBorder} w-full min-h-[420px] flex flex-col overflow-hidden`}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                  >
                    
                    {/* Animated gradient background that changes with selection */}
                    <motion.div 
                      className={`absolute inset-0 bg-gradient-to-br ${agentTypes[selectedAgent].bgGradient} rounded-3xl`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.4 }}
                    />

                    {/* Header */}
                    <div className="text-center mb-8 relative z-10">
                      <motion.h3 
                        className="text-2xl font-bold text-gray-800 mb-2"
                        initial={{ opacity: 0, y: -15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                      >
                        {agentTypes[selectedAgent].name}
                      </motion.h3>
                      <motion.p 
                        className="text-sm text-gray-500"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.2 }}
                      >
                        {agentTypes[selectedAgent].description}
                      </motion.p>
                    </div>

                  {/* Industries grid - 3 columns, clean cards */}
                  <div className="grid grid-cols-3 gap-4 relative z-10">
                    {agentTypes[selectedAgent].industries.map((industry, index) => {
                      const IconComponent = industry.Icon;
                      
                      return (
                        <motion.div
                          key={`${selectedAgent}-${industry.name}`}
                          initial={{ 
                            opacity: 0,
                            y: 30,
                            scale: 0.8
                          }}
                          animate={{ 
                            opacity: 1,
                            y: 0,
                            scale: 1
                          }}
                          transition={{ 
                            delay: 0.3 + (index * 0.05),
                            duration: 0.4,
                            ease: [0.22, 1, 0.36, 1]
                          }}
                        >
                          <motion.div
                            className="group relative bg-white/60 backdrop-blur-sm rounded-2xl p-5 border border-gray-100 hover:border-gray-200 transition-all cursor-pointer"
                            whileHover={{ 
                              y: -8,
                              transition: { duration: 0.2 }
                            }}
                          >
                            {/* Subtle hover glow */}
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-50/50 to-pink-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            
                            <div className="flex flex-col items-center text-center gap-3 relative z-10">
                              {/* Icon */}
                              <motion.div
                                className="relative"
                                whileHover={{ 
                                  scale: 1.1,
                                  rotate: [0, -5, 5, 0],
                                  transition: { duration: 0.3 }
                                }}
                              >
                                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-3 shadow-sm group-hover:shadow-md transition-shadow">
                                  <IconComponent className={`w-7 h-7 ${industry.color}`} strokeWidth={2} />
                                </div>
                              </motion.div>
                              
                              {/* Text */}
                              <span className="text-xs font-semibold text-gray-700 leading-tight">
                                {industry.name}
                              </span>
                            </div>
                          </motion.div>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              </AnimatePresence>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mt-6 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <a href="#" className="inline-flex items-center gap-1 text-primary font-semibold text-sm hover:underline underline-offset-4 transition-all">
            Learn more about our automation systems
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default StepsSection;
