"use client";
import { FaLocationDot, FaLock, FaXmark } from "react-icons/fa6";
import Image from "next/image";
import { BsEmojiAstonished } from "react-icons/bs";
import { GrGallery } from "react-icons/gr";
import { FaUserFriends } from "react-icons/fa";
import { HiOutlineEmojiHappy } from "react-icons/hi";
import { PiGifFill } from "react-icons/pi";
import { IoIosMore } from "react-icons/io";
import { setPost, setPostOption } from "@/app/store/slices/user/post/postSlice";
import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";

import { createPost } from "@/app/actions/user";

import UploadedMedias from "../uploadedmedias/uploadedmedias";
import { useFormStatus } from "react-dom";

// import { createPost, State } from "@/app/libs/actions"
export default function PostModal(props: { onClose: () => void }) {
  const dispatch = useAppDispatch();

  const post = useAppSelector((state) => state.userPost.post);
  const postOption = useAppSelector((state) => state.userPost.postOption);

  const [uploadedMedias, setUploadedMedias] = useState<string[]>([]);

  const input = useRef<HTMLInputElement>(null);

  const textAreaForText = useRef<HTMLTextAreaElement>(null);
  const { pending } = useFormStatus();
  const showDialog = () => {
    input.current?.click();
  };
  const choosePhoto = () => {
    dispatch(setPostOption("textwithphoto"));
  };

  const onChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (window.FileReader) {
      const uploadedMedias: string[] = [];
      const files = e.target.files;

      if (files) {
        for (const x in files) {
          const file = files[x];
          if (file) {
            const fr = new FileReader();
            fr.onloadend = () => {
              uploadedMedias.push(fr.result as string);
              setUploadedMedias(uploadedMedias);
              dispatch(setPostOption("showphoto"));
            };
            try {
              fr.readAsDataURL(file);
            } catch {}
          }
        }
      }
      //console.log(files![0]);
    } else {
      alert("file reader not supported");
    }
  };

  const onChangePost = (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    dispatch(setPost(e.target.value));
    dispatch(setPost(e.target.value));
  };

  const getClassName = () => {
    if (postOption === "textonly") {
      return {
        marginTop: `${6}rem`,
      };
    } else {
      return {
        marginTop: "3.5rem",
      };
    }
  };

  useEffect(() => {
    if (pending) {
      props.onClose();
      dispatch(setPostOption(postOption));
      setUploadedMedias([]);
      dispatch(setPost(""));
    }
  }, [dispatch, pending, postOption, props]);

  return (
    <>
      <section className="bg-gray-100/75 fixed top-0 bottom-0 left-0 right-0 z-20 overflow-hidden">
        <div
          className={`max-w-[517px] mx-auto relative shadow-lg rounded-xl bg-white 
            `}
          style={getClassName()}
        >
          {pending && (
            <div className="absolute bg-gray-100 opacity-60 z-10 top-0 bottom-0 left-0 right-0 flex items-center justify-center">
              <p className="text-2xl font-medium">Posting ...</p>
            </div>
          )}

          <div className="p-3 border-b pb-2 border-b-gray-200 flex items-center justify-between">
            <p className=""></p>
            <p className="font-bold text-xl">Create Post</p>
            <FaXmark
              className="w-10 h-10 p-2 hover:bg-gray-50 bg-gray-100 rounded-full cursor-pointer"
              onClick={() => {
                dispatch(setPostOption(postOption));
                dispatch(setPost(post));
                props.onClose();
              }}
            />
          </div>
          <form className="p-3 flex flex-col w-full" action={createPost}>
            <div className="flex space-x-3">
              <Image
                alt="Amanuel Ferede"
                src={"/users/1.jpg"}
                width={0}
                height={0}
                sizes="100vh"
                className="w-10 h-10 object-cover rounded-full border-2 border-blue-700"
              />

              <div className="flex flex-col pb-3 space-y-1">
                <p>Amanuel Ferede</p>
                <button className="py-[0.4px] rounded-lg bg-gray-200 flex items-center justify-center space-x-1">
                  <FaLock className="w-3 h-3" />
                  <span>Only me</span>
                </button>
              </div>
            </div>

            <div
              className={`${
                postOption === "textonly" ? "max-h-[15rem]" : "max-h-[18rem]"
              } overflow-y-auto`}
            >
              {postOption === "showphoto" && (
                <UploadedMedias medias={uploadedMedias} />
              )}

              <textarea
                ref={textAreaForText}
                placeholder="What's in your mind, Amanuel"
                className={`placeholder:text-gray-500 auto pb-2 text-wrap resize-none
                outline-none pl-3 block field-sizing-content min-h-auto border-none outline-0 w-full overflow-y-auto ${
                  postOption !== "showphoto" ? "block" : "hidden"
                }`}
                value={post}
                onChange={onChangePost}
                name="post"
              ></textarea>

              <div className={` flex items-center justify-between my-2 px-3 `}>
                <div
                  className={`w-8 h-8 bg-gradient-to-bl rounded-lg  from-yellow-400 to-green-500 ${
                    postOption === "textonly" && post.length >= 100
                      ? "visible"
                      : "invisible"
                  }`}
                ></div>
                <BsEmojiAstonished className="w-7 h-7 fill-gray-600 " />
              </div>

              <div
                className={`${
                  postOption === "textwithphoto" ? "block" : "hidden"
                }`}
              >
                <input
                  ref={input}
                  name="photos"
                  multiple
                  type="file"
                  onChange={onChangeFile}
                  className="relative hidden"
                ></input>
                <div className="p-2 w-full relative border border-gray-50 rounded-xl group">
                  <FaXmark
                    className="p-2 w-8 z-[400] peer  h-8  border border-gray-300 absolute right-4 top-4 cursor-pointer bg-white rounded-full hover:bg-gray-100"
                    onClick={() => dispatch(setPostOption("textonly"))}
                  />
                  <div
                    className={`cursor-pointer peer-hover:bg-gray-50 peer py-[3rem] flex items-center justify-center rounded-xl bg-gray-50 group-hover:bg-gray-100`}
                    onClick={showDialog}
                  >
                    <div className=" flex flex-col space-y-1.5 items-center justify-center">
                      <GrGallery className="w-6 h-6 text-green-600 cursor-pointer" />
                      <p className="text-sm font-medium">Add photos/videos</p>
                      <p className="text-gray-600 text-sm">or drag and drop</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-4 p-3 border border-gray-300 rounded-lg flex items-center justify-between">
              <p>Add to your post</p>
              <div className="flex items-center space-x-4">
                <GrGallery
                  className="w-6 h-6 text-green-600 cursor-pointer"
                  onClick={choosePhoto}
                />
                <FaUserFriends className="w-6 h-6 fill-blue-600" />
                <HiOutlineEmojiHappy className="w-6 h-6 text-yellow-600" />
                <FaLocationDot className="w-6 h-6 fill-red-600" />
                <PiGifFill className="w-6 h-6 fill-green-600" />
                <IoIosMore className="w-6 h-6 fill-gray-600" />
              </div>
            </div>
            <button
              disabled={!post || uploadedMedias.length === 0}
              type="submit"
              className={`w-full text-center  py-2 cursor-pointer text-white rounded-md ${
                post || uploadedMedias.length > 0
                  ? "bg-blue-600"
                  : "bg-gray-300"
              }`}
            >
              Post
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
