interface ProgramSectionProps {
    title: string;
    items: string[];
  }
  
  export default function ProgramSection({ title, items }: ProgramSectionProps) {
    return (
      <section className="mb-10">
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <ul className="list-disc ml-6 text-gray-700 space-y-2">
          {items.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </section>
    );
  }
  