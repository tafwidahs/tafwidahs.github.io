import React from "react";
import Image from "next/image";
import frame from "../../../public/Frame 1.png";

import logo4 from "../../../public/logo4.png";
import ekyc1 from "../../../public/ekyc/ekyc1.png";
import ekyc2 from "../../../public/ekyc/ekyc2.png";
import ekyc3 from "../../../public/ekyc/ekyc3.png";
import ekyc4 from "../../../public/ekyc/ekyc4.png";
import ekyc5 from "../../../public/ekyc/ekyc5.png";

import circle from "../../../public/circle.png";
import circle2 from "../../../public/circle2.png";
import circle3 from "../../../public/circle3.png";

import frame3 from "../../../public/frame3.png";
import frame4 from "../../../public/frame4.png";

function ekyc() {
  return (
    <div className='relative min-h-[600px]'>
      <div>{/* <Image src={} alt='back' /> */}</div>
      <div className='relative '>
        <div className='absolute -top-40 right-0 -z-10'>
          <Image src={frame} alt='' />
        </div>
      </div>{" "}
      <div className='absolute top-[700px] -z-10'>
        <Image src={circle} alt='' />
      </div>
      <div className='absolute right-0 top-[1400px] -z-10'>
        <Image src={frame3} alt='' />
      </div>{" "}
      <div className='absolute top-[2300px] -z-10'>
        <Image src={frame4} alt='' />
      </div>
      <p className='text-center font-bold text-3xl'>Picaso eKYC</p>
      <div className='max-w-6xl mx-auto px-4 md:max-w-[600px] text-center text-xl text-cs-orange pt-5'>
        All-in-one API Solution to create seamless user onboarding experiences
        for your system with{" "}
        <b>
          <i>Face Liveness Detection (Emotion & Pose Detection)</i>{" "}
        </b>
        and
        <b>
          {" "}
          <i>ID Card Extraction</i>
        </b>
      </div>
      <div className='contaienr  mx-auto max-w-[900px] min-h-[300px]'>
        <div className='p-10 '>
          <div className='p-5 rounded-2xl '>
            <Image src={ekyc1} alt='wida' />
          </div>
        </div>
      </div>
      <div className='contaienr mx-auto max-w-[1100px] min-h-[300px] p-5 md:p-0'>
        <div className='box-shadow1 mt-16'>
          <div className='md:flex items-center m-10 md:m-0'>
            <div className='min-w-[350px] p-10 '>
              <Image src={logo4} alt='aaa' />
            </div>
            <div className='pr-10'>
              <p className='py-5 text-xl font-bold'>Background</p>
              <p className='text-cs-text-gray'>
                {" "}
                Based on research conducted by{" "}
                <b>
                  <i>microsave</i>
                </b>
                , there are several problems with eKYC implementation in
                Indonesia. National ID Card (KTP) is the only eligible document
                for authentication, the error rate of manual verification is
                quite high (30%-60%) and lastly, it increases the cost and time
                to deal with manual verification.
              </p>
              <p className='py-5 text-xl font-bold'>Goal</p>
              <p className='text-cs-text-gray'>
                <b>Digitalize KYC Process through AI-powered technology</b>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='container  mx-auto max-w-[1100px] min-h-[300px] md:pt-12 p-5 md:p-0'>
        <div className='box-inner2'>
          <div className='px-5 md:px-14'>
            <div className='p-10'>
              <p className=' text-2xl font-bold'>Problem Statement</p>

              <div className='p-4 mb-10 mt-5 box-shadow1 flex text-cs-text-gray'>
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
                <div className='max-w-[800px]'>
                  {" "}
                  As a user, I want seamless eKYC experiences so I can complete
                  the verification process of my application, but the processing
                  time is very long and sometimes my application got rejected so
                  I need to redo the process all over again
                </div>
              </div>

              <div className='p-4 my-10 box-shadow1 flex text-cs-text-gray'>
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
                <div>
                  {" "}
                  As a verification team member, I want to quickly validate the
                  user documents, but there are many blurry documents so I'm
                  having difficulties validating the documents
                </div>
              </div>

              <div className='p-4 my-10 box-shadow1 flex text-cs-text-gray'>
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
                <div className='max-w-[800px]'>
                  As a verification team member, I want to quickly validate the
                  realness of the user, but oftentimes the user is having a bad
                  connection so we can't do a video call and it frustrates me
                  because I don't have any other option to validate the user
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='mx-auto max-w-[1100px] min-h-[500px] p-5 md:p-0  '>
        <p className='text-center font-bold text-3xl p-16'>Features</p>
        <div className='md:flex justify-between'>
          <div>
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
              Face Liveness Detection
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
              Emotion Detection
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
              Pose Detection
            </p>
          </div>
          <div className='w-[24rem] md:w-[32rem] ml-8 md:ml-0'>
            <Image src={ekyc2} />
          </div>
        </div>
      </div>
      <div className='mx-auto max-w-[1100px] min-h-[350px] p-5 md:p-0 '>
        <div className='md:flex justify-between md:flex-row-reverse '>
          <div>
            <p className='text-cs-blue font-bold text-2xl'>
              ID Card Extraction
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
              Extract NIK
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
              Extract Name
            </p>
          </div>
          <div className='w-[24rem] md:w-[32rem] ml-8 md:ml-0'>
            <Image src={ekyc3} />
          </div>
        </div>
      </div>
      <div className='mx-auto max-w-[1100px] min-h-[300px] p-5 md:p-0 '>
        <div className='md:flex justify-between'>
          <div>
            <p className='text-cs-blue font-bold text-2xl'>API Dashboard</p>
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
              Generate API
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
              API Usage
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
              API Logs
            </p>
          </div>
          <div className='w-[24rem] md:w-[32rem] ml-8 md:ml-0'>
            <Image src={ekyc4} />
          </div>
        </div>
      </div>
      <div className='container  mx-auto max-w-[750px] min-h-[300px] my-20'>
        <div className='relative box-shadow1'>
          <div className='absolute md:-right-36 top-20 -z-10'>
            <Image src={circle2} alt='' />
          </div>
          <div className='px-10'>
            <div className='p-5'>
              <p className='py-5 text-xl font-bold text-center text-cs-orange'>
                My Role
              </p>
              <p className='text-cs-text-gray'>
                <span className='ml-10' />
                As a{" "}
                <b>
                  <i>Proxy Product Owner</i>{" "}
                </b>
                for Picaso eKYC. I collaboratively working with 12 other
                colleagues to turn a concept into a usable product and assigned
                each people with their suitable roles. Other than that, I also
                <b>
                  {" "}
                  <i>breakdown a project</i>{" "}
                </b>
                into smaller tasks,
                <b>
                  <i> led Sprint</i>
                </b>{" "}
                from Spring Planning to Restrospective,{" "}
                <b>
                  <i>involve in ideation and prototyping</i>{" "}
                </b>
                the MVP, create a{" "}
                <b>
                  <i>daily report</i>
                </b>{" "}
                and{" "}
                <b>
                  <i>product roadmap </i>
                </b>
                for the Product Owner
              </p>
              <div className='text-center p-10'>
                <Image src={ekyc5} alt='' />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container  mx-auto max-w-[900px] min-h-[350px]'>
        <div className='relative box-inner1'>
          <div className='absolute -left-36 -top-10 -z-10'>
            <Image src={circle3} alt='' />
          </div>
          <div className='px-10'>
            <div className='p-5'>
              <p className='py-5 text-2xl font-bold'>Key Takeaway</p>
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
                How to introduce & implement the Scrum framework to increase
                productivity and clarify the product goals
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
                Initiated sharing & learning culture inside the development team
                through internal sharing sessions to increase team member
                interactions
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ekyc;
