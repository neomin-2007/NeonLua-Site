import { useState, useEffect } from "react";

export interface GitHubRelease {
  id: number;
  tag_name: string;
  name: string;
  draft: boolean;
  prerelease: boolean;
  created_at: string;
  published_at: string;
  assets: Array<{
    id: number;
    name: string;
    download_count: number;
    browser_download_url: string;
  }>;
}

export function useGitHubReleases(owner: string, repo: string) {
  const [releases, setReleases] = useState<GitHubRelease[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReleases = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/repos/${owner}/${repo}/releases`
        );

        if (!response.ok) {
          throw new Error("Falha ao buscar releases");
        }

        const data: GitHubRelease[] = await response.json();
        setReleases(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Erro desconhecido");
      } finally {
        setLoading(false);
      }
    };

    fetchReleases();
  }, [owner, repo]);

  const getLatestRelease = () => {
    return releases.find((r) => !r.draft && !r.prerelease) || releases[0];
  };

  const getLatestJarUrl = () => {
    const latest = getLatestRelease();
    if (!latest) return null;

    const jarAsset = latest.assets.find((a) => a.name.endsWith(".jar"));
    return jarAsset?.browser_download_url || null;
  };

  return {
    releases,
    loading,
    error,
    getLatestRelease,
    getLatestJarUrl,
  };
}
