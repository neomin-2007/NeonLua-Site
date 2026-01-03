# 🚀 Guia de Deployment - NEON LUA

## Rodando Localmente no Seu PC

### Pré-requisitos

1. **Node.js** (versão 16+) - [Download aqui](https://nodejs.org/)
2. **Git** (opcional, mas recomendado) - [Download aqui](https://git-scm.com/)
3. **pnpm** (gerenciador de pacotes) - Instale com:
   ```bash
   npm install -g pnpm
   ```

### Passos para Rodar Localmente

1. **Clone ou baixe o projeto**
   ```bash
   git clone <seu-repositorio>
   cd neon-lua-site
   ```

2. **Instale as dependências**
   ```bash
   pnpm install
   ```

3. **Inicie o servidor de desenvolvimento**
   ```bash
   pnpm dev
   ```

4. **Acesse no navegador**
   - Abra `http://localhost:5173` (ou a URL mostrada no terminal)
   - O site será recarregado automaticamente quando você fizer mudanças

### Comandos Úteis

```bash
# Desenvolvimento com hot reload
pnpm dev

# Build para produção
pnpm build

# Preview da build de produção
pnpm preview

# Processar guias Markdown
pnpm process-guides

# Verificar erros TypeScript
pnpm check

# Formatar código
pnpm format
```

---

## Hospedagem Gratuita

### 1. **Manus** (Recomendado - Já Integrado!)

O site foi criado na plataforma **Manus**, que oferece hospedagem gratuita com domínio personalizado.

**Vantagens:**
- ✅ Hospedagem gratuita
- ✅ Domínio personalizado gratuito (xxx.manus.space)
- ✅ SSL/HTTPS automático
- ✅ Deploy com um clique
- ✅ Suporte a custom domains

**Como publicar:**
1. Clique no botão **"Publish"** na interface de gerenciamento do Manus
2. Selecione o checkpoint que deseja publicar
3. Pronto! Seu site estará online em minutos

---

### 2. **GitHub Pages** (Gratuito)

Hospede seu site diretamente no GitHub.

**Vantagens:**
- ✅ Hospedagem gratuita
- ✅ Domínio gratuito (username.github.io)
- ✅ Integração com Git
- ✅ Deploy automático com GitHub Actions

**Passos:**

1. **Crie um repositório no GitHub**
   - Nome: `neon-lua-site` (ou qualquer nome)
   - Deixe como público

2. **Prepare o projeto para GitHub Pages**
   ```bash
   # Edite vite.config.ts e adicione:
   export default defineConfig({
     base: '/neon-lua-site/', // Se usar repo name
     // ou
     base: '/', // Se usar username.github.io
   })
   ```

3. **Faça o build**
   ```bash
   pnpm build
   ```

4. **Crie um workflow GitHub Actions**
   - Crie a pasta `.github/workflows/`
   - Crie o arquivo `deploy.yml`:

   ```yaml
   name: Deploy to GitHub Pages

   on:
     push:
       branches: [main]
     pull_request:
       branches: [main]

   jobs:
     build-and-deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v3
         
         - name: Setup pnpm
           uses: pnpm/action-setup@v2
           with:
             version: 10
         
         - name: Setup Node.js
           uses: actions/setup-node@v3
           with:
             node-version: '18'
             cache: 'pnpm'
         
         - name: Install dependencies
           run: pnpm install
         
         - name: Build
           run: pnpm build
         
         - name: Deploy
           uses: peaceiris/actions-gh-pages@v3
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./dist/public
   ```

5. **Faça push para o GitHub**
   ```bash
   git add .
   git commit -m "Deploy to GitHub Pages"
   git push origin main
   ```

6. **Ative GitHub Pages**
   - Vá para Settings → Pages
   - Source: Deploy from a branch
   - Branch: gh-pages
   - Folder: / (root)

7. **Seu site estará em:**
   - `https://seu-usuario.github.io/neon-lua-site/`

---

### 3. **Vercel** (Gratuito)

Hospedagem rápida e fácil, perfeita para projetos React.

**Vantagens:**
- ✅ Hospedagem gratuita
- ✅ Deploy automático com Git
- ✅ Domínio gratuito (seu-projeto.vercel.app)
- ✅ Muito rápido

**Passos:**

1. **Faça push para GitHub**
   ```bash
   git push origin main
   ```

2. **Vá para [vercel.com](https://vercel.com)**
   - Clique em "New Project"
   - Selecione seu repositório GitHub
   - Clique em "Import"

3. **Configure**
   - Framework: Vite
   - Build Command: `pnpm build`
   - Output Directory: `dist/public`

4. **Deploy**
   - Clique em "Deploy"
   - Seu site estará online em minutos!

5. **Seu site estará em:**
   - `https://seu-projeto.vercel.app`

---

### 4. **Netlify** (Gratuito)

Outra ótima opção com deploy automático.

**Vantagens:**
- ✅ Hospedagem gratuita
- ✅ Deploy automático com Git
- ✅ Domínio gratuito
- ✅ Suporte a custom domains

**Passos:**

1. **Faça push para GitHub**
   ```bash
   git push origin main
   ```

2. **Vá para [netlify.com](https://netlify.com)**
   - Clique em "Add new site"
   - Selecione "Import an existing project"
   - Escolha GitHub

3. **Configure**
   - Build command: `pnpm build`
   - Publish directory: `dist/public`

4. **Deploy**
   - Clique em "Deploy site"
   - Seu site estará online!

5. **Seu site estará em:**
   - `https://seu-site.netlify.app`

---

### 5. **Surge.sh** (Gratuito)

Hospedagem simples e rápida via CLI.

**Passos:**

1. **Instale o Surge**
   ```bash
   npm install -g surge
   ```

2. **Faça o build**
   ```bash
   pnpm build
   ```

3. **Deploy**
   ```bash
   surge dist/public
   ```

4. **Seu site estará em:**
   - `https://seu-projeto.surge.sh`

---

## Comparação de Plataformas

| Plataforma | Gratuito | Domínio | Deploy | Facilidade |
|---|---|---|---|---|
| **Manus** | ✅ | ✅ Custom | 1 clique | ⭐⭐⭐⭐⭐ |
| **GitHub Pages** | ✅ | ✅ Grátis | Git push | ⭐⭐⭐⭐ |
| **Vercel** | ✅ | ✅ Grátis | Git push | ⭐⭐⭐⭐⭐ |
| **Netlify** | ✅ | ✅ Grátis | Git push | ⭐⭐⭐⭐⭐ |
| **Surge.sh** | ✅ | ✅ Grátis | CLI | ⭐⭐⭐ |

---

## Recomendação

**Para você, recomendo:**

1. **Manus** (Melhor opção!)
   - Já está integrado
   - Deploy com um clique
   - Suporte a custom domains
   - Melhor experiência geral

2. **Vercel** (Segunda opção)
   - Muito rápido
   - Deploy automático com Git
   - Fácil de usar

3. **GitHub Pages** (Se quiser tudo no GitHub)
   - Tudo em um lugar
   - Grátis e simples
   - Bom para projetos open-source

---

## Atualizando o Site

### Se estiver usando Manus:
1. Edite os arquivos localmente
2. Faça `pnpm build`
3. Clique em "Publish" no Manus

### Se estiver usando GitHub Pages/Vercel/Netlify:
1. Edite os arquivos localmente
2. Faça `git add .` e `git commit -m "mensagem"`
3. Faça `git push origin main`
4. O deploy acontece automaticamente!

### Para adicionar novos guias:
1. Crie um arquivo `.md` na pasta `/guias`
2. Execute `pnpm process-guides`
3. Faça `pnpm build`
4. Deploy normalmente

---

## Troubleshooting

### "pnpm: comando não encontrado"
```bash
npm install -g pnpm
```

### "Node.js não está instalado"
Baixe em [nodejs.org](https://nodejs.org/)

### "Porta 5173 já está em uso"
```bash
pnpm dev -- --port 3000
```

### "Build falha"
```bash
# Limpe cache e reinstale
rm -rf node_modules pnpm-lock.yaml
pnpm install
pnpm build
```

---

## Dúvidas?

Se tiver problemas, verifique:
1. Se Node.js está instalado: `node --version`
2. Se pnpm está instalado: `pnpm --version`
3. Se as dependências foram instaladas: `pnpm install`
4. Se há erros: `pnpm check`

Boa sorte! 🚀
