export type Project = {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  imageUrl: string;
  liveUrl?: string;
  sourceCodeUrl?: string;
  accessCode: string;
  videoDemoUrl?: string;
};

export const projects: Project[] = [
  {
    id: "1",
    title: "Project Alpha",
    description: "An innovative e-commerce platform with a focus on user experience.",
    longDescription: "Project Alpha is a full-featured e-commerce solution built from the ground up using modern web technologies. It includes a custom shopping cart, payment gateway integration, and a powerful admin dashboard for managing products, orders, and customers. The frontend is built with Next.js for server-side rendering and optimal performance, while the backend is powered by a robust API.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Stripe"],
    imageUrl: "/nawaz.png",
    liveUrl: "#",
    sourceCodeUrl: "https://github.com/example/project-alpha",
    accessCode: "EVOLVE",
    videoDemoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "2",
    title: "Project Beta",
    description: "A social media dashboard for content creators to track engagement.",
    longDescription: "Project Beta provides content creators with a unified dashboard to monitor their social media presence across multiple platforms. It features real-time analytics, post scheduling, and audience demographic insights. The application uses Chart.js for data visualization and is built to be highly scalable and responsive.",
    technologies: ["React", "Redux", "Node.js", "Express", "MongoDB", "Chart.js"],
    imageUrl: "/nawaz.png",
    liveUrl: "#",
    sourceCodeUrl: "https://github.com/example/project-beta",
    accessCode: "EVOLVE",
    videoDemoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "3",
    title: "Project Gamma",
    description: "A collaborative project management tool for agile teams.",
    longDescription: "Project Gamma is a Trello-like application designed for agile development teams. It features drag-and-drop task boards, real-time collaboration with WebSockets, and integration with GitHub. The goal was to create a seamless and intuitive tool to improve team productivity and workflow management.",
    technologies: ["Vue.js", "Vuex", "Firebase", "WebSockets", "Vuetify"],
    imageUrl: "/nawaz.png",
    liveUrl: "#",
    sourceCodeUrl: "https://github.com/example/project-gamma",
    accessCode: "EVOLVE",
    videoDemoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "4",
    title: "Project Delta",
    description: "A mobile-first recipe discovery application with meal planning.",
    longDescription: "Project Delta helps users discover new recipes and plan their weekly meals. It features a powerful search with filtering by ingredients or dietary restrictions, a personal recipe box, and a shopping list generator. The app is designed with a mobile-first approach, ensuring a great experience on any device.",
    technologies: ["Svelte", "SvelteKit", "GraphQL", "PostgreSQL", "Flutter"],
    imageUrl: "/nawaz.png",
    liveUrl: "#",
    sourceCodeUrl: "https://github.com/example/project-delta",
    accessCode: "EVOLVE",
    videoDemoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find((project) => project.id === id);
};
