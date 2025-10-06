import { ArrowRight, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Enterprise Data Warehouse - Medallion Architecture",
    description: "End-to-end data warehouse implementation with Bronze, Silver, and Gold layers using SQL Server and Azure Data Studio for enterprise data processing.",
    image: "/images/dataArchitectureDW.png",
    tags: ["Data Engineering", "Python", "T-SQL", "Docker", "Medallion Architecture"],
    githubUrl: "https://github.com/Daniel-jcVv/modern-datawarehouse-project/tree/main"
  },

  {
    id: 2,
    title: "Supply Chain ETL Pipeline - Azure Data Engineering",
    description: "Enterprise supply chain data pipeline using Azure Data Factory and Databricks. Implements medallion architecture (Bronze-Silver-Gold) with dynamic full/incremental load patterns, automated watermark tracking, and supplier analytics. Processes real-time inventory, orders, and logistics data.",
    image: "/images/supply-chain-etl.png",
    tags: ["Azure Data Factory", "Databricks", "PySpark", "SQL Server", "Medallion Architecture", "ETL Pipeline"],
    githubUrl: ""
  },
  {
    id: 3,
    title: "Smart Manufacturing Efficiency Pipeline",
    description: "AI-powered predictive maintenance system for smart manufacturing machines using sensor data analytics. Implements GitOps deployment with Jenkins CI and ArgoCD for automated rollback and zero-downtime deployments on GCP VM with Minikube.",
    image: "/images/mart-manufacturing.png",
    tags: ["MLflow", "Docker", "Jenkins", "Kubernetes", "GitOps", "GCP VM with Minikube"],
    githubUrl: "https://github.com/Daniel-jcVv/smart-manufacturing-efficiency-pipeline.git"
  },
  {
    id: 4,
    title: "RAG Healthcare Pipeline",
    description:"An intelligent medical Q&A system using RAG with LangChain.",
    image: "/images/chatbot-medical.png",
    tags: ["Python", "LangChain", "Docker", "Flask", "Jenkins", "AWS ECR","Pipeline"],
    githubUrl: "https://github.com/Daniel-jcVv/rag-healthcare-assistant.git"
  },
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