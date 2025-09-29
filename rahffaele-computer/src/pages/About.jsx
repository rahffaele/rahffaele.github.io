import { useEffect, useState } from "react";
import { Box, Text } from "www-sacred";

export default function About() {
  const [bio, setBio] = useState("");

  useEffect(() => {
    fetch("/content/about.md")
      .then((res) => res.text())
      .then(setBio);
  }, []);

  return (
    <Box padding="2rem">
      <Text variant="heading">About Me</Text>
      <Box marginTop="1rem">
        <Text variant="body">{bio}</Text>
      </Box>
    </Box>
  );
}
