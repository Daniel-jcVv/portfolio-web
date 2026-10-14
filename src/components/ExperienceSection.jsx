const experience = [
  {
    role: "Data Engineer",
    company: "Multi-brand Automotive Dealer Group",
    period: "Apr 2026 - Present",
    points: [
      "Built a layered lakehouse (landing/bronze/silver/gold) from a read-only dealer management system (SQL Server) into PostgreSQL, with idempotent, incremental runs.",
      "Orchestrated ETL pipelines with n8n (Airflow pilot) for marketing spend, digital KPIs and monthly executive reporting; business logic in versioned Python.",
      "Implemented audit and lineage controls: run IDs, file hashes, maker-checker approvals and validation before load.",
      "Set up quality gates with ruff, pre-commit, pytest and Playwright end-to-end tests for Google Apps Script capture forms.",
    ],
  },
  {
    role: "Freelance AI Automation Projects",
    company: "Independent",
    period: "May 2025 - Apr 2026",
    points: [
      "AI voice sales agent for a hardware distributor: inventory lookup and order tracking 24/7 (n8n, Docker).",
      "Automated fuel cost optimizer: scrapes 100+ gas stations and delivers the top 3 via dashboard (n8n, Python).",
    ],
  },
  {
    role: "ETL Pipeline Operations",
    company: "NTT DATA | Telcel client",
    period: "May 2024 - Apr 2025",
    points: [
      "Operated 150+ Azure Data Factory pipelines processing 5M+ daily records from SFTP into ADLS Gen2.",
      "Daily reconciliation with Databricks (SQL + PySpark), MERGE on Delta tables and control-figure validation.",
    ],
  },
  {
    role: "Metadata Governance Analyst / Data Analyst",
    company: "NTT DATA | Citi Banamex client",
    period: "Feb 2022 - May 2024",
    points: [
      "Naming standards and lineage across Raw/Staging/Curated layers with Unity Catalog (DAMA DMBOK).",
      "Automated monthly validation of 500+ data attributes with Python, from 8 hours to 45 minutes.",
    ],
  },
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Professional <span className="text-primary"> Experience</span>
        </h2>
        <div className="space-y-6">
          {experience.map((job) => (
            <div key={job.role} className="gradient-border p-6 card-hover text-left">
              <div className="flex flex-col md:flex-row md:justify-between gap-1 mb-3">
                <h3 className="font-semibold text-lg">
                  {job.role} <span className="text-muted-foreground font-normal">| {job.company}</span>
                </h3>
                <span className="text-sm text-primary">{job.period}</span>
              </div>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                {job.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
