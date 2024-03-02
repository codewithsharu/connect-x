import Image from "next/image";
import { VscDebugDisconnect } from "react-icons/vsc";
import { RiHome7Fill } from "react-icons/ri";
import { Inter } from "next/font/google";
import { FaHashtag } from "react-icons/fa";

const inter = Inter({ subsets: ["latin"] });

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
    title:"hash",
    icon:<FaHashtag />
  }
];

export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-12 h-screen w-screen">
        <div className="col-span-3 pt-8 ">
          <VscDebugDisconnect className="text-5xl h-fit rounded-full p-2 cursor-pointer transition-all hover:bg-gray-800" />
          <div className="mt-4 text-2xl">
          <ul>
            {sidebarIcons.map((item) => (
              <li className="flex justify-start items-center gap-4 hover:bg-gray-800 rounded-full px-3  py-3  w-fit  " key={item.title}>
                <span>{item.icon}</span>
                <span>{item.title}</span>
              </li>
            ))}
          </ul>
        </div>
        </div>

        <div className="col-span-6 border-r-[1px] border-l-[1px] border-gray-400"></div>
        <div className="col-span-3"></div>
      </div>
    </div>
  );
}
