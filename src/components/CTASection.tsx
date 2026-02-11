import { motion } from "framer-motion";

const agentCards = [
  {
    title: "Support agent",
    description: "Manage tickets and handle customer inquiries",
    skills: "6 skills",
    color: "from-orange-200 to-orange-100",
    iconColor: "text-orange-500",
    delay: 0,
  },
  {
    title: "Lead Enricher",
    description: "Enrich leads with contact and background information",
    skills: "4 skills",
    color: "from-pink-200 to-pink-100",
    iconColor: "text-pink-500",
    delay: 0.1,
  },
  {
    title: "Design Assistant",
    description: "Create assets for marketing campaigns and blog posts",
    skills: "2 skills",
    color: "from-blue-200 to-blue-100",
    iconColor: "text-blue-500",
    delay: 0.2,
  },
  {
    title: "Affiliate Programmer",
    description: "Manage Relay app's affiliate program",
    skills: "",
    color: "from-orange-200 to-orange-100",
    iconColor: "text-orange-600",
    delay: 0.3,
  },
  {
    title: "Junior Researcher",
    description: "Discover research and use diverse resources",
    skills: "",
    color: "from-green-200 to-green-100",
    iconColor: "text-green-600",
    delay: 0.4,
  },
];

const CTASection = () => {
  return (
    <section className="py-16 relative overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-blue-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-700 tracking-tight mb-6">
            Create your first agent today
          </h2>
          
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.5 }}
          >
            <button className="bg-blue-600 text-white px-7 py-2.5 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl active:scale-[0.98]">
              Start for free
            </button>
          </motion.div>

          {/* Agent Cards */}
          <div className="flex justify-center items-center gap-4 max-w-4xl mx-auto">
            {agentCards.map((card, index) => (
              <motion.div
                key={index}
                className={`bg-gradient-to-br ${card.color} rounded-xl p-5 shadow-lg backdrop-blur-sm border border-white/50 w-44 flex flex-col items-center text-center min-h-[240px]`}
                initial={{ opacity: 0, y: 60, scale: 0.85 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: card.delay, 
                  duration: 0.7,
                  ease: [0.16, 1, 0.3, 1],
                  type: "spring",
                  stiffness: 120,
                  damping: 18
                }}
                whileHover={{ 
                  y: -12, 
                  scale: 1.06,
                  transition: { 
                    duration: 0.3,
                    ease: [0.16, 1, 0.3, 1]
                  }
                }}
                style={{
                  transform: index === 2 ? 'translateY(-20px)' : 'translateY(0)',
                }}
              >
                {/* Icon */}
                <motion.div 
                  className={`w-16 h-16 rounded-full bg-white/90 flex items-center justify-center mb-3 ${card.iconColor} shadow-md`}
                  animate={{ 
                    rotate: [0, 360],
                  }}
                  transition={{
                    rotate: {
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear"
                    }
                  }}
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.3 }
                  }}
                >
                  <svg className="w-9 h-9" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                  </svg>
                </motion.div>

                {/* Title */}
                <motion.h3 
                  className="text-sm font-semibold text-slate-700 mb-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: card.delay + 0.2, duration: 0.4 }}
                >
                  {card.title}
                </motion.h3>

                {/* Description */}
                <motion.p 
                  className="text-xs text-slate-600 mb-2 leading-relaxed flex-grow"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: card.delay + 0.3, duration: 0.4 }}
                >
                  {card.description}
                </motion.p>

                {/* Skills */}
                {card.skills && (
                  <motion.div 
                    className="text-xs text-slate-500 font-medium mt-auto"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: card.delay + 0.4, duration: 0.4 }}
                  >
                    {card.skills}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
