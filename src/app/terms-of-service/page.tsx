import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-blue-50 to-background overflow-x-hidden">
      <Navbar />
      <main className="pt-28 pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <section className="mb-10 text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              Terms of Service
            </h1>
            <p className="text-sm text-muted-foreground mb-4">
              Last updated: February 24, 2026
            </p>
            <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
              The legal basics, written for modern teams building reliable AI workflow systems with CodeSquad.
            </p>
          </section>

          <section className="bg-white/80 backdrop-blur-sm rounded-2xl border border-border/40 shadow-sm px-6 sm:px-8 py-8 space-y-6 text-sm leading-relaxed text-muted-foreground">
            <p>
              These Terms of Service (&quot;Terms&quot;) govern your access to and use of CodeSquad&apos;s
              website, AI workflow systems, software, and related services (collectively, the
              &quot;Services&quot;). By accessing or using our website or working with us on any project,
              you agree to be bound by these Terms.
            </p>

            <div className="pt-4 border-t border-border/40">
              <h2 className="text-lg font-semibold text-foreground mb-2">1. Who we work with</h2>
              <p>
                CodeSquad partners primarily with small and medium-sized B2B service companies and
                other professional organisations looking to implement AI-powered workflow systems,
                automation, and custom software. You represent that you have the authority to bind
                the company or organisation on whose behalf you engage our Services.
              </p>
            </div>

            <div className="pt-4 border-t border-border/40">
              <h2 className="text-lg font-semibold text-foreground mb-2">2. Scope of services</h2>
              <p>
                Our Services include the design, build, and deployment of AI workflow systems,
                custom AI software, integrations with third‑party tools (such as CRMs, email, and
                collaboration platforms), and ongoing optimisation. Specific scope, deliverables,
                timelines, and commercial terms for each engagement are defined in a separate
                proposal, statement of work, or order form agreed between you and CodeSquad.
              </p>
            </div>

            <div className="pt-4 border-t border-border/40">
              <h2 className="text-lg font-semibold text-foreground mb-2">3. Use of third‑party tools</h2>
              <p>
                Many of our solutions connect to third‑party platforms (for example: CRM systems,
                email providers, AI model APIs, and automation tools). Your use of those platforms
                is governed by their own terms and policies. You are responsible for maintaining any
                required licences, API keys, and permissions. CodeSquad is not responsible for
                outages, changes, or limitations imposed by third‑party providers.
              </p>
            </div>

            <div className="pt-4 border-t border-border/40">
              <h2 className="text-lg font-semibold text-foreground mb-2">4. Your responsibilities</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>Provide accurate and complete information about your processes and systems.</li>
                <li>Ensure that any data you share with us can be lawfully used for the agreed purposes.</li>
                <li>Designate a decision‑maker and provide timely feedback, approvals, and access.</li>
                <li>
                  Use any systems, dashboards, or automations we build in a lawful manner and in line
                  with your own internal policies.
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t border-border/40">
              <h2 className="text-lg font-semibold text-foreground mb-2">5. Fees and payment</h2>
              <p>
                Project fees, retainers, and payment schedules are agreed in writing for each
                engagement. Unless otherwise stated, invoices are due within 14 days of issue. We
                may pause work, remove access to environments, or delay handover of deliverables if
                invoices remain unpaid past their due date.
              </p>
            </div>

            <div className="pt-4 border-t border-border/40">
              <h2 className="text-lg font-semibold text-foreground mb-2">6. Intellectual property</h2>
              <p className="mb-2">
                Unless otherwise agreed in writing:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  You retain ownership of your existing data, brand assets, and proprietary materials
                  provided to us.
                </li>
                <li>
                  CodeSquad retains ownership of underlying frameworks, templates, libraries, and
                  reusable components that we use to deliver your project.
                </li>
                <li>
                  Upon full payment of all fees for an engagement, you receive a licence to use the
                  specific configurations, workflows, and customisations we create for your internal
                  business purposes.
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t border-border/40">
              <h2 className="text-lg font-semibold text-foreground mb-2">7. Confidentiality</h2>
              <p>
                Each party agrees to keep confidential any non‑public information disclosed by the
                other party in connection with the Services and to use it only for the purposes of
                delivering and receiving those Services. We may reference your company name and high‑level
                project description in marketing materials only with your prior consent.
              </p>
            </div>

            <div className="pt-4 border-t border-border/40">
              <h2 className="text-lg font-semibold text-foreground mb-2">8. Data and privacy</h2>
              <p>
                Our handling of personal data is described in our Privacy Policy. By using our
                Services, you acknowledge that certain data may be processed by third‑party AI and
                infrastructure providers in order to operate the workflow systems and automations we
                build for you.
              </p>
            </div>

            <div className="pt-4 border-t border-border/40">
              <h2 className="text-lg font-semibold text-foreground mb-2">9. Disclaimers</h2>
              <p>
                Our Services are designed to help streamline operations and support better decision‑making,
                but we do not guarantee specific financial results, performance improvements, or
                outcomes. AI‑driven suggestions and automations should be reviewed by your team where
                appropriate. You are responsible for final decisions made using insights or outputs
                from the systems we implement.
              </p>
            </div>

            <div className="pt-4 border-t border-border/40">
              <h2 className="text-lg font-semibold text-foreground mb-2">10. Limitation of liability</h2>
              <p>
                To the fullest extent permitted by law, CodeSquad will not be liable for any indirect,
                incidental, special, consequential, or punitive damages, or for any loss of profits
                or revenue, whether incurred directly or indirectly, arising from your use of the
                Services. Our total liability for any claim arising under these Terms is limited to
                the total fees paid by you to CodeSquad for the Services giving rise to that claim
                during the twelve (12) months preceding the event.
              </p>
            </div>

            <div className="pt-4 border-t border-border/40">
              <h2 className="text-lg font-semibold text-foreground mb-2">11. Termination</h2>
              <p>
                Either party may terminate an engagement in accordance with the notice provisions set
                out in the relevant proposal or statement of work. Sections that by their nature
                should survive termination, including confidentiality, intellectual property,
                limitation of liability, and dispute resolution, will continue to apply.
              </p>
            </div>

            <div className="pt-4 border-t border-border/40">
              <h2 className="text-lg font-semibold text-foreground mb-2">12. Governing law</h2>
              <p>
                These Terms are governed by and construed in accordance with the laws of your local
                jurisdiction unless otherwise specified in a written agreement between you and
                CodeSquad. Any disputes will be subject to the exclusive jurisdiction of the courts
                of that jurisdiction.
              </p>
            </div>

            <div className="pt-4 border-t border-border/40">
              <h2 className="text-lg font-semibold text-foreground mb-2">13. Changes to these Terms</h2>
              <p>
                We may update these Terms from time to time to reflect changes in our Services or
                applicable law. When we do, we will update the &quot;Last updated&quot; date at the top of
                this page. Your continued use of the website or Services after any changes become
                effective will constitute acceptance of the revised Terms.
              </p>
            </div>

            <div className="pt-4 border-t border-border/40">
              <h2 className="text-lg font-semibold text-foreground mb-2">14. Contact</h2>
              <p>
                If you have any questions about these Terms, please contact us at{" "}
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

