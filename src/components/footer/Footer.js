import { Typography } from "@material-tailwind/react";
import {
  BsInstagram,
  BsFillEnvelopeFill,
  BsFillTelephoneFill,
  BsPinMapFill,
} from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="w-full bg-white py-8 px-8">
      <div className="flex flex-row flex-wrap mx-5 items-center gap-y-6 gap-x-12 text-center justify-between ">
        <a href="/#">
          <img
            src="./hero.svg"
            alt="logo-ct"
            className="w-20 transform hover:scale-125"
          />
        </a>
        <div className="inline-flex gap-6 items-end">
          <a
            href="https://www.instagram.com/makeup_by_sucheta_kolur/"
            target="_blank"
            rel="noreferrer"
          >
            <BsInstagram className="text-3xl text-btnHover hover:text-btn transform hover:scale-125" />
          </a>
          <a
            href="mailto:skolurofficial@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <BsFillEnvelopeFill className="text-3xl text-btnHover hover:text-btn transform hover:scale-125" />
          </a>
        </div>
      </div>
      <hr className="my-8 border-title" />

      <div className="m-5 flex justify-between py-5">
        <div>
          <div className="inline-flex gap-3 items-center">
            <BsFillTelephoneFill className="text-btnHover text-2xl" />
            <Typography className=" pr-6 text-lg font-semibold text-btnHover ">
              +91-9886151457
            </Typography>
          </div>
          <div className="inline-flex gap-3 items-center">
            <BsPinMapFill className="text-btnHover text-2xl" />
            <Typography className="text-lg font-semibold text-btnHover pr-2">
               
                Bangalore/ Gulbarga
             
            </Typography>
          </div>
        </div>

        <div className="inline-flex gap-6 items-center">
          <Typography className="text-sm text-btnHover">
            © Copyrights 2023 Sucheta Kolur
          </Typography>
        </div>
      </div>
    </footer>
  );
}
