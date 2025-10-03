import { About, Person, Social, Home } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";
import resumeData from "../../app/resume_data.json";

const person: Person = {
  firstName: resumeData.about.name.split(' ')[0],
  lastName: resumeData.about.name.split(' ').slice(1).join(' '),
  name: resumeData.about.name,
  role: "Data Architect & Engineer",
  avatar: "/profile.jpg",
  email: resumeData.about.contact.email,
  location: "Lexington, KY",
  languages: ["English"],
};

const social: Social = [
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: resumeData.about.contact.social.linkedin,
  },
  {
    name: "GitHub",
    icon: "github",
    link: resumeData.about.contact.social.github,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${resumeData.about.contact.email}`,
  },
];

const home: Home = {
  path: "/",
  image: "/profile.jpg",
  label: "Home",
  title: `${person.name}'s Resume`,
  description: `Professional resume of ${person.name}, ${person.role}`,
  headline: <>Building scalable data platforms for data-driven decision-making</>,
  featured: {
    display: false,
    title: <></>,
    href: "",
  },
  subline: (
    <>
      I'm {person.firstName}, a data architect and engineer with a track record of building 
      scalable data platforms. I've implemented modern data stacks at high-growth SaaS startups 
      and multi-billion dollar public purchasing cooperatives.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "",
  },
  intro: {
    display: true,
    title: "Professional Summary",
    description: (
      <>
        {resumeData.about.summary}
      </>
    ),
  },
  work: {
    display: true,
    title: "Professional Experience",
    experiences: resumeData.experience.map(exp => ({
      company: exp.company,
      timeframe: exp.dates,
      role: exp.title,
      achievements: exp.responsibilities.map(resp => <>{resp}</>),
      images: [],
    })),
  },
  studies: {
    display: true,
    title: "Education",
    institutions: resumeData.education.map(edu => ({
      name: edu.institution,
      description: <>{edu.degree}</>,
    })),
  },
  technical: {
    display: true,
    title: "Technical Skills",
    skills: resumeData.skills.map(skill => ({
      title: skill,
      description: <></>,
      tags: [],
      images: [],
    })),
  },
};

export { person, social, home, about };
