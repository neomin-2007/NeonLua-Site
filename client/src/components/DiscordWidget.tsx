import { useState, useEffect } from "react";
import { Users, ExternalLink, Loader } from "lucide-react";

/**
 * NEON LUA - Discord Widget Component
 * Design: Cyberpunk Neon Futurista
 * Displays Discord server members and invite link
 */

interface DiscordMember {
  id: string;
  username: string;
  avatar: string;
  status: "online" | "idle" | "dnd" | "offline";
}

interface DiscordWidgetProps {
  serverId: string;
}

export default function DiscordWidget({ serverId }: DiscordWidgetProps) {
  const [members, setMembers] = useState<DiscordMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [onlineCount, setOnlineCount] = useState(0);

  useEffect(() => {
    const fetchDiscordData = async () => {
      try {
        // Usar a API de widget do Discord
        const response = await fetch(
          `https://discord.com/api/guilds/${serverId}/widget.json`
        );

        if (!response.ok) {
          throw new Error("Falha ao buscar dados do Discord");
        }

        const data = await response.json();

        // Processar membros
        const processedMembers: DiscordMember[] = (data.members || [])
          .slice(0, 12) // Mostrar apenas os primeiros 12 membros
          .map((member: any) => ({
            id: member.id,
            username: member.username,
            avatar: member.avatar
              ? `https://cdn.discordapp.com/avatars/${member.id}/${member.avatar}.png`
              : `https://cdn.discordapp.com/embed/avatars/${
                  parseInt(member.discriminator) % 5
                }.png`,
            status: member.status || "offline",
          }));

        setMembers(processedMembers);
        setOnlineCount(
          processedMembers.filter((m) => m.status !== "offline").length
        );
      } catch (err) {
        setError(err instanceof Error ? err.message : "Erro desconhecido");
        console.error("Discord Widget Error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchDiscordData();

    // Atualizar a cada 30 segundos
    const interval = setInterval(fetchDiscordData, 30000);
    return () => clearInterval(interval);
  }, [serverId]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "online":
        return "bg-green-500";
      case "idle":
        return "bg-yellow-500";
      case "dnd":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "online":
        return "Online";
      case "idle":
        return "Ausente";
      case "dnd":
        return "Não Perturbe";
      default:
        return "Offline";
    }
  };

  if (loading) {
    return (
      <div className="w-full p-8 rounded-lg bg-card border border-border flex items-center justify-center gap-3">
        <Loader className="animate-spin text-primary" size={24} />
        <span className="text-muted-foreground">Carregando membros...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full p-8 rounded-lg bg-card border border-border space-y-4">
        <div className="flex items-center gap-3">
          <Users className="text-primary" size={24} />
          <h3 className="text-xl font-bold">Comunidade Discord</h3>
        </div>
        <p className="text-muted-foreground text-sm">
          Junte-se à nossa comunidade Discord para suporte e compartilhamento de scripts
        </p>
        <a
          href="https://discord.gg/neonlua"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 font-semibold"
        >
          <span>Entrar no Discord</span>
          <ExternalLink size={16} />
        </a>
      </div>
    );
  }

  return (
    <div className="w-full p-8 rounded-lg bg-card border border-border space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Users className="text-primary" size={24} />
          <div>
            <h3 className="text-xl font-bold">Comunidade Discord</h3>
            <p className="text-sm text-muted-foreground">
              {onlineCount} membro(s) online
            </p>
          </div>
        </div>
        <a
          href="https://discord.gg/neonlua"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 font-semibold text-sm"
        >
          <span>Entrar</span>
          <ExternalLink size={16} />
        </a>
      </div>

      {/* Members Grid */}
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {members.map((member) => (
          <div
            key={member.id}
            className="flex flex-col items-center gap-2 group cursor-pointer"
            title={`${member.username} - ${getStatusLabel(member.status)}`}
          >
            {/* Avatar with Status Indicator */}
            <div className="relative">
              <img
                src={member.avatar}
                alt={member.username}
                className="w-12 h-12 rounded-full border-2 border-border group-hover:border-primary transition-all duration-300"
              />
              <div
                className={`absolute bottom-0 right-0 w-3 h-3 rounded-full ${getStatusColor(
                  member.status
                )} border-2 border-card`}
              />
            </div>

            {/* Username */}
            <p className="text-xs text-center text-muted-foreground truncate max-w-[60px] group-hover:text-primary transition-colors">
              {member.username}
            </p>
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0" />

      {/* CTA */}
      <div className="space-y-3">
        <p className="text-sm text-muted-foreground">
          Junte-se à nossa comunidade Discord para suporte, compartilhamento de scripts e atualizações!
        </p>
        <a
          href="https://discord.gg/neonlua"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full text-center px-4 py-3 rounded-lg bg-primary/10 border border-primary text-primary hover:bg-primary/20 transition-all duration-300 font-semibold"
        >
          Abrir Servidor Discord →
        </a>
      </div>
    </div>
  );
}
