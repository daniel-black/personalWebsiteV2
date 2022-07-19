import Image from "next/image";
import BackButton from "../components/BackButton";
import Pill from "../components/Pill";
import ProjectGithubLink from "../components/ProjectGithubLink";

export default function Projects() {
  return (
    <div className="space-y-4 leading-relaxed max-w-2xl  flex-grow">
      <BackButton />
      
      <h1 className="text-2xl sm:text-3xl font-jslab">
        Projects&nbsp;⚡
      </h1>

      <section className="bg-amber-200 p-3 rounded-xl flex shadow-md">
        <div className="pr-3 border-r border-amber-300 flex flex-col">
          <h2 className="mb-3 bg-slate-900 text-yellow-300 rounded-lg px-2">🚧 UNDER CONSTRUCTION <span className="inline-block animate-hammer">🔨</span></h2>
          <a href="https://hacker-news-client-coral.vercel.app/" className="bg-amber-300 p-2 rounded-lg shadow-inner" target="_blank" rel="noreferrer">
            
            <h2 className="text-3xl hover:text-slate-800 rounded-lg max-w-min duration-75">HN&nbsp;Reader</h2>
          </a>
          <p className="flex-grow">A Hacker News Client.</p>
          <ProjectGithubLink href='https://github.com/daniel-black/hacker-news-client' />
        </div>
        <div className="pl-3 flex flex-col space-y-3">
          <Pill name='NextJS' bg='bg-slate-200' text='text-slate-400' />
          <Pill name='TypeScript' bg='bg-rose-100' text='text-rose-300' />
          <Pill name='Tailwind' bg='bg-sky-500' text='text-sky-800' />
        </div>
      </section>

      <section className="bg-amber-200 p-3 rounded-xl flex shadow-md">
        <div className="pr-3 border-r border-amber-300 flex flex-col">
          <a href="https://routescout-1ac17.firebaseapp.com/" target="_blank" rel="noreferrer">
            <Image 
              src='/routescout.png'
              alt="RouteScout logo"
              height={67}
              width={246}
              layout="intrinsic"
              className="rounded-xl hover:opacity-75 duration-75"
            />
            <h2 className="text-3xl hover:text-slate-800 rounded-lg max-w-min duration-75">RouteScout</h2>
          </a>
          <p className="flex-grow">A road-trip planning app.</p>
          <ProjectGithubLink href='https://github.com/csci-5117-S22/project-2-goodreads2' />
        </div>
        <div className="pl-3 flex flex-col space-y-3">
          <Pill name='Google&nbsp;Maps&nbsp;APIs' bg='bg-[#e8887f]' text='text-[#dd4b3e]' />
          <Pill name='Vue.js' bg='bg-[#42d392]' text='text-[#32805c]' />
          <Pill name='Firebase' bg='bg-[#FFCB2B]' text='text-[#a76f37]' />
          <Pill name='Firestore' bg='bg-[#8ab4f8]' text='text-[#1967d2]' />
          <Pill name='Tailwind' bg='bg-sky-500' text='text-sky-800' />
        </div>
      </section>

      <section className="bg-amber-200 p-3 rounded-xl flex shadow-md">
        <div className="pr-3 border-r border-amber-300 flex flex-col">
          <a href="https://somuchtodo-532ec.web.app/" target="_blank" rel="noreferrer">
            <Image 
              src='/somuchTodo.png'
              alt="SomuchTodo logo"
              height={67}
              width={246}
              layout="intrinsic"
              className="rounded-xl hover:opacity-75 duration-75"
            />
            <h2 className="text-3xl hover:text-slate-800 rounded-lg max-w-min duration-75">SomuchTodo</h2>
          </a>
          <p className="flex-grow">A basic todo app.</p>
          <ProjectGithubLink href='https://github.com/daniel-black/blac0352-homework2' />
        </div>
        <div className="pl-3  flex flex-col space-y-3">
          <Pill name='Vue.js' bg='bg-[#42d392]' text='text-[#32805c]' />
          <Pill name='Firebase' bg='bg-[#FFCB2B]' text='text-[#a76f37]' />
          <Pill name='Firestore' bg='bg-[#8ab4f8]' text='text-[#1967d2]' />
          <Pill name='Tailwind' bg='bg-sky-500' text='text-sky-800' />
        </div>
      </section>
    </div>
  );
}