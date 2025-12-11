export default function Button({
  handle,
  text,
  bgColor = "--color-primary",
  textColor = "--color-text-accent",
}: {
  handle: () => void | Promise<void>;
  text: string;
  bgColor: string;
  textColor: string;
}) {
  return (
    <div className="flex flex-col justify-center items-center mt-10">
      <button
        onClick={handle}
        className={`text-xl w-fit px-6 py-2 bg-(${bgColor}) text-(${textColor}) shadow-xs rounded-full hover:cursor-pointer hover:scale-105 transition-all`}>
        {text}
      </button>
    </div>
  );
}
