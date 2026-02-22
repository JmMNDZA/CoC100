import type { Route } from "./+types/home";
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
    <div className="bg-base-200 min-h-full w-full m-0 p-0">
      <Navbar />
      <GridLayout />
    </div>
  );
}