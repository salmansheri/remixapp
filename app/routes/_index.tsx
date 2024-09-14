import type { MetaFunction } from "@remix-run/node";
import { Categories } from "~/components/categories";
import { Featured } from "~/components/featured";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div>
      <Featured />
      <Categories />
    </div>
  );
}
