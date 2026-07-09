import { Head, Link, usePage } from '@inertiajs/react';
import { dashboard, login } from '@/routes';
import { useEffect, useState } from 'react';

export default function Welcome() {
    const { auth } = usePage().props;
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        // Observer for scroll reveal animations
        const revealOptions = {
            threshold: 0.1,
        };

        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, revealOptions);

        const revealElements = document.querySelectorAll('.scroll-reveal');
        revealElements.forEach((el) => revealObserver.observe(el));

        // Observer for active section in navigation
        const sectionObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { rootMargin: '-20% 0px -60% 0px' }
        );

        const sections = document.querySelectorAll('section[id], footer[id]');
        sections.forEach((section) => sectionObserver.observe(section));

        return () => {
            revealElements.forEach((el) => revealObserver.unobserve(el));
            revealObserver.disconnect();
            sections.forEach((section) => sectionObserver.unobserve(section));
            sectionObserver.disconnect();
        };
    }, []);

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();

        // Ensure active section updates immediately on click
        setActiveSection(id);

        if (id === 'home') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return;
        }

        const target = document.getElementById(id);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const getLinkClass = (id: string) => {
        const isActive = activeSection === id;
        return `pb-1 font-label-md text-label-md transition-colors duration-200 ${isActive
            ? 'text-primary font-bold border-b-2 border-primary'
            : 'text-on-surface-variant hover:text-primary'
            }`;
    };

    return (
        <>
            <Head title="SIA PPKK" />

            <div className="bg-background text-on-background font-body-lg min-h-screen">
                {/* Header */}
                <header className="fixed top-0 left-0 right-0 z-50 bg-surface/80 backdrop-blur-md border-b border-outline-variant">
                    <nav className="flex justify-between items-center w-full px-margin-desktop max-w-container-max mx-auto h-20">
                        <div className="flex items-center gap-3">
                            <img src="/images/logo_uin.png" alt="Logo SIA PPKK" className="w-9 h-9" />
                            <span className="text-title-lg font-title-lg font-bold text-primary">SIA PPKK</span>
                        </div>
                        <div className="hidden md:flex items-center gap-stack-lg">
                            <a href="#home" onClick={(e) => scrollToSection(e, 'home')} className={getLinkClass('home')}>Beranda</a>
                            <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className={getLinkClass('about')}>Tentang PPKK</a>
                            <a href="#alur" onClick={(e) => scrollToSection(e, 'alur')} className={getLinkClass('alur')}>Alur Program</a>
                            <a href="#kontak" onClick={(e) => scrollToSection(e, 'kontak')} className={getLinkClass('kontak')}>Kontak</a>
                        </div>
                        <Link
                            href={auth.user ? dashboard() : login()}
                            className="bg-primary text-on-primary px-6 py-2.5 rounded font-label-md text-label-md font-bold hover:bg-primary-container transition-all active:scale-95 inline-block text-center"
                        >
                            {auth.user ? 'Dashboard' : 'Masuk'}
                        </Link>
                    </nav>
                </header>

                <main className="pt-20">
                    {/* Hero Section */}
                    <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden">
                        <div className="absolute inset-0 z-0">
                            <img alt="Academic Portal Visual" className="w-full h-full object-cover brightness-[0.95]" src="/images/uin-sk.jpg" />
                            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent"></div>
                        </div>
                        <div className="relative z-10 w-full px-margin-desktop max-w-container-max mx-auto">
                            <div className="max-w-3xl">
                                <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full mb-stack-md">
                                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                                    <span className="text-label-md font-label-md text-primary font-bold uppercase tracking-wider">Tahun Akademik 2025/2026</span>
                                </div>
                                <h1 className="text-display-lg font-display-lg text-primary mb-stack-md leading-tight">
                                    Selamat Datang di <span className="text-gradient-primary">SIA PPKK</span> UIN Sunan Kalijaga
                                </h1>
                                <p className="text-body-lg font-body-lg text-on-surface-variant mb-stack-lg max-w-xl">
                                    Sistem Informasi Akademik Program Pengembangan Keislaman dan Keindonesiaan.
                                </p>
                                <div className="flex flex-wrap gap-stack-md">
                                    <Link href={auth.user ? dashboard() : login()} className="bg-primary text-on-primary px-8 py-4 rounded font-bold text-title-md hover:shadow-lg transition-all flex items-center gap-2 group">
                                        Mulai Sekarang
                                        <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                    </Link>
                                    <a href="#" className="bg-surface-container-lowest text-primary border border-outline-variant px-8 py-4 rounded font-bold text-title-md hover:bg-surface-container transition-all text-center flex items-center justify-center">
                                        Panduan Portal
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="absolute bottom-10 right-10 hidden lg:block">
                            <div className="glass-card p-6 rounded-xl flex items-center gap-4 animate-bounce duration-[3000ms]">
                                <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center text-primary">
                                    <span className="material-symbols-outlined">verified</span>
                                </div>
                                <div>
                                    <div className="text-title-md text-primary">98% Kepuasan</div>
                                    <div className="text-label-md text-on-surface-variant">Layanan Digital Terpadu</div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* About Section */}
                    <section className="py-stack-lg bg-surface relative overflow-hidden pattern-dots" id="about">
                        <div className="w-full px-margin-desktop max-w-container-max mx-auto relative z-10">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                                <div className="scroll-reveal">
                                    <div className="mb-stack-md">
                                        <span className="text-primary font-bold text-label-md uppercase tracking-[0.2em]">Profil Program</span>
                                        <div className="h-1 w-12 bg-primary mt-1"></div>
                                    </div>
                                    <h2 className="text-headline-lg font-headline-lg text-primary mb-stack-md">Tentang PPKK</h2>
                                    <div className="space-y-stack-md text-body-lg font-body-lg text-on-surface-variant">
                                        <p>
                                            Program Pengembangan Keislaman dan Keindonesiaan (PPKK) di Fakultas Sains dan Teknologi UIN Sunan Kalijaga merupakan inisiatif strategis untuk membekali mahasiswa dengan nilai-nilai moderasi beragama dan wawasan kebangsaan.
                                        </p>
                                        <p>
                                            Visi kami adalah melahirkan sarjana sains dan teknologi yang tidak hanya unggul secara intelektual, tetapi juga memiliki integritas moral yang kokoh berlandaskan nilai-nilai Islam yang rahmatan lil 'alamin.
                                        </p>
                                    </div>
                                    <div className="grid grid-cols-2 gap-stack-md mt-stack-lg">
                                        <div className="p-4 bg-surface-container-lowest border border-outline-variant rounded">
                                            <h4 className="text-headline-md font-headline-md text-primary">14+</h4>
                                            <p className="text-label-md text-on-surface-variant">Pertemuan Intensif</p>
                                        </div>
                                        <div className="p-4 bg-surface-container-lowest border border-outline-variant rounded">
                                            <h4 className="text-headline-md font-headline-md text-primary">100%</h4>
                                            <p className="text-label-md text-on-surface-variant">Digital Terintegrasi</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="relative scroll-reveal">
                                    <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                                        <img className="w-full h-full object-cover" alt="Mahasiswa Mengaji" src="/images/ngaji.jpg" />
                                    </div>
                                    <div className="absolute -bottom-6 -left-6 bg-primary p-8 rounded-2xl text-on-primary shadow-xl hidden md:block max-w-[240px]">
                                        <p className="text-title-md font-bold mb-2 italic">"Sains dan Agama adalah dua pilar kemajuan peradaban."</p>
                                        <p className="text-label-md opacity-80">- Dekan FST</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Features Section */}
                    <section className="py-stack-lg bg-surface-container-lowest">
                        <div className="w-full px-margin-desktop max-w-container-max mx-auto text-center mb-16 scroll-reveal">
                            <h2 className="text-headline-lg font-headline-lg text-primary">Fitur & Kemudahan</h2>
                            <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto mt-4">Akses semua kebutuhan akademik program PPKK dalam satu genggaman dengan sistem yang transparan dan aman.</p>
                        </div>
                        <div className="w-full px-margin-desktop max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* Card Mahasiswa */}
                            <div className="group p-8 rounded-2xl border border-outline-variant hover:border-primary hover:shadow-xl transition-all duration-300 bg-surface scroll-reveal">
                                <div className="w-16 h-16 rounded-xl bg-primary-fixed flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                                    <span className="material-symbols-outlined text-4xl">person_search</span>
                                </div>
                                <h3 className="text-title-lg font-title-lg text-primary mb-4">Mahasiswa</h3>
                                <p className="text-body-md text-on-surface-variant leading-relaxed">
                                    Pantau kehadiran, materi, dan nilai akhir secara transparan dan real-time. Dapatkan notifikasi langsung terkait jadwal dan pengumuman terbaru.
                                </p>
                            </div>

                            {/* Card Mahasiswa Pendamping */}
                            <div className="group p-8 rounded-2xl border border-outline-variant hover:border-primary hover:shadow-xl transition-all duration-300 bg-surface scroll-reveal" style={{ transitionDelay: '100ms' }}>
                                <div className="w-16 h-16 rounded-xl bg-secondary-fixed flex items-center justify-center text-secondary mb-6 group-hover:scale-110 transition-transform">
                                    <span className="material-symbols-outlined text-4xl">smartphone</span>
                                </div>
                                <h3 className="text-title-lg font-title-lg text-primary mb-4">Mahasiswa Pendamping</h3>
                                <p className="text-body-md text-on-surface-variant leading-relaxed">
                                    Kemudahan input presensi kelas dan nilai langsung lewat smartphone Anda. Manajemen kelompok yang lebih terstruktur dan efisien.
                                </p>
                            </div>

                            {/* Card E-Sertifikat */}
                            <div className="group p-8 rounded-2xl border border-outline-variant hover:border-primary hover:shadow-xl transition-all duration-300 bg-surface scroll-reveal" style={{ transitionDelay: '200ms' }}>
                                <div className="w-16 h-16 rounded-xl bg-tertiary-fixed flex items-center justify-center text-tertiary mb-6 group-hover:scale-110 transition-transform">
                                    <span className="material-symbols-outlined text-4xl">workspace_premium</span>
                                </div>
                                <h3 className="text-title-lg font-title-lg text-primary mb-4">E-Sertifikat</h3>
                                <p className="text-body-md text-on-surface-variant leading-relaxed">
                                    Unduh sertifikat digital resmi format PDF langsung setelah dinyatakan lulus. Sertifikat dilengkapi dengan QR code validasi keamanan tinggi.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Alur Program Section */}
                    <section className="py-stack-lg bg-surface relative overflow-hidden" id="alur">
                        <div className="w-full px-margin-desktop max-w-container-max mx-auto relative z-10">
                            <div className="text-center mb-20 scroll-reveal">
                                <h2 className="text-headline-lg font-headline-lg text-primary">Alur Program PPKK</h2>
                                <p className="text-body-lg text-on-surface-variant mt-2">Langkah-langkah yang akan Anda lalui selama satu semester.</p>
                            </div>

                            <div className="relative">
                                {/* Timeline Line */}
                                <div className="absolute top-1/2 left-0 w-full h-0.5 bg-outline-variant hidden md:block -translate-y-1/2"></div>

                                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
                                    {/* Step 1 */}
                                    <div className="flex flex-col items-center text-center scroll-reveal">
                                        <div className="w-14 h-14 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold text-xl z-10 mb-6 border-4 border-surface shadow-lg">1</div>
                                        <h4 className="text-title-md text-primary font-bold mb-2">Plotting Kelompok</h4>
                                        <p className="text-body-md text-on-surface-variant">Pembagian kelompok berdasarkan program studi dan jadwal.</p>
                                    </div>

                                    {/* Step 2 */}
                                    <div className="flex flex-col items-center text-center scroll-reveal" style={{ transitionDelay: '150ms' }}>
                                        <div className="w-14 h-14 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold text-xl z-10 mb-6 border-4 border-surface shadow-lg">2</div>
                                        <h4 className="text-title-md text-primary font-bold mb-2">Proses Pembelajaran</h4>
                                        <p className="text-body-md text-on-surface-variant">Kegiatan belajar rutin sebanyak 14 kali pertemuan tatap muka.</p>
                                    </div>

                                    {/* Step 3 */}
                                    <div className="flex flex-col items-center text-center scroll-reveal" style={{ transitionDelay: '300ms' }}>
                                        <div className="w-14 h-14 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold text-xl z-10 mb-6 border-4 border-surface shadow-lg">3</div>
                                        <h4 className="text-title-md text-primary font-bold mb-2">Ujian Akhir</h4>
                                        <p className="text-body-md text-on-surface-variant">Evaluasi kompetensi akhir melalui ujian lisan dan tulis.</p>
                                    </div>

                                    {/* Step 4 */}
                                    <div className="flex flex-col items-center text-center scroll-reveal" style={{ transitionDelay: '450ms' }}>
                                        <div className="w-14 h-14 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold text-xl z-10 mb-6 border-4 border-surface shadow-lg">4</div>
                                        <h4 className="text-title-md text-primary font-bold mb-2">Sertifikat</h4>
                                        <p className="text-body-md text-on-surface-variant">Isi evaluasi program dan unduh sertifikat kelulusan digital.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* CTA Section */}
                    <section className="py-stack-lg w-full px-margin-desktop max-w-container-max mx-auto scroll-reveal">
                        <div className="bg-primary rounded-3xl p-12 md:p-20 text-center relative overflow-hidden group">
                            <div className="absolute inset-0 opacity-10 pattern-dots group-hover:scale-110 transition-transform duration-1000"></div>

                            <h2 className="text-headline-lg font-headline-lg text-on-primary mb-6 relative z-10">Siap Untuk Memulai Perjalanan Akademik Anda?</h2>
                            <p className="text-body-lg text-on-primary/80 max-w-2xl mx-auto mb-10 relative z-10">Bergabunglah dengan ribuan mahasiswa lainnya di Fakultas Sains dan Teknologi dalam program pengembangan karakter yang futuristik dan religius.</p>

                            <div className="flex justify-center gap-stack-md relative z-10">
                                <Link href={auth.user ? dashboard() : login()} className="bg-surface-container-lowest text-primary px-10 py-4 rounded-full font-bold text-title-md hover:bg-white transition-all shadow-xl active:scale-95 inline-block">
                                    Masuk ke Portal
                                </Link>
                            </div>
                        </div>
                    </section>
                </main>

                {/* Footer */}
                <footer className="bg-inverse-surface text-on-primary-fixed-variant w-full py-stack-lg" id="kontak">
                    <div className="px-margin-desktop max-w-container-max mx-auto flex flex-col md:flex-row justify-between items-start gap-stack-md">
                        <div className="max-w-md">
                            <div className="flex items-center gap-3 mb-4">
                                <img src="/images/logo_uin.png" alt="Logo SIA PPKK" className="w-9 h-9" />
                                <span className="text-title-md font-title-md text-surface-container-lowest">SIA PPKK FST UIN Suka</span>
                            </div>
                            <p className="text-body-md text-surface-variant mb-6">
                                Mewujudkan integrasi keislaman dan keindonesiaan dalam bingkai sains dan teknologi untuk masa depan peradaban yang lebih baik.
                            </p>
                            <p className="text-label-md text-surface-variant font-bold uppercase tracking-widest">© 2026 SIA PPKK FST UIN Sunan Kalijaga. All Rights Reserved.</p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-8">
                            <div>
                                <h5 className="text-surface-container-lowest font-bold mb-4 font-label-md text-label-md uppercase tracking-wider">Kontak Kami</h5>
                                <ul className="space-y-3">
                                    <li className="flex gap-2 items-start text-surface-variant hover:text-tertiary-fixed-dim transition-colors cursor-pointer">
                                        <span className="material-symbols-outlined text-sm mt-1">location_on</span>
                                        <span className="text-body-md">Jl. Marsda Adisucipto, Yogyakarta</span>
                                    </li>
                                    <li className="flex gap-2 items-start text-surface-variant hover:text-tertiary-fixed-dim transition-colors cursor-pointer">
                                        <span className="material-symbols-outlined text-sm mt-1">mail</span>
                                        <span className="text-body-md">ppkk.fst@uin-suka.ac.id</span>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h5 className="text-surface-container-lowest font-bold mb-4 font-label-md text-label-md uppercase tracking-wider">Media Sosial</h5>
                                <ul className="space-y-3">
                                    <li className="text-surface-variant hover:text-tertiary-fixed-dim transition-colors cursor-pointer font-body-md text-body-md">Instagram</li>
                                    <li className="text-surface-variant hover:text-tertiary-fixed-dim transition-colors cursor-pointer font-body-md text-body-md">LinkedIn</li>
                                    <li className="text-surface-variant hover:text-tertiary-fixed-dim transition-colors cursor-pointer font-body-md text-body-md">YouTube</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}
