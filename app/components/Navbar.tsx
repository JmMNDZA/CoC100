import { Button } from "./ButtonX";
import { ValueModify } from "./ValueModify";
import { ThemeSwitcher } from "./ThemeSwitcher";
import "app/app.css";

export function Navbar() {
  return (
    <div className="flex flex-col md:flex-row flex-wrap justify-evenly items-center w-full pr-4 pl-4 gap-x-5 gap-y-2 py-5">
  <div className="flex flex-col items-end justify-center">
      <img className="object-scale-down h-13 w-13 rounded-full border-primary border-solid border-2" src="https://placehold.net/400x400.png"/>
      <h3>COC100</h3>
    </div>
      < h1 id="charName">Character Name</h1>
  <div className="flex flex-row items-center justify-center gap-4 pb-3 flex-wrap">
    <ValueModify name="Health " placeholder="50 / 50" modifyType="true"/>
    <ValueModify name="Magic " placeholder="50 / 50" modifyType="true"/>
    <ValueModify name="Sanity " placeholder="50 / 50" modifyType="true"/>
    <ValueModify name="MOV" placeholder="50" modifyType="false"/>
    <ValueModify name="LUCK" placeholder="50" modifyType="false"/>

  </div>
  <div className="flex flex-row items-center justify-center gap-4 flex-wrap">
    <Button name="Notes" buttonType="notesButton"/>
    <Button name="Save" buttonType="jsonButton"/>
    <Button name="Load" buttonType="jsonButton"/>
    <ThemeSwitcher />
  </div>
</div>
  );
}

export default Navbar;
