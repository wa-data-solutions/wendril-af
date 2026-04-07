"use client";

import { motion } from "framer-motion";

const clients = [
  "CAU-SP",
  "CDHU-SP",
  "DETRAN-SP",
  "SEFAZ-RS",
  "SESI SENAI-AP",
  "TJ-CE",
];

export default function Home() {
  return (
    <main className="bg-black text-white">

      {/* HERO */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">

        <p className="text-xs tracking-[0.4em] text-gray-500 mb-6">
          WENDRIL.AF
        </p>

        <h1 className="text-5xl md:text-7xl font-bold max-w-4xl">
          Seus dados estão te atrasando.
        </h1>

        <p className="mt-6 text-gray-400 max-w-xl text-lg">
          Eu estruturo plataformas de dados que reduzem custo, eliminam retrabalho
          e aceleram decisões estratégicas.
        </p>

        <a
          href="#diagnostico"
          className="mt-10 px-8 py-3 bg-white text-black rounded-full font-medium"
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
          <p>Automação de pipelines e ingestão</p>
          <p>Modelagem analítica para tomada de decisão</p>
          <p>Entrega pronta para consumo no Power BI</p>
        </div>

      </section>

      {/* CTA PRINCIPAL */}
      <section id="diagnostico" className="py-32 text-center">

        <h2 className="text-4xl font-bold mb-6">
          Diagnóstico gratuito da sua arquitetura de dados
        </h2>

        <p className="text-gray-400 mb-10 max-w-xl mx-auto">
          Em uma conversa de 30 minutos, vou identificar gargalos, riscos e oportunidades
          na sua plataforma de dados.
        </p>

        <a
          href="https://cal.com" // depois você troca
          target="_blank"
          className="px-10 py-4 bg-white text-black rounded-full font-medium"
        >
          Agendar conversa
        </a>

      </section>

      {/* URGÊNCIA */}
      <section className="py-20 text-center text-gray-500">
        <p>Atendo um número limitado de projetos por mês.</p>
      </section>

      <footer className="text-center py-10 text-gray-600 text-sm">
        © 2026 WENDRIL.AF
      </footer>

    </main>
  );
}