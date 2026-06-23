import { company } from "@/lib/data";

/**
 * robots.txt — generated at build time and emitted as /robots.txt in the static
 * export. Allows all standard crawlers AND explicitly welcomes the major AI /
 * answer-engine crawlers (so the site can be cited in ChatGPT, Claude,
 * Perplexity, Gemini and Google AI Overviews), and points to the sitemap.
 */
const AI_CRAWLERS = [
  "GPTBot", // OpenAI training
  "OAI-SearchBot", // ChatGPT search
  "ChatGPT-User", // ChatGPT browsing
  "ClaudeBot", // Anthropic crawler
  "Claude-Web",
  "anthropic-ai",
  "PerplexityBot", // Perplexity index
  "Perplexity-User",
  "Google-Extended", // Gemini / AI Overviews
  "Applebot-Extended", // Apple Intelligence
  "Amazonbot",
  "CCBot", // Common Crawl (feeds many LLMs)
];

export default function robots() {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      ...AI_CRAWLERS.map((userAgent) => ({ userAgent, allow: "/" })),
    ],
    sitemap: `${company.url}/sitemap.xml`,
    host: company.url,
  };
}
