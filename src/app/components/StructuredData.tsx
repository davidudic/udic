import { content } from '@/content/content';

const StructuredData = () => {
    const knowsAbout = Array.from(
      new Set(content.skills.flatMap((group) => group.items).map((item) => item.replace(/\s*\(.*\)\s*/g, '').trim()))
    ).slice(0, 25);

    const structuredData = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Person',
          '@id': 'https://udic.cz/#person',
          name: content.person.name,
          jobTitle: content.person.title,
          description:
            'Full‑stack developer zaměřený na moderní UI, API, databáze a integrace (Next.js, TypeScript, C#, PostgreSQL).',
          url: 'https://udic.cz',
          image: 'https://udic.cz/me.png',
          sameAs: [
            content.links.github,
            content.links.linkedin
          ],
          email: content.contact.email,
          telephone: content.contact.phone.replace(/\s+/g, ''),
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Liberec',
            addressCountry: 'CZ'
          },
          knowsAbout
        },
        {
          '@type': 'WebSite',
          '@id': 'https://udic.cz/#website',
          url: 'https://udic.cz',
          name: 'David Udič Portfolio',
          publisher: {
            '@id': 'https://udic.cz/#person'
          },
          inLanguage: 'cs-CZ'
        },
        {
          '@type': 'Service',
          '@id': 'https://udic.cz/#service',
          name: 'Full‑stack web development',
          description: 'Vývoj moderních webových produktů: UI/UX, frontend, backend API, databáze a integrace.',
          provider: {
            '@id': 'https://udic.cz/#person'
          },
          areaServed: 'CZ',
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Services',
            itemListElement: [
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Frontend & UI engineering'
                }
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Backend API & integrations'
                }
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Database design (SQL / NoSQL)'
                }
              }
            ]
          }
        }
      ]
    };
  
    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    );
  };
  
  export default StructuredData;
