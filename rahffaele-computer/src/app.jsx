import { useState } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";

// very simple "router" just for demo purposes
export default function App() {
  const [page, setPage] = useState("home");

  return (
    <>
      <nav style={{ marginBottom: "1rem" }}>
        <button onClick={() => setPage("home")}>Home</button>
        <button onClick={() => setPage("about")}>About</button>
        <button onClick={() => setPage("projects")}>Projects</button>
      </nav>

      {page === "home" && <Home />}
      {page === "about" && <About />}
      {page === "projects" && <Projects />}
    </>
  );
}