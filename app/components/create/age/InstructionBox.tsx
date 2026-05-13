import React from "react";

interface InstructionBoxProps {
    title?: string;
    text: string;
}

export function InstructionBox({ title = "Characteristic Deduction", text }: InstructionBoxProps) {
    return (
        <div className="flex items-center p-6 max-w-2xl mx-auto mt-6 border border-base-300 bg-base-100 rounded-xl shadow-sm">
            <div className="flex-1">
                <h3 className="text-secondary font-bold text-xl mb-2 text-center uppercase tracking-wider">
                    {title}
                </h3>
                <p className="text-center text-base-content/70">
                    {text}
                </p>
            </div>
        </div>
    );
}
