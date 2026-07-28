import { FormBuilder, type FormFieldConfig } from "@/components/common/FormBuilder";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/Input";
import AuthHeader from "@/features/auth/components/AuthHeader";
import { Eye, EyeOff, Lock, Mail, User } from "lucide-react";
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
    {
        id: "password",
        type: "password",
        label: "New Password",
        placeholder: "••••••••",
        required: true,
    },
]
export default function ResetPasswordPage() {
    const showPassword = false
    const handleSubmit = async (data: any) => {
        console.log(data)
    }
    return (

        <>
            <AuthHeader icon={Lock} title="Reset Password" description="Enter your email, verification code, and create a new
                        password to regain access to your account." />

            {/* Form */}
            <FormBuilder
                fields={resetPasswordFields}
                onSubmit={handleSubmit}
                submitButton={{
                    children: "Reset Password",
                    variant: "primary",
                    size: "lg",
                    fullWidth: true,
                }}
            />

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