"use client"

import { FC, FormEvent } from 'react'
import { useState } from 'react'
import { toast } from 'react-hot-toast'
import { createApiKey } from '@/helpers/create-api-key'
import { Key } from 'lucide-react'
import LargeHeading from '@/ui/Heading'
import Paragraph from '@/ui/Paragraph'
import CopyButton from '@/components/CopyButton'
import { Input } from '@/ui/Input'
import { Button } from './ui/Button'

interface ProviderProps { }

const RequestApiKey: FC<ProviderProps> = ({ }) => {
    const [isCreating, setIsCreating] = useState<boolean>(false)
    const [apiKey, setApiKey] = useState<string | null>(null)

    const createNewApiKey = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        setIsCreating(true)

        try {
            const generatedApiKey = await createApiKey()
            setApiKey(generatedApiKey)
        } catch (error) {
            if (error instanceof Error) {
                toast.error(error.message)
                return
            }
            toast.error('Something went wrong!')
        } finally {
            setIsCreating(false)
        }

    }

    return (
        <div className='container mx-auto md:max-w-2xl'>
            <div className='flex flex-col items-center gap-6 '>
                <Key className='w-12 h-12 mx-auto text-gray-400' />
                <LargeHeading className='text-gray-400 '>Request your API key</LargeHeading>
                <Paragraph>You haven&apos;t requested an API key yet. </Paragraph>
            </div>


            <form
                onSubmit={createApiKey}
                className='px-4 mt-6 sm:flex sm:items-center'
                action='#'
            >
                <div className='relative rounded-md sm:min-w-0 sm:flex-1'>
                    {apiKey ? (
                        <CopyButton valueToCopy={apiKey} className="absolute inset-y-0 right-0 duration-300 animate-in fade-in " />
                    ) : null}

                    <Input
                        readOnly
                        value={apiKey ?? ''}
                        placeholder='Request an API to display it here. ' />
                </div>
                <div className='flex justify-center mt-3 sm:mt-0 sm:ml-4 sm:flex-shrink-0'>
                    <Button disabled={!!apiKey} isLoading={isCreating}>Request API Key</Button>
                </div>
            </form>
        </div>
    );
}

export default RequestApiKey;