import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/Button";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const skills = [
  "Java",
  "Spring Boot",
  "React",
  "Next.js",
  "MySql",
  "PostgreSQL",
  "Docker",
  "Tailwind CSS",
  "Git",
];

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image*/}

      <div className="absolute inset-0">
        <img
          src="/heroBgImage2.png"
          alt="hero background image"
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 from-background/20 via-background/80 to-background" />
      </div>

      {/* Content  */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Software Engineer
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in animation-delay-100">
                Building{" "}
                <span className="text-primary glow-text">
                  scalable applications
                </span>
                <br />
                with clean and efficient
                <br />
                <span className="font-serif italic font-normal text-white">
                  code.
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                Hi, I'm Pratikesh Borade — a Software Developer focused on
                building scalable, efficient, and user-friendly web
                applications.
              </p>
            </div>

            {/* CTA buttons(COntat me and CV download) */}
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <Button>
                Contact me <ArrowRight className="w-5 h-5" />
              </Button>
              <AnimatedBorderButton>
                <Download className="w-5 h-5" />
                Download CV
              </AnimatedBorderButton>
            </div>
          </div>
          {/* Right column Profile image */}
          <div className="relative animate-fade-in animation-delay-300">
            {/* Profile image */}
            <div className="relative max-w-md mx-auto">
              <div className="relative glass rounded-3xl p-2 glow-border">
                <img
                  src="/ProfilePicture.jpg"
                  alt="Pratikesh Borade's profile img"
                  className="w-full aspect-[4/5] object-cover rounded-4xl"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Skills section */}
        <div className="mt-20 animate-fade-in animation-delay-600">
          <p className="text-lg text-muted-foreground mb-6 text-center">
            Technologies I work with
          </p>
          <div className="relative overflow-hidden">
            <div className="flex animate-marquee">
              {[...skills, ...skills].map((skill, index) => (
                <div key={index} className="flex-shrink-0 px-8 py-4">
                  <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
