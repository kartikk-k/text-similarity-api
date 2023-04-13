'use client'

import { FC, useState } from 'react'
import { Button } from '@/ui/Button';


interface SignOutButtonProps { }

const SignOutButton: FC<SignOutButtonProps> = ({ }) => {
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const SignOutUser = async () => {
        setIsLoading(true)
        try {
            // await signOut('google')
        } catch (error) {
            // toast({
            //     title: 'Error signing out!',
            //     message: 'Please try again later!',
            //     type: 'error',
            // })
            console.log(error)
        }
    }

    return (
        <Button onClick={SignOutUser} isLoading={isLoading}>
            Sign out
        </Button>
    );
}

export default SignOutButton;