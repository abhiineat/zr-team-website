interface ProgramOverviewProps {
    title: string;
    description: string[];
  }
  
  export default function ProgramOverview({ title, description }: ProgramOverviewProps) {
    return (
      <section className="max-w-5xl mx-auto mb-20 px-6 md:px-8">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          {title}
        </h2>
  
        {/* Description Paragraphs */}
        <div className="space-y-5 text-gray-800 text-base md:text-lg leading-relaxed">
          {description.map((p, i) => {
            // Detect bullet points
            const isBullet = p.trim().startsWith("•");
  
            return isBullet ? (
              <p key={i} className="flex items-start text-lg">
                <span className="text-2xl font-bold text-gray-900 leading-none mr-3">•</span>
                <span>{p.replace(/^•\s*/, "")}</span>
              </p>
            ) : (
              <p key={i}>{p}</p>
            );
          })}
        </div>
      </section>
    );
  }
  