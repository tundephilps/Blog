import * as Icons from "react-icons/fa";

export const navItems = [
  {
    id: 1,
    title: "Home",
    path: "./",
    nName: "nav-item",
    sName: "sidebar-item",
    icon: <Icons.FaHome />,
  },
  {
    id: 2,
    title: "Blogs",
    path: "./Blog",
    nName: "nav-item",
    sName: "sidebar-item",
    icon: <Icons.FaBlog />,
  },
  {
    id: 3,
    title: "World News",
    path: "./products",
    nName: "nav-item",
    sName: "sidebar-item",
    icon: <Icons.FaGlobeAmericas />,
  },
  {
    id: 4,
    title: "Contact Us",
    path: "./contactus",
    nName: "nav-item",
    sName: "sidebar-item",
    icon: <Icons.FaPhone />,
  },
];
