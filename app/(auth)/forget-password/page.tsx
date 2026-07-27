"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/Input";
import AuthHeader from "@/features/auth/components/AuthHeader";
import { Mail } from "lucide-react";
import Link from "next/link";

export default function ForgotPasswordPage() {
    return (

        <>
            <AuthHeader icon={Mail} title="Forgot Password" description="Enter your registered email address and we'll send
                            you a verification code to reset your password."/>

            {/* Form */}

            <form className="w-full space-y-5">

                {/* Email */}

                 <Input
                    id="email"
                    type="email"
                    placeholder="name@gmail.com"
                    icon={Mail}
                />

                {/* Proceed Button */}

                <Button type="submit" variant="primary" size="lg" fullWidth>
                    Proceed
                </Button>
            </form>

            {/* Footer */}

            <p className="mt-8 text-sm text-on-surface-variant">
                Remember your password?{" "}
                <Link
                    href="/login"
                    className="font-semibold text-primary hover:underline"
                >
                    Sign In
                </Link>
            </p>

        </>

    );
}