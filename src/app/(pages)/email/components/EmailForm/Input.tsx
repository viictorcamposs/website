'use client'

import type { InputHTMLAttributes } from 'react'

interface IInput extends InputHTMLAttributes<unknown> {
  textarea?: boolean
}

export default function Input({ textarea, ...props }: IInput) {
  const tailwindClass = `
    w-full px-4 py-3 
    font-body font-normal text-xs xl:text-sm text-[#464444] dark:text-[#cdcedf] 
    bg-transparent rounded-lg 
    border border-[#464444] dark:border-[#cdcedf] 
    focus:outline-0 focus:border-[#01B0EA] focus:dark:border-[#01B0EA]
  `

  return textarea ? (
    <textarea rows={5} {...props} className={tailwindClass} />
  ) : (
    <input {...props} className={tailwindClass} />
  )
}
