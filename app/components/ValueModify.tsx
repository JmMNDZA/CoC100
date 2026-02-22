export function ValueModify({ name, placeholder }: { name: string; modifyType?: string; optional?: string; placeholder?: string }) {
            return <div className="flex flex-row items-center justify-center gap-4">
                <label className="text-base light:text-gray-700 dark:white">{name}</label>
                <input type="text"   className="input w-19 placeholder:!text-black dark:placeholder:!text-white" placeholder={placeholder || "Type here"} />
            </div>        
}
export default ValueModify; 