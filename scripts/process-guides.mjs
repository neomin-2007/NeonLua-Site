import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const guidesDir = path.join(__dirname, "..", "guias");
const outputDir = path.join(__dirname, "..", "client", "public");
const outputFile = path.join(outputDir, "guides-data.json");

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Parse frontmatter from markdown
function parseFrontmatter(content) {
  const frontmatterRegex = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/;
  const match = content.match(frontmatterRegex);

  if (!match) {
    return { metadata: {}, content: content };
  }

  const [, frontmatterStr, markdownContent] = match;
  const metadata = {};

  frontmatterStr.split("\n").forEach((line) => {
    const [key, ...valueParts] = line.split(":");
    if (key && valueParts.length > 0) {
      const value = valueParts.join(":").trim();
      // Remove quotes if present
      metadata[key.trim()] = value.replace(/^["']|["']$/g, "");
    }
  });

  return { metadata, content: markdownContent.trim() };
}

// Process all markdown files
function processGuides() {
  if (!fs.existsSync(guidesDir)) {
    console.log("📁 Pasta 'guias' não encontrada. Criando...");
    fs.mkdirSync(guidesDir, { recursive: true });
    console.log("✅ Pasta 'guias' criada com sucesso!");
    return;
  }

  const files = fs
    .readdirSync(guidesDir)
    .filter((file) => file.endsWith(".md"))
    .sort();

  if (files.length === 0) {
    console.log("⚠️  Nenhum arquivo .md encontrado na pasta 'guias'");
    fs.writeFileSync(outputFile, JSON.stringify([], null, 2));
    return;
  }

  const guides = files.map((file) => {
    const filePath = path.join(guidesDir, file);
    const content = fs.readFileSync(filePath, "utf-8");
    const { metadata, content: markdownContent } = parseFrontmatter(content);

    return {
      id: path.basename(file, ".md"),
      title: metadata.title || "Sem título",
      description: metadata.description || "",
      content: markdownContent,
      category: metadata.category || "general",
      order: parseInt(metadata.order) || 999,
      createdAt: new Date().toISOString(),
      updatedAt: new Date(fs.statSync(filePath).mtime).toISOString(),
    };
  });

  // Sort by category and order
  guides.sort((a, b) => {
    if (a.category !== b.category) {
      return a.category.localeCompare(b.category);
    }
    return a.order - b.order;
  });

  fs.writeFileSync(outputFile, JSON.stringify(guides, null, 2));
  console.log(`✅ ${guides.length} guia(s) processado(s) com sucesso!`);
  guides.forEach((guide) => {
    console.log(`   📄 ${guide.title} (${guide.category})`);
  });
}

processGuides();
