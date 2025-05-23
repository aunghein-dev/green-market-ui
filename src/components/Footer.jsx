export default function Footer() {
  return (
    <footer className="w-full bg-[#222C1D] text-white py-6 ">
      <div className="max-w-[900px] mx-auto px-4 flex flex-wrap gap-12 relative">
        <div className="max-w-[330px] min-h-[200px] flex flex-col items-start text-[var(--color-primary-txt)]">
          <div className="flex items-center text-md font-[700] ">
            <img className="logo" src="/plantlogo.png" alt="app logo" />
            <p className="ml-1 mt-1.5">Green.</p>
          </div>
          <p className="text-[0.8rem] mt-4">
            Sustainable choices bring harmony to life. Eco-conscious living
            nurtures the planet and supports future generations with every step
            we take.
          </p>
          <ul className="flex gap-4 text-sm mt-14">
            <li>FB</li>
            <li>TW</li>
            <li>LI</li>
          </ul>
        </div>
        <div className="text-[var(--color-primary-txt)]">
          <h1 className="text-[0.9rem]">Quick Link’s</h1>
          <ul className="text-[0.75rem] flex flex-col gap-2.5 mt-6">
            <li>Home</li>
            <li>Plant Type's</li>
            <li>More</li>
            <li>Privacy</li>
          </ul>
        </div>
        <div className="flex flex-col text-[var(--color-primary-txt)]">
          <h1 className="text-[0.9rem]">For Every Update’s</h1>
          <div className="text-[0.7rem] relative mb-16 mt-6">
            <input
              className="border border-gray-300 
                         rounded-s-md px-6 py-[0.5rem] 
                         focus:outline-none w-[250px]"
              type="email"
              placeholder="Enter Email"
            />
            <button
              className="absolute top-0 -right-20
                               bg-white text-black px-4 py-[0.56rem] rounded-e-md"
            >
              SUBSCRIBE
            </button>
          </div>
          <p className="text-[0.8rem] mt-4">Planto © All right reserved</p>
        </div>
      </div>
    </footer>
  );
}
