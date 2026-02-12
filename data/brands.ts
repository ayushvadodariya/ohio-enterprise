
export const clientBrands = [
  // Switchgears
  { id: "lt", name: "L&T", logo: "/brand/logo-lauritz.jpeg", category: "Switchgears" },
  { id: "schneider", name: "Schneider", logo: "/brand/logo-schneider.png", category: "Switchgears" },
  { id: "siemens", name: "Siemens", logo: "/brand/logo-siemens.jpeg", category: "Switchgears" },
  { id: "legrand", name: "Legrand", logo: "/brand/logo-legrand.png", category: "Switchgears" },
  { id: "chint", name: "Chint", logo: "/brand/logo-chnt.png", category: "Switchgears" },

  // Wires & Cables
  { id: "polycab", name: "Polycab", logo: "/brand/logo-polycab.jpeg", category: "Wires & Cables" },
  { id: "finolex", name: "Finolex", logo: "/brand/logo-finolex.jpeg", category: "Wires & Cables" },
  { id: "rr", name: "RR Cables", logo: "/brand/logo-rr.jpeg", category: "Wires & Cables" },
  { id: "lapp", name: "Lappkabel", logo: "/brand/logo-lapp.png", category: "Wires & Cables" },

  // Cable Glands & Lugs
  { id: "dowells", name: "Dowells", logo: "/brand/logo-dowells.jpeg", category: "Cable Glands & Lugs" },
  { id: "braco", name: "Braco", logo: "/brand/logo-braco.png", category: "Cable Glands & Lugs" },
  { id: "hex", name: "Hex", logo: "/brand/logo-hex.jpeg", category: "Cable Glands & Lugs" },
  { id: "jigo", name: "Jigo", logo: "/brand/logo-jigo.jpeg", category: "Cable Glands & Lugs" },

  // Lighting and Fixtures
  { id: "crompton", name: "Crompton", logo: "/brand/logo-crompton.png", category: "Lighting and Fixtures" },
  { id: "philips", name: "Philips", logo: "/brand/logo-philips.jpeg", category: "Lighting and Fixtures" },
  { id: "bajaj", name: "Bajaj", logo: "/brand/logo-bajaj.png", category: "Lighting and Fixtures" },
  { id: "wipro", name: "Wipro", logo: "/brand/logo-wipro.png", category: "Lighting and Fixtures" },
  { id: "havells", name: "Havells", logo: "/brand/logo-havells.png", category: "Lighting and Fixtures" },
  { id: "oreva", name: "Oreva", logo: "/brand/logo-oreva.png", category: "Lighting and Fixtures" },

  // Other Products
  { id: "omron", name: "Omron", logo: "/brand/logo-omron.png", category: "Other Products" },
  { id: "delta", name: "Delta", logo: "/brand/logo-delta.jpeg", category: "Other Products" },
  { id: "fluke", name: "Fluke", logo: "/brand/logo-fluke.png", category: "Other Products" },
  { id: "meco", name: "Meco", logo: "/brand/logo-meco.jpeg", category: "Other Products" },
  { id: "kusam-meco", name: "Kusam-Meco", logo: "/brand/logo-kusam.png", category: "Other Products" },
  { id: "selec", name: "Selec", logo: "/brand/logo-selec.png", category: "Other Products" },
  { id: "htc", name: "HTC", logo: "/brand/logo-htc.png", category: "Other Products" },
  { id: "testo", name: "Testo", logo: "/brand/logo-testo.jpeg", category: "Other Products" },
  { id: "bosch", name: "Bosch", logo: "/brand/logo-bosch.jpeg", category: "Other Products" },
  { id: "dewalt", name: "Dewalt", logo: "/brand/logo-dewalt.png", category: "Other Products" },
  { id: "taparia", name: "Taparia", logo: "/brand/logo-taparia.png", category: "Other Products" },
];

export const brands = [
    // Keeping this for backward compatibility if referenced elsewhere, but clientBrands is the source of truth
    ...clientBrands
];

export const highlightedCompanies = clientBrands.filter(b => 
    ["polycab", "schneider", "siemens", "legrand", "dowells", "crompton", "havells", "wipro"].includes(b.id)
);
