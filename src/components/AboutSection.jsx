import { Briefcase, Code, Download, User } from "lucide-react";

export const AboutSection = () => {

  const handleDownloadCV = (e) => {
    e.preventDefault();
    const FILE_ID = import.meta.env.VITE_GOOGLE_DRIVE_CV_ID;
    
    // Verificar que existe el ID del archivo
    if (!FILE_ID) {
      console.error('REACT_APP_GOOGLE_DRIVE_CV_ID no está configurado');
      return;
    }

    // URL para descarga directa desde Google Drive
    const googleDriveUrl = `https://drive.google.com/uc?export=download&id=${FILE_ID}`;
    
    
    // Crear un enlace temporal y simular click para descarga
    const link = document.createElement('a');
    link.href = googleDriveUrl;
    link.download = 'CV.pdf'; // Nombre sugerido para el archivo
    link.target = '_blank';
    link.rel = 'noopener noreferrer'; // Seguridad
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
              Data Engineer & AI Tech Creator
            </h3>

            <p className="text-muted-foreground">
              With over 3 years of experience in data engineering,
              I focus on building efficient ETL processes and integrating emerging AI technologies to deliver intelligent,
              data-driven solutions that transform raw information into valuable insights.
            </p>

            <p className="text-muted-foreground">
               I'm passionate about crafting efficient data pipelines and intelligent systems,
               constantly exploring new ETL techniques, AI innovations,
               and cloud technologies to stay ahead in the dynamic world of data engineering and AI.
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
                  <h4 className="font-semibold text-lg"> Data Engineer</h4>
                  <p className="text-muted-foreground">
                    Building and optimizing ETL processes while implementing
                    data quality frameworks and automated reporting solutions.
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
                  <h4 className="font-semibold text-lg">Automation Engineering</h4>
                  <p className="text-muted-foreground">
                    Developing automated workflows and data processing systems
                    that streamline operations and reduce manual interventions.
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
                  <h4 className="font-semibold text-lg">Solution Architecture</h4>
                  <p className="text-muted-foreground">
                    Designing end-to-end data architectures and coordinating
                    cross-functional teams to deliver scalable analytics solutions.
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