const useMainNav = () => {
  const navList: NavLink[] = [
    {
      url: "/",
      text: "Home"
    },
    {
      url: "https://techishiring.substack.com/",
      text: "Newsletter",
      externalLink: true,
      externalLinkAlt: "external link for TechIsHiring newsletter"
    },
    {
      url: "/about",
      text: "About"
    },
    {
      url: "/contact",
      text: "Contact Us"
    }
  ];

  return navList;
};

export default useMainNav;
