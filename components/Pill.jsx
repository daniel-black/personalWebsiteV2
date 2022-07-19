export default function Pill(props) {
  const { name, bg, text } = props;
  let classes = `${bg} ${text} text-sm sm:text-base h-6 sm:h-7 font-mono font-bold select-none shadow-md hover:shadow-lg duration-100 hover:brightness-110 text-center py-0.5 px-4 max-w-fit rounded-full`;
  return (
    <span className={classes}>{name}</span>
  );
}