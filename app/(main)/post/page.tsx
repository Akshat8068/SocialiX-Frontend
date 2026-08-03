"use client";

import { FormBuilder, FormFieldConfig } from "@/components/common/FormBuilder";
import FileUpload from "@/components/ui/FileUpload";
import { useCreatePostMutation } from "@/features/post/api/post.api";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

interface CreatePostForm {
  caption: string;
  visibility: "PUBLIC" | "FOLLOWERS" | "FRIENDS";
}

export default function PostPage() {
  const [files, setFiles] = useState<File[]>([]);

  const [createPost, { isLoading }] = useCreatePostMutation();
const router=useRouter()
  const form = useForm<CreatePostForm>({
    defaultValues: {
      caption: "",
      visibility: "PUBLIC",
    },
  });

  const previewUrls = useMemo(() => {
    return files.map((file) => URL.createObjectURL(file));
  }, [files]);

  const fields: FormFieldConfig[] = [
    {
      id: "caption",
      label: "Caption",
      type: "textarea",
      placeholder: "Write a caption...",
    },
    {
      id: "visibility",
      label: "Visibility",
      type: "select",
      options: [
        {
          label: "Public",
          value: "PUBLIC",
        },
        {
          label: "Followers",
          value: "FOLLOWERS",
        },
        {
          label: "Friends",
          value: "FRIENDS",
        },
      ],
    },
  ];

  const onSubmit = async (values: CreatePostForm) => {
    if (!files.length) {
      toast.error("Please select at least one media file.");
      return;
    }

    try {
      const formData = new FormData();

      formData.append("caption", values.caption);
      formData.append("visibility", values.visibility);

      files.forEach((file) => {
        formData.append("media", file);
      });

      const res=await createPost(formData).unwrap();
      form.reset();
      setFiles([]);

      toast.success("Post created successfully.");
      router.push("/profile")
    } catch (error) {
      console.error(error);
    }
  }

  return (
  <div className="mx-auto w-full h-full max-w-7xl px-4 py-6 md:px-6">
    <h1 className="mb-6 text-2xl font-bold">Create Post</h1>

    <div className="grid gap-6 md:min-h-full md:grid-cols-[1.6fr_1fr]">
      {/* Left Side */}
      <div className="rounded-2xl  border border-outline-variant bg-surface p-4">
        <FileUpload
          value={files}
          previewUrls={previewUrls}
          onChange={setFiles}
          multiple
          maxFiles={2}
          accept="image/*,video/*"
        />
      </div>

      {/* Right Side */}
      <div className="rounded-2xl border border-outline-variant bg-surface p-5">
        <FormBuilder
          form={form}
          fields={fields}
          onSubmit={onSubmit}
          submitButton={{
            children: "Create Post",
            className: "w-full",
            loading: isLoading,
          }}
        />
      </div>
    </div>
  </div>
);
}