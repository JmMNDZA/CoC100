export function SelectModify({ name, options, placeholder }: { name: string; options: string[]; placeholder?: string; optional?: boolean }) {
    return (
        <fieldset className="fieldset">
            <legend className="fieldset-legend">{name}</legend>
            <select defaultValue={placeholder || "Select an option"} className="select">
                <option disabled>{placeholder || "Select an option"}</option>
                {options.map((opt) => (
                    <option key={opt}>{opt}</option>
                ))}
            </select>
        </fieldset>
    );
}

export default SelectModify;