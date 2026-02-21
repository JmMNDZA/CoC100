import type { Route } from "./+types/home";
import { Button } from "../components/ButtonX";
import { ValueModify } from "../components/ValueModify";
import ThemeSwitcher from "../components/ThemeSwitcher";
import "app/app.css";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "CoC 20" },
    { name: "description", content: "Welcome to CoC 20!" },
  ];
}

export default function Home() {
  return (
    <div className="flex flex-row items-center justify-around p-4 m-5">
      <h1 id="charName">Character Name</h1>
      <div className= "flex flex-row items-center justify-center gap-4">
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
