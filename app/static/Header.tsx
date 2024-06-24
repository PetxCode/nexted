"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React, { ReactNode } from "react";
import { MdCreate, MdHome, MdLock, MdPerson } from "react-icons/md";

interface iProps {
  id: number;
  name: string;
  url: string;
  icon: ReactNode;
}

const Header = () => {
  const nav: iProps[] = [
    {
      id: 1,
      name: "Home",
      url: "/",
      icon: <MdHome />,
    },
    {
      id: 2,
      name: "Secret",
      url: "/",
      icon: <MdLock />,
    },
    {
      id: 2,
      name: "Personal",
      url: "/",
      icon: <MdPerson />,
    },
    {
      id: 3,
      name: "Create",
      url: "/",
      icon: <MdCreate />,
    },
  ];

  const session = useSession();

  console.log("reading session: ", session);

  let user: undefined | null | {} = session.data?.user;

  return (
    <div className="flex justify-center items-center w-full h-[70px] border-b">
      <div className="w-[90%] flex justify-between items-center">
        <h1>Logo</h1>

        <div className="flex gap-4 items-center">
          {nav.map((props: any) => (
            <Link
              href={props.url}
              className="border rounded-md flex gap-2 px-4 py-2 items-center"
            >
              <div>{props.icon}</div>
              <div>{props.name}</div>
            </Link>
          ))}
        </div>
        {user ? (
          <div
            className="border rounded-sm flex px-6 py-2 items-center cursor-pointer"
            onClick={() => {
              signOut();
            }}
          >
            Log out
          </div>
        ) : (
          <Link
            href="/signin"
            className="border rounded-sm flex px-6 py-2 items-center"
          >
            Log in
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
