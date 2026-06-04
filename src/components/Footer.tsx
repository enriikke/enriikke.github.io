import { ContainerInner, ContainerOuter } from '@/components/Container'

function HeartIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M10 17.25c-.22 0-.44-.07-.62-.2C6.43 14.95 2.5 11.7 2.5 7.75A4.24 4.24 0 0 1 6.75 3.5 4.7 4.7 0 0 1 10 4.86a4.7 4.7 0 0 1 3.25-1.36 4.24 4.24 0 0 1 4.25 4.25c0 3.95-3.93 7.2-6.88 9.3-.18.13-.4.2-.62.2Z"
        clipRule="evenodd"
      />
    </svg>
  )
}

export function Footer() {
  return (
    <footer className="mt-32 flex-none">
      <ContainerOuter>
        <div className="pt-10 pb-16">
          <ContainerInner>
            <p className="flex items-center gap-1.5 text-xs text-zinc-400 dark:text-zinc-600">
              <span>With</span>
              <HeartIcon className="h-3 w-3 fill-zinc-300 dark:fill-zinc-700" />
              <span>by Enrique Gonzalez &copy; {new Date().getFullYear()}</span>
            </p>
          </ContainerInner>
        </div>
      </ContainerOuter>
    </footer>
  )
}
