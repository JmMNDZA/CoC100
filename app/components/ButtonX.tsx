export function Button({ name, buttonType }: { name: string; buttonType?: string }) {
        if (buttonType === "jsonButton") {
            return <button className="btn btn-secondary w-20 rounded-full">{name}</button>;
        }
        else if (buttonType === "notesButton") {
            return <button className="btn btn-primary w-20 rounded-full">{name}</button>;
        }
}
export default Button;