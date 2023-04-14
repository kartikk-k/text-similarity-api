import { FC } from 'react'
import type { Metadata } from 'next';
import LargeHeading from '@/ui/Heading';
import Paragraph from '@/ui/Paragraph';
import DocsTab from '@/components/DocsTab';
import Code from '@/components/ui/Code';

export const metadata: Metadata = {
    title: "Docs | Similarity API",
    description: "A simple API to check the similarity between two texts.",
}

const page = () => {
    return (
        <div className='container mx-auto max-w-7xl'>
            <div className='flex flex-col items-center gap-6'>
                <LargeHeading className='text-gray-400'>
                    Making a Request
                </LargeHeading>
                <Paragraph className='font-bold'>
                    api/v1/similarity
                </Paragraph>

                <DocsTab />

            </div>

        </div>
    );
}

export default page;