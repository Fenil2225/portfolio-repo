import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Experience } from "@/components/portfolio/Experience";
import { Achievements } from "@/components/portfolio/Achievements";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { Cursor } from "@/components/portfolio/Cursor";
import { Preloader } from "@/components/portfolio/Preloader";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Fenil Patel — Creative Developer & Designer" },
      {
        name: "description",
        content:
          "Portfolio of Fenil Patel — creative developer crafting fast, beautiful interfaces where design meets engineering.",
      },
      { property: "og:title", content: "Fenil Patel — Creative Developer" },
      {
        property: "og:description",
        content: "Selected work, experience and contact for Fenil Patel.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative">
      <Preloader />
      <Cursor />
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Achievements />
      <Contact />
      <Footer />
    </main>
  );
}
