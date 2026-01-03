# 🎠 Carrossel de Imagens - NEON LUA

## Como Funciona

O site possui um carrossel automático de imagens na página inicial que exibe imagens da pasta `/client/public/images/`.

## Adicionando Imagens ao Carrossel

### Passo 1: Prepare suas imagens

1. Coloque suas imagens na pasta:
   ```
   client/public/images/
   ```

2. Formatos suportados:
   - `.png`
   - `.jpg` / `.jpeg`
   - `.webp`
   - `.gif`

3. Tamanho recomendado:
   - Largura: 1920px ou mais
   - Altura: 1080px ou mais
   - Proporção: 16:9 (recomendado)

### Passo 2: Nomeie suas imagens

O carrossel procura automaticamente por estas imagens:

```
client/public/images/
├── hero-banner.png
├── features-bg.png
├── performance-visual.png
├── code-pattern.png
└── (adicione mais imagens aqui)
```

### Passo 3: Reinicie o servidor

```bash
pnpm dev
```

O carrossel será atualizado automaticamente!

## Características do Carrossel

✅ **Auto-play**: As imagens passam automaticamente a cada 6 segundos
✅ **Navegação Manual**: Clique nos botões ◀ e ▶ para navegar
✅ **Indicadores de Ponto**: Clique nos pontos para ir direto para uma imagem
✅ **Contador**: Mostra qual imagem você está vendo (ex: 1 / 4)
✅ **Controle de Auto-play**: Pause/retome o auto-play com o botão
✅ **Responsivo**: Funciona perfeitamente em mobile, tablet e desktop

## Personalizando o Carrossel

### Mudar intervalo de auto-play

Edite `/client/src/pages/Home.tsx`:

```tsx
<ImageCarousel images={carouselImages} autoPlayInterval={6000} />
                                                            ↑
                                                    Tempo em milissegundos
                                                    6000 = 6 segundos
```

### Ocultar controles

```tsx
<ImageCarousel images={carouselImages} showControls={false} />
```

## Estrutura de Pastas

```
neon-lua-site/
├── client/
│   └── public/
│       └── images/           ← Coloque suas imagens aqui
│           ├── hero-banner.png
│           ├── features-bg.png
│           ├── performance-visual.png
│           └── code-pattern.png
└── ...
```

## Dicas

1. **Otimize as imagens**: Use ferramentas como [TinyPNG](https://tinypng.com/) para reduzir tamanho
2. **Use WebP**: Formato moderno e mais leve que PNG/JPG
3. **Nomes descritivos**: Use nomes que façam sentido para facilitar manutenção
4. **Teste responsividade**: Verifique como as imagens aparecem em diferentes tamanhos

## Exemplo de Estrutura Completa

```
client/public/images/
├── hero-banner.png          (Banner principal)
├── features-bg.png          (Features showcase)
├── performance-visual.png   (Performance demo)
├── code-pattern.png         (Padrão de código)
├── community-showcase.png   (Comunidade)
├── tutorial-preview.png     (Tutorial)
└── plugin-demo.png          (Demo do plugin)
```

## Troubleshooting

### As imagens não aparecem no carrossel

1. Verifique se as imagens estão em `client/public/images/`
2. Verifique os nomes dos arquivos (devem ser exatos)
3. Reinicie o servidor: `pnpm dev`
4. Limpe o cache do navegador: Ctrl+Shift+Del

### Imagens aparecem pixeladas

1. Use imagens com resolução maior
2. Considere usar WebP em vez de PNG

### Carrossel muito lento

1. Reduza o tamanho das imagens
2. Comprima as imagens com ferramentas online
3. Use formato WebP

---

**Dúvidas?** Consulte o arquivo `DEPLOYMENT.md` para mais informações sobre o projeto.
