import { Link } from "wouter";
import {
  Code,
  Zap,
  Rocket,
  Download,
  Github,
  BookOpen,
  Users,
  ExternalLink,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import ImageCarousel from "@/components/ImageCarousel";
import DiscordWidget from "@/components/DiscordWidget";
import { useGitHubReleases } from "@/hooks/useGitHubReleases";
import { useState, useEffect } from "react";

/**
 * NEON LUA - Home Page
 * Design: Cyberpunk Neon Futurista
 * Landing page com hero section, features e carrossel de imagens
 */

const GITHUB_OWNER = "neomin-2007";
const GITHUB_REPO = "NeonLua";

export default function Home() {
  const { t } = useLanguage();
  const [carouselImages, setCarouselImages] = useState<string[]>([]);
  const { getLatestJarUrl, loading: releasesLoading } = useGitHubReleases(
    GITHUB_OWNER,
    GITHUB_REPO
  );

  const latestJarUrl = getLatestJarUrl();
  const githubUrl = `https://github.com/${GITHUB_OWNER}/${GITHUB_REPO}`;
  const downloadUrl = latestJarUrl || `${githubUrl}/releases`;

  // Carregar imagens da pasta public/images
  useEffect(() => {
    const loadImages = async () => {
      try {
        // Lista de imagens que você pode ter na pasta /images
        const imageList = [
          "/images/hero-banner.png",
          "/images/features-bg.png",
          "/images/performance-visual.png",
          "/images/code-pattern.png",
        ];

        // Verificar quais imagens existem
        const validImages: string[] = [];
        for (const img of imageList) {
          try {
            const response = await fetch(img, { method: "HEAD" });
            if (response.ok) {
              validImages.push(img);
            }
          } catch {
            // Imagem não existe, pular
          }
        }

        setCarouselImages(validImages);
      } catch (error) {
        console.error("Erro ao carregar imagens:", error);
      }
    };

    loadImages();
  }, []);

  const features = [
    {
      icon: <Code size={32} />,
      title: t("features.scriptingLua"),
      description: t("features.scriptingLuaDesc"),
      color: "text-primary",
    },
    {
      icon: <Rocket size={32} />,
      title: t("features.optimizedPerformance"),
      description: t("features.optimizedPerformanceDesc"),
      color: "text-accent",
    },
    {
      icon: <Zap size={32} />,
      title: t("features.simplifiedBukkit"),
      description: t("features.simplifiedBukkitDesc"),
      color: "text-green-400",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 border-b border-border overflow-hidden">
        <div className="absolute inset-0 tech-grid opacity-20 pointer-events-none" />

        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Logo and Title */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-4xl">⚡</span>
                  <h1 className="text-5xl md:text-6xl font-bold text-primary">
                    NEON LUA
                  </h1>
                </div>
                <p className="text-2xl md:text-3xl font-bold text-accent">
                  Minecraft 1.8.9 Scripting Revolution
                </p>
              </div>

              {/* Description */}
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
                Um plugin eficiente e otimizado para gerenciamento de scripts em
                Lua para servidores Minecraft 1.8.9, com suporte a diversas
                funções eficientes.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-4">
                <div className="space-y-2">
                  <p className="text-2xl font-bold text-primary">1.8.9</p>
                  <p className="text-sm text-muted-foreground">
                    {t("home.versionSupported")}
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="text-2xl font-bold text-accent">100%</p>
                  <p className="text-sm text-muted-foreground">
                    {t("home.compatible")}
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="text-2xl font-bold text-green-400">⚡</p>
                  <p className="text-sm text-muted-foreground">
                    {t("home.optimized")}
                  </p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a href={downloadUrl} target="_blank" rel="noopener noreferrer">
                  <Button className="w-full sm:w-auto bg-primary text-primary-foreground hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 px-8 py-6 text-lg gap-2">
                    <Download size={20} />
                    {releasesLoading ? "Carregando..." : t("home.download")}
                  </Button>
                </a>
                <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    className="w-full sm:w-auto neon-border text-primary hover:bg-primary/10 transition-all duration-300 px-8 py-6 text-lg gap-2"
                  >
                    <Github size={20} />
                    GitHub
                  </Button>
                </a>
              </div>
            </div>

            {/* Right - Animated Decorative Elements */}
            <div className="hidden lg:flex items-center justify-center relative h-96">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 rounded-lg neon-border bg-background/30 animate-float" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-48 rounded-lg neon-border-magenta bg-background/20 animate-float-delayed" />
              </div>
              <Code className="relative text-primary/50 animate-pulse" size={120} />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-20 md:py-32 border-b border-border">
        <div className="absolute inset-0 tech-grid opacity-20 pointer-events-none" />
        <div className="container relative z-10">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">
              {t("home.mainFeatures")}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("home.mainFeaturesDesc")}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="group p-8 rounded-lg bg-card border border-border hover:neon-border transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 space-y-4"
              >
                <div className={`${feature.color} group-hover:animate-float`}>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center pt-12">
            <Link href="/features">
              <Button className="bg-primary text-primary-foreground hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 px-8 py-6 text-lg">
                {t("home.viewAllFeatures")}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Image Gallery Carousel */}
      {carouselImages.length > 0 && (
        <section className="relative py-20 md:py-32 border-b border-border">
          <div className="absolute inset-0 tech-grid opacity-20 pointer-events-none" />
          <div className="container relative z-10">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-4xl md:text-5xl font-bold">
                {t("home.showcase")}
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {t("home.showcaseDesc")}
              </p>
            </div>

            <ImageCarousel images={carouselImages} autoPlayInterval={6000} />
          </div>
        </section>
      )}

      {/* Community Section with Discord Widget */}
      <section className="relative py-20 md:py-32 border-b border-border">
        <div className="absolute inset-0 tech-grid opacity-20 pointer-events-none" />
        <div className="container relative z-10">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl md:text-5xl font-bold">
              {t("home.activeCommunity")}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("home.activeCommunityDesc")}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {/* Community Benefits */}
            <div className="space-y-6">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-primary text-2xl">✓</span>
                  <span className="font-semibold">{t("home.discordCommunity")}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-primary text-2xl">✓</span>
                  <span className="font-semibold">{t("home.scriptSharing")}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-primary text-2xl">✓</span>
                  <span className="font-semibold">{t("home.support")}</span>
                </div>
              </div>

              {/* GitHub Links */}
              <div className="pt-4 space-y-2">
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary hover:text-accent transition-colors"
                >
                  <Github size={20} />
                  <span className="font-semibold">Visite nosso GitHub</span>
                  <ExternalLink size={16} />
                </a>
                <a
                  href={`${githubUrl}/issues`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary hover:text-accent transition-colors"
                >
                  <span className="text-lg">🐛</span>
                  <span className="font-semibold">Reporte um bug</span>
                  <ExternalLink size={16} />
                </a>
                <a
                  href={`${githubUrl}/discussions`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary hover:text-accent transition-colors"
                >
                  <span className="text-lg">💬</span>
                  <span className="font-semibold">Discussões</span>
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>

            {/* Discord Widget */}
            <div className="lg:col-span-2">
              <DiscordWidget serverId="1416568786890264588" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 md:py-32 border-b border-border">
        <div className="absolute inset-0 tech-grid opacity-20 pointer-events-none" />
        <div className="container relative z-10 text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">
            {t("home.readyToStart")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("home.readyToStartDesc")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link href="/wiki">
              <Button className="w-full sm:w-auto bg-primary text-primary-foreground hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 px-8 py-6 text-lg gap-2">
                <BookOpen size={20} />
                {t("home.viewDocs")}
              </Button>
            </Link>
            <Link href="/donate">
              <Button
                variant="outline"
                className="w-full sm:w-auto neon-border text-accent hover:bg-accent/10 transition-all duration-300 px-8 py-6 text-lg"
              >
                {t("home.supportProject")}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 bg-card/50">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* About */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold">NEON LUA</h3>
              <p className="text-sm text-muted-foreground">
                Plugin de scripting em Lua para Minecraft 1.8.9
              </p>
              <div className="flex gap-3">
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-accent transition-colors"
                >
                  <Github size={20} />
                </a>
              </div>
            </div>

            {/* Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href={`${githubUrl}/releases`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Releases
                  </a>
                </li>
                <li>
                  <a
                    href={`${githubUrl}/wiki`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    GitHub Wiki
                  </a>
                </li>
                <li>
                  <a
                    href={`${githubUrl}/issues`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Issues
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Recursos</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/wiki" className="text-muted-foreground hover:text-primary transition-colors">
                    Documentação
                  </Link>
                </li>
                <li>
                  <Link href="/features" className="text-muted-foreground hover:text-primary transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="/donate" className="text-muted-foreground hover:text-primary transition-colors">
                    Apoiar
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>{t("footer.copyright")}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
