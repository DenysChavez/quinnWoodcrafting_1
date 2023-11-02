// NAVIGATION
export const NAV_LINKS = [
    { href: '/about', key: 'about_us', label: 'About Us', color: 'text-white' },
    { href: '/products', key: 'products', label: 'Products', color: 'text-gold-10' },
    { href: '/workshops_and_events', key: 'workshops_and_events', label: 'Workshops & Events', color: 'text-white' },
    { href: '/request', key: 'request', label: 'Request', color: 'text-gold-10'},
];
  
  
  // FOOTER SECTION
  export const FOOTER_LINKS = [
    {
      title: 'Help',
      links: [
        ['Contact Us', "/request"],
        ['Customer Reviews', "/"]
      ],
    },
    {
      title: 'Sitemap',
      links: [['About Us', "/about"], ['Products', "/products"], ['Workshops & Events', "workshops_and_events"], ],
    },
    {
      title: 'Contact Us',
      links: [['Admin Officer: 123-456-789', "/"], ["Email Officer: quinnwoodcrafting@email.com", "/"]]
    }
  ];
  
  
  export const SOCIALS = {
    title: 'Social',
    links: [
      ['/facebook.svg', '/'],
      ['/instagram.svg', '/'],
      ['/etsy.svg', '/'],
    ],
  };