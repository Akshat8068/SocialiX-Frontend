import { Eye, EyeOff, Lock, LucideIcon } from "lucide-react";
import { FormField } from "./FormField";
import { Input } from "../ui/Input";

export type FieldType =
    | "text"
    | "email"
    | "password"
    | "number"
    | "textarea"
    | "select";

export interface FormFieldConfig {
    type: FieldType;
    name: string;
    label: string;
    placeholder?: string;
    icon?: LucideIcon;
}

interface RenderFieldProps {
    field: FormFieldConfig;
}


function PasswordField({ field, placeholder }: { field: any; placeholder?: string }) {
    const showPassword = false

    return (
        <div className="relative group">
            <Lock
                size={20}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-outline group-focus-within:text-primary transition-colors"
            />

            <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                className="w-full rounded-lg border border-outline-variant/50 bg-white/50 py-3 pl-12 pr-12 outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
            <button
                type="button"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-outline hover:text-on-surface transition-colors"
            >
                {showPassword ? (
                    <EyeOff size={20} />
                ) : (
                    <Eye size={20} />
                )}
            </button>
        </div>
    );
}

export function RenderField({ field }: RenderFieldProps) {
    switch (field.type) {
        case "text":
        case "email":
        case "number":
            return (
                <FormField
                    id={field.name}
                    label={field.label}
                >
                    <Input
                        id={field.name}
                        type={field.type}
                        icon={field.icon}
                        placeholder={field.placeholder}
                    />
                </FormField>
            );


        case "password":
            return (
                <FormField
                    id={field.name}
                    label={field.label}
                >
                    <PasswordField field={field} placeholder={field.placeholder} />
                </FormField>
            )

        default:
            return null;
    }
}