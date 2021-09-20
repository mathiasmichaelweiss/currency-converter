import classes from './Header.module.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export const Header = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [isBurger, setIsBurger] = useState(false);
  const [burgerStyles, setBurgerStyles] = useState({ right: '-50rem' });
  console.log(burgerStyles.right);

  window.addEventListener('resize', () => {
    setScreenWidth(window.innerWidth);
  });

  useEffect(() => {
    if (screenWidth <= 768) setIsBurger(true);
    if (screenWidth >= 769) setIsBurger(false);
    /* console.log(screenWidth);
    console.log(isBurger); */
  }, [screenWidth]);

  return (
    <>
      <header className={classes.Header}>
        <h1>Currency Converter</h1>
        {!isBurger ? (
          <nav>
            <ul>
              <Link to="/currency-converter">
                <li>converter</li>
              </Link>
              <Link to="/current-currency">
                <li>current currency</li>
              </Link>
            </ul>
          </nav>
        ) : (
          <div className={classes.Burger}>
            <div
              className={classes.BurgerWrapper}
              onClick={() => setBurgerStyles({ right: '-10.2rem' })}
            >
              <div className={classes.BurgerIcon}></div>
            </div>

            <nav style={burgerStyles}>
              <div
                className={classes.CloseWrapper}
                onClick={() => setBurgerStyles({ right: '-50rem' })}
              >
                <div className={classes.Close}></div>
              </div>
              <ul>
                <Link to="/currency-converter">
                  <li>converter</li>
                </Link>
                <Link to="/current-currency">
                  <li>current currency</li>
                </Link>
              </ul>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};
