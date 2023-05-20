import {
  BsArrowDown,
  BsArrowDownCircle,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";

import { FaFacebookF } from "react-icons/fa";
import { HiMenu } from "react-icons/hi";
import { CgClose } from "react-icons/cg";

const ArrowDownCircle = () => {
  return <BsArrowDownCircle />;
};


const ArrowDown = () => {
  return <BsArrowDown />;
};

// github
const Github = () => {
  return <BsGithub />;
};

// facebook
const Facebook = () => {
  return <FaFacebookF />;
};

// twitter
const Twitter = () => {
  return <BsTwitter />;
};

// instagram
const Instagram = () => {
  return <BsInstagram />;
};

// Menu
const Menu = () => {
  return <HiMenu />;
};
// CLose
const Close = () => {
  return <CgClose />;
};

// Export all Icons
export { ArrowDownCircle as default, Github, Facebook, Twitter, Instagram, ArrowDown, Menu,Close };
