"use client";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import Link from "next/link";
import { BsPlus } from "react-icons/bs";
import { LoggedInUser, StorySliderProps } from "./types";
import StorySliderItem from "../storyslideritem/storyslideritem";

export default function StorySlider({
  loggedInUser: { profilePicture },
  stories,
}: {
  stories: StorySliderProps[];
  loggedInUser: LoggedInUser;
}) {
  const sliderRef = useRef<Slider>(null);
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
  };

  const handelNext = () => {
    sliderRef?.current?.slickNext();
  };

  const handelPrev = () => {
    sliderRef?.current?.slickPrev();
  };

  return (
    <div className="slider-container relative">
      <MdNavigateNext
        onClick={handelNext}
        className="w-12 h-12 text-gray-400 flex items-center justify-center absolute top-1/2 -right-5 z-10 bg-white outline outline-gray-500 cursor-pointer rounded-full p-2  hover:fill-200  transition duration-300 ease-out "
      />
      <MdNavigateBefore
        onClick={handelPrev}
        className="w-12 h-12 text-gray-400 flex items-center justify-center absolute top-1/2 -left-5 z-10 bg-white outline outline-gray-500 cursor-pointer rounded-full p-2 hover:fill-200  transition duration-300 ease-out"
      />

      <Slider {...settings} ref={sliderRef}>
        <div className="group overflow-hidden rounded-xl h-60">
          <Link href={`#`} className="block h-full relative">
            <Image
              alt="Amanuel Ferede"
              src={`/users/4.jpg`}
              width={0}
              height={0}
              sizes="100vh"
              className="w-full h-full object-center"
            />

            <div className="h-16 absolute z-10 bottom-0 flex flex-col w-full bg-white">
              <div className="w-10 h-10  bg-white rounded-full scale-[122%] absolute left-1/2 -translate-x-1/2 -top-1/2 translate-y-1/2"></div>
              <BsPlus className="w-10 h-10 bg-blue-600 rounded-full absolute left-1/2 -translate-x-1/2 -top-1/2 translate-y-1/2 text-white" />
              <p className="text-center mt-8">Create A story</p>
            </div>
          </Link>
        </div>
        {stories.map((story) => {
          return (
            <StorySliderItem
              key={story.storyid}
              storyid={story.storyid}
              fname={story.fname}
              lname={story.lname}
              profilepic={story.profilepic}
              post={story.post}
            />
          );
        })}
      </Slider>
    </div>
  );
}
