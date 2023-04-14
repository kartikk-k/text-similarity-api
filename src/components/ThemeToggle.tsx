"use client"

import { useTheme } from 'next-themes';
import Icons from '@/ui/Icons';
import { FC, useEffect } from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem } from '@/ui/DropdownMenu';
import { DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu';
import { Button } from './ui/Button';

interface ProviderProps { }

const ThemeToggle: FC<ProviderProps> = ({ }) => {

    const { setTheme } = useTheme()

    console.log(setTheme)

    return (
        <div>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button>
                        <Icons.Sun className='transition-all scale-100 rotate-0 hover:text-slate-300 dark:-rotate-90 dark:scale-0 dark:text-slate-400 dark:hover:text-slate-700' />
                        <Icons.Moon className='absolute transition-all scale-0 rotate-90 hover:text-slate-900 dark:rotate-0 dark:scale-100 dark:text-slate-400 dark:hover:text-slate-600' />
                    </Button>
                </DropdownMenuTrigger>

                <DropdownMenuContent align='end' forceMount>
                    <DropdownMenuItem onClick={() => setTheme('light')}>
                        <Icons.Sun className='w-4 h-4 mr-2' />
                        <span>Light</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setTheme('dark')}>
                        <Icons.Moon className='w-4 h-4 mr-2' />
                        <span>Dark</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setTheme('system')}>
                        <Icons.Laptop className='w-4 h-4 mr-2' />
                        <span>System</span>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
}

export default ThemeToggle;