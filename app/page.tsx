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
    <main className="bg-black text-white">

      {/* HERO */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
        <p className="text-xs tracking-[0.4em] text-gray-500 mb-6">
          WENDRIL.AF
        </p>

        <h1 className="text-5xl md:text-7xl font-bold max-w-4xl leading-tight">
          Seus dados estão te atrasando.
        </h1>

        <p className="mt-6 text-gray-400 max-w-xl text-lg">
          Eu estruturo plataformas de dados que reduzem custo, eliminam retrabalho
          e aceleram decisões estratégicas.
        </p>

        <a
          href="#diagnostico"
          className="mt-10 px-8 py-3 bg-white text-black rounded-full font-medium hover:scale-105 transition"
        >
          Solicitar diagnóstico gratuito
        </a>
      </section>

      {/* PROVA */}
      <section className="py-24 text-center border-t border-gray-800">
        <p className="text-gray-500 mb-10">
          Experiência em ambientes críticos
        </p>

        <div className="flex flex-wrap justify-center gap-10">
          {clients.map((c, i) => (
            <span key={i} className="text-gray-500">
              {c}
            </span>
          ))}
        </div>
      </section>

      {/* CASES RESUMO */}
      <section className="py-32 text-center max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-16">
          Resultados reais que já entreguei
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {cases.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="border border-gray-800 p-6 rounded-2xl bg-black hover:bg-gray-900 transition"
            >
              <h3 className="font-semibold mb-4">{c.title}</h3>
              <p className="text-gray-400 text-sm">{c.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* DOR */}
      <section className="py-32 text-center max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10">
          Se você se identifica com isso, você tem um problema de dados
        </h2>

        <div className="space-y-6 text-gray-400">
          <p>• Relatórios lentos ou inconsistentes</p>
          <p>• Dados espalhados em múltiplas fontes</p>
          <p>• Falta de confiança nas informações</p>
          <p>• Alto custo operacional com dados</p>
        </div>
      </section>

      {/* SOLUÇÃO */}
      <section className="py-32 bg-gray-900 text-center px-6">
        <h2 className="text-3xl font-bold mb-12">
          Como eu resolvo isso
        </h2>

        <div className="max-w-4xl mx-auto text-gray-400 space-y-6">
          <p>Centralização de dados em arquitetura moderna</p>
          <p>Automação de pipelines</p>
          <p>Modelagem analítica</p>
          <p>Entrega pronta para Power BI</p>
        </div>
      </section>

      {/* CASE 1 */}
      <section ref={ref1} className="py-32 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">
          Plataforma de Dados Multisource
        </h2>

        <p className="text-gray-400 mb-12 max-w-3xl">
          Integração com Pentaho + Data Warehouse + Microsoft Fabric + Power BI.
        </p>

        <div className="relative">
          <div className="flex flex-wrap md:flex-nowrap justify-between gap-6 text-center">
            {["Fontes","ETL","DW","Data Marts","Fabric","Power BI"].map((step, i) => (
              <div key={i} className="w-40 p-4 bg-white/5 border border-gray-800 rounded-xl">
                {step}
              </div>
            ))}
          </div>

          <div className="hidden md:block absolute top-[80px] left-0 right-0 h-[2px] bg-gray-800" />

          <motion.div
            style={{ scaleX: progress1 }}
            className="hidden md:block absolute top-[80px] left-0 h-[2px] bg-white origin-left"
          />

          <motion.div
            style={{ x: x1 }}
            className="hidden md:flex absolute top-[70px]"
          >
            ➜
          </motion.div>
        </div>
      </section>

      {/* CASE 2 */}
      <section ref={ref2} className="py-32 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">
          Arquitetura Moderna com Microsoft Fabric
        </h2>

        <p className="text-gray-400 mb-12 max-w-3xl">
          Dataverse → Lakehouse → DW → Power BI.
        </p>

        <div className="relative">
          <div className="flex flex-wrap md:flex-nowrap justify-between gap-6 text-center">
            {["Dataverse","Ingestão","Lakehouse","DW","Power BI"].map((step, i) => (
              <div key={i} className="w-40 p-4 bg-white/5 border border-gray-800 rounded-xl">
                {step}
              </div>
            ))}
          </div>

          <div className="hidden md:block absolute top-[80px] left-0 right-0 h-[2px] bg-gray-800" />

          <motion.div
            style={{ scaleX: progress2 }}
            className="hidden md:block absolute top-[80px] left-0 h-[2px] bg-white origin-left"
          />

          <motion.div
            style={{ x: x2 }}
            className="hidden md:flex absolute top-[70px]"
          >
            ➜
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section id="diagnostico" className="py-32 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Diagnóstico gratuito da sua arquitetura de dados
        </h2>

        <p className="text-gray-400 mb-10 max-w-xl mx-auto">
          Em 30 minutos, identifico gargalos e oportunidades.
        </p>

        <a
          href="https://www.linkedin.com/in/wendril-ferreira/"
          target="_blank"
          className="px-10 py-4 bg-white text-black rounded-full font-medium hover:scale-105 transition"
        >
          Agendar conversa
        </a>
      </section>

      {/* URGÊNCIA 
      <section className="py-20 text-center text-gray-500">
        <p>Atendo um número limitado de projetos por mês.</p>
      </section>*/}

      <footer className="text-center py-10 text-gray-600 text-sm">
        © 2026 WENDRIL.AF
      </footer>

    </main>
  );
}