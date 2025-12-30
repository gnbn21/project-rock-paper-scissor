"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Home() {
  const choices = ["rock", "paper", "scissor"];
  const [pick, setPick] = useState<string>();
  const [bot, setBot] = useState<string>();
  const [result, setResult] = useState<string>();
  const [score, setScore] = useState<number>(0);
  const [botscore, setBotscore] = useState<number>(0);
  const play = (playerPick: string) => {
    const botPick = choices[Math.floor(Math.random() * choices.length)];
    setPick(playerPick);
    setBot(botPick);

    if (playerPick === botPick) setResult("Draw 🤭");
    else if (
      (playerPick === "rock" && botPick === "scissor") ||
      (playerPick === "paper" && botPick === "rock") ||
      (playerPick === "scissor" && botPick === "paper")
    ) {
      setResult("You Win 🎉");
      setScore((prev) => prev + 1);
    } else {
      setResult("You Lose 😢");
      setBotscore((prev) => prev + 1);
    }
  };

  return (
    <div className="bg-purple-700 min-h-screen flex items-center justify-center text-white">
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-bold">Rock Paper Scissor</h1>

        <div>Your choice: {pick || "None yet"}</div>

        <div className="space-x-4">
          <Button onClick={() => play("rock")}>rock</Button>
          <Button onClick={() => play("paper")}>paper</Button>
          <Button onClick={() => play("scissor")}>scissor</Button>
        </div>

        <div>BOT: {bot || "Waiting..."}</div>
        <div className="text-3xl font-bold">{result}</div>
        <div>scores</div>
        <div className="flex justify-center gap-2">
          player
          <div className="text-3xl font-bold">{score || 0}</div>
          bot
          <div className="text-3xl font-bold">{botscore || 0}</div>
        </div>
      </div>
    </div>
  );
}
