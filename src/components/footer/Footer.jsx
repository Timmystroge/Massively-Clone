import React from "react";
import "./footer.css";
import { Facebook, Github, Instagram, Twitter } from "../Icons";
const Footer = () => {
  return (
    <>
      <footer>
        <div className="container_main_section">
          <div className="footer bg-grayish ">
            <div className="sm:flex sm:flex-col md:flex md:flex-row">
              <div className="cta w-full md:w-1/2 px-5 lg:px-14 py-10">
                <form action="">
                  <div className="form-group">
                    <label htmlFor="">NAME</label>
                    <input type="text" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="">EMAIL</label>
                    <input type="email" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="">MESSAGE</label>
                    <textarea name="" id="" rows="7"></textarea>
                  </div>

                  <div className="submit">
                    <button className="border-2 text-xs font-black text-text2 py-2 px-4 tracking-wider hover:bg-primary hover:text-white transitiob ease-linear duration-500">
                      SEND MESSAGE
                    </button>
                  </div>
                </form>
              </div>
              <div className="address w-full md:w-1/2 md:border-l-2 border-text1 border-opacity-20">
                <dl className="dl gap-5 items-start border-t-2 md:border-t-0 border-text1 border-opacity-20">
                  <dt className="font-black text-xs text-text1 tracking-wider">
                    ADDRESS
                  </dt>
                  <dd className="font-light text-xs text-text2 font-semibold">
                    1234, Somewhere Around the world Road 22184 <br /> Nigeria,
                    TN 00000-00000
                  </dd>
                </dl>
                <dl className="dl gap-8 items-center">
                  <dt className="font-black text-xs text-text1 tracking-wider">
                    PHONE
                  </dt>
                  <dd className="font-light text-xs text-text2 font-semibold">
                    (000) 0000 0000
                  </dd>
                </dl>
                <dl className="dl gap-10 items-center">
                  <dt className="font-black text-xs text-text1 tracking-wider">
                    EMAIL
                  </dt>
                  <dd className="font-light text-xs text-text2 font-semibold">
                    strogedev@gmail.com
                  </dd>
                </dl>
                <dl className="dl gap-7 items-center">
                  <dt className="font-black text-xs text-text1 tracking-wider">
                    SOCIALS
                  </dt>
                  <dl className="flex gap-3 md:gap-5 items-center">
                    <dd className="footer_socials">
                      <Twitter />
                    </dd>
                    <dd className="footer_socials">
                      <Facebook />
                    </dd>
                    <dd className="footer_socials">
                      <Instagram />
                    </dd>
                    <dd className="footer_socials">
                      <Github />
                    </dd>
                  </dl>
                </dl>
              </div>
            </div>
          </div>
        </div>

        <div className="copyright text-center mt-10">
          <p className="uppercase font-black text-text2 text-xs opacity-50">@ Timmystroge</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
