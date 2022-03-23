import React from "react";

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-ribbon"></div>
      <div className="header-container">
        <div className="header-text">Welcome to the app</div>
        <div className="right-side">
          <div>
            <a
              href="https://github.com/encepsuryana/npmjs-clone"
              target="_blank"
              rel="noreferrer"
            >
              Code - Github
            </a>
          </div>
          <div>
            <a
              href="https://www.linkedin.com/in/encep-suryana-b60080113/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
