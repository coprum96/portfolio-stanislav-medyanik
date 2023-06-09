import "./style.css";
import CV from "../assets/CV.en.pdf";

const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <h1 className="header__title">
          <strong>
            Hi, my name is <em>Stanislav</em>
          </strong>
          <br />a full-stack developer
        </h1>
        <div className="header__text">
          <p>with passion for coding</p>
        </div>
        <a href={CV} target="_blank" rel="noopener noreferrer" className="btn">
          Download CV
        </a>
      </div>
    </header>
  );
};

export default Header;
