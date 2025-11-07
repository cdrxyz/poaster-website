import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import { Heading } from '@/components/text'

export const metadata = {
  title: 'Terms & Conditions',
  description:
    'Terms & Conditions.',
}

function Header() {
  return (
    <Container className="mt-16">
      <Heading as="h1">Privacy Policy</Heading>

      <div className="prose prose-lg max-w-none px-8 py-12">
        <section>
          <h3 className="text-2xl font-bold mt-10 mb-4">1. Introduction</h3>
          <p>Poaster (“we,” “us,” “our”) respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, store, and protect your information when you use Poaster (the “Service”), accessible at poaster.app or via our mobile apps.</p>
          <p>By using the Service, you consent to the practices described in this policy.</p>
          <p>We are the data controller for personal information processed through the Service. Our registered entity is <strong>Poaster Group Ltd.</strong>.</p>

          <h3 className="text-2xl font-bold mt-10 mb-4">2. Information We Collect</h3>

          <h4 className="text-xl font-semibold mt-8 mb-3">A. Information You Provide Directly</h4>
          <ul className="list-disc pl-8 space-y-2">
            <li>Account data: Name, email address, password (hashed), profile picture (optional)</li>
            <li>Connected sources: URLs of your website, Substack, RSS feeds, or other content sources</li>
            <li>Social media credentials: OAuth tokens, API keys, or refresh tokens for X/Twitter, LinkedIn, Meta platforms, etc. (stored encrypted, never in plain text)</li>
            <li>Billing information: If you subscribe to a paid plan, we collect payment details via Stripe (we never store full card numbers)</li>
            <li>Support communications: Emails, chat logs, or feedback you send us</li>
          </ul>

          <h4 className="text-xl font-semibold mt-8 mb-3">B. Information We Collect Automatically</h4>
          <ul className="list-disc pl-8 space-y-2">
            <li>Usage data: Features used, number of quotes generated, posts scheduled/published, error logs</li>
            <li>Device and log data: IP address, browser type, operating system, referral URLs, timestamps</li>
            <li>Analytics: Via Plausible (privacy-friendly, EU-hosted) or similar—no cross-site tracking, no cookies for analytics</li>
            <li>Cookies & similar tech: Strictly necessary session cookies only (no marketing or tracking cookies). LocalStorage for UI preferences.</li>
          </ul>

          <h4 className="text-xl font-semibold mt-8 mb-3">C. Information from Connected Sources & Destinations</h4>
          <ul className="list-disc pl-8 space-y-2">
            <li>Your content: Articles, blog posts, or Substack publications we crawl (publicly accessible or via API)</li>
            <li>Generated quotes: AI-extracted text, hashtags, images, or links we create</li>
            <li>Social platform metadata: Post IDs, engagement stats (likes, reposts) for reporting dashboards</li>
          </ul>
          <p className="mt-4">We do <strong>not</strong> collect sensitive personal data (health, religion, political opinions, etc.).</p>

          <h3 className="text-2xl font-bold mt-10 mb-4">3. How We Use Your Information</h3>
          <p>We use your data to:</p>
          <ul className="list-disc pl-8 space-y-2">
            <li>Provide and improve the Service (generate quotes, schedule posts, debug issues)</li>
            <li>Authenticate and maintain your connections to sources and social accounts</li>
            <li>Send transactional emails (login links, post confirmations, billing receipts)</li>
            <li>Provide customer support</li>
            <li>Detect fraud, abuse, or violations of our Terms</li>
            <li>Generate anonymized aggregate statistics (e.g., “users posted 1.2M quotes last month”)</li>
            <li>Comply with legal obligations</li>
          </ul>
          <p className="mt-4">Legal bases (GDPR Art. 6): Contract performance, legitimate interests, consent (revocable anytime).</p>

          <h3 className="text-2xl font-bold mt-10 mb-4">4. Sharing Your Information</h3>
          <p>We share data only when necessary:</p>
          <ul className="list-disc pl-8 space-y-2">
            <li><strong>Service providers:</strong> Vercel/Netlify, Supabase/PostgreSQL, OpenAI/Anthropic, Stripe, Resend/Postmark, Plausible</li>
            <li><strong>Social platforms:</strong> We post content on your behalf using your OAuth tokens.</li>
            <li><strong>Legal requirements:</strong> Court orders, protection of rights/safety.</li>
            <li><strong>Business transfers:</strong> Mergers/acquisitions (with notice).</li>
          </ul>
          <p className="mt-4">We never sell your personal data.</p>

          <h3 className="text-2xl font-bold mt-10 mb-4">5. International Data Transfers</h3>
          <p>Data is stored in the US (Virginia) and the EU (Frankfurt). Transfers outside use EU Standard Contractual Clauses (SCCs) and Data Processing Agreements.</p>

          <h3 className="text-2xl font-bold mt-10 mb-4">6. Data Retention</h3>
          <ul className="list-disc pl-8 space-y-2">
            <li>Account data: Until deletion + 30 days</li>
            <li>Connected tokens: Revoked on disconnect</li>
            <li>Crawled content & quotes: Deleted within 24 hours after posting</li>
            <li>Logs: 90 days</li>
            <li>Billing records: 7 years</li>
          </ul>

          <h3 className="text-2xl font-bold mt-10 mb-4">7. Your Rights & Choices</h3>
          <p>Email <a href="mailto:hello@poaster.app" className="text-blue-600 hover:underline">hello@poaster.app</a> to exercise rights (access, rectification, erasure, portability, etc.). We respond within 30 days.</p>

          <h3 className="text-2xl font-bold mt-10 mb-4">8. Security</h3>
          <p>TLS 1.3, AES-256, OAuth 2.0/PKCE, regular pen-testing. No system is 100% secure.</p>

          <h3 className="text-2xl font-bold mt-10 mb-4">9. Children’s Privacy</h3>
          <p>Not for children under 13 (or 16 in some jurisdictions). We delete any discovered children’s data immediately.</p>

          <h3 className="text-2xl font-bold mt-10 mb-4">10. Third-Party Links</h3>
          <p>Links to Substack, X, LinkedIn, etc., are governed by their policies.</p>

          <h3 className="text-2xl font-bold mt-10 mb-4">11. Changes to This Policy</h3>
          <p>Material changes notified via email or in-app banner. Continued use = acceptance.</p>

          <h3 className="text-2xl font-bold mt-10 mb-4">12. Contact Us</h3>
          <p>Email: <a href="mailto:hello@poaster.app" className="text-blue-600 hover:underline">hello@poaster.app</a></p>

          <p className="mt-8 font-medium">By using Poaster, you acknowledge you have read and understood this Privacy Policy.</p>
        </section>
      </div>
    </Container>
  )
}

export default function Terms() {
  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Container>
        <Navbar />
      </Container>
      <Header />
      <Footer />
    </main>
  )
}
