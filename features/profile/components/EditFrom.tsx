"use client";

import Image from "next/image";
import { ArrowLeft, Camera, Edit, Lock, Trash } from "lucide-react";
import { useForm } from "react-hook-form";
import { FormBuilder, FormFieldConfig } from "@/components/common/FormBuilder";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useRemoveProfilePictureMutation, useUpdateProfileMutation, useUpdateProfilePictureMutation } from "../api/profile.api";
import { ProfileUpdateSchema, UpdateProfileFormData } from "@/features/auth/validation";
import { toast } from "react-toastify";
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react";
import FileUpload from "@/components/ui/FileUpload";

const profileFields: FormFieldConfig[] = [
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
    const [updateProfilePicture, { isLoading: isUploading }] = useUpdateProfilePictureMutation()
    const [removeProfilePicture, { isLoading: isRemoving }] = useRemoveProfilePictureMutation();
    const [profileImage, setProfileImage] = useState<File[]>([]);
    const [preview, setPreview] = useState<string[]>([]);
    const router = useRouter()
    const form = useForm<UpdateProfileFormData>({
        resolver: zodResolver(ProfileUpdateSchema),
        defaultValues: {
            bio: "",
            website: "",
            accountType: "PUBLIC"
        },
    })

    const handleImageChange = (files: File[]) => {
        setProfileImage(files);

        setPreview(
            files.map((file) => URL.createObjectURL(file))
        );
    };
    const handleSubmit = async (data: UpdateProfileFormData) => {
        try {
            const response = await updateProfile(data).unwrap()

            if (profileImage.length > 0) {
                const res = await updateProfilePicture({
                    profilePicture: profileImage[0],
                }).unwrap();
                toast.success(res.message)
            }
            form.reset()
            toast.success(response.message)
            router.push("/profile")
        } catch (error) {
            toast.error("Something went wrong")
        }
    }
    const handleRemoveProfilePicture = async () => {
        try {
            const response = await removeProfilePicture().unwrap();

            toast.success(response.message);
            setProfileImage([]);
            setPreview([]);
            router.push("/profile")
        } catch (error) {
            toast.error("Something went wrong");
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
                        <div className="h-24 w-24 rounded-full bg-primary  p-1">
                            <div className="h-full w-full rounded-full">
                                <FileUpload
                                    value={profileImage}
                                    previewUrls={preview}
                                    onChange={handleImageChange}
                                    accept="image/*"
                                />
                            </div>

                        </div>

                    </div>
                    <div className="mt-2 flex justify-around gap-4">

                        <Button
                            type="button"
                            variant="destructive"
                            onClick={handleRemoveProfilePicture}
                            disabled={isRemoving}
                        ><Trash size={16} /></Button>
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