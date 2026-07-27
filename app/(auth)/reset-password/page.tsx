import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/Input";
import AuthHeader from "@/features/auth/components/AuthHeader";
import { Eye, EyeOff, Lock, Mail, User } from "lucide-react";
import Link from "next/link";


export default function ResetPasswordPage() {
    const showPassword = false

    return (

        <>
            <AuthHeader icon={Lock} title="Reset Password" description="Enter your email, verification code, and create a new
                        password to regain access to your account." />

            {/* Form */}
            <form className="w-full space-y-md">
                {/* Email */}

                <Input
                    id="email"
                    type="email"
                    placeholder="name@gmail.com"
                    icon={Mail}
                />

                {/* OTP */}

                <div className="space-y-2">
                    <label className="text-sm text-on-surface-variant ml-1">
                        Verification Code
                    </label>

                    <div className="grid grid-cols-6 gap-2">

                        {[...Array(4)].map((_, index) => (
                            <input
                                key={index}
                                maxLength={1}
                                className="h-14 rounded-lg border border-outline-variant/50 bg-white/50 text-center text-xl font-semibold outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                            />
                        ))}

                    </div>
                </div>

                <div className="space-y-1">
                    <label
                        htmlFor="password"
                        className="text-sm text-on-surface-variant ml-1"
                    >
                        New Password
                    </label>

                    <div className="relative group">
                        <Lock
                            size={20}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-outline group-focus-within:text-primary transition-colors"
                        />

                        <input
                            id="password"
                            type={showPassword ? "text" : "password"}
                            placeholder="••••••••"
                            className="w-full rounded-lg border border-outline-variant/50 bg-white/50 py-3 pl-12 pr-12 outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                        />

                        <button
                            type="button"
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-outline hover:text-on-surface transition-colors"
                        >
                            {showPassword ? (
                                <EyeOff size={20} />
                            ) : (
                                <Eye size={20} />
                            )}
                        </button>
                    </div>
                </div>
                <Button type="submit" variant="primary" size="lg" fullWidth >
                    Reset Password
                </Button>
            </form>

            {/* Footer */}

            <p className="mt-xl text-sm text-on-surface-variant">
                Remember your password?{" "}
                <Link href={"/login"} className="font-bold text-primary hover:underline">
                    Sign In
                </Link>
            </p>

        </>

    )
}