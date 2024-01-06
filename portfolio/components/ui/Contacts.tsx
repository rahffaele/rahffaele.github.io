import React from "react";
import { Badge } from "@/components/ui/badge";

const Contacts = () => {
  const titleSection = "You can also find me here"
  const badgeLinks = [
    { link: "https://read.cv/rahffaele", text: "read.cv" },
    { link: "https://www.linkedin.com/in/raffaeleamietta/", text: "Linkedin" },
    { link: "https://www.instagram.com/rahffaele/", text: "Instagram" },
    { link: "https://posts.cv/rahffaele", text: "posts.cv" },
  ];

  return (
    <div>
      <h5 className="font-medium">{titleSection}</h5>
      <div className="pt-4">
        {badgeLinks.map((badge, index) => (
          <a key={index} href={badge.link} target="_blank">
            <Badge variant="secondary" className="transition-all hover:rotate-[-2deg]">{badge.text}</Badge>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Contacts;