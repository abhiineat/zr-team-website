interface ProgramSectionProps {
    title: string;
    items: string[];
  }
  
  export default function ProgramSection({ title, items }: ProgramSectionProps) {
    return (
      <section className="bg-gray-50 p-6 rounded-xl shadow-sm mb-8 text-left">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
        <ul className="list-disc ml-6 text-gray-700 space-y-2">
          {items.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </section>
    );
  }
  