import { zones } from '@/components/sections/Links';
import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const zonePages: MetadataRoute.Sitemap = zones.map((zone) => ({
    url: `https://apartment-paint-kuwait.mountain-egy.site/${zone.href}`,
    lastModified: new Date(),
    changeFrequency: 'monthly', // Correctly typed
    priority: 0.5,
  }))

  return [
    {
      url: 'https://apartment-paint-kuwait.mountain-egy.site/',
      lastModified,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://apartment-paint-kuwait.mountain-egy.site/aspagh',
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://apartment-paint-kuwait.mountain-egy.site/sabaagh_rakhis',
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://apartment-paint-kuwait.mountain-egy.site/sabaagh_shatir',
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://apartment-paint-kuwait.mountain-egy.site/muealim_sabagh',
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://apartment-paint-kuwait.mountain-egy.site/sabaagh_alkuayt',
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://apartment-paint-kuwait.mountain-egy.site/aisbgh_alkuayt',
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://apartment-paint-kuwait.mountain-egy.site/sabaagh_shatir_bi_alkuayt',
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://apartment-paint-kuwait.mountain-egy.site/muealim_sabaagh_bi_alkuayt',
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://apartment-paint-kuwait.mountain-egy.site/faniy_sabagh',
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://apartment-paint-kuwait.mountain-egy.site/sabaagh_mumtaz_bi_alkuayt',
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://apartment-paint-kuwait.mountain-egy.site/dikurat_sabagh_lilkuayt',
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://apartment-paint-kuwait.mountain-egy.site/manazil_sabaagh_bi_alkuayt',
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://apartment-paint-kuwait.mountain-egy.site/shaqaq_sabaagh_bi_alkuayt',
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://apartment-paint-kuwait.mountain-egy.site/sabaagh_buyut_aitfal',
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://apartment-paint-kuwait.mountain-egy.site/sabaagh_rusumat_aitfal',
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://apartment-paint-kuwait.mountain-egy.site/sabaagh_rakhisat_bi_alkuayt',
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://apartment-paint-kuwait.mountain-egy.site/dihanat_alkuayt',
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://apartment-paint-kuwait.mountain-egy.site/tarkib_waraq_judran',
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://apartment-paint-kuwait.mountain-egy.site/asbagh_abwab_khashabia',
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://apartment-paint-kuwait.mountain-egy.site/muealim_jabs_burd',
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    ...zonePages
  ];
}
