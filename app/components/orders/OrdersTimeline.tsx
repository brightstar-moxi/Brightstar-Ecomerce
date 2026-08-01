export default function OrderTimeline({
  status,
}: {
  status: string;
}) {

    if (status === "Payment Rejected") {
  return (
    <div className="mt-6 rounded-xl bg-red-50 p-4 text-red-600">
      Payment Rejected
    </div>
  );
}
  const steps = [
    "Pending Payment Approval",
    "Processing",
    "Shipped",
    "Delivered",
  ];

  const currentStep =
    steps.indexOf(status);

  return (
    <div className="mt-6">

      <div className="flex items-center justify-between">

        {steps.map((step, index) => (
          <div
            key={step}
            className="flex flex-1 items-center"
          >
            <div className="flex flex-col items-center">

              <div
                className={`h-10 w-10 rounded-full flex items-center justify-center text-sm font-bold
                ${
                  index <= currentStep
                    ? "bg-indigo-600 text-white"
                    : "bg-slate-200 text-slate-500"
                }`}
              >
                {index + 1}
              </div>

              <p className="mt-2 text-center text-xs">
                {step}
              </p>
            </div>

            {index <
              steps.length - 1 && (
              <div
                className={`h-1 flex-1 mx-2
                ${
                  index < currentStep
                    ? "bg-indigo-600"
                    : "bg-slate-200"
                }`}
              />
            )}
          </div>
        ))}
      </div>

    </div>
  );
}