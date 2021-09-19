import './App.css';
import { Header } from './components/Header/Header';
import { CurrencyConverter } from './scenes/CurrencyConverter/CurrencyConverter';
import { CurrencyCurrent } from './scenes/CurrencyCurrent/CurrencyCurrent';
import { Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { dataFilter } from './functions/functions';

function App() {
  const [offlineRates, setOfflineRates] = useState({
    AED: 4.306972,
    AFN: 100.315547,
    ALL: 121.304908,
    AMD: 568.624537,
    ANG: 2.105993,
    AOA: 723.536149,
    ARS: 115.248899,
    AUD: 1.613804,
    AWG: 2.110662,
    AZN: 1.998058,
    BAM: 1.947501,
    BBD: 2.368968,
    BDT: 100.06165,
    BGN: 1.952209,
    BHD: 0.441876,
    BIF: 2339.317033,
    BMD: 1.17259,
    BND: 1.579146,
    BOB: 8.101352,
    BRL: 6.201951,
    BSD: 1.173282,
    BTC: 0.000024483958,
    BTN: 86.265554,
    BWP: 13.036246,
    BYN: 2.915929,
    BYR: 22982.763833,
    BZD: 2.364985,
    CAD: 1.497285,
    CDF: 2339.907924,
    CHF: 1.093114,
    CLF: 0.033338,
    CLP: 919.909038,
    CNY: 7.582206,
    COP: 4487.501897,
    CRC: 732.905463,
    CUC: 1.17259,
    CUP: 31.073635,
    CVE: 110.663228,
    CZK: 25.387985,
    DJF: 208.393155,
    DKK: 7.435774,
    DOP: 66.521491,
    DZD: 160.180347,
    EGP: 18.429,
    ERN: 17.594659,
    ETB: 55.000381,
    EUR: 1,
    FJD: 2.451172,
    FKP: 0.847173,
    GBP: 0.853382,
    GEL: 3.640939,
    GGP: 0.847173,
    GHS: 7.017998,
    GIP: 0.847173,
    GMD: 60.435745,
    GNF: 11462.067583,
    GTQ: 9.075187,
    GYD: 245.4602,
    HKD: 9.125319,
    HNL: 28.406039,
    HRK: 7.511734,
    HTG: 113.806266,
    HUF: 352.797605,
    IDR: 16725.061455,
    ILS: 3.759734,
    IMP: 0.847173,
    INR: 86.414066,
    IQD: 1712.567683,
    IRR: 49471.572153,
    ISK: 151.416998,
    JEP: 0.847172,
    JMD: 174.405093,
    JOD: 0.831413,
    JPY: 128.901692,
    KES: 129.223877,
    KGS: 99.408901,
    KHR: 4795.893476,
    KMF: 492.464795,
    KPW: 1055.331009,
    KRW: 1386.025271,
    KWD: 0.352891,
    KYD: 0.977718,
    KZT: 499.045649,
    LAK: 11262.727277,
    LBP: 1791.999987,
    LKR: 234.065832,
    LRD: 201.041002,
    LSL: 17.319602,
    LTL: 3.462354,
    LVL: 0.709288,
    LYD: 5.288827,
    MAD: 10.539285,
    MDL: 20.67876,
    MGA: 4576.036848,
    MKD: 61.352603,
    MMK: 2141.205255,
    MNT: 3329.261811,
    MOP: 9.407067,
    MRO: 418.614425,
    MUR: 50.073982,
    MVR: 18.062273,
    MWK: 943.935348,
    MXN: 23.473463,
    MYR: 4.891464,
    MZN: 74.835136,
    NAD: 17.319597,
    NGN: 482.790919,
    NIO: 41.279535,
    NOK: 10.211153,
    NPR: 138.024687,
    NZD: 1.66517,
    OMR: 0.451459,
    PAB: 1.173282,
    PEN: 4.817045,
    PGK: 4.139683,
    PHP: 58.694,
    PKR: 197.11672,
    PLN: 4.591908,
    PYG: 8096.074188,
    QAR: 4.269445,
    RON: 4.94603,
    RSD: 117.079268,
    RUB: 85.458011,
    RWF: 1169.658516,
    SAR: 4.396973,
    SBD: 9.441198,
    SCR: 15.007,
    SDG: 517.112584,
    SEK: 10.183065,
    SGD: 1.580816,
    SHP: 1.61513,
    SLL: 12253.565808,
    SOS: 685.965542,
    SRD: 24.991455,
    STD: 24270.245374,
    SVC: 10.266093,
    SYP: 1474.45947,
    SZL: 17.319588,
    THB: 39.036112,
    TJS: 13.3042,
    TMT: 4.104065,
    TND: 3.283843,
    TOP: 2.6378,
    TRY: 10.135912,
    TTD: 7.965532,
    TWD: 32.594528,
    TZS: 2720.793434,
    UAH: 31.290774,
    UGX: 4141.586994,
    USD: 1.17259,
    UYU: 50.056913,
    UZS: 12539.677761,
    VEF: 250735178586.38953,
    VND: 26701.632991,
    VUV: 130.898252,
    WST: 3.002204,
    XAF: 653.163508,
    XAG: 0.05234,
    XAU: 0.000668,
    XCD: 3.168984,
    XDR: 0.824474,
    XOF: 653.133015,
    XPF: 119.842918,
    YER: 294.144626,
    ZAR: 17.291944,
    ZMK: 10554.721244,
    ZMW: 19.212132
  });

  const [shortCountriesCodes, setShortCountriesCodes] = useState([]);
  const [dataKeysAndValues, setDataKeysAndValues] = useState([]);

  const randomId = () => Math.random().toString(36).slice(2);

  useEffect(() => {
    setShortCountriesCodes(dataFilter(offlineRates, 'shortCoutries'));
    setDataKeysAndValues(dataFilter(offlineRates, 'getKeysAndValues'));
  }, []);

  const AppStyles = {
    width: '80%',
    height: '100%',
    margin: '0 auto',
    padding: '0rem 3rem 0rem'
  };

  return (
    <div className="OfflineApp" style={AppStyles}>
      <Header />
      <Route
        path="/"
        exact
        render={props => (
          <CurrencyConverter dataKeysAndValues={dataKeysAndValues} />
        )}
        idGenerator={randomId()}
        key={randomId()}
      />
      <Route
        path="/currency-converter"
        render={props => (
          <CurrencyConverter dataKeysAndValues={dataKeysAndValues} />
        )}
        idGenerator={randomId()}
        key={randomId()}
      />
      <Route
        path="/current-currency"
        render={props => (
          <CurrencyCurrent
            shortCountriesCodes={shortCountriesCodes}
            dataKeysAndValues={dataKeysAndValues}
            idGenerator={randomId()}
            key={randomId()}
          />
        )}
      />
    </div>
  );
}

export default App;
