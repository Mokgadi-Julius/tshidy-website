import { Metadata } from 'next';

const blogPosts = [
  {
    id: 1,
    title: "The Ultimate Guide to Hiring a Nanny in South Africa: What Every Parent Needs to Know",
    excerpt: "Discover the essential steps, legal requirements, and red flags to watch for when hiring a nanny in South Africa. Our comprehensive guide covers everything from interviews to contracts.",
    author: "Sarah Johnson",
    date: "2024-03-15",
    readTime: "8 min read",
    category: "Childcare",
    image: "/Nannies.png",
    tags: ["nanny", "childcare", "hiring", "legal", "South Africa"],
    featured: true
  },
  {
    id: 2,
    title: "5 Essential Questions to Ask Before Hiring Domestic Help",
    excerpt: "Protect your family and ensure quality service by asking these crucial questions during the hiring process. Learn what separates professional domestic workers from the rest.",
    author: "Michael Thompson",
    date: "2024-03-12",
    readTime: "6 min read",
    category: "Domestic Services",
    image: "/DomesticWork.png",
    tags: ["domestic", "hiring", "interview", "home security"],
    featured: false
  },
];

interface GenerateMetadataProps {
  params: { id: string };
}

export function generateMetadata({ params }: GenerateMetadataProps): Metadata {
  const post = blogPosts.find(p => p.id === parseInt(params.id));
  
  if (!post) {
    return {
      title: 'Article Not Found | Tshidy Domestic & Nanny Services',
      description: 'The requested article could not be found.',
    };
  }

  const publishedTime = new Date(post.date).toISOString();
  const modifiedTime = new Date().toISOString();

  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.tags.join(', ') + ', South Africa domestic services, professional home care',
    authors: [{ name: post.author }],
    category: post.category,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://www.tshidydomesticnannyservices.co.za/blog/${post.id}`,
      siteName: 'Tshidy Domestic & Nanny Services Blog',
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
          type: 'image/png',
        },
      ],
      locale: 'en_ZA',
      type: 'article',
      publishedTime,
      modifiedTime,
      authors: [post.author],
      section: post.category,
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      site: '@TshidyServices',
      creator: '@TshidyServices',
      images: [
        {
          url: post.image,
          alt: post.title,
        }
      ],
    },
    alternates: {
      canonical: `https://www.tshidydomesticnannyservices.co.za/blog/${post.id}`,
    },
    other: {
      'article:author': post.author,
      'article:published_time': publishedTime,
      'article:modified_time': modifiedTime,
      'article:section': post.category,
      'article:tag': post.tags.join(','),
    },
  };
}