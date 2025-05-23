export default function BgWrapper({ children }) {
  return (
    <div className="relative h-[1000px]">
      {/* Background image layer */}
      <div className="absolute inset-0 bg-[url('/wrapperbg.png')] bg-cover bg-no-repeat bg-center z-0" />

      {/* Overlays (all z-10 to stay above bg but below content) */}
      <div className="absolute top-0 left-0 w-full h-[100px] bg-gradient-to-b from-[#171F12] to-transparent z-10" />
      <div className="absolute top-0 left-0 w-[100px] h-full bg-gradient-to-r from-[#171F12] to-transparent z-10" />
      <div className="absolute top-0 right-0 w-[100px] h-full bg-gradient-to-l from-[#171F12] to-transparent z-10" />
      <div className="absolute bottom-0 left-0 w-full h-[100px] bg-gradient-to-t from-[#171F12] to-transparent z-10" />

      {/* Content layer (z-20 to ensure visibility) */}
      <div className="relative z-20">{children}</div>
    </div>
  );
}
