import { ArrowRight, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Autonomous DataCenter AI Monitor",
    description: "Mission-critical monitoring system designed for high-density Data Center operations. Orchestrates n8n workflows and AI Agents to bridge the gap between hardware status and intelligent incident response, ensuring 24/7 uptime and proactive anomaly detection.",
    image: "/images/dashboard_demo.gif",
    tags: ["DataCenter Ops", "Uptime Optimization", "n8n Automation", "AI Agents", "Infrastructure Monitoring"],
    githubUrl: "https://github.com/Daniel-jcVv/DataCenter-AI-Monitor.git"
  },

  {
    id: 2,
    title: "AI Agent Healthcare Assistant",
    description: "An autonomous medical Q&A system using RAG with LangChain. Designed to scale knowledge retrieval through intelligent AI agents that process and act upon complex documentation.",
    image: "/images/chatbot-medical.png",
    tags: ["AI Agents", "n8n Automation", "LangChain", "RAG Pipeline", "Python"],
    githubUrl: "https://github.com/Daniel-jcVv/rag-healthcare-assistant.git"
  },

  {
    id: 3,
    title: "Enterprise Data Warehouse - Medallion Architecture",
    description: "End-to-end data warehouse implementation with Bronze, Silver, and Gold layers using SQL Server. The robust backbone for high-performance automation systems.",
    image: "/images/dataArchitectureDW.png",
    tags: ["Data Engineering", "Robust Pipelines", "T-SQL", "Medallion", "Data Warehouse"],
    githubUrl: "https://github.com/Daniel-jcVv/modern-datawarehouse-project/tree/main"
  },

  {
    id: 4,
    title: "Microsoft Fabric ETL - Insurance Analytics",
    description: "End-to-end analytics platform using Medallion Architecture with Microsoft Fabric and PySpark. Built for scalable enterprise data processing.",
    image: "/images/fabric-insurance.png",
    tags: ["Microsoft Fabric", "Lakehouse", "PySpark", "ETL Pipeline"],
    githubUrl: "https://github.com/Daniel-jcVv/insurance-analytics-medallion.git"
  }
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <Github size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/Daniel-jcVv"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};