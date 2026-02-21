import type { Route } from "./+types/home";
import { Button } from "../components/ButtonX";
import { ValueModify } from "../components/ValueModify";
import { ThemeSwitcher } from "../components/ThemeSwitcher";
import { Navbar } from "../components/Navbar";
import "app/app.css";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "CoC 20" },
    { name: "description", content: "Welcome to CoC 20!" },
  ];
}

export default function Home() {
  return (
    <div className="flex flex-row items-center justify-around m-5">
      <Navbar />
    </div>
  );
}