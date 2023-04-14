"use client"

import { FC, useEffect } from 'react'
import { useState } from 'react'
import { Button } from './ui/Button'
import { signIn } from 'next-auth/react'
import { toast } from 'react-hot-toast'
// import { Toast } from '@/ui/Toast'

interface SignInButtonProps { }

const SignInButton: FC<SignInButtonProps> = ({ }) => {
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const signInWithGoogle = async () => {
        setIsLoading(true)

        try {
            await signIn('google')
        } catch (error) {
            toast.error("Error signing in!")
        }
    }

    return (
        <Button
            onClick={() => signInWithGoogle()}
            isLoading={isLoading}
        >
            Sign in
        </Button>
    );
}

export default SignInButton;