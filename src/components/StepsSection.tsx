import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const agentTypes = [
  {
    id: "social-media",
    name: "Social Media Marketer",
    description: "Monitor Reddit for keywords and track LinkedIn engagement",
    icon: "📱",
    color: "from-blue-400 to-blue-600",
    selected: true,
  },
  {
    id: "personal-assistant",
    name: "Personal Assistant",
    description: "Manage meetings and email, create daily briefings",
    icon: "📋",
    color: "from-purple-400 to-purple-600",
    selected: false,
  },
  {
    id: "customer-support",
    name: "Customer Support Agent",
    description: "Reply to customer emails and track support tickets",
    icon: "💬",
    color: "from-green-400 to-green-600",
    selected: false,
  },
  {
    id: "competitive-researcher",
    name: "Competitive Researcher",
    description: "Track competitors and analyze market trends",
    icon: "🔍",
    color: "from-orange-400 to-orange-600",
    selected: false,
  },
  {
    id: "content-marketer",
    name: "Content Marketer",
    description: "Create and schedule social media content",
    icon: "✍️",
    color: "from-pink-400 to-pink-600",
    selected: false,
  },
  {
    id: "lead-qualifier",
    name: "Lead Qualifier",
    description: "Score and qualify incoming leads automatically",
    icon: "🎯",
    color: "from-indigo-400 to-indigo-600",
    selected: false,
  },
];

const StepsSection = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedAgent, setSelectedAgent] = useState(0);

  // Auto-cycle through agents every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedAgent((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const steps = [
    "Give your agent a name",
    "Teach your agent its first skill",
    "Give your agent feedback and help it improve over time",
  ];

  const displayAgents = [
    agentTypes[0], // Social Media Marketer
    agentTypes[1], // Personal Assistant
    agentTypes[2], // Customer Support Agent
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-foreground leading-[1.1] tracking-tight mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          Add an agent to your team in 3 simple steps
        </motion.h2>

        {/* Step indicator */}
        <motion.div
          className="text-center mb-16 mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h3 className="text-xl font-bold text-foreground mb-6">
            {selectedAgent + 1}. {steps[selectedAgent]}
          </h3>
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
                What kind of agent are you creating?
              </h4>
              
              <div className="space-y-3">
                {displayAgents.map((agent, index) => (
                  <motion.button
                    key={agent.id}
                    onClick={() => setSelectedAgent(index)}
                    className={`w-full text-left p-3.5 rounded-xl border-2 transition-all duration-300 ${
                      selectedAgent === index
                        ? "border-primary bg-primary/5 shadow-md"
                        : "border-gray-200 bg-white hover:border-gray-300"
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                          selectedAgent === index
                            ? "border-primary bg-primary"
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
                
                <button className="w-full text-left p-3.5 rounded-xl border-2 border-gray-200 bg-white hover:border-gray-300 transition-all">
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full border-2 border-gray-300 bg-white" />
                    <span className="font-medium text-gray-800">Design your own</span>
                  </div>
                </button>
              </div>

              <motion.button
                className="mt-5 px-5 py-2 bg-foreground text-background rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Next
              </motion.button>
            </div>

            {/* Right side - Agent preview card */}
            <div className="flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedAgent}
                  className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 shadow-lg border border-gray-200 w-full max-w-sm"
                  initial={{ opacity: 0, scale: 0.9, rotateY: -20 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  exit={{ opacity: 0, scale: 0.9, rotateY: 20 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  {/* Agent icon */}
                  <div className="flex justify-center mb-5">
                    <motion.div
                      className={`w-28 h-28 rounded-full bg-gradient-to-br ${displayAgents[selectedAgent].color} flex items-center justify-center shadow-xl relative`}
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    >
                      {/* Decorative circles */}
                      {[...Array(12)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-3 h-3 bg-white rounded-full"
                          style={{
                            top: "50%",
                            left: "50%",
                            transformOrigin: "0 0",
                          }}
                          animate={{
                            rotate: [i * 30, i * 30 + 360],
                            x: [0, Math.cos((i * 30 * Math.PI) / 180) * 50],
                            y: [0, Math.sin((i * 30 * Math.PI) / 180) * 50],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                        />
                      ))}
                      <span className="text-4xl relative z-10">
                        {displayAgents[selectedAgent].icon}
                      </span>
                    </motion.div>
                  </div>

                  {/* Agent info */}
                  <div className="text-center">
                    <h3 className="text-lg font-bold text-gray-800 mb-2">
                      {displayAgents[selectedAgent].name}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {displayAgents[selectedAgent].description}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <a href="#" className="inline-flex items-center gap-1 text-primary font-semibold text-sm hover:underline underline-offset-4 transition-all">
            Learn more about how CodeSquad Agents work
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default StepsSection;
