import { motion } from "framer-motion";

const logos = [
  { 
    name: "HubSpot",
    icon: (
      <svg className="w-10 h-10 fill-black group-hover:fill-blue-600 transition-colors duration-300" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.164 7.93V5.084a2.198 2.198 0 0 0 1.267-1.978v-.067A2.2 2.2 0 0 0 17.238.85h-.067a2.2 2.2 0 0 0-2.193 2.193v.067a2.196 2.196 0 0 0 1.252 1.973l.013.006v2.852a6.22 6.22 0 0 0-2.969 1.31l.012-.01-7.828-6.095a2.497 2.497 0 0 0 .155-.878v-.012A2.256 2.256 0 0 0 3.355 0h-.01A2.256 2.256 0 0 0 1.09 2.256v.01c0 1.244 1.009 2.253 2.253 2.253h.01a2.254 2.254 0 0 0 1.513-.586l-.005.004 7.842 6.105a6.264 6.264 0 0 0-.955 3.284v.022-.001a6.303 6.303 0 1 0 6.416-6.416zm-.186 9.483a3.377 3.377 0 1 1 0-6.754 3.377 3.377 0 0 1 0 6.754z"/>
      </svg>
    )
  },
  { 
    name: "Salesforce",
    icon: (
      <svg className="w-10 h-10 fill-black group-hover:fill-blue-600 transition-colors duration-300" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.006 5.415a4.195 4.195 0 0 1 4.047-3.023 4.195 4.195 0 0 1 3.903 2.671 3.466 3.466 0 0 1 1.932-.576 3.478 3.478 0 0 1 3.478 3.478 3.478 3.478 0 0 1-.075.716 4.06 4.06 0 0 1 1.709 3.3 4.073 4.073 0 0 1-4.073 4.073c-.273 0-.54-.027-.798-.078a3.93 3.93 0 0 1-3.664 2.55 3.93 3.93 0 0 1-3.492-2.14 4.904 4.904 0 0 1-.673.047A4.905 4.905 0 0 1 7.395 11.5a4.904 4.904 0 0 1-2.623-1.078 3.638 3.638 0 0 1-2.126.696A3.652 3.652 0 0 1 0 7.466a3.653 3.653 0 0 1 3.646-3.647c.446 0 .87.08 1.264.226a5.046 5.046 0 0 1 5.096 1.37z"/>
      </svg>
    )
  },
  { 
    name: "Zapier",
    icon: (
      <svg className="w-10 h-10 fill-black group-hover:fill-blue-600 transition-colors duration-300" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.34 7.78h-3.195l2.314-2.314a7.168 7.168 0 0 1 .881 2.314zm-1.863 3.22h3.195a7.168 7.168 0 0 1-.881 2.314L14.477 11zm-2.477 0l2.314 2.314a7.168 7.168 0 0 1-2.314.881V11zm0-1.22V6.585a7.168 7.168 0 0 1 2.314.881L12 9.78zm-1.22 0L8.466 7.466a7.168 7.168 0 0 1 2.314-.881V9.78zm0 1.22v3.195a7.168 7.168 0 0 1-2.314-.881L10.78 11zm-1.22 0H6.365a7.168 7.168 0 0 1 .881-2.314L9.56 11zm0 1.22l-2.314 2.314a7.168 7.168 0 0 1-.881-2.314H9.56z"/>
      </svg>
    )
  },
  { 
    name: "Make",
    icon: (
      <svg className="w-10 h-10 fill-black group-hover:fill-blue-600 transition-colors duration-300" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.814 5.814L12 2.628l3.186 3.186L12 9l-3.186-3.186zm6.372 0L12 2.628 8.814 5.814 12 9l3.186-3.186zM12 9l3.186 3.186L12 15.372 8.814 12.186 12 9zm0 6.372l3.186 3.186L12 21.372l-3.186-3.186L12 15.372zM2.628 12L5.814 8.814 9 12l-3.186 3.186L2.628 12zm12.558 0L12 15.186 8.814 12 12 8.814 15.186 12zm3.186-3.186L21.372 12l-3.186 3.186L15 12l3.186-3.186z"/>
      </svg>
    )
  },
  { 
    name: "OpenAI",
    icon: (
      <svg className="w-10 h-10 fill-black group-hover:fill-blue-600 transition-colors duration-300" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z"/>
      </svg>
    )
  },
  { 
    name: "Slack",
    icon: (
      <svg className="w-10 h-10 fill-black group-hover:fill-blue-600 transition-colors duration-300" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zm1.271 0a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zm0 1.271a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zm10.122 2.521a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zm-1.268 0a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zm-2.523 10.122a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zm0-1.268a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"/>
      </svg>
    )
  },
  { 
    name: "IBM",
    icon: (
      <svg className="w-10 h-10 fill-black group-hover:fill-blue-600 transition-colors duration-300" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 8.617h4.6v1.666H0zm0 3.326h4.6v1.666H0zm0-6.652h4.6v1.666H0zm5.492 6.652h4.6v1.666h-4.6zm0-3.326h4.6v1.666h-4.6zm0 6.652h4.6v1.666h-4.6zm0-9.978h4.6v1.666h-4.6zm5.491 6.652h4.6v1.666h-4.6zm0-3.326h4.6v1.666h-4.6zm0 6.652h4.6v1.666h-4.6zm0-9.978h4.6v1.666h-4.6zm5.492 6.652H24v1.666h-7.525zm0-3.326H24v1.666h-7.525zm0 6.652H24v1.666h-7.525zm0-9.978H24v1.666h-7.525z"/>
      </svg>
    )
  },
  { 
    name: "Stripe",
    icon: (
      <svg className="w-10 h-10 fill-black group-hover:fill-blue-600 transition-colors duration-300" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.594-7.305h.003z"/>
      </svg>
    )
  },
  { 
    name: "Microsoft",
    icon: (
      <svg className="w-10 h-10 fill-black group-hover:fill-blue-600 transition-colors duration-300" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0v11.408h11.408V0zm12.594 0v11.408H24V0zM0 12.594V24h11.408V12.594zm12.594 0V24H24V12.594z"/>
      </svg>
    )
  },
];

const TrustedBy = () => {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <motion.p
          className="text-sm font-medium text-foreground/60 mb-12 tracking-wide"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Trusted by successful teams at
        </motion.p>
        
        <div className="space-y-8">
          {/* Row 1 */}
          <motion.div
            className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {logos.slice(0, 5).map((logo, i) => (
              <motion.div
                key={logo.name}
                className="group flex flex-col items-center gap-3 cursor-pointer"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.05 }}
              >
                <div className="flex items-center justify-center">
                  {logo.icon}
                </div>
                <span className="text-base md:text-lg font-semibold tracking-tight text-black group-hover:text-blue-600 transition-colors duration-300">
                  {logo.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Row 2 */}
          <motion.div
            className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {logos.slice(5).map((logo, i) => (
              <motion.div
                key={logo.name}
                className="group flex flex-col items-center gap-3 cursor-pointer"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.05 }}
              >
                <div className="flex items-center justify-center">
                  {logo.icon}
                </div>
                <span className="text-base md:text-lg font-semibold tracking-tight text-black group-hover:text-blue-600 transition-colors duration-300">
                  {logo.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;

