"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="bg-black text-white">

      {/* HERO */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-5xl md:text-7xl font-bold">
          Wendril Ferreira
        </h1>

        <p className="mt-6 text-gray-400 max-w-2xl">
          Engenheiro de Dados especializado em Microsoft Fabric, SQL e arquiteturas modernas de dados.
        </p>

        <a
          href="#projects"
          className="mt-8 border px-6 py-3 rounded-full hover:bg-white hover:text-black transition"
        >
          Ver Projetos
        </a>
      </section>

      {/* SOBRE */}
      <section className="py-24 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Sobre</h2>
        <p className="text-gray-400 leading-relaxed">
          Atuação em engenharia de dados, BI e arquitetura cloud, com foco em performance,
          governança e escalabilidade utilizando Microsoft Fabric e SQL.
        </p>
      </section>

      {/* CLIENTES */}
      <section className="py-24 px-6 bg-gray-900">
        <h2 className="text-3xl font-bold text-center mb-12">
          Empresas & Clientes
        </h2>

        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-8 items-center">

          <img src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Brasao_do_Rio_Grande_do_Sul.svg" className="mx-auto h-16 opacity-80 hover:opacity-100" />

          <img src="https://upload.wikimedia.org/wikipedia/commons/5/5b/Detran-SP_logo.png" className="mx-auto h-16 opacity-80 hover:opacity-100" />

          <img src="https://upload.wikimedia.org/wikipedia/commons/3/3f/CDHU_logo.png" className="mx-auto h-16 opacity-80 hover:opacity-100" />

          <img src="https://upload.wikimedia.org/wikipedia/commons/2/2b/Tribunal_de_Justi%C3%A7a_do_Cear%C3%A1_logo.png" className="mx-auto h-16 opacity-80 hover:opacity-100" />

          <img src="https://upload.wikimedia.org/wikipedia/commons/8/8f/Sesi_Senai_logo.png" className="mx-auto h-16 opacity-80 hover:opacity-100" />

        </div>

        <p className="text-center text-gray-500 text-sm mt-6">
          Experiência em projetos de dados em órgãos públicos e instituições de grande porte.
        </p>
      </section>

      {/* STACK */}
      <section className="py-24">
        <h2 className="text-3xl font-bold text-center mb-12">Stack Tecnológica</h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">

          <div>
            <h3 className="font-bold mb-4">Data Platform</h3>
            <ul className="text-gray-400 space-y-2">
              <li>Microsoft Fabric</li>
              <li>Power BI</li>
              <li>Pentaho</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Bancos de Dados</h3>
            <ul className="text-gray-400 space-y-2">
              <li>SQL</li>
              <li>Oracle</li>
              <li>SQL Server</li>
              <li>PostgreSQL</li>
              <li>MariaDB</li>
              <li>Trino</li>
              <li>MongoDB</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Engenharia & Cloud</h3>
            <ul className="text-gray-400 space-y-2">
              <li>ETL / ELT</li>
              <li>Data Warehouse</li>
              <li>Arquitetura Cloud</li>
              <li>GitHub</li>
              <li>Metodologias Ágeis</li>
            </ul>
          </div>

        </div>
      </section>

      {/* PROJETOS */}
      <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12">Projetos</h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="p-6 border border-gray-800 rounded-2xl">
            <h3 className="text-xl font-bold mb-3">Microsoft Fabric</h3>
            <p className="text-gray-400 text-sm">
              Plataforma de dados com Lakehouse e analytics integrado.
            </p>
          </div>

          <div className="p-6 border border-gray-800 rounded-2xl">
            <h3 className="text-xl font-bold mb-3">Data Warehouse</h3>
            <p className="text-gray-400 text-sm">
              Modelagem dimensional e otimização SQL.
            </p>
          </div>

          <div className="p-6 border border-gray-800 rounded-2xl">
            <h3 className="text-xl font-bold mb-3">Pipelines ETL</h3>
            <p className="text-gray-400 text-sm">
              Integração e transformação de dados escaláveis.
            </p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Vamos transformar dados em valor
        </h2>

        <a
          href="https://www.linkedin.com/in/wendril-ferreira/"
          target="_blank"
          className="px-8 py-3 bg-white text-black rounded-full"
        >
          Falar comigo
        </a>
      </section>

      <footer className="text-center py-10 text-gray-600 text-sm">
        © 2026 Wendril Ferreira
      </footer>

    </main>
  );
}