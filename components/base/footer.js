import React from "react";
import Image from "next/image";
import Logo3 from "../../public/logo3.png";
import Linkedin from "../../public/icon/linkedin.png";

import gmail from "../../public/icon/gmail.png";

function Footer() {
  return (
    <div className='container mx-auto max-w-[800px] min-h-[300px] '>
      <div className='box-footer rounded-2xl border-blue-900-100 m-14'>
        <div className='pt-10'>
          <p className='text-center text-cs-orange text-3xl font-bold'>
            {" "}
            Let’s Connect
          </p>
        </div>
        <div className='md:flex justify-between p-10'>
          <button className='btn-footer w-10 '>
            <a
              href='mailto:tafwidahesaputra@gmail.com'
              className='email'
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Image className='z-10' src={gmail} width='40px' height='40px' />{" "}
              tafwidahesaputra@gmail.com
            </a>{" "}
          </button>
          <button className='btn-footer w-10 '>
            <a
              href='https://www.linkedin.com/in/tafwidahs'
              target='_blank'
              className='linkedin'
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Image
                className='z-10'
                src={Linkedin}
                width='40px'
                height='40px'
              />{" "}
              tafwidahs
            </a>{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
