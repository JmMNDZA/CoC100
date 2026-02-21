import { SelectModify } from "./SelectModify"

export function CharInfo() {
    return (
        <div className="grid grid-flow-column grid-col-1 grid-rows-3 p-1 gap-1">
            <SelectModify
            name="Occupation"
            options = {["Carpenter", "Cornstar"]}
            placeholder ="Pick an occupation"
            />
            <SelectModify
            name="Residence"
            options = {["USA", "Canada"]}
            placeholder ="Pick your residence"
            />
            <SelectModify
            name="Birthplace"
            options = {["Philippines", "Russia"]}
            placeholder ="Pick your birthplace"
            />
            <SelectModify
            name="Age"
            options = {["Minor", "Major"]}
            placeholder ="Pick an age"
            />
           <SelectModify
            name="Gender"
            options = {["Male", "Female","Non-Binary"]}
            placeholder ="Pick your gender"
            />
        </div>
    );

}

export default CharInfo;