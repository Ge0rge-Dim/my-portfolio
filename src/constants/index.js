import github from "../assets/icons/github.svg";
import linkedin from "../assets/icons/linkedin.svg";
import email from "../assets/icons/email.svg";
import ImageOne from "../assets/images/image-one.webp";
import ImageTwo from "../assets/images/image-two.webp";
import ImageThree from "../assets/images/image-three.webp";
import ImageFour from "../assets/images/image-four.webp";
import ImageFive from "../assets/images/image-five.webp";
import ImageSix from "../assets/images/image-six.webp";
import ImageSeven from "../assets/images/image-seven.webp";

export const navLinks = [
  { href: "/", label: "Work" },
  { href: "mailto:george.dimoss@gmail.com", label: "Contact" },
  { href: "/George-Dimos-Resume.pdf", label: "Resume", newTab: true },
  {
    href: "https://www.linkedin.com/in/george-dimos-559518237/",
    label: "LinkedIn",
    newTab: true,
  },
  {
    href: "https://github.com/Ge0rge-Dim",
    label: "GitHub",
    newTab: true,
  },
];

export const socialMedia = [
  { src: email, alt: "github logo", url: "mailto:george.dimoss@gmail.com" },
  {
    src: linkedin,
    alt: "linkedin logo",
    url: "https://www.linkedin.com/in/george-dimos-559518237/",
  },
  { src: github, alt: "github logo", url: "https://github.com/Ge0rge-Dim" },
];

export const aboutImages = {
  ImageOne,
  ImageTwo,
  ImageThree,
  ImageFour,
  ImageFive,
  ImageSix,
  ImageSeven,
};
