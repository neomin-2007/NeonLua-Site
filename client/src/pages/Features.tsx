import { Link } from "wouter";
import {
  Code,
  Zap,
  Rocket,
  BookOpen,
  Github,
  ArrowRight,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

/**
 * NEON LUA - Features Page
 * Design: Cyberpunk Neon Futurista
 * Showcasing main features and capabilities
 */

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
  details: string[];
  color: string;
}

export default function Features() {
  const { t } = useLanguage();

  const features: Feature[] = [
    {
      title: t("features.scriptingLua"),
      description: t("features.scriptingLuaDesc"),
      icon: <Code size={48} />,
      color: "text-primary",
      details: [
        "Sintaxe Lua completa suportada",
        "Acesso total à API Bukkit",
        "Bibliotecas padrão Lua incluídas",
        "Debugging e logging integrados",
      ],
    },
    {
      title: t("features.optimizedPerformance"),
      description: t("features.optimizedPerformanceDesc"),
      icon: <Rocket size={48} />,
      color: "text-accent",
      details: [
        "Cache inteligente de scripts",
        "Compilação JIT para velocidade",
        "Gerenciamento de memória eficiente",
        "Monitoramento em tempo real",
      ],
    },
    {
      title: t("features.simplifiedBukkit"),
      description: t("features.simplifiedBukkitDesc"),
      icon: <Zap size={48} />,
      color: "text-green-400",
      details: [
        "Funções wrapper simplificadas",
        "Documentação completa",
        "Exemplos de código prontos",
        "Suporte a eventos customizados",
      ],
    },
    {
      title: t("features.completeDocs"),
      description: t("features.completeDocsDesc"),
      icon: <BookOpen size={48} />,
      color: "text-primary",
      details: [
        "Guias passo a passo",
        "Referência completa da API",
        "Tutoriais interativos",
        "Comunidade ativa para suporte",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 border-b border-border overflow-hidden">
        <div className="absolute inset-0 tech-grid opacity-20 pointer-events-none" />

        <div className="container relative z-10">
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold">
              {t("features.title")}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              {t("features.subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="relative py-20 md:py-32 border-b border-border">
        <div className="absolute inset-0 tech-grid opacity-20 pointer-events-none" />
        <div className="container relative z-10">
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="group p-8 rounded-lg bg-card border border-border hover:neon-border transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 space-y-6"
              >
                {/* Icon */}
                <div className={`${feature.color} group-hover:animate-float transition-all`}>
                  {feature.icon}
                </div>

                {/* Title and Description */}
                <div className="space-y-3">
                  <h2 className="text-3xl font-bold">{feature.title}</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Details List */}
                <ul className="space-y-3">
                  {feature.details.map((detail, detailIdx) => (
                    <li key={detailIdx} className="flex items-start gap-3">
                      <span className={`${feature.color} text-xl mt-1`}>✓</span>
                      <span className="text-muted-foreground">{detail}</span>
                    </li>
                  ))}
                </ul>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0" />

                {/* Learn More Link */}
                <Link href="/wiki">
                  <button className="flex items-center gap-2 text-primary hover:text-accent transition-colors font-semibold group/link">
                    {t("home.learnMore")}
                    <ArrowRight size={18} className="group-hover/link:translate-x-1 transition-transform" />
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Highlights */}
      <section className="relative py-20 md:py-32 border-b border-border">
        <div className="absolute inset-0 tech-grid opacity-20 pointer-events-none" />
        <div className="container relative z-10">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">
              Por que escolher NEON LUA?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Desenvolvido com foco em eficiência, performance e facilidade de uso
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-lg bg-card border border-border space-y-4">
              <div className="text-4xl font-bold text-primary">⚡</div>
              <h3 className="text-2xl font-bold">Ultra Rápido</h3>
              <p className="text-muted-foreground">
                Execução de scripts com latência mínima, otimizado para máxima performance
              </p>
            </div>

            <div className="p-8 rounded-lg bg-card border border-border space-y-4">
              <div className="text-4xl font-bold text-accent">🎯</div>
              <h3 className="text-2xl font-bold">Fácil de Usar</h3>
              <p className="text-muted-foreground">
                API simplificada e bem documentada, perfeita para iniciantes e experts
              </p>
            </div>

            <div className="p-8 rounded-lg bg-card border border-border space-y-4">
              <div className="text-4xl font-bold text-green-400">🛡️</div>
              <h3 className="text-2xl font-bold">Confiável</h3>
              <p className="text-muted-foreground">
                Testado em produção, com suporte ativo e atualizações constantes
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Code Example Section */}
      <section className="relative py-20 md:py-32 border-b border-border">
        <div className="absolute inset-0 tech-grid opacity-20 pointer-events-none" />
        <div className="container relative z-10">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl md:text-5xl font-bold">
              Comece em Minutos
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Criar um script em NEON LUA é simples e direto
            </p>
          </div>

          <div className="max-w-2xl mx-auto p-8 rounded-lg bg-card border border-border">
            <pre className="text-sm md:text-base overflow-x-auto">
              <code className="text-primary">
{`-- Seu primeiro script em NEON LUA
local plugin = require("neonlua")

-- Registrar um comando
plugin.command("hello", function(player)
  player:sendMessage("§bOlá " .. player:getName() .. "!")
end)

-- Registrar um evento
plugin.on("PlayerJoin", function(event)
  event.player:sendMessage("§eBem-vindo!")
end)`}
              </code>
            </pre>
          </div>

          <div className="text-center pt-8">
            <Link href="/wiki">
              <Button className="bg-primary text-primary-foreground hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 px-8 py-6 text-lg gap-2">
                <BookOpen size={20} />
                Ver Documentação Completa
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 md:py-32 border-b border-border">
        <div className="absolute inset-0 tech-grid opacity-20 pointer-events-none" />
        <div className="container relative z-10 text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">
            Pronto para começar?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Baixe o NEON LUA agora e comece a criar scripts incríveis para seu servidor Minecraft 1.8.9
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a href="https://github.com/neomin-2007/NeonLua/releases" target="_blank" rel="noopener noreferrer">
              <Button className="w-full sm:w-auto bg-primary text-primary-foreground hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 px-8 py-6 text-lg gap-2">
                <Zap size={20} />
                Download Agora
              </Button>
            </a>
            <a href="https://github.com/neomin-2007/NeonLua" target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                className="w-full sm:w-auto neon-border text-primary hover:bg-primary/10 transition-all duration-300 px-8 py-6 text-lg gap-2"
              >
                <Github size={20} />
                GitHub
              </Button>
            </a>
            <Link href="/donate">
              <Button
                variant="outline"
                className="w-full sm:w-auto neon-border text-accent hover:bg-accent/10 transition-all duration-300 px-8 py-6 text-lg"
              >
                Apoiar o Projeto
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 bg-card/50">
        <div className="container text-center text-sm text-muted-foreground">
          <p>{t("footer.copyright")}</p>
        </div>
      </footer>
    </div>
  );
}
