'use client'

import { ReactNode } from 'react'
import { ThemeProvider } from 'next-themes' // this is provide functionality of light and dark theme
import { SessionProvider } from 'next-auth/react' // this is provide functionality of session

// children: means it will recieve react components as children
const Providers = ({ children }: { children: ReactNode }) => {
    return (
        <div>
            <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
                <SessionProvider>
                    {children}
                </SessionProvider>
            </ThemeProvider>
        </div>
    );
}

export default Providers;