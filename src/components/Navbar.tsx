import Link from 'next/link';
import { buttonVariants } from '@/ui/Button';
import SignInButton from '@/components/SignInButton';
import SignOutButton from '@/components/SignOutButton';
import ThemeToggle from '@/components/ThemeToggle';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

interface ProviderProps { }

const Navbar = async ({ }) => {
    const session = await getServerSession(authOptions)
    return (
        <div className='fixed top-0 left-0 right-0 flex justify-between w-full h-20 border-b md:px-10 border-b-gray-400 dark:bg-black dark:bg-opacity-40 backdrop-blur-md'>
            <div className='container flex items-center justify-between w-full mx-auto max-w-7xl'>

                <Link href="/" className={buttonVariants({ variant: 'link' })}>
                    Text Similarity API 1.0
                </Link>


                <div className='hidden gap-2 px-4 md:flex'>
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

                {/* mobile theme toggle */}
                <div className='px-4 md:hidden'>
                    <ThemeToggle />
                </div>


            </div>
        </div>
    );
}

export default Navbar;