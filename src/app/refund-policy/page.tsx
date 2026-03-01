import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-blue-50 to-background overflow-x-hidden">
      <Navbar />
      <main className="pt-28 pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <section className="mb-10 text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              Refund Policy
            </h1>
            <p className="text-sm text-muted-foreground mb-4">
              Last updated: February 24, 2026
            </p>
            <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
              How we handle deposits, milestones, retainers, and billing for AI implementation projects.
            </p>
          </section>

          <section className="bg-white/80 backdrop-blur-sm rounded-2xl border border-border/40 shadow-sm px-6 sm:px-8 py-8 space-y-6 text-sm leading-relaxed text-muted-foreground">
            <p>
              At CodeSquad, we work closely with each client to design and implement custom AI
              workflow systems, automations, and software tailored to their business. Because this
              work is highly collaborative and project‑based, our refund approach is different from
              that of subscription software products.
            </p>

            <div className="pt-4 border-t border-border/40">
              <h2 className="text-lg font-semibold text-foreground mb-2">1. Discovery and strategy fees</h2>
              <p>
                Any fees paid for initial discovery, strategy workshops, or scoping sessions are
                generally non‑refundable. These activities involve dedicated expert time and produce
                tangible value in the form of documented workflows, recommendations, or
                implementation plans that you can use even if you decide not to proceed further.
              </p>
            </div>

            <div className="pt-4 border-t border-border/40">
              <h2 className="text-lg font-semibold text-foreground mb-2">2. Project deposits and milestones</h2>
              <p className="mb-2">
                For implementation projects, we typically work with deposits and milestone‑based
                payments that correspond to clearly defined deliverables (for example: workflow
                design, prototype build, production deployment).
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Project deposits are used to secure our time and are normally non‑refundable.</li>
                <li>
                  Where a milestone has been delivered in line with the agreed scope, the associated
                  payment is non‑refundable.
                </li>
                <li>
                  If a project is cancelled early by mutual agreement, we will review remaining work
                  and, where appropriate, credit or waive portions of unpaid future milestones rather
                  than issue refunds for completed work.
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t border-border/40">
              <h2 className="text-lg font-semibold text-foreground mb-2">3. Retainer and ongoing support</h2>
              <p>
                For retainers or ongoing support arrangements, fees cover access to our team&apos;s time
                and expertise within the agreed period. Pre‑paid retainer periods that have already
                started are generally non‑refundable, but you may usually choose not to renew future
                periods by giving the notice specified in your agreement.
              </p>
            </div>

            <div className="pt-4 border-t border-border/40">
              <h2 className="text-lg font-semibold text-foreground mb-2">4. Quality concerns</h2>
              <p>
                Our goal is to build long‑term relationships and deliver systems that feel reliable,
                modern, and aligned with how your team works. If you ever feel that a deliverable
                does not match the agreed scope or quality expectations, please contact us promptly.
                We will review the work together and, where appropriate, address issues through
                additional revisions or adjustments to the implementation.
              </p>
            </div>

            <div className="pt-4 border-t border-border/40">
              <h2 className="text-lg font-semibold text-foreground mb-2">5. Exceptions</h2>
              <p>
                In rare circumstances—such as clear billing errors or services that were paid for but
                not initiated—we may, at our discretion, issue partial or full refunds. Any such
                exception will be agreed in writing and does not create an ongoing obligation to
                offer similar refunds in future cases.
              </p>
            </div>

            <div className="pt-4 border-t border-border/40">
              <h2 className="text-lg font-semibold text-foreground mb-2">6. How to discuss a refund</h2>
              <p>
                If you have questions about an invoice, milestone, or potential refund, please reach
                out to us as soon as possible at{" "}
                <a href="mailto:info@codesquad.ai" className="text-primary hover:underline">
                  info@codesquad.ai
                </a>
                . We will review the situation with you in good faith and aim to find a fair,
                business‑friendly resolution.
              </p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

