"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface OtpInputProps {
    length?: number;
    label?: string;
    value?: string;
    onChange?: (value: string) => void;
    className?: string;
}

export function OtpInput({
    length = 6,
    label = "Verification Code",
    value = "",
    onChange,
    className,
}: OtpInputProps) {
    const inputRefs = React.useRef<(HTMLInputElement | null)[]>([]);

    const values = value.padEnd(length).split("").slice(0, length);

    const handleChange = (
        index: number,
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        const digit = e.target.value.replace(/\D/g, "").slice(-1);

        const newValues = [...values];
        newValues[index] = digit;

        onChange?.(newValues.join("").trim());

        if (digit && index < length - 1) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    const handleKeyDown = (
        index: number,
        e: React.KeyboardEvent<HTMLInputElement>
    ) => {
        if (e.key === "Backspace" && !values[index] && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    return (
        <div className={cn("space-y-2", className)}>
            {label && (
                <label className="ml-1 text-sm text-on-surface-variant">
                    {label}
                </label>
            )}

            <div
                className="grid gap-2"
                style={{
                    gridTemplateColumns: `repeat(${length}, minmax(0,1fr))`,
                }}
            >
                {Array.from({ length }).map((_, index) => (
                    <input
                        key={index}
                        ref={(el) => {
                            inputRefs.current[index] = el;
                        }}
                        type="text"
                        inputMode="numeric"
                        autoComplete="one-time-code"
                        maxLength={1}
                        value={values[index] || ""}
                        onChange={(e) => handleChange(index, e)}
                        onKeyDown={(e) => handleKeyDown(index, e)}
                        className="h-14 rounded-lg border border-outline-variant/50 bg-white/50 text-center text-xl font-semibold outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                    />
                ))}
            </div>
        </div>
    );
}