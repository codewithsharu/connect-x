import Image from "next/image";
import { VscDebugDisconnect } from "react-icons/vsc";
import { RiHome7Fill } from "react-icons/ri";
import { FaHashtag } from "react-icons/fa";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FiMessageSquare } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { TbDotsCircleHorizontal } from "react-icons/tb";
import FeedCard from "@/components/FeedCard";



interface cSidebarIcons {
  title: string;
  icon: React.ReactNode;
}

const sidebarIcons: cSidebarIcons[] = [
  {
    title: "Home",
    icon: <RiHome7Fill />,
  },
  {
    title:"Trending",
    icon:<FaHashtag />
  }
  ,{
    title:"Notification",
    icon:<IoIosNotificationsOutline />
  },
  {
    title:"Messages",
    icon:<FiMessageSquare />
  },
  {
    title:"Profile",
    icon:<CgProfile />
  },
  {
    title:"More",
    icon:<TbDotsCircleHorizontal />
  }
];

export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-12 h-screen w-screen">
        <div className="col-span-3  pt-8 ml-28">
          <VscDebugDisconnect className="text-5xl h-fit rounded-full p-2 cursor-pointer transition-all hover:bg-gray-800" />
          <div className="mt-4 text-2xl font-semibold">
          <ul>
            {sidebarIcons.map((item) => (
              <li className="flex justify-start items-center gap-4 hover:bg-gray-800 rounded-full px-3  py-3  w-fit  " key={item.title}>
                <span>{item.icon}</span>
                <span>{item.title}</span>
              </li>
            ))}
          </ul>
         <div className=" mt-4 pl-10"> <button className="bg-[#1d9bf0] p-2 rounded-full  px-10" >Add</button></div>
        </div>
        </div>

        <div className="col-span-5 border-r-[1px] border-l-[1px] border-gray-600">
          <FeedCard/>

          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>

        </div>



        <div className="col-span-4"></div>
      </div>
    </div>
  );
}
