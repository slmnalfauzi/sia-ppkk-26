import { Form, Head, Link } from '@inertiajs/react';
import { login } from '@/routes';
import { email } from '@/routes/password';

export default function ForgotPassword({ status }: { status?: string }) {
    return (
        <>
            <Head title="Lupa Password" />

            <div className="min-h-screen flex items-center justify-center p-4 bg-background">
                {/* Background Decorative Elements */}
                <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
                    <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
                    <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
                </div>

                {/* Main Container */}
                <main className="w-full max-w-[440px] animate-in fade-in slide-in-from-bottom-4 duration-700">
                    {/* Logo Area */}
                    <div className="flex flex-col items-center mb-8">
                        <div className="bg-white p-4 rounded-full shadow-sm mb-4 border border-outline-variant/30">
                            <img alt="Logo UIN Sunan Kalijaga" className="h-16 w-auto object-contain" src="/images/logo_uin.png"/>
                        </div>
                        <h1 className="font-headline-md text-headline-md text-primary tracking-tight">Lupa Password</h1>
                        <p className="font-body-md text-body-md text-on-surface-variant mt-1 text-center px-4">
                            Masukkan email Anda dan kami akan mengirimkan tautan untuk mereset password.
                        </p>
                    </div>

                    {status && (
                        <div className="mb-6 p-4 rounded-lg bg-primary-fixed/20 border border-primary-fixed text-center text-sm font-medium text-primary">
                            {status}
                        </div>
                    )}

                    {/* Form Card */}
                    <div className="bg-surface-container-lowest login-card rounded-xl p-8 md:p-10">
                        <Form
                            {...email.form()}
                            className="space-y-6"
                        >
                            {({ processing, errors }) => (
                                <>
                                    {/* Email Input */}
                                    <div className="space-y-2">
                                        <label className="font-label-md text-label-md text-on-surface-variant block ml-1" htmlFor="email">Email address</label>
                                        <div className="relative group">
                                            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[20px] group-focus-within:text-primary transition-colors" style={{ fontVariationSettings: "'FILL' 1" }}>mail</span>
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

                                    {/* Submit Button */}
                                    <button 
                                        type="submit"
                                        disabled={processing}
                                        className="w-full bg-primary hover:bg-primary-container text-white font-title-md py-4 rounded-lg shadow-sm active:scale-[0.98] transition-all flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
                                    >
                                        {processing ? (
                                            <>
                                                <span className="animate-spin material-symbols-outlined">progress_activity</span> 
                                                <span>Mengirim...</span>
                                            </>
                                        ) : (
                                            <>
                                                <span>Kirim Link Reset</span>
                                                <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">send</span>
                                            </>
                                        )}
                                    </button>
                                </>
                            )}
                        </Form>
                    </div>

                    {/* Back Link */}
                    <div className="mt-8 text-center">
                        <Link href={login()} className="inline-flex items-center gap-2 font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors">
                            <span className="material-symbols-outlined text-[16px]">arrow_back</span>
                            <span>Kembali ke Login</span>
                        </Link>
                    </div>
                </main>
            </div>
        </>
    );
}
