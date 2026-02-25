import { FullHalfFifth } from "./FullHalfFifth"

export function Characteristics() {
    return (
            <div className="flex flex-col justify-center p-2 pb-5">
                <div className="flex justify-center text-center">
                    <h2 className="!m-0">CHARACTERISTICS</h2>
               </div>
                <div className="grid grid-cols-3 grid-rows-2 gap-x-3 pt-3 gap-y-2">
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
                    <div className="flex flex-col justify-center items-center">
                        <h3> CON </h3>
                        <FullHalfFifth />
                    </div>            
                    <div className="flex flex-col justify-center items-center">
                        <h3> APP </h3>
                        <FullHalfFifth />
                    </div>                  
                    <div className="flex flex-col justify-center items-center">
                        <h3> EDU </h3>
                        <FullHalfFifth />
                    </div>                              
                    <div className="flex flex-col justify-center items-center">
                        <h3> SIZ </h3>
                        <FullHalfFifth />
                    </div>                  
                    <div className="flex flex-col justify-center items-center">
                        <h3> INT </h3>
                        <FullHalfFifth />
                    </div>             
                </div>
            </div>
    );
}
export default Characteristics;