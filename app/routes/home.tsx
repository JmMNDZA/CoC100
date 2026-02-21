import type { Route } from "./+types/home";
import { Button } from "../components/ButtonX";
import { ValueModify } from "../components/ValueModify";
import { ThemeSwitcher } from "../components/ThemeSwitcher";
import { Navbar } from "../components/Navbar";
import "app/app.css";
import { GridLayout } from "~/components/GridLayout";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "CoC 100" },
    { name: "description", content: "Welcome to CoC 100!" },
  ];
}

export default function Home() {
  return (
    <div className="flex flex-col bg-base-200 items-center justify-around gap-4">
      <Navbar />
      <GridLayout />
    </div>
  );
}