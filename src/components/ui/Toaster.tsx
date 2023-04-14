"use client"

import { FC } from 'react'
import { Toaster } from 'react-hot-toast';
import hotToast from 'react-hot-toast'

interface ProviderProps {
    position?: 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right';
}

const Toaster2 = (opts: ProviderProps) => {
    const { position = 'bottom-right' } = opts
    return <Toaster toastOptions={{
        position: position,
        className: 'bg-black border border-gray-600 bg-opacity-40 backdrop-blur-md text-gray-600 shadow-md dark:text-black dark:bg-white dark:bg-opacity-40',
    }} />
}

export default Toaster2;