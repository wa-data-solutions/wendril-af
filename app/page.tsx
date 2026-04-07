"use client";

import { motion } from "framer-motion";

const clients = [
  "SEFAZ-RS",
  "DETRAN-SP",
  "CDHU-SP",
  "TJ-CE",
  "SESI SENAI-AP",
];

const cases = [
  {
    title: "Plataforma de Dados com Microsoft Fabric",
    problem:
      "Dados descentralizados e baixa confiabilidade para tomada de decisão.",
    solution:
      "Construção de arquitetura Lakehouse com pipelines escaláveis e governança.",
    impact:
      "Melhoria na confiabilidade dos dados e redução do tempo de análise.",
  },
  {
    title: "Data Warehouse Corporativo",
    problem:
      "Consultas lentas e falta de padronização de dados.",
    solution:
      "Modelagem dimensional e otimização SQL em múltiplos SGBDs.",
    impact:
      "Aumento de performance e padronização analítica.",
  },
  {
    title: "Pipelines de Integração de Dados",
    problem:
      "Processos manuais e inconsistência de dados.",
    solution:
      "Automação de pipelines ETL/ELT com validação e monitoramento.",
    impact:
      "Maior confiabilidade e escalabilidade no fluxo de dados.",
  },
];

export default function Home() {
  return (
    <main className="bg-black text-white">

      {/* HERO */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-bold max-w-4xl"
        >
          Transformo dados em vantagem competitiva
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 text-gray-400 max-w-2xl text-lg"
        >
          Engenheiro de Dados especializado em Microsoft Fabric, SQL e arquiteturas modernas.
          Construo plataformas de dados escaláveis que geram impacto real no negócio.
        </motion.p>

        <a
          href="#cases"
          className="mt-10 px-8 py-3 bg-white text-black rounded-full font-semibold"
        >
          Ver Cases
        </a>
      </section>

      {/* CLIENTES */}
      <section className="py-20 text-center border-t border-gray-800">
        <p className="text-gray-500 mb-8 text-sm tracking-widest">
          TRUSTED BY
        </p>

        <div className="flex flex-wrap justify-center gap-6 text-gray-400 text-sm tracking-widest">
          {clients.map((c, i) => (
            <span key={i}>{c}</span>
          ))}
        </div>
      </section>

      {/* CASES */}
      <section id="cases" className="py-28 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-16 text-center">
          Cases
        </h2>

        <div className="space-y-16">
          {cases.map((c, i) => (
            <div key={i} className="grid md:grid-cols-3 gap-6">

              <div>
                <h3 className="font-bold text-white">{c.title}</h3>
              </div>

              <div className="text-gray-400 text-sm">
                <p className="mb-2"><strong>Problema:</strong> {c.problem}</p>
                <p><strong>Solução:</strong> {c.solution}</p>
              </div>

              <div className="text-gray-300 text-sm">
                <p><strong>Impacto:</strong> {c.impact}</p>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* STACK */}
      <section className="py-28 border-t border-gray-800 text-center">
        <h2 className="text-3xl font-bold mb-10">Stack</h2>

        <p className="text-gray-400 max-w-3xl mx-auto">
          Microsoft Fabric, SQL, Oracle, SQL Server, PostgreSQL, MariaDB, Trino,
          MongoDB, Power BI, Pentaho, ETL/ELT, Data Warehouse, Cloud Architecture,
          GitHub e metodologias ágeis.
        </p>
      </section>

      {/* CTA */}
      <section className="py-28 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Vamos construir algo de alto impacto
        </h2>

        <p className="text-gray-400 mb-8">
          Disponível para projetos e oportunidades em engenharia de dados
        </p>

        <a
          href="https://www.linkedin.com/in/wendril-ferreira/"
          target="_blank"
          className="px-10 py-4 bg-white text-black rounded-full font-semibold"
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