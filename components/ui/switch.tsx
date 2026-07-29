import { cn } from "@/lib/utils";

interface SwitchProps {
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
  disabled?: boolean;
}

export function Switch({
  checked,
  onCheckedChange,
  disabled,
}: SwitchProps) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={() => onCheckedChange(!checked)}
      className={cn(
        "relative h-6 w-11 rounded-full transition-colors",
        checked ? "bg-primary" : "bg-outline-variant",
        disabled && "opacity-50 cursor-not-allowed"
      )}
    >
      <span
        className={cn(
          "absolute top-0.5 h-5 w-5 rounded-full bg-white transition-all",
          checked ? "left-5.5" : "left-0.5"
        )}
      />
    </button>
  );
}