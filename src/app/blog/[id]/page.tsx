import BlogPostClient from './BlogPostClient';

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

interface BlogPostPageProps {
  params: {
    id: string;
  };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.id.toString(),
  }));
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  return <BlogPostClient postId={params.id} />;
}