import { Metadata } from 'next';

const blogPosts = [
  {
    id: 1,
    title: "The Ultimate Guide to Hiring a Nanny in South Africa: What Every Parent Needs to Know",
    excerpt: "From background checks to legal contracts - discover the essential steps, red flags, and insider secrets that guarantee you'll find the perfect nanny for your family. Get our proven 12-step hiring process.",
    author: "Dr. Sarah Mthembu",
    date: "2024-12-15",
    readTime: "12 min read",
    category: "Childcare",
    image: "/Nannies.png",
    tags: ["nanny", "childcare", "hiring", "legal", "South Africa", "background checks"],
    featured: true
  },
  {
    id: 2,
    title: "5 Critical Questions That Separate Professional Domestic Workers From Amateurs",
    excerpt: "Don't gamble with your family's safety and your home's security. These 5 revealing questions will expose inexperienced domestic workers before you hire them. Plus: get our free interview script.",
    author: "Michael Ndaba",
    date: "2024-12-12",
    readTime: "8 min read",
    category: "Domestic Services",
    image: "/DomesticWork.png",
    tags: ["domestic worker", "hiring", "interview", "home security", "professional cleaning"],
    featured: true
  },
  {
    id: 3,
    title: "Elderly Care in South Africa: How to Choose the Perfect Caregiver for Your Loved One",
    excerpt: "Your elderly loved one deserves dignity, respect, and professional care. Learn the essential qualities to look for, legal requirements, and warning signs that could save a life. Complete guide with checklist included.",
    author: "Dr. Nomsa Sithole",
    date: "2024-12-10",
    readTime: "10 min read",
    category: "Elderly Care",
    image: "/CareGivers.png",
    tags: ["elderly care", "caregiver", "senior care", "health", "safety", "family"],
    featured: true
  },
  {
    id: 4,
    title: "AU Pairs vs Nannies in South Africa: The Complete Comparison Guide for Modern Families",
    excerpt: "Confused about AU pairs vs nannies? This comprehensive comparison covers costs, benefits, legal requirements, and cultural exchange opportunities. Make the right choice for your family's unique needs.",
    author: "Emma Van Der Merwe",
    date: "2024-12-08",
    readTime: "9 min read",
    category: "Childcare",
    image: "/AUPAIRS.png",
    tags: ["au pair", "nanny", "childcare", "cultural exchange", "international", "family"],
    featured: false
  },
  {
    id: 5,
    title: "Night Care Services: The Ultimate Guide to Overnight Childcare and Elderly Care in South Africa",
    excerpt: "Need reliable overnight care for your children or elderly relatives? Discover the essential qualities, safety protocols, and cost considerations for professional night care services. Complete guide with emergency procedures.",
    author: "Nurse Patricia Mokoena",
    date: "2024-12-05",
    readTime: "11 min read",
    category: "Night Care",
    image: "/NIGHTGIVERS.png",
    tags: ["night care", "overnight care", "sleep training", "elderly care", "emergency care", "safety"],
    featured: false
  },
  {
    id: 6,
    title: "Professional Gardening Services in South Africa: Transform Your Outdoor Space with Expert Care",
    excerpt: "From drought-resistant indigenous gardens to luxury landscaping - discover how professional gardening services can increase your property value by up to 15%. Complete guide to hiring the right garden professional.",
    author: "Landscape Specialist John Mthimunye",
    date: "2024-12-02",
    readTime: "13 min read",
    category: "Garden Services",
    image: "/GARDEN.png",
    tags: ["gardening", "landscaping", "property value", "indigenous plants", "irrigation", "maintenance"],
    featured: false
  }
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