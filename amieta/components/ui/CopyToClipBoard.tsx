import React from "react";
import { Badge } from "@/components/ui/badge";

interface CopyToClipboardButtonProps {
  text: string;
}

const CopyToClipboardButton: React.FC<CopyToClipboardButtonProps> = ({
  text,
}) => {
  const handleCopyClick = () => {
    const el = document.createElement("textarea");
    el.value = text;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    // You can also provide some user feedback, for example, show a tooltip or a message.
    alert("Copied to clipboard!");
  };

  return (
    <Badge style={{ cursor: "pointer" }} onClick={handleCopyClick}>
      Copy to Clipboard
    </Badge>
  );
};