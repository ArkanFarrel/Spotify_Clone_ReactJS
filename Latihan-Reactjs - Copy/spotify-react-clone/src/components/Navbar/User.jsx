import React from "react";
import { Menu } from "@headlessui/react";
import { Icon } from "components/Icons";

export default function User() {
  const person = {
    avatar:
      "https://yt3.googleusercontent.com/m6b2FZZBo7DXoqGkhnj8q-CgqlO35EfybzlP4xwT83Ob5KiZcsdORcuMho0xqtjEL3H2OO_13A=s176-c-k-c0x00ffffff-no-rj",
  };

  return (
    <Menu as="nav" className={"relative"}>
      {({ open }) => (
        <>
          <Menu.Button
            className={`flex items-center gap-x-[6px] rounded-[23px] p-1  ${open ? "bg-active" : "bg-brenk"}`}
          >
            <img
            // style={{marginLeft:"10px"}}
              className="w-[28px] h-[28px] rounded-full ml-10"
              // style={{marginLeft:"10px"}}
              src={person.avatar}
              alt=""
            />
            {/* <span className='text-sm font-semibold'>{person.name}</span> */}
            <span className={open === true && "rotate-180"}>
              <Icon name="dir" />
            </span>
          </Menu.Button>
          <Menu.Items className="absolute p-1 top-full right-0 w-48 bg-active rounded translate-y-2 z-10">
            <Menu.Item>
              {({ active }) => (
                <a
                  className={`h-10 flex px-2 text-sm font-semibold justify-between text-white opacity-80 items-center ${active && "bg-menubg"}`}
                  href="/#"
                >
                  Account
                  <Icon name="external" />
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  className={`h-10 flex px-2 text-sm font-semibold justify-between text-white opacity-80 items-center ${active && "bg-menubg"}`}
                  href="/#"
                >
                  Profil
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  className={`h-10 flex px-2 text-sm font-semibold justify-between text-white opacity-80 items-center ${active && "bg-menubg"}`}
                  href="/#"
                >
                  Log out
                </a>
              )}
            </Menu.Item>
          </Menu.Items>
        </>
      )}
    </Menu>
  );
}
