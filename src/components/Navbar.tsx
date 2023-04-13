import { getSession } from 'next-auth/react';
import Link from 'next/link';
import { buttonVariants } from '@/ui/Button';
import SignInButton from '@/components/SignInButton';
import SignOutButton from '@/components/SignOutButton';
import ThemeToggle from '@/components/ThemeToggle';

interface ProviderProps { }

const Navbar = async ({ }) => {
    const session = await getSession()
    return (
        <div className='fixed top-0 left-0 right-0 flex justify-between w-full h-20 px-10 border-b border-b-gray-400 dark:bg-black dark:bg-opacity-40 backdrop-blur-md'>
            <div className='container flex items-center justify-between w-full mx-auto max-w-7xl'>

                <Link href="/" className={buttonVariants({ variant: 'link' })}>
                    Text Similarity API 1.0
                </Link>

                <div className='md:hidden'>
                    <ThemeToggle />
                </div>

                <div className='hidden gap-4 md:flex'>
                    <ThemeToggle />
                    <Link href="/docs" className={buttonVariants({ variant: 'ghost' })}>
                        Documentation
                    </Link>

                    {session ? (
                        <>
                            <Link
                                href='/dashboard'
                                className={buttonVariants({ variant: 'ghost' })}
                            >
                                Dashboard
                            </Link>
                            <SignOutButton />
                        </>
                    ) : <SignInButton />}
                </div>

            </div>
        </div>
    );
}

export default Navbar;