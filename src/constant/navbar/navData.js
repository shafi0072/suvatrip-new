export const navigation = [
  {
    name: "Enhance Your Property",
    href: "/admin",
    current: true,
    dropdown: false,
    dropdownData: [],
  },
  {
    name: "USD",
    href: "#",
    current: false,
    dropdown: true,
    dropdownData: [
      {
        title: "BDT",
      },
      {
        title: "USD",
      },
    ],
  },
  {
    name: "ENG",
    href: "#",
    current: false,
    dropdown: false,
    dropdownData: [],
  },
  {
    hrefs: "notification",
  },
  { name: "Sign In", href: "#", current: false },
];
export const logo = {
  logo: "/images/logo.png",
  title: "SUVATRIP",
};

export const logoBlack = {
  logo: "/images/logoBlack.png",
  title: "SUVATRIP",
};
