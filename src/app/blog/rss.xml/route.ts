import { NextResponse } from 'next/server';

export const dynamic = 'force-static';

const blogPosts = [
  {
    id: 1,
    title: "The Ultimate Guide to Hiring a Nanny in South Africa: What Every Parent Needs to Know",
    excerpt: "From background checks to legal contracts - discover the essential steps, red flags, and insider secrets that guarantee you'll find the perfect nanny for your family. Get our proven 12-step hiring process.",
    date: "2024-12-15",
    category: "Childcare",
  },
  {
    id: 2,
    title: "5 Critical Questions That Separate Professional Domestic Workers From Amateurs",
    excerpt: "Don't gamble with your family's safety and your home's security. These 5 revealing questions will expose inexperienced domestic workers before you hire them. Plus: get our free interview script.",
    date: "2024-12-12",
    category: "Domestic Services",
  },
  {
    id: 3,
    title: "Elderly Care in South Africa: How to Choose the Perfect Caregiver for Your Loved One",
    excerpt: "Your elderly loved one deserves dignity, respect, and professional care. Learn the essential qualities to look for, legal requirements, and warning signs that could save a life. Complete guide with checklist included.",
    date: "2024-12-10",
    category: "Elderly Care",
  },
  {
    id: 4,
    title: "AU Pairs vs Nannies in South Africa: The Complete Comparison Guide for Modern Families",
    excerpt: "Confused about AU pairs vs nannies? This comprehensive comparison covers costs, benefits, legal requirements, and cultural exchange opportunities. Make the right choice for your family's unique needs.",
    date: "2024-12-08",
    category: "Childcare",
  },
  {
    id: 5,
    title: "Night Care Services: The Ultimate Guide to Overnight Childcare and Elderly Care in South Africa",
    excerpt: "Need reliable overnight care for your children or elderly relatives? Discover the essential qualities, safety protocols, and cost considerations for professional night care services. Complete guide with emergency procedures.",
    date: "2024-12-05",
    category: "Night Care",
  },
  {
    id: 6,
    title: "Professional Gardening Services in South Africa: Transform Your Outdoor Space with Expert Care",
    excerpt: "From drought-resistant indigenous gardens to luxury landscaping - discover how professional gardening services can increase your property value by up to 15%. Complete guide to hiring the right garden professional.",
    date: "2024-12-02",
    category: "Garden Services",
  }
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