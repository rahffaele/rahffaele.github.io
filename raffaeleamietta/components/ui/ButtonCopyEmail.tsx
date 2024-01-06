import React from "react";
import { useToast } from "./use-toast";
import { Button } from "./button";

const ButtonCopyEmail = () => {
  const { toast } = useToast();

  const handleCopyEmail = () => {
    const emailToCopy = "raffaele.amietta@gmail.com";

    navigator.clipboard.writeText(emailToCopy).then(
      () => {
        toast({
          title: "Email copied.",
          description: (
            <a href={`mailto:raffaele.amietta@gmail.com`}>{emailToCopy}</a>
          ),
        });
      },
      (error) => {
        console.error("Unable to copy email:", error);
        toast({
          title: "Copy Error",
          description: "Unable to copy email. Please try again.",
        });
      }
    );
  };

  return (
    <div className="pb-4">
      <Button variant={"default"} onClick={handleCopyEmail}>
        Copy Email
      </Button>
    </div>
  );
};

export default ButtonCopyEmail;