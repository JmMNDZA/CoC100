import React from "react";
import { RollInput } from "../../RollInput";
import { AgeAlert } from "./AgeAlert";

interface CharacteristicDeductionProps {
    points: number;
    text: string;
    characteristics: string[];
}

export function CharacteristicDeduction({ points, text, characteristics }: CharacteristicDeductionProps) {
    const gridCols = {
        1: "grid-cols-1",
        2: "grid-cols-2",
        3: "grid-cols-3",
        4: "grid-cols-4",
    }[characteristics.length] || "grid-cols-3";

    return (
        <div className="p-6 max-w-2xl mx-auto mt-6 border border-base-300 bg-base-100 rounded-xl shadow-sm">
            <h3 className="text-secondary font-bold text-xl mb-2 text-center uppercase tracking-wider">
                Characteristic Deduction
            </h3>
            <p className="text-center mb-8 text-base-content/70">
                {text}
            </p>

            <div className={`grid ${gridCols} gap-4 mb-8`}>
                {characteristics.map((stat) => (
                    <RollInput
                        key={stat}
                        label={stat}
                        placeholder="0"
                        maxLength={2}
                    />
                ))}
            </div>

            <AgeAlert message={`Total deduction must equal ${points}.`} />
        </div>
    );
}
