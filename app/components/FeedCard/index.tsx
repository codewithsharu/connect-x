import React from "react";
import Image from "next/image";
import { RiMessageLine } from "react-icons/ri";
import { AiOutlineRetweet } from "react-icons/ai";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { MdOutlineFileUpload } from "react-icons/md";

const FeedCard: React.FC = () => {
    return (
        <div className=" border border-gray-600 border-b-0  border-r-0 border-l-0  hover:bg-slate-900 p-4">
            <div className="grid grid-cols-12 gap-2 ">
                <div className="col-span-1">
                <Image src="https://avatars.githubusercontent.com/u/113088541?v=4" alt="user-image" height={50} width={50} style={{ borderRadius: '50%' }} />

                </div>
                <div className="col-span-11">
                    <h1>shareen</h1>
                    <p>"Success is not final, failure is not fatal: It is the courage to continue that counts." - Winston Churchill</p>
                    <div className="flex justify-start justify-between mt-3 text-xl w-[70%]">
                    <div><RiMessageLine /></div>
                    <div><AiOutlineRetweet /></div>
                    <div><FaRegHeart /></div>
                    <div><MdOutlineFileUpload /></div>
                </div>

                </div>
            </div>
        </div>
    );
}

export default FeedCard;
