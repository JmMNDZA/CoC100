import { CharInfo } from "./CharInfo"

export function GridLayout() {
    return <div className="grid grid-flow-col grid-cols-[1fr_2fr] grid-rows-5 gap-4 w-full">
        <div className="bg-gray-200 dark:bg-gray-700 rounded-lg"><CharInfo /></div>
        <div className="bg-gray-200 dark:bg-gray-700 rounded-lg p-4">Characteristics</div>
        <div className="bg-gray-200 dark:bg-gray-700 rounded-lg p-4">Combat Info</div>
        <div className="bg-gray-200 dark:bg-gray-700 rounded-lg p-4">Weapons</div>
        <div className="bg-gray-200 dark:bg-gray-700 rounded-lg p-4">Inventory</div>
        <div className="bg-gray-200 dark:bg-gray-700 rounded-lg p-4">Investigator Skills</div>
    </div>;
}


export default GridLayout;