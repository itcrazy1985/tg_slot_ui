import type { Route } from "./+types/home";
import { MainLayout } from "../components/MainLayout";
import { HomeLobby } from "../components/HomeLobby";

// Next: Create a shared layout with Sidebar and Topbar, then wrap this page with that layout

export function meta({}: Route.MetaArgs) {
  return [
    { title: "TG Lottery" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <MainLayout>
      <HomeLobby />
    </MainLayout>
  );
}