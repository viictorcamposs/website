interface IPageSubtitle {
  children: React.ReactNode
  addClassName?: string
}

const PageSubtitle: React.FC<IPageSubtitle> = ({ children, addClassName }) => {
  const tailwindClassNames = addClassName
    ? `mt-[60px] mb-5 xl:mb-7 font-body font-bold text-2xl xl:text-[28px] text-[#0c0f17] dark:text-[#f7f5f9] ${addClassName}`
    : 'mt-[60px] mb-5 xl:mb-7 font-body font-bold text-2xl xl:text-[28px] text-[#0c0f17] dark:text-[#f7f5f9]'

  return <h2 className={tailwindClassNames}>{children}</h2>
}

export default PageSubtitle
