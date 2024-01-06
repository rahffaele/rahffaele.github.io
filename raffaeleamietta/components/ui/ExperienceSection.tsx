import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { ChevronDown } from "lucide-react";

const ExperienceSection = () => {
  const sectionTitle = "Relevant work experience";
  const accordionSections = [
    {
      year: "2023",
      company: "Watchanalytics",
      position: "UI/UX Designer",
      role: "Freelance",
    },
    {
      year: "2022 - 2023",
      company: "BCG Platinion",
      position: "User Experience Designer",
      role: "Visiting Associate",
    },
    {
      year: "2020 - 2020",
      company: "Politecnico di Milano",
      position: "Graphic Designer",
      role: "Freelance",
    },
  ];

  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>
          {sectionTitle}
          <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
        </AccordionTrigger>
        {accordionSections.map((section, index) => (
          <AccordionContent key={index}>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-4">
              <div className="lg:col-span-2">
                <h5 className="text-muted-foreground">{section.year}</h5>
              </div>
              <div className="lg:col-span-6">
                <h5 className="text-muted-foreground pb-1">{section.company}</h5>
                <p className="text-foreground">{section.position}</p>
                <div className="mt-4">
                  <Badge variant="secondary" className="rounded-full hover:bg-secondary">{section.role}</Badge>
                </div>
              </div>
            </div>
          </AccordionContent>
        ))}
      </AccordionItem>
    </Accordion>
  );
};

export default ExperienceSection;