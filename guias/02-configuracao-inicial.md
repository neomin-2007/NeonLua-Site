---
title: Configuração Inicial
description: Configurar o NEON LUA para seu servidor
category: getting-started
order: 2
---

# Configuração Inicial

## Arquivo config.yml

O arquivo de configuração está localizado em `plugins/NeonLua/config.yml`.

### Opções Principais

```yaml
active-scripts:
  - "join/main.lua"
  - "chat/main.lua"
  - "move/main.lua"
```

> Os scripts ativos tem seu arquivo principal apontado
> assim podemos ativar apenas os que desejamos.

## Recarregar Configuração

Para recarregar a configuração sem reiniciar o servidor:

```
/neonlua reload
```

## Estrutura de Diretórios

Após a primeira execução, a seguinte estrutura será criada:

```
plugins/NeonLua/
├── config.yml
├── scripts/
│   └── (seus scripts Lua aqui)
```

## Próximos Passos

Agora você está pronto para criar seus primeiros scripts! Veja o guia de [Fundamentos de Lua](03-fundamentos-lua.md).
