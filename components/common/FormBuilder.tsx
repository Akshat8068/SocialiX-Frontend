"use client";

import { Eye, EyeOff, Lock, LucideIcon } from "lucide-react";
import { FormField } from "./FormField";
import { Input } from "../ui/Input";
import {  Controller,type Control, UseFormReturn } from "react-hook-form"
import { Button, ButtonProps } from "../ui/button";
import OTPInput from "../ui/otpInput";
export type FieldType =
    | "text"
    | "email"
    | "password"
    | "number"
    | "textarea"
    | "select"
    | "otp";

export interface FormOption {
    label: string;
    value: string;
}
interface RenderFieldProps {
    field: FormFieldConfig;
    control: Control<any>;
}
interface FormBuilderProps {
    fields: FormFieldConfig[];
    form: UseFormReturn<any>
    defaultValues?: any;
    submitButton?: ButtonProps;
    onSubmit: (values: any) => void;
}
export interface FormFieldConfig {
    id: string;
    type: FieldType;
    icon?: LucideIcon;
    label?: string;
    length?: number
    placeholder?: string;
    helperText?: string;
    required?: boolean;
    disabled?: boolean;

    options?: FormOption[];

    className?: string;
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
           {...field}
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

export function RenderField({
    field,
    control,
}: RenderFieldProps) {

    return (
        <Controller
            name={field.id}
            control={control}
            render={({ field: controller, fieldState }) => (
                <FormField
                    id={field.id}
                    label={field.label}
                    required={field.required}
                    error={fieldState.error?.message}
                    helperText={field.helperText}
                >
                    {renderInput(field, controller)}
                </FormField>
            )}
        />
    );
}

function renderInput(
    field: FormFieldConfig,
    controller: any
) {
    switch (field.type) {
        case "email":
        case "text":
        case "number":
            return (
                <Input
                    {...controller}
                    id={field.id}
                    type={field.type}
                    placeholder={field.placeholder}
                />
            );
        case "password":
            return (
                <PasswordField
                   field={controller}
                    placeholder={field.placeholder}
                />
            );
        case "otp":
      return (
        <OTPInput
          value={controller.value}
          onChange={controller.onChange}
          length={field.length ?? 4}
          disabled={field.disabled}
        />
      )
        default:
            return null;
    }
}

export function FormBuilder({
    fields,
    form,
    submitButton,
    onSubmit,
}: FormBuilderProps) {
    
 
    return (
        <form className="w-full space-y-md" onSubmit={form.handleSubmit(onSubmit)}>
            <div className="space-y-5">
                {fields.map((field) => (
                    <RenderField
                        key={field.id}
                        field={field}
                        control={form.control}
                    />
                ))}
            </div>

            <Button
                type="submit"
                {...submitButton}
            >
                {submitButton?.children ?? "Submit"}
            </Button>
        </form>
    );
}