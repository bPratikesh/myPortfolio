import { ArrowUpRight } from "lucide-react";
import { FiGithub } from "react-icons/fi";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const projects = [
  {
    title: "Air BNB Hotel room Booking Clone",
    description:
      "An Airbnb-inspired hotel booking web application designed for property browsing, room booking, and user management. Built to simulate real-world booking workflows with a responsive interface and scalable backend functionality.",
    image: "/Projects/airBnbProject.png",
    tags: [
      "Java",
      "Spring Boot",
      "React",
      "Tailwind css",
      "Docker",
      "PostgreSQL",
    ],
    link: null,
    github: [
      {
        label: "Frontend Repository",
        url: "https://github.com/bPratikesh/hotelBooking-frontend",
      },
      {
        label: "Backend Repository",
        url: "https://github.com/bPratikesh/hotelBooking-backend",
      },
    ],
  },
  {
    title: "Doc Care Management system",
    description:
      "A full-stack Doctor & Patient Management System built with React, Spring Boot, and MySQL that streamlines healthcare operations through secure authentication, appointment scheduling, digital prescriptions, online payments, doctor reviews, dashboard analytics, and role-based access for doctors and patients.",
    image: "/Projects/docCareProject.png",
    tags: ["Java", "Spring Boot", "JavaScript", "React", "ShadCN", "MySql"],
    link: null,
    github: [
      {
        label: "Frontend Repository",
        url: "https://github.com/bPratikesh/HospitalManagementSystemFrontend",
      },
      {
        label: "Backend Repository",
        url: "https://github.com/bPratikesh/HospitalManagementSystem",
      },
    ],
  },
  {
    title: "Uber Cab Booking Clone",
    description:
      "An Uber-inspired ride-hailing web application built using Spring Boot, featuring ride booking, user management, and fare calculation. Developed with industry-style backend APIs to simulate real-world cab booking and driver management workflows.",
    image: "/Projects/uberProject.png",
    tags: ["Java", "Spring Boot", "Docker", "PostgreSQL"],
    link: null,
    github: [
      {
        label: "Backend Repository",
        url: "https://github.com/bPratikesh/UberApp",
      },
    ],
  },
  {
    title: "LinkedIn Clone – Microservices Backend",
    description:
      "A scalable LinkedIn clone backend built with Spring Boot microservices featuring JWT authentication, Neo4j-based connection graphs, Kafka-powered real-time notifications, Dockerized deployment, and secure user and post management APIs.",
    image: "/Projects/linkedInProject.png",
    tags: [
      "Java",
      "Spring Boot",
      "Microservices",
      "Spring Security",
      "Docker",
      "Kafka",
      "PostgreSQL",
      "Neo4j",
    ],
    link: null,
    github: [
      {
        label: "Backend Repository",
        url: "https://github.com/bPratikesh/LinkedIn-Application",
      },
    ],
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Background glows classes */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl " />
      <div className="container mx-auto px-6 relative z-10">
        {/* section header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Personal Projects
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that{" "}
            <span className="font-serif italic font-normal text-white">
              makes an impact
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            Showcasing projects that helped me grow as a developer through
            practical learning while strengthening my skills in full-stack
            development, scalable backend systems, and modern web technologies.
          </p>
        </div>
        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              <div className="relative overflow-hidden h-65">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/5 to-transparent backdrop-opacity-10" />
                {/* Overlay Links(actualweb link and github link) */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.link && (
                    <a
                      href={project.link}
                      className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                    >
                      <ArrowUpRight className="w-5 h-5" />
                    </a>
                  )}
                  <div className="flex gap-3">
                    {project.github.map((repo, idx) => (
                      <a
                        key={idx}
                        href={repo.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={repo.label}
                        className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all cursor-pointer"
                      >
                        <FiGithub className="w-5 h-5" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* View all projects CTA */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <a
            href="https://github.com/bPratikesh?tab=repositories"
            target="_blank"
          >
            <AnimatedBorderButton>
              View All Projects
              <ArrowUpRight className="w-5 h-5" />
            </AnimatedBorderButton>
          </a>
        </div>
      </div>
    </section>
  );
};
