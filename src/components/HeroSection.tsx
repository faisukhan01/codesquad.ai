"use client";

import { motion } from "framer-motion";
import { TrendingUp, Megaphone, Headphones, DollarSign, Users, Mail, Linkedin, Slack, Twitter, BarChart3, Calendar, FileText, CreditCard, Sheet } from "lucide-react";
import Image from "next/image";
import avatarAnnika from "@/assets/avatar-annika.png";
import avatarJacob from "@/assets/avatar-jacob.png";

const emilyAgents = [
  {
    name: "Sales Automation",
    description: "Automates lead qualification and follow-ups.",
    workflows: "4 workflows",
    toolIcons: [
      { icon: BarChart3, label: "CRM", color: "text-blue-500" },
      { icon: Mail, label: "Email", color: "text-red-500" },
      { icon: Linkedin, label: "LinkedIn", color: "text-blue-600" },
      { icon: Slack, label: "Slack", color: "text-purple-500" }
    ],
    icon: TrendingUp,
    iconColor: "text-purple-600",
    bgClass: "agent-card-green",
  },
  {
    name: "Marketing Engine",
    description: "Repurposes content and automates distribution.",
    workflows: "3 workflows",
    toolIcons: [
      { icon: Linkedin, label: "LinkedIn", color: "text-blue-600" },
      { icon: Twitter, label: "X", color: "text-sky-500" },
      { icon: Mail, label: "Email", color: "text-red-500" },
      { icon: BarChart3, label: "Analytics", color: "text-green-500" }
    ],
    icon: Megaphone,
    iconColor: "text-green-600",
    bgClass: "agent-card-teal",
  },
  {
    name: "Customer Support",
    description: "Handles queries and drafts smart replies.",
    workflows: "5 workflows",
    toolIcons: [
      { icon: Mail, label: "Email", color: "text-red-500" },
      { icon: Headphones, label: "Helpdesk", color: "text-orange-500" },
      { icon: Slack, label: "Slack", color: "text-purple-500" },
      { icon: FileText, label: "Knowledge Base", color: "text-indigo-500" }
    ],
    icon: Headphones,
    iconColor: "text-yellow-600",
    bgClass: "agent-card-amber",
  },
];

const shahAgents = [
  {
    name: "Finance Automation",
    description: "Tracks payments and builds dashboards.",
    workflows: "3 workflows",
    toolIcons: [
      { icon: CreditCard, label: "Stripe", color: "text-indigo-600" },
      { icon: DollarSign, label: "QuickBooks", color: "text-green-600" },
      { icon: Sheet, label: "Sheets", color: "text-emerald-500" },
      { icon: Mail, label: "Email", color: "text-red-500" }
    ],
    icon: DollarSign,
    iconColor: "text-blue-600",
    bgClass: "agent-card-blue",
  },
  {
    name: "HR & Hiring",
    description: "Screens resumes and schedules interviews.",
    workflows: "4 workflows",
    toolIcons: [
      { icon: FileText, label: "Forms", color: "text-violet-500" },
      { icon: Calendar, label: "Calendar", color: "text-blue-500" },
      { icon: Mail, label: "Email", color: "text-red-500" },
      { icon: Slack, label: "Slack", color: "text-purple-500" }
    ],
    icon: Users,
    iconColor: "text-orange-600",
    bgClass: "agent-card-coral",
  },
];

const HeroSection = () => {
  return (
    <section className="hero-gradient pt-28 pb-12 md:pt-32 md:pb-14 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Hero text */}
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.1] text-foreground">
            Build an{" "}
            <span className="text-primary">AI team</span>
            {" "}that<br className="hidden md:block" /> works for you
          </h1>
          <motion.p
            className="mt-4 text-sm md:text-base text-muted-foreground max-w-xl mx-auto font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            We design intelligent workflow systems across sales, marketing, operations, and finance.
          </motion.p>
          
          {/* CTA Button */}
          <motion.div
            className="mt-6 flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.button 
              type="button"
              onClick={() => window.open("https://calendly.com/code_squad/30min", "_blank")}
              className="group relative px-6 py-2.5 bg-gradient-to-r from-primary via-primary to-primary/80 text-primary-foreground text-sm font-semibold rounded-full shadow-lg hover:shadow-xl hover:shadow-primary/40 transition-all duration-300 overflow-hidden"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10 flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Create your customized agent
                <motion.svg 
                  className="w-4 h-4" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                  animate={{ x: [0, 3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </motion.svg>
              </span>
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary to-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                animate={{ 
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-shimmer" />
              </div>
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Agent cards - side by side layout */}
        <motion.div
          className="mt-12 max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex flex-col md:flex-row items-start justify-center gap-10 md:gap-16">
            {/* Emily's agents - 2 cards */}
            <div className="flex flex-col items-center w-full md:w-auto">
              <motion.div 
                className="flex items-center gap-2 mb-6"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <Image src={avatarAnnika} alt="Emily" width={36} height={36} className="w-9 h-9 rounded-full object-cover ring-2 ring-primary/20" />
                <span className="text-base font-semibold text-foreground">Emily's agents</span>
              </motion.div>
              <div className="flex flex-wrap justify-center gap-4">
                {emilyAgents.slice(0, 2).map((card, i) => {
                  const IconComponent = card.icon;
                  return (
                    <motion.div
                      key={card.name}
                      className={`${card.bgClass} rounded-3xl p-6 cursor-pointer group relative overflow-hidden w-[170px] flex flex-col shadow-lg hover:shadow-2xl border border-border/50`}
                      initial={{ opacity: 0, y: 30, rotateX: 10 }}
                      animate={{ opacity: 1, y: 0, rotateX: 0 }}
                      transition={{ 
                        delay: 0.7 + i * 0.15, 
                        duration: 0.6, 
                        ease: [0.22, 1, 0.36, 1] 
                      }}
                      whileHover={{ 
                        y: -8, 
                        scale: 1.05,
                        rotateY: 2,
                        transition: { duration: 0.3, ease: "easeOut" } 
                      }}
                    >
                      {/* Animated gradient overlay */}
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        initial={false}
                      />
                      
                      {/* Icon with animation */}
                      <motion.div 
                        className="relative w-full flex items-center justify-center mb-5"
                        whileHover={{ 
                          scale: 1.1,
                          rotate: [0, -5, 5, 0],
                          transition: { duration: 0.5 }
                        }}
                      >
                        <motion.div
                          className="relative"
                          animate={{ 
                            y: [0, -5, 0],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        >
                          <IconComponent 
                            className={`w-12 h-12 ${card.iconColor} drop-shadow-lg`} 
                            strokeWidth={2.5} 
                          />
                        </motion.div>
                      </motion.div>
                      
                      {/* Content */}
                      <div className="space-y-3 flex-1 relative z-10">
                        <h3 className="font-bold text-sm text-foreground leading-tight group-hover:text-primary transition-colors duration-200">
                          {card.name}
                        </h3>
                        <p className="text-[11px] text-muted-foreground leading-relaxed line-clamp-2">
                          {card.description}
                        </p>
                        <div className="pt-3 space-y-2 border-t border-border/30">
                          <p className="text-[10px] font-medium text-muted-foreground flex items-center gap-1.5">
                            <motion.span 
                              className="text-[8px] text-primary"
                              animate={{ scale: [1, 1.3, 1] }}
                              transition={{ duration: 2, repeat: Infinity }}
                            >
                              ●
                            </motion.span>
                            <span>{card.workflows}</span>
                          </p>
                          <div className="flex gap-2 flex-wrap items-center">
                            {card.toolIcons.slice(0, 4).map((tool, idx) => {
                              const ToolIcon = tool.icon;
                              return (
                                <motion.div
                                  key={idx}
                                  className="group/icon relative"
                                  whileHover={{ scale: 1.15, y: -2 }}
                                  transition={{ duration: 0.2 }}
                                >
                                  <ToolIcon className={`w-4 h-4 ${tool.color} transition-all`} strokeWidth={2} />
                                  <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[8px] bg-background/90 px-1.5 py-0.5 rounded opacity-0 group-hover/icon:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                                    {tool.label}
                                  </span>
                                </motion.div>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Shah's agents - 3 cards */}
            <div className="flex flex-col items-center w-full md:w-auto">
              <motion.div 
                className="flex items-center gap-2 mb-6"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <Image src={avatarJacob} alt="Shah" width={36} height={36} className="w-9 h-9 rounded-full object-cover ring-2 ring-primary/20" />
                <span className="text-base font-semibold text-foreground">Shah's agents</span>
              </motion.div>
              <div className="flex flex-wrap justify-center gap-4">
                {shahAgents.concat([emilyAgents[2]]).map((card, i) => {
                  const IconComponent = card.icon;
                  return (
                    <motion.div
                      key={card.name}
                      className={`${card.bgClass} rounded-3xl p-6 cursor-pointer group relative overflow-hidden w-[170px] flex flex-col shadow-lg hover:shadow-2xl border border-border/50`}
                      initial={{ opacity: 0, y: 30, rotateX: 10 }}
                      animate={{ opacity: 1, y: 0, rotateX: 0 }}
                      transition={{ 
                        delay: 0.7 + i * 0.15, 
                        duration: 0.6, 
                        ease: [0.22, 1, 0.36, 1] 
                      }}
                      whileHover={{ 
                        y: -8, 
                        scale: 1.05,
                        rotateY: -2,
                        transition: { duration: 0.3, ease: "easeOut" } 
                      }}
                    >
                      {/* Animated gradient overlay */}
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        initial={false}
                      />
                      
                      {/* Icon with animation */}
                      <motion.div 
                        className="relative w-full flex items-center justify-center mb-5"
                        whileHover={{ 
                          scale: 1.1,
                          rotate: [0, 5, -5, 0],
                          transition: { duration: 0.5 }
                        }}
                      >
                        <motion.div
                          className="relative"
                          animate={{ 
                            y: [0, -5, 0],
                          }}
                          transition={{
                            duration: 3,
                            delay: i * 0.3,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        >
                          <IconComponent 
                            className={`w-12 h-12 ${card.iconColor} drop-shadow-lg`} 
                            strokeWidth={2.5} 
                          />
                        </motion.div>
                      </motion.div>
                      
                      {/* Content */}
                      <div className="space-y-3 flex-1 relative z-10">
                        <h3 className="font-bold text-sm text-foreground leading-tight group-hover:text-primary transition-colors duration-200">
                          {card.name}
                        </h3>
                        <p className="text-[11px] text-muted-foreground leading-relaxed line-clamp-2">
                          {card.description}
                        </p>
                        <div className="pt-3 space-y-2 border-t border-border/30">
                          <p className="text-[10px] font-medium text-muted-foreground flex items-center gap-1.5">
                            <motion.span 
                              className="text-[8px] text-primary"
                              animate={{ scale: [1, 1.3, 1] }}
                              transition={{ duration: 2, delay: i * 0.2, repeat: Infinity }}
                            >
                              ●
                            </motion.span>
                            <span>{card.workflows}</span>
                          </p>
                          <div className="flex gap-2 flex-wrap items-center">
                            {card.toolIcons.slice(0, 4).map((tool, idx) => {
                              const ToolIcon = tool.icon;
                              return (
                                <motion.div
                                  key={idx}
                                  className="group/icon relative"
                                  whileHover={{ scale: 1.15, y: -2 }}
                                  transition={{ duration: 0.2 }}
                                >
                                  <ToolIcon className={`w-4 h-4 ${tool.color} transition-all`} strokeWidth={2} />
                                  <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[8px] bg-background/90 px-1.5 py-0.5 rounded opacity-0 group-hover/icon:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                                    {tool.label}
                                  </span>
                                </motion.div>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
