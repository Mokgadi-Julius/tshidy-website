import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.tshidydomesticnannyservices.co.za'),
  title: {
    default: "Tshidy Domestic & Nanny Services - Professional Home Care Solutions in South Africa",
    template: "%s | Tshidy Domestic & Nanny Services"
  },
  description: "Top-rated domestic and nanny services in Johannesburg, Cape Town, Durban & Pretoria. Trusted caregivers, experienced nannies, reliable domestic workers, and skilled gardeners. Available 24/7 with 5+ years of experience serving 500+ happy families across South Africa.",
  keywords: "nanny services Johannesburg, domestic workers Cape Town, caregivers Durban, au pairs Pretoria, night care South Africa, gardening services, childcare, elderly care, home services, professional nannies, domestic help, housekeeping services, babysitting, live-in nanny, part-time domestic worker, trusted nannies, background checked staff, insured domestic services, affordable home care",
  authors: [{ name: "Tshidy Domestic & Nanny Services", url: "https://www.tshidydomesticnannyservices.co.za" }],
  creator: "Tshidy Domestic & Nanny Services",
  publisher: "Tshidy Domestic & Nanny Services",
  category: "Home Services",
  classification: "Business",
  openGraph: {
    title: "Tshidy Domestic & Nanny Services - Professional Home Care in South Africa",
    description: "Professional domestic and nanny services you can trust. Serving families across Johannesburg, Cape Town, Durban, and Pretoria with experienced, vetted staff.",
    url: "https://www.tshidydomesticnannyservices.co.za",
    siteName: "Tshidy Domestic & Nanny Services",
    locale: "en_ZA",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Tshidy Domestic & Nanny Services - Professional Home Care Solutions",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@TshidyServices",
    creator: "@TshidyServices",
    title: "Tshidy Domestic & Nanny Services - Professional Home Care in South Africa",
    description: "Professional domestic and nanny services you can trust. Serving families across South Africa.",
    images: [
      {
        url: "/logo.png",
        alt: "Tshidy Domestic & Nanny Services Logo",
      }
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.tshidydomesticnannyservices.co.za",
    languages: {
      'en-ZA': 'https://www.tshidydomesticnannyservices.co.za',
      'en': 'https://www.tshidydomesticnannyservices.co.za/en',
    },
  },
  verification: {
    google: "your-google-site-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
    other: {
      "msvalidate.01": "your-bing-verification-code",
      "facebook-domain-verification": "your-facebook-verification-code",
    },
  },
  appleWebApp: {
    capable: true,
    title: "Tshidy Services",
    statusBarStyle: "default",
  },
  icons: {
    icon: [
      { url: '/favicons/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicons/favicon-64x64.png', sizes: '64x64', type: 'image/png' },
    ],
    apple: [
      { url: '/favicons/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { url: '/favicons/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/favicons/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    shortcut: '/favicons/favicon.ico',
  },
  manifest: '/favicons/manifest.json',
  formatDetection: {
    telephone: true,
    date: false,
    address: true,
    email: true,
    url: true,
  },
  abstract: "South Africa's leading domestic and nanny services provider offering professional home care solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": "https://www.tshidydomesticnannyservices.co.za/#business",
      "name": "Tshidy Domestic & Nanny Services",
      "alternateName": "Tshidy Services",
      "description": "South Africa's leading domestic and nanny services provider offering professional home care solutions including nannies, domestic workers, caregivers, au pairs, night care, and gardening services.",
      "url": "https://www.tshidydomesticnannyservices.co.za",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.tshidydomesticnannyservices.co.za/logo.png",
        "width": 400,
        "height": 120
      },
      "image": [
        "https://www.tshidydomesticnannyservices.co.za/logo.png",
        "https://www.tshidydomesticnannyservices.co.za/Nannies.png",
        "https://www.tshidydomesticnannyservices.co.za/DomesticWork.png",
        "https://www.tshidydomesticnannyservices.co.za/CareGivers.png"
      ],
      "telephone": "+27649872099",
      "email": "info@tshidydomesticnannyservices.co.za",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Professional Service Area",
        "addressLocality": "Johannesburg",
        "addressRegion": "Gauteng",
        "postalCode": "2000",
        "addressCountry": "ZA"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": -26.2041,
        "longitude": 28.0473
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          "opens": "00:00",
          "closes": "23:59"
        }
      ],
      "priceRange": "$$",
      "paymentAccepted": ["Cash", "Credit Card", "Bank Transfer", "Mobile Payment"],
      "currenciesAccepted": "ZAR",
      "serviceArea": [
        {
          "@type": "City",
          "name": "Johannesburg",
          "addressRegion": "Gauteng",
          "addressCountry": "ZA"
        },
        {
          "@type": "City", 
          "name": "Cape Town",
          "addressRegion": "Western Cape",
          "addressCountry": "ZA"
        },
        {
          "@type": "City",
          "name": "Durban", 
          "addressRegion": "KwaZulu-Natal",
          "addressCountry": "ZA"
        },
        {
          "@type": "City",
          "name": "Pretoria",
          "addressRegion": "Gauteng", 
          "addressCountry": "ZA"
        }
      ],
      "areaServed": [
        "Johannesburg",
        "Cape Town", 
        "Durban",
        "Pretoria",
        "Gauteng",
        "Western Cape",
        "KwaZulu-Natal",
        "South Africa"
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Professional Home Care Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "availability": "https://schema.org/InStock",
            "priceRange": "$$",
            "itemOffered": {
              "@type": "Service",
              "name": "Professional Nanny Services",
              "description": "Experienced, background-checked nannies for childcare, infant care, and family support",
              "provider": {
                "@id": "https://www.tshidydomesticnannyservices.co.za/#business"
              }
            }
          },
          {
            "@type": "Offer", 
            "availability": "https://schema.org/InStock",
            "priceRange": "$$",
            "itemOffered": {
              "@type": "Service",
              "name": "Domestic Workers & Housekeeping",
              "description": "Reliable domestic workers for cleaning, housekeeping, and home maintenance",
              "provider": {
                "@id": "https://www.tshidydomesticnannyservices.co.za/#business"
              }
            }
          },
          {
            "@type": "Offer",
            "availability": "https://schema.org/InStock", 
            "priceRange": "$$",
            "itemOffered": {
              "@type": "Service",
              "name": "Professional Caregivers",
              "description": "Compassionate caregivers for elderly care and special needs assistance",
              "provider": {
                "@id": "https://www.tshidydomesticnannyservices.co.za/#business"
              }
            }
          },
          {
            "@type": "Offer",
            "availability": "https://schema.org/InStock",
            "priceRange": "$$", 
            "itemOffered": {
              "@type": "Service",
              "name": "Au Pair Services",
              "description": "Cultural exchange au pairs providing childcare and light housekeeping",
              "provider": {
                "@id": "https://www.tshidydomesticnannyservices.co.za/#business"
              }
            }
          },
          {
            "@type": "Offer",
            "availability": "https://schema.org/InStock",
            "priceRange": "$$",
            "itemOffered": {
              "@type": "Service", 
              "name": "Night Care Services",
              "description": "24/7 night care for newborns, elderly, and special medical needs",
              "provider": {
                "@id": "https://www.tshidydomesticnannyservices.co.za/#business"
              }
            }
          },
          {
            "@type": "Offer",
            "availability": "https://schema.org/InStock",
            "priceRange": "$$",
            "itemOffered": {
              "@type": "Service",
              "name": "Professional Gardening Services", 
              "description": "Expert gardeners for lawn maintenance, landscaping, and garden care",
              "provider": {
                "@id": "https://www.tshidydomesticnannyservices.co.za/#business"
              }
            }
          }
        ]
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "150",
        "bestRating": "5",
        "worstRating": "1"
      },
      "foundingDate": "2019",
      "numberOfEmployees": "50-100",
      "slogan": "Professional Home Care Solutions You Can Trust",
      "knowsAbout": [
        "Childcare",
        "Domestic Services",
        "Elderly Care", 
        "Home Care",
        "Nanny Services",
        "Housekeeping",
        "Gardening",
        "Au Pair Programs"
      ],
      "sameAs": [
        "https://www.facebook.com/tshidydomesticnannyservices",
        "https://www.instagram.com/tshidydomesticnannyservices", 
        "https://www.linkedin.com/company/tshidy-domestic-nanny-services",
        "https://twitter.com/TshidyServices"
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": "https://www.tshidydomesticnannyservices.co.za/#organization",
      "name": "Tshidy Domestic & Nanny Services",
      "url": "https://www.tshidydomesticnannyservices.co.za",
      "logo": "https://www.tshidydomesticnannyservices.co.za/logo.png",
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+27649872099",
          "contactType": "customer service",
          "availableLanguage": ["English", "Afrikaans", "Zulu"],
          "hoursAvailable": "Mo-Su 00:00-23:59"
        },
        {
          "@type": "ContactPoint", 
          "email": "info@tshidydomesticnannyservices.co.za",
          "contactType": "customer service",
          "availableLanguage": ["English", "Afrikaans"]
        }
      ]
    }
  ];

  return (
    <html lang="en-ZA" dir="ltr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <meta name="google-site-verification" content="your-google-site-verification-code" />
        <meta name="msvalidate.01" content="your-bing-verification-code" />
        <link rel="canonical" href="https://www.tshidydomesticnannyservices.co.za" />
        <link rel="alternate" type="application/rss+xml" title="Tshidy Services Blog RSS" href="/blog/rss.xml" />
        <meta name="geo.region" content="ZA" />
        <meta name="geo.placename" content="South Africa" />
        <meta name="geo.position" content="-26.2041;28.0473" />
        <meta name="ICBM" content="-26.2041, 28.0473" />
        <meta name="rating" content="general" />
        <meta name="distribution" content="global" />
        <meta name="coverage" content="Worldwide" />
        <meta name="target" content="all" />
        <meta name="HandheldFriendly" content="True" />
        <meta name="MobileOptimized" content="320" />
        <meta name="theme-color" content="#059669" />
        <meta name="msapplication-TileColor" content="#059669" />
        {/* Favicons */}
        <link rel="icon" type="image/x-icon" href="/favicons/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="64x64" href="/favicons/favicon-64x64.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/favicons/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/favicons/android-chrome-512x512.png" />
        <link rel="manifest" href="/favicons/manifest.json" />
        <link rel="shortcut icon" href="/favicons/favicon.ico" />
        
        {/* PWA & Mobile App */}
        <meta name="application-name" content="Tshidy Services" />
        <meta name="apple-mobile-web-app-title" content="Tshidy Services" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-touch-fullscreen" content="yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        <link rel="apple-touch-startup-image" href="/favicons/apple-touch-icon.png" />
        
        {/* Microsoft/Windows Specific */}
        <meta name="msapplication-TileImage" content="/favicons/android-chrome-192x192.png" />
        <meta name="msapplication-square70x70logo" content="/favicons/favicon-64x64.png" />
        <meta name="msapplication-square150x150logo" content="/favicons/android-chrome-192x192.png" />
        <meta name="msapplication-wide310x150logo" content="/favicons/android-chrome-512x512.png" />
        <meta name="msapplication-square310x310logo" content="/favicons/android-chrome-512x512.png" />
        <meta name="msapplication-navbutton-color" content="#059669" />
        <meta name="msapplication-starturl" content="/" />
        
        {/* Performance Optimization */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
