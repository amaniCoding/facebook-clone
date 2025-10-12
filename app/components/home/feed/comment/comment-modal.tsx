"use client";
import Image from "next/image";
import Link from "next/link";
import { FaXmark } from "react-icons/fa6";
import { IoMdMore } from "react-icons/io";
import LikeShareComment from "../post/like-share-comment";
export default function CommentModal() {
  return (
    <div className="bg-gray-100/75 fixed top-0 bottom-0 left-0 right-0 z-[300] overflow-hidden">
      <div className="max-w-[700px] mx-auto rounded-xl bg-white my-10 shadow-xl">
        <div className="flex rounded-t-xl items-center justify-between mb-2 border-b-2 border-b-slate-200 p-2 sticky w-full left-0 right-0 bg-white top-0">
          <p></p>
          <p>{"Amanuel Ferede"}&apos;s Post</p>
          <FaXmark className="w-10 h-10 rounded-full hover:bg-slate-300 p-2 cursor-pointer" />
        </div>
        <div className="overflow-y-auto socrollabar h-[430px] relative">
          <div className="flex justify-between">
            <div className="flex space-x-3 p-2">
              <Image
                unoptimized
                alt="Amanuel Ferede"
                src={"/users/9.jpg"}
                width={0}
                height={0}
                sizes="100vh"
                className="w-10 h-10 object-cover rounded-full ring-2 ring-offset-2 ring-blue-400"
              />
              <div className="flex flex-col space-y-0.5">
                <span> {"Amanuel Ferede"}</span>
                <span className="text-gray-400 text-sm">2 Hours</span>
              </div>
            </div>
            <IoMdMore className="w-8 h-8" />
          </div>
          <div className="p-2">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              esse quaerat corrupti ut asperiores neque modi enim aspernatur
              culpa, excepturi pariatur sit dolor quas adipisci quos, labore
              iusto autem dolorum.
            </p>
          </div>

          <LikeShareComment />

          <div className="px-6 py-2 ">
            <div className="flex flex-row mb-3 space-x-3 pb-2">
              <div className="relative group flex-none">
                <Link href={"/profile"}>
                  <Image
                    unoptimized
                    alt="Amanuel Ferede"
                    src={"/users/7.jpg"}
                    width={0}
                    height={0}
                    sizes="100vh"
                    className="w-9 h-9 object-cover rounded-full ring-2 ring-offset-2 ring-blue-400"
                  />
                </Link>
              </div>
              <div className="">
                <div className="p-3 bg-gray-100 rounded-xl ">
                  <p className="font-semibold">Amanuel Ferede</p>
                  <p>Text comment</p>
                </div>

                <div className="flex space-x-4 pl-3">
                  <span className="text-sm"></span>
                  <span className="text-sm">Like</span>
                  <span className="text-sm">Reply</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="sticky rounded-b-xl flex bg-white space-x-2 bottom-0 left-0 right-0 p-2 w-full">
          <Image
            alt="Amanuel Ferede"
            src={"/users/3.jpg"}
            width={0}
            height={0}
            sizes="100vh"
            className="w-10 h-10 object-cover rounded-full block flex-none"
          />

          <input
            onChange={() => {}}
            onKeyDown={() => {}}
            value={""}
            type="text"
            className="p-3 block grow focus:outline-none bg-slate-50 rounded-xl"
            placeholder="Write a comment ..."
          ></input>
        </div>
      </div>
    </div>
  );
}
