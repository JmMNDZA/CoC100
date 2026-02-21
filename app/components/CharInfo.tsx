import { ValueModify } from "./ValueModify"

export function CharInfo() {
    return (
        <div className="grid grid-flow-column grid-rows-5 p-2 gap-3">
            <ValueModify name = "Occupation " placeholder="Carpenter"/>
            <ValueModify name = "Residence" />
            <ValueModify name = "Birthplace" />
        </div>
    );

}

export default CharInfo;