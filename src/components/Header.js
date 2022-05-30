import UseDarkMode from "./components/UseDarkMode";

const Header = () => {
  const [toggleTheme]=UseDarkMode();
  return (
    <>
      <header className="header">
        <div>
          <h1>Where in the world?</h1>
        </div>
        <div  >

          <i className="fas fa-moon" onClick={toggleTheme} ></i>
        </div>
      </header>
    </>
  );
};

export default Header;
