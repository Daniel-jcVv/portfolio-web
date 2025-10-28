import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Programming Languages
  { name: "Python", category: "languages", level: "proficient", description: "Pandas, ETL automation" },
  { name: "SQL", category: "languages", level: "proficient", description: "T-SQL, PostgreSQL, query optimization" },
  { name: "Bash", category: "languages", level: "experienced", description: "Scripting, workflow automation" },
  
  // Data Platforms & ETL
  { name: "PySpark", category: "etl", level: "proficient", description: "Distributed processing, transformations" },
  { name: "Airflow", category: "etl", level: "proficient", description: "Workflow orchestration, DAGs" },
  { name: "Microsoft Fabric", category: "etl", level: "developing", description: "Lakehouse, Delta Lake, data pipelines" },
  //{ name: "Databricks", category: "etl", level: "developing", description: "Unified analytics, Delta Lake, notebooks" },

  // Cloud Platforms
  { name: "Azure", category: "cloud", level: "proficient", description: "Data Factory (ADF), storing data in ADLS"},
  { name: "GCP", category: "cloud", level: "experienced", description: "BigQuery, DataProc" },

  // Database Technologies
  { name: "MS SQL Server", category: "databases", level: "proficient", description: "Stored procedures, CTEs, Window functions, Partition functions, Index optimization" },
  { name: "PostgreSQL", category: "databases", level: "proficient", description: "Schema design, Aggregation functions, Window functions"},

  // Data Engineering Practices
  { name: "Data Modeling", category: "practices", level: "proficient", description: "Star schema, fact/dimension design" },
  { name: "ETL Monitoring", category: "practices", level: "experienced", description: "Pipeline monitoring, logging, error handling" },

  // DevOps Tools
  { name: "Docker", category: "tools", level: "experienced", description: "Container orchestration for data pipelines" },
  { name: "Git/GitHub", category: "tools", level: "proficient", description: "Version control, branching strategies, collaborative development" },
  { name: "JIRA/Confluence", category: "tools", level: "proficient", description: "Agile workflows, technical documentation" },
  

  // Emerging Data Technologies
  //{ name: "LangChain/RAG", category: "emerging", level: "developing", description: "Retrieval-Augmented Generation for intelligent data pipelines" },
  { name: "MLOps Pipelines", category: "emerging", level: "developing", description: "ML model deployment, monitoring, and integration with data workflows" },
];

const categories = [
  { key: "all", label: "All Skills" },
  { key: "languages", label: "Programming" },
  { key: "etl", label: "ETL & Big Data" },
  { key: "cloud", label: "Cloud" },
  { key: "databases", label: "Databases" },
  { key: "practices", label: "Data Practices" },
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
      case "proficient": return "bg-green-500";
      case "experienced": return "bg-cyan-500";
      case "developing": return "bg-orange-400";
      default: return "bg-blue-400";
    }
  };

  const getLevelLabel = (level) => {
    switch(level) {
      case "proficient": return "Proficient";
      case "experienced": return "Experienced";
      case "developing": return "Developing";
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
            <span>Proficient</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-cyan-500 rounded-full"></div>
            <span>Experienced</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
            <span>Developing</span>
          </div>
        </div>
      </div>
    </section>
  );
};