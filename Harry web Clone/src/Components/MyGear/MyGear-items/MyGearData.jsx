import React from "react";
import MyGearCard from "./MyGearCard";
import { BsTools } from "react-icons/bs";
import camera from "../../../Assets/Camera.webp";
import boyamic from "../../../Assets/boyamic.webp";
import iphone from "../../../Assets/iphone.webp";
import webcam from "../../../Assets/webcam.webp";
import mic from "../../../Assets/mic.webp";
import whitemic from "../../../Assets/whitemic.webp";
import rode from "../../../Assets/rode.webp";
import ipad from "../../../Assets/ipad.webp";
import macbook from "../../../Assets/macbook.webp";
import asus from "../../../Assets/asus.webp";
import intel from "../../../Assets/intel.webp";
import nvidia from "../../../Assets/nvidia.webp";
import adata from "../../../Assets/adata.webp";
import msi from "../../../Assets/msi.webp";
import table from "../../../Assets/table.webp";
import chair from "../../../Assets/chair.webp";
import rest from "../../../Assets/rest.webp";

function MyGearData() {
  const equipmentData = [
    {
      photo: camera,
      title: "Canon EOS 80D",
      desc: "I bought it back in 2018 for my US trip and have been using it since then. If you want to buy this in 2022, go for the EOS 90D (Same camera - Updated version). This is an amazing camera given that its still working exactly like it was working when I bought it. I use it for my YouTube tutorial videos as well. I use a USB cable, EOS utility software to make videos.",
    },
    {
      photo: iphone,
      title: "iPhone 13 Pro Max 256GB",
      desc: "I have always dreamt of buying an iPhone for myself. Back in 2021, I finally bought my first ever iPhone and its been a great phone so far. I use it for my YouTube videos and also for my Instagram stories. I also use it to take photos for my YouTube thumbnails.",
    },
    {
      photo: webcam,
      title: "Lenovo 300 FHD Webcam",
      desc: "Sometimes I also use this Webcam to record videos. This has a great camera, and the microphone on this device is also good. This is a good webcam at its price.",
    },
    {
      photo: mic,
      title: "Blue Yeti",
      desc: "This is my main microphone, and I got this back in 2021. Before this, I used Snowball ICE to record the videos, but I wanted to upgrade, so I bought this microphone. I have used it for all of my videos since then. This microphone has a crisp audio quality and good noise suppression.",
    },
    {
      photo: whitemic,
      title: "Blue Snowball ICE",
      desc: "This is my secondary microphone and I got this back in 2016 when I started YouTube. I used it for all of my videos back then. This has a crisp audio quality and good noise suppression. I still use this Microphone.",
    },
    {
      photo: boyamic,
      title: "Boya BY-M1",
      desc: "This is another mic I use for my videos. I got this when I was a little tight on my budget. This microphone is what I can say is value for money. This has good audio quality and its easy to setup. But soon I stopped using it and upgraded due to its limited battery backup.",
    },
    {
      photo: rode,
      title: "Rode SmartLav+",
      desc: "It is a good lavalier condenser microphone, but it is a bit costly. I bought it as an upgrade to my Boya BY-M1. It is easy to setup, and sometimes I use it with my iPhone to record audio.",
    },
    {
      photo: ipad,
      title: "Apple iPad Pro with Apple M1 chip 2021",
      desc: "I got this back on 2021. I bought it for taking notes and making videos. It is a good product altogether but I haven't used it much.",
    },
  ];
  const pcSpecs = [
    {
      photo: macbook,
      title: "2021 Apple MacBook Pro (14-inch)",
      desc: "I purchased this in 2022 and this has been my primary laptop since then. Being a content creator this is one of my best decisions and, long story short, this laptop has never disappointed me.",
    },
    {
      photo: asus,
      title: "ASUS ROG Strix G17 (2021)",
      desc: "I purchased this in 2021 and this has been my primary laptop since then. I upgraded its RAM to 64GB (being a content creator) and, long story short, this laptop has never disappointed me.",
    },
    {
      photo: intel,
      title: "Intel Core i9-10900K",
      desc: "This is my main CPU. This beast is packed with 10 cores and 20 threads. It is a great CPU for those who want to do 4K encoding and video editing. I bought it in 2021 and it is still going strong.",
    },
    {
      photo: nvidia,
      title: "Nvidia GeForce RTX 3070 8GB",
      desc: "This is my GPU. This beast is packed with 8GB of VRAM. I literally had to wait for 2 months to get this GPU back in 2021, when the GPU crisis was at its peak. I have no complaints regarding this GPU. It delivers what it promises.",
    },
    {
      photo: adata,
      title: "XPG Adata GAMMIX D30 64GB (4x16GB)",
      desc: "This is my RAM. At first I had only 32GB of RAM, but then I upgraded it to 64GB. This RAM runs at 3600MHz, and it is a great RAM in terms of performance.",
    },
    {
      photo: msi,
      title: "MSI MPG Z490 Gaming Plus Motherboard",
      desc: "This is my motherboard. I bought it for my Beast PC build and it is still going strong. This motherboard has lots of USB ports and, on top of that, it has 2 M.2 NVME slots, which is great for those who want to install 2 SSDs.",
    },
  ];
  const ergonomics = [
    {
      photo: table,
      title: "Monarch Elevate Height Adjustable Table",
      desc: "When you are working for hours, it is recommended that you use a standing desk. I love switching between standing and sitting positions while I am working for long hours on my projects. Sitting for a long time is not good for your knees, for your spine, and for your overall posture too.",
    },
    {
      photo: chair,
      title: "Green Soul Beast Racing Edition Ergonomic Gaming Chair",
      desc: "Buying this was one of the best decisions. It feels amazing and very comfortable. If you can afford it you can go for it!",
    },
    {
      photo: rest,
      title: "Green soul stool",
      desc: "This helps when I code for long hours. This is for resting your legs while you are sitting on a chair for hours. It really helps when my leg sprains.",
    },
  ];
  return (
    <section className="w-full h-auto font-poppin bg-dark-grey text-dark-purple">
      <div className="flex items-center justify-center pt-8 text-2xl gap-4">
        <BsTools />
        <h1 className=" text-4xl font-semibold inline-block ">My GEAR</h1>
        <BsTools />
      </div>
      <div className="text-gray-400 text-center pt-4 px-2">
        <p>
          This is what I use to create my content. I am not sponsored by any of
          these companies.
        </p>
      </div>
      <div className="md:text-4xl text-2xl   text-white font-medium pt-12 md:pl-16 pl-8 ">
        <h1>🎥 Recording Equipments</h1>
      </div>
      <div className="md:flex justify-center flex-wrap w-full ">
        {equipmentData.map((item, index) => (
          <MyGearCard
            key={index}
            title={item.title}
            desc={item.desc}
            photo={item.photo}
          />
        ))}
      </div>
      <div className="md:text-4xl text-2xl  text-white font-medium pt-12 md:pl-16 ">
        <h1>🖥 PC Specs</h1>
      </div>
      <div className="md:flex justify-center flex-wrap w-full ">
        {pcSpecs.map((item, index) => (
          <MyGearCard
            key={index}
            title={item.title}
            desc={item.desc}
            photo={item.photo}
          />
        ))}
      </div>
      <div className="text-4xl text-white  font-medium pt-12 sm:pl-16 ">
        <h1>🛋Ergonomics</h1>
      </div>
      <div className="md:flex justify-center flex-wrap w-full pb-6 ">
        {ergonomics.map((item, index) => (
          <MyGearCard
            key={index}
            title={item.title}
            desc={item.desc}
            photo={item.photo}
          />
        ))}
      </div>
    </section>
  );
}

export default MyGearData;
