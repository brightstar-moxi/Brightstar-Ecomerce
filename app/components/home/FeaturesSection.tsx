import {
  Truck,
  ShieldCheck,
  Headphones,
  BadgeCheck,
} from "lucide-react";

const features = [
  {
    title: "Free Shipping",
    description: "On all orders over $50",
    icon: Truck,
  },
  {
    title: "Secure Payment",
    description: "100% secure payment",
    icon: ShieldCheck,
  },
  {
    title: "24/7 Support",
    description: "Dedicated support",
    icon: Headphones,
  },
  {
    title: "Quality Guarantee",
    description: "Premium quality products",
    icon: BadgeCheck,
  },
];

export default function FeaturesSection() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-600">
                  <Icon size={28} />
                </div>

                <h3 className="mt-6 text-xl font-semibold text-slate-900">
                  {feature.title}
                </h3>

                <p className="mt-3 text-slate-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}