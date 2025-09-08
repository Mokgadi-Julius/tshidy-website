export default function FAQSchema() {
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What services does Tshidy Domestic & Nanny Services offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer comprehensive home care services including professional nannies, domestic workers, caregivers for elderly, au pairs, 24/7 night care services, and expert gardening services across South Africa."
        }
      },
      {
        "@type": "Question", 
        "name": "Which areas in South Africa do you serve?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We provide services across major South African cities including Johannesburg, Cape Town, Durban, and Pretoria, as well as surrounding areas in Gauteng, Western Cape, and KwaZulu-Natal provinces."
        }
      },
      {
        "@type": "Question",
        "name": "Are all your staff background checked and vetted?",
        "acceptedAnswer": {
          "@type": "Answer", 
          "text": "Yes, all our domestic workers, nannies, and caregivers undergo thorough background checks, reference verification, and professional training to ensure your family's safety and satisfaction."
        }
      },
      {
        "@type": "Question",
        "name": "How much do your domestic and nanny services cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our pricing varies based on service type, hours required, and location. We offer competitive rates for live-in, live-out, part-time, and full-time positions. Contact us for a personalized quote."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide emergency or same-day domestic services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we offer 24/7 emergency services and can often provide same-day placement for urgent domestic and childcare needs, subject to availability in your area."
        }
      },
      {
        "@type": "Question",
        "name": "What is the experience level of your nannies and domestic workers?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our team includes highly experienced professionals with 5+ years average experience. Many hold formal qualifications in childcare, elderly care, or domestic services, ensuring quality care for your family."
        }
      },
      {
        "@type": "Question",
        "name": "How can I contact Tshidy Domestic & Nanny Services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can reach us via WhatsApp at +27 649 872 099, call us directly, or email info@tshidydomesticnannyservices.co.za. We're available 24/7 to discuss your home care needs."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer specialized care for elderly or disabled family members?", 
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we provide specialized caregivers trained in elderly care, disability support, and medical assistance. Our caregivers can help with daily activities, medication reminders, and companionship."
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
    />
  );
}