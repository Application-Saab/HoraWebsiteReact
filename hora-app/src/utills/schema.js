// src/utils/schema.js

export const getDecorationOrganizationSchema = () => ({
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Hora",
    "alternateName": "Hora Services",
    "url": "https://horaservices.com",
    "keywords": "birthday decoration, anniversary decoration, party themes decorations, candlelight dinners, welcome baby decoration, baby shower decoration, first night decorations, haldi decoration, mehndi decoration, balloon room decoration, birthday decorators near me",
    "description": "birthday decoration, anniversary decoration, party themes decorations, candlelight dinners, welcome baby decoration, baby shower decoration, first night decorations, haldi decoration, mehndi decoration, balloon room decoration, birthday decorators near me",
    "logo": "https://horaservices.com/content/img/logo_white.svg",
    "priceRange": "999-39999",
    "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.5",
    "reviewCount": "2005"
  },
    "sameAs": [
      "https://www.facebook.com/people/Hora/61550111701616/",
      "https://www.instagram.com/horaservices/?fbclid=IwAR0PktJ-rl5rKC6YGSZ8BSw3m8o9qMfLpJchO17FCEZuCXKxvASZWRymifA",
      "https://www.youtube.com/channel/UCj5gMUjptHut0aGYHxCbE5g",
      "https://horaservices.com"
    ],
    "image": [
      "https://horaservices.com/api/uploads/attachment-1706520980436.png",
      "https://horaservices.com/api/uploads/attachment-1711520474508.png",
      "https://horaservices.com/api/uploads/attachment-1706459457063.png"
    ]
  });

  export const getDecorationCatOrganizationSchema = (categoryName) => ({
    "@context": "https://schema.org",
    "@type": "Product",
    "brand": "Hora Services",
    "name": `${categoryName}`,
    "image": [
      "https://horaservices.com/api/uploads/attachment-1706520980436.png",
      "https://horaservices.com/api/uploads/attachment-1711520474508.png",
      "https://horaservices.com/api/uploads/attachment-1706459457063.png"
    ],
    "description": `Book the Coolest Birthday Decorations for Kids in Bangalore. Themed, balloon decorations, or activities for kids, get only the best for your kid with Hora Services.`,
    "brand": "Horservices.com",
    "sku": `${categoryName.toLowerCase().replace(/\s/g, '-')}`,
    "priceRange": "999-39999",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.5",
      "reviewCount": "2005"
    }
  });

export const getDecorationProductOrganizationSchema = (product) => ({
    "@context": "https://schema.org",
    "@type": "Product",
    "name": `${product.name}`,
    "image": [
      "https://horaservices.com/api/uploads/attachment-1706520980436.png",
      "https://horaservices.com/api/uploads/attachment-1711520474508.png",
      "https://horaservices.com/api/uploads/attachment-1706459457063.png"
    ],
    "description": `Book the Coolest Birthday Decorations for Kids in Bangalore. Themed, balloon decorations, or activities for kids, get only the best for your kid with Hora Services.`,
    "brand": "Hora Services",
    "priceRange": "999-39999",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.5",
      "reviewCount": "2005"
    }
  });


  export const getHomeOrganizationSchema = () => ({
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Hora",
    "alternateName": "Hora Services",
    "url": "https://horaservices.com",
    "description": "Want to book a cook for home near you? Hire skilled cooks for a day or book a chef for a party at home with Hora. Get chef for a birthday or house party in Mumbai, Bangalore & Delhi NCR, Hora, Hora services, Horaservices",
    "logo": "https://horaservices.com/content/img/logo_white.svg",
    "sameAs": [
      "https://www.facebook.com/people/Hora/61550111701616/",
      "https://www.instagram.com/horaservices/?fbclid=IwAR0PktJ-rl5rKC6YGSZ8BSw3m8o9qMfLpJchO17FCEZuCXKxvASZWRymifA",
      "https://www.youtube.com/channel/UCj5gMUjptHut0aGYHxCbE5g",
      "https://horaservices.com"
    ],
    "image": [
      "https://horaservices.com/api/uploads/attachment-1706520980436.png",
      "https://horaservices.com/api/uploads/attachment-1711520474508.png",
      "https://horaservices.com/api/uploads/attachment-1706459457063.png"
    ]
  });
