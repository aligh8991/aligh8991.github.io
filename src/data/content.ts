import { Experience, Profile } from "../models/Profile";
import { Project } from "../models/Project";
import { Track } from "../models/Track";

/**
 * All site copy lives here. Edit this file to update the website.
 * Source of truth for people-facing facts: the CV (public/Ali_Ghanbarzadeh_CV.pdf).
 */
export const profile = new Profile({
  name: "Ali Ghanbarzadeh",
  headline: "Audio Engineer and Sound Designer",
  roles: ["Audio engineer", "Sound designer", "Web designer", "Translator"],
  intro: "Audio engineer and sound designer based in Tehran. Founder of Alto Studio.",
  summary: [
    "Multidisciplinary freelance professional working across audio engineering, sound design, web design and professional translation.",
    "Founder of Alto Studio, a project-based practice that delivers complete creative solutions, from interface to audio to language. Certified technical training is paired with executive-level organisation, clear client communication and a disciplined approach to planning and delivery.",
  ],
  contact: {
    email: "aligh8991@gmail.com",
    phone: "+98 920 317 3797",
    location: "Tehran, Iran",
    soundcloud: "https://soundcloud.com/aayg-1",
  },
  services: [
    { title: "Audio engineering", icon: "knob", summary: "Recording, editing and mixing prepared for release." },
    { title: "Sound design", icon: "waveform", summary: "Original sound for music, media and interface briefs." },
    { title: "Web design", icon: "code", summary: "Responsive websites built in HTML, CSS and JavaScript." },
    { title: "Translation", icon: "language", summary: "Persian, English and Arabic, with attention to tone and context." },
  ],
  skills: [
    {
      title: "Audio engineering",
      icon: "headphones",
      foundations: ["Music production", "Sound design", "Audio engineering"],
      certified: "Music Production, Steinberg",
    },
    {
      title: "Web design",
      icon: "code",
      foundations: ["Web design", "HTML", "CSS", "JavaScript"],
      certified: "Web Design Levels 1 to 3, Tehran Institute of Technology",
    },
    {
      title: "Professional",
      icon: "language",
      foundations: ["Translation", "Research", "Planning", "Communication"],
    },
    {
      title: "Office",
      icon: "layers",
      foundations: ["Word", "PowerPoint", "Excel", "Accounting"],
    },
  ],
  credentials: [
    { name: "Music Production Certificate", issuer: "Steinberg" },
    { name: "Web Design Professional, Levels 1 to 3 (HTML, CSS, JavaScript)", issuer: "Tehran Institute of Technology" },
  ],
  education: { name: "International Diploma", school: "Tehran International School", period: "09/2009 to 05/2016" },
  languages: ["Persian", "English", "Arabic"],
  interests: ["Scuba diving"],
});

export const experience: Experience[] = [
  new Experience(
    "Founder and Lead Freelancer",
    "Alto Studio",
    "Freelance agency, project-based · Tehran, Iran",
    "05/2016 to present",
    [
      "Lead a project-based practice with four service lines: web design, sound design, audio engineering and translation, scoped and delivered per client engagement.",
      "Design and build websites in HTML, CSS and JavaScript, applying formal training from Tehran Institute of Technology.",
      "Produce and engineer audio for music production and sound design briefs, drawing on Steinberg-certified training.",
      "Deliver professional translation in Persian, English and Arabic, with attention to accuracy, tone and context.",
      "Manage each project independently, from client brief and planning through to final delivery.",
    ],
    true,
  ),
  new Experience(
    "Executive Assistant to the CEO",
    "Iranian Godmother",
    "Tehran, Iran",
    "05/2016 to 05/2018",
    [
      "Provided direct executive support to the CEO, coordinating scheduling, correspondence and daily priorities.",
      "Prepared business documents, presentations and spreadsheets in Microsoft Word, PowerPoint and Excel.",
      "Supported planning, research and accounting tasks, and acted as a point of communication between the CEO and stakeholders.",
    ],
  ),
];

/**
 * SoundCloud items shown on the Portfolio page.
 * 1. The profile entry loads your full track list inside the site.
 * 2. To feature a single track or playlist, add an entry with its public SoundCloud URL:
 *    new Track({ title: "Track name", url: "https://soundcloud.com/aayg-1/track-slug", role: "Mix and master", year: "2025", tags: ["Mixing"] })
 */
export const tracks: Track[] = [
  new Track({
    title: "All releases",
    url: "https://soundcloud.com/aayg-1",
    kind: "profile",
    role: "Music production · Sound design · Audio engineering",
    tags: ["SoundCloud", "Full catalogue"],
  }),
];

export const studioProjects: Project[] = [
  new Project(
    "Dua and Dhikr Book",
    "Digital publication design",
    "Completed",
    "A print-ready A5 book of supplications, typeset with ornate borders and Arabic calligraphic type.",
  ),
  new Project(
    "Badr Clothing Brand",
    "Brand and e-commerce",
    "In development",
    "Brand identity, storefront and launch plan for an online-only clothing label.",
  ),
  new Project(
    "Farm Produce Online Shop",
    "E-commerce website",
    "In development",
    "Mobile-first online store for farm products and handwoven carpets.",
  ),
  new Project(
    "Automated Trading Bot",
    "Software and automation",
    "In development",
    "A Python trading bot built in stages, from simulation towards live use.",
  ),
];
