import { CharInfo } from "./CharInfo"

export function GridLayout() {
    return <div className="grid grid-flow-col grid-cols-[1fr_2fr] grid-rows-5 pr-10 pl-10 gap-4 mr w-full">
        <div className="bg-base-100 rounded-[var(--radius-box)]"><CharInfo /></div>
        <div className="bg-base-100 rounded-[var(--radius-box)]">Characteristics</div>
        <div className="bg-base-100 rounded-[var(--radius-box)]">Combat Info</div>
        <div className="bg-base-100 rounded-[var(--radius-box)]">Weapons</div>
        <div className="bg-base-100 rounded-[var(--radius-box)]">Inventory</div>
        <div className="bg-base-100 rounded-[var(--radius-box)]">Investigator Skills</div>
    </div>;
}

export default GridLayout;