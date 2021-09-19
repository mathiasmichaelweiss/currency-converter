import classes from './CurrencyConverter.module.css';
import { useState, useEffect } from 'react';
import {
  getUniqueListBy,
  currencyCount,
  getValueFromObject
} from '../../functions/functions';

export const CurrencyConverter = ({ dataKeysAndValues, randomId }) => {
  const [rates, setRates] = useState([]);
  const [resultValue, setResultValue] = useState('');
  const [fromThis, setFromThis] = useState(1.17259);
  const [toThis, setToThis] = useState(85.458011);

  useEffect(() => {
    setRates(getUniqueListBy(dataKeysAndValues, 'name'));
  }, []);

  useEffect(() => {
    if (rates.length > 0) {
      const conversionalRate = rates[145].value / rates[118].value;
      setResultValue((100 / conversionalRate).toFixed(2));
    }
  }, [rates]);

  const converterStyles = {
    paragraph: {
      fontWeight: '600',
      fontSize: '1.2em',
      width: '150px',
      textAlign: 'center'
    }
  };
  const x = 0;
  return (
    <>
      <div className={classes.CurrencyConverter}>
        <div className={classes.CCWrapper}>
          <p style={converterStyles.paragraph}>Converte</p>
          <div className={classes.InputBlock}>
            <input
              type="number"
              placeholder={'100'}
              id="converterInput"
              onChange={e => currencyCount(e, fromThis, toThis, setResultValue)}
            />
            <select
              name=""
              id=""
              onChange={e =>
                getValueFromObject(rates, e.target.value, setFromThis)
              }
            >
              <option value="USD">USD</option>
              {rates.map((item, idx) => {
                return (
                  <>
                    <option value={item.name} key={randomId}>
                      {item.name}
                    </option>
                  </>
                );
              })}
            </select>
          </div>
          <div className={classes.InputBlock}>
            <input
              type="number"
              placeholder="6700 ₽"
              value={resultValue}
              id="converterInput"
              disabled
            />
            <select
              name=""
              id=""
              onChange={e =>
                getValueFromObject(rates, e.target.value, setToThis)
              }
            >
              ><option value="RUB">RUB</option>
              {rates.map((item, idx) => {
                return (
                  <>
                    <option value={item.name} key={randomId}>
                      {item.name}
                    </option>
                  </>
                );
              })}
            </select>
          </div>
        </div>
      </div>
    </>
  );
};
