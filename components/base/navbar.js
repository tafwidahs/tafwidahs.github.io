import { Fragment, useEffect, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/solid";
// import Logo from "../../public/logo.png";
import Image from "next/image";
import { useRouter } from "next/router";

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

export default function Navbar() {
  const router = useRouter();
  const [link, setLink] = useState(false);
  useEffect(() => {
    if (router.pathname === "/about-me") {
      setLink(!link);
    }
  }, []);
  return (
    <Popover className='container mx-auto sticky bg-transparent z-10'>
      <div className='max-w-6xl mx-auto px-4 md:max-w-[800px]'>
        <div className='flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start'>
          <div className='-mr-2 -my-2 md:hidden'>
            <Popover.Button className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
              <span className='sr-only'>Open menu</span>
              <MenuIcon className='h-6 w-6' aria-hidden='true' />
            </Popover.Button>
          </div>
          <Popover.Group as='nav' className='hidden md:flex space-x-10'>
            <a
              href='/'
              className=' font-medium text-gray-500 hover:text-gray-900 text-xl'
            >
              Tafwida Hesaputra Suryawan
            </a>
          </Popover.Group>
          <div className='hidden md:flex items-center justify-end md:flex-1 lg:w-0'>
            <a
              href='/'
              className={`ml-8 inline-flex items-center justify-center px-4 py-2 text-xl font-medium  ${
                link ? "text-gray-500" : "text-cs-orange"
              }`}
            >
              Work
            </a>
            <a
              href='about-me'
              className={`whitespace-nowrap text-xl font-medium ${
                link ? "text-cs-orange" : "text-gray-500"
              } hover:text-gray-900`}
            >
              About me
            </a>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter='duration-200 ease-out'
        enterFrom='opacity-0 scale-95'
        enterTo='opacity-100 scale-100'
        leave='duration-100 ease-in'
        leaveFrom='opacity-100 scale-100'
        leaveTo='opacity-0 scale-95'
      >
        <Popover.Panel
          focus
          className='absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden'
        >
          <div className='rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50'>
            <div className='pt-5 pb-6 px-5'>
              <div className='flex items-center justify-between'>
                <div>
                  <img
                    className='h-8 w-auto'
                    src='https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg'
                    alt='Workflow'
                  />
                </div>
                <div className='-mr-2'>
                  <Popover.Button className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
                    <span className='sr-only'>Close menu</span>
                    <XIcon className='h-6 w-6' aria-hidden='true' />
                  </Popover.Button>
                </div>
              </div>
              <div className='mt-6'>
                <nav className='grid gap-y-8'>
                  <a
                    href='#'
                    className='text-base font-medium text-gray-500 hover:text-gray-900'
                  >
                    Tafwida Hesaputra Suryawan
                  </a>
                </nav>
              </div>
            </div>
            <div className='py-6 px-5 space-y-6'>
              <div>
                <a
                  href='#'
                  className='w-full flex items-center justify-center px-4 border border-transparent rounded-md shadow-sm text-base font-medium'
                >
                  Work
                </a>

                <a href='#' className='text-indigo-600 hover:text-indigo-500'>
                  About me
                </a>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
