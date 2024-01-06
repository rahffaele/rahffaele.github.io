import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { ChevronDown } from "lucide-react";

const EducationSection = () => {
  const sectionTitle = "Education";
  const accordionSections = [
    {
      year: "Ongoing",
      school: "SUPSI",
      course: "Master of Arts in Interaction Design",
    },
    {
      year: "2018 - 2021",
      school: "Politecnico di Milano",
      course: "Bachelor's Degree in Communication Design",
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
                <h5 className="text-muted-foreground pb-1">{section.school}</h5>
                <p className="text-foreground">{section.course}</p>
              </div>
            </div>
          </AccordionContent>
        ))}
      </AccordionItem>
    </Accordion>
  );
};

export default EducationSection;