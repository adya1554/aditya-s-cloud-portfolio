import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "AWS Infrastructure Automation",
      description: "Automated deployment of scalable infrastructure on AWS using Terraform and CloudFormation.",
      tags: ["AWS", "Terraform", "CloudFormation"],
    },
    {
      title: "CI/CD Pipeline Implementation",
      description: "Built end-to-end CI/CD pipeline using Jenkins, Docker, and Kubernetes for microservices deployment.",
      tags: ["Jenkins", "Docker", "Kubernetes"],
    },
    {
      title: "Container Orchestration Platform",
      description: "Designed and deployed Kubernetes cluster for managing containerized applications at scale.",
      tags: ["Kubernetes", "Docker", "Helm"],
    },
    {
      title: "Infrastructure Monitoring System",
      description: "Implemented comprehensive monitoring and alerting system using Prometheus and Grafana.",
      tags: ["Prometheus", "Grafana", "Linux"],
    },
    {
      title: "Configuration Management",
      description: "Automated server configuration and management using Ansible across multiple environments.",
      tags: ["Ansible", "Linux", "Python"],
    },
    {
      title: "Cloud Cost Optimization",
      description: "Optimized AWS infrastructure reducing costs by 40% while improving performance and reliability.",
      tags: ["AWS", "Cost Optimization", "CloudWatch"],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Projects</h1>
          <p className="text-lg text-muted-foreground mb-12">
            Here are some of my recent cloud and DevOps projects
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="flex flex-col">
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="px-2 py-1 text-xs bg-primary/10 text-primary rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">View More</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Projects;
