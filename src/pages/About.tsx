import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Cloud, Container, Database, GitBranch, Settings, Terminal } from "lucide-react";

const About = () => {
  const skills = [
    { name: "AWS", icon: Cloud },
    { name: "Linux", icon: Terminal },
    { name: "Docker", icon: Container },
    { name: "Kubernetes", icon: Settings },
    { name: "Jenkins", icon: GitBranch },
    { name: "Terraform", icon: Database },
    { name: "Git", icon: GitBranch },
    { name: "Ansible", icon: Settings },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">About Me</h1>
          
          <div className="prose max-w-none mb-12">
            <p className="text-lg text-muted-foreground mb-4">
              I'm Aditya Magadum, a passionate Freelance Cloud & DevOps Engineer with extensive experience 
              in building and maintaining cloud infrastructure. I specialize in automating deployment pipelines, 
              managing containerized applications, and optimizing cloud resources.
            </p>
            <p className="text-lg text-muted-foreground mb-4">
              With a strong foundation in AWS services and modern DevOps tools, I help organizations 
              streamline their development workflows and scale their infrastructure efficiently. 
              My expertise includes implementing CI/CD pipelines, Infrastructure as Code, and container orchestration.
            </p>
            <p className="text-lg text-muted-foreground">
              I'm committed to delivering high-quality solutions that improve deployment speed, 
              system reliability, and overall operational efficiency.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-8">Technical Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {skills.map((skill) => {
                const Icon = skill.icon;
                return (
                  <div 
                    key={skill.name} 
                    className="flex flex-col items-center p-6 bg-card rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    <Icon className="w-12 h-12 mb-3 text-primary" />
                    <span className="font-medium">{skill.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
