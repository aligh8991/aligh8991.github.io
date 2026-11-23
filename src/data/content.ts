import { Profile } from "../models/Profile";
import { Project } from "../models/Project";

/**
 * All site copy lives here. Edit this file to update the website.
 */
export const profile = new Profile(
  "Ali Ghanbarzadeh",
  "Front End Web Designer and Music Producer",
  [
    "Ali Ghanbarzadeh is a front end web designer and music producer who combines structured interface thinking with a disciplined creative practice. He has completed formal training in web design and professional music production, and he delivers work that is clear, consistent and ready for real users.",
    "He is self directed, comfortable owning a project from concept through planning to delivery, and works professionally in English and Arabic. Ali is seeking a role where design precision, technical craft and clear communication are valued.",
  ],
  { email: "aligh8991@gmail.com", phone: "+989046489845" },
  [
    {
      title: "Front end web design",
      icon: "code",
      level: "Certified, levels 1 and 2",
      summary: "Responsive, accessible interfaces built on a consistent design system.",
      items: ["HTML and CSS", "Responsive layout", "UI and UX principles", "TypeScript and React"],
    },
    {
      title: "Music production",
      icon: "music",
      level: "Steinberg certified",
      summary: "Composition, arrangement and mixing with a professional production workflow.",
      items: ["Arrangement", "Mixing", "Sound design", "DAW workflow"],
    },
    {
      title: "English and Arabic",
      icon: "language",
      level: "Bilingual communication",
      summary: "Written and spoken communication for international teams and audiences.",
      items: ["English: professional use", "Arabic: working knowledge", "Persian: native"],
    },
  ],
  [
    { name: "Web Design, Level 1", issuer: "Tehran Institute of Technology" },
    { name: "Web Design, Level 2", issuer: "Tehran Institute of Technology" },
    { name: "Music Production", issuer: "Steinberg" },
  ],
);

export const projects: Project[] = [
  new Project(
    "Dua and Dhikr Book",
    "Digital publication design",
    "Completed",
    "A print ready A5 book of supplications compiled from collected source images, typeset with ornate borders and Arabic calligraphic type on a cream page.",
    ["Typography", "Arabic typesetting", "PDF production"],
    "A cohesive, readable book with a unified visual identity across every page.",
  ),
  new Project(
    "Badr Clothing Brand",
    "Brand and e-commerce",
    "In development",
    "An online only clothing label launching with a casual line, with luxury and sport lines planned. Scope covers brand identity, storefront and a six month launch plan.",
    ["Brand identity", "Storefront design", "Planning"],
    "A minimal, scalable brand system prepared for an online launch.",
  ),
  new Project(
    "Farm Produce Online Shop",
    "E-commerce website",
    "In development",
    "An online store for long shelf life farm products and handwoven carpets, planned with a step by step website build roadmap.",
    ["Information architecture", "Product pages", "Web design"],
    "A focused catalogue experience designed for mobile buyers.",
  ),
  new Project(
    "Automated Trading Bot",
    "Software and automation",
    "In development",
    "A Python trading bot with learning capabilities, developed incrementally with a strict zero budget constraint and a staged path from simulation to live use.",
    ["Python", "Automation", "Data driven design"],
    "A working foundation built for iterative improvement.",
  ),
];
