'use client'

import { usePathname } from 'next/navigation'
import type { LinkProps } from 'next/link'
import Link from 'next/link'

interface IComponentProps extends LinkProps {
  children: React.ReactNode
  target: string
}

const linkClassName = `
  relative duration-300
  hover:text-[#f7f5f9]
  after:content-['']
  after:block after:absolute
  after:-bottom-1.5 after:left-[calc(50%-10px)]
  after:h-[2px] after:w-[20px]
  after:transition-all after:duration-300
`

export default function NavLink({ children, ...props }: IComponentProps) {
  const pathname = usePathname()

  const currentPathname = pathname.startsWith(props.href as string)

  return (
    <Link
      {...props}
      target={props.target}
      className={
        currentPathname
          ? `${linkClassName} after:bg-[#f7f5f9]`
          : `${linkClassName} after:bg-transparent`
      }
    >
      {children}
    </Link>
  )
}
