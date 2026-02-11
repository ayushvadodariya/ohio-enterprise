
export const clientBrands = [
  // Switchgears
  { id: "lt", name: "L&T", logo: "https://placehold.co/600x400/ffffff/0056b3?text=L%26T", category: "Switchgears" },
  { id: "schneider", name: "Schneider", logo: "/brands/schneider-electric.jpeg", category: "Switchgears" },
  { id: "siemens", name: "Siemens", logo: "/brands/siemens-ingenuity-for-life.jpeg", category: "Switchgears" },
  { id: "legrand", name: "Legrand", logo: "/brands/legrand.jpeg", category: "Switchgears" },
  { id: "chint", name: "Chint", logo: "/brands/chint-electric.jpeg", category: "Switchgears" },

  // Wires & Cables
  { id: "polycab", name: "Polycab", logo: "/brands/polycab.jpg", category: "Wires & Cables" },
  { id: "finolex", name: "Finolex", logo: "https://companieslogo.com/img/orig/FINCABLES.NS_BIG-1039180c.png?t=1720244491", category: "Wires & Cables" },
  { id: "rr", name: "RR Cables", logo: "https://indcdn.indmoney.com/cdn-cgi/image/quality=90,format=auto,metadata=copyright,width=500/https://indcdn.indmoney.com/public/images/INDS27182.png", category: "Wires & Cables" },
  { id: "lapp", name: "Lappkabel", logo: "/brands/lapp-kabel.jpg", category: "Wires & Cables" },

  // Cable Glands & Lugs
  { id: "dowells", name: "Dowells", logo: "/brands/dowells.jpeg", category: "Cable Glands & Lugs" },
  { id: "braco", name: "Braco", logo: "https://placehold.co/400x200/ffffff/000000?text=BRACO", category: "Cable Glands & Lugs" },
  { id: "hex", name: "Hex", logo: "https://placehold.co/400x200/ffffff/000000?text=HEX", category: "Cable Glands & Lugs" },
  { id: "jigo", name: "Jigo", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjJCRs6IQ-x4MdOpI4_U1Ifd1lxW8W-KNGiQ&s", category: "Cable Glands & Lugs" },

  // Lighting and Fixtures
  { id: "crompton", name: "Crompton", logo: "/brands/crompton.jpeg", category: "Lighting and Fixtures" },
  { id: "philips", name: "Philips", logo: "/brands/philips1.jpg", category: "Lighting and Fixtures" },
  { id: "bajaj", name: "Bajaj", logo: "/brands/bajaj1.jpg", category: "Lighting and Fixtures" },
  { id: "wipro", name: "Wipro", logo: "https://placehold.co/600x400/ffffff/0056b3?text=Wipro", category: "Lighting and Fixtures" },
  { id: "havells", name: "Havells", logo: "https://placehold.co/600x400/ffffff/0056b3?text=Havells", category: "Lighting and Fixtures" },
  { id: "oreva", name: "Oreva", logo: "https://placehold.co/400x200/ffffff/000000?text=OREVA", category: "Lighting and Fixtures" },

  // Other Products
  { id: "omron", name: "Omron", logo: "/brands/omron.jpeg", category: "Other Products" },
  { id: "delta", name: "Delta", logo: "https://placehold.co/600x400/ffffff/0056b3?text=Delta", category: "Other Products" },
  { id: "fluke", name: "Fluke", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCf_c8HEFXHIGewx96as2exQ40l3_UojlLyw&s", category: "Other Products" },
  { id: "meco", name: "Meco", logo: "https://static.wixstatic.com/media/c76346_c1d73d22d16c4f0d989355971cd7dfec~mv2.png/v1/fill/w_364,h_205,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Kusam%20Electrical%20Instruments%20LLP.png", category: "Other Products" },
  { id: "kusam-meco", name: "Kusam-Meco", logo: "https://placehold.co/400x200/ffffff/000000?text=Kusam-Meco", category: "Other Products" },
  { id: "selec", name: "Selec", logo: "/brands/selec1.jpg", category: "Other Products" },
  { id: "htc", name: "HTC", logo: "https://placehold.co/400x200/ffffff/000000?text=HTC+Instruments", category: "Other Products" },
  { id: "testo", name: "Testo", logo: "https://static.cdnlogo.com/logos/t/15/testo.svg", category: "Other Products" },
  { id: "bosch", name: "Bosch", logo: "/brands/bosh.jpeg", category: "Other Products" },
  { id: "dewalt", name: "Dewalt", logo: "/brands/dewalt-logo.png", category: "Other Products" },
  { id: "taparia", name: "Taparia", logo: "https://placehold.co/400x200/ffffff/000000?text=TAPARIA", category: "Other Products" },
];

export const brands = [
    // Keeping this for backward compatibility if referenced elsewhere, but clientBrands is the source of truth
    ...clientBrands
];

export const highlightedCompanies = clientBrands.filter(b => 
    ["polycab", "schneider", "siemens", "legrand", "dowells", "crompton", "havells", "wipro"].includes(b.id)
);
