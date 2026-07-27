

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/Input";
import AuthHeader from "@/features/auth/components/AuthHeader";
import { Eye, EyeOff, Lock, Mail, User, UserPlus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function LoginPage() {
    const showPassword = false

    return (

        <>


            <AuthHeader
                icon={UserPlus}
                title="Join SocialiX"
                description="Experience the next generation of pro-social tools."
            />

            {/* Form */}

            <form
                className="w-full space-y-md">

                <Input
                    id="fullname"
                    type="text"
                    placeholder="Full Name"
                    icon={User}
                />

                <Input
                    id="username"
                    type="text"
                    placeholder="Username"
                    icon={User}
                />
                <Input
                    id="email"
                    type="email"
                    placeholder="name@gmail.com"
                    icon={Mail}
                />

                <div className="space-y-1">
                    <label
                        htmlFor="password"
                        className="text-sm text-on-surface-variant ml-1"
                    >
                        Password
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
                <Button type="submit" variant="primary" size="lg" fullWidth>
                    Sign Up
                </Button>

            </form>

            <p className="mt-xl text-sm text-on-surface-variant">
                Already  have an account?{" "}
                <Link href={"/login"} className="font-bold text-primary hover:underline">
                    Sign in
                </Link>
            </p>
        </>

    );
}