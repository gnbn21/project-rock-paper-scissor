"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Home() {
  const [pick, setPick] = useState<string>();
  const [bot, setBot] = useState<string>();
  return (
    <div className="bg-purple-700 ">
      <div className="flex items-center justify-center">
        <div className="text-white min-h-screen text-6xl">
          rock paper scissor game
        </div>
        <div>Your choice: {pick || "None yet"}</div>
        <Button onClick={() => setPick("rock")}>rock</Button>
        <Button onClick={() => setPick("paper")}>paper</Button>
        <Button onClick={() => setPick("scissor")}>scissor</Button>
        <div>BOT:{}</div>
      </div>
    </div>
  );
}
