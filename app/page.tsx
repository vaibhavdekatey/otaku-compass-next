"use client";
import { fetchRequest } from "@/fetchRequest";
import Image from "next/image";

export default function Home() {
  const response = async () => {
    const getRequest = await fetchRequest("/anime/20/full");
    console.log(getRequest.data);
  };

  return (
    <>
      <div>
        <p className="text-white">Fetch data</p>
        <button onClick={response}>Fetch</button>
      </div>
    </>
  );
}
