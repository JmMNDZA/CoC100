import type { Route } from "./+types/home";
import { Button } from "../components/ButtonX";
import "app/app.css";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "CoC 20" },
    { name: "description", content: "Welcome to CoC 20!" },
  ];
}

export default function Home() {
  return (
    <div className="flex flex-row items-center justify-center gap-4 p-4 m-3">
      <h1 id="charName">Character Name</h1>
      <Button name="Notes" buttonType="notesButton"/>
      <Button name="Save Character" buttonType="jsonButton"/>
      <Button name="Load Character" buttonType="jsonButton"/>
    </div>
    
  );
}
