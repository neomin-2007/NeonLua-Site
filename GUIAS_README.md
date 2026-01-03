# 📚 Sistema de Guias - NEON LUA

## Como Funciona

O site do NEON LUA carrega guias automaticamente de arquivos Markdown (`.md`) localizados na pasta `/guias`. Você não precisa editar nada no site - apenas adicione, edite ou delete arquivos `.md` nesta pasta!

## Estrutura de um Guia

Cada arquivo Markdown deve começar com um **frontmatter** (metadados) no formato YAML:

```markdown
---
title: Título do Guia
description: Uma descrição breve do conteúdo
category: getting-started
order: 1
---

# Seu Conteúdo em Markdown

Escreva o conteúdo do guia aqui em Markdown...
```

### Campos Obrigatórios

- **title**: Título do guia (aparece na sidebar e no topo da página)
- **description**: Descrição breve (aparece na listagem)
- **category**: Categoria do guia (veja categorias abaixo)
- **order**: Ordem de exibição dentro da categoria (número inteiro)

## Categorias Disponíveis

| ID | Nome | Ícone |
|---|---|---|
| `getting-started` | Começando | 🚀 |
| `scripting` | Scripting em Lua | 💻 |
| `advanced` | Tópicos Avançados | ⚡ |
| `troubleshooting` | Solução de Problemas | 🔧 |

## Exemplos de Guias

### Exemplo 1: Guia de Instalação

**Arquivo**: `01-instalacao.md`

```markdown
---
title: Instalação
description: Como instalar o NEON LUA no seu servidor
category: getting-started
order: 1
---

# Instalação do NEON LUA

## Pré-requisitos

- Servidor Minecraft 1.8.9
- Java 8 ou superior

## Passos

1. Baixe o arquivo .jar
2. Coloque na pasta plugins
3. Reinicie o servidor
```

### Exemplo 2: Guia de Scripting

**Arquivo**: `02-basico-lua.md`

```markdown
---
title: Fundamentos de Lua
description: Conceitos básicos da linguagem Lua
category: scripting
order: 1
---

# Fundamentos de Lua

## Variáveis

```lua
local x = 42
local name = "NEON LUA"
```

## Funções

```lua
function greet(name)
  return "Olá, " .. name
end
```
```

## Como Adicionar um Novo Guia

1. Crie um arquivo `.md` na pasta `/guias`
2. Adicione o frontmatter com os metadados
3. Escreva o conteúdo em Markdown
4. Execute `npm run process-guides` para processar os guias
5. O guia aparecerá automaticamente no site!

## Como Editar um Guia Existente

1. Abra o arquivo `.md` na pasta `/guias`
2. Edite o conteúdo ou metadados
3. Execute `npm run process-guides` para atualizar
4. Recarregue o site para ver as mudanças

## Como Deletar um Guia

1. Delete o arquivo `.md` da pasta `/guias`
2. Execute `npm run process-guides`
3. O guia será removido do site

## Processamento Automático

Os guias são processados automaticamente quando você:

- Executa `npm run dev` (desenvolvimento)
- Executa `npm run build` (produção)
- Executa `npm run process-guides` (manual)

O script `process-guides.mjs` lê todos os arquivos `.md` da pasta `/guias` e gera um arquivo `guides-data.json` que o site carrega.

## Dicas de Markdown

### Títulos

```markdown
# Título H1
## Título H2
### Título H3
```

### Listas

```markdown
- Item 1
- Item 2
  - Item 2.1
  - Item 2.2

1. Primeiro
2. Segundo
3. Terceiro
```

### Código

```markdown
`código inline`

\`\`\`lua
local x = 42
print(x)
\`\`\`

\`\`\`yaml
key: value
nested:
  key: value
\`\`\`
```

### Links

```markdown
[Texto do link](https://exemplo.com)
[Link para outro guia](02-configuracao.md)
```

### Ênfase

```markdown
**texto em negrito**
*texto em itálico*
~~texto riscado~~
```

## Estrutura de Pastas

```
neon-lua-site/
├── guias/                    # Pasta com seus guias
│   ├── 01-instalacao.md
│   ├── 02-configuracao.md
│   ├── 03-fundamentos-lua.md
│   └── ...
├── client/
│   └── public/
│       └── guides-data.json  # Gerado automaticamente
├── scripts/
│   └── process-guides.mjs    # Script de processamento
└── ...
```

## Solução de Problemas

### Os guias não aparecem no site

1. Verifique se os arquivos estão em `/guias`
2. Verifique se o frontmatter está correto
3. Execute `npm run process-guides`
4. Recarregue o site (Ctrl+Shift+R)

### Erro ao processar guias

1. Verifique a sintaxe YAML do frontmatter
2. Certifique-se de que `title`, `description`, `category` e `order` estão presentes
3. Verifique se não há caracteres especiais não escapados

## Suporte a Idiomas

Os guias são exibidos em **Português Brasil** por padrão. O site suporta múltiplos idiomas, mas os guias são os mesmos para todos.

Se quiser guias em múltiplos idiomas, crie arquivos separados:
- `01-instalacao-pt.md` (Português)
- `01-instalacao-en.md` (Inglês)

E adicione um campo `language` no frontmatter.

---

**Dúvidas?** Consulte os exemplos na pasta `/guias` ou verifique a documentação do Markdown.
