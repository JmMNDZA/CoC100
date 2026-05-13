import React from "react";

interface RollInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    variant?: "card" | "inline";
    /** When set, the label becomes a button that opens supplemental UI (e.g. a drawer). */
    onLabelClick?: () => void;
}

export function RollInput({ label, variant = "card", className, onLabelClick, ...props }: RollInputProps) {
    const inputElement = (
        <input
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            className={`input input-bordered w-24 text-xl font-bold h-12 focus:input-primary text-center ${variant === "inline" ? (className || "") : ""}`}
            {...props}
        />
    );

    if (variant === "inline") {
        return inputElement;
    }

    return (
        <div className={`form-control w-full flex flex-col items-center p-4 bg-base-200 rounded-xl max-w-xs ${className || ""}`}>
            {label && (
                <div className="label mb-2 justify-center p-0">
                    {onLabelClick ? (
                        <button
                            type="button"
                            className="label-text cursor-pointer font-bold text-sm underline decoration-primary/40 underline-offset-2 transition hover:text-primary"
                            onClick={onLabelClick}
                        >
                            {label.toUpperCase()}
                        </button>
                    ) : (
                        <span className="label-text font-bold text-sm">{label.toUpperCase()}</span>
                    )}
                </div>
            )}
            {inputElement}
        </div>
    );
}
