"use client";

import Image from "next/image";

interface PostMediaProps {
    image: string;
    alt?: string;
}

export default function PostMedia({
    image,
    alt = "Post",
}: PostMediaProps) {
    return (
        <div className="relative aspect-square w-full overflow-hidden bg-muted">
            <Image
                src={image}
                alt={alt}
                fill
                priority
                className="object-cover"
            />
        </div>
    );
}