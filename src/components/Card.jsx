import React from "react";
import Image from "next/image";
import { CiClock2 } from "react-icons/ci";
import { IoPerson } from "react-icons/io5";
import { FaBook } from "react-icons/fa";

const Card = ({
  image,
  title,
  description,
  regularPrice,
  offerPrice,
  time,
  view,
  book,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-xl hover:scale-105 hover:shadow-2xl transition-all h-full max-w-[234px] space-y-2.5 mx-auto">
      <Image src={image} alt={title} />

      <div className="px-2.5">
        <h4 className="text-base font-medium">{title}</h4>
        <p className="text-xs font-normal">{description}</p>
      </div>

      <div className="flex items-center justify-between px-2.5">
        {!regularPrice ? (
          <p className="text-primary leading-none">Free</p>
        ) : regularPrice && offerPrice ? (
          <p className="text-xs font-light">
            <del>${regularPrice}</del>
          </p>
        ) : (
          <p className="text-primary text-xs font-medium">${regularPrice}</p>
        )}

        {offerPrice && (
          <p className="text-primary text-xs font-medium">${offerPrice}</p>
        )}
        {offerPrice && (
          <p className="text-[10px] font-normal px-1.5 bg-primary-light rounded-full">
            You saved $ {regularPrice - offerPrice}
          </p>
        )}
      </div>

      <hr className="text-devider" />

      <footer className="flex gap-[11px] p-2.5 pt-0 rounded-xl text-seconday">
        <p className="text-xs flex items-center gap-1 text-[10px] font-normal">
          <CiClock2 className="w-2.5 h-2.5" /> {time} hrs
        </p>
        <p className="text-xs items-center flex gap-1 text-[10px] font-normal">
          <IoPerson className="w-2.5 h-2.5" />
          {view}
        </p>
        <p className="text-xs items-center flex gap-1 text-[10px] font-normal">
          <FaBook className="w-2.5 h-2.5" />
          {book}
        </p>
      </footer>
    </div>
  );
};

export default Card;
