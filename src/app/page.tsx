import SpeakerCleaner from "@/components/SpeakerCleaner";
import Link from "next/link";
import { CheckCircle, ShieldCheck, Star } from "lucide-react";

export default function Home() {
    return (
        <>
            <section>
                <SpeakerCleaner />
            </section>

            <section className="content-section" style={{ textAlign: 'center' }}>
                <h2>How to Use SpeakerFix Pro</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
                    <div>
                        <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--accent)' }}>1</div>
                        <h3>Max Volume</h3>
                        <p>Turn your phone volume to the maximum level for best results.</p>
                    </div>
                    <div>
                        <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--accent)' }}>2</div>
                        <h3>Face Down</h3>
                        <p>Place your phone on a flat surface with the speaker facing downwards.</p>
                    </div>
                    <div>
                        <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--accent)' }}>3</div>
                        <h3>Press Start</h3>
                        <p>Run the cleaning cycle for 60 seconds (repeat if necessary).</p>
                    </div>
                </div>
            </section>

            <section className="content-section glass-morphism" style={{ padding: '2rem', borderRadius: '24px', marginTop: '4rem' }}>
                <h2 style={{ textAlign: 'center' }}>Why it Works</h2>
                <p>
                    SpeakerFix Pro uses high-performance sound waves targeted at specific frequencies that create heavy mechanical vibrations.
                    When water or dust is trapped inside your smartphone&apos;s speaker grill, these vibrations literally "shake" the physics of the
                    surface tension, forcing the water droplets out and clearing any debris that muffles your sound.
                </p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <ShieldCheck color="var(--accent)" /> <span>Safe for Electronics</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <CheckCircle color="var(--accent)" /> <span>No App Install Required</span>
                    </div>
                </div>
            </section>

            <section className="content-section">
                <h2 style={{ textAlign: 'center' }}>User Testimonials</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginTop: '2rem' }}>
                    {[
                        { name: "John D.", text: "Dropped my iPhone in the sink. This literally saved me a trip to the Apple Store!", rating: 5 },
                        { name: "Sarah K.", text: "My speaker was so muffled after the gym. This cleared it up in seconds. Amazing!", rating: 5 },
                        { name: "Mike R.", text: "Best web tool for speaker cleaning. Works on my Pixel perfectly.", rating: 5 }
                    ].map((t, idx) => (
                        <div key={idx} style={{ padding: '1.5rem', borderRadius: '16px', background: 'var(--card)', border: '1px solid var(--border)' }}>
                            <div style={{ display: 'flex', gap: '4px', marginBottom: '8px' }}>
                                {[...Array(t.rating)].map((_, i) => <Star key={i} size={16} fill="gold" stroke="gold" />)}
                            </div>
                            <p style={{ fontStyle: 'italic', marginBottom: '1rem', color: 'var(--foreground)' }}>"{t.text}"</p>
                            <div style={{ fontWeight: 'bold', fontSize: '0.9rem' }}>{t.name}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Monetization Placeholder: Affiliate Section */}
            <section className="content-section" style={{ background: 'linear-gradient(45deg, var(--accent), #00c6ff)', padding: '3rem', borderRadius: '24px', color: 'white' }}>
                <h2 style={{ color: 'white', marginTop: 0 }}>Protect Your Phone</h2>
                <p style={{ color: 'rgba(255,255,255,0.9)' }}>
                    Don&apos;t let accidents happen again. Get the best waterproof cases and screen protectors for your device.
                </p>
                <div style={{ background: 'rgba(255,255,255,0.2)', padding: '1rem', borderRadius: '12px', textAlign: 'center', fontWeight: 'bold' }}>
                    AFFILIATE LINK PLACEHOLDER (e.g. Amazon Associates)
                </div>
            </section>

            <section className="content-section" style={{ textAlign: 'center' }}>
                <h2>Upgrade to Pro</h2>
                <p>Custom frequency ranges, automatic cleaning schedules, and detailed health reports coming soon!</p>
                <button className="btn-primary" style={{ background: 'var(--foreground)', color: 'var(--background)', marginTop: '1rem', opacity: 0.7 }} disabled>
                    COMING SOON
                </button>
            </section>

            {/* Internal Linking for SEO */}
            <section className="content-section">
                <h2 style={{ fontSize: '1.5rem' }}>Related Guides</h2>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                    <li style={{ marginBottom: '0.5rem' }}><Link href="/how-to-remove-water-from-phone-speaker" style={{ color: 'var(--accent)' }}>Comprehensive tutorial: Removing water from any smartphone</Link></li>
                    <li style={{ marginBottom: '0.5rem' }}><Link href="/iphone-speaker-muffled-fix" style={{ color: 'var(--accent)' }}>iPhone Speaker Muffled? Try these 5 fixes first</Link></li>
                    <li style={{ marginBottom: '0.5rem' }}><Link href="/android-speaker-not-working" style={{ color: 'var(--accent)' }}>Android speaker cleaning and troubleshooting guide</Link></li>
                </ul>
            </section>
        </>
    );
}
