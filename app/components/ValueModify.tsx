export function ValueModify({ name, placeholder, label, modifyType }: { name: string; label?: string; placeholder?: string, modifyType: string }) {
    if (modifyType==="true") {
        return (
            <fieldset className="flex items-center justify-center border-0 p-0 m-0 min-w-0">
                <legend className="text-sm font-normal text-center p-0 m-0">{name}</legend>
                <input type="text" className="input w-20 text-base -mt-0 placeholder-black placeholder:font-bold dark:placeholder-white text-center" placeholder={placeholder}/>
                <p className="label">{label}</p>
            </fieldset>
    );
    }
    else if (modifyType==="false") {
        return (
            <fieldset className="flex items-center justify-center border-0 p-0 m-0 min-w-0">
                <legend className="text-sm font-normal text-center p-0 m-0">{name}</legend>
                <input type="text" className="input w-14 text-base -mt-0 placeholder-black placeholder:font-bold dark:placeholder-white text-center" placeholder={placeholder}/>
                <p className="label">{label}</p>
            </fieldset>
    );
    }

}
export default ValueModify;