export default function Nav() {
  const tabNames = ["Home", "Plant Type's", "More", "Contact"];

  const tabElements = () => {
    return tabNames.map((name) => {
      return <li key={name}>{name}</li>;
    });
  };
  return (
    <nav className="nav ">
      <div className="flex items-center text-md font-[700]">
        <img className="logo" src="/plantlogo.png" alt="app logo" />
        <p className="ml-1 mt-1.5">Green.</p>
      </div>
      <div className="flex items-center text-sm font-[300]">
        <ul className="flex gap-10">{tabElements()}</ul>
      </div>

      <div className="flex items-center gap-8">
        <img className="icon" src="/search.svg" alt="search icon" />
        <img className="icon" src="/bag.svg" alt="cart icon" />
        <img className="icon" src="/menu.svg" alt="menu icon" />
      </div>
    </nav>
  );
}
