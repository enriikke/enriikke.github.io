import Image, { type ImageProps } from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { GitHubIcon, LinkedInIcon, XIcon } from '@/components/SocialIcons'
import githubLogo from '@/images/logos/github.svg'
import kyckLogo from '@/images/logos/kyck.svg'
import skookumLogo from '@/images/logos/skookum.svg'
import portraitImage from '@/images/portrait.jpg'

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

function BriefcaseIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function ArrowDownIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

interface Role {
  company: string
  title: string
  logo: ImageProps['src']
  start: string
  end: string | { label: string; dateTime: string }
}

function Role({ role }: { role: Role }) {
  const endLabel = typeof role.end === 'string' ? role.end : role.end.label
  const endDate = typeof role.end === 'string' ? role.end : role.end.dateTime

  return (
    <li className="flex gap-4">
      <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full bg-white shadow-md ring-1 shadow-zinc-800/5 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
        <Image src={role.logo} alt="" className="h-7 w-7 object-contain" unoptimized />
      </div>
      <dl className="flex flex-auto flex-wrap gap-x-2">
        <dt className="sr-only">Company</dt>
        <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">{role.company}</dd>
        <dt className="sr-only">Role</dt>
        <dd className="text-xs text-zinc-500 dark:text-zinc-400">{role.title}</dd>
        <dt className="sr-only">Date</dt>
        <dd className="ml-auto text-xs text-zinc-400 dark:text-zinc-500">
          <time dateTime={role.start}>{role.start}</time> <span aria-hidden="true">—</span>{' '}
          <time dateTime={endDate}>{endLabel}</time>
        </dd>
      </dl>
    </li>
  )
}

function Work() {
  const resume: Array<Role> = [
    {
      company: 'GitHub',
      title: 'Senior Software Engineer',
      logo: githubLogo,
      start: '2018',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear().toString(),
      },
    },
    {
      company: 'Skookum',
      title: 'Senior Software Engineer',
      logo: skookumLogo,
      start: '2014',
      end: '2018',
    },
    {
      company: 'KYCK',
      title: 'Software Engineer',
      logo: kyckLogo,
      start: '2013',
      end: '2014',
    },
  ]

  return (
    <div id="work" className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role) => (
          <Role key={`${role.company}-${role.start}`} role={role} />
        ))}
      </ol>
      <Button href="/resume.pdf" variant="secondary" className="group mt-6 w-full">
        Download Resume
        <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
      </Button>
    </div>
  )
}

function Portrait() {
  return (
    <div className="max-w-xs px-2.5 lg:max-w-none">
      <Image
        src={portraitImage}
        alt=""
        sizes="(min-width: 1024px) 32rem, 20rem"
        className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
        priority
      />
    </div>
  )
}

function ContactLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={className}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function Contact() {
  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">Elsewhere</h2>
      <ul className="mt-6 space-y-4">
        <ContactLink href="https://github.com/enriikke" icon={GitHubIcon}>
          GitHub
        </ContactLink>
        <ContactLink href="https://www.linkedin.com/in/enriquejgonzalez" icon={LinkedInIcon}>
          LinkedIn
        </ContactLink>
        <ContactLink href="https://x.com/enriikke" icon={XIcon}>
          X / Twitter
        </ContactLink>
        <ContactLink
          href="mailto:enrique@hey.com"
          icon={MailIcon}
          className="border-t border-zinc-100 pt-4 dark:border-zinc-700/40"
        >
          enrique@hey.com
        </ContactLink>
      </ul>
    </div>
  )
}

export default function Home() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <Portrait />
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">About</h1>
          <div className="mt-10 space-y-10 text-lg text-zinc-700 dark:text-zinc-300">
            <p>
              Hey, I’m Enrique. I’m a software engineer at{' '}
              <Link
                href="https://github.com"
                className="underline decoration-zinc-400 underline-offset-4 hover:text-teal-500 hover:decoration-teal-500"
              >
                GitHub
              </Link>
              .
            </p>
            <p>I like building web apps, developer tools, and AI-powered product experiences.</p>
            <p>
              Recently I’ve been working on GitHub Copilot, including{' '}
              <Link
                href="https://github.com/copilot"
                className="underline decoration-zinc-400 underline-offset-4 hover:text-teal-500 hover:decoration-teal-500"
              >
                Copilot on GitHub.com
              </Link>
              , GitHub Spark, MCP integrations, and memory/context systems for Copilot Business and Enterprise.
            </p>
            <p>
              Before that, I worked on{' '}
              <Link
                href="https://github.com/sponsors"
                className="underline decoration-zinc-400 underline-offset-4 hover:text-teal-500 hover:decoration-teal-500"
              >
                GitHub Sponsors
              </Link>{' '}
              and{' '}
              <Link
                href="https://github.com/marketplace"
                className="underline decoration-zinc-400 underline-offset-4 hover:text-teal-500 hover:decoration-teal-500"
              >
                GitHub Marketplace
              </Link>
              . Before GitHub, I built software at Skookum and KYCK.
            </p>
            <p>
              I’m on X as{' '}
              <Link
                href="https://x.com/enriikke"
                className="underline decoration-zinc-400 underline-offset-4 hover:text-teal-500 hover:decoration-teal-500"
              >
                @enriikke
              </Link>
              .
            </p>
            <p>
              If you want to reach me, email is best:{' '}
              <Link
                href="mailto:enrique@hey.com"
                className="underline decoration-zinc-400 underline-offset-4 hover:text-teal-500 hover:decoration-teal-500"
              >
                enrique@hey.com
              </Link>
              .
            </p>
          </div>
        </div>

        <div className="space-y-10 lg:pl-20">
          <Work />
          <Contact />
        </div>
      </div>
    </Container>
  )
}
