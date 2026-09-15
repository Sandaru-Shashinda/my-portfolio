import { About } from "@/components/about";
import { Background } from "@/components/background";
import { Contact } from "@/components/contact";
import { ExperienceSection } from "@/components/experience";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";
import { experience, profile, projects } from "@/lib/data";

/** Structured data so search and LinkedIn-style unfurls read the profile correctly. */
function PersonJsonLd() {
  const json = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.title,
    description: profile.summary,
    email: `mailto:${profile.email}`,
    telephone: profile.phone,
    url: profile.linkedin,
    sameAs: [profile.linkedin],
    address: { "@type": "PostalAddress", addressLocality: "Colombo", addressCountry: "LK" },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "University of Sri Jayewardenepura",
    },
    worksFor: { "@type": "Organization", name: experience[0].company },
    knowsAbout: projects.flatMap((project) => project.stack),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}

export default function Home() {
  return (
    <>
      <PersonJsonLd />
      <Hero />
      <About />
      <ExperienceSection />
      <Projects />
      <Skills />
      <Background />
      <Contact />
    </>
  );
}
