import { BentoCard } from '@/components/bento-card'
import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Gradient } from '@/components/gradient'
import { Keyboard } from '@/components/keyboard'
import { Link } from '@/components/link'
import { LinkedAvatars } from '@/components/linked-avatars'
import { LogoCloud } from '@/components/logo-cloud'
import { LogoCluster } from '@/components/logo-cluster'
import { LogoTimeline } from '@/components/logo-timeline'
import { Map } from '@/components/map'
import { Navbar } from '@/components/navbar'
import { Screenshot } from '@/components/screenshot'
import { Testimonials } from '@/components/testimonials'
import { Heading, Subheading } from '@/components/text'
import { ChevronRightIcon } from '@heroicons/react/16/solid'

export const metadata = {
  description:
    'Poaster uses AI to help writers grow their Substack.',
}

function Hero() {
  return (
    <div className="relative">
      <Gradient className="absolute inset-2 bottom-0 rounded-4xl ring-1 ring-black/5 ring-inset" />
      <Container className="relative">
        <Navbar
          banner={
            <Link
              href="/blog/radiant-raises-100m-series-a-from-tailwind-ventures"
              className="flex items-center gap-1 rounded-full bg-fuchsia-950/35 px-3 py-0.5 text-sm/6 font-medium text-white data-hover:bg-fuchsia-950/30"
            >
              Launching in Beta Soon...
              <ChevronRightIcon className="size-4" />
            </Link>
          }
        />
        <div className="pt-16 pb-24 sm:pt-24 sm:pb-32 md:pt-32 md:pb-48">
          <h1 className="font-display text-6xl/[0.9] font-medium tracking-tight text-balance text-gray-950 sm:text-8xl/[0.8] md:text-9xl/[0.8]">
            Grow your Substack.
          </h1>
          <p className="mt-8 max-w-lg text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
            We turn writers into poasters.<br/>
            You write long-form, we extract bangers and post them to X.
            Signup in minutes.<br/>
            Grow your Substack faster, forever.
          </p>
          <div className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
            <Button href="https://x.com/PoasterApp" target="_blank">Follow on X for Beta Access</Button>
            {/*<Button variant="secondary" href="/pricing">*/}
            {/*  See pricing*/}
            {/*</Button>*/}
          </div>
        </div>
      </Container>
    </div>
  )
}

function FeatureSection() {
  return (
    <div className="overflow-hidden">
      <Container className="pb-24">
        <Heading as="h2" className="max-w-3xl">
          Rest easy, we'll grow your Substack while you sleep.
        </Heading>
        <Screenshot
          width={1216}
          height={768}
          src="/screenshots/app.png"
          className="mt-16 h-144 sm:h-auto sm:w-304"
        />
      </Container>
    </div>
  )
}

function BentoSection() {
  return (
    <Container>
      <Subheading>Automated Growth</Subheading>
      <Heading as="h3" className="mt-2 max-w-3xl">
        You already wrote something incredible. We can do the rest.
      </Heading>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
        <BentoCard
          eyebrow="Analysis"
          title="Use What Works: Your Voice"
          description="Your readers already love your writing, so give the people what they want. We automate your social media growth so your words go farther, and your Substack revenue & subscriber count goes up."
          graphic={
            <div className="absolute inset-0 bg-[url(/screenshots/competitors.png)] bg-size-[1100px_650px] bg-position-[left_-38px_top_-73px] bg-no-repeat" />
          }
          fade={['bottom']}
          className="lg:col-span-3 lg:rounded-tr-4xl"
        />
        <BentoCard
          eyebrow="Smart Quotes"
          title="Our Agents Bring Out Your Best"
          description="Some writers are told to trash their social media accounts with AI slop to grow. It's not. Our AI agents choose the best quotes and selections from your long-form articles. Your feed remains purely in your voice. Always."
          graphic={
            <div className="h-80 bg-[url(/screenshots/profile.png)] bg-size-[1000px_560px] bg-position-[left_-109px_top_-112px] bg-no-repeat" />
          }
          fade={['bottom']}
          className="max-lg:rounded-t-4xl lg:col-span-3 lg:rounded-tl-4xl"
        />
        <BentoCard
          eyebrow="Automation"
          title="Only Minutes to Set Up, Years of Automated Posts"
          description="Upload Your Archive. Connect to X. Profit. Setting up the growth engine for your Substack doesn't have to be hard."
          graphic={
            <div className="flex size-full pt-10 pl-10">
              <Keyboard highlighted={['LeftCommand', 'LeftShift', 'D']} />
            </div>
          }
          className="lg:col-span-2 lg:rounded-bl-4xl"
        />
        <BentoCard
          eyebrow="Share"
          title="Find Your Future Readers Where They Are"
          description="X. Instagram. Facebook. LinkedIn. TikTok. We get your quotes in front of your future readers, wherever they are."
          graphic={<LogoCluster />}
          className="lg:col-span-2"
        />
        <BentoCard
          eyebrow="Scheduled Posts"
          title="Be the Poaster, Without Doing any Posting"
          description="Choose your own custom posting schedule so your feeds are always fresh with your quotes and long-form articles. "
          graphic={<Map />}
          className="max-lg:rounded-b-4xl lg:col-span-2 lg:rounded-br-4xl"
        />
      </div>
    </Container>
  )
}

function DarkBentoSection() {
  return (
    <div className="mx-2 mt-2 rounded-4xl bg-gray-900 py-32">
      <Container>
        <Subheading dark>Agentic AI Working For You</Subheading>
        <Heading as="h3" dark className="mt-2 max-w-3xl">
          Automated social media growth, powered by AI agents.
        </Heading>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
          <BentoCard
            dark
            eyebrow="Analysis"
            title="Agents that find the viral quotes you already wrote"
            description="Our AI Agents are trained to choose the best quotes which will go viral and grow your Substack when posted on social media."
            graphic={
              <div className="h-80 bg-[url(/screenshots/networking.png)] bg-size-[851px_344px] bg-no-repeat" />
            }
            fade={['top']}
            className="max-lg:rounded-t-4xl lg:col-span-4 lg:rounded-tl-4xl"
          />
          <BentoCard
            dark
            eyebrow="Beyond Substack"
            title="Extract from Any Website."
            description="Poaster works with any website, not just Substack. Our AI agents can extract quotes and post them to social media from any blog or article you write."
            graphic={<LogoTimeline />}
            // `overflow-visible!` is needed to work around a Chrome bug that disables the mask on the graphic.
            className="z-10 overflow-visible! lg:col-span-2 lg:rounded-tr-4xl"
          />
          <BentoCard
            dark
            eyebrow="Growth"
            title="More Paid Subscribers"
            description="Our AI agentic powered workflows do the heavy lifting of growing your Substack, so you can focus on writing."
            graphic={<LinkedAvatars />}
            className="lg:col-span-2 lg:rounded-bl-4xl"
          />
          <BentoCard
            dark
            eyebrow="Engagement"
            title="Set up once. Even for articles you haven't written yet."
            description="Setup only takes minutes, and even includes future articles you haven't yet published. Just add our custom email as a paid subscriber to your Substack and we'll handle the rest."
            graphic={
              <div className="h-80 bg-[url(/screenshots/engagement.png)] bg-size-[851px_344px] bg-no-repeat" />
            }
            fade={['top']}
            className="max-lg:rounded-b-4xl lg:col-span-4 lg:rounded-br-4xl"
          />
        </div>
      </Container>
    </div>
  )
}

function CallToAction() {
  return (
    <div className="bg-indigo-100">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:justify-between lg:px-8">
        <h2 className="max-w-2xl text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
          Ready to grow your Substack?
          <br />
          Start your free trial today.
        </h2>
        <div className="mt-10 px-10 flex items-center gap-x-6 lg:mt-0 lg:shrink-0">
          <Button href="https://my.poaster.app/signup">I'm Ready.</Button>
          {/*<a href="#" className="text-sm/6 font-semibold text-gray-900">*/}
          {/*  Learn more*/}
          {/*  <span aria-hidden="true">→</span>*/}
          {/*</a>*/}
        </div>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <main>
        {/*<Container className="mt-10">*/}
        {/*  <LogoCloud />*/}
        {/*</Container>*/}
        <div className="bg-linear-to-b from-white from-50% to-gray-100 py-32">
          {/*<FeatureSection />*/}
          <BentoSection />
        </div>
        <CallToAction />
        <DarkBentoSection />
      </main>
      <Testimonials />
      <Footer />
    </div>
  )
}
