export default function Book(props) {
  const { href, title, blurb, emoji } = props;
  return (
    <li>
      <div className="flex items-center">
        <span className="hidden sm:inline-flex items-center justify-center h-9 w-9 bg-amber-200 rounded-full">{emoji}</span>
        <a className="link-style text-2xl sm:ml-2" target="_blank" rel="noreferrer" href={href}>
          {title}
        </a>
      </div>
      <p className="ml-1 sm:ml-4 pl-4 sm:pl-7 my-1 border-l-2 sm:border-l-4 border-amber-200/75">{blurb}</p>
    </li>
  );
}