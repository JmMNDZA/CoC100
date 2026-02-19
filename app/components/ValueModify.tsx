import "app/app.css";

export function ValueModify({ name, placeholder }: { name: string; modifyType?: string; optional?: string; placeholder?: string }) {
            return <div className="flex flex-row items-center justify-center gap-4">
                <label className="text-sm text-gray-700">{name}</label>
                <input type="text" className="input w-19 placeholder:text-gray-900" placeholder={placeholder || "Type here"} />
            </div>        
}
export default ValueModify;