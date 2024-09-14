import { useNavigate } from "@remix-run/react";
const categories = [
  {
    id: 1,
    title: "Style",
    src: "",
    href: "",
  },
  {
    id: 2,
    title: "Style",
    src: "",
    href: "",
  },
  {
    id: 3,
    title: "Style",
    src: "",
    href: "",
  },
  {
    id: 4,
    title: "Style",
    src: "",
    href: "",
  },
  {
    id: 5,
    title: "Style",
    src: "",
    href: "",
  },
  {
    id: 6,
    title: "Style",
    src: "",
    href: "",
  },
];
export const Categories = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full space-y-6">
      <h1 className="text-2xl font-bold">Popular Categoies</h1>
      <div className="flex items-center justify-between">
        {categories.map((category) => (
          <div onClick={() => navigate(category.href)} key={category.id}>
            {category.title}
          </div>
        ))}
      </div>
    </div>
  );
};
