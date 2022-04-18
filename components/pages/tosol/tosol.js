import React from "react";
import Image from "next/image";
import frame from "../../../public/Frame 1.png";

import logo2 from "../../../public/logo2.png";
import tosol1 from "../../../public/tosol/tosol1.png";
import tosol2 from "../../../public/tosol/tosol2.png";
import tosol3 from "../../../public/tosol/tosol3.png";
import tosol4 from "../../../public/tosol/tosol4.png";
import tosol5 from "../../../public/tosol/tosol5.png";

import circle from "../../../public/circle.png";
import circle2 from "../../../public/circle2.png";
import circle3 from "../../../public/circle3.png";
import circle4 from "../../../public/circle4.png";

import frame3 from "../../../public/frame3.png";
import frame4 from "../../../public/frame4.png";

function tosol() {
  return (
    <div className='relative min-h-[600px]'>
      <div>{/* <Image src={} alt='back' /> */}</div>
      <div className='relative '>
        <div className='absolute -top-40 right-0 -z-10'>
          <Image src={frame} alt='' />
        </div>
      </div>
      <div className='absolute  top-[700px] -z-10'>
        <Image src={circle} alt='' />
      </div>
      <div className='absolute right-0 top-[1400px] -z-10'>
        <Image src={frame3} alt='' />
      </div>{" "}
      <div className='absolute  top-[2350px] -z-10'>
        <Image src={frame4} alt='' />
      </div>
      <p className='text-center font-bold text-3xl'>OCR Total-Solution</p>
      <div className='max-w-6xl mx-auto px-4 md:max-w-[600px] text-center text-xl text-cs-orange pt-5'>
        an AI-powered Screening Platform to help the recruitment team perform cv
        screening process with auto screening candidates, automatic extracting &
        validating data, and overview dashboard.
      </div>
      <div className='contaienr  mx-auto max-w-[900px] min-h-[300px]'>
        <div className='p-10 '>
          <div className='p-5 rounded-2xl bg-white shadow'>
            <Image src={tosol1} alt='wida' />
          </div>
        </div>
      </div>
      <div className='contaienr  mx-auto md:max-w-[1000px] min-h-[300px]'>
        <div className='box-shadow1 mt-10 m-2'>
          <div className='md:flex items-center'>
            <div className='min-w-[300px] p-10'>
              <Image src={logo2} alt='aaa' />
            </div>
            <div className='p-5'>
              <p className='py-5 text-xl font-bold'>Background</p>
              <p className='text-cs-text-gray'>
                Screening Candidates is a tedious and time-consuming task.
                Recruiters need to check whether the candidates matched with the
                job's criteria, verify uploaded documents such as transcript or
                ID Card, and also report to the manager regarding the
                candidate's demographic or recruitment process. This task is
                prone to human error therefore we build this product to automate
                cv screening
              </p>
              <p className='py-5 text-xl font-bold'>Goal</p>
              <p className='text-cs-text-gray'>
                Reduce complexity and processing time to find the best
                candidates
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='container mx-auto md:max-w-[1000px] min-h-[300px] pt-10'>
        <div className='box-inner2 mt-10 '>
          <div className='px-10'>
            <div className='p-5'>
              <p className='pt-5 text-2xl font-bold'>Problem Statement</p>
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
                  As a recruiter. I want to quickly report for the overall
                  screening process so my manager knows the ratio of shortlisted
                  vs rejected candidates and their demographics. But before I
                  can process the data, I need to ask the IT team to export the
                  raw data and sometimes it takes too long because they also
                  have their backlog to work on
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
                <span className='text-cs-text-gray'>
                  As a screening team, I want to filter candidates that didn't
                  fit the criteria. But my current tools didn't provide me with
                  this type of feature
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
                <span className='text-cs-text-gray'>
                  As a screening team, I want to verify whether the data and
                  documents provided by candidates are valid or not. But I feel
                  tired and exhausted to do this task because I need to my focus
                  to check each candidate's data and his./her documents.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='mx-auto max-w-[1100px] min-h-[500px] '>
        <p className='text-center font-bold text-2xl p-16'>Features</p>
        <div className='md:flex justify-between m-10'>
          <div>
            <p className='text-cs-blue font-bold text-2xl'>
              Screening Dashboard
            </p>
            <p className='box-inner1 flex pt-3 px-3 my-3 rounded-2xl md:w-[340px] text-cs-text-gray font-bold mt-5'>
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
              Checking Uploaded Documents
            </p>
            <p className='box-inner1 flex pt-3 px-3 my-3 rounded-2xl md:w-[340px] text-cs-text-gray font-bold mt-5'>
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
              Manual Processing Candidatesn
            </p>
          </div>
          <div className='w-[24rem] md:w-[33rem] md:-mr-[60px]'>
            <Image src={tosol2} />
          </div>
        </div>
      </div>
      <div className='mx-auto max-w-[1100px] min-h-[350px] '>
        <div className='md:flex justify-between md:flex-row-reverse m-10'>
          <div>
            <p className='text-cs-blue font-bold text-2xl'>
              Analytics Dashboard
            </p>
            <p className='box-inner1 flex pt-3 px-3 my-3 rounded-2xl md:w-[340px] text-cs-text-gray font-bold mt-5'>
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
              Filter by Quartal
            </p>
            <p className='box-inner1 flex pt-3 px-3 my-3 rounded-2xl md:w-[340px] text-cs-text-gray font-bold mt-5'>
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
              User Demographic
            </p>
            <p className='box-inner1 flex pt-3 px-3 my-3 rounded-2xl md:w-[340px] text-cs-text-gray font-bold mt-5'>
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
              Shortlisted vs Rejected
            </p>
          </div>
          <div className='w-[24rem] md:w-[32rem]'>
            <Image src={tosol3} />
          </div>
        </div>
      </div>
      <div className='mx-auto md:max-w-[1100px] min-h-[300px]'>
        <div className='md:flex justify-between m-10 pt-1'>
          <div>
            <p className='text-cs-blue font-bold text-2xl'>Auto Screening</p>
            <p className='box-inner1 flex pt-3 px-3 my-3 rounded-2xl md:w-[340px] text-cs-text-gray font-bold mt-5'>
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
              Filter Candidates
            </p>
            <p className='box-inner1 flex pt-3 px-3 my-3 rounded-2xl md:w-[340px] text-cs-text-gray font-bold mt-5'>
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
              Automatic Data Verification
            </p>
            <p className='box-inner1 flex pt-3 px-3 my-3 rounded-2xl md:w-[340px] text-cs-text-gray font-bold mt-5'>
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
              Shortlisted vs Rejected
            </p>
          </div>
          <div className='w-[24rem] md:w-[31rem]'>
            <Image src={tosol5} />
          </div>
        </div>
      </div>
      <div className='container  mx-auto max-w-[750px] min-h-[300px] my-20'>
        <div className='relative box-shadow1'>
          <div className='absolute -right-36 -  -top- -z-10'>
            <Image src={circle2} alt='' />
          </div>
          <div className='px-10'>
            <div className='p-5'>
              <p className='py-5 text-2xl font-bold text-center text-cs-orange'>
                My Role
              </p>
              <p className='text-cs-text-gray'>
                <span className='ml-10' />
                As one of the product team members, I conduct the product design
                process from
                <b>
                  {" "}
                  <i>
                    user interview, synthesize interview results, create user
                    flow,
                  </i>{" "}
                </b>
                design
                <b>
                  {" "}
                  <i>Lo-Fi prototypes</i>{" "}
                </b>
                , and perform
                <b>
                  <i>user testing.</i>{" "}
                </b>
                I work closely with UI Designer to design Hi-Fi and
                collaboratively convert OCR Total-Solution from ideation to
                product launch along with 6 other team members using lean
                startup.
              </p>
              <div className='text-center p-10'>
                <Image src={tosol4} alt='' />
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
          <div className='px-10'>
            <div className='p-5'>
              <p className='py-5 text-xl font-bold'>Key Takeaway</p>
              <div className='p-2 my-6 box-shadow1 flex text-cs-text-gray'>
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
                How to utilize Lean Startup to develop a product, I learn how to
                ideate and validate the product faster using this framework
              </div>
              <div className='p-2 my-6 box-shadow1 flex text-cs-text-gray'>
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
                <p className='max-w-[700px]'>
                  {" "}
                  How to do user testing from creating the questions to
                  processing user feedback. We need to set the correct criteria
                  based on our product goal, so our product will get the
                  feedback that supports our goal
                </p>
              </div>
              <div className='p-2 my-6 box-shadow1 flex text-cs-text-gray'>
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
                How to utilize Lean Startup to develop a product, I learn how to
                ideate and validate the product faster using this framework
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default tosol;
