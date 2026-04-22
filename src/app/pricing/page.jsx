import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Gradient, GradientBackground } from '@/components/gradient'
import { Link } from '@/components/link'
import { LogoCloud } from '@/components/logo-cloud'
import { Navbar } from '@/components/navbar'
import { Heading, Lead, Subheading } from '@/components/text'
import { assetUrl } from '@/lib/asset'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import {
  CheckIcon,
  ChevronUpDownIcon,
  MinusIcon,
} from '@heroicons/react/16/solid'


export const metadata = {
  title: 'Pricing',
  description: 'Start growing your Substack from as low as $1/month.',
}

const tiers = [
  {
    name: 'Basic',
    slug: 'basic',
    description: 'Anyone can afford to grow.',
    priceMonthly: 1,
    href: 'https://my.poaster.app/signup',
    highlights: [
      { description: '1 Substack or Website' },
      { description: '10 extracted quotes at a time' },
      { description: '1 connected social account' },
      { description: 'Automatic scheduled post sending' },
    ],
    features: [
      { section: 'Posting', name: 'AI posts per month', value: 'Unlimited' },
      { section: 'Posting', name: 'Connected websites', value: 1 },
      { section: 'Posting', name: 'Social accounts', value: 1 },
      { section: 'Posting', name: 'No "@PoasterApp" watermark', value: false },
      { section: 'Posting', name: 'Custom branding', value: false },
      { section: 'Publishing', name: 'Custom post schedule', value: true },
      { section: 'Publishing', name: 'Auto-approve new articles', value: false },
      { section: 'Analytics', name: 'Growth dashboard', value: false },
      { section: 'Analytics', name: 'Post performance tracking', value: false },
      { section: 'Support', name: 'Email support', value: true },
      { section: 'Support', name: 'Priority support', value: false },
      { section: 'Support', name: 'White-label', value: false },
    ],
  },
  {
    name: 'Starter',
    slug: 'starter',
    description: 'Professional grade growth engine.',
    priceMonthly: 10,
    href: 'https://my.poaster.app/signup',
    highlights: [
      { description: '3 Substacks or Websites' },
      { description: '1,000 extracted quotes' },
      { description: '10 connected social accounts' },
      { description: 'Custom Read More CTA' },
      { description: 'Custom Branding, no "Powered by..."' },
    ],
    features: [
      { section: 'Posting', name: 'AI posts per month', value: 'Unlimited' },
      { section: 'Posting', name: 'Connected websites', value: 3 },
      { section: 'Posting', name: 'Social accounts', value: 10 },
      { section: 'Posting', name: 'No "@PoasterApp" watermark', value: true },
      { section: 'Posting', name: 'Custom branding', value: true },
      { section: 'Publishing', name: 'Custom post schedule', value: true },
      { section: 'Publishing', name: 'Auto-approve new articles', value: true },
      { section: 'Analytics', name: 'Growth dashboard', value: false },
      { section: 'Analytics', name: 'Post performance tracking', value: false },
      { section: 'Support', name: 'Email support', value: true },
      { section: 'Support', name: 'Priority support', value: false },
      { section: 'Support', name: 'White-label', value: false },
    ],
  },
  {
    name: 'Agency',
    slug: 'agency',
    description: 'Automated growth at scale.',
    priceMonthly: 299,
    href: 'https://my.poaster.app/signup',
    highlights: [
      { description: '100 Substacks or Websites' },
      { description: '100,000 extracted quotes' },
      { description: '500 connected social accounts' },
      { description: 'Automatic scheduled post sending' },
      { description: 'Custom Read More CTA' },
      { description: 'Custom Branding, no "Powered by..."' },
      { description: 'Premium Support' },
    ],
    features: [
      { section: 'Posting', name: 'AI posts per month', value: 'Unlimited' },
      { section: 'Posting', name: 'Connected websites', value: 100 },
      { section: 'Posting', name: 'Social accounts', value: 500 },
      { section: 'Posting', name: 'No "@PoasterApp" watermark', value: true },
      { section: 'Posting', name: 'Custom branding', value: true },
      { section: 'Publishing', name: 'Custom post schedule', value: true },
      { section: 'Publishing', name: 'Auto-approve new articles', value: true },
      { section: 'Analytics', name: 'Growth dashboard', value: true },
      { section: 'Analytics', name: 'Post performance tracking', value: true },
      { section: 'Support', name: 'Email support', value: true },
      { section: 'Support', name: 'Priority support', value: true },
      { section: 'Support', name: 'White-label', value: true },
    ],
  },
]

function Header() {
  return (
    <Container className="mt-16">
      <Heading as="h1">Grow your Substack, affordably.</Heading>
      <Lead className="mt-6 max-w-3xl">
        No need to blow $5000/month on an agency or army of VAs.<br/>
        Poaster uses agentic AI to efficiently grow your Substack.<br/>
        Starting from just $1/month.
      </Lead>
    </Container>
  )
}

function PricingCards() {
  return (
    <div className="relative py-24">
      <Gradient className="absolute inset-x-2 top-48 bottom-0 rounded-4xl ring-1 ring-black/5 ring-inset" />
      <Container className="relative">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 xl:grid-cols-3">
          {tiers.map((tier, tierIndex) => (
            <PricingCard key={tierIndex} tierIndex={tierIndex} tier={tier} />
          ))}
        </div>
        {/*<LogoCloud className="mt-24" />*/}
      </Container>
    </div>
  )
}

function PricingCard({ tierIndex, tier }) {
  return (
    <div className="-m-2 grid grid-cols-1 rounded-4xl shadow-[inset_0_0_2px_1px_#ffffff4d] ring-1 ring-black/5 max-lg:mx-auto max-lg:w-full max-lg:max-w-md">
      <div className="grid grid-cols-1 rounded-4xl p-2 shadow-md shadow-black/5">
        <div className="rounded-3xl bg-white p-10 pb-9 shadow-2xl ring-1 ring-black/5">
          <Subheading>{tier.name}</Subheading>
          <p className="mt-2 text-sm/6 text-gray-950/75">{tier.description}</p>
          <div className="mt-8 flex items-center gap-4">
            <div className="text-5xl font-medium text-gray-950">
              {tier.priceMonthly === 0 ? 'Free' : `$${tier.priceMonthly}`}
            </div>
            {tier.priceMonthly > 0 && (
              <div className="text-sm/5 text-gray-950/75">
                <p>USD</p>
                <p>per month</p>
              </div>
            )}
          </div>
          <div className="mt-8">
            <Button href={tier.href} variant={tierIndex !== 1 ? "secondary" : undefined}>
              Get started
            </Button>
          </div>
          <div className="mt-8">
            <h3 className="text-sm/6 font-medium text-gray-950">
              Start growing with:
            </h3>
            <ul className="mt-3 space-y-3">
              {tier.highlights.map((props, featureIndex) => (
                <FeatureItem key={featureIndex} {...props} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

function PricingTable({ selectedTier }) {
  return (
    <Container className="py-24">
      <table className="w-full text-left">
        <caption className="sr-only">Pricing plan comparison</caption>
        <colgroup>
          <col className="w-3/5 sm:w-2/5" />
          <col
            data-selected={selectedTier === tiers[0] ? true : undefined}
            className="w-2/5 data-selected:table-column max-sm:hidden sm:w-[15%]"
          />
          <col
            data-selected={selectedTier === tiers[1] ? true : undefined}
            className="w-2/5 data-selected:table-column max-sm:hidden sm:w-[15%]"
          />
          <col
            data-selected={selectedTier === tiers[2] ? true : undefined}
            className="w-2/5 data-selected:table-column max-sm:hidden sm:w-[15%]"
          />
        </colgroup>
        <thead>
          <tr className="max-sm:hidden">
            <td className="p-0" />
            {tiers.map((tier) => (
              <th
                key={tier.slug}
                scope="col"
                data-selected={selectedTier === tier ? true : undefined}
                className="p-0 data-selected:table-cell max-sm:hidden"
              >
                <Subheading as="div">{tier.name}</Subheading>
              </th>
            ))}
          </tr>
          <tr className="sm:hidden">
            <td className="p-0">
              <div className="relative inline-block">
                <Menu>
                  <MenuButton className="flex items-center justify-between gap-2 font-medium">
                    {selectedTier.name}
                    <ChevronUpDownIcon className="size-4 fill-gray-900" />
                  </MenuButton>
                  <MenuItems
                    anchor="bottom start"
                    className="min-w-(--button-width) rounded-lg bg-white p-1 shadow-lg ring-1 ring-gray-200 [--anchor-gap:6px] [--anchor-offset:-4px] [--anchor-padding:10px]"
                  >
                    {tiers.map((tier) => (
                      <MenuItem key={tier.slug}>
                        <Link
                          scroll={false}
                          href={`/pricing?tier=${tier.slug}`}
                          data-selected={
                            tier === selectedTier ? true : undefined
                          }
                          className="group flex items-center gap-2 rounded-md px-2 py-1 data-focus:bg-gray-200"
                        >
                          {tier.name}
                          <CheckIcon className="hidden size-4 group-data-selected:block" />
                        </Link>
                      </MenuItem>
                    ))}
                  </MenuItems>
                </Menu>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center">
                  <ChevronUpDownIcon className="size-4 fill-gray-900" />
                </div>
              </div>
            </td>
            <td colSpan={3} className="p-0 text-right">
              <Button variant="outline" href={selectedTier.href}>
                Get started
              </Button>
            </td>
          </tr>
          <tr className="max-sm:hidden">
            <th className="p-0" scope="row">
              <span className="sr-only">Get started</span>
            </th>
            {tiers.map((tier) => (
              <td
                key={tier.slug}
                data-selected={selectedTier === tier ? true : undefined}
                className="px-0 pt-4 pb-0 data-selected:table-cell max-sm:hidden"
              >
                <Button variant="outline" href={tier.href}>
                  Get started
                </Button>
              </td>
            ))}
          </tr>
        </thead>
        {[...new Set(tiers[0].features.map(({ section }) => section))].map(
          (section) => (
            <tbody key={section} className="group">
              <tr>
                <th
                  scope="colgroup"
                  colSpan={4}
                  className="px-0 pt-10 pb-0 group-first-of-type:pt-5"
                >
                  <div className="-mx-4 rounded-lg bg-gray-50 px-4 py-3 text-sm/6 font-semibold">
                    {section}
                  </div>
                </th>
              </tr>
              {tiers[0].features
                .filter((feature) => feature.section === section)
                .map(({ name }) => (
                  <tr
                    key={name}
                    className="border-b border-gray-100 last:border-none"
                  >
                    <th
                      scope="row"
                      className="px-0 py-4 text-sm/6 font-normal text-gray-600"
                    >
                      {name}
                    </th>
                    {tiers.map((tier) => {
                      let value = tier.features.find(
                        (feature) =>
                          feature.section === section && feature.name === name,
                      )?.value

                      return (
                        <td
                          key={tier.slug}
                          data-selected={
                            selectedTier === tier ? true : undefined
                          }
                          className="p-4 data-selected:table-cell max-sm:hidden"
                        >
                          {value === true ? (
                            <>
                              <CheckIcon className="size-4 fill-green-600" />
                              <span className="sr-only">
                                Included in {tier.name}
                              </span>
                            </>
                          ) : value === false || value === undefined ? (
                            <>
                              <MinusIcon className="size-4 fill-gray-400" />
                              <span className="sr-only">
                                Not included in {tier.name}
                              </span>
                            </>
                          ) : (
                            <div className="text-sm/6">{value}</div>
                          )}
                        </td>
                      )
                    })}
                  </tr>
                ))}
            </tbody>
          ),
        )}
      </table>
    </Container>
  )
}

function FeatureItem({ description, disabled = false }) {
  return (
    <li
      data-disabled={disabled ? true : undefined}
      className="flex items-start gap-4 text-sm/6 text-gray-950/75 data-disabled:text-gray-950/25"
    >
      <span className="inline-flex h-6 items-center">
        <PlusIcon className="size-3.75 shrink-0 fill-gray-950/25" />
      </span>
      {disabled && <span className="sr-only">Not included:</span>}
      {description}
    </li>
  )
}

function PlusIcon(props) {
  return (
    <svg viewBox="0 0 15 15" aria-hidden="true" {...props}>
      <path clipRule="evenodd" d="M8 0H7v7H0v1h7v7h1V8h7V7H8V0z" />
    </svg>
  )
}

function Testimonial() {
  return (
    <div className="mx-2 my-24 rounded-4xl bg-gray-900 pt-72 pb-24 lg:pt-36" style={{ backgroundImage: `url(${assetUrl('/dot-texture.svg')})` }}>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-[384px_1fr_1fr]">
          <div className="-mt-96 lg:-mt-52">
            <div className="-m-2 rounded-4xl bg-white/15 shadow-[inset_0_0_2px_1px_#ffffff4d] ring-1 ring-black/5 max-lg:mx-auto max-lg:max-w-xs">
              <div className="rounded-4xl p-2 shadow-md shadow-black/5">
                <div className="overflow-hidden rounded-3xl shadow-2xl outline-solid outline-1 -outline-offset-1 outline-black/10">
                  <img
                    alt=""
                    src={assetUrl('/testimonials/tina-yards.jpg')}
                    className="aspect-3/4 w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex max-lg:mt-16 lg:col-span-2 lg:px-16">
            <figure className="mx-auto flex max-w-xl flex-col gap-16 max-lg:text-center">
              <blockquote>
                <p className="relative text-3xl tracking-tight text-white before:absolute before:-translate-x-full before:content-['“'] after:absolute after:content-['”'] lg:text-4xl">
                  With Poaster, I finally believe in the power of AI. Our Substack growth is way up, and I haven't had to do a thing. I'm still in shock.
                </p>
              </blockquote>
              <figcaption className="mt-auto">
                <p className="text-sm/6 font-medium text-white">Janice Jacobs</p>
                <p className="text-sm/6 font-medium">
                  <span className="bg-linear-to-r from-[#fff1be] from-28% via-[#ee87cb] via-70% to-[#b060ff] bg-clip-text text-transparent">
                    Writer, Substack
                  </span>
                </p>
              </figcaption>
            </figure>
          </div>
        </div>
      </Container>
    </div>
  )
}

function FrequentlyAskedQuestions() {
  return (
    <Container>
      <section id="faqs" className="scroll-mt-8">
        <Subheading className="text-center">
          Frequently asked questions
        </Subheading>
        <Heading as="div" className="mt-2 text-center">
          Your questions answered.
        </Heading>
        <div className="mx-auto mt-16 mb-32 max-w-xl space-y-12">
          <dl>
            <dt className="text-sm font-semibold">
              How does Poaster work?
            </dt>
            <dd className="mt-4 text-sm/6 text-gray-600">
              Poaster connects to your Substack or website and uses AI agents to
              extract the best quotes and highlights from your articles. It then
              automatically schedules and posts those quotes to your connected
              social media accounts—keeping your feed active with your authentic
              voice, without any manual effort on your part.
            </dd>
          </dl>
          <dl>
            <dt className="text-sm font-semibold">
              Which social media platforms are supported?
            </dt>
            <dd className="mt-4 text-sm/6 text-gray-600">
              Poaster currently supports posting to X (Twitter) via direct API
              integration and OAuth, LinkedIn via OAuth2, and additional
              platforms through Hypefury integration. Native direct connections
              to more platforms are on our roadmap. Check our{' '}
              <a
                href="https://poaster.userjot.com/roadmap"
                className="underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                public roadmap
              </a>{' '}
              for the latest status.
            </dd>
          </dl>
          <dl>
            <dt className="text-sm font-semibold">
              Can I use Poaster with any website, or only Substack?
            </dt>
            <dd className="mt-4 text-sm/6 text-gray-600">
              Poaster works with any publicly accessible website or blog—not just
              Substack. Upload your article archive or point Poaster at any
              website URL, and our AI will extract quotes and schedule posts from
              your content. Substack writers also get the benefit of automatic
              processing when new articles are published.
            </dd>
          </dl>
          <dl>
            <dt className="text-sm font-semibold">
              Can I cancel my subscription at any time?
            </dt>
            <dd className="mt-4 text-sm/6 text-gray-600">
              Yes, absolutely. You can cancel your paid plan at any time from
              your account settings. Your subscription will remain active until
              the end of the current billing period. We don&apos;t lock you in
              or charge cancellation fees.
            </dd>
          </dl>
          <dl>
            <dt className="text-sm font-semibold">
              What happens to posts that have already been published if I downgrade or cancel?
            </dt>
            <dd className="mt-4 text-sm/6 text-gray-600">
              Posts that have already been published to your social accounts
              remain live—Poaster only controls future scheduling. If you
              downgrade, your account limits will apply going forward, but
              nothing already posted is affected.
            </dd>
          </dl>
        </div>
      </section>
    </Container>
  )
}

export default function Pricing() {
  let tier = tiers[0]
  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Container>
        <Navbar />
      </Container>
      <Header />
      <PricingCards />
      {/*<PricingTable selectedTier={tier} />*/}
      <Testimonial />
      {/*<FrequentlyAskedQuestions />*/}
      <Footer />
    </main>
  )
}
