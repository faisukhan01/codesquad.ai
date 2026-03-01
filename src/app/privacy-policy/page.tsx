import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-blue-50 to-background overflow-x-hidden">
      <Navbar />
      <main className="pt-28 pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <section className="mb-10 text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              Privacy Policy
            </h1>
            <p className="text-sm text-muted-foreground mb-4">
              Last updated: February 24, 2026
            </p>
            <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
              How CodeSquad handles data while building and running AI workflow systems for modern teams.
            </p>
          </section>

          <section className="bg-white/80 backdrop-blur-sm rounded-2xl border border-border/40 shadow-sm px-6 sm:px-8 py-8 space-y-6 text-sm leading-relaxed text-muted-foreground">
            <p>
              This Privacy Policy explains how CodeSquad (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) collects, uses,
              and protects information when you visit our website, contact us about projects, or
              work with us to design and implement AI workflow systems and software.
            </p>

            <div className="pt-4 border-t border-border/40">
              <h2 className="text-lg font-semibold text-foreground mb-2">1. Information we collect</h2>
              <p className="mb-2">
                We collect information in three main ways:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <span className="font-medium text-foreground">Information you provide directly</span> –
                  for example when you fill out a contact form, book a call, or share process
                  documentation and system access so we can design workflows.
                </li>
                <li>
                  <span className="font-medium text-foreground">Usage and analytics data</span> – basic
                  information on how you interact with our website, such as pages visited and
                  referral sources, typically collected through privacy‑respecting analytics tools.
                </li>
                <li>
                  <span className="font-medium text-foreground">Project data</span> – configuration data,
                  workflow diagrams, and system logs generated while we are designing, testing, and
                  running automations for you.
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t border-border/40">
              <h2 className="text-lg font-semibold text-foreground mb-2">2. How we use information</h2>
              <p className="mb-2">We use the information we collect to:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Respond to your enquiries and assess whether we are a good fit to work together.</li>
                <li>Design, build, and maintain AI workflow systems tailored to your organisation.</li>
                <li>Monitor system performance and improve the reliability of the automations we deliver.</li>
                <li>Improve our website, offerings, and communication based on aggregate insights.</li>
                <li>
                  Comply with legal obligations and enforce our agreements, including our Terms of
                  Service.
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t border-border/40">
              <h2 className="text-lg font-semibold text-foreground mb-2">3. Use of AI and third‑party providers</h2>
              <p>
                Our solutions often rely on infrastructure and AI providers (for example cloud
                hosting, workflow automation tools, CRM platforms, and large language model APIs).
                Where we connect your systems to these providers, they may process data in order to
                deliver the functionality you request. We carefully select providers that are
                reputable and provide appropriate security and compliance controls, but their own
                terms and privacy policies will also apply.
              </p>
            </div>

            <div className="pt-4 border-t border-border/40">
              <h2 className="text-lg font-semibold text-foreground mb-2">4. Data security</h2>
              <p>
                We take reasonable technical and organisational measures to protect the information
                we handle, including restricting access to project assets, using secure
                authentication for key systems, and following good engineering practices when
                building integrations. However, no system can be guaranteed 100% secure, and you
                should also maintain strong security practices on your own infrastructure and tools.
              </p>
            </div>

            <div className="pt-4 border-t border-border/40">
              <h2 className="text-lg font-semibold text-foreground mb-2">5. Data retention</h2>
              <p>
                We retain project and contact information only for as long as necessary to provide
                the Services, meet legal or accounting requirements, or resolve disputes. At your
                request, and where feasible, we can archive or delete certain project artefacts once
                an engagement has concluded.
              </p>
            </div>

            <div className="pt-4 border-t border-border/40">
              <h2 className="text-lg font-semibold text-foreground mb-2">6. Your choices</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  You may ask us what information we hold about you in connection with a project and
                  request corrections where it is inaccurate.
                </li>
                <li>
                  You may request that we stop sending you non‑essential updates or marketing
                  communications.
                </li>
                <li>
                  Where we rely on your consent for specific data use, you may withdraw that consent
                  at any time, which will not affect processing that has already taken place.
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t border-border/40">
              <h2 className="text-lg font-semibold text-foreground mb-2">7. International transfers</h2>
              <p>
                Depending on your location and the tools we integrate with, data may be processed in
                other countries. We aim to work with providers that offer appropriate safeguards for
                international data transfers, such as standard contractual clauses or equivalent
                mechanisms.
              </p>
            </div>

            <div className="pt-4 border-t border-border/40">
              <h2 className="text-lg font-semibold text-foreground mb-2">8. Children&apos;s data</h2>
              <p>
                Our website and Services are intended for business users and are not directed at
                children. We do not knowingly collect personal data from individuals under the age of
                18. If you believe that such data has been provided to us, please contact us so that
                we can take appropriate action.
              </p>
            </div>

            <div className="pt-4 border-t border-border/40">
              <h2 className="text-lg font-semibold text-foreground mb-2">9. Changes to this policy</h2>
              <p>
                We may update this Privacy Policy from time to time, for example to reflect new
                services, providers, or legal requirements. When we do, we will update the &quot;Last
                updated&quot; date at the top of this page. We encourage you to review this page
                periodically to stay informed about how we protect your information.
              </p>
            </div>

            <div className="pt-4 border-t border-border/40">
              <h2 className="text-lg font-semibold text-foreground mb-2">10. Contact</h2>
              <p>
                For any questions about this Privacy Policy or how we handle data, please contact us
                at{" "}
                <a href="mailto:info@codesquad.ai" className="text-primary hover:underline">
                  info@codesquad.ai
                </a>.
              </p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

