import { Button } from "./ButtonX";
import { ValueModify } from "./ValueModify";
import { ThemeSwitcher } from "./ThemeSwitcher";

export function Navbar() {
  return (
    <div className="flex flex-row items-center justify-evenly m-4 gap-10">
      <h1 id="charName">Character Name</h1>
      <div className= "flex flex-row items-center justify-center gap-10">
      <ValueModify name="Health " placeholder="50 / 50"/>
      <ValueModify name="Magic " placeholder="50 / 50"/>
      <ValueModify name="Sanity " placeholder="50 / 50"/>
      </div>
      <div className= "flex flex-row items-center justify-center gap-4">
      <Button name="Notes" buttonType="notesButton"/>
      <Button name="Save Character" buttonType="jsonButton"/>
      <Button name="Load Character" buttonType="jsonButton"/>
      </div>
      <ThemeSwitcher />
    </div>
  );
}

export default Navbar;
