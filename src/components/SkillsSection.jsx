import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // AI & Automation
  { name: "n8n Mastery", category: "automation", level: "proficient", description: "Workflow orchestration, API integrations, autonomous agent loops" },
  { name: "Python", category: "automation", level: "proficient", description: "AI Agents (CrewAI, AutoGen), Automation scripts, LangChain" },
  { name: "AI Agents", category: "automation", level: "experienced", description: "Design and deployment of autonomous agents for business processes" },
  { name: "LangChain", category: "automation", level: "experienced", description: "RAG pipelines, LLM orchestration, and intelligent tool-use" },

  // Data Engineering & Backend
  { name: "SQL & Architecture", category: "etl", level: "proficient", description: "Medallion Architecture (Bronze/Silver/Gold), Advanced T-SQL, and efficient schema design" },
  { name: "Databricks", category: "etl", level: "proficient", description: "Unified Lakehouse platform, Spark notebooks, and automated Delta Lake transformations" },
  { name: "PySpark & Spark", category: "etl", level: "proficient", description: "Distributed processing and high-volume data transformations" },
  { name: "Airflow", category: "etl", level: "proficient", description: "Robust workflow orchestration and automated data pipelines" },

  // Cloud & Infrastructure
  { name: "Azure", category: "cloud", level: "proficient", description: "Scalable data architecture with Data Factory, Synapse, and High-Availability patterns" },
  { name: "AWS", category: "cloud", level: "developing", description: "Cloud-native automation focusing on Scalable Serverless patterns (Lambda, S3, ECR)" },
  { name: "Docker", category: "cloud", level: "experienced", description: "Containerization for portable and reliable automation" },
  { name: "Git & DevOps", category: "cloud", level: "proficient", description: "Version control and collaborative development workflows" },
];

const categories = [
  { key: "all", label: "All Skills" },
  { key: "automation", label: "AI & Automation" },
  { key: "etl", label: "Data Engineering" },
  { key: "cloud", label: "Cloud & DevOps" },
];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  const getLevelColor = (level) => {
    switch (level) {
      case "proficient": return "bg-green-500";
      case "experienced": return "bg-cyan-500";
      case "developing": return "bg-orange-400";
      default: return "bg-blue-400";
    }
  };

  const getLevelLabel = (level) => {
    switch (level) {
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