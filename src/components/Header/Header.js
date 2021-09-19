import classes from './Header.module.css';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <>
      <header className={classes.Header}>
        <h1>Currency Converter</h1>
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
      </header>
    </>
  );
};
