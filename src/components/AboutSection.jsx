import { Briefcase, Code, Download, User } from "lucide-react";

export const AboutSection = () => {

  const handleDownloadCV = (e) => {
    e.preventDefault();

    // URL del archivo local en public con cache-busting
    const cvPath = '/assets/documents/JuanDanielGarciaBelman_AIDataAutomationEng_60112.pdf' + '?t=' + Date.now();

    // Crear un enlace temporal y simular click para descarga
    const link = document.createElement('a');
    link.href = cvPath;
    link.download = 'JuanDanielGarciaBelman_AIDataAutomationEng_60112.pdf';
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Data Engineer & Automation
            </h3>

            <p className="text-muted-foreground">
              Data Engineer with 4+ years of experience across Fortune 500 clients (Telcel, Citi Banamex) and,
              today, a multi-brand automotive dealer group. I build layered lakehouses (bronze/silver/gold),
              ETL pipelines orchestrated with n8n and Airflow, and the reporting that runs on top of them.
            </p>
            <p className="text-muted-foreground">
              I care about pipelines that can be trusted and left running: idempotent loads, validation before
              publishing, lineage and audit trails, and automated tests. I also use AI agents to speed up
              development and automate repetitive operations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <button
                onClick={handleDownloadCV}
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors 
                duration-300 cursor-pointer flex items-center gap-2 justify-center"
              >
                <Download className="h-4 w-4" />
                Download CV
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Data Pipelines & Lakehouse</h4>
                  <p className="text-muted-foreground">
                    Incremental ETL from SQL Server into PostgreSQL through
                    bronze, silver and gold layers, with Python and SQL.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Orchestration & Automation</h4>
                  <p className="text-muted-foreground">
                    n8n workflows and an Airflow pilot that run monthly reporting,
                    marketing spend and KPI pipelines without manual steps.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Data Quality & Governance</h4>
                  <p className="text-muted-foreground">
                    Validation before load, run IDs and hashes for lineage,
                    maker-checker approvals, and CI with pytest and Playwright.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};