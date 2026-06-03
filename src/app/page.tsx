import Image, { type ImageProps } from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { GitHubIcon, LinkedInIcon, XIcon } from '@/components/SocialIcons'
import avatarImage from '@/images/avatar.jpg'

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

function SocialLink({
  icon: Icon,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link> & {
  icon: React.ComponentType<{ className?: string }>
}) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
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
        <Image src={role.logo} alt="" className="h-7 w-7 rounded-full object-cover" unoptimized />
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
      logo: avatarImage,
      start: '2018',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear().toString(),
      },
    },
    {
      company: 'Skookum',
      title: 'Senior Software Engineer',
      logo: avatarImage,
      start: '2014',
      end: '2018',
    },
    {
      company: 'KYCK',
      title: 'Software Engineer',
      logo: avatarImage,
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
    <>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Software engineer building AI-powered developer experiences.
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            I’m Enrique Gonzalez, a software engineer at GitHub working on Copilot and developer tools. I like building
            products that feel simple, fast, and useful.
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink href="https://x.com/enriikke" aria-label="Follow on X" icon={XIcon} />
            <SocialLink href="https://github.com/enriikke" aria-label="Follow on GitHub" icon={GitHubIcon} />
            <SocialLink
              href="https://www.linkedin.com/in/enriquejgonzalez"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
          </div>
        </div>
      </Container>

      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <section id="about" className="lg:pr-16 xl:pr-24">
            <h2 className="text-2xl font-bold tracking-tight text-zinc-800 sm:text-3xl dark:text-zinc-100">About</h2>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                I’m a senior software engineer at GitHub, where I build full-stack product experiences and platform
                capabilities for GitHub Copilot across GitHub.com, Copilot Chat, agent workflows, memory and context
                systems, and developer tooling.
              </p>
              <p>
                My recent work has focused on turning AI capabilities into production product experiences: launching
                Copilot on GitHub.com, building agent runtime and frontend foundations for GitHub Spark, helping
                establish MCP-compatible extension patterns, and leading user-scoped Copilot Memory for Business and
                Enterprise customers.
              </p>
              <p>
                Before GitHub, I worked at Skookum and KYCK building web products across Rails, React, Node.js, Go,
                GraphQL, Docker, and AWS. I still enjoy the full stack: crisp interfaces, boringly reliable systems, and
                the glue that makes them feel like one product instead of several committees wearing a trench coat.
              </p>
            </div>
          </section>

          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Work />
            <Contact />
          </div>
        </div>
      </Container>
    </>
  )
}
