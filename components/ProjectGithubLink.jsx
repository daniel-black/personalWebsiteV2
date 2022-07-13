import Image from "next/image";

export default function ProjectGithubLink(props) {
  const { href } = props;

  return (
    <a 
      href={href} 
      target='_blank' 
      rel="noreferrer" 
      className='h-6 relative flex items-end text-sm'>
      <Image 
        src='/icons/logo-github.svg'
        alt='Github Icon'
        height='24'
        width='24'
        className="opacity-60"
      />
      <span className="ml-1">
        See the code &#187;
      </span>
    </a>
  );
}