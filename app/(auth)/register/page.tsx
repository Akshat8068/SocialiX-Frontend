
"use client"
import { FormBuilder, type FormFieldConfig } from "@/components/common/FormBuilder";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/Input";
import AuthHeader from "@/features/auth/components/AuthHeader";
import { Eye, EyeOff, Lock, Mail, User, UserPlus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const registerFields:FormFieldConfig[] = [
    {
        id: "fullname",
        type: "text",
        label: "Full Name",
        placeholder: "Full Name",
        required: true,
    },
    {
        id: "username",
        type: "text",
        label: "Username",
        placeholder: "Username",
        required: true,
    },
    {
        id: "email",
        type: "email",
        label: "Email",
        placeholder: "name@gmail.com",
        required: true,
    },
    {
        id: "password",
        type: "password",
        label: "Password",
        placeholder: "••••••••",
        required: true,
    },
]
export default function RegisterPage() {
    const showPassword = false
    const handleSubmit=(values: unknown)=> {
        console.log(values);
    }

    return (

        <>


            <AuthHeader
                icon={UserPlus}
                title="Join SocialiX"
                description="Experience the next generation of pro-social tools."
            />

            {/* Form */}
            <FormBuilder
                fields={registerFields}
                onSubmit={handleSubmit}
                submitButton={{
                    children: "Sign Up",
                    variant: "primary",
                    size: "lg",
                    fullWidth: true,
                }}
            />

            <p className="mt-xl text-sm text-on-surface-variant">
                Already  have an account?{" "}
                <Link href={"/login"} className="font-bold text-primary hover:underline">
                    Sign in
                </Link>
            </p>
        </>

    );
}