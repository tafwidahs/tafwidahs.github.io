import React from "react";
import Image from "next/image";
import frame from "../../../public/Frame 1.png";
import corpu from "../../../public/corpu1.png";
import logo3 from "../../../public/logo3.png";
import corpu2 from "../../../public/corpu2.png";
import corpu3 from "../../../public/corpu3.png";
import corpu4 from "../../../public/corpu4.png";

import circle from "../../../public/circle.png";
import circle2 from "../../../public/circle2.png";
import circle3 from "../../../public/circle3.png";
import circle4 from "../../../public/circle4.png";

import event1 from "../../../public/event/event1.png";
import event2 from "../../../public/event/event2.png";
import event3 from "../../../public/event/event3.png";
import event4 from "../../../public/event/event4.png";
import event5 from "../../../public/event/event5.png";
import event6 from "../../../public/event/event6.png";
import event7 from "../../../public/event/event7.png";
import event8 from "../../../public/event/event8.png";
import frame3 from "../../../public/frame3.png";
import frame4 from "../../../public/frame4.png";
import frame5 from "../../../public/frame5.png";

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
      <div className='absolute -left-10 top-[5700px] -z-10'>
        <Image src={frame5} alt='' />
      </div>
      <div className='absolute right-0 top-[4300px] -z-10'>
        <Image src={circle4} alt='' />
      </div>
      <p className='text-center font-bold text-3xl'>E-Vent</p>
      <div className='max-w-6xl mx-auto px-4 md:max-w-[600px] text-center text-xl text-cs-orange pt-5'>
        End-to-End integrated assessment platform for your events, you can
        Manage Events, Weighi your Judges, Create Assessment Form, View
        Leaderboard, & Generate BAK
      </div>
      <div className='contaienr  mx-auto max-w-[900px] min-h-[300px]'>
        <div className='p-10 '>
          <div className='p-5 rounded-2xl '>
            <Image src={event1} alt='wida' />
          </div>
        </div>
      </div>
      <div className='contaienr mx-auto max-w-[1100px] min-h-[300px] my-10'>
        <div className='box-shadow1'>
          <div className='md:flex items-center'>
            <div className='min-w-[350px] p-10 text-center'>
              <Image src={logo3} alt='aaa' />
            </div>
            <div className='p-5'>
              <p className='py-5 text-2xl font-extrabold'>Background</p>
              <p className='text-cs-text-gray text-lg'>
                Telkom has several business case competitions and can be
                categorized into 2 themes, Entrepreneurship & Sociepreneurship.
                Every year almost 2000 ideas were submitted into Telkom's idea
                platform called Ideabox to participate in the competitions. The
                problems arise when PICs and Judges wants to assess the idea for
                each event stage.
              </p>
              <p className='py-5 text-xl font-extrabold'>Goal</p>
              <span className='text-cs-text-gray font-bold text-lg'>
                Accelerate Digital Solution Discoveries for Telkom Indonesia
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className='container mx-auto max-w-[1050px] min-h-[300px] pt-10'>
        <div className='box-inner1 rounded-2xl shadow'>
          <div className='px-16'>
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
                <p className='text-cs-text-gray text-lg'>
                  {" "}
                  As a Stage's PIC, I want to put all of the event information
                  such as a list of Judges, weight scoring & number of ideas to
                  assess for each judge, and Assessment Criteria. However, the
                  information was scattered all over the place & files, and I
                  feel like harry potter who searching for the Horcrux
                </p>
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
                <p className='text-cs-text-gray text-lg'>
                  As a Stage's PIC, I want to screen submitted ideas to remove
                  incomplete or duplicate ideas, but the number of submitted
                  ideas were too many and it makes me push my focus to the limit
                </p>
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
                <p className='text-cs-text-gray text-lg'>
                  As a Stage's PIC, I want to create assessment forms so I can
                  send the form to the judges. Currently, I have to create a
                  SurveyMonkey form for each idea by copy & paste the idea into
                  the survey then send the link to the assigned judges. I hope
                  this task can be automated because it requires too much time
                  and the agony is unbearable
                </p>
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
                <p className='text-cs-text-gray text-lg'>
                  As a Stage's PIC, I want to collect all assessed ideas into an
                  Excel or spreadsheet to further process the score, but each
                  PIC has different methods to store the assessed ideas. So I
                  need to manually copy & paste from different sources to my
                  excel/sheet
                </p>
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
                <p className='text-cs-text-gray text-lg'>
                  As a Stage's PIC, I want to calculate the final score of each
                  idea to create the leaderboard. but every stage have a
                  different formula so I need to change the formula on my sheet
                  every time I process a new stage
                </p>
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
                <p className='text-cs-text-gray text-lg'>
                  As a Stage's PIC, I want to show the leaderboard every time a
                  judge finishes his/her assessment. But I feel helpless to do
                  this because I have to wait for all the judges to finish their
                  assessment before I can calculate and present the leaderboard
                </p>
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
                <p className='text-cs-text-gray text-lg'>
                  As a Stage's PIC, I want to conduct a plenary meeting with all
                  stakeholders to decide which idea will be going to the next
                  stage then generate a BAK Document to finalize the stage. But
                  we don't have a platform specially designed for this specific
                  task
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='mx-auto max-w-[1100px] min-h-[650px] mt-20'>
        <p className='text-center font-bold text-2xl p-16'>Features</p>
        <div className='md:flex justify-between m-5'>
          <div>
            <p className='text-cs-blue font-bold text-2xl mb-5'>
              Performance Dashboard
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
              Create New Event
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
              Add & Delete Event Stages
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
              Assign PICs’ Stage
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
              View Event Details
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
              Filter Stages by Assignment
            </p>
          </div>
          <div className='w-[25rem] md:w-[35rem]'>
            <Image src={event2} />
          </div>
        </div>
      </div>
      <div className='mx-auto max-w-[1100px] min-h-[430px] mt-20'>
        <div className='relative md:flex justify-between m-5 md:flex-row-reverse'>
          <div className='absolute -right-10 -z-10'>
            <Image src={circle2} alt='' />
          </div>

          <div>
            <p className='text-cs-blue font-bold text-2xl mb-5'>
              Process Raw Data
            </p>
            <div className='box-inner1 flex pt-3 px-3 my-3 rounded-2xl md:w-[340px] text-cs-text-gray font-bold mt-5'>
              {" "}
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
              <p>Import Excel File</p>
            </div>
            <div className='box-inner1 flex pt-3 px-3 mb-0 rounded-2xl md:w-[340px] text-cs-text-gray font-bold mt-5'>
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
              <p>Processing Method:</p>
            </div>
            <div className='flex justify-end'>
              <div className=''>
                {" "}
                <div className='box-inner1 p-3 rounded-2xl md:w-fit flex justify-end text-cs-text-gray font-bold '>
                  <p>Grouping Idea‘s Founders</p>
                </div>
                <div className='box-inner1 p-3 rounded-2xl md:w-fit flex justify-end text-cs-text-gray font-bold '>
                  <p>Remove Incomplete Ideas</p>
                </div>
              </div>
            </div>

            <div className='box-inner1 flex pt-3 px-3 my-3 rounded-2xl md:w-[340px] text-cs-text-gray font-bold mt-5'>
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
              <p className=''>Download Processed Data</p>
            </div>
          </div>
          <div className='w-[35rem]'>
            <Image src={event3} />
          </div>
        </div>
      </div>
      <div className='mx-auto max-w-[1100px] min-h-[400px] '>
        <div className='relative md:flex justify-between m-5'>
          <div className='absolute -left-36 -z-10'>
            <Image src={circle3} alt='' />
          </div>

          <div>
            <p className='text-cs-blue font-bold text-2xl mb-5'>Assessment</p>
            <div className='box-inner1 flex pt-3 px-3  rounded-2xl md:w-[340px] text-cs-text-gray font-bold mt-5'>
              {" "}
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
              <p>Create Assessment Form</p>
            </div>

            <div className='flex justify-end'>
              <div className=''>
                <div className='box-inner1 p-3 rounded-2xl md:w-[250px]   text-cs-text-gray font-bold text-center'>
                  <p>Category</p>
                </div>
                <div className='box-inner1 p-3 rounded-2xl md:w-[250px] text-cs-text-gray font-bold text-center'>
                  <p>Scoring Criteria</p>
                </div>
                <div className='box-inner1 p-3 rounded-2xl md:w-[250px]  text-cs-text-gray font-bold text-center'>
                  <p>Criteria’s Weight</p>
                </div>
              </div>
            </div>

            <div className='box-inner1 flex pt-3 px-3 my-3 rounded-2xl md:w-[340px] text-cs-text-gray font-bold mt-5'>
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
              <p className=''>Assessing Ideas</p>
            </div>
          </div>
          <div className='w-[35rem]'>
            <Image src={event4} />
          </div>
        </div>
      </div>
      <div className='mx-auto max-w-[1100px] min-h-[400px] mt-20'>
        <div className='md:flex justify-between m-5 md:flex-row-reverse'>
          <div>
            <p className='text-cs-blue font-bold text-2xl mb-5'>
              Manage Judges
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
              Assign Judges
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
              Custom Judge’s Weight
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
              Distribute Ideas to Judges
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
              Remind Judges in Real-Time
            </p>
          </div>
          <div className='w-[25rem] md:w-[35rem]'>
            <Image src={event5} />
          </div>
        </div>
      </div>
      <div className='mx-auto max-w-[1100px] min-h-[350px] mt-20'>
        <div className='md:flex justify-between m-5 '>
          <div>
            <p className='text-cs-blue font-bold text-2xl mb-5'>
              View Leaderboard
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
              Live Leaderboard
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
              Past Events’ Leaderboard
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
              Download Leaderboard Data
            </p>
          </div>
          <div className='w-[25rem] md:w-[35rem]'>
            <Image src={event6} />
          </div>
        </div>
      </div>
      <div className='mx-auto max-w-[1100px] min-h-[500px] mt-20'>
        <div className='md:flex justify-between m-5 md:flex-row-reverse'>
          <div>
            <p className='text-cs-blue font-bold text-2xl mb-5'>BAK</p>
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
              Ideas Selection
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
              Create BAK’s Content
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
              Download Generated BAK
            </p>
          </div>
          <div className='w-[25rem] md:w-[35rem]'>
            <Image src={event7} />
          </div>
        </div>
      </div>
      <div className='container  mx-auto max-w-[900px] min-h-[300px] my-20'>
        <div className='relative box-shadow1'>
          <div className='px-10'>
            <div className='p-5'>
              <p className='py-5 text-2xl font-bold text-center text-cs-orange'>
                My Role
              </p>
              <p className='text-lg text-cs-text-gray'>
                <span className='ml-10' />
                My first project as a{" "}
                <b>
                  <i>Product Owner & Scrum Master. </i>
                </b>
                to deliver the best Event Assessment Platform for Telkom
                Indonesia. I worked closely with stakeholders to define product
                vision and limit the scope for our MVP. Collaboratively turning
                product vision to Hi-Fi prototype through exhaustive user
                research.
              </p>
              <p className='text-lg text-cs-text-gray'>
                <span className='ml-10' />I managed the product from the various
                stages of vision, research, design, prioritization, and product
                launch. Even though the stakeholder has decided to hold the
                project, we successfully launch the website & mobile apps{" "}
                <b>
                  <i>within a month.</i>
                </b>
              </p>
              <div className='text-center p-10'>
                <Image src={event8} alt='' />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container  mx-auto max-w-[950px] min-h-[300px] text-cs-text-gray'>
        <div className='relative box-inner2'>
          <div className='absolute -right-36 top-72 -z-10'>
            <Image src={circle2} alt='' />
          </div>

          <div className='px-16 py-8'>
            <div className='p-5'>
              <p className=' text-xl font-bold pt-2'>Key Takeaway</p>
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
                How to manage a remote team with different timezones and
                backgrounds. I managed the team's atmosphere so no one feels
                left out and keep the productivity stays high
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
