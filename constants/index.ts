// NAVIGATION
export const NAV_LINKS = [
    { href: '/about', key: 'about_us', label: 'About Us', color: 'text-white' },
    { href: '/products', key: 'products', label: 'Products', color: 'text-gold-10' },
    { href: '/events', key: 'events', label: 'Events', color: 'text-white' },
    { href: '/request', key: 'request', label: 'Request', color: 'text-gold-10'},
];
  
  
  // FOOTER SECTION
  export const FOOTER_LINKS = [
    {
      title: 'Help',
      links: [
        ['Contact Us', "/request"],
        // ['Customer Reviews', "/"]
      ],
    },
    {
      title: 'Sitemap',
      links: [['About Us', "/about"], ['Products', "/products"], ['Events', "events"], ],
    },
    {
      title: 'Contact Us',
      links: [['Admin Officer: (484) 620-9653', "/"], ["Email Officer: quinnwoodcrafting@gmail.com", "/"]]
    }
  ];
  
  
  export const SOCIALS = {
    title: 'Social',
    links: [
      ['/facebook.svg', 'https://www.facebook.com/quinnwoodcrafting/'],
      ['/instagram.svg', 'https://www.instagram.com/quinnwoodcrafting/'],
      ['/etsy.svg', 'https://www.etsy.com/shop/QuinnWoodcrafting'],
    ],
  };