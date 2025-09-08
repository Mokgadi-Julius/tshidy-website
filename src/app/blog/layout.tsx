export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const blogStructuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Tshidy Domestic & Nanny Services Blog",
    "description": "Expert tips and industry insights for domestic and childcare services in South Africa",
    "url": "https://www.tshidydomesticnannyservices.co.za/blog",
    "publisher": {
      "@type": "Organization",
      "name": "Tshidy Domestic & Nanny Services",
      "url": "https://www.tshidydomesticnannyservices.co.za",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.tshidydomesticnannyservices.co.za/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.tshidydomesticnannyservices.co.za/blog"
    },
    "inLanguage": "en-ZA",
    "audience": {
      "@type": "Audience",
      "audienceType": "Parents, Families, Elderly Care Seekers",
      "geographicArea": {
        "@type": "Country",
        "name": "South Africa"
      }
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogStructuredData) }}
      />
      {children}
    </>
  );
}