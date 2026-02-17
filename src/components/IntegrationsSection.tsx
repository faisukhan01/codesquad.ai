"use client";

import { motion } from "framer-motion";

const integrationRows = [
  [
    { name: "Airtable", emoji: "📋" }, { name: "Anthropic", emoji: "🧠" }, { name: "Apollo", emoji: "🚀" },
    { name: "Asana", emoji: "🎯" }, { name: "Calendly", emoji: "📅" }, { name: "ClickUp", emoji: "✅" },
    { name: "Discord", emoji: "🎮" }, { name: "Dropbox", emoji: "📦" }, { name: "GitHub", emoji: "🐙" },
    { name: "Gmail", emoji: "📧" }, { name: "Google Calendar", emoji: "📆" }, { name: "Google Docs", emoji: "📄" },
    { name: "Google Drive", emoji: "📁" }, { name: "Google Sheets", emoji: "📊" },
  ],
  [
    { name: "HubSpot", emoji: "🟠" }, { name: "Intercom", emoji: "💭" }, { name: "Jira", emoji: "🔧" },
    { name: "Linear", emoji: "📐" }, { name: "LinkedIn", emoji: "💼" }, { name: "Mailchimp", emoji: "🐵" },
    { name: "Monday.com", emoji: "📋" }, { name: "Notion", emoji: "📝" }, { name: "OpenAI", emoji: "🤖" },
    { name: "Outlook", emoji: "📨" }, { name: "Pipedrive", emoji: "🔀" }, { name: "PostHog", emoji: "🦔" },
    { name: "Salesforce", emoji: "☁️" }, { name: "Slack", emoji: "💬" },
  ],
  [
    { name: "Stripe", emoji: "💳" }, { name: "Trello", emoji: "📌" }, { name: "Typeform", emoji: "📝" },
    { name: "WhatsApp", emoji: "📱" }, { name: "X (Twitter)", emoji: "🐦" }, { name: "YouTube", emoji: "▶️" },
    { name: "Zapier", emoji: "⚡" }, { name: "Zoom", emoji: "🎥" }, { name: "Teams", emoji: "👥" },
    { name: "Webflow", emoji: "🌐" }, { name: "Front", emoji: "📮" }, { name: "Help Scout", emoji: "🆘" },
    { name: "Todoist", emoji: "✏️" }, { name: "Xero", emoji: "📒" },
  ],
];

const IntegrationsSection = () => {
  return (
    <section id="integrations" className="py-12 hero-gradient overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="font-bold text-foreground leading-[1.1] tracking-tight" style={{ fontSize: '30px' }}>
            CodeSquad works with<br className="hidden sm:block" />
            <span className="text-gradient-blue">all your favorite apps</span>
          </h2>
        </motion.div>
      </div>

      {/* Full-width scrolling integrations */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[hsl(225,60%,96%)] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[hsl(225,60%,96%)] to-transparent z-10" />

        {integrationRows.map((row, rowIdx) => (
          <div
            key={rowIdx}
            className={`flex ${rowIdx % 2 === 0 ? 'marquee' : 'marquee-reverse'} pause-animation gap-3 mb-3`}
          >
            {[...row, ...row].map((app, i) => (
              <div
                key={`${rowIdx}-${i}`}
                className="flex-shrink-0 bg-background/80 backdrop-blur-sm rounded-xl border border-border/50 px-4 py-3 flex items-center gap-2.5 hover:shadow-lg hover:bg-background transition-all duration-200 cursor-pointer group"
              >
                <span className="text-xl group-hover:scale-110 transition-transform duration-200">{app.emoji}</span>
                <span className="text-[13px] font-medium text-foreground/80 whitespace-nowrap">{app.name}</span>
              </div>
            ))}
          </div>
        ))}
      </div>

      <motion.div
        className="mt-8 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <a href="#" className="inline-flex items-center gap-1 text-primary font-semibold text-sm hover:underline underline-offset-4">
          See more integrations
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
        </a>
      </motion.div>
    </section>
  );
};

export default IntegrationsSection;
