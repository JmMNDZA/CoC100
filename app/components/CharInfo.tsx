import { SelectModify1, SelectModify2 } from "./SelectModify"

export function CharInfo() {
    return (
    <div className="flex flex-col justify-center p-2 gap-1">
        <div className="flex aligns-center justify-center text-center p-2">
        <h2>INFO</h2>
        </div>
        <div className="grid grid-cols-[2fr_1fr] grid-rows-3 p-2 gap-0.8">
            <SelectModify1
            name="Occupation"
            options = {["Carpenter", "Cornstar"]}
            placeholder ="Pick an occupation"
            />
           <SelectModify2
            name="Gender"
            options = {["Male", "Female","Non-Binary"]}
            placeholder ="Pick your gender"
            />
            <SelectModify1
            name="Residence"
            options = {["USA", "Canada"]}
            placeholder ="Pick your residence"
            />
            <SelectModify2
            name="Age"
            options = {["Minor", "Major"]}
            placeholder ="Pick an age"
            />
            <SelectModify1
            name="Birthplace"
            options = {["Philippines", "Russia"]}
            placeholder ="Pick your birthplace"
            />


        </div>
    </div>
    );

}

export default CharInfo;