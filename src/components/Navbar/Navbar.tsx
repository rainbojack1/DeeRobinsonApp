import React, { FC } from "react";
import "./Navbar.scss";
import { Menubar } from "primereact/menubar";
import { NAVIGATION_LABELS } from "../../constants/labels";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => {
  const items = [
    {
      label: NAVIGATION_LABELS.HOME,
      command: () => {
        window.location.href = "/";
      }
    },
    {
      label: NAVIGATION_LABELS.ABOUT,
      command: () => {
        window.location.href = "/about-dee";
      }
    },
    {
      label: NAVIGATION_LABELS.UPCOMING,
      command: () => {
        window.location.href = "/upcoming-events";
      }
    },
    {
      label: NAVIGATION_LABELS.BOOK,
      command: () => {
        window.location.href = "/books";
      }
    },
    {
      label: NAVIGATION_LABELS.FILM,
      command: () => {
        window.location.href = "/films";
      }
    },
    {
      label: NAVIGATION_LABELS.MUSIC,
      command: () => {
        window.location.href = "/music";
      }
    },
    {
      label: NAVIGATION_LABELS.MORE,
      items: [
        {
          label: NAVIGATION_LABELS.POETRY,
          command: () => {
            window.location.href = "/poetry";
          }
        },{
          label: NAVIGATION_LABELS.PHOTOS,
          command: () => {
            window.location.href = "/photoGallery";
          }
        },
        {
          label: NAVIGATION_LABELS.BLOG,
          command: () => {
            window.location.href = "/blog";
          }
        },
        {
          label: NAVIGATION_LABELS.PARTNERS,
          command: () => {
            window.location.href = "/partners";
          }
        },
        {
          label: NAVIGATION_LABELS.CONTACT,
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
