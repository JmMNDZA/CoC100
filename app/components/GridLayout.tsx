import Characteristics from "./Characteristics";
import { CharInfo } from "./CharInfo"

export function GridLayout() {
    return <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] lg:grid-rows-5 gap-4 pr-4 pl-4 w-full flex-1">
        <div className="bg-base-100 rounded-[var(--radius-box)] lg:col-start-1 lg:row-start-1"><CharInfo /></div>
        <div className="bg-base-100 rounded-[var(--radius-box)] lg:col-start-1 lg:row-start-2"><Characteristics /></div>
        <div className="bg-base-100 rounded-[var(--radius-box)] lg:col-start-2 lg:row-start-1 lg:row-span-5">Investigator Skills</div>
        <div className="bg-base-100 rounded-[var(--radius-box)] lg:col-start-1 lg:row-start-3">Combat Info</div>
        <div className="bg-base-100 rounded-[var(--radius-box)] lg:col-start-1 lg:row-start-4">Weapons</div>
        <div className="bg-base-100 rounded-[var(--radius-box)] lg:col-start-1 lg:row-start-5">Inventory</div>
    </div>;
}

export default GridLayout;