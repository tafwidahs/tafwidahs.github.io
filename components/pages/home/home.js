import Image from "next/image";
import React from "react";
import Logo1 from "../../../public/logo1.png";
import Logo2 from "../../../public/logo2.png";
import Logo3 from "../../../public/logo3.png";
import Logo4 from "../../../public/logo4.png";
import frame from "../../../public/Frame 1.png";
import circle from "../../../public/circle.png";

function Home() {
  return (
    <div className='relative min-h-[400px]'>
      <div>{/* <Image src={} alt='back' /> */}</div>
      <div className='absolute -right-8 -top-40 -z-10'>
        <Image src={frame} alt='' />
      </div>
      <div className='absolute -left-10 -bottom-[450px] -z-10'>
        <Image src={circle} alt='' />
      </div>

      <div className='flex text-center justify-center max-w-5xl mx-auto flex-col'>
        {" "}
        <div className='max-w-6xl mx-auto px-4 md:max-w-[800px] text-center text-3xl text-cs-orange pt-5 flex items-center'>
          <div className='bg-cs-blue w-[40px] h-1 mx-3'>&nbsp;</div>
          <div>
            Wida is a{" "}
            <b>
              <i>Certified PSPO I </i>
            </b>{" "}
            with{" "}
            <b>
              <i>2 published</i>
            </b>
          </div>
        </div>
        <div className='max-w-6xl mx-auto px-4 md:max-w-[800px] text-center text-3xl text-cs-orange pt-5 flex items-center'>
          <div>
            <b>
              <i>International papers</i>
            </b>{" "}
            and several experiences as
          </div>
        </div>
        <div className='max-w-6xl mx-auto px-4 md:max-w-[800px] text-center text-3xl text-cs-orange pt-5 flex flex-end'>
          <div>
            <b>business-case competition finalists</b>
          </div>{" "}
          <div className='bg-cs-blue w-[40px] h-1 mx-3 mt-[20px]'>&nbsp;</div>
        </div>
      </div>
      <div className='contaienr mx-auto max-w-[800px] min-h-[500px]'>
        <div className='grid md:grid-cols-2 mt-20'>
          <button className='btn'>
            <a href='corpu' className='corpu'>
              <Image className='z-10' src={Logo1} />
            </a>
          </button>
          <button className='btn'>
            <a href='tosol' className='tosol'>
              <Image className='z-10' src={Logo2} />
            </a>
          </button>

          <button className='btn'>
            <a href='event' className='event'>
              <Image className='z-10' src={Logo3} />
            </a>
          </button>
          <button className='btn'>
            <a href='ekyc' className='ekyc'>
              <Image className='z-10' src={Logo4} />
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
