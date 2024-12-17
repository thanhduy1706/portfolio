import About from "@/components/about";
import Intro from "@/components/intro";
import SectionDivider from "@/components/section-divider";
import Projects from "@/components/projects";
import Stacks from "@/components/stacks";
import Experience from "@/components/experience";
import Contact from "@/components/contact";

/**
 * Renders the Home page with various sections including Intro, About, Projects, Stacks, Experience, and Contact.
 * @returns {JSX.Element} The main content of the home page.
 */
export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <Stacks />
      <Experience />
      <Contact />
    </main>
  );
}
