import React, { FC } from "react";
import "./Navbar.scss";
import { Menubar } from "primereact/menubar";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => {
  const items = [
    {
      label: "Home",
      command: () => {
        window.location.href = "/";
      }
    },
    {
      label: "About Dee",
      command: () => {
        window.location.href = "/about-dee";
      }
    },
    {
      label: "Upcoming Events",
      command: () => {
        window.location.href = "/upcoming-events";
      }
    },
    {
      label: "Books",
      command: () => {
        window.location.href = "/books";
      }
    },
    {
      label: "Films",
      command: () => {
        window.location.href = "/films";
      }
    },
    {
      label: "Music",
      command: () => {
        window.location.href = "/music";
      }
    },
    {
      label: "More",
      items: [
        {
          label: "Poetry",
          command: () => {
            window.location.href = "/poetry";
          }
        },{
          label: "Photo Gallery",
          command: () => {
            window.location.href = "/photoGallery";
          }
        },
        {
          label: "Blog",
          command: () => {
            window.location.href = "/blog";
          }
        },
        {
          label: "Partners",
          command: () => {
            window.location.href = "/partners";
          }
        },
        {
          label: "Contact Us",
          command: () => {
            window.location.href = "/contact-us";
          }
        },
      ],
    },
  ];
  return <div className="Navbar">
    <Menubar model={items} />
  </div>;
};

export default Navbar;
