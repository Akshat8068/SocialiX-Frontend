"use client";

import Image from "next/image";
import { useForm } from "react-hook-form";
import { FormBuilder, FormFieldConfig } from "@/components/common/FormBuilder";

interface AddCommentProps {
    profilePicture: string;
    onSubmit: (content: string) => void;
}

interface CommentForm {
    content: string;
}

export default function AddComment({
    profilePicture,
    onSubmit,
}: AddCommentProps) {
    const form = useForm<CommentForm>({
        defaultValues: {
            content: "",
        },
    });

    const fields: FormFieldConfig[] = [
        {
            id: "content",
            type: "text",
            placeholder: "Add a comment...",
        },
    ];

    const handleSubmit = (values: CommentForm) => {
        if (!values.content.trim()) return;

        onSubmit(values.content);
        form.reset();
    };

    return (
        <div className="flex items-center gap-3 border-t px-4 py-3">
            <Image
                src={profilePicture || "/Hero.jpg"}
                alt="Profile"
                width={36}
                height={36}
                className="rounded-full object-cover"
            />

            <div className="flex-1">
                <FormBuilder
                    form={form}
                    fields={fields}
                    onSubmit={handleSubmit}
                    submitButton={{
                        children: "Post",
                        className: "mt-2",
                    }}
                />
            </div>
        </div>
    );
}