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
    title: "Plataforma Moderna com Microsoft Fabric",
    problem: "Dados descentralizados e baixa confiabilidade analítica.",
    solution: "Arquitetura Lakehouse com ingestão, transformação e consumo via BI.",
    impact: "Centralização dos dados e aceleração na tomada de decisão.",
  },
];

export default function Home() {
  return (
    <main className="bg-black text-white">

      {/* HERO */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-lg tracking-widest text-gray-400 mb-4"
        >
          WENDRIL ARAUJO FERREIRA
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-bold max-w-4xl"
        >
          Transformo dados em vantagem competitiva
        </motion.h2>

        <p className="mt-6 text-gray-400 max-w-2xl text-lg">
          Consultoria em Engenharia de Dados, Microsoft Fabric e SQL.
          Crio plataformas de dados escaláveis com foco em performance,
          governança e impacto real no negócio.
        </p>

        <a
          href="#cases"
          className="mt-10 px-8 py-3 bg-white text-black rounded-full font-semibold"
        >
          Ver Cases
        </a>

      </section>

      {/* CLIENTES */}
      <section className="py-20 text-center border-t border-gray-800">
        <p className="text-gray-500 mb-6 text-sm tracking-widest">
          CLIENTES E EXPERIÊNCIA
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
          Case em Destaque
        </h2>

        {cases.map((c, i) => (
          <div key={i} className="space-y-10">

            {/* TEXTO */}
            <div className="grid md:grid-cols-3 gap-6">

              <div>
                <h3 className="font-bold text-white">{c.title}</h3>
              </div>

              <div className="text-gray-400 text-sm">
                <p><strong>Problema:</strong> {c.problem}</p>
                <p className="mt-2"><strong>Solução:</strong> {c.solution}</p>
              </div>

              <div className="text-gray-300 text-sm">
                <p><strong>Impacto:</strong> {c.impact}</p>
              </div>

            </div>

            {/* ARQUITETURA VISUAL */}
            <div className="mt-10 p-6 border border-gray-800 rounded-2xl bg-gray-900">

              <p className="text-gray-500 text-sm mb-6 text-center">
                Arquitetura da Solução
              </p>

              <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center text-sm">

                <div className="p-4 border border-gray-700 rounded-lg">
                  Fontes de Dados
                  <br />
                  (APIs, DBs)
                </div>

                <div className="text-gray-500">→</div>

                <div className="p-4 border border-gray-700 rounded-lg">
                  Ingestão
                  <br />
                  (ETL / Fabric)
                </div>

                <div className="text-gray-500">→</div>

                <div className="p-4 border border-gray-700 rounded-lg">
                  Lakehouse
                </div>

                <div className="text-gray-500">→</div>

                <div className="p-4 border border-gray-700 rounded-lg">
                  Modelagem
                  <br />
                  (SQL / DW)
                </div>

                <div className="text-gray-500">→</div>

                <div className="p-4 border border-gray-700 rounded-lg">
                  Power BI
                </div>

              </div>

            </div>

          </div>
        ))}

      </section>

      {/* STACK */}
      <section className="py-28 border-t border-gray-800 text-center">
        <h2 className="text-3xl font-bold mb-10">Stack Tecnológica</h2>

        <p className="text-gray-400 max-w-3xl mx-auto leading-relaxed">
          Microsoft Fabric, SQL, Oracle, SQL Server, PostgreSQL, MariaDB, Trino,
          MongoDB, Power BI, Pentaho, Data Warehouse, ETL/ELT, Arquiteturas Cloud,
          GitHub e metodologias ágeis.
        </p>
      </section>

      {/* CTA */}
      <section className="py-28 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Vamos construir sua plataforma de dados
        </h2>

        <p className="text-gray-400 mb-8">
          Consultoria em Engenharia de Dados, BI e Arquitetura Cloud
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