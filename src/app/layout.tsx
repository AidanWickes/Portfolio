import { zilla } from '@/lib/fonts'
import { cn } from '@/lib/utils/cn'
import '@/styles/globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body
                className={cn(
                    'min-h-screen font-sans antialiased',
                    zilla.variable
                )}
            >
                {children}
            </body>
        </html>
    )
}
