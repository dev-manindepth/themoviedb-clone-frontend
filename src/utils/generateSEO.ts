// Define a type for the page meta
export type PageMeta = {
  title: string;
  description: string;
  keywords: string[];
};

// Function to generate the SEO headers
export function generateSEOHeaders(meta: PageMeta): void {
  const { title, description, keywords } = meta;

  // Set the page title
  document.title = title;

  // Create and set the meta description tag
  const descriptionMeta = document.createElement("meta");
  descriptionMeta.name = "description";
  descriptionMeta.content = description;
  document.head.appendChild(descriptionMeta);

  // Create and set the meta keywords tag
  const keywordsMeta = document.createElement("meta");
  keywordsMeta.name = "keywords";
  keywordsMeta.content = keywords.join(", ");
  document.head.appendChild(keywordsMeta);
}


