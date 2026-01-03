import React, { createContext, useContext, useState, useEffect } from "react";

export interface WikiGuide {
  id: string;
  title: string;
  description: string;
  content: string;
  category: string;
  order: number;
  createdAt: Date;
  updatedAt: Date;
}

interface WikiContextType {
  guides: WikiGuide[];
  loading: boolean;
  getGuideById: (id: string) => WikiGuide | undefined;
  getGuidesByCategory: (category: string) => WikiGuide[];
}

const WikiContext = createContext<WikiContextType | undefined>(undefined);

export function WikiProvider({ children }: { children: React.ReactNode }) {
  const [guides, setGuides] = useState<WikiGuide[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadGuides = async () => {
      try {
        const response = await fetch("/guides-data.json");
        if (response.ok) {
          const data = await response.json();
          const processedGuides = data.map(
            (guide: Record<string, unknown>) => ({
              ...guide,
              createdAt: new Date(guide.createdAt as string),
              updatedAt: new Date(guide.updatedAt as string),
            })
          );
          setGuides(processedGuides);
        }
      } catch (error) {
        console.error("Erro ao carregar guias:", error);
      } finally {
        setLoading(false);
      }
    };

    loadGuides();
  }, []);

  const getGuideById = (id: string) => {
    return guides.find((guide) => guide.id === id);
  };

  const getGuidesByCategory = (category: string) => {
    return guides
      .filter((guide) => guide.category === category)
      .sort((a, b) => a.order - b.order);
  };

  return (
    <WikiContext.Provider
      value={{
        guides,
        loading,
        getGuideById,
        getGuidesByCategory,
      }}
    >
      {children}
    </WikiContext.Provider>
  );
}

export function useWiki() {
  const context = useContext(WikiContext);
  if (!context) {
    throw new Error("useWiki must be used within WikiProvider");
  }
  return context;
}
