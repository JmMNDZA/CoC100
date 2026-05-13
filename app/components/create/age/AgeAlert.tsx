import React from "react";

interface AgeAlertProps {
    message: string;
}

export function AgeAlert({ message }: AgeAlertProps) {
    return (
        <div className="alert alert-error justify-center font-bold">
            <span>{message}</span>
        </div>
    );
}
