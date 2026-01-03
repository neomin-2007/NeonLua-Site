import { Link } from "wouter";
import { Heart } from "lucide-react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

/**
 * NEON LUA - Donate Page
 * Design: Cyberpunk Neon Futurista
 * Simple Patreon donation link
 */

export default function Donate() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero Section with Background */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 opacity-60 pointer-events-none"
          style={{
            backgroundImage: "url('/images/donate-bg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-background/40 pointer-events-none" />

        <div className="container relative z-10">
          <div className="text-center space-y-8 max-w-2xl mx-auto">
            {/* Heart Icon */}
            <div className="flex items-center justify-center gap-4">
              <Heart className="text-accent animate-glow-pulse" size={48} />
            </div>

            {/* Main Content */}
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">
                {t("donate.title")}
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                {t("donate.description")}
              </p>

              {/* Donation Amount */}
              <div className="py-8 space-y-4">
                <p className="text-3xl md:text-4xl font-bold text-primary">
                  $3 USD
                </p>
                <p className="text-lg text-muted-foreground">
                  Doação única para apoiar o desenvolvimento do NEON LUA
                </p>
              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <a
                  href="https://www.patreon.com/posts/neonlua-doacao-147284536"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full md:w-auto bg-accent text-accent-foreground hover:shadow-lg hover:shadow-accent/50 transition-all duration-300 px-12 py-6 text-lg font-bold">
                    {t("donate.supportPatreon")}
                  </Button>
                </a>
              </div>

              {/* Benefits */}
              <div className="pt-12 border-t border-border space-y-6">
                <h2 className="text-2xl font-bold">{t("donate.benefits")}</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="p-4 rounded-lg bg-card/50 border border-border">
                    <p className="text-2xl mb-2">🎁</p>
                    <p className="font-semibold">{t("donate.exclusiveAccess")}</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      {t("donate.exclusiveAccessDesc")}
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-card/50 border border-border">
                    <p className="text-2xl mb-2">⚡</p>
                    <p className="font-semibold">{t("donate.development")}</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      {t("donate.developmentDesc")}
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-card/50 border border-border">
                    <p className="text-2xl mb-2">❤️</p>
                    <p className="font-semibold">{t("donate.directImpact")}</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      {t("donate.directImpactDesc")}
                    </p>
                  </div>
                </div>
              </div>

              {/* Why Donate */}
              <div className="pt-12 border-t border-border space-y-6">
                <h2 className="text-2xl font-bold">{t("donate.whySupport")}</h2>
                <div className="space-y-4 text-left max-w-xl mx-auto">
                  <div className="flex items-start gap-4">
                    <span className="text-primary text-2xl flex-shrink-0">✓</span>
                    <div>
                      <p className="font-semibold">{t("donate.continuousDevelopment")}</p>
                      <p className="text-sm text-muted-foreground">
                        {t("donate.continuousDevelopmentDesc")}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-primary text-2xl flex-shrink-0">✓</span>
                    <div>
                      <p className="font-semibold">{t("donate.securityStability")}</p>
                      <p className="text-sm text-muted-foreground">
                        {t("donate.securityStabilityDesc")}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-primary text-2xl flex-shrink-0">✓</span>
                    <div>
                      <p className="font-semibold">{t("donate.activeCommunity")}</p>
                      <p className="text-sm text-muted-foreground">
                        {t("donate.activeCommunityDesc")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Secondary CTA */}
              <div className="pt-12 space-y-4">
                <p className="text-muted-foreground">
                  {t("donate.cantSupport")}
                </p>
                <Link href="/">
                  <Button
                    variant="outline"
                    className="w-full md:w-auto neon-border text-primary hover:bg-primary/10 transition-all duration-300 px-8 py-6 text-lg"
                  >
                    {t("donate.backToHome")}
                  </Button>
                </Link>
              </div>
            </div>
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
