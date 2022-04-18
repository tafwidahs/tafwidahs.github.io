import React from "react";
import Image from "next/image";
import frame from "../../../public/Frame 1.png";
import wida from "../../../public/wida.png";
import gmail from "../../../public/icon/gmail.png";
import linkin from "../../../public/icon/linkedin.png";
import paper from "../../../public/icon/paper.png";
import circle from "../../../public/circle.png";

function AboutMeLayout() {
  return (
    <div className='relative min-h-[600px]'>
      <div>{/* <Image src={} alt='back' /> */}</div>
      <div className='absolute right-0 -top-40 -z-10'>
        <Image src={frame} alt='' />
      </div>
      <div className='absolute -left-10 -bottom-[0px] -z-10'>
        <Image src={circle} alt='' />
      </div>
      <p className='text-center font-bold text-5xl '>About Wida</p>
      <div className='flex text-center  justify-center'>
        <div className='mt-10'>
          <div className='bg-cs-blue w-[40px] h-1 mx-3'>&nbsp;</div>
        </div>
        <div className='text-center'>
          {" "}
          <div className='max-w-6xl mx-auto px-4 md:max-w-[800px] text-center text-3xl text-cs-orange pt-5 '>
            <div>Bandung-based Product Enthusiast with</div>
            <div>3+ years of experience in</div>
            <div>building AI-powered products</div>{" "}
          </div>
        </div>
        <div className='mt-28'>
          {" "}
          <div className='bg-cs-blue w-[40px] h-1 mx-3'>&nbsp;</div>
        </div>
      </div>

      <div className='contaienr mx-auto max-w-[1100px] min-h-[300px] text-cs-text-gray '>
        <div>
          <div className='p-10 '>
            <div className='md:flex md:justify-between'>
              <div className='p-10 box-shadow1 max-w-[450px] rounded-2xl'>
                <p className='tracking-wide text-lg '>
                  <b>I am a self-taught product owner</b>, who have managed 4
                  products from ideation to product launch with PSPO I and
                  Product Analytics certificates
                </p>
                <p className='tracking-wide text-lg mt-10'>
                  <b>I loves cracking business cases</b>, that’s why I have
                  participated in several business-case competitions to
                  strengthen my business acumen skill and filling my free time
                </p>
                <p className='tracking-wide text-lg mt-10'>
                  <b>With a background in Data Science</b>, I create a solution
                  or product through data-driven research. I also have 2
                  published conference (IUPESM 2018 & TENCON 2020) papers
                </p>
              </div>
              <div className='md:ml-10 p-2'>
                <Image src={wida} alt='wida' />
              </div>
            </div>
            <div className='md:flex justify-between mt-10'>
              <div className='p-5 box-inner2 max-w-[450px] h-full rounded-2xl text-lg'>
                <p className='text-2xl font-bold'>Skills</p>
                <p className='box-shadow1 mt-3 p-3'>
                  SCRUM & Agile Methodology, Agile Software Development Cycle,
                  User Interviews & Persona, User Journey Maps
                </p>
                <p className='box-shadow1 shadow rounded-2xl mt-3 p-3'>
                  Presentation, Data Analysis, Data Visualization, MixPanel
                </p>
                <p className='box-shadow1 shadow rounded-2xl mt-3 p-3'>
                  Jira, Trello, Google Sheets, Figma, Miro, Slack
                </p>
                <p className='box-shadow1 shadow rounded-2xl mt-3 p-3'>
                  Python, R, Tensorflow, PyTorch, SQL, RegEx, Git
                </p>
              </div>
              <div className='flex flex-col justify-around drop-shadow1 min-w-[490px]'>
                <p className='font-bold text-4xl text-cs-orange text-center m-3'>
                  Let's Connect
                </p>
                <button
                  className='btn-footer mx-8'
                  style={{ minHeight: "60px" }}
                >
                  <a
                    href='mailto:tafwidahesaputra@gmail.com'
                    target='_blank'
                    className='linkedin text-xl'
                  >
                    <div className='px-3'>
                      <Image src={gmail} alt='gmail' />
                    </div>
                    tafwidahesaputra@gmail.com
                  </a>
                </button>
                <button
                  className='btn-footer mx-8 '
                  style={{ minHeight: "60px" }}
                >
                  <a
                    className='linkedin '
                    href='https://www.linkedin.com/in/tafwidahs'
                    target='_blank'
                  >
                    <div className='px-3'>
                      <Image src={linkin} alt='gmail' />
                    </div>{" "}
                    tafwidahs
                  </a>
                </button>
                <button
                  className='btn-footer mx-8'
                  style={{ minHeight: "60px" }}
                >
                  <a
                    href='https://drive.google.com/file/d/1Y13kKtrCKUzLCtrR4MdUnE8Q15DYldwX/view?usp=sharing'
                    target='_blank'
                    className='linkedin'
                  >
                    <div className='px-3'>
                      <Image src={paper} alt='gmail' />
                    </div>
                    Download my Resume
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMeLayout;
