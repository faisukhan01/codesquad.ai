import { motion } from "framer-motion";
import { Play } from "lucide-react";

const VideoSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">Watch</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 tracking-tight">
            See CodeSquad in action
          </h2>
        </motion.div>

        <motion.a
          href="https://www.youtube.com/watch?v=XQt47wxozL8"
          target="_blank"
          rel="noopener noreferrer"
          className="relative rounded-2xl overflow-hidden aspect-video cursor-pointer group shadow-2xl shadow-primary/5 block"
          initial={{ opacity: 0, y: 30, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ scale: 1.01, transition: { duration: 0.3 } }}
        >
          <img
            src="https://i.ytimg.com/vi_webp/XQt47wxozL8/maxresdefault.webp"
            alt="CodeSquad Demo Video"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-relay-purple/15 to-primary/10" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,0,0,0.1))]" />
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="w-16 h-16 rounded-full bg-foreground flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Play className="w-7 h-7 text-background ml-1" fill="currentColor" />
            </motion.div>
          </div>
        </motion.a>
      </div>
    </section>
  );
};

export default VideoSection;
