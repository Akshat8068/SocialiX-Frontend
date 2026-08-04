"use client";

import { Button } from "@/components/ui/button";
import FileUpload from "@/components/ui/FileUpload";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textArea";
import { useCreatePostMutation } from "@/features/post/api/post.api";
import { Hash, Send, Camera } from "lucide-react";
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
  const [hideLikeCount, setHideLikeCount] = useState(false);
  const [disableComments, setDisableComments] = useState(false);

  const [createPost, { isLoading }] = useCreatePostMutation();
  const router = useRouter();

  const { register, handleSubmit, reset, watch, setValue } =
    useForm<CreatePostForm>({
      defaultValues: {
        caption: "",
        visibility: "PUBLIC",
      },
    });

  const caption = watch("caption");

  const previewUrls = useMemo(() => {
    return files.map((file) => URL.createObjectURL(file));
  }, [files]);

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

      await createPost(formData).unwrap();
      reset();
      setFiles([]);
      toast.success("Post created successfully.");
      router.push("/profile");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="mx-auto w-full h-full max-w-7xl px-4 py-6 md:px-6">
      <h1 className="mb-6 text-2xl font-bold">Create Post</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Desktop: two-column layout */}
        <div className="grid gap-6 lg:grid-cols-[1.6fr_1fr]">

          {/* ── Left: Media Upload ── */}
          <div className="flex flex-col items-center justify-center rounded-2xl border border-outline-variant bg-surface p-6 min-h-64">
            {previewUrls.length === 0 ? (
              <div className="flex flex-col items-center gap-3 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Camera size={22}/>
                </div>
                <p className="text-sm font-medium text-on-surface">
                  Upload your visuals
                </p>
                <p className="text-xs text-on-surface-variant">
                  Drag and drop or tap to upload media
                </p>
              </div>
            ) : null}

            <div className={previewUrls.length > 0 ? "w-full" : "mt-4"}>
              <FileUpload
                value={files}
                previewUrls={previewUrls}
                onChange={setFiles}
                multiple
                maxFiles={2}
                accept="image/*,video/*"
              />
            </div>
          </div>

          {/* ── Right: Form Panel ── */}
          <div className="rounded-2xl border border-outline-variant bg-surface p-5 flex flex-col gap-5">

            {/* Caption */}
            <div>
              <Textarea
                placeholder="Write a caption..."
                maxLength={3000}
                rows={4}
                {...register("caption")}
              />
              <div className="mt-1 flex justify-end text-xs text-on-surface-variant">
                {caption.length} / 3000
              </div>
            </div>

            {/* Add Hashtags — UI only */}
            <button
              type="button"
              className="flex items-center justify-between rounded-lg border border-outline-variant/50 bg-surface px-4 py-3 text-sm text-on-surface hover:bg-surface-container transition-colors"
            >
              <span className="flex items-center gap-2 text-primary font-medium">
                <Hash size={16} />
                Add Hashtags
              </span>
              <span className="text-xs text-on-surface-variant">
                0 / 3000
              </span>
            </button>

            {/* Divider */}
            <div className="h-px bg-outline-variant/30" />


            {/* Audience / Visibility */}
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-wider text-on-surface-variant">
                Audience
              </p>
              <Select
                options={[
                  { label: "Everyone", value: "PUBLIC" },
                  { label: "Followers", value: "FOLLOWERS" },
                  { label: "Friends", value: "FRIENDS" },
                ]}
                defaultValue="PUBLIC"
                {...register("visibility")}
                onChange={(e) =>
                  setValue(
                    "visibility",
                    e.target.value as CreatePostForm["visibility"]
                  )
                }
              />
            </div>

            {/* Divider */}
            <div className="h-px bg-outline-variant/30" />


            {/* Submit */}
            <Button
              type="submit"
              variant="primary"
              fullWidth
              isLoading={isLoading}
              rightIcon={<Send size={16} />}
            >
              Share Post
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
