import { useState } from "react";
import React from "react";
import { Button } from "./button";

const ButtonChangeText = () => {
  const firstText = "See all";
  const secondText = "See less";

  const [buttonText, setButtonText] = useState(firstText);

  const handleButtonClick = () => {
    // Toggle between the first and second text
    setButtonText((prevText) =>
      prevText === firstText ? secondText : firstText
    );
  };

  return (
    <div className="pb-4">
      <Button variant={"default"} onClick={handleButtonClick}>
        {buttonText}
      </Button>
    </div>
  );
};

export default ButtonChangeText;