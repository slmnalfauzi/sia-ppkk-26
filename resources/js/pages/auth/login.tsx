import { Form, Head, Link } from '@inertiajs/react';
import { useState } from 'react';
import { store } from '@/routes/login';
import { request } from '@/routes/password';

type Props = {
    status?: string;
    canResetPassword?: boolean;
};

export default function Login({ status, canResetPassword = true }: Props) {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <>
            <Head title="Masuk" />

            <div className="min-h-screen flex items-center justify-center p-4 bg-background">
                {/* Background Decorative Elements */}
                <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
                    <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
                    <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
                </div>

                {/* Login Container */}
                <main className="w-full max-w-[440px] animate-in fade-in slide-in-from-bottom-4 duration-700">
                    {/* Logo Area */}
                    <div className="flex flex-col items-center mb-8">
                        <div className="bg-white p-4 rounded-full shadow-sm mb-4 border border-outline-variant/30">
                            <img alt="Logo UIN Sunan Kalijaga" className="h-16 w-auto object-contain" src="/images/logo_uin.png"/>
                        </div>
                        <h1 className="font-headline-md text-headline-md text-primary tracking-tight">Masuk ke SIA PPKK</h1>
                        <p className="font-body-md text-body-md text-on-surface-variant mt-1 text-center">Sistem Informasi Akademik Program Pengembangan Keislaman dan Keindonesiaan FST UIN Sunan Kalijaga</p>
                    </div>

                    {status && (
                        <div className="mb-4 text-center text-sm font-medium text-green-600">
                            {status}
                        </div>
                    )}

                    {/* Login Card */}
                    <div className="bg-surface-container-lowest login-card rounded-xl p-8 md:p-10">
                        <Form
                            {...store.form()}
                            resetOnSuccess={['password']}
                            className="space-y-6"
                        >
                            {({ processing, errors }) => (
                                <>
                                    {/* Email Input */}
                                    <div className="space-y-2">
                                        <label className="font-label-md text-label-md text-on-surface-variant block ml-1" htmlFor="email">Email address</label>
                                        <div className="relative group">
                                            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[20px] group-focus-within:text-primary transition-colors" style={{ fontVariationSettings: "'FILL' 1" }}>person</span>
                                            <input 
                                                id="email" 
                                                name="email" 
                                                type="email" 
                                                required 
                                                autoFocus
                                                autoComplete="email"
                                                placeholder="Masukkan email Anda"
                                                className={`w-full pl-10 pr-4 py-3 bg-white border ${errors.email ? 'border-error' : 'border-outline-variant'} rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all font-body-md text-on-surface placeholder:text-outline/50`}
                                            />
                                        </div>
                                        {errors.email && (
                                            <p className="text-sm text-error mt-1 ml-1">{errors.email}</p>
                                        )}
                                    </div>

                                    {/* Password Input */}
                                    <div className="space-y-2">
                                        <div className="flex justify-between items-center px-1">
                                            <label className="font-label-md text-label-md text-on-surface-variant block" htmlFor="password">Password</label>
                                            {canResetPassword && (
                                                <Link className="font-label-md text-label-md text-secondary hover:text-primary transition-colors" href={request()}>
                                                    Lupa Password?
                                                </Link>
                                            )}
                                        </div>
                                        <div className="relative group">
                                            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[20px] group-focus-within:text-primary transition-colors" style={{ fontVariationSettings: "'FILL' 1" }}>lock</span>
                                            <input 
                                                id="password" 
                                                name="password" 
                                                type={showPassword ? 'text' : 'password'} 
                                                required 
                                                autoComplete="current-password"
                                                placeholder="••••••••"
                                                className={`w-full pl-10 pr-12 py-3 bg-white border ${errors.password ? 'border-error' : 'border-outline-variant'} rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all font-body-md text-on-surface placeholder:text-outline/50`}
                                            />
                                            <button 
                                                type="button"
                                                onClick={() => setShowPassword(!showPassword)}
                                                className="absolute right-3 top-1/2 -translate-y-1/2 text-outline hover:text-on-surface transition-colors p-1 flex items-center"
                                            >
                                                <span className="material-symbols-outlined text-[20px]">{showPassword ? 'visibility_off' : 'visibility'}</span>
                                            </button>
                                        </div>
                                        {errors.password && (
                                            <p className="text-sm text-error mt-1 ml-1">{errors.password}</p>
                                        )}
                                    </div>

                                    {/* Remember Me */}
                                    <div className="flex items-center space-x-2 px-1">
                                        <input 
                                            id="remember" 
                                            name="remember" 
                                            type="checkbox"
                                            className="w-4 h-4 rounded border-outline-variant text-primary focus:ring-primary cursor-pointer"
                                        />
                                        <label className="font-body-md text-body-md text-on-surface-variant cursor-pointer select-none" htmlFor="remember">Ingat Saya</label>
                                    </div>

                                    {/* Submit Button */}
                                    <button 
                                        type="submit"
                                        disabled={processing}
                                        className="w-full bg-primary hover:bg-primary-container text-white font-title-md py-4 rounded-lg shadow-sm active:scale-[0.98] transition-all flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
                                    >
                                        {processing ? (
                                            <>
                                                <span className="animate-spin material-symbols-outlined">progress_activity</span> 
                                                <span>Memproses...</span>
                                            </>
                                        ) : (
                                            <>
                                                <span>Masuk</span>
                                                <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">login</span>
                                            </>
                                        )}
                                    </button>
                                </>
                            )}
                        </Form>
                    </div>

                    {/* Back Link */}
                    <div className="mt-8 text-center">
                        <Link href="/" className="inline-flex items-center gap-2 font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors">
                            <span className="material-symbols-outlined text-[16px]">arrow_back</span>
                            <span>Kembali ke Beranda</span>
                        </Link>
                    </div>
                </main>
            </div>
        </>
    );
}
