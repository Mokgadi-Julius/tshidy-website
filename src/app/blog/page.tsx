import { Metadata } from 'next';
import BlogClient from './BlogClient';

export const metadata: Metadata = {
  title: 'Expert Tips & Industry Insights - Tshidy Domestic & Nanny Services Blog',
  description: 'Stay informed with the latest trends, tips, and insights in domestic and childcare services in South Africa. Expert advice from Johannesburg, Cape Town, Durban & Pretoria professionals.',
  keywords: 'domestic services blog, nanny tips South Africa, childcare advice Johannesburg, domestic worker hiring guide Cape Town, au pair services Durban, eldercare tips Pretoria, home care insights',
  openGraph: {
    title: 'Expert Insights & Industry Tips - Tshidy Services Blog',
    description: 'Professional advice and industry insights for domestic and childcare services in South Africa.',
    url: 'https://www.tshidydomesticnannyservices.co.za/blog',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.tshidydomesticnannyservices.co.za/blog',
  },
};

export default function BlogPage() {
  return <BlogClient />;
}