export default function PricingTable() {
    return (
      <section className="mb-10">
        <h3 className="text-xl font-semibold mb-4">
          Transparent pricing for authentic Brazilian Jiu-Jitsu training
        </h3>
  
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { name: "1 Class / Week", price: "$90 / month" },
            { name: "2 Classes / Week", price: "$120 / month" },
            { name: "Unlimited Classes", price: "$150 / month" },
          ].map((p, i) => (
            <div
              key={i}
              className="border border-gray-200 rounded-lg p-4 bg-white shadow-sm"
            >
              <h4 className="font-medium">{p.name}</h4>
              <p className="text-gray-600">{p.price}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  