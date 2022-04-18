import React from "react";
import Image from "next/image";
import frame from "../../../public/Frame 1.png";
import corpu from "../../../public/corpu1.png";
import logo1 from "../../../public/logo1.png";
import corpu2 from "../../../public/corpu2.png";
import corpu3 from "../../../public/corpu3.png";
import corpu4 from "../../../public/corpu4.png";

import circle from "../../../public/circle.png";
import circle2 from "../../../public/circle2.png";
import circle3 from "../../../public/circle3.png";
import circle4 from "../../../public/circle4.png";

import frame3 from "../../../public/frame3.png";
import frame4 from "../../../public/frame4.png";

function Corpu() {
  return (
    <div className='relative min-h-[600px]'>
      <div>{/* <Image src={} alt='back' /> */}</div>
      <div className='relative '>
        <div className='absolute -top-40 right-0 -z-10'>
          <Image src={frame} alt='' />
        </div>
      </div>
      <div className='absolute -left-10 top-[630px] -z-10'>
        <Image src={circle} alt='' />
      </div>
      <div className='absolute right-0 top-[1400px] -z-10'>
        <Image src={frame3} alt='' />
      </div>{" "}
      <div className='absolute -left-10 top-[2300px] -z-10'>
        <Image src={frame4} alt='' />
      </div>
      <div className='absolute right-0 top-[4300px] -z-10'>
        <Image src={circle4} alt='' />
      </div>
      <p className='text-center font-bold text-3xl'>Corpu Dacs</p>
      <div className='max-w-6xl mx-auto px-4 md:max-w-[600px] text-center text-xl text-cs-orange pt-5'>
        “Dashboard for Telkom CorpU to help Corpu's performance reporting and
        identify employees' skills gap with course recommendation system”
      </div>
      <div className='contaienr  mx-auto max-w-[900px] min-h-[300px]'>
        <div className='p-10 '>
          <div className='p-5 rounded-2xl '>
            <Image src={corpu} alt='wida' />
          </div>
        </div>
      </div>
      <div className='contaienr mx-auto max-w-[1100px] min-h-[300px] my-10'>
        <div className='box-shadow1'>
          <div className='md:flex items-center'>
            <div className='min-w-[350px] p-10 text-center'>
              <Image src={logo1} alt='aaa' />
            </div>
            <div className='p-5'>
              <p className='py-5 text-2xl font-extrabold'>Background</p>
              <p className='text-cs-text-gray '>
                <b>Telkom Corporate University</b> (Telkom CorpU) is a Learning
                & Development department for <b>Telkom Indonesia. </b>Telkom
                Corpu has a learning management system called Cognitium.
                However, it's not an easy task to extract insight regarding
                CorpU's performance, employees' skills gap, and suitable courses
                for Telkom employees from Cognitium
              </p>
              <p className='py-5 text-xl font-extrabold'>Goal</p>
              <span className='text-cs-text-gray font-bold '>
                Shorten processing time of Design Learning and Reporting for
                Telkom CorpU
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className='container mx-auto max-w-[1100px] min-h-[300px] pt-10'>
        <div className='box-inner1 rounded-2xl shadow'>
          <div className='px-10'>
            <div className='p-5'>
              <p className='py-5 text-2xl font-bold'>Problem Statement</p>
              <div className='p-2 my-10 box-shadow1 flex'>
                <div style={{ marginTop: -10 }}>
                  <span
                    className='text-cs-blue'
                    style={{
                      fontSize: "30px",
                      margin: "0px 10px",
                    }}
                  >
                    &#x2022;
                  </span>{" "}
                </div>
                <span className='text-cs-text-gray'>
                  {" "}
                  As a User, I want to quickly report last year's performance
                  whenever high-level management asks me to but it's not easy
                  because the information is scattered all over the place
                  (Offline & Online). This costs me time to find and validate
                  the data
                </span>
              </div>
              <div className='p-2 my-10 box-shadow1 flex'>
                <div style={{ marginTop: -10 }}>
                  <span
                    className='text-cs-blue'
                    style={{
                      fontSize: "30px",
                      margin: "0px 10px",
                    }}
                  >
                    &#x2022;
                  </span>{" "}
                </div>
                <span className='text-cs-text-gray '>
                  {" "}
                  As a user, I want to understand the current skills gap in
                  Telkom so I can recommend what is the best course or program
                  to help reduce the gap. However I can't extract that
                  information easily from Cognitium, so I'm solely relying upon
                  direct interviews to gather the data
                </span>
              </div>
              <div className='p-2 my-10 box-shadow1 flex'>
                <div style={{ marginTop: -10 }}>
                  <span
                    className='text-cs-blue'
                    style={{
                      fontSize: "30px",
                      margin: "0px 10px",
                    }}
                  >
                    &#x2022;
                  </span>{" "}
                </div>
                <span className='text-cs-text-gray text-lg'>
                  {" "}
                  As a user, I want to know what technology that currently
                  trending to analyze whether the company needs the tech or not.
                  But I don't know where to start, and I feel helpless because
                  I'm also not familiar with the technology
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='mx-auto max-w-[1100px] min-h-[500px] mt-20'>
        <p className='text-center font-bold text-2xl p-16'>Features</p>
        <div className='md:flex justify-between m-5'>
          <div>
            <p className='text-cs-blue font-bold text-2xl mb-5'>
              Performance Dashboard
            </p>
            <p className='box-inner1 flex pt-3 px-3 my-3 rounded-2xl  text-cs-text-gray font-bold mt-5'>
              <div style={{ marginTop: -10 }}>
                <span
                  className='text-cs-orange'
                  style={{
                    fontSize: "30px",
                    margin: "0px 10px",
                  }}
                >
                  &#x2022;
                </span>{" "}
              </div>
              Planned vs Realization Training
            </p>

            <p className='box-inner1 p-2 my-3 rounded-2xl flex font-bold text-cs-text-gray'>
              <div style={{ marginTop: -10 }}>
                <span
                  className='text-cs-orange'
                  style={{
                    fontSize: "30px",
                    margin: "0px 10px",
                  }}
                >
                  &#x2022;
                </span>{" "}
              </div>
              <div>
                Employees’ Feedback <br />
                <span className='font-light'>(for Trainers & Organizers)</span>
              </div>
            </p>

            <p className='box-inner1 min-w-[370px] p-2 my-3 rounded-2xl flex font-bold text-cs-text-gray'>
              <div style={{ marginTop: -10 }}>
                <span
                  className='text-cs-orange'
                  style={{
                    fontSize: "30px",
                    margin: "0px 10px",
                  }}
                >
                  &#x2022;
                </span>{" "}
              </div>
              <div className='max-w-[290px] '>
                {" "}
                Filter by Year, Directorate, & Business Unit
              </div>
            </p>
          </div>
          <div className='w-[31rem]'>
            <Image src={corpu2} />
          </div>
        </div>
      </div>
      <div className='mx-auto max-w-[1100px] min-h-[400px] mt-20'>
        <div className='md:flex justify-between m-5 md:flex-row-reverse'>
          <div>
            <p className='text-cs-blue font-bold text-2xl mb-5'>
              Employee Skill Dashboard
            </p>

            <p className='box-inner1 flex pt-3 px-3 my-3 rounded-2xl  text-cs-text-gray font-bold mt-5'>
              <div style={{ marginTop: -10 }}>
                <span
                  className='text-cs-orange'
                  style={{
                    fontSize: "30px",
                    margin: "0px 10px",
                  }}
                >
                  &#x2022;
                </span>{" "}
              </div>
              Skills Distribution
            </p>

            <p className='box-inner1 flex pt-3 px-3 my-3 rounded-2xl  text-cs-text-gray font-bold mt-5'>
              <div style={{ marginTop: -10 }}>
                <span
                  className='text-cs-orange'
                  style={{
                    fontSize: "30px",
                    margin: "0px 10px",
                  }}
                >
                  &#x2022;
                </span>{" "}
              </div>
              Skills Population
            </p>

            <p className='box-inner1 min-w-[370px] p-2 my-3 rounded-2xl flex font-bold text-cs-text-gray'>
              <div style={{ marginTop: -10 }}>
                <span
                  className='text-cs-orange'
                  style={{
                    fontSize: "30px",
                    margin: "0px 10px",
                  }}
                >
                  &#x2022;
                </span>{" "}
              </div>
              <div className='max-w-[290px] '>
                Filter by Year, Directorate, & Business Unit
              </div>
            </p>
          </div>
          <div className='w-[31rem]'>
            <Image src={corpu3} />
          </div>
        </div>
      </div>
      <div className='mx-auto max-w-[1100px] min-h-[300px] '>
        <div className='md:flex justify-between m-5'>
          <div>
            <p className='text-cs-blue font-bold text-2xl mb-5'>
              Course Recommendation System
            </p>
            <p className='box-inner1 p-2 flex font-bold text-cs-text-gray'>
              <div style={{ marginTop: -10 }}>
                <span
                  className='text-cs-orange'
                  style={{
                    fontSize: "30px",
                    margin: "0px 10px",
                  }}
                >
                  &#x2022;
                </span>{" "}
              </div>
              Top 5 Related Skills
            </p>
            <p className='box-inner1 p-2 my-3 rounded-2xl flex font-bold text-cs-text-gray'>
              <div style={{ marginTop: -10 }}>
                <span
                  className='text-cs-orange'
                  style={{
                    fontSize: "30px",
                    margin: "0px 10px",
                  }}
                >
                  &#x2022;
                </span>{" "}
              </div>
              <div>Top 5 Recommendation Courses</div>
            </p>
            <p className='box-inner1 min-w-[370px] p-2 my-3 rounded-2xl flex font-bold text-cs-text-gray'>
              <div style={{ marginTop: -10 }}>
                <span
                  className='text-cs-orange'
                  style={{
                    fontSize: "30px",
                    margin: "0px 10px",
                  }}
                >
                  &#x2022;
                </span>{" "}
              </div>
              <div className='max-w-[290px] '>
                {" "}
                Filter by Year, Business Unit, & Business Needs
              </div>
            </p>
          </div>
          <div className='w-[33rem]'>
            <Image src={corpu4} />
          </div>
        </div>
      </div>
      <div className='container  mx-auto max-w-[800px] min-h-[300px] my-20'>
        <div className='relative box-shadow1'>
          <div className='absolute -right-36 -  -top-36 -z-10'>
            <Image src={circle2} alt='' />
          </div>

          <div className='px-10'>
            <div className='p-5'>
              <p className='py-5 text-xl font-bold text-center text-cs-orange'>
                My Role
              </p>
              <p className='text-cs-text-gray text-lg'>
                As a <b>Project Lead</b> for Corpu-Dacs. I led and also guide 6
                interns to take Corpu-Dacs from conception to launch. I
                conducted{" "}
                <b>
                  <i>
                    research, user interviews, define, design, & create queries
                    for all dashboard graphs, prototyping,{" "}
                  </i>
                </b>
                and{" "}
                <b>
                  <i>worked closely with stakeholders</i>
                </b>{" "}
                to deliver the best solution.
              </p>
              <div className='text-center p-10'>
                <Image src={corpu4} alt='' />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container  mx-auto max-w-[900px] min-h-[300px]'>
        <div className='relative box-inner2'>
          <div className='absolute -left-36 -top-40 -z-10'>
            <Image src={circle3} alt='' />
          </div>

          <div className='px-10 text-cs-text-gray'>
            <div className='p-5'>
              <p className=' text-2xl font-bold pt-2'>Key Takeaway</p>
              <div className='p-3 my-7 box-shadow1 flex'>
                <div style={{ marginTop: -10 }}>
                  <span
                    className='text-cs-blue'
                    style={{
                      fontSize: "30px",
                      margin: "0px 10px",
                    }}
                  >
                    &#x2022;
                  </span>{" "}
                </div>
                As the first product that I have led. I have learned how to
                break up a project into smaller tasks so the interns can focus
                on one task at a time
              </div>
              <div className='p-3 my-7 box-shadow1 flex'>
                <div style={{ marginTop: -10 }}>
                  <span
                    className='text-cs-blue'
                    style={{
                      fontSize: "30px",
                      margin: "0px 10px",
                    }}
                  >
                    &#x2022;
                  </span>{" "}
                </div>
                Micromanaging interns is not the method that I prefer too, the
                alternatives that I use is to give clear goals & objectives for
                each task then gives guidance when they need my help
              </div>
              <div className='p-3 my-7 box-shadow1 flex'>
                <div style={{ marginTop: -10 }}>
                  <span
                    className='text-cs-blue'
                    style={{
                      fontSize: "30px",
                      margin: "0px 10px",
                    }}
                  >
                    &#x2022;
                  </span>{" "}
                </div>
                How to create an effective presentation to better communicate
                the progress of Corpu-Dacs with stakeholders
              </div>
              <div className='p-3 my-7 box-shadow1 flex'>
                <div style={{ marginTop: -10 }}>
                  <span
                    className='text-cs-blue'
                    style={{
                      fontSize: "30px",
                      margin: "0px 10px",
                    }}
                  >
                    &#x2022;
                  </span>{" "}
                </div>
                How to prioritize what problems that we're going to solve so the
                users will have the largest impact when they use Corpu Dacs
              </div>
              <div className='p-3 my-7 box-shadow1 flex'>
                <div style={{ marginTop: -10 }}>
                  <span
                    className='text-cs-blue'
                    style={{
                      fontSize: "30px",
                      margin: "0px 10px",
                    }}
                  >
                    &#x2022;
                  </span>{" "}
                </div>
                How to plan and communicate a product timeline so the developer
                team (interns) is not overwhelmed while still satisfy the
                stakeholders
              </div>
              <div className='p-3 my-7 box-shadow1 flex'>
                <div style={{ marginTop: -10 }}>
                  <span
                    className='text-cs-blue'
                    style={{
                      fontSize: "30px",
                      margin: "0px 10px",
                    }}
                  >
                    &#x2022;
                  </span>{" "}
                </div>
                How to deep dive into user problems and ideate the best solution
                by considering time, resources, and manpower
              </div>
              <div className='p-3 my-7 box-shadow1 flex'>
                <div style={{ marginTop: -10 }}>
                  <span
                    className='text-cs-blue'
                    style={{
                      fontSize: "30px",
                      margin: "0px 10px",
                    }}
                  >
                    &#x2022;
                  </span>{" "}
                </div>
                Real-life application on UX processes such as interview,
                defining problems, create user flow, and design prototypes using
                Figma
              </div>
              <div className='p-2 my-7 box-shadow1 flex items-center  '>
                <div style={{}}>
                  <span
                    className='text-cs-blue'
                    style={{
                      fontSize: "30px",
                      margin: "0px 10px",
                    }}
                  >
                    &#x2022;
                  </span>{" "}
                </div>
                How to utilize my communication & negotiation skills to get all
                that were involved on the same page
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Corpu;
