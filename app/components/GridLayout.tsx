import { Characteristics } from "./Characteristics";
import { CharInfo } from "./CharInfo"

export function GridLayout() {
    return <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-4 pr-4 pl-4 w-full flex-1 mb-5">
        <div className="bg-base-100 rounded-[var(--radius-box)] lg:col-start-1 lg:row-start-1 self-start shadow-lg"><CharInfo /></div>
        <div className="bg-base-100 rounded-[var(--radius-box)] lg:col-start-1 lg:row-start-2 self-start shadow-lg"><Characteristics /></div>
        <div className="bg-base-100 rounded-[var(--radius-box)] lg:col-start-2 lg:row-start-1 lg:row-span-5 shadow-lg">Investigator Skills</div>
        <div className="bg-base-100 rounded-[var(--radius-box)] lg:col-start-1 lg:row-start-3 shadow-lg">Combat Info</div>
        <div className="bg-base-100 rounded-[var(--radius-box)] lg:col-start-1 lg:row-start-4 shadow-lg">Weapons</div>
        <div className="bg-base-100 rounded-[var(--radius-box)] lg:col-start-1 lg:row-start-5 shadow-lg">Inventory</div>
    </div>;
}

export default GridLayout;