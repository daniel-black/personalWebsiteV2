import Head from 'next/head'
import { Picture } from '../components/Picture'
import { SocialLinks } from '../components/SocialLinks'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Dan Black</title>
        <meta name="description" content="My personal website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='bg-amber-100 min-w-screen min-h-screen text-slate-600 flex flex-col items-center py-4 md:py-8 px-5 space-y-4 text-lg sm:text-xl'>
        <main className='flex-grow'>
          <Picture />
          <h1 className="text-2xl sm:text-3xl font-bold">Hi! I'm Dan&nbsp;Black 👋</h1>
          <p>
            I'm a full-stack software engineer at <a className="text-violet-800 hover:underline underline-offset-8 decoration-wavy font-semibold" href="https://www.chrobinson.com/en-us/" target="_blank" rel="noreferrer">CH&nbsp;Robinson</a> 
            working on the <a className="text-violet-800 hover:underline underline-offset-8 decoration-wavy font-semibold" href="https://www.freightquote.com/" target="_blank" rel="noreferrer">Freightquote</a> application.
          </p>
          <p>A couple quick things I enjoy:</p>
          <ul>
            <li>📚 Reading</li>
            <li>🏋️‍♂️ Exercising</li>
            <li>☀️ Sunshine</li>
            <li>💻 Learning new things</li>
          </ul>
          <p>Currently, I'm living in Minneapolis but the cold and I do not get along particularly well so I've set my sights on warmer climates.</p>
          <p>Feel free to shoot me an email anytime!</p>
          <a href="mailto:drblack651@gmail.com" className="text-violet-800 hover:underline underline-offset-8 decoration-wavy font-semibold">📫&nbsp;drblack651@gmail.com</a>
        </main>
        <SocialLinks />
      </div>
      
    </div>
  )
}
