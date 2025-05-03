const StructuredData = () => {
    const structuredData = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Person',
          '@id': 'https://udic.cz/#person',
          name: 'David Udič',
          jobTitle: 'Web Developer',
          description: 'Frontend web developer a student IT specializující se na React a Next.js',
          url: 'https://udic.cz',
          image: 'https://udic.cz/me.png',
          sameAs: [
            'https://github.com/davidudic',
            'https://linkedin.com/in/david-udic'
          ],
          email: 'davidudic06fx@gmail.com',
          telephone: '+420727828136',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Liberec',
            addressCountry: 'CZ'
          },
          knowsAbout: ['React', 'Next.js', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'Frontend Development']
        },
        {
          '@type': 'WebSite',
          '@id': 'https://udic.cz/#website',
          url: 'https://udic.cz',
          name: 'David Udič Portfolio',
          publisher: {
            '@id': 'https://udic.cz/#person'
          },
          potentialAction: {
            '@type': 'SearchAction',
            target: 'https://udic.cz/?s={search_term_string}',
            'query-input': 'required name=search_term_string'
          }
        },
        {
          '@type': 'Service',
          '@id': 'https://udic.cz/#service',
          name: 'Tvorba webových stránek na míru',
          description: 'Profesionální tvorba moderních webových stránek s využitím React a Next.js',
          provider: {
            '@id': 'https://udic.cz/#person'
          },
          areaServed: 'CZ',
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Web Development Services',
            itemListElement: [
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Frontend Development'
                }
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'React Development'
                }
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Next.js Development'
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