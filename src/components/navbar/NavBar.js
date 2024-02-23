import React, { useState, useEffect } from "react";
import { HiOutlineBars4, HiOutlineXMark } from "react-icons/hi2";
import {
  Navbar,
  Typography,
  Button,
  IconButton,
  Collapse,
} from "@material-tailwind/react";

export default function NavBar() {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        className="p-1 font-semibold tracking-wide font-poppins text-title  text-lg hover:text-btn "
      >
        <a href="/#makeup" className="flex  items-center">
         Bridal Makeup
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        className="p-1 font-semibold tracking-wide font-poppins text-title text-lg hover:text-btn "
      >
        <a href="/#lashes" className="flex items-center">
          Fashion Makeup
        </a>
      </Typography>
    </ul>
  );

  const mobileNavList = (
    <ul className=" mt-2 h-screen flex flex-col  items-center ">
      <div className="uppercase">
        <Typography
          as="li"
          variant="small"
          className=" mb-10 mt-10 font-semibold tracking-normal font-poppins text-title text-2xl  "
          onClick={() => {
            setOpenNav(!openNav);
          }}
        >
          <a href="/#makeup" className="flex  items-center">
          Bridal  Makeup
          </a>
        </Typography>
        <Typography
          as="li"
          variant="small"
          className=" mb-10 font-semibold tracking-normal font-poppins text-title text-2xl  "
          onClick={() => {
            setOpenNav(!openNav);
          }}
        >
          <a href="/#lashes" className="flex items-center">
          Fashion Makeup
          </a>
        </Typography>

        <a href="/#contact">
          <Button
            variant="gradient"
            size="sm"
            fullWidth
            onClick={() => {
              setOpenNav(!openNav);
            }}
            className=" text-white font-poppins tracking-wide md:w-1/2  py-3 px-6 border border-btn rounded-md shadow-md text-md font-bold bg-btn hover:bg-btnHover hover:border-btnHover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:bg-btnHover transition-color duration-200 delay-200"
          >
            <span>Contact Me</span>
          </Button>
        </a>
      </div>
    </ul>
  );

  return (
    <>
      <Navbar className=" sticky inset-0 z-10 h-max  max-w-full rounded-none drop-shadow-md py-2 px-2 lg:px-20 lg:py-4  bg-navbar  border-none ">
        <div className="flex items-center justify-between ">
          <div className="flex items-center ">
            <a href="/#">
              <img
                src="./hero.svg"
                alt="logo"
                className="w-20 lg:px-5 px-2 py-2 "
              />
            </a>

            <Typography
              as="a"
              href="/#"
              className="cursor-pointer md:tracking-widest   text-title md:text-lg text-sm font-semibold font-poppins hover:text-title  "
            >
              Makeup by Sucheta Kolur 
            </Typography>
          </div>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            <a href="/#contact" className=" scroll-m-5">
              <Button
                variant="gradient"
                size="sm"
                className="hidden lg:inline-block py-3 px-6 border border-btn rounded-md shadow-md text-md font-poppins tracking-wide font-bold text-white bg-btn hover:bg-btnHover hover:border-btnHover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:bg-btnHover transition-color duration-200 delay-75"
              >
                <span>Contact Me</span>
              </Button>
            </a>
            <IconButton
              variant="text"
              className="h-10 w-20 md:pr-20 pb-10 pr-5 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden "
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <HiOutlineXMark className="text-4xl text-title font-extrabold" />
              ) : (
                <HiOutlineBars4 className="text-4xl text-title font-extrabold" />
              )}
            </IconButton>
          </div>
        </div>
        {openNav && <Collapse open={openNav}>{mobileNavList}</Collapse>}
      </Navbar>
    </>
  );
}
