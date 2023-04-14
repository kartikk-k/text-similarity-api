import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import LargeHeading from '@/components/ui/Heading'
import Paragraph from '@/components/ui/Paragraph'


export const metadata: Metadata = {
  title: "Text Similarity API",
  description: "A simple API to check the similarity between two texts.",

}

export default function Home() {
  return (
    <div className='relative flex items-center justify-center h-screen overflow-x-hidden'>
      <div className='container w-full h-full pt-32 mx-auto max-w-7xl'>
        <div className='flex flex-col items-center justify-start h-full gap-6 lg:justify-center lg:items-start'>
          <LargeHeading
            size='lg'
            className='px-10 three-d text-light-gold'>
            Easily determine <br /> text similarity.
          </LargeHeading>

          <Paragraph className='max-w-xl px-10 lg:text-left'>
            With the Text Similarity API, you can easily determine the
            similarity between two pieces of text with a free{' '}
            <Link
              href='/login'
              className='font-bold text-gray-700 underline underline-offset-2 dark:text-light-gold'>
              API key
            </Link>
            .
          </Paragraph>
          <Paragraph className='max-w-xl px-10 lg:text-left'>
            <Link
              href='/docs'
              className='font-bold text-gray-700 underline underline-offset-2 dark:text-light-gold'>
              View Docs
            </Link>
          </Paragraph>

          <div className='relative w-4/5 max-w-lg lg:max-w-xl lg:left-1/2 aspect-square lg:absolute'>
            <Image
              priority
              className='img-shadow '
              quality={100}
              style={{ objectFit: 'contain' }}
              fill
              src='/typewriter.png'
              alt='typewriter'
            />
          </div>
        </div>
      </div>
    </div>
  )
}
