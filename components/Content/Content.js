"use client";
import Image from "next/image";
import { useActionState, useState } from "react";

export default function Content() {
  const [isOpen, setIsOpen] = useState(false);

  const audio = new Audio("/media/song.mp3");

  function handleClick() {
    setIsOpen(true);
    audio.play();
  }

  return (
    <>
      {!isOpen && (
        <button className="button" onClick={handleClick}>
          Vajuta siia, et näha meie uut veebilehte 💐
        </button>
      )}
      {isOpen && (
        <div className="content">
          <Image
            className="img"
            src={"/media/img.jpeg"}
            width={720}
            height={720}
            alt="jubin"
          />
        </div>
      )}
    </>
  );
}
