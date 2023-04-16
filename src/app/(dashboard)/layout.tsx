export default function Layout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <section className='py-24'>
            {children}
        </section>
    )
}
