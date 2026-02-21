export function SelectModify({ name, options, placeholder }: { name: string; options: string[]; placeholder?: string; optional?: boolean }) {
    return (
        <fieldset className="fieldset w-full">
            <legend className="fieldset-legend text-base">{name}</legend>
            <select defaultValue={placeholder || "Select an option"} className="select w-full">
                <option disabled>{placeholder || "Select an option"}</option>
                {options.map((opt) => (
                    <option key={opt}>{opt}</option>
                ))}
            </select>
        </fieldset>
    );
}

export default {SelectModify}; //