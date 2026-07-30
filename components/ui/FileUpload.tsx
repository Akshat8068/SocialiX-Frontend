"use client";

import { ChangeEvent, useRef } from "react";
import Image from "next/image";
import { Camera, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FileUploadProps {
  value?: File[];
  previewUrls?: string[];
  onChange: (files: File[]) => void;

  accept?: string;
  multiple?: boolean;
  maxFiles?: number;
  disabled?: boolean;
}

export default function FileUpload({
  value = [],
  previewUrls = [],
  onChange,
  accept = "image/*",
  multiple = false,
  maxFiles = 1,
  disabled = false,
}: FileUploadProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSelect = (e: ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files ?? []);

    if (!files.length) return;

    const selected = multiple ? files.slice(0, maxFiles) : [files[0]];

    onChange(selected);

    e.target.value = "";
  };

  const handleRemove = (index: number) => {
    const updated = value.filter((_, i) => i !== index);
    onChange(updated);
  };

  return (
    <div className="space-y-4">
      <input
        ref={inputRef}
        hidden
        type="file"
        accept={accept}
        multiple={multiple}
        disabled={disabled}
        onChange={handleSelect}
      />

      <Button
        type="button"
        variant="outlined"
        onClick={() => inputRef.current?.click()}
      >
        <Camera size={18} />
        {multiple ? "Select Media" : "Select Image"}
      </Button>

      {previewUrls.length > 0 && (
        <div
          className={
            multiple
              ? "grid grid-cols-3 gap-3"
              : "flex justify-center"
          }
        >
          {previewUrls.map((url, index) => (
            <div key={index} className="relative">
              <Image
                src={url}
                alt="Preview"
                width={140}
                height={140}
                className="h-32 w-32 rounded-lg object-cover"
              />

              <Button
                type="button"
                size="sm"
                variant="destructive"
                className="absolute right-2 top-2"
                onClick={() => handleRemove(index)}
              >
                <Trash2 size={14} />
              </Button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}