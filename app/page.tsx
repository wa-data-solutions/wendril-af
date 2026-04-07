"use client";

import { motion } from "framer-motion";

const clients = [
  "SEFAZ-RS",
  "DETRAN-SP",
  "CDHU-SP",
  "TJ-CE",
  "SESI SENAI-AP",
];

export default function Home() {
  return (
    <main className="bg-black text-white overflow-x-hidden">

      {/* HERO */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 relative">
        
        <div className="absolute w-[600px] h-[600px] bg-purple-600 opacity-20 blur-3xl rounded-full"></div>

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
          className="mt-6 text-gray-400 max-w-2xl z-10 text-lg"
        >
          Engenheiro de Dados especializado em Microsoft Fabric, SQL e arquiteturas modernas.
          Construo plataformas de dados escaláveis com foco em performance, governança e valor de negócio.
        </motion.p>

        <a
          href="#projects"
          className="mt-10 px-8 py-3 bg-white text-black rounded-full font-semibold hover:opacity-80 transition z-10"
        >
          Ver Projetos
        </a>
      </section>

      {/* SOBRE */}
      <section className="py-28 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Sobre</h2>

        <p className="text-gray-400 leading-relaxed text-lg">
          Experiência sólida em engenharia de dados, BI e arquitetura cloud, atuando no desenvolvimento
          de pipelines, modelagem de dados e soluções analíticas modernas. Especialista em Microsoft Fabric,
          SQL e integração de dados, com foco em escalabilidade, governança e entrega de valor ao negócio.
        </p>
      </section>

      {/* CLIENTES */}
      <section className="py-24 px-6 bg-gradient-to-b from-black to-gray-900 text-center">
        <h2 className="text-3xl font-bold mb-10">
          Empresas & Clientes
        </h2>

        <p className="text-gray-500 mb-12">
          Experiência em projetos de dados em organizações de grande porte
        </p>

        <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
          {clients.map((client, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.08 }}
              className="px-6 py-3 border border-gray-700 rounded-full text-sm tracking-widest text-gray-300 hover:border-white hover:text-white transition"
            >
              {client}
            </motion.div>
          ))}
        </div>
      </section>

      {/* STACK */}
      <section className="py-28">
        <h2 className="text-3xl font-bold text-center mb-16">
          Stack Tecnológica
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 px-6">

          <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800">
            <h3 className="font-bold mb-4 text-white">Data Platform</h3>
            <ul className="text-gray-400 space-y-2">
              <li>Microsoft Fabric</li>
              <li>Power BI</li>
              <li>Pentaho</li>
            </ul>
          </div>

          <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800">
            <h3 className="font-bold mb-4 text-white">Bancos de Dados</h3>
            <ul className="text-gray-400 space-y-2">
              <li>SQL (avançado)</li>
              <li>Oracle</li>
              <li>SQL Server</li>
              <li>PostgreSQL</li>
              <li>MariaDB</li>
              <li>Trino</li>
              <li>MongoDB</li>
            </ul>
          </div>

          <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800">
            <h3 className="font-bold mb-4 text-white">Engenharia & Cloud</h3>
            <ul className="text-gray-400 space-y-2">
              <li>ETL / ELT</li>
              <li>Data Warehouse</li>
              <li>Arquiteturas Cloud</li>
              <li>GitHub</li>
              <li>Metodologias Ágeis</li>
            </ul>
          </div>

        </div>
      </section>

      {/* PROJETOS */}
      <section id="projects" className="py-28 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-16 text-center">
          Projetos
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {[
            {
              title: "Plataforma de Dados com Microsoft Fabric",
              desc: "Arquitetura moderna com Lakehouse, ingestão e analytics integrado para BI.",
            },
            {
              title: "Data Warehouse Corporativo",
              desc: "Modelagem dimensional e otimização de consultas SQL para alta performance.",
            },
            {
              title: "Pipelines de Dados (ETL/ELT)",
              desc: "Integração e transformação de dados com foco em escalabilidade e confiabilidade.",
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

      {/* CTA */}
      <section className="py-28 px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Vamos transformar dados em valor
        </h2>

        <p className="text-gray-400 mb-8">
          Aberto a oportunidades como Engenheiro de Dados, BI e Arquitetura de Dados
        </p>

        <a
          href="https://www.linkedin.com/in/wendril-ferreira/"
          target="_blank"
          className="px-10 py-4 bg-white text-black rounded-full font-semibold hover:opacity-80 transition"
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