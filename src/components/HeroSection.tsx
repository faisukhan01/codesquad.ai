import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import agentIcon1 from "@/assets/agent-icon-1.png";
import agentIcon2 from "@/assets/agent-icon-2.png";
import agentIcon3 from "@/assets/agent-icon-3.png";
import agentIcon4 from "@/assets/agent-icon-4.png";
import agentIcon5 from "@/assets/agent-icon-5.png";
import avatarAnnika from "@/assets/avatar-annika.png";
import avatarJacob from "@/assets/avatar-jacob.png";

const annikaAgents = [
  {
    name: "Competitive Analyst",
    description: "Creating weekly report…",
    tag: "📊 Sharing to #research",
    icon: agentIcon1,
    bgClass: "agent-card-green",
  },
  {
    name: "Social Marketer",
    description: "Tracking engagement…",
    tag: "📈 Summarizing results",
    icon: agentIcon2,
    bgClass: "agent-card-teal",
  },
  {
    name: "Reddit Agent",
    description: "Monitor subreddits and alert for suitable posts to reply to",
    tag: "4 workflows",
    icon: agentIcon3,
    bgClass: "agent-card-amber",
  },
];

const jacobAgents = [
  {
    name: "Personal Assistant",
    description: "Creating meeting briefing…",
    tag: "📋 Sending briefing to Jacob",
    icon: agentIcon4,
    bgClass: "agent-card-blue",
  },
  {
    name: "Support Agent",
    description: "Replies to incoming customer support emails",
    tag: "5 workflows",
    icon: agentIcon5,
    bgClass: "agent-card-coral",
  },
];

const HeroSection = () => {
  const [activeTab, setActiveTab] = useState<"annika" | "jacob">("annika");
  const allCards = activeTab === "annika" 
    ? [...annikaAgents, ...jacobAgents] 
    : [...jacobAgents, ...annikaAgents];

  return (
    <section className="hero-gradient pt-20 pb-16 md:pt-24 md:pb-20 overflow-hidden relative">
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
            className="mt-5 text-base md:text-lg text-muted-foreground max-w-xl mx-auto font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            CodeSquad is the easiest way to create AI agents.
          </motion.p>
          <motion.div
            className="mt-6"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
          >
            <button className="bg-foreground text-background px-6 py-2.5 rounded-full text-sm font-semibold hover:opacity-90 transition-all duration-200 shadow-[0_4px_20px_rgba(0,0,0,0.12)] hover:shadow-[0_6px_30px_rgba(0,0,0,0.18)] active:scale-[0.98]">
              Start for free
            </button>
          </motion.div>
        </motion.div>

        {/* Agent tabs */}
        <motion.div
          className="mt-10 flex items-center justify-center gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <button
            onClick={() => setActiveTab("annika")}
            className={`flex items-center gap-2 transition-all duration-300 ${
              activeTab === "annika" ? "opacity-100" : "opacity-50 hover:opacity-75"
            }`}
          >
            <img src={avatarAnnika} alt="Annika" className="w-9 h-9 rounded-full object-cover ring-2 ring-background shadow-md" />
            <span className="text-sm font-semibold text-foreground">Ahmad's agents</span>
          </button>
          <button
            onClick={() => setActiveTab("jacob")}
            className={`flex items-center gap-2 transition-all duration-300 ${
              activeTab === "jacob" ? "opacity-100" : "opacity-50 hover:opacity-75"
            }`}
          >
            <img src={avatarJacob} alt="Jacob" className="w-9 h-9 rounded-full object-cover ring-2 ring-background shadow-md" />
            <span className="text-sm font-semibold text-foreground">Shah's agents</span>
          </button>
        </motion.div>

        {/* Agent cards */}
        <motion.div
          className="mt-6 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4 }}
            >
              {allCards.map((card, i) => (
                <motion.div
                  key={card.name}
                  className={`${card.bgClass} rounded-xl p-3 cursor-pointer group`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -4, transition: { duration: 0.25 } }}
                >
                  <div className="relative w-full aspect-square rounded-lg overflow-hidden mb-2 flex items-center justify-center">
                    <motion.img
                      src={card.icon}
                      alt={card.name}
                      className="w-[85%] h-[85%] object-contain"
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 40 + i * 10, repeat: Infinity, ease: "linear" }}
                    />
                  </div>
                  <h3 className="font-semibold text-xs text-foreground leading-tight">{card.name}</h3>
                  <p className="text-[10px] text-muted-foreground mt-1 line-clamp-2 leading-relaxed">{card.description}</p>
                  <p className="text-[10px] text-muted-foreground/70 mt-1.5 truncate">{card.tag}</p>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
