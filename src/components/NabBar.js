import { useState, useEffect } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  // Button,
  IconButton,
} from "@material-tailwind/react";
import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-regular-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import logo from '../styles/logo.png';
 

 function NavBar() {

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  const [openNav, setOpenNav] = useState(false);
 
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
 
  const navList = (
    <ul  className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 text-dgreen">
      <Typography
        as="li"
        variant="small"
        // color="#338457"
        className="p-1 font-normal"
      >
        <a href="#about" className="flex items-center">
          About
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        // color="#338457"
        className="p-1 font-normal"
      >
        <a href="#skills" className="flex items-center">
          Skills
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        // color="#338457"
        className="p-1 font-normal"
      >
        <a href="#works" className="flex items-center">
          Works
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        // color="#338457"
        className="p-1 font-normal"
      >
        <a href="#contact" className="flex items-center">
          Contact
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        // color="#338457"
        className="p-1 font-normal"
      >
        <button className="flex items-center">
        <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md px-3 py-2 text-sm shadow-sm ring-1 ring-inset ring-dgreen hover:bg-gray-50">
          Links
          <ChevronDownIcon className="-mr-1 h-5 w-5" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md shadow-lg ring-1 ring-dgreen ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                href="https://github.com/Dominique216"  
                target="_blank" 
                rel="noreferrer"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm  hover:bg-lgreen'
                  )}
                >
                  <FontAwesomeIcon icon={faGithub}  /> GitHub
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                href="https://www.linkedin.com/in/dominique-nix-152361263/" 
                target="_blank" 
                rel="noreferrer"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm  hover:bg-lgreen'
                  )}
                >
                  <FontAwesomeIcon icon={faLinkedin}  /> LinkedIn
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm  hover:bg-lgreen'
                  )}
                >
                  <FontAwesomeIcon icon={faFilePdf}  /> Resume
                </a>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
        </button>
      </Typography>
    </ul>
  );
 
  return (
    <Navbar style={{backgroundColor: "#F3F4E2"}} className="mx-auto max-w-screen-xl py-2 px-4 lg:px-8 lg:py-4 border-none">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <Typography

          variant="small"
          className="mr-4 cursor-pointer py-1.5 font-normal w-16"
        >
          <img src={logo}/>
        </Typography>
        <div className="hidden lg:block">{navList}</div>
        {/* <Button variant="gradient" size="sm" className="hidden lg:inline-block">
          <span>Buy Now</span>
        </Button> */}
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        <div className="container mx-auto">
          {navList}
          {/* <Button variant="gradient" size="sm" fullWidth className="mb-2">
            <span>Buy Now</span>
          </Button> */}
        </div>
      </MobileNav>
    </Navbar>
  );
}
  
  export default NavBar;