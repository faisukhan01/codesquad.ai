import { motion } from "framer-motion";
import { Mail, TrendingUp, Search, FileText, Users, BarChart3, type LucideIcon } from "lucide-react";

interface UseCase {
  title: string;
  description: string;
  icon: LucideIcon;
  gradient: string;
  iconColor: string;
}

const useCases: UseCase[] = [
  {
    title: "Customer Support",
    description: "Automatically reply to incoming customer support emails with personalized responses.",
    icon: Mail,
    gradient: "from-blue-50 to-indigo-50",
    iconColor: "text-blue-600",
  },
  {
    title: "Lead Generation",
    description: "Find and qualify leads across social media and outreach platforms automatically.",
    icon: TrendingUp,
    gradient: "from-emerald-50 to-green-50",
    iconColor: "text-emerald-600",
  },
  {
    title: "Market Research",
    description: "Monitor competitors and industry trends, then deliver weekly briefing reports.",
    icon: Search,
    gradient: "from-amber-50 to-orange-50",
    iconColor: "text-amber-600",
  },
  {
    title: "Content Creation",
    description: "Draft social media posts, blog articles, and marketing copy from your brand guidelines.",
    icon: FileText,
    gradient: "from-rose-50 to-pink-50",
    iconColor: "text-rose-600",
  },
  {
    title: "Team Coordination",
    description: "Prepare meeting briefs, follow up on action items, and keep your team in sync.",
    icon: Users,
    gradient: "from-violet-50 to-purple-50",
    iconColor: "text-violet-600",
  },
  {
    title: "Data Analysis",
    description: "Collect, process, and visualize data from multiple sources into actionable insights.",
    icon: BarChart3,
    gradient: "from-cyan-50 to-teal-50",
    iconColor: "text-cyan-600",
  },
];

const UseCasesSection = () => {
  return (
    <section className="py-20 hero-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-[1.1] tracking-tight">
            Create custom agents<br className="hidden sm:block" />
            <span className="text-gradient-blue">for any use case</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {useCases.map((uc, i) => (
            <motion.div
              key={uc.title}
              className={`bg-gradient-to-br ${uc.gradient} rounded-xl p-6 border border-border/30 cursor-pointer group`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6, boxShadow: "0 20px 60px -15px rgba(0,0,0,0.1)", transition: { duration: 0.25 } }}
            >
              <div className="w-11 h-11 rounded-xl bg-background/80 flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform duration-300">
                <uc.icon className={`w-5 h-5 ${uc.iconColor}`} />
              </div>
              <h3 className="text-base font-bold text-foreground mb-2">{uc.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{uc.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
