"use client";

interface PostCaptionProps {
    username: string;
    caption: string;
}

export default function PostCaption({
    username,
    caption,
}: PostCaptionProps) {
    const words = caption.split(" ");

    return (
        <div className="px-4 pb-3">
            <p className="text-sm leading-7 text-foreground">
                <span className="mr-2 font-semibold">{username}</span>

                {words.map((word, index) =>
                    word.startsWith("#") ? (
                        <span
                            key={index}
                            className="mr-1 cursor-pointer text-primary hover:underline"
                        >
                            {word}
                        </span>
                    ) : word.startsWith("@") ? (
                        <span
                            key={index}
                            className="mr-1 cursor-pointer text-primary hover:underline"
                        >
                            {word}
                        </span>
                    ) : (
                        <span key={index} className="mr-1">
                            {word}
                        </span>
                    )
                )}
            </p>
        </div>
    );
}