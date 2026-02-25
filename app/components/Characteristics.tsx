import { FullHalfFifth } from "./FullHalfFifth"

export function Characteristics() {
    return (
            <div className="flex flex-col justify-center p-2">
                <div className="flex aligns-center justify-center text-center">
                <h2>INFORMATION</h2>
                </div>
                <div className="grid grid-cols-2 grid-rows-4 pr-5 pl-5 pb-3 gap-x-3 gap-y-0.8">
                    <div className="flex flex-col justify-center items-center">
                        <h3> STR </h3>
                        <FullHalfFifth />
                    </div>            
                    <div className="flex flex-col justify-center items-center">
                        <h3> DEX </h3>
                        <FullHalfFifth />
                    </div>                  
                    <div className="flex flex-col justify-center items-center">
                        <h3> POW </h3>
                        <FullHalfFifth />
                    </div>                              
                </div>
            </div>
    );
}
export default Characteristics;