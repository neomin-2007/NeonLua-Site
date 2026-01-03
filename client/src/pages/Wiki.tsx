import { Link } from "wouter";
import { Search, ChevronRight, BookOpen } from "lucide-react";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { useWiki } from "@/contexts/WikiContext";
import { Streamdown } from "streamdown";

/**
 * NEON LUA - Wiki Page
 * Design: Cyberpunk Neon Futurista
 * Carrega guias de arquivos Markdown na pasta /guias
 */

export default function Wiki() {
  const { t } = useLanguage();
  const { guides, loading, getGuidesByCategory } = useWiki();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGuide, setSelectedGuide] = useState<string | null>(null);

  const categories = [
    { id: "getting-started", label: t("wiki.gettingStarted"), icon: "🚀" },
    { id: "scripting", label: t("wiki.scripting"), icon: "💻" },
    { id: "advanced", label: t("wiki.advanced"), icon: "⚡" },
    { id: "troubleshooting", label: t("wiki.troubleshooting"), icon: "🔧" },
  ];

  const filteredGuides = guides.filter(
    (guide) =>
      guide.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      guide.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const currentGuide = guides.find((g) => g.id === selectedGuide);

  const handleSelectGuide = (guideId: string) => {
    setSelectedGuide(guideId);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 border-b border-border">
        <div className="absolute inset-0 tech-grid opacity-20 pointer-events-none" />
        <div className="container relative z-10">
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              {t("wiki.title")}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              {t("wiki.subtitle")}
            </p>

            {/* Search Bar */}
            <div className="pt-8">
              <div className="relative max-w-2xl mx-auto">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  placeholder={t("wiki.search")}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="relative py-20 md:py-32">
        <div className="absolute inset-0 tech-grid opacity-20 pointer-events-none" />
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="space-y-6">


                {/* Categories */}
                <div className="space-y-3">
                  {categories.map((category) => {
                    const categoryGuides = getGuidesByCategory(category.id);
                    return (
                      <div key={category.id}>
                        <h3 className="text-sm font-semibold text-muted-foreground mb-2 flex items-center gap-2">
                          <span>{category.icon}</span>
                          {category.label}
                          {categoryGuides.length > 0 && (
                            <span className="text-xs bg-primary/20 px-2 py-1 rounded">
                              {categoryGuides.length}
                            </span>
                          )}
                        </h3>
                        <div className="space-y-2">
                          {categoryGuides.length > 0 ? (
                            categoryGuides.map((guide) => (
                              <button
                                key={guide.id}
                                onClick={() => handleSelectGuide(guide.id)}
                                className={`w-full text-left p-3 rounded-lg transition-all duration-300 ${
                                  selectedGuide === guide.id
                                    ? "bg-primary/20 neon-border text-primary"
                                    : "bg-card border border-border hover:border-primary/50"
                                }`}
                              >
                                <p className="font-semibold text-sm truncate">
                                  {guide.title}
                                </p>
                                <p className="text-xs text-muted-foreground truncate">
                                  {guide.description}
                                </p>
                              </button>
                            ))
                          ) : (
                            <p className="text-xs text-muted-foreground italic p-2">
                              Nenhum guia nesta categoria
                            </p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="lg:col-span-2">
              {/* Loading State */}
              {loading && (
                <div className="p-8 rounded-lg bg-card border border-border text-center space-y-4">
                  <div className="animate-spin inline-block">⚙️</div>
                  <p className="text-lg text-muted-foreground">
                    Carregando guias...
                  </p>
                </div>
              )}

              {/* Guide Viewer */}
              {!loading && selectedGuide && currentGuide && (
                <div className="p-8 rounded-lg bg-card border border-border space-y-6">
                  <div>
                    <h2 className="text-3xl font-bold mb-2">
                      {currentGuide.title}
                    </h2>
                    <p className="text-muted-foreground">
                      {currentGuide.description}
                    </p>
                  </div>

                  <div className="border-t border-border pt-6">
                    <div className="prose prose-invert max-w-none">
                      <Streamdown>{currentGuide.content}</Streamdown>
                    </div>
                  </div>

                  <div className="text-xs text-muted-foreground pt-4 border-t border-border">
                    <p>
                      Atualizado em{" "}
                      {currentGuide.updatedAt.toLocaleDateString("pt-BR", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                  </div>
                </div>
              )}

              {/* Empty State */}
              {!loading && !selectedGuide && guides.length > 0 && (
                <div className="p-8 rounded-lg bg-card border border-border text-center space-y-4">
                  <BookOpen className="mx-auto text-muted-foreground/50" size={48} />
                  <p className="text-lg text-muted-foreground">
                    Selecione um guia para começar
                  </p>
                </div>
              )}

              {/* No Guides State */}
              {!loading && guides.length === 0 && (
                <div className="p-8 rounded-lg bg-card border border-border text-center space-y-4">
                  <BookOpen className="mx-auto text-muted-foreground/50" size={48} />
                  <p className="text-lg text-muted-foreground">
                    Nenhum guia disponível ainda
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Adicione arquivos <code className="bg-background/50 px-2 py-1 rounded">.md</code> na pasta <code className="bg-background/50 px-2 py-1 rounded">/guias</code>
                  </p>
                </div>
              )}

              {/* No Results */}
              {!loading && searchQuery && filteredGuides.length === 0 && (
                <div className="p-8 rounded-lg bg-card border border-border text-center space-y-4">
                  <BookOpen className="mx-auto text-muted-foreground/50" size={48} />
                  <p className="text-lg text-muted-foreground">
                    Nenhum resultado encontrado para "{searchQuery}"
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 md:py-32 border-t border-border">
        <div className="absolute inset-0 tech-grid opacity-20 pointer-events-none" />
        <div className="container relative z-10 text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">
            Ainda tem dúvidas?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Junte-se à nossa comunidade no Discord para obter ajuda e compartilhar
            suas experiências com NEON LUA.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
              <Button className="w-full sm:w-auto bg-primary text-primary-foreground hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 px-8 py-6 text-lg">
                Ir para Discord
              </Button>
            </a>
            <Link href="/">
              <Button
                variant="outline"
                className="w-full sm:w-auto neon-border text-primary hover:bg-primary/10 transition-all duration-300 px-8 py-6 text-lg"
              >
                Voltar para Home
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
