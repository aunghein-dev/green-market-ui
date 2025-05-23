export default function Button(props) {
  const border = props.border ? "border-solid border-[1px]" : "";
  const padding = props.img ? "" : "px-6 py-1.5";
  const withPadding = props.withPadding ? "px-2 py-2" : "";

  return (
    <button
      className={`text-[0.8rem] font-[300] ${border} 
                  rounded-[6px] ${padding} ${withPadding}
                  flex items-center gap-1.5`}
    >
      {props.img}
      {props.name}
    </button>
  );
}
