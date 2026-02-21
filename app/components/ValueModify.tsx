import { useState } from "react";

export function ValueModify({ name, placeholder }: { name: string; modifyType?: string; optional?: string; placeholder?: string }) {
        return (
        <div className="flex flex-row items-center justify-center gap-4">
            <label className="text-sm light:text-gray-700 dark:white">{name}</label>
            <div
                contentEditable
                suppressContentEditableWarning
                className="input min-w-[80px] outline-none whitespace-nowrap"
                data-placeholder={placeholder || "Type here"}
                onInput={(e) => e.currentTarget.textContent}
            />
        </div>
    );
}
export default ValueModify; 