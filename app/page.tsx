'use client';

import { Survey } from "@/components/ui/survey";
import 'app/globals.css';


export default function Home() {
  return (
    <body className="bg-[#e5e5e5]">
      <h1 className="text-5xl font-bold text-center m-16 text-[#14213d] underline decoration-[#fca311]">ElderBytes</h1>
      <Survey></Survey>
    </body>
  )
}
