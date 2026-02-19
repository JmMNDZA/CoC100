

export function Button({ name, buttonType }: { name: string; buttonType?: string }) {
        if (buttonType === "jsonButton") {
            return <button className="btn btn-gradient btn-success rounded-full text-black">{name}</button>;
        }
        else if (buttonType === "notesButton") {
            return <button className="btn btn-glass rounded-full text-black">{name}</button>;
        }
}
export default Button;