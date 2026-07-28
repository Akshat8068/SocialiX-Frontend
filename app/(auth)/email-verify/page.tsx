"use client";

import { FormBuilder,type FormFieldConfig } from "@/components/common/FormBuilder";
import AuthHeader from "@/features/auth/components/AuthHeader";
import { Mail } from "lucide-react";
import Link from "next/link";


const resetPasswordFields: FormFieldConfig[] = [
    {
        id: "email",
        type: "email",
        label: "Email",
        placeholder: "name@gmail.com",
        required: true,
    },
    {
        id: "otp",
        type: "otp",
        label: "Verification Code",
        length: 4,
        required: true,
    },

]
export default function VerifyEmailPage() {
    const handleSubmit = async (data: any) => {
        console.log(data)
    }
    return (

        <>

            {/* Header */}
            <AuthHeader
                icon={Mail}
                title="Verify Your Email"
                description="We've sent a 6-digit verification code to your email. Please enter it below to confirm your account."
            />

            {/* Form */}



            <FormBuilder
                fields={resetPasswordFields}
                onSubmit={handleSubmit}
                submitButton={{
                    children: "Verify Email",
                    variant: "primary",
                    size: "lg",
                    fullWidth: true,
                }}
            />



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