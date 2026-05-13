import React from "react";
import { RollInput } from "../../RollInput";

interface ImprovementRollProps {
    label?: string;
}

export function ImprovementRoll({ label = "IMPROVEMENT ROLL" }: ImprovementRollProps) {
    return (
        <div className="flex flex-col items-center py-4">
            <RollInput label={label} maxLength={3} />
        </div>
    );
}
