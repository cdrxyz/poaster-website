import { AnimatedNumber } from '@/components/animated-number'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import { Heading, Lead, Subheading } from '@/components/text'

export const metadata = {
  title: 'Company',
  description:
    'Writers helping writers.',
}

function Header() {
  return (
    <Container className="mt-16">
      <Heading as="h1">Writers helping writers.</Heading>
      <Lead className="mt-6 max-w-3xl">
        Founded by writers and engineers to help grow your Substack.
      </Lead>
      <section className="mt-16 grid grid-cols-1 lg:grid-cols-2 lg:gap-12">
        <div className="max-w-lg">
          <h2 className="text-2xl font-medium tracking-tight">Let your writing do the marketing</h2>
          <p className="mt-6 text-sm/6 text-gray-600">
            At Poaster, we believe that writers should focus on what they do best:
            writing. Our mission is to empower writers to grow their audience
            without taking time away from their craft. By leveraging AI technology,
            we help writers extract viral quotes from their long-form articles
            and automatically post them to their social media platforms. Growth can be effortless.
          </p>
          <p className="mt-8 text-sm/6 text-gray-600">
            Founded by a team of passionate writers and software engineers,
            Poaster is dedicated to providing innovative solutions that make it
            easier for writers to engage with their readers and grow their Substack.
          </p>
        </div>
        <div className="pt-20 lg:row-span-2 lg:-mr-16 xl:mr-auto">
          <div className="-mx-8 grid grid-cols-2 gap-4 sm:-mx-16 sm:grid-cols-4 lg:mx-0 lg:grid-cols-2 lg:gap-4 xl:gap-8">
            <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
              <img
                alt=""
                src="/company/1.jpg"
                className="block size-full object-cover"
              />
            </div>
            <div className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 lg:-mt-32">
              <img
                alt=""
                src="/company/2.jpg"
                className="block size-full object-cover"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
              <img
                alt=""
                src="/company/3.jpg"
                className="block size-full object-cover"
              />
            </div>
            <div className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 lg:-mt-32">
              <img
                alt=""
                src="/company/4.jpg"
                className="block size-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="max-lg:mt-16 lg:col-span-1">
          <Subheading>Early Results</Subheading>
          <hr className="mt-6 border-t border-gray-200" />
          <dl className="mt-6 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
            <div className="flex flex-col gap-y-2 border-b border-dotted border-gray-200 pb-4">
              <dt className="text-sm/6 text-gray-600">Revenue Growth Lift</dt>
              <dd className="order-first text-6xl font-medium tracking-tight">
                <AnimatedNumber start={1} end={46} />%
              </dd>
            </div>
            <div className="flex flex-col gap-y-2 border-b border-dotted border-gray-200 pb-4">
              <dt className="text-sm/6 text-gray-600">Trial Length</dt>
              <dd className="order-first text-6xl font-medium tracking-tight">
                <AnimatedNumber start={1} end={15} /> days
              </dd>
            </div>
            <div className="flex flex-col gap-y-2 max-sm:border-b max-sm:border-dotted max-sm:border-gray-200 max-sm:pb-4">
              <dt className="text-sm/6 text-gray-600">Paid Subscriber Growth Lift</dt>
              <dd className="order-first text-6xl font-medium tracking-tight">
                <AnimatedNumber start={1} end={23} />%
              </dd>
            </div>
            <div className="flex flex-col gap-y-2">
              <dt className="text-sm/6 text-gray-600">Free Subscriber Growth Lift</dt>
              <dd className="order-first text-6xl font-medium tracking-tight">
                <AnimatedNumber start={1} end={7} />%
              </dd>
            </div>
          </dl>
        </div>
      </section>
    </Container>
  )
}

function Story() {
  return (
    <Container className="mt-32">
      <Subheading>Our Story</Subheading>
      <Heading as="h3" className="mt-2">
        Built by writers, for writers.
      </Heading>
      <Lead className="mt-6 max-w-3xl">
        Poaster is built by writers and engineers who believe creators deserve powerful tools without agency price tags.
      </Lead>
      <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2">
        <div className="max-w-lg">
          <p className="text-sm/6 text-gray-600">
            Poaster started as an internal tool built to solve a real problem: a
            Substack writer was publishing great long-form content, but nobody
            was seeing it. Posting manually to social media was time-consuming
            and felt inauthentic. So we built an AI agent to do it automatically—
            pulling the best quotes from every article and distributing them
            across platforms on a consistent schedule.
          </p>
          <p className="mt-8 text-sm/6 text-gray-600">
            The results were immediate. Subscriber counts climbed. Revenue
            followed. So we opened Poaster up to other writers. Today, creators
            and marketing teams around the world use Poaster to grow their
            audience without sacrificing time or creative energy.
          </p>
        </div>
        <div className="max-lg:order-first max-lg:max-w-lg">
          <div className="aspect-3/2 overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
            <img
              alt=""
              src="/company/5.jpg"
              className="block size-full object-cover"
            />
          </div>
        </div>
      </div>
    </Container>
  )
}

function Investors() {
  return (
    <Container className="mt-32">
      <Subheading>Investors</Subheading>
      <Heading as="h3" className="mt-2">
        We only report to our customers.
      </Heading>
      <Lead className="mt-6 max-w-3xl">
        Self-funded, no investors, we only report to our customers.
      </Lead>
      <div className="mt-10">
        <p className="max-w-lg text-sm/6 text-gray-500">
          Poaster is self-funded, built initially to help a single Substack writer.
          Now, offering the same tools that worked for them to any Substack author or
          small business marketing team looking to grow their audience without extra effort.
        </p>
      </div>
    </Container>
  )
}

export default function Company() {
  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Container>
        <Navbar />
      </Container>
      <Header />
      <Story />
      <Investors />
      <Footer />
    </main>
  )
}
