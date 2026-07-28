"use client"

import { FormBuilder,type FormFieldConfig } from "@/components/common/FormBuilder";
import AuthHeader from "@/features/auth/components/AuthHeader";
import {  User } from "lucide-react";
import Link from "next/link";


const loginFields:FormFieldConfig[] = [
    {
        id: "email",
        type: "email",
        label: "Email",
        placeholder: "name@gmail.com",
    },
    {
        id: "password",
        type: "password",
        label: "Password",
        required:true,
        placeholder: "••••••••",
    },
]

export default function LoginPage() {
    const showPassword = false
    const handleSubmit = (values: unknown) => {
        console.log(values)
    }

    return (

        <>
            <AuthHeader icon={User} title="Welcome Back" description="Sign in to continue your journey" />

            {/* Form */}

            <FormBuilder
                fields={loginFields}
                onSubmit={handleSubmit}
                submitButton={{
                    children: "Sign In",
                    fullWidth: true,
                }}
            />

            <div className="mt-3 flex justify-end">
                <Link href="/forget-password">
                    Forgot Password?
                </Link>
                </div>

            <p className="mt-xl text-sm text-on-surface-variant">
                Don't have an account?{" "}
                <Link href={"/register"} className="font-bold text-primary hover:underline">
                    Create Account
                </Link>
            </p>
        </>
    );
}