"use client";

import Image from "next/image";
import { ArrowLeft, Camera, Edit, Lock, Trash } from "lucide-react";
import { useForm } from "react-hook-form";
import { FormBuilder, FormFieldConfig } from "@/components/common/FormBuilder";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useUpdateProfileMutation } from "../api/profile.api";
import { ProfileUpdateSchema, UpdateProfileFormData } from "@/features/auth/validation";
import { toast } from "react-toastify";
import { zodResolver } from "@hookform/resolvers/zod"

const profileFields: FormFieldConfig[] = [
    {
        id: "fullname",
        type: "text",
        label: "Full Name",
        placeholder: "Enter your full name"
    },
    {
        id: "bio",
        type: "textarea",
        label: "Bio",
        placeholder: "Tell something about yourself",
    },
    {
        id: "website",
        type: "text",
        label: "Website",
        placeholder: "https://example.com",
    },
    {
        id: "accountType",
        type: "switch",
        label: "Private Account",
        helperText: "Only approved followers can see your posts.",
    }
];

export default function EditProfileForm() {
    const [updateProfile, { isLoading, isSuccess, isError, error }] = useUpdateProfileMutation()
    const router = useRouter()
    const form = useForm<UpdateProfileFormData>({
        resolver: zodResolver(ProfileUpdateSchema),
        defaultValues: {
            fullname: "",
            bio: "",
            website: "",
            accountType:"PUBLIC"
        },
    })


    const handleSubmit = async (data: UpdateProfileFormData) => {
        try {
            console.log(data)
            const response = await updateProfile(data).unwrap()
            console.log(response)
            toast.success(response.message)
            form.reset()
            router.push("/profile")
        } catch (error: any) {
            console.log(error);
            console.log(error.data);
            console.log(error.data?.message)
            toast.error(error.data?.message ?? "Something went wrong")
        }
    }
    return (
        <section className="mx-auto max-w-4xl space-y-8">
            {/* Header */}

            <div className="flex items-center gap-4">
                <button
                    onClick={() => router.back()}
                    className="rounded-full p-2 transition hover:bg-surface-container"
                >
                    <ArrowLeft size={22} />
                </button>

                <div>
                    <h1 className="text-2xl font-bold md:text-3xl">
                        Edit Profile
                    </h1>

                    <p className="text-sm text-on-surface-variant">
                        Update your profile information.
                    </p>
                </div>
            </div>

            {/* Card */}

            <div className="space-y-8 rounded-2xl border border-outline-variant bg-surface p-6 shadow-sm">
                {/* Avatar */}

                <div className="flex flex-col items-center gap-5 md:flex-row">
                    <div className="relative">
                        <div className="h-24 w-24 rounded-full bg-gradient-to-tr from-primary to-secondary p-1">
                            <div className="h-full w-full overflow-hidden rounded-full border-4 border-surface">
                                <Image
                                    src="/Hero.jpg"
                                    alt="Profile"
                                    width={96}
                                    height={96}
                                    className="rounded-full border-4 h-full w-full  border-surface object-cover shadow"
                                />
                            </div>

                        </div>
                        <Button
                            variant="primary"
                            className="absolute bottom-0 right-0 rounded-full p-2"
                        >
                            <Camera size={16} />
                        </Button>
                    </div>
                    <div className="mt-2 flex justify-around gap-4">

                        <Button ><Edit size={16} /></Button>
                        <Button><Trash size={16} /></Button>
                    </div>
                </div>

            </div>


            <div className="pb-16">
                <FormBuilder
                form={form}
                fields={profileFields}
                onSubmit={handleSubmit}
                submitButton={{
                    children: isLoading ? "Saving..." : "Save",
                    variant: "primary",
                    size: "lg",
                    fullWidth: true
                }}
            />

            </div>
        </section >
    );
}