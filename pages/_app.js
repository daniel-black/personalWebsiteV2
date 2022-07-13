import Footer from '../components/Footer';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <div className='bg-amber-100 min-w-screen min-h-screen text-slate-600 flex flex-col items-center py-4 md:py-8 px-5 space-y-4 text-lg sm:text-xl font-jsans'>
      <Component {...pageProps} />
      <Footer />
    </div>    

  );
}

export default MyApp;
