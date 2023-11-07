// NAVIGATION
export const NAV_LINKS = [
    { href: '/about', key: 'about_us', label: 'About Us' },
    { href: '/products', key: 'products', label: 'Products' },
    { href: '/events', key: 'events', label: 'Events'},
    { href: '/request', key: 'request', label: 'Request'},
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