export const profile = {
  name: "Amit Dhakal",
  email: "herojk64@gmail.com",
  role: "Software Developer",
  tagline: "Engineering software beyond just writing code.",
  subtitle: "I enjoy turning complex ideas into simple, reliable products through clean architecture and thoughtful engineering.",
  currentProject: "Portfolio",
  bio: [
    "Hello, I'm Amit!",
    "I'm a software developer based in Nepal. I build full-stack applications with a focus on clean architecture, performance, and developer experience.",
    "I enjoy working across the stack — from designing REST APIs in Go to crafting responsive UIs in Next.js. I'm always learning and always building.",
  ],
  quote: {
    text: "With great power comes great responsibility — and a lot of debugging.",
    author: "Every Developer Ever",
  },
  social: {
    github: "https://github.com/amitdhakal",
    linkedin: "https://linkedin.com/in/amitdhakal",
    fiverr: "https://fiverr.com/amitdhakal",
    upwork: "https://upwork.com/freelancers/amitdhakal",
  },
};

export type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    id: "1",
    title: "Portfolio",
    description: "My personal portfolio site built with Next.js, Go, and PostgreSQL. You're looking at it right now.",
    tags: ["Next.js", "TypeScript", "Go", "PostgreSQL"],
    repoUrl: "https://github.com/amitdhakal/portfolio",
    featured: true,
  },
  {
    id: "2",
    title: "DevTask",
    description: "A lightweight project management tool for solo developers with kanban boards and time tracking.",
    tags: ["React", "Go", "PostgreSQL", "Docker"],
    repoUrl: "https://github.com/amitdhakal/devtask",
    liveUrl: "https://devtask.amitdhakal2025.com.np",
    featured: true,
  },
  {
    id: "3",
    title: "Linkr",
    description: "A simple link shortener with analytics, built to handle high throughput with Redis caching.",
    tags: ["Go", "Redis", "PostgreSQL"],
    repoUrl: "https://github.com/amitdhakal/linkr",
    liveUrl: "https://linkr.amitdhakal2025.com.np",
    featured: true,
  },
  {
    id: "4",
    title: "CLI Toolkit",
    description: "A collection of developer utilities — git helper, project scaffolder, and env manager — as a single CLI.",
    tags: ["Go", "Shell"],
    repoUrl: "https://github.com/amitdhakal/cli-toolkit",
    featured: false,
  },
  {
    id: "5",
    title: "Blog Engine",
    description: "A minimal blog CMS with markdown support, draft system, and RSS feed generation.",
    tags: ["Next.js", "TypeScript", "PostgreSQL"],
    repoUrl: "https://github.com/amitdhakal/blog-engine",
    featured: false,
  },
  {
    id: "6",
    title: "Auth Service",
    description: "A reusable authentication microservice with JWT, refresh tokens, and OAuth support.",
    tags: ["Go", "PostgreSQL", "Redis"],
    repoUrl: "https://github.com/amitdhakal/auth-service",
    featured: false,
  },
];

export type SkillGroup = {
  category: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    skills: ["TypeScript", "Go", "JavaScript", "SQL"],
  },
  {
    category: "Frontend",
    skills: ["Next.js", "React", "Tailwind CSS", "HTML", "CSS"],
  },
  {
    category: "Backend",
    skills: ["Gin", "REST", "PostgreSQL", "Redis"],
  },
  {
    category: "Tools",
    skills: ["Docker", "Git", "Linux", "Neovim"],
  },
  {
    category: "Other",
    skills: ["sqlc", "Air", "Viper", "GSAP"],
  },
];

export const funFacts = [
  "I use Neovim as my daily driver",
  "I like coffee more than tea",
  "I've been coding since I was in school",
  "I prefer dark mode — obviously",
  "I type in Colemak layout",
  "My first language was JavaScript",
];
