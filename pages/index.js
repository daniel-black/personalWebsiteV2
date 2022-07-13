import Head from 'next/head';
import Link from 'next/link';
import Picture from '../components/Picture';

export default function Home() {
  return (
    <div className='flex-grow'>

      <Head>
        <title>Dan Black</title>
        <meta name="description" content="My personal website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='max-w-xl leading-relaxed space-y-4'>
        <Picture />
        <h1 className="text-2xl sm:text-3xl font-bold font-jslab">Hi! I&apos;m Dan&nbsp;Black 👋</h1>
        <p>
          I&apos;m a full-stack software engineer at <a className="link-style" href="https://www.chrobinson.com/en-us/" target="_blank" rel="noreferrer">
            CH&nbsp;Robinson
          </a> working on the <a className="link-style" href="https://www.freightquote.com/" target="_blank" rel="noreferrer">
            Freightquote</a> application.
        </p>
        <p>A couple quick things I enjoy:</p>
        <ul>
          <li className='hover:cursor-pointer'>
            <Link href='/books'>
              <span className='link-style'>📚 Reading</span>
            </Link>
          </li>
          <li>🏋️‍♂️ Exercising</li>
          <li>☀️ Sunshine</li>
          <li>💻 Learning new things</li>
          <li className='hover:cursor-pointer'>
            <Link href='/projects'>
              <span className='link-style'>⚙️ Working on projects</span>
            </Link>
          </li>
        </ul>
        <p>Currently, I&apos;m living in Minneapolis but the cold and I do not get along particularly well so I&apos;ve set my sights on warmer climates.</p>
        <p>Feel free to shoot me an email anytime!</p>
        <a href="mailto:drblack651@gmail.com" className="link-style">📫&nbsp;drblack651@gmail.com</a>
      </main>

    </div>
  );
}
