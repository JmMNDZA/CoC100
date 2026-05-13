import { useId } from "react";

export type ChoiceDropdownProps = {
  label: string;
  options: readonly string[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
};

export function ChoiceDropdown({
  label,
  options,
  value,
  onChange,
  placeholder = "Choose an option…",
  className = "",
}: ChoiceDropdownProps) {
  const id = useId();

  return (
    <div className={`form-control w-full ${className}`.trim()}>
      <label className="label" htmlFor={id}>
        <span className="label-text font-semibold text-lg">{label}</span>
      </label>
      <select
        id={id}
        className="select select-bordered select-lg w-full focus:select-primary"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="">{placeholder}</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}
