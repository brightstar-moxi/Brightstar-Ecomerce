import {
  Smartphone,
  Shirt,
  Laptop,
  Headphones,
  House,
  Gamepad2,
} from "lucide-react";

const categories = [
  {
    title: "Phones",
    icon: Smartphone,
  },
  {
    title: "Fashion",
    icon: Shirt,
  },
  {
    title: "Computers",
    icon: Laptop,
  },
  {
    title: "Audio",
    icon: Headphones,
  },
  {
    title: "Home",
    icon: House,
  },
  {
    title: "Gaming",
    icon: Gamepad2,
  },
];
export default function Categories() {
  return (
    <div className="mb-8 rounded-3xl bg-white p-6 shadow-sm">

      <h2 className="mb-5 text-xl font-bold">
        Categories
      </h2>

      <div className="grid grid-cols-3 gap-4 md:grid-cols-6">

        {categories.map((category) => {
          const Icon = category.icon;

          return (
            <div
              key={category.title}
              className="flex cursor-pointer flex-col items-center rounded-2xl bg-slate-50 p-4 transition hover:bg-orange-50"
            >
              <Icon className="h-8 w-8 text-orange-500" />

              <p className="mt-2 text-sm font-medium">
                {category.title}
              </p>
            </div>
          );
        })}

      </div>

    </div>
  );
}