"use client";

import { FormBuilder, FormFieldConfig } from "@/components/common/FormBuilder";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/Input";
import AuthHeader from "@/features/auth/components/AuthHeader";
import { Mail } from "lucide-react";
import Link from "next/link";


const forgotPasswordFields: FormFieldConfig[] = [
    {
        id: "email",
        type: "email",
        label: "Email Address",
        placeholder: "name@gmail.com",
        required: true,
        helperText: "We'll send a password reset link to this email.",
    },
]
export default function ForgotPasswordPage() {
    const handleSubmit = async (data: any) => {
        console.log(data)
    }
    return (

        <>
            <AuthHeader icon={Mail} title="Forgot Password" description="Enter your registered email address and we'll send
                            you a verification code to reset your password."/>

            {/* Form */}

            <FormBuilder
                fields={forgotPasswordFields}
                onSubmit={handleSubmit}
                submitButton={{
                    children: "Proceed",
                    variant: "primary",
                    size: "lg",
                    fullWidth: true,
                }}
            />

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