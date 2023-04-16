import { Metadata } from 'next';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { notFound } from 'next/navigation';
import { db } from '@/lib/db';
import ApiDashboard from '@/components/ApiDashboard';
import RequestApiKey from '@/components/RequestApiKey';

export const metadata: Metadata = {
    title: 'Dashboard | Similarity API',
    description: 'Open source API for text similarity check'
}

const page = async () => {
    const user = await getServerSession(authOptions)

    if (!user) return notFound()

    const apiKey = await db.apiKey.findFirst({
        where: { userId: user.user.id, enabled: true }
    })

    return (
        <div className='mx-auto  max-w-7xl'>
            {apiKey ? (
                <ApiDashboard />
            ) : (
                <RequestApiKey />
            )}
        </div>
    );
}

export default page;