"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function ProfessionalExperience() {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    if (isExpanded) {
      // Find the section element by its ID
      const element = document.getElementById("experience");
      if (element) {
        // Scroll to the element smoothly
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="space-y-4">
      <div className="relative">
        <div 
          className={cn(
            "prose prose-invert max-w-none font-body text-foreground leading-relaxed text-lg transition-all duration-500 overflow-hidden",
            !isExpanded && "max-h-[220px]"
          )}
        >
          <p className="font-medium mb-4">
            I'm a Python developer focused on backend systems, APIs, automation, and open-source software. Through freelance development work and open-source contributions, I've built and maintained applications using modern web technologies, with an emphasis on software architecture, reliability, maintainability, and practical problem-solving.
          </p>
          
          <div className="space-y-4 text-foreground">
            <p>
              I have worked with clients and collaborators across multiple countries, building strong working relationships through clear communication, stakeholder coordination, and professional correspondence. Regular interaction with people from diverse backgrounds helped me develop the ability to understand requirements, manage expectations, resolve issues constructively, and communicate effectively across cultures, time zones, and technical backgrounds. In addition, I have experience managing business documentation, certifications, agreements, and other organizational records that support project execution and organizational compliance.
            </p>
            <p>
              Beyond software development, I have experience leading operational teams, coordinating workflows, and ensuring projects and day-to-day activities were delivered efficiently. These responsibilities strengthened my ability to organize work, communicate clearly, and collaborate effectively across diverse teams.
            </p>
            <p>
              My background combines software engineering, team leadership, and client-facing experience, enabling me to deliver technical solutions while effectively coordinating with both technical and non-technical stakeholders.
            </p>
          </div>
        </div>

        {!isExpanded && (
          <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-background to-transparent pointer-events-none" />
        )}
      </div>

      <Button
        variant="ghost"
        onClick={handleToggle}
        className="group p-0 h-auto hover:bg-transparent text-primary hover:text-primary/80 font-headline font-black text-xs uppercase tracking-[0.2em] flex items-center gap-2"
      >
        {isExpanded ? (
          <>
            Show Less <ChevronUp className="w-4 h-4" />
          </>
        ) : (
          <>
            Read Full Experience <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
          </>
        )}
      </Button>
    </div>
  );
}
