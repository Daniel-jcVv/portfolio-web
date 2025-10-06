import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Core Programming Languages
  { name: "Python", category: "languages", level: "expert", description: "Pandas, data processing, automation scripting" },
  { name: "SQL", category: "languages", level: "expert", description: "Oracle, Hive, Teradata, PostgreSQL" },
  { name: "Java", category: "languages", level: "intermediate", description: "Spring Boot for data microservices" },
  { name: "Shell Scripting", category: "languages", level: "intermediate", description: "Unix/Linux automation and scripting" },

  // ETL & Big Data Technologies
  { name: "Apache Airflow", category: "etl", level: "proficient", description: "Workflow orchestration &  DAG development" },
  { name: "Apache PySpark", category: "etl", level: "proficient", description: "Data processing and transformation experience" },
  { name: "Informatica PowerCenter", category: "etl", level: "intermediate", description: "Enterprise ETL development" },
  { name: "Apache Hive", category: "etl", level: "intermediate", description: "Data warehouse queries" },

  // Cloud Platforms
  { name: "AWS", category: "cloud", level: "intermediate", description: "EC2, S3, RDS, Lambda, Glue" },
  { name: "Azure", category: "cloud", level: "intermediate", description: "Data Factory, SQL Database integration"},
  { name: "GCP", category: "cloud", level: "intermediate", description: "BigQuery, Dataflow exposure" },

  // Database Technologies
  { name: "MS SQL Server", category: "databases", level: "proficient", description: "Current active use, performance optimization" },
  { name: "PostgreSQL", category: "databases", level: "proficient", description: "Advanced queries and database management"},
  { name: "Oracle Database", category: "databases", level: "intermediate", description: "Analytics queries and database management"},
  { name: "Teradata", category: "databases", level: "intermediate", description: "Enterprise data warehouse experience" },

  // Development & DevOps Tools
  { name: "Docker", category: "tools", level: "intermediate", description: "Container deployment and orchestration" },
  { name: "Git/GitHub", category: "tools", level: "proficient", description: "Version control & collaboration" },
  { name: "JIRA/Confluence", category: "tools", level: "proficient", description: "Agile project management and documentation" },
  { name: "Jenkins", category: "tools", level: "basic", description: "CI/CD pipeline automation" },
  { name: "WinSCP/PuTTY", category: "tools", level: "expert", description: "Secure file transfer & remote server management" },

  // Emerging Technologies
  { name: "RAG Systems", category: "emerging", level: "learning", description: "Intelligent data documentation systems" },
  { name: "MCP Protocol", category: "emerging", level: "learning", description: "Model Context Protocol integration" },
  { name: "n8n", category: "emerging", level: "learning", description: "Visual workflow automation" },
  { name: "Context Engineering", category: "emerging", level: "basic", description: "System monitoring & alerting" },
];

const categories = [
  { key: "all", label: "All Skills" },
  { key: "languages", label: "Programming" },
  { key: "etl", label: "ETL & Big Data" },
  { key: "cloud", label: "Cloud" },
  { key: "databases", label: "Databases" },
  { key: "tools", label: "Tools" },
  { key: "emerging", label: "Emerging Tech" }
];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  const getLevelColor = (level) => {
    switch(level) {
      case "expert": return "bg-green-500";
      case "proficient": return "bg-blue-500";
      case "intermediate": return "bg-yellow-600";
      case "basic": return "bg-orange-400";
      case "learning": return "bg-gray-400";
      default: return "bg-gray-400";
    }
  };

  const getLevelLabel = (level) => {
    switch(level) {
      case "expert": return "Expert";
      case "proficient": return "Proficient";
      case "intermediate": return "Intermediate";
      case "basic": return "Basic";
      case "learning": return "Learning";
      default: return level;
    }
  };

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Technical <span className="text-primary">Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => setActiveCategory(category.key)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300",
                activeCategory === category.key
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-lg shadow-lg border border-border/50 card-hover"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
                <span 
                  className={cn(
                    "px-2 py-1 rounded-full text-xs text-white font-medium",
                    getLevelColor(skill.level)
                  )}
                >
                  {getLevelLabel(skill.level)}
                </span>
              </div>
              
              <p className="text-sm text-muted-foreground leading-relaxed">
                {skill.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span>Expert</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <span>Proficient</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <span>Intermediate</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
            <span>Basic</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
            <span>Learning</span>
          </div>
        </div>
      </div>
    </section>
  );
};