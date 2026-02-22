import { Button } from "./ButtonX";
import { ValueModify } from "./ValueModify";
import { ThemeSwitcher } from "./ThemeSwitcher";
import "app/app.css";

export function Navbar() {
  return (
    <div className="flex flex-col md:flex-row flex-wrap justify-evenly items-center w-full gap-5 py-8">
  <div className="flex flex-col">
    <h3>COC100 </h3>
    <h1 id="charName" className="mt-[-5px]">Character Name</h1>
  </div>
  <div className="flex flex-row items-center justify-center gap-6 flex-wrap">
    <ValueModify name="Health " placeholder="50 / 50"/>
    <ValueModify name="Magic " placeholder="50 / 50"/>
    <ValueModify name="Sanity " placeholder="50 / 50"/>
  </div>
  <div className="flex flex-row items-center justify-center gap-4 flex-wrap">
    <Button name="Notes" buttonType="notesButton"/>
    <Button name="Save" buttonType="jsonButton"/>
    <Button name="Load" buttonType="jsonButton"/>
  </div>
  <div className="flex items-center">
    <ThemeSwitcher />
  </div>
</div>
  );
}

export default Navbar;
