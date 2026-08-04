// app/messages/components/ChatWindow/TypingIndicator.tsx

"use client";

interface TypingIndicatorProps {
  name?: string;
}

const TypingIndicator = ({
  name = "Someone",
}: TypingIndicatorProps) => {
  return (
    <div className="flex justify-start">
      <div className="flex max-w-[85%] items-end gap-3 md:max-w-[70%]">
        {/* Avatar Placeholder */}
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-surface-container text-xs font-semibold text-on-surface-variant">
          {name.charAt(0).toUpperCase()}
        </div>

        <div className="flex flex-col gap-1">
          {/* Typing Bubble */}
          <div className="flex items-center gap-1 rounded-2xl rounded-bl-md bg-surface-container px-4 py-3 shadow-sm">
            <span
              className="h-2 w-2 animate-bounce rounded-full bg-on-surface-variant/60"
              style={{ animationDelay: "0ms" }}
            />
            <span
              className="h-2 w-2 animate-bounce rounded-full bg-on-surface-variant/60"
              style={{ animationDelay: "150ms" }}
            />
            <span
              className="h-2 w-2 animate-bounce rounded-full bg-on-surface-variant/60"
              style={{ animationDelay: "300ms" }}
            />
          </div>

          {/* Typing Text */}
          <span className="px-1 text-xs text-on-surface-variant">
            {name} is typing...
          </span>
        </div>
      </div>
    </div>
  );
};

export default TypingIndicator;