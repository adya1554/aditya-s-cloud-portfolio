import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20 md:py-32">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Cloud & DevOps Engineer
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Specializing in AWS, Docker, Kubernetes, and CI/CD pipelines. 
              Building scalable cloud infrastructure and automating deployment workflows.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/contact">Hire Me</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/projects">View Projects</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="bg-muted/50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Services</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-card p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Cloud Infrastructure</h3>
                <p className="text-muted-foreground">
                  Design and implement scalable cloud solutions on AWS with high availability and security.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">DevOps Automation</h3>
                <p className="text-muted-foreground">
                  Automate deployment pipelines using Jenkins, Terraform, and Ansible for faster delivery.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Container Orchestration</h3>
                <p className="text-muted-foreground">
                  Deploy and manage containerized applications with Docker and Kubernetes.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
