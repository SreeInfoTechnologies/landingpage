/**
 * Renders a JSON-LD <script> tag. Server component — the structured data is in
 * the initial HTML, so JS-less AI crawlers and Google both read it directly.
 * `data` is a plain object (a schema.org graph/node from src/lib/schema.js).
 */
export default function JsonLd({ data }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
