export function Button({ name, buttonType }: { name: string; buttonType?: string }) {
        if (buttonType === "jsonButton") {
            return <button className="btn btn-outline btn-neutral rounded-full">{name}</button>;
        }
        else if (buttonType === "notesButton") {
            return <button className="btn btn-primary btn-soft w-32 rounded-full">{name}</button>;
        }
}
export default Button;