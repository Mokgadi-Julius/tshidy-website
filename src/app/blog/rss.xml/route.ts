import { NextResponse } from 'next/server';

export const dynamic = 'force-static';

const blogPosts = [
  {
    id: 1,
    title: "The Ultimate Guide to Hiring a Nanny in South Africa: What Every Parent Needs to Know",
    excerpt: "Discover the essential steps, legal requirements, and red flags to watch for when hiring a nanny in South Africa. Our comprehensive guide covers everything from interviews to contracts.",
    date: "2024-03-15",
    category: "Childcare",
  },
  {
    id: 2,
    title: "5 Essential Questions to Ask Before Hiring Domestic Help",
    excerpt: "Protect your family and ensure quality service by asking these crucial questions during the hiring process. Learn what separates professional domestic workers from the rest.",
    date: "2024-03-12",
    category: "Domestic Services",
  },
  {
    id: 7,
    title: "Domestic Worker Rights in South Africa: A Complete Guide for 2024",
    excerpt: "Stay compliant with South African labor laws while ensuring fair treatment for domestic workers. Our comprehensive guide covers minimum wages, working hours, and legal requirements in Johannesburg, Cape Town, and Durban.",
    date: "2024-03-01",
    category: "Legal & Compliance",
  },
  {
    id: 11,
    title: "Cost Guide: Domestic Services Rates Across South Africa 2024",
    excerpt: "Get up-to-date pricing information for domestic services across major South African cities. Compare rates in Johannesburg, Cape Town, Durban, and Pretoria for different types of home care.",
    date: "2024-02-20",
    category: "Pricing & Rates",
  },
];

export async function GET() {
  const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Tshidy Domestic &amp; Nanny Services Blog</title>
    <description>Expert tips and industry insights for domestic and childcare services in South Africa</description>
    <link>https://www.tshidydomesticnannyservices.co.za/blog</link>
    <language>en-za</language>
    <managingEditor>info@tshidydomesticnannyservices.co.za (Tshidy Services Team)</managingEditor>
    <webMaster>info@tshidydomesticnannyservices.co.za (Tshidy Services Team)</webMaster>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="https://www.tshidydomesticnannyservices.co.za/blog/rss.xml" rel="self" type="application/rss+xml"/>
    
    ${blogPosts.map(post => `
    <item>
      <title>${post.title}</title>
      <description>${post.excerpt}</description>
      <link>https://www.tshidydomesticnannyservices.co.za/blog/${post.id}</link>
      <guid>https://www.tshidydomesticnannyservices.co.za/blog/${post.id}</guid>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <category>${post.category}</category>
    </item>`).join('')}
    
  </channel>
</rss>`;

  return new NextResponse(rssXml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}