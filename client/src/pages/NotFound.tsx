import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import { useLanguage } from "@/contexts/LanguageContext";

/**
 * NEON LUA - 404 Not Found Page
 * Design: Cyberpunk Neon Futurista
 */

export default function NotFound() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />

      <div className="flex-1 flex items-center justify-center py-20 md:py-32">
        <div className="container">
          <div className="text-center space-y-8 max-w-2xl mx-auto">
            {/* 404 Text */}
            <div className="space-y-4">
              <h1 className="text-8xl md:text-9xl font-bold text-primary animate-glow-pulse">
                404
              </h1>
              <p className="text-4xl md:text-5xl font-bold">
                {t("notfound.title")}
              </p>
            </div>

            {/* Description */}
            <p className="text-lg md:text-xl text-muted-foreground">
              {t("notfound.description")}
            </p>

            {/* Decorative Elements */}
            <div className="py-8">
              <div className="inline-block text-6xl animate-float">
                🚀
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link href="/">
                <Button className="w-full sm:w-auto bg-primary text-primary-foreground hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 px-8 py-6 text-lg">
                  {t("notfound.backToHome")}
                </Button>
              </Link>
              <Link href="/wiki">
                <Button
                  variant="outline"
                  className="w-full sm:w-auto neon-border text-primary hover:bg-primary/10 transition-all duration-300 px-8 py-6 text-lg"
                >
                  {t("notfound.goToWiki")}
                </Button>
              </Link>
            </div>

            {/* Additional Info */}
            <div className="pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground">
                {t("notfound.error")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
