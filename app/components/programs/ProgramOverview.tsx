interface ProgramOverviewProps {
    title: string;
    description: string[];
  }
  
  export default function ProgramOverview({ title, description }: ProgramOverviewProps) {
    return (
      <section className="max-w-5xl mx-auto mb-16 px-6">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 border-l-4 border-green-600 pl-4">
          {title}
        </h2>
  
        {/* Description Paragraphs */}
        <div className="space-y-5 text-gray-700 text-base md:text-lg leading-relaxed">
          {description.map((p, i) => (
            <p key={i} className="transition-all duration-500 ease-in-out hover:text-gray-900">
              {p}
            </p>
          ))}
        </div>
      </section>
    );
  }
  