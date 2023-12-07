import { Inter } from 'next/font/google'
import './globals.css'
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Providers } from './providers';
import Navbar from '../components/nav/Navbar';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Social Listening',
    description: 'Generate a detailed report of social media activity for any given hashtags.',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Providers>
                    <Navbar />
                    {children}
                </Providers>
            </body>
        </html>
    )
}
