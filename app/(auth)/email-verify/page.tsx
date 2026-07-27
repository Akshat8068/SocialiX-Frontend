"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/Input";
import AuthHeader from "@/features/auth/components/AuthHeader";
import { Mail } from "lucide-react";
import Link from "next/link";

export default function VerifyEmailPage() {
    return (

        <>

            {/* Header */}
            <AuthHeader
                icon={Mail}
                title="Verify Your Email"
                description="We've sent a 6-digit verification code to your email. Please enter it below to confirm your account."
            />

            {/* Form */}

            <form className="w-full space-y-5">

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

                {/* Verify */}

                <Button type="submit" variant="primary" size="lg" fullWidth>
                    Verify Email
                </Button>


            </form>

            {/* Footer */}

            <p className="mt-8 text-sm text-on-surface-variant">
                Wrong email?{" "}
                <Link
                    href="/register"
                    className="font-semibold text-primary hover:underline"
                >
                    Go Back
                </Link>
            </p>

        </>
    );
}