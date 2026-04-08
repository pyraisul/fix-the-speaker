import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
    metadataBase: new URL("https://speakerfixpro.com"),
    title: "SpeakerFix Pro - Remove Water & Fix Muffled Phone Speakers",
    description: "The ultimate speaker cleaner tool. Eject water from your iPhone or Android speaker using sound waves. Free, safe, and effective.",
    keywords: "speaker cleaner, remove water from phone, fix muffled speaker, phone speaker water eject, android speaker cleaner, iphone speaker fix",
    openGraph: {
        title: "SpeakerFix Pro | Ultimate Phone Speaker Cleaner",
        description: "Fix your phone's muffled sound and eject water instantly with our advanced sound wave technology.",
        type: "website",
        url: "https://speakerfixpro.com",
        images: ["/og-image.jpg"],
    },
    twitter: {
        card: "summary_large_image",
        title: "SpeakerFix Pro | Ultimate Phone Speaker Cleaner",
        description: "Fix your phone's muffled sound and eject water instantly.",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <main className="container">
                    {children}
                </main>
                <footer className="footer">
                    <p>© 2024 SpeakerFix Pro. All rights reserved.</p>
                    <div style={{ marginTop: '1rem', display: 'flex', gap: '1rem', justifyContent: 'center', fontSize: '0.8rem' }}>
                        <Link href="/how-to-remove-water-from-phone-speaker">How it works</Link>
                        <Link href="/iphone-speaker-muffled-fix">iPhone Fix</Link>
                        <Link href="/android-speaker-not-working">Android Fix</Link>
                        <Link href="/phone-speaker-crackling-fix">Crackling Fix</Link>
                    </div>
                </footer>
            </body>
        </html>
    );
}
