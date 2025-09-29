import { useEffect, useState } from "react";
import { Box, Text, Link } from "www-sacred";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/content/projects.json")
      .then((res) => res.json())
      .then(setProjects);
  }, []);

  return (
    <Box padding="2rem">
      <Text variant="heading">Projects</Text>
      <ul>
        {projects.map((p) => (
          <li key={p.title}>
            <Link href={p.url}>{p.title}</Link> – {p.description}
          </li>
        ))}
      </ul>
    </Box>
  );
}
