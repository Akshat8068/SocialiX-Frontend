"use client";

import * as React from "react";
import { ChevronDown, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export interface SelectOption {
  label: string;
  value: string;
}

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  icon?: LucideIcon;
  error?: string;
  options: SelectOption[];
  placeholder?: string;
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      id,
      icon: Icon,
      error,
      className,
      options,
      placeholder,
      ...props
    },
    ref
  ) => {
    return (
      <div className="space-y-1">
        <div className="group relative">
          {Icon && (
            <Icon
              size={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-outline transition-colors group-focus-within:text-primary"
            />
          )}

          <select
            id={id}
            ref={ref}
            className={cn(
              "h-12 w-full appearance-none rounded-lg border bg-white/50 py-3 pr-10 outline-none transition-all",
              Icon ? "pl-12" : "pl-4",
              error
                ? "border-red-500 focus:ring-2 focus:ring-red-500/20"
                : "border-outline-variant/50 focus:border-primary focus:ring-2 focus:ring-primary/20",
              className
            )}
            {...props}
          >
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}

            {options.map((option) => (
              <option
                key={option.value}
                value={option.value}
              >
                {option.label}
              </option>
            ))}
          </select>

          <ChevronDown
            size={18}
            className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-outline"
          />
        </div>

        {error && (
          <p className="text-sm text-red-500">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Select.displayName = "Select";

export { Select };