import classes from './CurrencyCurrent.module.css';
import { useState, useEffect } from 'react';
import { getUniqueListBy, getUniqueArrBy } from '../../functions/functions';

export const CurrencyCurrent = ({
  shortCountriesCodes,
  dataKeysAndValues,
  randomId
}) => {
  const [rates, setRates] = useState([]);
  const [flags, setFlags] = useState([]);

  useEffect(() => {
    setFlags(getUniqueArrBy(shortCountriesCodes));
    setRates(getUniqueListBy(dataKeysAndValues, 'name'));
  }, []);

  console.log(rates);
  console.log(flags);

  return (
    <>
      <div className={classes.CurrencyCurrent}>
        <div
          style={{
            background: '#fff',
            width: '100%',
            height: '1px',
            marginBottom: '1rem'
          }}
        />
        <p style={{ margin: '3rem 0', fontSize: '1.2em', fontWeight: '600' }}>
          Latest data on exchange rates
        </p>
        <div className={classes.Rates}>
          {rates.map((item, idx) => {
            const countryKey = flags[idx];
            const shortCurrency = item.value.toFixed(2);
            return (
              <>
                <div className={classes.Rate} key={randomId}>
                  <img
                    src={`https://www.countryflags.io/${countryKey}/shiny/32.png`}
                    alt={countryKey}
                    key={randomId}
                  />
                  <p className={classes.Country} key={randomId}>
                    {shortCurrency}
                  </p>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};
