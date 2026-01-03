import React, { createContext, useContext, useState } from "react";

export type Language = "pt-BR" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const translations = {
  "pt-BR": {
    // Navigation
    "nav.home": "Home",
    "nav.features": "Features",
    "nav.wiki": "Wiki",
    "nav.donate": "Doação",

    // Home Page
    "home.title": "NEON LUA",
    "home.subtitle": "Minecraft 1.8.9 Scripting Revolution",
    "home.description":
      "Um plugin eficiente e otimizado para gerenciamento de scripts em Lua para servidores Minecraft 1.8.9. Desenvolvimento personalizável, API Bukkit simplificada e sistema de tags avançado.",
    "home.download": "Download",
    "home.documentation": "Documentação",
    "home.version": "Versão Suportada",
    "home.compatible": "Compatível",
    "home.fast": "Rápido",
    "home.mainFeatures": "Recursos Principais",
    "home.mainFeaturesDesc":
      "Tudo que você precisa para criar scripts avançados em Lua",
    "home.customDevelopment": "Desenvolvimento Personalizável",
    "home.customDevelopmentDesc":
      "Crie seus próprios módulos e scripts via arquivo Lua com total liberdade de customização.",
    "home.simplifiedAPI": "API Bukkit Simplificada",
    "home.simplifiedAPIDesc":
      "Acesso simplificado à API do Bukkit com funções otimizadas e bem documentadas.",
    "home.advancedTags": "Sistema de Tags Avançado",
    "home.advancedTagsDesc":
      "Tags <chave> e <chave/valor> para organizar e gerenciar seus scripts.",
    "home.lowResources": "Baixo Consumo de Recursos",
    "home.lowResourcesDesc":
      "Otimizado para máxima performance com mínimo impacto no servidor.",
    "home.fastResponse": "Tempos de Resposta Rápidos",
    "home.fastResponseDesc":
      "Execução ultra-rápida de scripts com cache inteligente de performance.",
    "home.cacheSystem": "Sistema de Cache",
    "home.cacheSystemDesc":
      "Cache inteligente de scripts para otimizar a execução repetida.",
    "home.performanceFirst": "Performance em Primeiro Lugar",
    "home.performanceFirstDesc":
      "NEON LUA foi desenvolvido com foco em eficiência máxima. Cada linha de código foi otimizada para oferecer o melhor desempenho possível sem comprometer a funcionalidade.",
    "home.ultraFast": "Execução Ultra-Rápida",
    "home.ultraFastDesc":
      "Tempos de resposta mínimos mesmo com múltiplos scripts",
    "home.efficientMemory": "Uso Eficiente de Memória",
    "home.efficientMemoryDesc":
      "Otimizado para não sobrecarregar seu servidor",
    "home.smartCache": "Cache Inteligente",
    "home.smartCacheDesc": "Sistema de cache que aprende e se adapta",
    "home.learnMore": "Saiba Mais",
    "home.ready": "Pronto para começar?",
    "home.readyDesc":
      "Baixe o NEON LUA agora e comece a criar scripts incríveis para seu servidor Minecraft",
    "home.downloadNow": "Download Agora",
    "home.viewGithub": "Ver no GitHub",
    "home.versionSupported": "Versão Suportada",
    "home.optimized": "Otimizado",
    "home.showcase": "Galeria de Imagens",
    "home.showcaseDesc": "Veja exemplos do NEON LUA em ação",
    "home.activeCommunity": "Comunidade Ativa",
    "home.activeCommunityDesc": "Junte-se a uma comunidade vibrante de desenvolvedores Minecraft que usam NEON LUA para criar scripts incríveis",
    "home.discordCommunity": "Comunidade Discord exclusiva",
    "home.scriptSharing": "Compartilhamento de scripts",
    "home.support": "Suporte e ajuda",
    "home.readyToStart": "Pronto para Começar?",
    "home.readyToStartDesc": "Baixe o NEON LUA agora e comece a criar scripts avançados para seu servidor Minecraft 1.8.9",
    "home.viewDocs": "Ver Documentação",
    "home.supportProject": "Apoiar o Projeto",

    // Features Page
    "features.title": "Recursos Completos",
    "features.subtitle":
      "Tudo que você precisa para criar scripts avançados em Lua para Minecraft",
    "features.scriptingLua": "Scripting em Lua",
    "features.scriptingLuaDesc":
      "Crie scripts personalizados com a linguagem Lua",
    "features.optimizedPerformance": "Performance Otimizada",
    "features.optimizedPerformanceDesc":
      "Execução ultra-rápida com mínimo impacto no servidor",
    "features.simplifiedBukkit": "API Bukkit Simplificada",
    "features.simplifiedBukkitDesc":
      "Acesso facilitado aos recursos do Bukkit",
    "features.tagsSystem": "Sistema de Tags",
    "features.tagsSystemDesc": "Organize e categorize seus scripts com tags",
    "features.advancedSecurity": "Segurança Avançada",
    "features.advancedSecurityDesc": "Proteção contra scripts maliciosos",
    "features.dataManagement": "Gerenciamento de Dados",
    "features.dataManagementDesc": "Armazene e recupere dados facilmente",
    "features.monitoring": "Monitoramento",
    "features.monitoringDesc":
      "Acompanhe o desempenho do seu servidor",
    "features.activeCommunity": "Comunidade Ativa",
    "features.activeCommunityDesc": "Suporte e recursos da comunidade",
    "features.completeDocs": "Documentação Completa",
    "features.completeDocsDesc": "Guias e referências abrangentes",
    "features.supportUs": "Apoiar o Projeto",
    "features.detailedFeatures": "Recursos em Destaque",
    "features.powerfulScripting": "Scripting Poderoso",
    "features.powerfulScriptingDesc":
      "Crie scripts complexos e personalizados usando Lua, uma linguagem leve e poderosa. Acesso completo à API do Bukkit com funções simplificadas.",
    "features.extremePerformance": "Performance Extrema",
    "features.extremePerformanceDesc":
      "Otimizado para máxima velocidade com mínimo consumo de recursos. Cache inteligente garante execução ultra-rápida.",
    "features.advancedTagsSystem": "Sistema de Tags Avançado",
    "features.advancedTagsSystemDesc":
      "Organize seus scripts com um sistema de tags flexível e poderoso. Filtre, priorize e gerencie seus scripts facilmente.",
    "features.comparison": "Comparação com Alternativas",
    "features.feature": "Recurso",
    "features.neonLua": "NEON LUA",
    "features.alternatives": "Alternativas",
    "features.scriptingLanguage": "Linguagem de Scripting",
    "features.luaComplete": "Lua (completo)",
    "features.variable": "Variável",
    "features.performanceOptimized": "Otimizada ⭐⭐⭐",
    "features.standard": "Padrão",
    "features.easyToUse": "Muito Fácil",
    "features.complex": "Complexo",
    "features.complete": "Completa",
    "features.limited": "Limitada",
    "features.communitySupport": "Suporte Comunitário",
    "features.active": "Ativo",
    "features.price": "Preço",
    "features.free": "Gratuito",
    "features.paidVariable": "Pago/Variável",
    "features.readyToExplore": "Pronto para Explorar?",
    "features.readyToExploreDesc":
      "Comece a usar NEON LUA hoje e descubra todo o potencial do scripting em Lua",
    "features.previous": "← Anterior",
    "features.next": "Próximo →",

    // Wiki Page
    "wiki.title": "Wiki & Documentação",
    "wiki.subtitle":
      "Guias completos, tutoriais e referência da API para NEON LUA",
    "wiki.search": "Buscar...",
    "wiki.articles": "artigos",
    "wiki.gettingStarted": "Começando",
    "wiki.gettingStartedDesc": "Guia de instalação e configuração inicial",
    "wiki.installation": "Instalação",
    "wiki.installationDesc": "Como instalar o NEON LUA no seu servidor",
    "wiki.initialConfig": "Configuração Inicial",
    "wiki.initialConfigDesc": "Configurar o NEON LUA para seu servidor",
    "wiki.scripting": "Scripting em Lua",
    "wiki.scriptingDesc": "Aprenda a criar scripts em Lua",
    "wiki.luaBasics": "Fundamentos de Lua",
    "wiki.luaBasicsDesc": "Conceitos básicos da linguagem Lua",
    "wiki.apiReference": "Referência da API",
    "wiki.apiReferenceDesc": "Funções e métodos disponíveis",
    "wiki.advanced": "Tópicos Avançados",
    "wiki.advancedDesc": "Recursos avançados e otimizações",
    "wiki.tagsSystem": "Sistema de Tags",
    "wiki.tagsSystemDesc": "Usando tags para organizar scripts",
    "wiki.performance": "Otimização de Performance",
    "wiki.performanceDesc": "Dicas para otimizar seus scripts",
    "wiki.troubleshooting": "Solução de Problemas",
    "wiki.troubleshootingDesc": "Respostas para problemas comuns",
    "wiki.commonIssues": "Problemas Comuns",
    "wiki.commonIssuesDesc": "Soluções para erros frequentes",

    // Donate Page
    "donate.title": "Apoie o NEON LUA",
    "donate.description":
      "Sua contribuição ajuda a manter o projeto ativo, seguro e com atualizações constantes. Cada doação é essencial para o desenvolvimento contínuo.",
    "donate.amount": "$3 USD / mês",
    "donate.amountDesc":
      "Apoie o desenvolvimento do NEON LUA no Patreon",
    "donate.supportPatreon": "Apoiar no Patreon",
    "donate.benefits": "Benefícios do Apoio",
    "donate.exclusiveAccess": "Acesso Exclusivo",
    "donate.exclusiveAccessDesc":
      "Comunidade Discord privada e suporte prioritário",
    "donate.development": "Desenvolvimento",
    "donate.developmentDesc":
      "Suas sugestões influenciam as próximas features",
    "donate.directImpact": "Impacto Direto",
    "donate.directImpactDesc":
      "Mantenha o projeto ativo e com atualizações",
    "donate.whySupport": "Por que Apoiar?",
    "donate.continuousDevelopment": "Desenvolvimento Contínuo",
    "donate.continuousDevelopmentDesc":
      "Novas features, correções de bugs e melhorias de performance",
    "donate.securityStability": "Segurança & Estabilidade",
    "donate.securityStabilityDesc":
      "Mantemos o plugin seguro e compatível com as versões mais recentes",
    "donate.activeCommunity": "Comunidade Ativa",
    "donate.activeCommunityDesc":
      "Suporte prioritário, acesso exclusivo e voz nas decisões do projeto",
    "donate.cantSupport": "Não pode apoiar agora? Sem problemas!",
    "donate.backToHome": "Voltar para Home",

    // 404 Page
    "notfound.title": "Página Não Encontrada",
    "notfound.description":
      "Parece que você se perdeu no espaço digital. A página que você está procurando não existe ou foi movida.",
    "notfound.backToHome": "Voltar para Home",
    "notfound.goToWiki": "Ir para Wiki",
    "notfound.error": "Se você acredita que isso é um erro, entre em contato conosco no Discord.",

    // Footer
    "footer.description": "Plugin de scripting em Lua para Minecraft 1.8.9",
    "footer.links": "Links",
    "footer.community": "Comunidade",
    "footer.legal": "Legal",
    "footer.privacy": "Privacidade",
    "footer.terms": "Termos",
    "footer.copyright": "© 2024 NEON LUA. Todos os direitos reservados.",
  },
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.features": "Features",
    "nav.wiki": "Wiki",
    "nav.donate": "Donate",

    // Home Page
    "home.title": "NEON LUA",
    "home.subtitle": "Minecraft 1.8.9 Scripting Revolution",
    "home.description":
      "An efficient and optimized plugin for managing Lua scripts on Minecraft 1.8.9 servers. Customizable development, simplified Bukkit API, and advanced tag system.",
    "home.download": "Download",
    "home.documentation": "Documentation",
    "home.version": "Supported Version",
    "home.compatible": "Compatible",
    "home.fast": "Fast",
    "home.mainFeatures": "Main Features",
    "home.mainFeaturesDesc":
      "Everything you need to create advanced Lua scripts",
    "home.customDevelopment": "Customizable Development",
    "home.customDevelopmentDesc":
      "Create your own modules and scripts via Lua file with complete customization freedom.",
    "home.simplifiedAPI": "Simplified Bukkit API",
    "home.simplifiedAPIDesc":
      "Simplified access to Bukkit API with optimized and well-documented functions.",
    "home.advancedTags": "Advanced Tag System",
    "home.advancedTagsDesc":
      "Tags <key> and <key/value> to organize and manage your scripts.",
    "home.lowResources": "Low Resource Consumption",
    "home.lowResourcesDesc":
      "Optimized for maximum performance with minimal server impact.",
    "home.fastResponse": "Fast Response Times",
    "home.fastResponseDesc":
      "Ultra-fast script execution with intelligent performance cache.",
    "home.cacheSystem": "Cache System",
    "home.cacheSystemDesc":
      "Intelligent script cache to optimize repeated execution.",
    "home.performanceFirst": "Performance First",
    "home.performanceFirstDesc":
      "NEON LUA was developed with a focus on maximum efficiency. Every line of code has been optimized to deliver the best possible performance without compromising functionality.",
    "home.ultraFast": "Ultra-Fast Execution",
    "home.ultraFastDesc":
      "Minimal response times even with multiple scripts",
    "home.efficientMemory": "Efficient Memory Usage",
    "home.efficientMemoryDesc":
      "Optimized to not overload your server",
    "home.smartCache": "Smart Cache",
    "home.smartCacheDesc": "Cache system that learns and adapts",
    "home.learnMore": "Learn More",
    "home.ready": "Ready to get started?",
    "home.readyDesc":
      "Download NEON LUA now and start creating amazing scripts for your Minecraft server",
    "home.downloadNow": "Download Now",
    "home.viewGithub": "View on GitHub",
    "home.versionSupported": "Supported Version",
    "home.optimized": "Optimized",
    "home.showcase": "Image Gallery",
    "home.showcaseDesc": "See NEON LUA in action",
    "home.activeCommunity": "Active Community",
    "home.activeCommunityDesc": "Join a vibrant community of Minecraft developers using NEON LUA to create amazing scripts",
    "home.discordCommunity": "Exclusive Discord Community",
    "home.scriptSharing": "Script Sharing",
    "home.support": "Support and Help",
    "home.readyToStart": "Ready to Start?",
    "home.readyToStartDesc": "Download NEON LUA now and start creating advanced scripts for your Minecraft 1.8.9 server",
    "home.viewDocs": "View Documentation",
    "home.supportProject": "Support the Project",

    // Features Page
    "features.title": "Complete Features",
    "features.subtitle":
      "Everything you need to create advanced Lua scripts for Minecraft",
    "features.scriptingLua": "Lua Scripting",
    "features.scriptingLuaDesc":
      "Create custom scripts with the Lua language",
    "features.optimizedPerformance": "Optimized Performance",
    "features.optimizedPerformanceDesc":
      "Ultra-fast execution with minimal server impact",
    "features.simplifiedBukkit": "Simplified Bukkit API",
    "features.simplifiedBukkitDesc":
      "Simplified access to Bukkit resources",
    "features.tagsSystem": "Tags System",
    "features.tagsSystemDesc": "Organize and categorize your scripts with tags",
    "features.advancedSecurity": "Advanced Security",
    "features.advancedSecurityDesc": "Protection against malicious scripts",
    "features.dataManagement": "Data Management",
    "features.dataManagementDesc": "Store and retrieve data easily",
    "features.monitoring": "Monitoring",
    "features.monitoringDesc":
      "Monitor your server performance",
    "features.activeCommunity": "Active Community",
    "features.activeCommunityDesc": "Community support and resources",
    "features.completeDocs": "Complete Documentation",
    "features.completeDocsDesc": "Comprehensive guides and references",
    "features.supportUs": "Support the Project",
    "features.detailedFeatures": "Featured Features",
    "features.powerfulScripting": "Powerful Scripting",
    "features.powerfulScriptingDesc":
      "Create complex and customized scripts using Lua, a lightweight and powerful language. Full access to Bukkit API with simplified functions.",
    "features.extremePerformance": "Extreme Performance",
    "features.extremePerformanceDesc":
      "Optimized for maximum speed with minimal resource consumption. Intelligent cache ensures ultra-fast execution.",
    "features.advancedTagsSystem": "Advanced Tags System",
    "features.advancedTagsSystemDesc":
      "Organize your scripts with a flexible and powerful tag system. Filter, prioritize and manage your scripts easily.",
    "features.comparison": "Comparison with Alternatives",
    "features.feature": "Feature",
    "features.neonLua": "NEON LUA",
    "features.alternatives": "Alternatives",
    "features.scriptingLanguage": "Scripting Language",
    "features.luaComplete": "Lua (complete)",
    "features.variable": "Variable",
    "features.performanceOptimized": "Optimized ⭐⭐⭐",
    "features.standard": "Standard",
    "features.easyToUse": "Very Easy",
    "features.complex": "Complex",
    "features.complete": "Complete",
    "features.limited": "Limited",
    "features.communitySupport": "Community Support",
    "features.active": "Active",
    "features.price": "Price",
    "features.free": "Free",
    "features.paidVariable": "Paid/Variable",
    "features.readyToExplore": "Ready to Explore?",
    "features.readyToExploreDesc":
      "Start using NEON LUA today and discover all the potential of Lua scripting",
    "features.previous": "← Previous",
    "features.next": "Next →",

    // Wiki Page
    "wiki.title": "Wiki & Documentation",
    "wiki.subtitle":
      "Complete guides, tutorials and API reference for NEON LUA",
    "wiki.search": "Search...",
    "wiki.articles": "articles",
    "wiki.gettingStarted": "Getting Started",
    "wiki.gettingStartedDesc": "Installation and initial setup guide",
    "wiki.installation": "Installation",
    "wiki.installationDesc": "How to install NEON LUA on your server",
    "wiki.initialConfig": "Initial Configuration",
    "wiki.initialConfigDesc": "Configure NEON LUA for your server",
    "wiki.scripting": "Lua Scripting",
    "wiki.scriptingDesc": "Learn how to create Lua scripts",
    "wiki.luaBasics": "Lua Basics",
    "wiki.luaBasicsDesc": "Basic concepts of the Lua language",
    "wiki.apiReference": "API Reference",
    "wiki.apiReferenceDesc": "Available functions and methods",
    "wiki.advanced": "Advanced Topics",
    "wiki.advancedDesc": "Advanced features and optimizations",
    "wiki.tagsSystem": "Tags System",
    "wiki.tagsSystemDesc": "Using tags to organize scripts",
    "wiki.performance": "Performance Optimization",
    "wiki.performanceDesc": "Tips to optimize your scripts",
    "wiki.troubleshooting": "Troubleshooting",
    "wiki.troubleshootingDesc": "Answers to common problems",
    "wiki.commonIssues": "Common Issues",
    "wiki.commonIssuesDesc": "Solutions for frequent errors",

    // Donate Page
    "donate.title": "Support NEON LUA",
    "donate.description":
      "Your contribution helps keep the project active, secure and with constant updates. Every donation is essential for continuous development.",
    "donate.amount": "$3 USD / month",
    "donate.amountDesc":
      "Support NEON LUA development on Patreon",
    "donate.supportPatreon": "Support on Patreon",
    "donate.benefits": "Support Benefits",
    "donate.exclusiveAccess": "Exclusive Access",
    "donate.exclusiveAccessDesc":
      "Private Discord community and priority support",
    "donate.development": "Development",
    "donate.developmentDesc":
      "Your suggestions influence the next features",
    "donate.directImpact": "Direct Impact",
    "donate.directImpactDesc":
      "Keep the project active and with updates",
    "donate.whySupport": "Why Support?",
    "donate.continuousDevelopment": "Continuous Development",
    "donate.continuousDevelopmentDesc":
      "New features, bug fixes and performance improvements",
    "donate.securityStability": "Security & Stability",
    "donate.securityStabilityDesc":
      "We keep the plugin secure and compatible with the latest versions",
    "donate.activeCommunity": "Active Community",
    "donate.activeCommunityDesc":
      "Priority support, exclusive access and voice in project decisions",
    "donate.cantSupport": "Can't support now? No problem!",
    "donate.backToHome": "Back to Home",

    // 404 Page
    "notfound.title": "Page Not Found",
    "notfound.description":
      "It looks like you got lost in digital space. The page you are looking for does not exist or has been moved.",
    "notfound.backToHome": "Back to Home",
    "notfound.goToWiki": "Go to Wiki",
    "notfound.error": "If you believe this is an error, please contact us on Discord.",

    // Footer
    "footer.description": "Lua scripting plugin for Minecraft 1.8.9",
    "footer.links": "Links",
    "footer.community": "Community",
    "footer.legal": "Legal",
    "footer.privacy": "Privacy",
    "footer.terms": "Terms",
    "footer.copyright": "© 2024 NEON LUA. All rights reserved.",
  },
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("pt-BR");

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)[Language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
