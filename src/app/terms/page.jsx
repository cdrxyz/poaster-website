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
      <Heading as="h1">Terms and Conditions</Heading>

      <div className="prose prose-lg max-w-none px-8 py-12">
        <section className="mb-16">
          <h3 className="text-2xl font-bold mt-10 mb-4">1. Acceptance of Terms</h3>
          <p>By creating an account, connecting any content source (website, Substack, RSS feed, etc.), or using Poaster (“the Service”), you agree to these Terms and Conditions (“Terms”). If you do not agree, do not use the Service.</p>
          <p>Poaster App is operated by <strong>Poaster Group Ltd.</strong> (“we,” “us,” “Poaster”). These Terms form a binding agreement between you and Poaster.</p>
          {/*<p>Poaster App is operated by <strong>Poaster LLC</strong>, a <strong>[jurisdiction]</strong> company (“we,” “us,” “Poaster”). These Terms form a binding agreement between you and Poaster.</p>*/}

          <h3 className="text-2xl font-bold mt-10 mb-4">2. Description of Service</h3>
          <p>Poaster is a SaaS tool that:</p>
          <ul className="list-disc pl-8 space-y-2">
            <li>Accesses your publicly available or authorized content (articles, blog posts, Substack publications, etc.)</li>
            <li>Uses AI to extract quotes, highlights, or summaries</li>
            <li>Automatically schedules and posts that content to your connected social media accounts (X/Twitter, LinkedIn, Facebook, Instagram, Threads, Mastodon, etc.)</li>
          </ul>
          <p className="mt-4">You must provide valid API keys, OAuth tokens, or other credentials for all connected sources and destinations. You are solely responsible for maintaining those connections.</p>

          <h3 className="text-2xl font-bold mt-10 mb-4">3. Eligibility</h3>
          <p>You must be at least 18 years old and capable of forming a binding contract. You may not use Poaster if you are barred from using similar services under applicable law.</p>

          <h3 className="text-2xl font-bold mt-10 mb-4">4. Account Registration & Security</h3>
          <ul className="list-disc pl-8 space-y-2">
            <li>You must provide accurate information during signup.</li>
            <li>You are responsible for all activity under your account.</li>
            <li>Keep your password and API keys secure. Notify us immediately of any unauthorized use.</li>
            <li>We may suspend or terminate accounts for suspicious activity.</li>
          </ul>

          <h3 className="text-2xl font-bold mt-10 mb-4">5. User Content & License Grant</h3>
          <p><strong>You own your content.</strong> You retain all rights to your original articles, posts, and quotes.</p>
          <p>By using Poaster, you grant us a worldwide, non-exclusive, royalty-free, sublicensable license to:</p>
          <ul className="list-disc pl-8 space-y-2">
            <li>Access, read, and crawl your connected sources</li>
            <li>Analyze, extract, modify (e.g., shorten, add hashtags, images, or links), and generate derivative quotes</li>
            <li>Post that content on your behalf to your connected social media accounts</li>
            <li>Store copies temporarily for caching, debugging, and backup purposes</li>
          </ul>
          <p className="mt-4">This license ends when you disconnect the source or delete your Poaster account (except for content already posted to third-party platforms).</p>

          <h3 className="text-2xl font-bold mt-10 mb-4">6. Your Responsibilities & Compliance</h3>
          <p>You represent and warrant that:</p>
          <ul className="list-disc pl-8 space-y-2">
            <li>You own or have all necessary rights to the content you connect</li>
            <li>Your content does not violate any laws or third-party rights (copyright, trademark, privacy, publicity)</li>
            <li>You will comply with all platform terms:
              <ul className="list-circle pl-8 mt-2 space-y-1">
                <li>X/Twitter Automation Rules</li>
                <li>LinkedIn User Agreement</li>
                <li>Meta Terms of Service</li>
                <li>Substack Terms, etc.</li>
              </ul>
            </li>
            <li>You will not use Poaster for spam, harassment, misinformation, or any prohibited content</li>
          </ul>
          <p className="mt-4 font-semibold">Automation risks: Social platforms may flag, throttle, suspend, or ban accounts for automated posting. You assume all risk. Poaster is not liable for platform actions against your accounts.</p>

          <h3 className="text-2xl font-bold mt-10 mb-4">7. Payments (If Applicable)</h3>
          <p>Free tier (if offered): Limited posts/quotes per month.<br />
            Paid plans: Billed monthly/annually via Stripe. No refunds except as required by law. Prices may change with 30 days’ notice. Overages billed automatically.</p>

          <h3 className="text-2xl font-bold mt-10 mb-4">8. Prohibited Uses</h3>
          <p>You may not:</p>
          <ul className="list-disc pl-8 space-y-2">
            <li>Reverse-engineer, scrape, or interfere with Poaster</li>
            <li>Use Poaster to post illegal, harmful, or deceptive content</li>
            <li>Overload our systems or attempt unauthorized access</li>
            <li>Resell or white-label Poaster without written permission</li>
            <li>Use Poaster for high-risk activities (e.g., medical, financial, or safety-critical decisions)</li>
          </ul>

          <h3 className="text-2xl font-bold mt-10 mb-4">9. Termination</h3>
          <ul className="list-disc pl-8 space-y-2">
            <li>You may delete your account anytime by contacting support. All data is permanently deleted within 30 days.</li>
            <li>We may suspend or terminate your access immediately if you breach these Terms, harm the Service, or at our sole discretion.</li>
            <li>Upon termination, your right to use Poaster ends immediately.</li>
          </ul>

          <h3 className="text-2xl font-bold mt-10 mb-4">10. Intellectual Property</h3>
          <p>Poaster’s name, logos, code, AI models, and UI are our exclusive property. You may not use them without written permission.</p>

          <h3 className="text-2xl font-bold mt-10 mb-4">11. Disclaimer of Warranties</h3>
          <p>THE SERVICE IS PROVIDED “AS IS” AND “AS AVAILABLE” WITHOUT WARRANTIES OF ANY KIND. WE DO NOT GUARANTEE:</p>
          <ul className="list-disc pl-8 space-y-2">
            <li>Posts will publish successfully</li>
            <li>Quotes will be accurate or error-free</li>
            <li>Platforms won’t change APIs or block automation</li>
            <li>Uptime (though we target 99.5%)</li>
          </ul>

          <h3 className="text-2xl font-bold mt-10 mb-4">12. Limitation of Liability</h3>
          <p>TO THE MAXIMUM EXTENT PERMITTED BY LAW:</p>
          <ul className="list-disc pl-8 space-y-2">
            <li>WE ARE NOT LIABLE FOR INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES</li>
            <li>OUR TOTAL LIABILITY WILL NOT EXCEED THE AMOUNT YOU PAID US IN THE 12 MONTHS PRIOR TO THE CLAIM</li>
            <li>WE ARE NOT LIABLE FOR PLATFORM ACTIONS, LOST POSTS, ACCOUNT SUSPENSIONS, OR CONTENT REMOVAL</li>
          </ul>

          <h3 className="text-2xl font-bold mt-10 mb-4">13. Indemnification</h3>
          <p>You agree to defend, indemnify, and hold harmless Poaster and its officers, directors, employees, and agents from any claims, damages, losses, liabilities, costs, and expenses (including reasonable attorney fees) arising from:</p>
          <ul className="list-disc pl-8 space-y-2">
            <li>Your content</li>
            <li>Your violation of these Terms</li>
            <li>Your violation of third-party platform rules</li>
          </ul>

          <h3 className="text-2xl font-bold mt-10 mb-4">14. Governing Law & Dispute Resolution</h3>
          <p>These Terms are governed by the laws of <strong>Delaware, USA</strong>, without regard to conflict of law principles. Any disputes will be resolved exclusively in the state or federal courts located in <strong>Delaware, USA</strong>.</p>

          <h3 className="text-2xl font-bold mt-10 mb-4">15. Changes to Terms</h3>
          <p>We may update these Terms. We’ll notify you via email or in-app notice. Continued use after changes constitutes acceptance.</p>

          <h3 className="text-2xl font-bold mt-10 mb-4">16. Miscellaneous</h3>
          <ul className="list-disc pl-8 space-y-2">
            <li>Entire Agreement: These Terms (plus Privacy Policy) are the complete agreement.</li>
            <li>Severability: If any part is unenforceable, the rest remains valid.</li>
            <li>No Waiver: Failure to enforce a right does not waive it.</li>
            <li>Assignment: We may assign these Terms; you may not without consent.</li>
          </ul>

          <h3 className="text-2xl font-bold mt-10 mb-4">17. Contact</h3>
          <p>Questions? Email: <a href="mailto:hello@poaster.app" className="text-blue-600 hover:underline">hello@poaster.app</a></p>
          <p className="mt-6 font-medium">By using Poaster, you acknowledge you have read, understood, and agree to these Terms.</p>
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
