"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="bg-black text-white scroll-smooth">

      {/* HERO */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 relative overflow-hidden">
        <div className="absolute w-[500px] h-[500px] bg-purple-600 opacity-20 blur-3xl rounded-full"></div>

        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-bold z-10"
        >
          Wendril Ferreira
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 text-gray-400 max-w-xl z-10"
        >
          Engenheiro de Dados especialista em pipelines escaláveis, Data Warehouse e arquitetura cloud.
        </motion.p>

        <motion.a
          href="#projects"
          whileHover={{ scale: 1.05 }}
          className="mt-8 border px-6 py-3 rounded-full hover:bg-white hover:text-black transition z-10"
        >
          Ver Projetos
        </motion.a>
      </section>

      {/* SOBRE */}
      <section className="py-24 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Sobre</h2>
        <p className="text-gray-400 leading-relaxed">
          Atuo como Engenheiro de Dados com foco em construção de pipelines robustos,
          modelagem de dados e soluções analíticas escaláveis. Experiência com Airflow,
          MongoDB, Data Warehouse e tecnologias modernas como Microsoft Fabric.
        </p>
      </section>

      {/* STACK */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-900">
        <h2 className="text-3xl font-bold text-center mb-10">Stack</h2>

        <div className="flex flex-wrap justify-center gap-4 px-6">
          {[
            "Python",
            "SQL",
            "Airflow",
            "MongoDB",
            "Databricks",
            "Microsoft Fabric",
            "Power BI",
            "AWS",
          ].map((tech) => (
            <div
              key={tech}
              className="px-5 py-2 border border-gray-700 rounded-full hover:border-white transition"
            >
              {tech}
            </div>
          ))}
        </div>
      </section>

      {/* PROJETOS */}
      <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12">Projetos</h2>

        <div className="grid md:grid-cols-3 gap-8">

          {[
            {
              title: "Pipeline de Dados (Airflow)",
              desc: "Orquestração de pipelines ETL com monitoramento e escalabilidade.",
            },
            {
              title: "Data Warehouse Corporativo",
              desc: "Modelagem dimensional com ingestão de múltiplas fontes.",
            },
            {
              title: "Analytics com Power BI",
              desc: "Dashboards estratégicos para tomada de decisão.",
            },
          ].map((project, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="p-6 border border-gray-800 rounded-2xl bg-gradient-to-b from-gray-900 to-black hover:border-white transition"
            >
              <h3 className="text-xl font-bold mb-3">{project.title}</h3>
              <p className="text-gray-400 text-sm">{project.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* DIFERENCIAL */}
      <section className="py-24 px-6 bg-gray-900 text-center">
        <h2 className="text-3xl font-bold mb-6">Diferencial</h2>

        <p className="text-gray-400 max-w-3xl mx-auto">
          Construo soluções de dados com foco em performance, governança e escalabilidade.
          Minha abordagem combina engenharia, negócio e visão estratégica — não apenas código.
        </p>
      </section>

      {/* CTA FINAL */}
      <section className="py-24 px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Vamos construir algo grande juntos
        </h2>

        <p className="text-gray-400 mb-8">
          Disponível para oportunidades como Engenheiro de Dados, BI e Cloud.
        </p>

        <a
          href="https://www.linkedin.com"
          target="_blank"
          className="px-8 py-3 bg-white text-black rounded-full font-semibold hover:opacity-80 transition"
        >
          Falar comigo
        </a>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-10 text-gray-600 text-sm">
        © 2026 Wendril Ferreira
      </footer>
    </main>
  );
}