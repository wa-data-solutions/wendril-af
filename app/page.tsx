"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const clients = [
  "CAU-SP",
  "CDHU-SP",
  "DETRAN-SP",
  "SEFAZ-RS",
  "SESI SENAI-AP",
  "TJ-CE",
];

const cases = [
  {
    title: "Redução de 70% no tempo de geração de relatórios",
    description:
      "Reestruturação completa da pipeline de dados, eliminando gargalos e reduzindo drasticamente o tempo de processamento.",
  },
  {
    title: "Centralização de múltiplas fontes de dados",
    description:
      "Integração de sistemas distintos em uma única arquitetura confiável e escalável.",
  },
  {
    title: "Tomada de decisão em tempo real",
    description:
      "Implantação de dashboards analíticos que permitiram decisões estratégicas imediatas.",
  },
];

export default function Home() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);

  const { scrollYProgress: progress1 } = useScroll({
    target: ref1,
    offset: ["start center", "end center"],
  });

  const { scrollYProgress: progress2 } = useScroll({
    target: ref2,
    offset: ["start center", "end center"],
  });

  const x1 = useTransform(progress1, [0, 1], ["0%", "100%"]);
  const x2 = useTransform(progress2, [0, 1], ["0%", "100%"]);

  return (
    <main className="bg-black text-white overflow-x-hidden">
      {/* HERO */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
        <p className="text-xs tracking-[0.4em] text-gray-500 mb-6">
          WENDRIL ARAUJO FERREIRA
        </p>

        <h1 className="text-5xl md:text-7xl font-bold max-w-4xl leading-tight">
          Seus dados estão te atrasando.
        </h1>

        <p className="mt-6 text-gray-400 max-w-xl text-lg leading-relaxed">
          Engenheiro de Dados especializado em Microsoft Fabric, SQL e pipelines modernos.
          Estruturo plataformas que reduzem custo, eliminam gargalos e aceleram decisões.
        </p>

        <a
          href="#diagnostico"
          className="mt-10 px-8 py-3 bg-white text-black rounded-full font-medium hover:scale-105 transition"
        >
          Solicitar diagnóstico gratuito
        </a>
      </section>

      {/* CLIENTES */}
      <section className="py-24 text-center border-t border-gray-800">
        <p className="text-gray-500 mb-4 tracking-[0.2em] text-sm">
          EXPERIÊNCIA EM AMBIENTES CRÍTICOS
        </p>

        <h2 className="text-2xl md:text-3xl font-semibold mb-10">
          Empresas por onde atuei
        </h2>

        <div className="flex flex-wrap justify-center gap-10">
          {clients.map((c) => (
            <span
              key={c}
              className="text-gray-500 hover:text-white transition"
            >
              {c}
            </span>
          ))}
        </div>
      </section>

      {/* STACK */}
      <section className="py-32 max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
          Stack Tecnológica
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="border border-gray-800 rounded-2xl p-6 bg-white/[0.02] hover:bg-white/[0.04] transition">
            <h3 className="text-white mb-4 font-semibold text-lg">
              Data Engineering
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Pentaho (PDI), Apache Airflow, Apache Spark, ETL/ELT, pipelines de dados
            </p>
          </div>

          <div className="border border-gray-800 rounded-2xl p-6 bg-white/[0.02] hover:bg-white/[0.04] transition">
            <h3 className="text-white mb-4 font-semibold text-lg">
              Bancos de Dados
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Oracle, PostgreSQL, SQL Server, MongoDB
            </p>
          </div>

          <div className="border border-gray-800 rounded-2xl p-6 bg-white/[0.02] hover:bg-white/[0.04] transition">
            <h3 className="text-white mb-4 font-semibold text-lg">
              Analytics & BI
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Power BI, Microsoft Fabric, Dataflows, Lakehouse
            </p>
          </div>

          <div className="border border-gray-800 rounded-2xl p-6 bg-white/[0.02] hover:bg-white/[0.04] transition">
            <h3 className="text-white mb-4 font-semibold text-lg">
              Arquitetura de Dados
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Data Warehouse, Star Schema, Snowflake, Lakehouse
            </p>
          </div>

          <div className="border border-gray-800 rounded-2xl p-6 bg-white/[0.02] hover:bg-white/[0.04] transition">
            <h3 className="text-white mb-4 font-semibold text-lg">
              Observabilidade
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Datadog, monitoramento de pipelines
            </p>
          </div>

          <div className="border border-gray-800 rounded-2xl p-6 bg-white/[0.02] hover:bg-white/[0.04] transition">
            <h3 className="text-white mb-4 font-semibold text-lg">
              Cloud & Dev
            </h3>
            <p className="text-gray-400 leading-relaxed">
              AWS, Azure, GCP, Docker, GitHub, metodologias ágeis
            </p>
          </div>
        </div>
      </section>

      {/* CASES */}
      <section className="py-32 text-center max-w-5xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-16">
          Cases de sucesso e resultados entregues
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {cases.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="border border-gray-800 p-6 rounded-2xl hover:bg-gray-900 transition"
            >
              <h3 className="font-semibold mb-4">{c.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {c.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CASE 1 */}
      <section ref={ref1} className="py-32 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">
          Plataforma de Dados Multisource
        </h2>

        <div className="flex flex-wrap md:flex-nowrap items-center justify-between gap-4 text-center">
          {["Fontes", "ETL", "DW", "Data Marts", "Fabric", "Power BI"].map(
            (step, i, arr) => (
              <div key={step} className="flex items-center gap-4">
                <div className="w-40 p-4 bg-white/5 border border-gray-800 rounded-xl">
                  {step}
                </div>
                {i < arr.length - 1 && (
                  <span className="text-gray-500 text-xl">→</span>
                )}
              </div>
            )
          )}
        </div>
      </section>

      {/* CASE 2 */}
      <section ref={ref2} className="py-32 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">
          Arquitetura Moderna com Microsoft Fabric
        </h2>

        <div className="flex flex-wrap md:flex-nowrap items-center justify-between gap-4 text-center">
          {["Dataverse", "Ingestão", "Lakehouse", "DW", "Power BI"].map(
            (step, i, arr) => (
              <div key={step} className="flex items-center gap-4">
                <div className="w-40 p-4 bg-white/5 border border-gray-800 rounded-xl">
                  {step}
                </div>
                {i < arr.length - 1 && (
                  <span className="text-gray-500 text-xl">→</span>
                )}
              </div>
            )
          )}
        </div>
      </section>

      {/* CTA */}
      <section id="diagnostico" className="py-32 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Diagnóstico gratuito da sua arquitetura de dados
        </h2>

        <p className="text-gray-400 mb-10 max-w-xl mx-auto">
          Em uma conversa rápida, identifico gargalos e oportunidades para sua operação de dados evoluir.
        </p>

        <a
          href="https://www.linkedin.com/in/wendril-ferreira/"
          target="_blank"
          rel="noreferrer"
          className="px-10 py-4 bg-white text-black rounded-full hover:scale-105 transition"
        >
          Agendar conversa
        </a>
      </section>

      <footer className="text-center py-10 text-gray-600 text-sm">
        © 2026 WENDRIL ARAUJO FERREIRA
      </footer>
    </main>
  );
}