import Image from "next/image";

export const metadata = {
  title: "Neurolana",
  description: "An AI trading platform for Solana",
}

export default function Home() {
  return (
    <div className="mx-auto container bg-black border-1 gap-5 min-h-screen flex flex-col items-center justify-center bg-opacity-75 bg-black">
      <Image priority  src="/next.png" width="300" height="50" alt="logo" className="p-2 invert" />
      <div className="typewriter">
      <p className="typewriter font-[family-name:var(--font-geist-mono)] text-center xs:text-xs md:text-lg">Let AI handle Solana trading for you.</p>
      </div>
      
      <div className="grid grid-cols-2 gap-4 m-5">
        <a href="https://t.me/neurolanabot" className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-cyan-500 text-background hover:bg-[#ccc] dark:hover:bg-[#383838] text-sm sm:text-base h-12 sm:h-12 px-4 sm:px-5">
          <Image alt="telegram logo" src="/telegram.png" width="20" height="20" className="mx-auto" />
          &nbsp; Use Neurolanabot</a>
        <a href="/litepaper.pdf" className="rounded-full border-2 border-solid border-white dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#1a1a1a] dark:hover:bg-[#f2f2f2] hover:border-transparent text-sm sm:text-base h-12 sm:h-12 px-4 sm:px-5 sm:min-w-44">

        ℹ️&nbsp;Learn More</a>

      </div>
      <div className="grid grid-cols-3 flex flex-col gap-4 mx-auto">
        <div></div>
        <code className="text-sm text-center">Neurolana is a Telegram bot that uses an AI model to automatically buy and sell memecoins based on a risk score to prevent rug pulls and judges it's profitability. Sit back and relax as Neurolana catches moonshots for you. </code>
      </div>

    </div>
  );
}
