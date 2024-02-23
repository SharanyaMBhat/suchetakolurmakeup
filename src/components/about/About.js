import React from "react";

function Hero() {
  return (
    <div className="flex flex-col md:flex-row">
              <div className="relative flex items-center md:px-7">
        <img
          src="./me2.png"
          alt="lashes"
          className="flex-shrink w-full object-center rounded" 
        />
      </div>

      <div className="lg:w-2/3 lg:px-20 px-5">
        <div className="md:py-20 ">
          <h1 className=" font-normal tracking-widest font-sans text-title mb-6 mt-6">
            Hello!
          </h1>
          
          <div className="font-semibold font-sans text-btn md:tracking-widest  text-4xl leading-relaxed mb-3">
            I'm Sucheta Kolur
          </div>
          <h3 className="text-title font-sans font-normal tracking-widest leading-relaxed pb-10 ">
          Beauty is so much more than just the clothes we wear, or the makeup we put

on. It’s each person’s individual personality, the way we express ourselves, and

what makes us feel unique. There is no one definition of beauty – and thus

there should not be one makeup look that fits all. Each application I do is

assessed according to multiple factors, including personality, comfort

level with makeup, and personal image – and I tailor my work accordingly. The

result is a satisfied client that feels as beautiful and unique on the outside as

they do on the inside.
          </h3>

          <h3 className="text-title font-sans font-normal tracking-widest leading-relaxed pb-10 ">
          I'm a Freelance Makeup Artist based in Bangalore, and while I enjoy working in all sectors of the beauty industry, my passion is bridal, and what led me to start this venture.
My love for makeup and beauty has been with me my whole life, and XXX where I became certified as a Professional Makeup Artist where I learned the world of makeup from the ground up helped push me to follow my passion.
I love learning new things, being inspired, and creative people. I take pride in creating beautiful work, and hope I can be fortunate enough to do what I Iove for the rest of my life.
          </h3>

          <h3 className="uppercase font-sans font-semibold tracking-wider">
          The best thing about my job is the people and making them feel better about themselves.
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Hero;
