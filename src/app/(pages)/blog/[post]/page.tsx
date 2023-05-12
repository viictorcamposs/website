import Image from 'next/image'

import type { IPost } from '~/app/api/posts/route'

import Main from '~/app/components/Main'

interface IPage {
  params: {
    post: string
  }
}

export async function generateStaticParams() {
  const posts = await fetch('http://localhost:3000/api/posts').then(response => response.json())

  return posts.map((post: IPost) => ({
    post: post.paramId
  }))
}

async function getPost(paramId: string): Promise<IPost> {
  const response = await fetch('http://localhost:3000/api/posts')

  const posts: IPost[] = await response.json()

  const post = posts.find((post: IPost) => post.paramId === paramId) as IPost

  return post
}

export default async function Page({ params: { post: paramId } }: IPage) {
  const post = await getPost(paramId)

  return (
    <Main className="pb-6 px-0 sm:w-full sm:max-w-[780px] xl:max-w-[960px] sm:mx-auto sm:py-6 md:py-8 sm:px-5">
      <div className="flex items-end sm:items-center sm:justify-center py-4 px-5 sm:px-10 relative aspect-video bg-black/60 sm:rounded-lg overflow-hidden">
        <Image fill priority src={post.imageUrl} alt={post.title} className="z-[-1]" />

        <h1 className="relative font-bold text-2xl sm:text-4xl xl:text-[42px]/tight sm:text-center text-[#f7f5f9]">
          {post.title}
        </h1>
      </div>

      <article className="px-5 sm:px-12 xl:px-5 xl:max-w-[780px] xl:mx-auto pt-8 text-sm md:text-base text-[#464444]">
        <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

        <p className="mb-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis ullamcorper risus
          mattis iaculis. Sed ut congue urna. Donec ut ipsum eros. Curabitur in erat feugiat,
          egestas orci in, feugiat velit. Pellentesque diam libero, scelerisque ultrices odio quis,
          mollis pharetra urna. Proin lobortis bibendum urna, nec rutrum urna malesuada.
        </p>

        <p className="mb-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis ullamcorper risus
          mattis iaculis. Sed ut congue urna. Donec ut ipsum eros. Curabitur in erat feugiat,
          egestas orci in, feugiat velit. Pellentesque diam libero, scelerisque ultrices odio quis,
          mollis pharetra urna. Proin lobortis bibendum urna, nec rutrum urna malesuada.
        </p>

        <p className="mb-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis ullamcorper risus
          mattis iaculis...
        </p>

        <ul className="flex flex-col gap-4 list-disc pl-5">
          <li>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis ullamcorper
            risus mattis iaculis...
          </li>

          <li>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis ullamcorper
            risus mattis iaculis...
          </li>

          <li>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis ullamcorper
            risus mattis iaculis...
          </li>
        </ul>
      </article>
    </Main>
  )
}