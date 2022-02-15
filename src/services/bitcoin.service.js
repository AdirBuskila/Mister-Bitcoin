import axios from 'axios'
import {storageService } from './async-storage.service'
const API_KEY = 'a0fa7416-857e-4f9b-8c30-52642e4e8b26'


export const bitcoinService = {
    getCurrentPrice,
    getTradeVol,
    getAvgBlockSize,
    getMarketPrice,
    getGraphData,
    getCoinData,
    getChangesData,
}


async function getCurrentPrice() {
    try {
        // const { data } = await axios.get(`https://pro-api.coinmarketcap.com/v2/cryptocurrency/quotes/latest?id=1`, {
        //     headers: {
        //         'X-CMC_PRO_API_KEY': API_KEY,
        //     },
        // });
        // const price = financial((data.data['1'].quote.USD.price), 3);
        const price = 42400
        return price
    } catch (err) {
        console.log('cannot load coins', err);
        throw err
    }
}

async function getTradeVol() {
    try {
        const { data } = await axios.get('https://api.blockchain.info/charts/trade-volume?timespan=5months&format=json&cors=true')
        return data.values
    } catch (err) {
        console.log('cannot get trade vol', err);
    }
}
async function getAvgBlockSize() {
    try {
        const { data } = await axios.get('https://api.blockchain.info/charts/avg-block-size?timespan=5months&format=json&cors=true')
        return data.values
    } catch (err) {
        console.log('cannot get avg block size', err);
    }
}
async function getMarketPrice() {
    try {
        const { data } = await axios.get('https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true')
        return data.values
    } catch (err) {
        console.log('cannot get avg block size', err);
    }
}
async function getGraphData() {
    try {
        const vol = await getTradeVol()
        const avg = await getAvgBlockSize()
        const price = await getMarketPrice()
        const data = [{ data: vol, label: 'Vol', backgroundColor: '#f76e1161', borderColor: '#FF9F45' }, { data: avg, label: 'Avg Block', backgroundColor: '#00b4d861', borderColor: '#90E0EF' }, { data: price, label: 'Market Price', backgroundColor: '#b667f166', borderColor: '#9C51E0' }]
        return data
    } catch (err) {
        console.log('cannot get graphData', err);
    }
}
async function getCoinData() {
    // try {
    //     const storageData = await storageService.get('coins')
    //     if (storageData) {
    //         console.log('from storage');
    //         return storageData.data
    //     } else {
    //         const { data } = await axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', {
    //             headers: {
    //                 'X-CMC_PRO_API_KEY': API_KEY,
    //             },
    //         });
    //         await storageService.post('coins', data)
    //         return data.data
    //     }
    // } catch (err) {
    //     console.log('cannot load coins', err);
    //     throw err
    // }
    let numOfCoins = coinData.data.slice(0,50)

    return numOfCoins
}

function getChangesData(changesObj) {
  const oneHour = financial(changesObj.percent_change_1h, 2)
  const oneHourClass = (oneHour >= 0) ? 'green' : 'red'
  const oneDay = financial(changesObj.percent_change_24h, 2)
  const oneDayClass = (oneDay >= 0) ? 'green' : 'red'
  const oneWeek = financial(changesObj.percent_change_7d, 2)
  const oneWeekClass = (oneWeek >= 0) ? 'green' : 'red'
  const changes = {
      oneHour,
      oneHourClass,
      oneDay,
      oneDayClass,
      oneWeek,
      oneWeekClass
  }
  return changes
}


function financial(x, f) {
    return Number.parseFloat(x).toFixed(f);
}

const coinData = {
    "status": {
      "timestamp": "2022-02-11T20:02:13.015Z",
      "error_code": 0,
      "error_message": null,
      "elapsed": 27,
      "credit_count": 1,
      "notice": null,
      "total_count": 9362
    },
    "data": [
      {
        "id": 1,
        "name": "Bitcoin",
        "symbol": "BTC",
        "slug": "bitcoin",
        "num_market_pairs": 9142,
        "date_added": "2013-04-28T00:00:00.000Z",
        "tags": [
          "mineable",
          "pow",
          "sha-256",
          "store-of-value",
          "state-channel",
          "coinbase-ventures-portfolio",
          "three-arrows-capital-portfolio",
          "polychain-capital-portfolio",
          "binance-labs-portfolio",
          "blockchain-capital-portfolio",
          "boostvc-portfolio",
          "cms-holdings-portfolio",
          "dcg-portfolio",
          "dragonfly-capital-portfolio",
          "electric-capital-portfolio",
          "fabric-ventures-portfolio",
          "framework-ventures-portfolio",
          "galaxy-digital-portfolio",
          "huobi-capital-portfolio",
          "alameda-research-portfolio",
          "a16z-portfolio",
          "1confirmation-portfolio",
          "winklevoss-capital-portfolio",
          "usv-portfolio",
          "placeholder-ventures-portfolio",
          "pantera-capital-portfolio",
          "multicoin-capital-portfolio",
          "paradigm-portfolio"
        ],
        "max_supply": 21000000,
        "circulating_supply": 18954993,
        "total_supply": 18954993,
        "platform": null,
        "cmc_rank": 1,
        "self_reported_circulating_supply": null,
        "self_reported_market_cap": null,
        "last_updated": "2022-02-11T20:00:00.000Z",
        "quote": {
          "USD": {
            "price": 42763.43718168556,
            "volume_24h": 26522667905.229916,
            "volume_change_24h": -13.4202,
            "percent_change_1h": -0.01927337,
            "percent_change_24h": -3.81916757,
            "percent_change_7d": 5.10799462,
            "percent_change_30d": -2.18906429,
            "percent_change_60d": -8.55879255,
            "percent_change_90d": -33.05481239,
            "market_cap": 810580652434.7894,
            "market_cap_dominance": 42.0401,
            "fully_diluted_market_cap": 898032180815.4,
            "last_updated": "2022-02-11T20:00:00.000Z"
          }
        }
      },
      {
        "id": 1027,
        "name": "Ethereum",
        "symbol": "ETH",
        "slug": "ethereum",
        "num_market_pairs": 5494,
        "date_added": "2015-08-07T00:00:00.000Z",
        "tags": [
          "mineable",
          "pow",
          "smart-contracts",
          "ethereum-ecosystem",
          "binance-smart-chain",
          "coinbase-ventures-portfolio",
          "three-arrows-capital-portfolio",
          "polychain-capital-portfolio",
          "binance-labs-portfolio",
          "blockchain-capital-portfolio",
          "boostvc-portfolio",
          "cms-holdings-portfolio",
          "dcg-portfolio",
          "dragonfly-capital-portfolio",
          "electric-capital-portfolio",
          "fabric-ventures-portfolio",
          "framework-ventures-portfolio",
          "hashkey-capital-portfolio",
          "kenetic-capital-portfolio",
          "huobi-capital-portfolio",
          "alameda-research-portfolio",
          "a16z-portfolio",
          "1confirmation-portfolio",
          "winklevoss-capital-portfolio",
          "usv-portfolio",
          "placeholder-ventures-portfolio",
          "pantera-capital-portfolio",
          "multicoin-capital-portfolio",
          "paradigm-portfolio"
        ],
        "max_supply": null,
        "circulating_supply": 119539277.249,
        "total_supply": 119539277.249,
        "platform": null,
        "cmc_rank": 2,
        "self_reported_circulating_supply": null,
        "self_reported_market_cap": null,
        "last_updated": "2022-02-11T20:00:00.000Z",
        "quote": {
          "USD": {
            "price": 2999.3629659419125,
            "volume_24h": 15315260980.890928,
            "volume_change_24h": -13.6785,
            "percent_change_1h": -0.55521682,
            "percent_change_24h": -4.12891924,
            "percent_change_7d": 1.51948501,
            "percent_change_30d": -11.27972132,
            "percent_change_60d": -20.41151157,
            "percent_change_90d": -35.32172555,
            "market_cap": 358541681156.1132,
            "market_cap_dominance": 18.5955,
            "fully_diluted_market_cap": 358541681156.11,
            "last_updated": "2022-02-11T20:00:00.000Z"
          }
        }
      },
      {
        "id": 825,
        "name": "Tether",
        "symbol": "USDT",
        "slug": "tether",
        "num_market_pairs": 27717,
        "date_added": "2015-02-25T00:00:00.000Z",
        "tags": [
          "payments",
          "stablecoin",
          "asset-backed-stablecoin",
          "binance-smart-chain",
          "avalanche-ecosystem",
          "solana-ecosystem",
          "moonriver-ecosystem"
        ],
        "max_supply": null,
        "circulating_supply": 78385451172.84462,
        "total_supply": 81074697052.59753,
        "platform": {
          "id": 1027,
          "name": "Ethereum",
          "symbol": "ETH",
          "slug": "ethereum",
          "token_address": "0xdac17f958d2ee523a2206206994597c13d831ec7"
        },
        "cmc_rank": 3,
        "self_reported_circulating_supply": null,
        "self_reported_market_cap": null,
        "last_updated": "2022-02-11T20:00:00.000Z",
        "quote": {
          "USD": {
            "price": 1.0006894026943867,
            "volume_24h": 63644997101.84196,
            "volume_change_24h": -15.2458,
            "percent_change_1h": -0.00414803,
            "percent_change_24h": 0.01433504,
            "percent_change_7d": 0.02885079,
            "percent_change_30d": 0.02827147,
            "percent_change_60d": 0.03597005,
            "percent_change_90d": 0.18081377,
            "market_cap": 78439490314.0839,
            "market_cap_dominance": 4.0721,
            "fully_diluted_market_cap": 81130590167.19,
            "last_updated": "2022-02-11T20:00:00.000Z"
          }
        }
      },
      {
        "id": 1839,
        "name": "BNB",
        "symbol": "BNB",
        "slug": "bnb",
        "num_market_pairs": 682,
        "date_added": "2017-07-25T00:00:00.000Z",
        "tags": [
          "marketplace",
          "centralized-exchange",
          "payments",
          "smart-contracts",
          "binance-smart-chain",
          "alameda-research-portfolio",
          "multicoin-capital-portfolio",
          "moonriver-ecosystem"
        ],
        "max_supply": 165116760,
        "circulating_supply": 165116760.89,
        "total_supply": 165116760.89,
        "platform": null,
        "cmc_rank": 4,
        "self_reported_circulating_supply": null,
        "self_reported_market_cap": null,
        "last_updated": "2022-02-11T20:00:00.000Z",
        "quote": {
          "USD": {
            "price": 405.26824563418904,
            "volume_24h": 1614744263.224636,
            "volume_change_24h": -20.8798,
            "percent_change_1h": -0.68525809,
            "percent_change_24h": -3.72712461,
            "percent_change_7d": 2.35616263,
            "percent_change_30d": -16.81270044,
            "percent_change_60d": -22.62252184,
            "percent_change_90d": -37.22157296,
            "market_cap": 66916580010.69017,
            "market_cap_dominance": 3.4739,
            "fully_diluted_market_cap": 66916579650,
            "last_updated": "2022-02-11T20:00:00.000Z"
          }
        }
      },
      {
        "id": 3408,
        "name": "USD Coin",
        "symbol": "USDC",
        "slug": "usd-coin",
        "num_market_pairs": 2990,
        "date_added": "2018-10-08T00:00:00.000Z",
        "tags": [
          "medium-of-exchange",
          "stablecoin",
          "asset-backed-stablecoin",
          "binance-smart-chain",
          "fantom-ecosystem",
          "moonriver-ecosystem"
        ],
        "max_supply": null,
        "circulating_supply": 52170297970.77659,
        "total_supply": 52170297970.77659,
        "platform": {
          "id": 1027,
          "name": "Ethereum",
          "symbol": "ETH",
          "slug": "ethereum",
          "token_address": "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48"
        },
        "cmc_rank": 5,
        "self_reported_circulating_supply": null,
        "self_reported_market_cap": null,
        "last_updated": "2022-02-11T20:00:00.000Z",
        "quote": {
          "USD": {
            "price": 0.9997772890774264,
            "volume_24h": 3663317910.4446993,
            "volume_change_24h": -6.881,
            "percent_change_1h": 0.06093058,
            "percent_change_24h": 0.01584598,
            "percent_change_7d": 0.02061038,
            "percent_change_30d": -0.07199137,
            "percent_change_60d": -0.01796377,
            "percent_change_90d": 0.07445578,
            "market_cap": 52158679075.58457,
            "market_cap_dominance": 2.7078,
            "fully_diluted_market_cap": 52158679075.58,
            "last_updated": "2022-02-11T20:00:00.000Z"
          }
        }
      },
      {
        "id": 52,
        "name": "XRP",
        "symbol": "XRP",
        "slug": "xrp",
        "num_market_pairs": 678,
        "date_added": "2013-08-04T00:00:00.000Z",
        "tags": [
          "medium-of-exchange",
          "enterprise-solutions",
          "binance-chain",
          "arrington-xrp-capital-portfolio",
          "galaxy-digital-portfolio",
          "a16z-portfolio",
          "pantera-capital-portfolio"
        ],
        "max_supply": 100000000000,
        "circulating_supply": 47832461678,
        "total_supply": 99989769444,
        "platform": null,
        "cmc_rank": 6,
        "self_reported_circulating_supply": null,
        "self_reported_market_cap": null,
        "last_updated": "2022-02-11T20:00:00.000Z",
        "quote": {
          "USD": {
            "price": 0.7922596423191038,
            "volume_24h": 3169321585.7164783,
            "volume_change_24h": -12.9702,
            "percent_change_1h": -0.31997313,
            "percent_change_24h": -6.84466965,
            "percent_change_7d": 23.83420944,
            "percent_change_30d": -0.72053172,
            "percent_change_60d": 2.02811081,
            "percent_change_90d": -33.20156649,
            "market_cap": 37895728980.254524,
            "market_cap_dominance": 1.9654,
            "fully_diluted_market_cap": 79225964231.91,
            "last_updated": "2022-02-11T20:00:00.000Z"
          }
        }
      },
      {
        "id": 2010,
        "name": "Cardano",
        "symbol": "ADA",
        "slug": "cardano",
        "num_market_pairs": 363,
        "date_added": "2017-10-01T00:00:00.000Z",
        "tags": [
          "mineable",
          "dpos",
          "pos",
          "platform",
          "research",
          "smart-contracts",
          "staking",
          "binance-smart-chain",
          "cardano-ecosystem",
          "cardano"
        ],
        "max_supply": 45000000000,
        "circulating_supply": 33592646021.81,
        "total_supply": 34085668605.164,
        "platform": null,
        "cmc_rank": 7,
        "self_reported_circulating_supply": null,
        "self_reported_market_cap": null,
        "last_updated": "2022-02-11T20:00:00.000Z",
        "quote": {
          "USD": {
            "price": 1.1172373480199365,
            "volume_24h": 1336262173.9913988,
            "volume_change_24h": -24.0011,
            "percent_change_1h": -0.93626256,
            "percent_change_24h": -4.61021449,
            "percent_change_7d": 1.36675227,
            "percent_change_30d": -13.26880179,
            "percent_change_60d": -8.56681486,
            "percent_change_90d": -45.27945722,
            "market_cap": 37530958754.37947,
            "market_cap_dominance": 1.9465,
            "fully_diluted_market_cap": 50275680660.9,
            "last_updated": "2022-02-11T20:00:00.000Z"
          }
        }
      },
      {
        "id": 5426,
        "name": "Solana",
        "symbol": "SOL",
        "slug": "solana",
        "num_market_pairs": 249,
        "date_added": "2020-04-10T00:00:00.000Z",
        "tags": [
          "pos",
          "platform",
          "solana-ecosystem",
          "cms-holdings-portfolio",
          "kenetic-capital-portfolio",
          "alameda-research-portfolio",
          "multicoin-capital-portfolio",
          "okex-blockdream-ventures-portfolio"
        ],
        "max_supply": null,
        "circulating_supply": 317630182.39740705,
        "total_supply": 511616946.142289,
        "platform": null,
        "cmc_rank": 8,
        "self_reported_circulating_supply": null,
        "self_reported_market_cap": null,
        "last_updated": "2022-02-11T20:00:00.000Z",
        "quote": {
          "USD": {
            "price": 99.94475281157649,
            "volume_24h": 2038480858.3283923,
            "volume_change_24h": -19.6714,
            "percent_change_1h": -1.50077252,
            "percent_change_24h": -8.42497296,
            "percent_change_7d": -9.4478991,
            "percent_change_30d": -34.60049501,
            "percent_change_60d": -34.77384052,
            "percent_change_90d": -57.82042729,
            "market_cap": 31745470065.204803,
            "market_cap_dominance": 1.6465,
            "fully_diluted_market_cap": 51133429216.4,
            "last_updated": "2022-02-11T20:00:00.000Z"
          }
        }
      },
      {
        "id": 4172,
        "name": "Terra",
        "symbol": "LUNA",
        "slug": "terra-luna",
        "num_market_pairs": 148,
        "date_added": "2019-07-26T00:00:00.000Z",
        "tags": [
          "cosmos-ecosystem",
          "store-of-value",
          "defi",
          "payments",
          "coinbase-ventures-portfolio",
          "binance-labs-portfolio",
          "solana-ecosystem",
          "arrington-xrp-capital-portfolio",
          "hashkey-capital-portfolio",
          "kenetic-capital-portfolio",
          "huobi-capital-portfolio",
          "pantera-capital-portfolio",
          "terra-ecosystem"
        ],
        "max_supply": null,
        "circulating_supply": 400492883.18880427,
        "total_supply": 817577480.880211,
        "platform": null,
        "cmc_rank": 9,
        "self_reported_circulating_supply": null,
        "self_reported_market_cap": null,
        "last_updated": "2022-02-11T20:00:00.000Z",
        "quote": {
          "USD": {
            "price": 53.26230789460448,
            "volume_24h": 1641132390.657901,
            "volume_change_24h": -13.4052,
            "percent_change_1h": -0.54419316,
            "percent_change_24h": -1.06941925,
            "percent_change_7d": 2.51988273,
            "percent_change_30d": -32.11448451,
            "percent_change_60d": -1.12562952,
            "percent_change_90d": 2.51041009,
            "market_cap": 21331175253.99996,
            "market_cap_dominance": 1.1074,
            "fully_diluted_market_cap": 43546063514.34,
            "last_updated": "2022-02-11T20:00:00.000Z"
          }
        }
      },
      {
        "id": 5805,
        "name": "Avalanche",
        "symbol": "AVAX",
        "slug": "avalanche",
        "num_market_pairs": 191,
        "date_added": "2020-07-13T00:00:00.000Z",
        "tags": [
          "defi",
          "smart-contracts",
          "binance-smart-chain",
          "polychain-capital-portfolio",
          "avalanche-ecosystem",
          "cms-holdings-portfolio",
          "dragonfly-capital-portfolio",
          "moonriver-ecosystem"
        ],
        "max_supply": null,
        "circulating_supply": 245280885.64570704,
        "total_supply": 395891289.9134107,
        "platform": null,
        "cmc_rank": 10,
        "self_reported_circulating_supply": null,
        "self_reported_market_cap": null,
        "last_updated": "2022-02-11T20:00:00.000Z",
        "quote": {
          "USD": {
            "price": 85.03231340185107,
            "volume_24h": 1310602572.1242101,
            "volume_change_24h": -13.0327,
            "percent_change_1h": -1.61898055,
            "percent_change_24h": -6.6721997,
            "percent_change_7d": 11.00378873,
            "percent_change_30d": -10.02238209,
            "percent_change_60d": 9.2057463,
            "percent_change_90d": -11.49921413,
            "market_cap": 20856801139.709354,
            "market_cap_dominance": 1.0817,
            "fully_diluted_market_cap": 33663552236.98,
            "last_updated": "2022-02-11T20:00:00.000Z"
          }
        }
      },
      {
        "id": 74,
        "name": "Dogecoin",
        "symbol": "DOGE",
        "slug": "dogecoin",
        "num_market_pairs": 445,
        "date_added": "2013-12-15T00:00:00.000Z",
        "tags": [
          "mineable",
          "pow",
          "scrypt",
          "medium-of-exchange",
          "memes",
          "payments",
          "binance-smart-chain",
          "doggone-doggerel"
        ],
        "max_supply": null,
        "circulating_supply": 132670764299.89409,
        "total_supply": 132670764299.89409,
        "platform": null,
        "cmc_rank": 11,
        "self_reported_circulating_supply": null,
        "self_reported_market_cap": null,
        "last_updated": "2022-02-11T20:00:00.000Z",
        "quote": {
          "USD": {
            "price": 0.14779156378904693,
            "volume_24h": 690381448.5254505,
            "volume_change_24h": -35.3355,
            "percent_change_1h": -0.88973125,
            "percent_change_24h": -3.97402794,
            "percent_change_7d": 2.92862232,
            "percent_change_30d": -7.71581506,
            "percent_change_60d": -4.77212527,
            "percent_change_90d": -42.90476376,
            "market_cap": 19607619724.969406,
            "market_cap_dominance": 1.0179,
            "fully_diluted_market_cap": 19607619724.97,
            "last_updated": "2022-02-11T20:00:00.000Z"
          }
        }
      },
      {
        "id": 6636,
        "name": "Polkadot",
        "symbol": "DOT",
        "slug": "polkadot-new",
        "num_market_pairs": 306,
        "date_added": "2020-08-19T00:00:00.000Z",
        "tags": [
          "substrate",
          "polkadot",
          "binance-chain",
          "binance-smart-chain",
          "polkadot-ecosystem",
          "three-arrows-capital-portfolio",
          "polychain-capital-portfolio",
          "arrington-xrp-capital-portfolio",
          "blockchain-capital-portfolio",
          "boostvc-portfolio",
          "cms-holdings-portfolio",
          "coinfund-portfolio",
          "fabric-ventures-portfolio",
          "fenbushi-capital-portfolio",
          "hashkey-capital-portfolio",
          "kenetic-capital-portfolio",
          "1confirmation-portfolio",
          "placeholder-ventures-portfolio",
          "pantera-capital-portfolio",
          "exnetwork-capital-portfolio",
          "web3",
          "spartan-group"
        ],
        "max_supply": null,
        "circulating_supply": 987579314.957085,
        "total_supply": 1103303471.382273,
        "platform": null,
        "cmc_rank": 12,
        "self_reported_circulating_supply": 904869778,
        "self_reported_market_cap": 17720930355.01081,
        "last_updated": "2022-02-11T20:00:00.000Z",
        "quote": {
          "USD": {
            "price": 19.583956482864004,
            "volume_24h": 1283393342.102948,
            "volume_change_24h": -12.9339,
            "percent_change_1h": -0.61664127,
            "percent_change_24h": -6.59299193,
            "percent_change_7d": -3.21221926,
            "percent_change_30d": -28.47392854,
            "percent_change_60d": -25.18382507,
            "percent_change_90d": -58.12368447,
            "market_cap": 19340710327.496197,
            "market_cap_dominance": 1.0041,
            "fully_diluted_market_cap": 21607047170.94,
            "last_updated": "2022-02-11T20:00:00.000Z"
          }
        }
      },
      {
        "id": 4687,
        "name": "Binance USD",
        "symbol": "BUSD",
        "slug": "binance-usd",
        "num_market_pairs": 2938,
        "date_added": "2019-09-20T00:00:00.000Z",
        "tags": [
          "stablecoin",
          "asset-backed-stablecoin",
          "binance-chain",
          "binance-smart-chain",
          "harmony-ecosystem",
          "moonriver-ecosystem"
        ],
        "max_supply": null,
        "circulating_supply": 17796042726.169254,
        "total_supply": 17796042726.169254,
        "platform": {
          "id": 1839,
          "name": "Binance Chain (BEP2)",
          "symbol": "BNB",
          "slug": "bnb",
          "token_address": "BUSD-BD1"
        },
        "cmc_rank": 13,
        "self_reported_circulating_supply": null,
        "self_reported_market_cap": null,
        "last_updated": "2022-02-11T20:00:00.000Z",
        "quote": {
          "USD": {
            "price": 1.000384153508796,
            "volume_24h": 5475703051.358434,
            "volume_change_24h": -18.2025,
            "percent_change_1h": 0.11952714,
            "percent_change_24h": 0.04245079,
            "percent_change_7d": -0.0062088,
            "percent_change_30d": 0.09028131,
            "percent_change_60d": 0.05472608,
            "percent_change_90d": 0.20717311,
            "market_cap": 17802879138.425198,
            "market_cap_dominance": 0.9242,
            "fully_diluted_market_cap": 17802879138.43,
            "last_updated": "2022-02-11T20:00:00.000Z"
          }
        }
      },
      {
        "id": 5994,
        "name": "Shiba Inu",
        "symbol": "SHIB",
        "slug": "shiba-inu",
        "num_market_pairs": 306,
        "date_added": "2020-08-01T00:00:00.000Z",
        "tags": [
          "memes",
          "doggone-doggerel"
        ],
        "max_supply": null,
        "circulating_supply": 549063278876301.94,
        "total_supply": 589735030408322.8,
        "platform": {
          "id": 1027,
          "name": "Ethereum",
          "symbol": "ETH",
          "slug": "ethereum",
          "token_address": "0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce"
        },
        "cmc_rank": 14,
        "self_reported_circulating_supply": null,
        "self_reported_market_cap": null,
        "last_updated": "2022-02-11T20:00:00.000Z",
        "quote": {
          "USD": {
            "price": 0.00003053280386583874,
            "volume_24h": 1844967559.7421591,
            "volume_change_24h": -28.2665,
            "percent_change_1h": -0.70109994,
            "percent_change_24h": -2.70343416,
            "percent_change_7d": 38.91667182,
            "percent_change_30d": -3.78265519,
            "percent_change_60d": -6.41668696,
            "percent_change_90d": -40.75802529,
            "market_cap": 16764441403.864447,
            "market_cap_dominance": 0.8703,
            "fully_diluted_market_cap": 18006264016.27,
            "last_updated": "2022-02-11T20:00:00.000Z"
          }
        }
      },
      {
        "id": 3890,
        "name": "Polygon",
        "symbol": "MATIC",
        "slug": "polygon",
        "num_market_pairs": 320,
        "date_added": "2019-04-28T00:00:00.000Z",
        "tags": [
          "platform",
          "enterprise-solutions",
          "scaling",
          "state-channel",
          "binance-smart-chain",
          "coinbase-ventures-portfolio",
          "binance-launchpad",
          "binance-labs-portfolio",
          "polygon-ecosystem",
          "moonriver-ecosystem"
        ],
        "max_supply": 10000000000,
        "circulating_supply": 7477274364.27,
        "total_supply": 10000000000,
        "platform": null,
        "cmc_rank": 15,
        "self_reported_circulating_supply": null,
        "self_reported_market_cap": null,
        "last_updated": "2022-02-11T20:00:00.000Z",
        "quote": {
          "USD": {
            "price": 1.7842587232732712,
            "volume_24h": 1562868668.686732,
            "volume_change_24h": -22.2267,
            "percent_change_1h": -1.11884523,
            "percent_change_24h": -6.72010172,
            "percent_change_7d": 6.80570906,
            "percent_change_30d": -23.81981224,
            "percent_change_60d": -1.44422511,
            "percent_change_90d": 2.7666137,
            "market_cap": 13341392010.756351,
            "market_cap_dominance": 0.6919,
            "fully_diluted_market_cap": 17842587232.73,
            "last_updated": "2022-02-11T20:00:00.000Z"
          }
        }
      },
      {
        "id": 3635,
        "name": "Crypto.com Coin",
        "symbol": "CRO",
        "slug": "crypto-com-coin",
        "num_market_pairs": 127,
        "date_added": "2018-12-14T00:00:00.000Z",
        "tags": [
          "medium-of-exchange",
          "cosmos-ecosystem",
          "centralized-exchange",
          "mobile",
          "payments"
        ],
        "max_supply": 30263013692,
        "circulating_supply": 25263013692,
        "total_supply": 30263013692,
        "platform": {
          "id": 1027,
          "name": "Ethereum",
          "symbol": "ETH",
          "slug": "ethereum",
          "token_address": "0xa0b73e1ff0b80914ab6fe0444e65848c4c34450b"
        },
        "cmc_rank": 16,
        "self_reported_circulating_supply": null,
        "self_reported_market_cap": null,
        "last_updated": "2022-02-11T20:00:00.000Z",
        "quote": {
          "USD": {
            "price": 0.49345249951911957,
            "volume_24h": 197658958.90689328,
            "volume_change_24h": -25.7007,
            "percent_change_1h": -0.96914619,
            "percent_change_24h": -5.86065328,
            "percent_change_7d": 14.59393696,
            "percent_change_30d": 2.4348237,
            "percent_change_60d": -7.99216668,
            "percent_change_90d": 27.59431551,
            "market_cap": 12466097251.70314,
            "market_cap_dominance": 0.6465,
            "fully_diluted_market_cap": 14933359749.3,
            "last_updated": "2022-02-11T20:00:00.000Z"
          }
        }
      },
      {
        "id": 7129,
        "name": "TerraUSD",
        "symbol": "UST",
        "slug": "terrausd",
        "num_market_pairs": 282,
        "date_added": "2020-09-21T00:00:00.000Z",
        "tags": [
          "cosmos-ecosystem",
          "stablecoin",
          "binance-smart-chain",
          "terra-ecosystem"
        ],
        "max_supply": null,
        "circulating_supply": 11307393335.560984,
        "total_supply": 11307393335.560984,
        "platform": null,
        "cmc_rank": 17,
        "self_reported_circulating_supply": null,
        "self_reported_market_cap": null,
        "last_updated": "2022-02-11T20:00:00.000Z",
        "quote": {
          "USD": {
            "price": 1.002285241115841,
            "volume_24h": 309720023.1798476,
            "volume_change_24h": 1.1552,
            "percent_change_1h": 0.29674398,
            "percent_change_24h": 0.40167748,
            "percent_change_7d": 0.1780265,
            "percent_change_30d": 0.41781805,
            "percent_change_60d": 0.12562036,
            "percent_change_90d": -0.37056527,
            "market_cap": 11333233455.724394,
            "market_cap_dominance": 0.5884,
            "fully_diluted_market_cap": 11333233455.72,
            "last_updated": "2022-02-11T20:00:00.000Z"
          }
        }
      },
      {
        "id": 3717,
        "name": "Wrapped Bitcoin",
        "symbol": "WBTC",
        "slug": "wrapped-bitcoin",
        "num_market_pairs": 333,
        "date_added": "2019-01-30T00:00:00.000Z",
        "tags": [
          "medium-of-exchange",
          "defi",
          "wrapped-tokens",
          "fantom-ecosystem",
          "moonriver-ecosystem"
        ],
        "max_supply": null,
        "circulating_supply": 261914.35047772,
        "total_supply": 261914.35047772,
        "platform": {
          "id": 1027,
          "name": "Ethereum",
          "symbol": "ETH",
          "slug": "ethereum",
          "token_address": "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599"
        },
        "cmc_rank": 18,
        "self_reported_circulating_supply": null,
        "self_reported_market_cap": null,
        "last_updated": "2022-02-11T20:00:00.000Z",
        "quote": {
          "USD": {
            "price": 42683.9419847766,
            "volume_24h": 177796172.67595616,
            "volume_change_24h": -23.31,
            "percent_change_1h": -0.13456373,
            "percent_change_24h": -4.05180226,
            "percent_change_7d": 5.30379862,
            "percent_change_30d": -2.41346511,
            "percent_change_60d": -7.8424575,
            "percent_change_90d": -34.43566507,
            "market_cap": 11179536940.771444,
            "market_cap_dominance": 0.5804,
            "fully_diluted_market_cap": 11179536940.77,
            "last_updated": "2022-02-11T20:00:00.000Z"
          }
        }
      },
      {
        "id": 4943,
        "name": "Dai",
        "symbol": "DAI",
        "slug": "multi-collateral-dai",
        "num_market_pairs": 760,
        "date_added": "2019-11-22T00:00:00.000Z",
        "tags": [
          "defi",
          "stablecoin",
          "ethereum-ecosystem",
          "binance-smart-chain",
          "avalanche-ecosystem",
          "polygon-ecosystem",
          "fantom-ecosystem",
          "harmony-ecosystem",
          "moonriver-ecosystem"
        ],
        "max_supply": null,
        "circulating_supply": 10244258478.539845,
        "total_supply": 10244258478.539845,
        "platform": {
          "id": 1027,
          "name": "Ethereum",
          "symbol": "ETH",
          "slug": "ethereum",
          "token_address": "0x6b175474e89094c44da98b954eedeac495271d0f"
        },
        "cmc_rank": 19,
        "self_reported_circulating_supply": null,
        "self_reported_market_cap": null,
        "last_updated": "2022-02-11T20:00:00.000Z",
        "quote": {
          "USD": {
            "price": 0.9998657313105019,
            "volume_24h": 420723417.18868774,
            "volume_change_24h": -3.9244,
            "percent_change_1h": 0.04096041,
            "percent_change_24h": 0.05920479,
            "percent_change_7d": -0.02955636,
            "percent_change_30d": -0.0789811,
            "percent_change_60d": 0.547855,
            "percent_change_90d": 0.07512089,
            "market_cap": 10242882995.379051,
            "market_cap_dominance": 0.5318,
            "fully_diluted_market_cap": 10242882995.38,
            "last_updated": "2022-02-11T20:00:00.000Z"
          }
        }
      },
      {
        "id": 2,
        "name": "Litecoin",
        "symbol": "LTC",
        "slug": "litecoin",
        "num_market_pairs": 732,
        "date_added": "2013-04-28T00:00:00.000Z",
        "tags": [
          "mineable",
          "pow",
          "scrypt",
          "medium-of-exchange",
          "binance-chain",
          "binance-smart-chain"
        ],
        "max_supply": 84000000,
        "circulating_supply": 69617431.9948378,
        "total_supply": 84000000,
        "platform": null,
        "cmc_rank": 20,
        "self_reported_circulating_supply": null,
        "self_reported_market_cap": null,
        "last_updated": "2022-02-11T20:00:00.000Z",
        "quote": {
          "USD": {
            "price": 129.62177944588845,
            "volume_24h": 1135586815.260926,
            "volume_change_24h": -8.3519,
            "percent_change_1h": -1.17656342,
            "percent_change_24h": -4.96132932,
            "percent_change_7d": 9.61937682,
            "percent_change_30d": -7.83875116,
            "percent_change_60d": -11.23994241,
            "percent_change_90d": -49.2142404,
            "market_cap": 9023935415.624004,
            "market_cap_dominance": 0.468,
            "fully_diluted_market_cap": 10888229473.45,
            "last_updated": "2022-02-11T20:00:00.000Z"
          }
        }
      },
      {
        "id": 3794,
        "name": "Cosmos",
        "symbol": "ATOM",
        "slug": "cosmos",
        "num_market_pairs": 235,
        "date_added": "2019-03-14T00:00:00.000Z",
        "tags": [
          "platform",
          "cosmos-ecosystem",
          "content-creation",
          "interoperability",
          "binance-chain",
          "binance-smart-chain",
          "polychain-capital-portfolio",
          "dragonfly-capital-portfolio",
          "hashkey-capital-portfolio",
          "1confirmation-portfolio",
          "paradigm-portfolio",
          "exnetwork-capital-portfolio"
        ],
        "max_supply": null,
        "circulating_supply": 286370297,
        "total_supply": 0,
        "platform": null,
        "cmc_rank": 21,
        "self_reported_circulating_supply": null,
        "self_reported_market_cap": null,
        "last_updated": "2022-02-11T20:00:00.000Z",
        "quote": {
          "USD": {
            "price": 27.82838105382702,
            "volume_24h": 649333264.4591507,
            "volume_change_24h": -24.3833,
            "percent_change_1h": -1.73962101,
            "percent_change_24h": -5.78424819,
            "percent_change_7d": -10.85511566,
            "percent_change_30d": -32.60429094,
            "percent_change_60d": 28.84755305,
            "percent_change_90d": -14.86018168,
            "market_cap": 7969221747.413616,
            "market_cap_dominance": 0.4133,
            "fully_diluted_market_cap": 0,
            "last_updated": "2022-02-11T20:00:00.000Z"
          }
        }
      },
      {
        "id": 1975,
        "name": "Chainlink",
        "symbol": "LINK",
        "slug": "chainlink",
        "num_market_pairs": 588,
        "date_added": "2017-09-20T00:00:00.000Z",
        "tags": [
          "platform",
          "defi",
          "oracles",
          "smart-contracts",
          "substrate",
          "polkadot",
          "binance-smart-chain",
          "polkadot-ecosystem",
          "avalanche-ecosystem",
          "solana-ecosystem",
          "framework-ventures-portfolio",
          "polygon-ecosystem",
          "fantom-ecosystem",
          "cardano-ecosystem",
          "web3",
          "near-protocol-ecosystem",
          "cardano"
        ],
        "max_supply": 1000000000,
        "circulating_supply": 467009549.5205637,
        "total_supply": 1000000000,
        "platform": {
          "id": 1027,
          "name": "Ethereum",
          "symbol": "ETH",
          "slug": "ethereum",
          "token_address": "0x514910771af9ca656af840dff83e8264ecf986ca"
        },
        "cmc_rank": 22,
        "self_reported_circulating_supply": null,
        "self_reported_market_cap": null,
        "last_updated": "2022-02-11T20:00:00.000Z",
        "quote": {
          "USD": {
            "price": 16.885956324693243,
            "volume_24h": 712146707.0811893,
            "volume_change_24h": -18.254,
            "percent_change_1h": -1.25150368,
            "percent_change_24h": -4.91168869,
            "percent_change_7d": -1.15391913,
            "percent_change_30d": -36.75210372,
            "percent_change_60d": -5.57324302,
            "percent_change_90d": -50.0415841,
            "market_cap": 7885902856.418905,
            "market_cap_dominance": 0.409,
            "fully_diluted_market_cap": 16885956324.69,
            "last_updated": "2022-02-11T20:00:00.000Z"
          }
        }
      },
      {
        "id": 6535,
        "name": "NEAR Protocol",
        "symbol": "NEAR",
        "slug": "near-protocol",
        "num_market_pairs": 100,
        "date_added": "2020-08-11T00:00:00.000Z",
        "tags": [
          "platform",
          "staking",
          "binance-smart-chain",
          "coinbase-ventures-portfolio",
          "arrington-xrp-capital-portfolio",
          "coinfund-portfolio",
          "electric-capital-portfolio",
          "fabric-ventures-portfolio",
          "kenetic-capital-portfolio",
          "near-protocol-ecosystem"
        ],
        "max_supply": 1000000000,
        "circulating_supply": 631625551,
        "total_supply": 1000000000,
        "platform": null,
        "cmc_rank": 23,
        "self_reported_circulating_supply": null,
        "self_reported_market_cap": null,
        "last_updated": "2022-02-11T20:00:00.000Z",
        "quote": {
          "USD": {
            "price": 11.12488300588423,
            "volume_24h": 569194424.1353279,
            "volume_change_24h": -10.8911,
            "percent_change_1h": -1.7583852,
            "percent_change_24h": -7.86332291,
            "percent_change_7d": -12.96242567,
            "percent_change_30d": -38.24092741,
            "percent_change_60d": 20.46902098,
            "percent_change_90d": -0.16697745,
            "market_cap": 7026760358.4021635,
            "market_cap_dominance": 0.3644,
            "fully_diluted_market_cap": 11124883005.88,
            "last_updated": "2022-02-11T20:00:00.000Z"
          }
        }
      },
      {
        "id": 7083,
        "name": "Uniswap",
        "symbol": "UNI",
        "slug": "uniswap",
        "num_market_pairs": 333,
        "date_added": "2020-09-17T00:00:00.000Z",
        "tags": [
          "decentralized-exchange",
          "defi",
          "dao",
          "yield-farming",
          "amm",
          "binance-smart-chain",
          "coinbase-ventures-portfolio",
          "three-arrows-capital-portfolio",
          "governance",
          "blockchain-capital-portfolio",
          "defiance-capital-portfolio",
          "alameda-research-portfolio",
          "a16z-portfolio",
          "pantera-capital-portfolio",
          "parafi-capital",
          "paradigm-portfolio",
          "arbitrum-ecosytem"
        ],
        "max_supply": 1000000000,
        "circulating_supply": 632251815.7027552,
        "total_supply": 1000000000,
        "platform": {
          "id": 1027,
          "name": "Ethereum",
          "symbol": "ETH",
          "slug": "ethereum",
          "token_address": "0x1f9840a85d5af5bf1d1762f925bdaddc4201f984"
        },
        "cmc_rank": 24,
        "self_reported_circulating_supply": null,
        "self_reported_market_cap": null,
        "last_updated": "2022-02-11T20:00:00.000Z",
        "quote": {
          "USD": {
            "price": 11.003217660986097,
            "volume_24h": 188186965.69414362,
            "volume_change_24h": -30.9272,
            "percent_change_1h": -0.80070792,
            "percent_change_24h": -5.1097131,
            "percent_change_7d": -0.68457433,
            "percent_change_30d": -32.699616,
            "percent_change_60d": -21.9604507,
            "percent_change_90d": -55.25295617,
            "market_cap": 6956804344.731083,
            "market_cap_dominance": 0.3608,
            "fully_diluted_market_cap": 11003217660.99,
            "last_updated": "2022-02-11T20:00:00.000Z"
          }
        }
      },
      {
        "id": 1958,
        "name": "TRON",
        "symbol": "TRX",
        "slug": "tron",
        "num_market_pairs": 565,
        "date_added": "2017-09-13T00:00:00.000Z",
        "tags": [
          "media",
          "payments",
          "tron-ecosystem",
          "binance-smart-chain"
        ],
        "max_supply": null,
        "circulating_supply": 101786946003.5269,
        "total_supply": 101786952150.67375,
        "platform": null,
        "cmc_rank": 25,
        "self_reported_circulating_supply": 71659659264,
        "self_reported_market_cap": 4652459956.220456,
        "last_updated": "2022-02-11T20:00:00.000Z",
        "quote": {
          "USD": {
            "price": 0.06492439405943051,
            "volume_24h": 1302760701.550878,
            "volume_change_24h": 4.0724,
            "percent_change_1h": -0.69076315,
            "percent_change_24h": -6.52715504,
            "percent_change_7d": 1.67041723,
            "percent_change_30d": -4.54373695,
            "percent_change_60d": -23.86257746,
            "percent_change_90d": -42.14673231,
            "market_cap": 6608455792.438956,
            "market_cap_dominance": 0.3427,
            "fully_diluted_market_cap": 6608456191.54,
            "last_updated": "2022-02-11T20:00:00.000Z"
          }
        }
      },
      {
        "id": 1831,
        "name": "Bitcoin Cash",
        "symbol": "BCH",
        "slug": "bitcoin-cash",
        "num_market_pairs": 567,
        "date_added": "2017-07-23T00:00:00.000Z",
        "tags": [
          "mineable",
          "pow",
          "sha-256",
          "marketplace",
          "medium-of-exchange",
          "store-of-value",
          "enterprise-solutions",
          "payments",
          "binance-chain",
          "binance-smart-chain"
        ],
        "max_supply": 21000000,
        "circulating_supply": 18980368.75,
        "total_supply": 18980368.75,
        "platform": null,
        "cmc_rank": 26,
        "self_reported_circulating_supply": null,
        "self_reported_market_cap": null,
        "last_updated": "2022-02-11T20:00:00.000Z",
        "quote": {
          "USD": {
            "price": 328.2142550572938,
            "volume_24h": 4286231409.4636154,
            "volume_change_24h": -1.8376,
            "percent_change_1h": -0.25225723,
            "percent_change_24h": -5.10396003,
            "percent_change_7d": 9.63333497,
            "percent_change_30d": -14.67589291,
            "percent_change_60d": -22.56562288,
            "percent_change_90d": -50.62712273,
            "market_cap": 6229627589.993989,
            "market_cap_dominance": 0.3234,
            "fully_diluted_market_cap": 6892499356.2,
            "last_updated": "2022-02-11T20:00:00.000Z"
          }
        }
      },
      {
        "id": 4030,
        "name": "Algorand",
        "symbol": "ALGO",
        "slug": "algorand",
        "num_market_pairs": 180,
        "date_added": "2019-06-20T00:00:00.000Z",
        "tags": [
          "pos",
          "platform",
          "research",
          "smart-contracts",
          "arrington-xrp-capital-portfolio",
          "kenetic-capital-portfolio",
          "usv-portfolio",
          "multicoin-capital-portfolio",
          "exnetwork-capital-portfolio"
        ],
        "max_supply": 10000000000,
        "circulating_supply": 6563712380.587038,
        "total_supply": 7005760871.415448,
        "platform": null,
        "cmc_rank": 27,
        "self_reported_circulating_supply": null,
        "self_reported_market_cap": null,
        "last_updated": "2022-02-11T20:00:00.000Z",
        "quote": {
          "USD": {
            "price": 0.9478449348764958,
            "volume_24h": 271680055.4122221,
            "volume_change_24h": -20.6575,
            "percent_change_1h": -1.22951085,
            "percent_change_24h": -3.92700013,
            "percent_change_7d": -3.89845544,
            "percent_change_30d": -35.87591629,
            "percent_change_60d": -30.14885042,
            "percent_change_90d": -54.82457497,
            "market_cap": 6221381533.9255705,
            "market_cap_dominance": 0.3227,
            "fully_diluted_market_cap": 9478449348.76,
            "last_updated": "2022-02-11T20:00:00.000Z"
          }
        }
      },
      {
        "id": 4195,
        "name": "FTX Token",
        "symbol": "FTT",
        "slug": "ftx-token",
        "num_market_pairs": 111,
        "date_added": "2019-07-31T00:00:00.000Z",
        "tags": [
          "marketplace",
          "centralized-exchange",
          "derivatives",
          "cms-holdings-portfolio",
          "kenetic-capital-portfolio",
          "alameda-research-portfolio",
          "pantera-capital-portfolio",
          "exnetwork-capital-portfolio"
        ],
        "max_supply": 352170015,
        "circulating_supply": 138024907.61874375,
        "total_supply": 333894243.6859715,
        "platform": {
          "id": 1839,
          "name": "Binance Chain (BEP2)",
          "symbol": "BNB",
          "slug": "bnb",
          "token_address": "FTT-F11"
        },
        "cmc_rank": 28,
        "self_reported_circulating_supply": null,
        "self_reported_market_cap": null,
        "last_updated": "2022-02-11T20:00:00.000Z",
        "quote": {
          "USD": {
            "price": 43.82370632050926,
            "volume_24h": 156420205.27831596,
            "volume_change_24h": -30.0062,
            "percent_change_1h": -0.010635,
            "percent_change_24h": -4.70238166,
            "percent_change_7d": -2.57984623,
            "percent_change_30d": 6.17722919,
            "percent_change_60d": 15.79461816,
            "percent_change_90d": -20.36237887,
            "market_cap": 6048763016.399247,
            "market_cap_dominance": 0.3137,
            "fully_diluted_market_cap": 15433395312.25,
            "last_updated": "2022-02-11T20:00:00.000Z"
          }
        }
      },
      {
        "id": 3957,
        "name": "UNUS SED LEO",
        "symbol": "LEO",
        "slug": "unus-sed-leo",
        "num_market_pairs": 19,
        "date_added": "2019-05-21T00:00:00.000Z",
        "tags": [
          "marketplace",
          "centralized-exchange",
          "discount-token",
          "payments",
          "kenetic-capital-portfolio",
          "alameda-research-portfolio"
        ],
        "max_supply": null,
        "circulating_supply": 953954130,
        "total_supply": 985239504,
        "platform": {
          "id": 1027,
          "name": "Ethereum",
          "symbol": "ETH",
          "slug": "ethereum",
          "token_address": "0x2af5d2ad76741191d15dfe7bf6ac92d4bd912ca3"
        },
        "cmc_rank": 29,
        "self_reported_circulating_supply": null,
        "self_reported_market_cap": null,
        "last_updated": "2022-02-11T20:00:00.000Z",
        "quote": {
          "USD": {
            "price": 6.024122080710695,
            "volume_24h": 7961098.56712916,
            "volume_change_24h": -38.1252,
            "percent_change_1h": -0.48510035,
            "percent_change_24h": -1.63898986,
            "percent_change_7d": 16.7218837,
            "percent_change_30d": 58.44014565,
            "percent_change_60d": 65.10330784,
            "percent_change_90d": 97.61239881,
            "market_cap": 5746736138.518161,
            "market_cap_dominance": 0.2983,
            "fully_diluted_market_cap": 5935203050.83,
            "last_updated": "2022-02-11T20:00:00.000Z"
          }
        }
      },
      {
        "id": 1966,
        "name": "Decentraland",
        "symbol": "MANA",
        "slug": "decentraland",
        "num_market_pairs": 238,
        "date_added": "2017-09-17T00:00:00.000Z",
        "tags": [
          "platform",
          "collectibles-nfts",
          "gaming",
          "payments",
          "metaverse",
          "boostvc-portfolio",
          "dcg-portfolio",
          "fabric-ventures-portfolio",
          "kenetic-capital-portfolio",
          "polygon-ecosystem",
          "play-to-earn"
        ],
        "max_supply": null,
        "circulating_supply": 1832138798.3634298,
        "total_supply": 2193846927.320146,
        "platform": {
          "id": 1027,
          "name": "Ethereum",
          "symbol": "ETH",
          "slug": "ethereum",
          "token_address": "0x0f5d2fb29fb7d3cfee444a200298f468908cc942"
        },
        "cmc_rank": 30,
        "self_reported_circulating_supply": null,
        "self_reported_market_cap": null,
        "last_updated": "2022-02-11T20:00:00.000Z",
        "quote": {
          "USD": {
            "price": 3.042152004011894,
            "volume_24h": 740970316.9815865,
            "volume_change_24h": -28.2335,
            "percent_change_1h": -1.21340373,
            "percent_change_24h": -5.88723792,
            "percent_change_7d": 10.58239303,
            "percent_change_30d": -0.75188944,
            "percent_change_60d": -4.69605755,
            "percent_change_90d": -9.02212989,
            "market_cap": 5573644717.069251,
            "market_cap_dominance": 0.2891,
            "fully_diluted_market_cap": 6674015826.44,
            "last_updated": "2022-02-11T20:00:00.000Z"
          }
        }
      },
      {
        "id": 512,
        "name": "Stellar",
        "symbol": "XLM",
        "slug": "stellar",
        "num_market_pairs": 403,
        "date_added": "2014-08-05T00:00:00.000Z",
        "tags": [
          "medium-of-exchange",
          "enterprise-solutions",
          "decentralized-exchange",
          "smart-contracts",
          "hashkey-capital-portfolio"
        ],
        "max_supply": 50001806812,
        "circulating_supply": 24892876477.739937,
        "total_supply": 50001802216.434555,
        "platform": null,
        "cmc_rank": 31,
        "self_reported_circulating_supply": null,
        "self_reported_market_cap": null,
        "last_updated": "2022-02-11T20:00:00.000Z",
        "quote": {
          "USD": {
            "price": 0.2221896444841271,
            "volume_24h": 327174110.22831523,
            "volume_change_24h": -12.2055,
            "percent_change_1h": -0.95028302,
            "percent_change_24h": -4.27920037,
            "percent_change_7d": 8.53580955,
            "percent_change_30d": -23.06382429,
            "percent_change_60d": -12.9536384,
            "percent_change_90d": -41.03460542,
            "market_cap": 5530939374.776326,
            "market_cap_dominance": 0.2871,
            "fully_diluted_market_cap": 11109883679.12,
            "last_updated": "2022-02-11T20:00:00.000Z"
          }
        }
      },
      {
        "id": 3513,
        "name": "Fantom",
        "symbol": "FTM",
        "slug": "fantom",
        "num_market_pairs": 242,
        "date_added": "2018-10-29T00:00:00.000Z",
        "tags": [
          "platform",
          "enterprise-solutions",
          "defi",
          "research",
          "scaling",
          "smart-contracts",
          "binance-smart-chain",
          "fantom-ecosystem"
        ],
        "max_supply": 3175000000,
        "circulating_supply": 2545006273,
        "total_supply": 2545006273,
        "platform": null,
        "cmc_rank": 32,
        "self_reported_circulating_supply": null,
        "self_reported_market_cap": null,
        "last_updated": "2022-02-11T20:00:00.000Z",
        "quote": {
          "USD": {
            "price": 1.9935259250281099,
            "volume_24h": 731581095.2009192,
            "volume_change_24h": -26.2609,
            "percent_change_1h": -3.22263642,
            "percent_change_24h": -6.63830865,
            "percent_change_7d": -4.31963677,
            "percent_change_30d": -31.59317882,
            "percent_change_60d": 54.04953746,
            "percent_change_90d": -24.66024368,
            "market_cap": 5073535984.584667,
            "market_cap_dominance": 0.2634,
            "fully_diluted_market_cap": 6329444811.96,
            "last_updated": "2022-02-11T20:00:00.000Z"
          }
        }
      },
      {
        "id": 1321,
        "name": "Ethereum Classic",
        "symbol": "ETC",
        "slug": "ethereum-classic",
        "num_market_pairs": 286,
        "date_added": "2016-07-24T00:00:00.000Z",
        "tags": [
          "mineable",
          "pow",
          "ethash",
          "platform",
          "smart-contracts",
          "binance-smart-chain",
          "dcg-portfolio"
        ],
        "max_supply": 210700000,
        "circulating_supply": 132882329.99555036,
        "total_supply": 210700000,
        "platform": null,
        "cmc_rank": 33,
        "self_reported_circulating_supply": null,
        "self_reported_market_cap": null,
        "last_updated": "2022-02-11T20:00:00.000Z",
        "quote": {
          "USD": {
            "price": 35.33231634763141,
            "volume_24h": 1070386752.5523685,
            "volume_change_24h": -1.5859,
            "percent_change_1h": 0.14451045,
            "percent_change_24h": 1.17468516,
            "percent_change_7d": 22.5716349,
            "percent_change_30d": 13.61767639,
            "percent_change_60d": 2.95611745,
            "percent_change_90d": -36.24644794,
            "market_cap": 4695040520.4131365,
            "market_cap_dominance": 0.2437,
            "fully_diluted_market_cap": 7444519054.45,
            "last_updated": "2022-02-11T20:00:00.000Z"
          }
        }
      },
      {
        "id": 4023,
        "name": "Bitcoin BEP2",
        "symbol": "BTCB",
        "slug": "bitcoin-bep2",
        "num_market_pairs": 103,
        "date_added": "2019-06-18T00:00:00.000Z",
        "tags": [
          "binance-chain",
          "binance-smart-chain"
        ],
        "max_supply": null,
        "circulating_supply": 105148.91067178,
        "total_supply": 112501,
        "platform": {
          "id": 1839,
          "name": "Binance Chain (BEP2)",
          "symbol": "BNB",
          "slug": "bnb",
          "token_address": "BTCB-1DE"
        },
        "cmc_rank": 34,
        "self_reported_circulating_supply": null,
        "self_reported_market_cap": null,
        "last_updated": "2022-02-11T20:00:00.000Z",
        "quote": {
          "USD": {
            "price": 42632.93052895776,
            "volume_24h": 51290296.97060389,
            "volume_change_24h": 13.2978,
            "percent_change_1h": -0.59991271,
            "percent_change_24h": -4.33016558,
            "percent_change_7d": 5.15709999,
            "percent_change_30d": -2.43969303,
            "percent_change_60d": -8.82584452,
            "percent_change_90d": -33.12061024,
            "market_cap": 4482806203.865582,
            "market_cap_dominance": 0.2325,
            "fully_diluted_market_cap": 4796247317.44,
            "last_updated": "2022-02-11T20:00:00.000Z"
          }
        }
      },
      {
        "id": 6210,
        "name": "The Sandbox",
        "symbol": "SAND",
        "slug": "the-sandbox",
        "num_market_pairs": 191,
        "date_added": "2020-08-05T00:00:00.000Z",
        "tags": [
          "collectibles-nfts",
          "content-creation",
          "gaming",
          "ethereum-ecosystem",
          "binance-launchpad",
          "metaverse",
          "play-to-earn",
          "animoca-brands-portfolio"
        ],
        "max_supply": 3000000000,
        "circulating_supply": 1038254385.2233225,
        "total_supply": 3000000000,
        "platform": {
          "id": 1027,
          "name": "Ethereum",
          "symbol": "ETH",
          "slug": "ethereum",
          "token_address": "0x3845badAde8e6dFF049820680d1F14bD3903a5d0"
        },
        "cmc_rank": 35,
        "self_reported_circulating_supply": null,
        "self_reported_market_cap": null,
        "last_updated": "2022-02-11T20:00:00.000Z",
        "quote": {
          "USD": {
            "price": 4.2675646312612425,
            "volume_24h": 907547557.3915683,
            "volume_change_24h": -30.7655,
            "percent_change_1h": -0.53848076,
            "percent_change_24h": -4.98801418,
            "percent_change_7d": 9.2895295,
            "percent_change_30d": -16.75124351,
            "percent_change_60d": -11.22254926,
            "percent_change_90d": 46.90158374,
            "market_cap": 4430817692.630937,
            "market_cap_dominance": 0.2298,
            "fully_diluted_market_cap": 12802693893.78,
            "last_updated": "2022-02-11T20:00:00.000Z"
          }
        }
      },
      {
        "id": 4642,
        "name": "Hedera",
        "symbol": "HBAR",
        "slug": "hedera",
        "num_market_pairs": 85,
        "date_added": "2019-09-17T00:00:00.000Z",
        "tags": [
          "dag",
          "marketplace",
          "enterprise-solutions",
          "payments",
          "dcg-portfolio"
        ],
        "max_supply": 50000000000,
        "circulating_supply": 18092792421.137627,
        "total_supply": 50000000000,
        "platform": null,
        "cmc_rank": 36,
        "self_reported_circulating_supply": 18988315241,
        "self_reported_market_cap": 4558683837.288772,
        "last_updated": "2022-02-11T20:00:00.000Z",
        "quote": {
          "USD": {
            "price": 0.24007837343281296,
            "volume_24h": 83894152.61697614,
            "volume_change_24h": -15.4179,
            "percent_change_1h": -1.62585986,
            "percent_change_24h": -5.22612124,
            "percent_change_7d": -3.07114612,
            "percent_change_30d": -18.14892322,
            "percent_change_60d": 6.44171809,
            "percent_change_90d": -45.38848944,
            "market_cap": 4343688175.324247,
            "market_cap_dominance": 0.2255,
            "fully_diluted_market_cap": 12003918671.64,
            "last_updated": "2022-02-11T20:00:00.000Z"
          }
        }
      },
      {
        "id": 8916,
        "name": "Internet Computer",
        "symbol": "ICP",
        "slug": "internet-computer",
        "num_market_pairs": 97,
        "date_added": "2021-03-23T00:00:00.000Z",
        "tags": [
          "platform",
          "distributed-computing",
          "polychain-capital-portfolio",
          "exnetwork-capital-portfolio"
        ],
        "max_supply": null,
        "circulating_supply": 206578830.09518674,
        "total_supply": 476892711.5796667,
        "platform": null,
        "cmc_rank": 37,
        "self_reported_circulating_supply": 206595191.31577075,
        "self_reported_market_cap": 4211541013.1157584,
        "last_updated": "2022-02-11T20:00:00.000Z",
        "quote": {
          "USD": {
            "price": 20.385474542234732,
            "volume_24h": 256877445.03899848,
            "volume_change_24h": -18.298,
            "percent_change_1h": -1.49229976,
            "percent_change_24h": -7.35103526,
            "percent_change_7d": -6.30573956,
            "percent_change_30d": -40.7696962,
            "percent_change_60d": -18.81480761,
            "percent_change_90d": -57.05747728,
            "market_cap": 4211207481.8700633,
            "market_cap_dominance": 0.2186,
            "fully_diluted_market_cap": 9721684231.28,
            "last_updated": "2022-02-11T20:00:00.000Z"
          }
        }
      },
      {
        "id": 6892,
        "name": "Elrond",
        "symbol": "EGLD",
        "slug": "elrond-egld",
        "num_market_pairs": 78,
        "date_added": "2020-09-04T00:00:00.000Z",
        "tags": [
          "binance-smart-chain",
          "binance-launchpad",
          "binance-labs-portfolio",
          "electric-capital-portfolio",
          "exnetwork-capital-portfolio",
          "elrond-ecosystem"
        ],
        "max_supply": 31415926,
        "circulating_supply": 20720663.20195982,
        "total_supply": 23016298,
        "platform": null,
        "cmc_rank": 38,
        "self_reported_circulating_supply": null,
        "self_reported_market_cap": null,
        "last_updated": "2022-02-11T20:00:00.000Z",
        "quote": {
          "USD": {
            "price": 197.2138481474111,
            "volume_24h": 493556638.97234964,
            "volume_change_24h": 52.4112,
            "percent_change_1h": -0.33454886,
            "percent_change_24h": 9.9240699,
            "percent_change_7d": 31.53345807,
            "percent_change_30d": -8.85354565,
            "percent_change_60d": -15.75896603,
            "percent_change_90d": -38.76573881,
            "market_cap": 4086401726.224953,
            "market_cap_dominance": 0.2121,
            "fully_diluted_market_cap": 6195655659.57,
            "last_updated": "2022-02-11T20:00:00.000Z"
          }
        }
      },
      {
        "id": 2416,
        "name": "Theta Network",
        "symbol": "THETA",
        "slug": "theta-network",
        "num_market_pairs": 96,
        "date_added": "2018-01-17T00:00:00.000Z",
        "tags": [
          "media",
          "collectibles-nfts",
          "content-creation",
          "video",
          "metaverse",
          "huobi-capital-portfolio",
          "web3"
        ],
        "max_supply": 1000000000,
        "circulating_supply": 1000000000,
        "total_supply": 1000000000,
        "platform": null,
        "cmc_rank": 39,
        "self_reported_circulating_supply": null,
        "self_reported_market_cap": null,
        "last_updated": "2022-02-11T20:00:00.000Z",
        "quote": {
          "USD": {
            "price": 3.9946707303926923,
            "volume_24h": 1018876072.9182925,
            "volume_change_24h": 17.6072,
            "percent_change_1h": 2.25200019,
            "percent_change_24h": 0.05584533,
            "percent_change_7d": 34.21984728,
            "percent_change_30d": -7.67005149,
            "percent_change_60d": 1.94597729,
            "percent_change_90d": -44.31864377,
            "market_cap": 3994670730.392692,
            "market_cap_dominance": 0.2072,
            "fully_diluted_market_cap": 3994670730.39,
            "last_updated": "2022-02-11T20:00:00.000Z"
          }
        }
      },
      {
        "id": 3077,
        "name": "VeChain",
        "symbol": "VET",
        "slug": "vechain",
        "num_market_pairs": 163,
        "date_added": "2017-08-22T00:00:00.000Z",
        "tags": [
          "logistics",
          "data-provenance",
          "iot",
          "smart-contracts",
          "fenbushi-capital-portfolio"
        ],
        "max_supply": 86712634466,
        "circulating_supply": 64315576989,
        "total_supply": 86712634466,
        "platform": null,
        "cmc_rank": 40,
        "self_reported_circulating_supply": null,
        "self_reported_market_cap": null,
        "last_updated": "2022-02-11T20:00:00.000Z",
        "quote": {
          "USD": {
            "price": 0.06030585921884982,
            "volume_24h": 309070412.8803626,
            "volume_change_24h": -16.1112,
            "percent_change_1h": -2.37281924,
            "percent_change_24h": -6.95675486,
            "percent_change_7d": 4.68908045,
            "percent_change_30d": -25.74465828,
            "percent_change_60d": -22.35053714,
            "percent_change_90d": -62.26161713,
            "market_cap": 3878606131.4777308,
            "market_cap_dominance": 0.2014,
            "fully_diluted_market_cap": 5229279926.6,
            "last_updated": "2022-02-11T20:00:00.000Z"
          }
        }
      },
      {
        "id": 6783,
        "name": "Axie Infinity",
        "symbol": "AXS",
        "slug": "axie-infinity",
        "num_market_pairs": 187,
        "date_added": "2020-08-31T00:00:00.000Z",
        "tags": [
          "collectibles-nfts",
          "gaming",
          "binance-launchpad",
          "metaverse",
          "defiance-capital-portfolio",
          "play-to-earn",
          "animoca-brands-portfolio"
        ],
        "max_supply": 270000000,
        "circulating_supply": 60907500,
        "total_supply": 270000000,
        "platform": {
          "id": 1027,
          "name": "Ethereum",
          "symbol": "ETH",
          "slug": "ethereum",
          "token_address": "0xbb0e17ef65f82ab018d8edd776e8dd940327b28b"
        },
        "cmc_rank": 41,
        "self_reported_circulating_supply": null,
        "self_reported_market_cap": null,
        "last_updated": "2022-02-11T20:00:00.000Z",
        "quote": {
          "USD": {
            "price": 60.19457959976655,
            "volume_24h": 441757345.6134284,
            "volume_change_24h": -32.2454,
            "percent_change_1h": -1.66621449,
            "percent_change_24h": -6.04826141,
            "percent_change_7d": 18.95385237,
            "percent_change_30d": -23.3464098,
            "percent_change_60d": -35.39112723,
            "percent_change_90d": -58.29107236,
            "market_cap": 3666301356.972781,
            "market_cap_dominance": 0.1903,
            "fully_diluted_market_cap": 16252536491.94,
            "last_updated": "2022-02-11T20:00:00.000Z"
          }
        }
      },
      {
        "id": 2011,
        "name": "Tezos",
        "symbol": "XTZ",
        "slug": "tezos",
        "num_market_pairs": 196,
        "date_added": "2017-10-06T00:00:00.000Z",
        "tags": [
          "pos",
          "platform",
          "enterprise-solutions",
          "collectibles-nfts",
          "defi",
          "smart-contracts",
          "binance-smart-chain",
          "polychain-capital-portfolio",
          "boostvc-portfolio",
          "winklevoss-capital-portfolio"
        ],
        "max_supply": null,
        "circulating_supply": 877521625.501972,
        "total_supply": 905736490.908168,
        "platform": null,
        "cmc_rank": 42,
        "self_reported_circulating_supply": null,
        "self_reported_market_cap": null,
        "last_updated": "2022-02-11T20:00:00.000Z",
        "quote": {
          "USD": {
            "price": 4.148662838412432,
            "volume_24h": 280551051.93371373,
            "volume_change_24h": -9.2091,
            "percent_change_1h": -4.04183106,
            "percent_change_24h": -1.66980676,
            "percent_change_7d": 6.0295653,
            "percent_change_30d": -4.72990444,
            "percent_change_60d": 2.48135308,
            "percent_change_90d": -30.00482306,
            "market_cap": 3640541357.623302,
            "market_cap_dominance": 0.189,
            "fully_diluted_market_cap": 3757595321.22,
            "last_updated": "2022-02-11T20:00:00.000Z"
          }
        }
      },
      {
        "id": 2280,
        "name": "Filecoin",
        "symbol": "FIL",
        "slug": "filecoin",
        "num_market_pairs": 169,
        "date_added": "2017-12-13T00:00:00.000Z",
        "tags": [
          "mineable",
          "distributed-computing",
          "filesharing",
          "storage",
          "binance-smart-chain",
          "polychain-capital-portfolio",
          "blockchain-capital-portfolio",
          "boostvc-portfolio",
          "dcg-portfolio",
          "hashkey-capital-portfolio",
          "a16z-portfolio",
          "winklevoss-capital-portfolio",
          "pantera-capital-portfolio",
          "web3"
        ],
        "max_supply": null,
        "circulating_supply": 159773327,
        "total_supply": 159773327,
        "platform": null,
        "cmc_rank": 43,
        "self_reported_circulating_supply": null,
        "self_reported_market_cap": null,
        "last_updated": "2022-02-11T20:00:00.000Z",
        "quote": {
          "USD": {
            "price": 22.092404994558752,
            "volume_24h": 418075444.70520455,
            "volume_change_24h": -28.3734,
            "percent_change_1h": -0.59179028,
            "percent_change_24h": -5.25778539,
            "percent_change_7d": 3.49011608,
            "percent_change_30d": -27.35703872,
            "percent_change_60d": -38.40435112,
            "percent_change_90d": -64.79293588,
            "market_cap": 3529777047.412069,
            "market_cap_dominance": 0.1832,
            "fully_diluted_market_cap": 3529777047.41,
            "last_updated": "2022-02-11T20:00:00.000Z"
          }
        }
      },
      {
        "id": 4256,
        "name": "Klaytn",
        "symbol": "KLAY",
        "slug": "klaytn",
        "num_market_pairs": 73,
        "date_added": "2020-03-30T00:00:00.000Z",
        "tags": [
          "platform",
          "enterprise-solutions"
        ],
        "max_supply": null,
        "circulating_supply": 2631845541.6,
        "total_supply": 10782297980.8,
        "platform": null,
        "cmc_rank": 44,
        "self_reported_circulating_supply": null,
        "self_reported_market_cap": null,
        "last_updated": "2022-02-11T20:00:00.000Z",
        "quote": {
          "USD": {
            "price": 1.2023863867741353,
            "volume_24h": 64221042.45829824,
            "volume_change_24h": 1.6291,
            "percent_change_1h": -0.53974559,
            "percent_change_24h": 1.04620971,
            "percent_change_7d": 2.68982927,
            "percent_change_30d": -15.03411633,
            "percent_change_60d": -1.44261815,
            "percent_change_90d": -22.59942843,
            "market_cap": 3164495251.3120413,
            "market_cap_dominance": 0.1641,
            "fully_diluted_market_cap": 12964488310.26,
            "last_updated": "2022-02-11T20:00:00.000Z"
          }
        }
      },
      {
        "id": 5665,
        "name": "Helium",
        "symbol": "HNT",
        "slug": "helium",
        "num_market_pairs": 39,
        "date_added": "2020-06-05T00:00:00.000Z",
        "tags": [
          "mineable",
          "enterprise-solutions",
          "distributed-computing",
          "iot",
          "usv-portfolio",
          "multicoin-capital-portfolio",
          "web3"
        ],
        "max_supply": 223000000,
        "circulating_supply": 110401962.30694532,
        "total_supply": 223000000,
        "platform": null,
        "cmc_rank": 45,
        "self_reported_circulating_supply": null,
        "self_reported_market_cap": null,
        "last_updated": "2022-02-11T20:00:00.000Z",
        "quote": {
          "USD": {
            "price": 28.47307017932001,
            "volume_24h": 29911468.54727184,
            "volume_change_24h": -11.1049,
            "percent_change_1h": -1.9760818,
            "percent_change_24h": -2.18546487,
            "percent_change_7d": 5.84077818,
            "percent_change_30d": -18.53733247,
            "percent_change_60d": 9.01747998,
            "percent_change_90d": -43.08608027,
            "market_cap": 3143482820.700297,
            "market_cap_dominance": 0.1632,
            "fully_diluted_market_cap": 6349494649.99,
            "last_updated": "2022-02-11T20:00:00.000Z"
          }
        }
      },
      {
        "id": 328,
        "name": "Monero",
        "symbol": "XMR",
        "slug": "monero",
        "num_market_pairs": 167,
        "date_added": "2014-05-21T00:00:00.000Z",
        "tags": [
          "mineable",
          "pow",
          "medium-of-exchange",
          "privacy",
          "ringct",
          "boostvc-portfolio",
          "electric-capital-portfolio",
          "galaxy-digital-portfolio"
        ],
        "max_supply": null,
        "circulating_supply": 18077293.58535307,
        "total_supply": 18077293.58535307,
        "platform": null,
        "cmc_rank": 46,
        "self_reported_circulating_supply": null,
        "self_reported_market_cap": null,
        "last_updated": "2022-02-11T20:00:00.000Z",
        "quote": {
          "USD": {
            "price": 171.98950669382438,
            "volume_24h": 152734743.89654413,
            "volume_change_24h": -12.3806,
            "percent_change_1h": -1.14586195,
            "percent_change_24h": -5.61031247,
            "percent_change_7d": 6.81342335,
            "percent_change_30d": -12.73158527,
            "percent_change_60d": -6.926527,
            "percent_change_90d": -36.03433357,
            "market_cap": 3109104806.10431,
            "market_cap_dominance": 0.1614,
            "fully_diluted_market_cap": 3109104806.1,
            "last_updated": "2022-02-11T20:00:00.000Z"
          }
        }
      },
      {
        "id": 1720,
        "name": "IOTA",
        "symbol": "MIOTA",
        "slug": "iota",
        "num_market_pairs": 72,
        "date_added": "2017-06-13T00:00:00.000Z",
        "tags": [
          "dag",
          "medium-of-exchange",
          "iot",
          "sharing-economy",
          "binance-smart-chain"
        ],
        "max_supply": 2779530283,
        "circulating_supply": 2779530283,
        "total_supply": 2779530283,
        "platform": null,
        "cmc_rank": 47,
        "self_reported_circulating_supply": null,
        "self_reported_market_cap": null,
        "last_updated": "2022-02-11T20:00:00.000Z",
        "quote": {
          "USD": {
            "price": 0.9126063494717219,
            "volume_24h": 36967461.42961733,
            "volume_change_24h": -46.0501,
            "percent_change_1h": -1.43537789,
            "percent_change_24h": -5.1986968,
            "percent_change_7d": -2.32940174,
            "percent_change_30d": -22.96579807,
            "percent_change_60d": -11.23453328,
            "percent_change_90d": -30.34784709,
            "market_cap": 2536616984.814732,
            "market_cap_dominance": 0.1316,
            "fully_diluted_market_cap": 2536616984.81,
            "last_updated": "2022-02-11T20:00:00.000Z"
          }
        }
      },
      {
        "id": 1765,
        "name": "EOS",
        "symbol": "EOS",
        "slug": "eos",
        "num_market_pairs": 422,
        "date_added": "2017-07-01T00:00:00.000Z",
        "tags": [
          "medium-of-exchange",
          "enterprise-solutions",
          "smart-contracts",
          "binance-chain",
          "binance-smart-chain",
          "fenbushi-capital-portfolio",
          "galaxy-digital-portfolio"
        ],
        "max_supply": null,
        "circulating_supply": 980240405.6416,
        "total_supply": 1046826630.9711,
        "platform": null,
        "cmc_rank": 48,
        "self_reported_circulating_supply": null,
        "self_reported_market_cap": null,
        "last_updated": "2022-02-11T20:00:00.000Z",
        "quote": {
          "USD": {
            "price": 2.499282803590863,
            "volume_24h": 398219651.09665334,
            "volume_change_24h": -18.4855,
            "percent_change_1h": -0.64831908,
            "percent_change_24h": -3.8960305,
            "percent_change_7d": 2.32832385,
            "percent_change_30d": -13.66288301,
            "percent_change_60d": -18.6263408,
            "percent_change_90d": -50.12397467,
            "market_cap": 2449897989.204983,
            "market_cap_dominance": 0.1271,
            "fully_diluted_market_cap": 2616315797.13,
            "last_updated": "2022-02-11T20:00:00.000Z"
          }
        }
      },
      {
        "id": 3945,
        "name": "Harmony",
        "symbol": "ONE",
        "slug": "harmony",
        "num_market_pairs": 82,
        "date_added": "2019-06-01T00:00:00.000Z",
        "tags": [
          "platform",
          "enterprise-solutions",
          "scaling",
          "smart-contracts",
          "binance-smart-chain",
          "binance-launchpad",
          "binance-labs-portfolio",
          "hashkey-capital-portfolio",
          "harmony-ecosystem"
        ],
        "max_supply": null,
        "circulating_supply": 11704136696.100666,
        "total_supply": 13348710696.10068,
        "platform": null,
        "cmc_rank": 49,
        "self_reported_circulating_supply": null,
        "self_reported_market_cap": null,
        "last_updated": "2022-02-11T20:00:00.000Z",
        "quote": {
          "USD": {
            "price": 0.19954171393393536,
            "volume_24h": 204649337.71542692,
            "volume_change_24h": -35.5442,
            "percent_change_1h": -1.38743696,
            "percent_change_24h": -8.34577605,
            "percent_change_7d": 3.62909033,
            "percent_change_30d": -41.01528687,
            "percent_change_60d": 18.53642627,
            "percent_change_90d": -29.00860849,
            "market_cap": 2335463496.4569945,
            "market_cap_dominance": 0.1211,
            "fully_diluted_market_cap": 2663624611.11,
            "last_updated": "2022-02-11T20:00:00.000Z"
          }
        }
      },
      {
        "id": 4558,
        "name": "Flow",
        "symbol": "FLOW",
        "slug": "flow",
        "num_market_pairs": 57,
        "date_added": "2021-01-27T00:00:00.000Z",
        "tags": [
          "collectibles-nfts",
          "coinbase-ventures-portfolio",
          "coinfund-portfolio",
          "dcg-portfolio",
          "ledgerprime-portfolio",
          "a16z-portfolio",
          "animoca-brands-portfolio"
        ],
        "max_supply": null,
        "circulating_supply": 318082398,
        "total_supply": 1378211739,
        "platform": null,
        "cmc_rank": 50,
        "self_reported_circulating_supply": null,
        "self_reported_market_cap": null,
        "last_updated": "2022-02-11T20:00:00.000Z",
        "quote": {
          "USD": {
            "price": 7.302032548241857,
            "volume_24h": 220710128.31840718,
            "volume_change_24h": -54.3274,
            "percent_change_1h": -0.14796483,
            "percent_change_24h": -9.69296263,
            "percent_change_7d": 16.23828744,
            "percent_change_30d": -7.40882456,
            "percent_change_60d": -15.57154903,
            "percent_change_90d": -44.07059652,
            "market_cap": 2322648023.2188206,
            "market_cap_dominance": 0.1206,
            "fully_diluted_market_cap": 10063746976.55,
            "last_updated": "2022-02-11T20:00:00.000Z"
          }
        }
      },
      {
        "id": 7278,
        "name": "Aave",
        "symbol": "AAVE",
        "slug": "aave",
        "num_market_pairs": 305,
        "date_added": "2020-10-02T00:00:00.000Z",
        "tags": [
          "defi",
          "dao",
          "yield-farming",
          "binance-smart-chain",
          "three-arrows-capital-portfolio",
          "governance",
          "lending-borowing",
          "blockchain-capital-portfolio",
          "defiance-capital-portfolio",
          "framework-ventures-portfolio",
          "alameda-research-portfolio",
          "pantera-capital-portfolio",
          "parafi-capital",
          "polygon-ecosystem",
          "fantom-ecosystem"
        ],
        "max_supply": 16000000,
        "circulating_supply": 13513744.09701791,
        "total_supply": 16000000,
        "platform": {
          "id": 1027,
          "name": "Ethereum",
          "symbol": "ETH",
          "slug": "ethereum",
          "token_address": "0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9"
        },
        "cmc_rank": 51,
        "self_reported_circulating_supply": null,
        "self_reported_market_cap": null,
        "last_updated": "2022-02-11T20:00:00.000Z",
        "quote": {
          "USD": {
            "price": 168.37814004386757,
            "volume_24h": 170138238.63362226,
            "volume_change_24h": -20.0913,
            "percent_change_1h": -1.94585969,
            "percent_change_24h": -5.6075306,
            "percent_change_7d": 2.93497758,
            "percent_change_30d": -23.04857145,
            "percent_change_60d": 4.68637815,
            "percent_change_90d": -45.61702153,
            "market_cap": 2275419096.0846705,
            "market_cap_dominance": 0.118,
            "fully_diluted_market_cap": 2694050240.7,
            "last_updated": "2022-02-11T20:00:00.000Z"
          }
        }
      },
      {
        "id": 7080,
        "name": "Gala",
        "symbol": "GALA",
        "slug": "gala",
        "num_market_pairs": 118,
        "date_added": "2020-09-16T00:00:00.000Z",
        "tags": [
          "collectibles-nfts",
          "gaming",
          "polygon-ecosystem",
          "play-to-earn"
        ],
        "max_supply": null,
        "circulating_supply": 6977205436,
        "total_supply": 35240112493,
        "platform": {
          "id": 1027,
          "name": "Ethereum",
          "symbol": "ETH",
          "slug": "ethereum",
          "token_address": "0x15D4c048F83bd7e37d49eA4C83a07267Ec4203dA"
        },
        "cmc_rank": 52,
        "self_reported_circulating_supply": null,
        "self_reported_market_cap": null,
        "last_updated": "2022-02-11T20:00:00.000Z",
        "quote": {
          "USD": {
            "price": 0.32268677448376526,
            "volume_24h": 1181847006.884829,
            "volume_change_24h": -24.7732,
            "percent_change_1h": -0.0520968,
            "percent_change_24h": -4.29129393,
            "percent_change_7d": 62.27912621,
            "percent_change_30d": -9.38397387,
            "percent_change_60d": -35.76596409,
            "percent_change_90d": 229.58818511,
            "market_cap": 2251451917.053433,
            "market_cap_dominance": 0.1169,
            "fully_diluted_market_cap": 11371518232.81,
            "last_updated": "2022-02-11T20:00:00.000Z"
          }
        }
      },
      {
        "id": 7186,
        "name": "PancakeSwap",
        "symbol": "CAKE",
        "slug": "pancakeswap",
        "num_market_pairs": 213,
        "date_added": "2020-09-25T00:00:00.000Z",
        "tags": [
          "decentralized-exchange",
          "defi",
          "yield-farming",
          "binance-chain",
          "amm",
          "binance-smart-chain"
        ],
        "max_supply": null,
        "circulating_supply": 267088997.05680642,
        "total_supply": 267088997.05680642,
        "platform": {
          "id": 1839,
          "name": "Binance Smart Chain (BEP20)",
          "symbol": "BNB",
          "slug": "bnb",
          "token_address": "0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82"
        },
        "cmc_rank": 53,
        "self_reported_circulating_supply": null,
        "self_reported_market_cap": null,
        "last_updated": "2022-02-11T20:00:00.000Z",
        "quote": {
          "USD": {
            "price": 7.922525439175647,
            "volume_24h": 179234040.88127494,
            "volume_change_24h": -3.5622,
            "percent_change_1h": -0.27607064,
            "percent_change_24h": -3.31649356,
            "percent_change_7d": 2.10818477,
            "percent_change_30d": -29.96387214,
            "percent_change_60d": -28.04909498,
            "percent_change_90d": -56.96156631,
            "market_cap": 2116019373.7064583,
            "market_cap_dominance": 0.1099,
            "fully_diluted_market_cap": 2116019373.71,
            "last_updated": "2022-02-11T20:00:00.000Z"
          }
        }
      },
      {
        "id": 16086,
        "name": "BitTorrent (New)",
        "symbol": "BTT",
        "slug": "bittorrent-new",
        "num_market_pairs": 36,
        "date_added": "2019-01-31T00:00:00.000Z",
        "tags": [
          "platform",
          "distributed-computing",
          "filesharing",
          "interoperability",
          "staking",
          "tron-ecosystem",
          "storage",
          "binance-smart-chain",
          "binance-launchpad",
          "binance-labs-portfolio",
          "web3"
        ],
        "max_supply": null,
        "circulating_supply": 932497500000000,
        "total_supply": 990000000000000,
        "platform": {
          "id": 1958,
          "name": "Tron20",
          "symbol": "TRX",
          "slug": "tron",
          "token_address": "TAFjULxiVgT4qWk6UZwjqwZXTSaGaqnVp4"
        },
        "cmc_rank": 54,
        "self_reported_circulating_supply": null,
        "self_reported_market_cap": null,
        "last_updated": "2022-02-11T20:00:00.000Z",
        "quote": {
          "USD": {
            "price": 0.000002202328701560551,
            "volume_24h": 49214433.35370577,
            "volume_change_24h": 12.8417,
            "percent_change_1h": -0.89620392,
            "percent_change_24h": -3.07774035,
            "percent_change_7d": -0.90071969,
            "percent_change_30d": -13.87553326,
            "percent_change_60d": -7.96514835,
            "percent_change_90d": -7.96514835,
            "market_cap": 2053666008.38346,
            "market_cap_dominance": 0.1066,
            "fully_diluted_market_cap": 2180305414.54,
            "last_updated": "2022-02-11T20:00:00.000Z"
          }
        }
      },
      {
        "id": 6719,
        "name": "The Graph",
        "symbol": "GRT",
        "slug": "the-graph",
        "num_market_pairs": 180,
        "date_added": "2020-12-17T00:00:00.000Z",
        "tags": [
          "ai-big-data",
          "enterprise-solutions",
          "defi",
          "binance-smart-chain",
          "coinbase-ventures-portfolio",
          "solana-ecosystem",
          "analytics",
          "coinfund-portfolio",
          "dcg-portfolio",
          "fabric-ventures-portfolio",
          "framework-ventures-portfolio",
          "ledgerprime-portfolio",
          "multicoin-capital-portfolio",
          "parafi-capital",
          "polygon-ecosystem",
          "fantom-ecosystem",
          "web3",
          "near-protocol-ecosystem",
          "spartan-group"
        ],
        "max_supply": 10057044431,
        "circulating_supply": 4715735200,
        "total_supply": 10000000000,
        "platform": {
          "id": 1027,
          "name": "Ethereum",
          "symbol": "ETH",
          "slug": "ethereum",
          "token_address": "0xc944e90c64b2c07662a292be6244bdf05cda44a7"
        },
        "cmc_rank": 55,
        "self_reported_circulating_supply": null,
        "self_reported_market_cap": null,
        "last_updated": "2022-02-11T20:00:00.000Z",
        "quote": {
          "USD": {
            "price": 0.43449968985965537,
            "volume_24h": 81246459.74390982,
            "volume_change_24h": -25.1106,
            "percent_change_1h": -2.14724874,
            "percent_change_24h": -6.33020151,
            "percent_change_7d": 0.84095323,
            "percent_change_30d": -26.58969898,
            "percent_change_60d": -27.35773643,
            "percent_change_90d": -60.10950842,
            "market_cap": 2048985481.8602598,
            "market_cap_dominance": 0.1063,
            "fully_diluted_market_cap": 4369782686.17,
            "last_updated": "2022-02-11T20:00:00.000Z"
          }
        }
      },
      {
        "id": 4847,
        "name": "Stacks",
        "symbol": "STX",
        "slug": "stacks",
        "num_market_pairs": 40,
        "date_added": "2019-10-28T00:00:00.000Z",
        "tags": [
          "arrington-xrp-capital-portfolio",
          "blockchain-capital-portfolio",
          "dcg-portfolio",
          "fabric-ventures-portfolio",
          "hashkey-capital-portfolio",
          "huobi-capital-portfolio",
          "usv-portfolio",
          "web3"
        ],
        "max_supply": 1818000000,
        "circulating_supply": 1297815458.067783,
        "total_supply": 1352464600,
        "platform": null,
        "cmc_rank": 56,
        "self_reported_circulating_supply": 1048765672.087772,
        "self_reported_market_cap": 1652262744.897749,
        "last_updated": "2022-02-11T20:00:00.000Z",
        "quote": {
          "USD": {
            "price": 1.5754355704726668,
            "volume_24h": 36502433.40760916,
            "volume_change_24h": -53.0595,
            "percent_change_1h": -0.88929305,
            "percent_change_24h": -4.64561631,
            "percent_change_7d": 3.78740975,
            "percent_change_30d": -26.67773803,
            "percent_change_60d": -17.71059154,
            "percent_change_90d": -31.8541391,
            "market_cap": 2044624636.5492632,
            "market_cap_dominance": 0.1061,
            "fully_diluted_market_cap": 2864141867.12,
            "last_updated": "2022-02-11T20:00:00.000Z"
          }
        }
      },
      {
        "id": 1518,
        "name": "Maker",
        "symbol": "MKR",
        "slug": "maker",
        "num_market_pairs": 235,
        "date_added": "2017-01-29T00:00:00.000Z",
        "tags": [
          "store-of-value",
          "defi",
          "dao",
          "binance-smart-chain",
          "polychain-capital-portfolio",
          "governance",
          "lending-borowing",
          "dragonfly-capital-portfolio",
          "electric-capital-portfolio",
          "a16z-portfolio",
          "1confirmation-portfolio",
          "placeholder-ventures-portfolio",
          "pantera-capital-portfolio",
          "paradigm-portfolio",
          "near-protocol-ecosystem",
          "spartan-group"
        ],
        "max_supply": 1005577,
        "circulating_supply": 977631.03695089,
        "total_supply": 977631.03695089,
        "platform": {
          "id": 1027,
          "name": "Ethereum",
          "symbol": "ETH",
          "slug": "ethereum",
          "token_address": "0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2"
        },
        "cmc_rank": 57,
        "self_reported_circulating_supply": null,
        "self_reported_market_cap": null,
        "last_updated": "2022-02-11T20:00:00.000Z",
        "quote": {
          "USD": {
            "price": 2007.1203375478094,
            "volume_24h": 75374491.09288004,
            "volume_change_24h": -4.1469,
            "percent_change_1h": -1.66787277,
            "percent_change_24h": -6.9686941,
            "percent_change_7d": -11.22734729,
            "percent_change_30d": -7.04284471,
            "percent_change_60d": -10.46463628,
            "percent_change_90d": -36.30291741,
            "market_cap": 1962223136.8820853,
            "market_cap_dominance": 0.1019,
            "fully_diluted_market_cap": 2018314047.67,
            "last_updated": "2022-02-11T20:00:00.000Z"
          }
        }
      },
      {
        "id": 3602,
        "name": "Bitcoin SV",
        "symbol": "BSV",
        "slug": "bitcoin-sv",
        "num_market_pairs": 168,
        "date_added": "2018-11-09T00:00:00.000Z",
        "tags": [
          "mineable",
          "pow",
          "sha-256",
          "medium-of-exchange",
          "store-of-value",
          "state-channel"
        ],
        "max_supply": 21000000,
        "circulating_supply": 18976557.89423905,
        "total_supply": 18976557.89423905,
        "platform": null,
        "cmc_rank": 58,
        "self_reported_circulating_supply": null,
        "self_reported_market_cap": null,
        "last_updated": "2022-02-11T20:00:00.000Z",
        "quote": {
          "USD": {
            "price": 96.75600679329871,
            "volume_24h": 97247171.32914236,
            "volume_change_24h": -14.7368,
            "percent_change_1h": -0.20537613,
            "percent_change_24h": -2.96096806,
            "percent_change_7d": 3.32121439,
            "percent_change_30d": -14.60214312,
            "percent_change_60d": -21.20566307,
            "percent_change_90d": -44.08237848,
            "market_cap": 1836095964.5284197,
            "market_cap_dominance": 0.0952,
            "fully_diluted_market_cap": 2031876142.66,
            "last_updated": "2022-02-11T20:00:00.000Z"
          }
        }
      },
      {
        "id": 1437,
        "name": "Zcash",
        "symbol": "ZEC",
        "slug": "zcash",
        "num_market_pairs": 242,
        "date_added": "2016-10-29T00:00:00.000Z",
        "tags": [
          "mineable",
          "pow",
          "equihash",
          "medium-of-exchange",
          "privacy",
          "zero-knowledge-proofs",
          "binance-chain",
          "binance-smart-chain",
          "boostvc-portfolio",
          "dcg-portfolio",
          "electric-capital-portfolio",
          "fenbushi-capital-portfolio",
          "hashkey-capital-portfolio",
          "winklevoss-capital-portfolio",
          "placeholder-ventures-portfolio",
          "pantera-capital-portfolio"
        ],
        "max_supply": 21000000,
        "circulating_supply": 13723787.5,
        "total_supply": 13723787.5,
        "platform": null,
        "cmc_rank": 59,
        "self_reported_circulating_supply": null,
        "self_reported_market_cap": null,
        "last_updated": "2022-02-11T20:00:00.000Z",
        "quote": {
          "USD": {
            "price": 122.71804562841747,
            "volume_24h": 373663518.5120086,
            "volume_change_24h": 22.0965,
            "percent_change_1h": -3.01500607,
            "percent_change_24h": -1.09476312,
            "percent_change_7d": 16.00089778,
            "percent_change_30d": -14.62748764,
            "percent_change_60d": -17.81590614,
            "percent_change_90d": -38.78698892,
            "market_cap": 1684156380.6197054,
            "market_cap_dominance": 0.0873,
            "fully_diluted_market_cap": 2577078958.2,
            "last_updated": "2022-02-11T20:00:00.000Z"
          }
        }
      },
      {
        "id": 1376,
        "name": "Neo",
        "symbol": "NEO",
        "slug": "neo",
        "num_market_pairs": 239,
        "date_added": "2016-09-08T00:00:00.000Z",
        "tags": [
          "platform",
          "enterprise-solutions",
          "smart-contracts"
        ],
        "max_supply": 100000000,
        "circulating_supply": 70538831,
        "total_supply": 100000000,
        "platform": null,
        "cmc_rank": 60,
        "self_reported_circulating_supply": null,
        "self_reported_market_cap": null,
        "last_updated": "2022-02-11T20:00:00.000Z",
        "quote": {
          "USD": {
            "price": 23.713021171009572,
            "volume_24h": 170510599.50954062,
            "volume_change_24h": -32.4001,
            "percent_change_1h": -1.26931574,
            "percent_change_24h": -3.49532329,
            "percent_change_7d": 6.67130298,
            "percent_change_30d": -3.92323176,
            "percent_change_60d": -6.29104662,
            "percent_change_90d": -51.45240211,
            "market_cap": 1672688792.8812664,
            "market_cap_dominance": 0.0868,
            "fully_diluted_market_cap": 2371302117.1,
            "last_updated": "2022-02-11T20:00:00.000Z"
          }
        }
      },
      {
        "id": 10791,
        "name": "eCash",
        "symbol": "XEC",
        "slug": "ecash",
        "num_market_pairs": 46,
        "date_added": "2021-07-08T00:00:00.000Z",
        "tags": [],
        "max_supply": 21000000000000,
        "circulating_supply": 18976510923313,
        "total_supply": 18899704673313,
        "platform": null,
        "cmc_rank": 61,
        "self_reported_circulating_supply": null,
        "self_reported_market_cap": null,
        "last_updated": "2022-02-11T20:00:00.000Z",
        "quote": {
          "USD": {
            "price": 0.00008781967922409909,
            "volume_24h": 24810426.53935643,
            "volume_change_24h": -37.4291,
            "percent_change_1h": -1.97569531,
            "percent_change_24h": -4.90256779,
            "percent_change_7d": 6.32482713,
            "percent_change_30d": -10.79478605,
            "percent_change_60d": -18.79018468,
            "percent_change_90d": -55.95830714,
            "market_cap": 1666511102.0779603,
            "market_cap_dominance": 0.0865,
            "fully_diluted_market_cap": 1844213263.71,
            "last_updated": "2022-02-11T20:00:00.000Z"
          }
        }
      },
      {
        "id": 2130,
        "name": "Enjin Coin",
        "symbol": "ENJ",
        "slug": "enjin-coin",
        "num_market_pairs": 220,
        "date_added": "2017-11-01T00:00:00.000Z",
        "tags": [
          "media",
          "collectibles-nfts",
          "gaming",
          "ethereum-ecosystem",
          "metaverse",
          "arrington-xrp-capital-portfolio"
        ],
        "max_supply": 1000000000,
        "circulating_supply": 854696205.567558,
        "total_supply": 1000000000,
        "platform": {
          "id": 1027,
          "name": "Ethereum",
          "symbol": "ETH",
          "slug": "ethereum",
          "token_address": "0xf629cbd94d3791c9250152bd8dfbdf380e2a3b9c"
        },
        "cmc_rank": 62,
        "self_reported_circulating_supply": null,
        "self_reported_market_cap": null,
        "last_updated": "2022-02-11T20:00:00.000Z",
        "quote": {
          "USD": {
            "price": 1.9033140704178166,
            "volume_24h": 225915056.28271696,
            "volume_change_24h": -21.7931,
            "percent_change_1h": -1.89583983,
            "percent_change_24h": -5.77926835,
            "percent_change_7d": 4.60061248,
            "percent_change_30d": -23.58448757,
            "percent_change_60d": -18.60065827,
            "percent_change_90d": -38.33667013,
            "market_cap": 1626755313.989452,
            "market_cap_dominance": 0.0844,
            "fully_diluted_market_cap": 1903314070.42,
            "last_updated": "2022-02-11T20:00:00.000Z"
          }
        }
      },
      {
        "id": 3155,
        "name": "Quant",
        "symbol": "QNT",
        "slug": "quant",
        "num_market_pairs": 77,
        "date_added": "2018-08-10T00:00:00.000Z",
        "tags": [
          "platform",
          "interoperability"
        ],
        "max_supply": 14612493,
        "circulating_supply": 12072738,
        "total_supply": 14612493.080826,
        "platform": {
          "id": 1027,
          "name": "Ethereum",
          "symbol": "ETH",
          "slug": "ethereum",
          "token_address": "0x4a220e6096b25eadb88358cb44068a3248254675"
        },
        "cmc_rank": 63,
        "self_reported_circulating_supply": null,
        "self_reported_market_cap": null,
        "last_updated": "2022-02-11T20:00:00.000Z",
        "quote": {
          "USD": {
            "price": 132.73315510983178,
            "volume_24h": 53069921.35263368,
            "volume_change_24h": -5.0052,
            "percent_change_1h": -2.90067583,
            "percent_change_24h": -9.07837372,
            "percent_change_7d": -2.14113172,
            "percent_change_30d": -22.48691368,
            "percent_change_60d": -24.3156717,
            "percent_change_90d": -49.42698914,
            "market_cap": 1602452605.5543604,
            "market_cap_dominance": 0.0831,
            "fully_diluted_market_cap": 1939562299.91,
            "last_updated": "2022-02-11T20:00:00.000Z"
          }
        }
      },
      {
        "id": 2087,
        "name": "KuCoin Token",
        "symbol": "KCS",
        "slug": "kucoin-token",
        "num_market_pairs": 35,
        "date_added": "2017-10-24T00:00:00.000Z",
        "tags": [
          "marketplace",
          "centralized-exchange",
          "discount-token",
          "algorand-ecosystem"
        ],
        "max_supply": 170118638,
        "circulating_supply": 80118638,
        "total_supply": 170118638,
        "platform": {
          "id": 1027,
          "name": "Ethereum",
          "symbol": "ETH",
          "slug": "ethereum",
          "token_address": "0xf34960d9d60be18cc1d5afc1a6f012a723a28811"
        },
        "cmc_rank": 64,
        "self_reported_circulating_supply": null,
        "self_reported_market_cap": null,
        "last_updated": "2022-02-11T20:00:00.000Z",
        "quote": {
          "USD": {
            "price": 19.793072315656914,
            "volume_24h": 10743830.3385728,
            "volume_change_24h": -33.1446,
            "percent_change_1h": -1.32792322,
            "percent_change_24h": -3.41613784,
            "percent_change_7d": 2.18083611,
            "percent_change_30d": -2.93948794,
            "percent_change_60d": 2.82509368,
            "percent_change_90d": -14.53214313,
            "market_cap": 1585793995.765938,
            "market_cap_dominance": 0.0822,
            "fully_diluted_market_cap": 3367170504.18,
            "last_updated": "2022-02-11T20:00:00.000Z"
          }
        }
      },
      {
        "id": 2502,
        "name": "Huobi Token",
        "symbol": "HT",
        "slug": "huobi-token",
        "num_market_pairs": 108,
        "date_added": "2018-02-03T00:00:00.000Z",
        "tags": [
          "marketplace",
          "centralized-exchange",
          "discount-token",
          "payments",
          "algorand-ecosystem",
          "kenetic-capital-portfolio",
          "alameda-research-portfolio",
          "multicoin-capital-portfolio"
        ],
        "max_supply": 500000000,
        "circulating_supply": 156741729.25441208,
        "total_supply": 500000000,
        "platform": {
          "id": 1027,
          "name": "Ethereum",
          "symbol": "ETH",
          "slug": "ethereum",
          "token_address": "0x6f259637dcd74c767781e37bc6133cd6a68aa161"
        },
        "cmc_rank": 65,
        "self_reported_circulating_supply": null,
        "self_reported_market_cap": null,
        "last_updated": "2022-02-11T20:00:00.000Z",
        "quote": {
          "USD": {
            "price": 9.932178912477088,
            "volume_24h": 42606363.9324391,
            "volume_change_24h": -5.0863,
            "percent_change_1h": -0.04176645,
            "percent_change_24h": -0.31283898,
            "percent_change_7d": 4.27917171,
            "percent_change_30d": 5.00725712,
            "percent_change_60d": 9.16634196,
            "percent_change_90d": 1.27070456,
            "market_cap": 1556786898.0058649,
            "market_cap_dominance": 0.0808,
            "fully_diluted_market_cap": 4966089456.24,
            "last_updated": "2022-02-11T20:00:00.000Z"
          }
        }
      },
      {
        "id": 2563,
        "name": "TrueUSD",
        "symbol": "TUSD",
        "slug": "trueusd",
        "num_market_pairs": 226,
        "date_added": "2018-03-06T00:00:00.000Z",
        "tags": [
          "store-of-value",
          "stablecoin",
          "asset-backed-stablecoin",
          "binance-smart-chain",
          "avalanche-ecosystem"
        ],
        "max_supply": null,
        "circulating_supply": 1479093383.610991,
        "total_supply": 1479093383.610991,
        "platform": {
          "id": 1839,
          "name": "Binance Chain (BEP2)",
          "symbol": "BNB",
          "slug": "bnb",
          "token_address": "TUSDB-888"
        },
        "cmc_rank": 66,
        "self_reported_circulating_supply": null,
        "self_reported_market_cap": null,
        "last_updated": "2022-02-11T20:00:00.000Z",
        "quote": {
          "USD": {
            "price": 0.9998945827428634,
            "volume_24h": 125613677.64504068,
            "volume_change_24h": -32.3144,
            "percent_change_1h": 0.01151211,
            "percent_change_24h": 0.03689899,
            "percent_change_7d": 0.02808163,
            "percent_change_30d": -0.13753003,
            "percent_change_60d": -0.04432944,
            "percent_change_90d": 0.13976336,
            "market_cap": 1478937461.6434417,
            "market_cap_dominance": 0.0768,
            "fully_diluted_market_cap": 1478937461.64,
            "last_updated": "2022-02-11T20:00:00.000Z"
          }
        }
      },
      {
        "id": 5034,
        "name": "Kusama",
        "symbol": "KSM",
        "slug": "kusama",
        "num_market_pairs": 119,
        "date_added": "2019-12-12T00:00:00.000Z",
        "tags": [
          "substrate",
          "polkadot-ecosystem",
          "cms-holdings-portfolio",
          "kenetic-capital-portfolio",
          "1confirmation-portfolio",
          "vbc-ventures-portfolio"
        ],
        "max_supply": null,
        "circulating_supply": 8470098.05726206,
        "total_supply": 9651217.45126206,
        "platform": null,
        "cmc_rank": 67,
        "self_reported_circulating_supply": 8597992,
        "self_reported_market_cap": 1475629806.1002166,
        "last_updated": "2022-02-11T20:00:00.000Z",
        "quote": {
          "USD": {
            "price": 171.62493360080083,
            "volume_24h": 48297224.12059098,
            "volume_change_24h": -34.6681,
            "percent_change_1h": -2.12301584,
            "percent_change_24h": -5.02869151,
            "percent_change_7d": -3.88804621,
            "percent_change_30d": -37.4977416,
            "percent_change_60d": -37.4797361,
            "percent_change_90d": -59.75476316,
            "market_cap": 1453680016.669873,
            "market_cap_dominance": 0.0754,
            "fully_diluted_market_cap": 1656389554.24,
            "last_updated": "2022-02-11T20:00:00.000Z"
          }
        }
      },
      {
        "id": 6945,
        "name": "Amp",
        "symbol": "AMP",
        "slug": "amp",
        "num_market_pairs": 65,
        "date_added": "2020-09-08T00:00:00.000Z",
        "tags": [],
        "max_supply": 92547638199,
        "circulating_supply": 42227702186,
        "total_supply": 99213408535,
        "platform": {
          "id": 1027,
          "name": "Ethereum",
          "symbol": "ETH",
          "slug": "ethereum",
          "token_address": "0xff20817765cb7f73d4bde2e66e067e58d11095c2"
        },
        "cmc_rank": 68,
        "self_reported_circulating_supply": 36271610691,
        "self_reported_market_cap": 1232632113.248873,
        "last_updated": "2022-02-11T20:00:00.000Z",
        "quote": {
          "USD": {
            "price": 0.033983385070757925,
            "volume_24h": 100480109.14617418,
            "volume_change_24h": 518.6404,
            "percent_change_1h": -2.89563254,
            "percent_change_24h": 10.84383581,
            "percent_change_7d": 10.62376158,
            "percent_change_30d": -20.40351324,
            "percent_change_60d": -31.41066458,
            "percent_change_90d": -41.93117318,
            "market_cap": 1435040264.0401242,
            "market_cap_dominance": 0.0744,
            "fully_diluted_market_cap": 3145082026.31,
            "last_updated": "2022-02-11T20:00:00.000Z"
          }
        }
      },
      {
        "id": 4157,
        "name": "THORChain",
        "symbol": "RUNE",
        "slug": "thorchain",
        "num_market_pairs": 68,
        "date_added": "2019-07-23T00:00:00.000Z",
        "tags": [
          "cosmos-ecosystem",
          "decentralized-exchange",
          "defi",
          "multicoin-capital-portfolio",
          "exnetwork-capital-portfolio"
        ],
        "max_supply": 500000000,
        "circulating_supply": 330688061.33445597,
        "total_supply": 334937974.91478544,
        "platform": {
          "id": 1839,
          "name": "Binance Chain (BEP2)",
          "symbol": "BNB",
          "slug": "bnb",
          "token_address": "RUNE-B1A"
        },
        "cmc_rank": 69,
        "self_reported_circulating_supply": 224410215,
        "self_reported_market_cap": 957565330.9005139,
        "last_updated": "2022-02-11T20:00:00.000Z",
        "quote": {
          "USD": {
            "price": 4.267030941084896,
            "volume_24h": 64478159.55481531,
            "volume_change_24h": 5.817,
            "percent_change_1h": -1.13731821,
            "percent_change_24h": -8.16696315,
            "percent_change_7d": 1.81418524,
            "percent_change_30d": -37.09288995,
            "percent_change_60d": -30.9620846,
            "percent_change_90d": -66.48939675,
            "market_cap": 1411056189.5615036,
            "market_cap_dominance": 0.0733,
            "fully_diluted_market_cap": 2133515470.54,
            "last_updated": "2022-02-11T20:00:00.000Z"
          }
        }
      },
      {
        "id": 1934,
        "name": "Loopring",
        "symbol": "LRC",
        "slug": "loopring",
        "num_market_pairs": 177,
        "date_added": "2017-08-30T00:00:00.000Z",
        "tags": [
          "marketplace",
          "decentralized-exchange",
          "defi",
          "scaling",
          "rollups"
        ],
        "max_supply": 1374513896,
        "circulating_supply": 1329247432.8078947,
        "total_supply": 1373873440.4424574,
        "platform": {
          "id": 1027,
          "name": "Ethereum",
          "symbol": "ETH",
          "slug": "ethereum",
          "token_address": "0xbbbbca6a901c926f240b89eacb641d8aec7aeafd"
        },
        "cmc_rank": 70,
        "self_reported_circulating_supply": null,
        "self_reported_market_cap": null,
        "last_updated": "2022-02-11T20:00:00.000Z",
        "quote": {
          "USD": {
            "price": 1.0307380680442326,
            "volume_24h": 312687372.8290915,
            "volume_change_24h": -4.4446,
            "percent_change_1h": 0.58577566,
            "percent_change_24h": -0.8151956,
            "percent_change_7d": 14.50022365,
            "percent_change_30d": -36.28419888,
            "percent_change_60d": -51.46210083,
            "percent_change_90d": -62.04785479,
            "market_cap": 1370105930.8451653,
            "market_cap_dominance": 0.0711,
            "fully_diluted_market_cap": 1416763797.66,
            "last_updated": "2022-02-11T20:00:00.000Z"
          }
        }
      },
      {
        "id": 5647,
        "name": "Kadena",
        "symbol": "KDA",
        "slug": "kadena",
        "num_market_pairs": 17,
        "date_added": "2020-05-31T00:00:00.000Z",
        "tags": [
          "mineable",
          "pow",
          "blake2s",
          "platform",
          "cosmos-ecosystem",
          "smart-contracts",
          "coinfund-portfolio",
          "multicoin-capital-portfolio"
        ],
        "max_supply": 1000000000,
        "circulating_supply": 167816065.8932,
        "total_supply": 1000000000,
        "platform": null,
        "cmc_rank": 71,
        "self_reported_circulating_supply": 167816065.8932,
        "self_reported_market_cap": 1329051206.340721,
        "last_updated": "2022-02-11T20:00:00.000Z",
        "quote": {
          "USD": {
            "price": 7.919689925197887,
            "volume_24h": 85579109.17790239,
            "volume_change_24h": -40.3866,
            "percent_change_1h": -1.51447116,
            "percent_change_24h": -9.13769246,
            "percent_change_7d": 30.9774123,
            "percent_change_30d": -20.97751889,
            "percent_change_60d": -11.97845734,
            "percent_change_90d": -64.74598277,
            "market_cap": 1329051206.340721,
            "market_cap_dominance": 0.069,
            "fully_diluted_market_cap": 7919689925.2,
            "last_updated": "2022-02-11T20:00:00.000Z"
          }
        }
      },
      {
        "id": 6538,
        "name": "Curve DAO Token",
        "symbol": "CRV",
        "slug": "curve-dao-token",
        "num_market_pairs": 230,
        "date_added": "2020-08-14T00:00:00.000Z",
        "tags": [
          "decentralized-exchange",
          "defi",
          "dao",
          "yield-farming",
          "amm",
          "governance",
          "framework-ventures-portfolio",
          "alameda-research-portfolio",
          "polygon-ecosystem",
          "fantom-ecosystem"
        ],
        "max_supply": 3303030299,
        "circulating_supply": 443362570.307976,
        "total_supply": 1688001662.8779325,
        "platform": {
          "id": 1027,
          "name": "Ethereum",
          "symbol": "ETH",
          "slug": "ethereum",
          "token_address": "0xD533a949740bb3306d119CC777fa900bA034cd52"
        },
        "cmc_rank": 72,
        "self_reported_circulating_supply": null,
        "self_reported_market_cap": null,
        "last_updated": "2022-02-11T20:00:00.000Z",
        "quote": {
          "USD": {
            "price": 2.977996061666145,
            "volume_24h": 301335428.62076217,
            "volume_change_24h": -13.2287,
            "percent_change_1h": -2.73327621,
            "percent_change_24h": -9.21863096,
            "percent_change_7d": -11.87090083,
            "percent_change_30d": -39.36963722,
            "percent_change_60d": -10.73207976,
            "percent_change_90d": -28.96700982,
            "market_cap": 1320331988.2673318,
            "market_cap_dominance": 0.0685,
            "fully_diluted_market_cap": 9836411221.99,
            "last_updated": "2022-02-11T20:00:00.000Z"
          }
        }
      },
      {
        "id": 3897,
        "name": "OKB",
        "symbol": "OKB",
        "slug": "okb",
        "num_market_pairs": 58,
        "date_added": "2019-04-30T00:00:00.000Z",
        "tags": [
          "marketplace",
          "centralized-exchange",
          "discount-token",
          "alameda-research-portfolio"
        ],
        "max_supply": null,
        "circulating_supply": 60000000,
        "total_supply": 300000000,
        "platform": {
          "id": 1027,
          "name": "Ethereum",
          "symbol": "ETH",
          "slug": "ethereum",
          "token_address": "0x75231f58b43240c9718dd58b4967c5114342a86c"
        },
        "cmc_rank": 73,
        "self_reported_circulating_supply": null,
        "self_reported_market_cap": null,
        "last_updated": "2022-02-11T20:00:00.000Z",
        "quote": {
          "USD": {
            "price": 21.602507741585605,
            "volume_24h": 107031735.53349593,
            "volume_change_24h": 20.4596,
            "percent_change_1h": -0.08746173,
            "percent_change_24h": -4.01060657,
            "percent_change_7d": -1.39039839,
            "percent_change_30d": -17.39679372,
            "percent_change_60d": -18.36164341,
            "percent_change_90d": -20.46844445,
            "market_cap": 1296150464.4951363,
            "market_cap_dominance": 0.0672,
            "fully_diluted_market_cap": 6480752322.48,
            "last_updated": "2022-02-11T20:00:00.000Z"
          }
        }
      },
      {
        "id": 4066,
        "name": "Chiliz",
        "symbol": "CHZ",
        "slug": "chiliz",
        "num_market_pairs": 224,
        "date_added": "2019-07-01T00:00:00.000Z",
        "tags": [
          "sports",
          "collectibles-nfts",
          "content-creation",
          "payments"
        ],
        "max_supply": 8888888888,
        "circulating_supply": 5975068035.1118145,
        "total_supply": 8888888888,
        "platform": {
          "id": 1027,
          "name": "Ethereum",
          "symbol": "ETH",
          "slug": "ethereum",
          "token_address": "0x3506424f91fd33084466f402d5d97f05f8e3b4af"
        },
        "cmc_rank": 74,
        "self_reported_circulating_supply": null,
        "self_reported_market_cap": null,
        "last_updated": "2022-02-11T20:00:00.000Z",
        "quote": {
          "USD": {
            "price": 0.2141126908848408,
            "volume_24h": 175554773.51600158,
            "volume_change_24h": -48.0914,
            "percent_change_1h": -1.49510254,
            "percent_change_24h": -7.2227145,
            "percent_change_7d": 8.75934783,
            "percent_change_30d": -22.28652648,
            "percent_change_60d": -21.18904953,
            "percent_change_90d": -60.30487899,
            "market_cap": 1279337895.2177892,
            "market_cap_dominance": 0.0664,
            "fully_diluted_market_cap": 1903223918.79,
            "last_updated": "2022-02-11T20:00:00.000Z"
          }
        }
      },
      {
        "id": 1697,
        "name": "Basic Attention Token",
        "symbol": "BAT",
        "slug": "basic-attention-token",
        "num_market_pairs": 280,
        "date_added": "2017-06-01T00:00:00.000Z",
        "tags": [
          "marketing",
          "content-creation",
          "defi",
          "payments",
          "binance-smart-chain",
          "dcg-portfolio",
          "1confirmation-portfolio",
          "pantera-capital-portfolio",
          "web3"
        ],
        "max_supply": 1500000000,
        "circulating_supply": 1495079069.4473505,
        "total_supply": 1500000000,
        "platform": {
          "id": 1027,
          "name": "Ethereum",
          "symbol": "ETH",
          "slug": "ethereum",
          "token_address": "0x0d8775f648430679a709e98d2b0cb6250d2887ef"
        },
        "cmc_rank": 75,
        "self_reported_circulating_supply": null,
        "self_reported_market_cap": null,
        "last_updated": "2022-02-11T20:00:00.000Z",
        "quote": {
          "USD": {
            "price": 0.845945656065762,
            "volume_24h": 117400693.64396621,
            "volume_change_24h": -11.6975,
            "percent_change_1h": -1.06702231,
            "percent_change_24h": -5.93835975,
            "percent_change_7d": -3.354781,
            "percent_change_30d": -23.64124283,
            "percent_change_60d": -18.74809665,
            "percent_change_90d": -26.41252402,
            "market_cap": 1264755644.2738278,
            "market_cap_dominance": 0.0656,
            "fully_diluted_market_cap": 1268918484.1,
            "last_updated": "2022-02-11T20:00:00.000Z"
          }
        }
      },
      {
        "id": 5567,
        "name": "Celo",
        "symbol": "CELO",
        "slug": "celo",
        "num_market_pairs": 79,
        "date_added": "2020-05-22T00:00:00.000Z",
        "tags": [
          "pos",
          "zero-knowledge-proofs",
          "mobile",
          "payments",
          "smart-contracts",
          "coinbase-ventures-portfolio",
          "polychain-capital-portfolio",
          "dragonfly-capital-portfolio",
          "electric-capital-portfolio",
          "a16z-portfolio",
          "celo-ecosystem"
        ],
        "max_supply": 1000000000,
        "circulating_supply": 407486151,
        "total_supply": 1000000000,
        "platform": null,
        "cmc_rank": 76,
        "self_reported_circulating_supply": null,
        "self_reported_market_cap": null,
        "last_updated": "2022-02-11T20:00:00.000Z",
        "quote": {
          "USD": {
            "price": 3.0795198847757135,
            "volume_24h": 93438293.16146551,
            "volume_change_24h": -18.8885,
            "percent_change_1h": -1.16072546,
            "percent_change_24h": -3.7629597,
            "percent_change_7d": -3.61659845,
            "percent_change_30d": -37.54077867,
            "percent_change_60d": -11.01992244,
            "percent_change_90d": -47.38044719,
            "market_cap": 1254861704.775219,
            "market_cap_dominance": 0.0651,
            "fully_diluted_market_cap": 3079519884.78,
            "last_updated": "2022-02-11T20:00:00.000Z"
          }
        }
      },
      {
        "id": 9903,
        "name": "Convex Finance",
        "symbol": "CVX",
        "slug": "convex-finance",
        "num_market_pairs": 86,
        "date_added": "2021-05-18T00:00:00.000Z",
        "tags": [
          "defi",
          "yield-aggregator"
        ],
        "max_supply": 100000000,
        "circulating_supply": 49500358.94666454,
        "total_supply": 83952812.03852113,
        "platform": {
          "id": 1027,
          "name": "Ethereum",
          "symbol": "ETH",
          "slug": "ethereum",
          "token_address": "0x4e3fbd56cd56c3e72c1403e103b45db9da5b9d2b"
        },
        "cmc_rank": 77,
        "self_reported_circulating_supply": 2814665,
        "self_reported_market_cap": 71078018.07263969,
        "last_updated": "2022-02-11T20:00:00.000Z",
        "quote": {
          "USD": {
            "price": 25.252745201521208,
            "volume_24h": 23140052.29381148,
            "volume_change_24h": -8.6702,
            "percent_change_1h": -0.77677416,
            "percent_change_24h": -8.44493527,
            "percent_change_7d": -14.69076208,
            "percent_change_30d": -42.35414109,
            "percent_change_60d": -2.25557998,
            "percent_change_90d": -21.23298824,
            "market_cap": 1250019951.8639605,
            "market_cap_dominance": 0.0648,
            "fully_diluted_market_cap": 2525274520.15,
            "last_updated": "2022-02-11T20:00:00.000Z"
          }
        }
      },
      {
        "id": 131,
        "name": "Dash",
        "symbol": "DASH",
        "slug": "dash",
        "num_market_pairs": 325,
        "date_added": "2014-02-14T00:00:00.000Z",
        "tags": [
          "mineable",
          "hybrid-pow-pos",
          "x11",
          "medium-of-exchange",
          "masternodes",
          "dao",
          "governance"
        ],
        "max_supply": 18900000,
        "circulating_supply": 10574256.68267523,
        "total_supply": 10574256.68267523,
        "platform": null,
        "cmc_rank": 78,
        "self_reported_circulating_supply": null,
        "self_reported_market_cap": null,
        "last_updated": "2022-02-11T20:00:00.000Z",
        "quote": {
          "USD": {
            "price": 109.12792722981604,
            "volume_24h": 182200388.9948636,
            "volume_change_24h": -11.0777,
            "percent_change_1h": -1.68831357,
            "percent_change_24h": -2.88916824,
            "percent_change_7d": 7.71120951,
            "percent_change_30d": -24.00605513,
            "percent_change_60d": -13.40519301,
            "percent_change_90d": -51.83903435,
            "market_cap": 1153946713.7763784,
            "market_cap_dominance": 0.0599,
            "fully_diluted_market_cap": 2062517824.64,
            "last_updated": "2022-02-11T20:00:00.000Z"
          }
        }
      },
      {
        "id": 7653,
        "name": "Oasis Network",
        "symbol": "ROSE",
        "slug": "oasis-network",
        "num_market_pairs": 42,
        "date_added": "2020-11-12T00:00:00.000Z",
        "tags": [
          "cosmos-ecosystem",
          "collectibles-nfts",
          "defi",
          "privacy",
          "scaling",
          "smart-contracts",
          "polychain-capital-portfolio",
          "binance-labs-portfolio",
          "arrington-xrp-capital-portfolio",
          "blockchain-capital-portfolio",
          "dragonfly-capital-portfolio",
          "electric-capital-portfolio",
          "kenetic-capital-portfolio",
          "huobi-capital-portfolio",
          "a16z-portfolio",
          "winklevoss-capital-portfolio",
          "pantera-capital-portfolio"
        ],
        "max_supply": 10000000000,
        "circulating_supply": 3493014306.28,
        "total_supply": 10000000000,
        "platform": null,
        "cmc_rank": 79,
        "self_reported_circulating_supply": null,
        "self_reported_market_cap": null,
        "last_updated": "2022-02-11T20:00:00.000Z",
        "quote": {
          "USD": {
            "price": 0.3279852527011933,
            "volume_24h": 194598932.6714387,
            "volume_change_24h": -25.6865,
            "percent_change_1h": -1.97464307,
            "percent_change_24h": -6.39290749,
            "percent_change_7d": -7.17485135,
            "percent_change_30d": -33.06843935,
            "percent_change_60d": 20.18113504,
            "percent_change_90d": 43.16525932,
            "market_cap": 1145657179.9341292,
            "market_cap_dominance": 0.0594,
            "fully_diluted_market_cap": 3279852527.01,
            "last_updated": "2022-02-11T20:00:00.000Z"
          }
        }
      },
      {
        "id": 2694,
        "name": "Nexo",
        "symbol": "NEXO",
        "slug": "nexo",
        "num_market_pairs": 57,
        "date_added": "2018-05-01T00:00:00.000Z",
        "tags": [
          "services",
          "payments",
          "cardano-ecosystem"
        ],
        "max_supply": 1000000000,
        "circulating_supply": 560000011,
        "total_supply": 1000000000,
        "platform": {
          "id": 1027,
          "name": "Ethereum",
          "symbol": "ETH",
          "slug": "ethereum",
          "token_address": "0xb62132e35a6c13ee1ee0f84dc5d40bad8d815206"
        },
        "cmc_rank": 80,
        "self_reported_circulating_supply": null,
        "self_reported_market_cap": null,
        "last_updated": "2022-02-11T20:00:00.000Z",
        "quote": {
          "USD": {
            "price": 2.0389100654166854,
            "volume_24h": 13179007.36572391,
            "volume_change_24h": 74.5547,
            "percent_change_1h": -1.151862,
            "percent_change_24h": -9.89391109,
            "percent_change_7d": -7.79579515,
            "percent_change_30d": -14.30052346,
            "percent_change_60d": -7.82068041,
            "percent_change_90d": -37.10425386,
            "market_cap": 1141789659.0613546,
            "market_cap_dominance": 0.0592,
            "fully_diluted_market_cap": 2038910065.42,
            "last_updated": "2022-02-11T20:00:00.000Z"
          }
        }
      },
      {
        "id": 5632,
        "name": "Arweave",
        "symbol": "AR",
        "slug": "arweave",
        "num_market_pairs": 47,
        "date_added": "2020-05-27T00:00:00.000Z",
        "tags": [
          "distributed-computing",
          "filesharing",
          "storage",
          "coinbase-ventures-portfolio",
          "solana-ecosystem",
          "arrington-xrp-capital-portfolio",
          "blockchain-capital-portfolio",
          "a16z-portfolio",
          "multicoin-capital-portfolio",
          "web3"
        ],
        "max_supply": 66000000,
        "circulating_supply": 33394701,
        "total_supply": 63190435,
        "platform": null,
        "cmc_rank": 81,
        "self_reported_circulating_supply": null,
        "self_reported_market_cap": null,
        "last_updated": "2022-02-11T20:00:00.000Z",
        "quote": {
          "USD": {
            "price": 33.78589393799457,
            "volume_24h": 68185483.21288316,
            "volume_change_24h": -48.0926,
            "percent_change_1h": -0.36481429,
            "percent_change_24h": -7.87821601,
            "percent_change_7d": -11.93273459,
            "percent_change_30d": -35.8064528,
            "percent_change_60d": -6.69843314,
            "percent_change_90d": -52.44135476,
            "market_cap": 1128269826.0770414,
            "market_cap_dominance": 0.0586,
            "fully_diluted_market_cap": 2229868999.91,
            "last_updated": "2022-02-11T20:00:00.000Z"
          }
        }
      },
      {
        "id": 3822,
        "name": "Theta Fuel",
        "symbol": "TFUEL",
        "slug": "theta-fuel",
        "num_market_pairs": 30,
        "date_added": "2019-03-28T00:00:00.000Z",
        "tags": [
          "media",
          "content-creation",
          "payments"
        ],
        "max_supply": null,
        "circulating_supply": 5301214400,
        "total_supply": 5301214400,
        "platform": null,
        "cmc_rank": 82,
        "self_reported_circulating_supply": null,
        "self_reported_market_cap": null,
        "last_updated": "2022-02-11T20:00:00.000Z",
        "quote": {
          "USD": {
            "price": 0.21020170244778266,
            "volume_24h": 96459042.98262195,
            "volume_change_24h": -37.9665,
            "percent_change_1h": -0.41422995,
            "percent_change_24h": -5.45946066,
            "percent_change_7d": 20.33367113,
            "percent_change_30d": 15.55881523,
            "percent_change_60d": 5.41994546,
            "percent_change_90d": -38.69797308,
            "market_cap": 1114324291.9207008,
            "market_cap_dominance": 0.0578,
            "fully_diluted_market_cap": 1114324291.92,
            "last_updated": "2022-02-11T20:00:00.000Z"
          }
        }
      },
      {
        "id": 1274,
        "name": "Waves",
        "symbol": "WAVES",
        "slug": "waves",
        "num_market_pairs": 157,
        "date_added": "2016-06-02T00:00:00.000Z",
        "tags": [
          "lpos",
          "platform",
          "smart-contracts"
        ],
        "max_supply": null,
        "circulating_supply": 107466244,
        "total_supply": 107466244,
        "platform": null,
        "cmc_rank": 83,
        "self_reported_circulating_supply": null,
        "self_reported_market_cap": null,
        "last_updated": "2022-02-11T20:00:00.000Z",
        "quote": {
          "USD": {
            "price": 10.259770316851084,
            "volume_24h": 169162985.50011,
            "volume_change_24h": -45.8094,
            "percent_change_1h": -0.8821548,
            "percent_change_24h": -7.99837417,
            "percent_change_7d": 11.73038018,
            "percent_change_30d": -30.33816804,
            "percent_change_60d": -30.33092477,
            "percent_change_90d": -56.64524537,
            "market_cap": 1102578980.2546759,
            "market_cap_dominance": 0.0572,
            "fully_diluted_market_cap": 1102578980.25,
            "last_updated": "2022-02-11T20:00:00.000Z"
          }
        }
      },
      {
        "id": 2777,
        "name": "IoTeX",
        "symbol": "IOTX",
        "slug": "iotex",
        "num_market_pairs": 73,
        "date_added": "2018-05-25T00:00:00.000Z",
        "tags": [
          "platform",
          "iot",
          "binance-smart-chain",
          "hashkey-capital-portfolio",
          "kenetic-capital-portfolio",
          "iotex-ecosystem"
        ],
        "max_supply": 10000000000,
        "circulating_supply": 9540779324.30788,
        "total_supply": 9626124332.32,
        "platform": null,
        "cmc_rank": 84,
        "self_reported_circulating_supply": 6116124331.505642,
        "self_reported_market_cap": 665076984.4545568,
        "last_updated": "2022-02-11T20:00:00.000Z",
        "quote": {
          "USD": {
            "price": 0.10874157365123918,
            "volume_24h": 241283282.93678525,
            "volume_change_24h": 98.5022,
            "percent_change_1h": -1.72767595,
            "percent_change_24h": 5.54509129,
            "percent_change_7d": 38.66771952,
            "percent_change_30d": 2.71385969,
            "percent_change_60d": 3.55137196,
            "percent_change_90d": -55.4618162,
            "market_cap": 1037479357.5844454,
            "market_cap_dominance": 0.0538,
            "fully_diluted_market_cap": 1087415736.51,
            "last_updated": "2022-02-11T20:00:00.000Z"
          }
        }
      },
      {
        "id": 873,
        "name": "NEM",
        "symbol": "XEM",
        "slug": "nem",
        "num_market_pairs": 120,
        "date_added": "2015-04-01T00:00:00.000Z",
        "tags": [
          "poi",
          "medium-of-exchange",
          "payments",
          "smart-contracts",
          "fantom-ecosystem"
        ],
        "max_supply": 8999999999,
        "circulating_supply": 8999999999,
        "total_supply": 8999999999,
        "platform": null,
        "cmc_rank": 85,
        "self_reported_circulating_supply": null,
        "self_reported_market_cap": null,
        "last_updated": "2022-02-11T20:00:00.000Z",
        "quote": {
          "USD": {
            "price": 0.11267910222572937,
            "volume_24h": 22817268.74782743,
            "volume_change_24h": -29.9089,
            "percent_change_1h": -0.89305428,
            "percent_change_24h": -2.4435071,
            "percent_change_7d": 4.20533611,
            "percent_change_30d": -5.39686617,
            "percent_change_60d": -7.36976217,
            "percent_change_90d": -41.31798039,
            "market_cap": 1014111919.9188852,
            "market_cap_dominance": 0.0526,
            "fully_diluted_market_cap": 1014111919.92,
            "last_updated": "2022-02-11T20:00:00.000Z"
          }
        }
      },
      {
        "id": 5604,
        "name": "Secret",
        "symbol": "SCRT",
        "slug": "secret",
        "num_market_pairs": 28,
        "date_added": "2020-05-19T00:00:00.000Z",
        "tags": [
          "cosmos-ecosystem",
          "defi",
          "privacy"
        ],
        "max_supply": null,
        "circulating_supply": 149815729,
        "total_supply": 190165060,
        "platform": null,
        "cmc_rank": 86,
        "self_reported_circulating_supply": null,
        "self_reported_market_cap": null,
        "last_updated": "2022-02-11T20:00:00.000Z",
        "quote": {
          "USD": {
            "price": 6.736706155061549,
            "volume_24h": 40936338.84353634,
            "volume_change_24h": -53.1365,
            "percent_change_1h": -0.75983037,
            "percent_change_24h": -1.95537028,
            "percent_change_7d": 21.41177572,
            "percent_change_30d": 1.02095205,
            "percent_change_60d": 70.41675188,
            "percent_change_90d": -11.98959427,
            "market_cap": 1009264543.6793331,
            "market_cap_dominance": 0.0523,
            "fully_diluted_market_cap": 1281086130.18,
            "last_updated": "2022-02-11T20:00:00.000Z"
          }
        }
      },
      {
        "id": 8677,
        "name": "Symbol",
        "symbol": "XYM",
        "slug": "symbol",
        "num_market_pairs": 34,
        "date_added": "2021-03-03T00:00:00.000Z",
        "tags": [],
        "max_supply": 8999999999,
        "circulating_supply": 5582460004.558402,
        "total_supply": 7967988929.50477,
        "platform": null,
        "cmc_rank": 87,
        "self_reported_circulating_supply": null,
        "self_reported_market_cap": null,
        "last_updated": "2022-02-11T20:00:00.000Z",
        "quote": {
          "USD": {
            "price": 0.17841255333134048,
            "volume_24h": 6168646.29264893,
            "volume_change_24h": -17.1543,
            "percent_change_1h": -0.61526182,
            "percent_change_24h": -2.72294193,
            "percent_change_7d": -4.57013178,
            "percent_change_30d": -11.38457989,
            "percent_change_60d": -34.33033225,
            "percent_change_90d": -52.96345221,
            "market_cap": 995980943.2833512,
            "market_cap_dominance": 0.0517,
            "fully_diluted_market_cap": 1605712979.8,
            "last_updated": "2022-02-11T20:00:00.000Z"
          }
        }
      },
      {
        "id": 8646,
        "name": "Mina",
        "symbol": "MINA",
        "slug": "mina",
        "num_market_pairs": 48,
        "date_added": "2021-03-02T00:00:00.000Z",
        "tags": [
          "pos",
          "zero-knowledge-proofs",
          "staking",
          "coinbase-ventures-portfolio",
          "polychain-capital-portfolio"
        ],
        "max_supply": null,
        "circulating_supply": 374652554.84003925,
        "total_supply": 824104972,
        "platform": null,
        "cmc_rank": 88,
        "self_reported_circulating_supply": null,
        "self_reported_market_cap": null,
        "last_updated": "2022-02-11T20:00:00.000Z",
        "quote": {
          "USD": {
            "price": 2.596146554415479,
            "volume_24h": 40596827.273651,
            "volume_change_24h": -27.6859,
            "percent_change_1h": -1.77033105,
            "percent_change_24h": -7.95151036,
            "percent_change_7d": -2.31230969,
            "percent_change_30d": -27.37994939,
            "percent_change_60d": -19.81180249,
            "percent_change_90d": -52.83604956,
            "market_cap": 972652939.3509241,
            "market_cap_dominance": 0.0504,
            "fully_diluted_market_cap": 2139497283.53,
            "last_updated": "2022-02-11T20:00:00.000Z"
          }
        }
      },
      {
        "id": 3330,
        "name": "Pax Dollar",
        "symbol": "USDP",
        "slug": "paxos-standard",
        "num_market_pairs": 38,
        "date_added": "2018-09-27T00:00:00.000Z",
        "tags": [
          "store-of-value",
          "stablecoin",
          "asset-backed-stablecoin",
          "binance-smart-chain"
        ],
        "max_supply": null,
        "circulating_supply": 945642940.11,
        "total_supply": 945642940.11,
        "platform": {
          "id": 1027,
          "name": "Ethereum",
          "symbol": "ETH",
          "slug": "ethereum",
          "token_address": "0x8e870d67f660d95d5be530380d0ec0bd388289e1"
        },
        "cmc_rank": 89,
        "self_reported_circulating_supply": null,
        "self_reported_market_cap": null,
        "last_updated": "2022-02-11T20:00:00.000Z",
        "quote": {
          "USD": {
            "price": 0.9964741949123019,
            "volume_24h": 11206815.24639963,
            "volume_change_24h": -22.8876,
            "percent_change_1h": -0.07300268,
            "percent_change_24h": -0.03232585,
            "percent_change_7d": 0.06241998,
            "percent_change_30d": -0.36358916,
            "percent_change_60d": -0.37055937,
            "percent_change_90d": -0.20718468,
            "market_cap": 942308787.4206144,
            "market_cap_dominance": 0.0489,
            "fully_diluted_market_cap": 942308787.42,
            "last_updated": "2022-02-11T20:00:00.000Z"
          }
        }
      },
      {
        "id": 3801,
        "name": "BORA",
        "symbol": "BORA",
        "slug": "bora",
        "num_market_pairs": 4,
        "date_added": "2019-03-18T00:00:00.000Z",
        "tags": [
          "marketplace",
          "gaming",
          "wallet"
        ],
        "max_supply": null,
        "circulating_supply": 861250000,
        "total_supply": 1205750000,
        "platform": {
          "id": 4256,
          "name": "Klaytn",
          "symbol": "KLAY",
          "slug": "klaytn",
          "token_address": "0x02cbe46fb8a1f579254a9b485788f2d86cad51aa"
        },
        "cmc_rank": 90,
        "self_reported_circulating_supply": 861250000,
        "self_reported_market_cap": 923028556.5848802,
        "last_updated": "2022-02-11T20:00:00.000Z",
        "quote": {
          "USD": {
            "price": 1.071731270345289,
            "volume_24h": 144923029.99792194,
            "volume_change_24h": -32.985,
            "percent_change_1h": -0.75029709,
            "percent_change_24h": -2.90736152,
            "percent_change_7d": -6.75632479,
            "percent_change_30d": 9.18698338,
            "percent_change_60d": 40.86700856,
            "percent_change_90d": 189.54299663,
            "market_cap": 923028556.5848802,
            "market_cap_dominance": 0.0479,
            "fully_diluted_market_cap": 1292239979.22,
            "last_updated": "2022-02-11T20:00:00.000Z"
          }
        }
      },
      {
        "id": 1168,
        "name": "Decred",
        "symbol": "DCR",
        "slug": "decred",
        "num_market_pairs": 56,
        "date_added": "2016-02-10T00:00:00.000Z",
        "tags": [
          "mineable",
          "hybrid-pow-pos",
          "blake256",
          "medium-of-exchange",
          "store-of-value",
          "privacy",
          "dao",
          "placeholder-ventures-portfolio"
        ],
        "max_supply": 21000000,
        "circulating_supply": 13757512.25079165,
        "total_supply": 13757512.25079165,
        "platform": null,
        "cmc_rank": 91,
        "self_reported_circulating_supply": null,
        "self_reported_market_cap": null,
        "last_updated": "2022-02-11T20:00:00.000Z",
        "quote": {
          "USD": {
            "price": 67.02860064425802,
            "volume_24h": 5627061.76569172,
            "volume_change_24h": 22.5392,
            "percent_change_1h": -0.91775191,
            "percent_change_24h": -1.45025383,
            "percent_change_7d": 1.98398375,
            "percent_change_30d": 10.33108016,
            "percent_change_60d": 3.58531654,
            "percent_change_90d": -40.24023445,
            "market_cap": 922146794.5168008,
            "market_cap_dominance": 0.0478,
            "fully_diluted_market_cap": 1407600613.53,
            "last_updated": "2022-02-11T20:00:00.000Z"
          }
        }
      },
      {
        "id": 2682,
        "name": "Holo",
        "symbol": "HOT",
        "slug": "holo",
        "num_market_pairs": 102,
        "date_added": "2018-04-29T00:00:00.000Z",
        "tags": [
          "platform",
          "distributed-computing",
          "filesharing",
          "storage"
        ],
        "max_supply": null,
        "circulating_supply": 173174228546.6286,
        "total_supply": 177619433541.14133,
        "platform": {
          "id": 1027,
          "name": "Ethereum",
          "symbol": "ETH",
          "slug": "ethereum",
          "token_address": "0x6c6ee5e31d828de241282b9606c8e98ea48526e2"
        },
        "cmc_rank": 92,
        "self_reported_circulating_supply": null,
        "self_reported_market_cap": null,
        "last_updated": "2022-02-11T20:00:00.000Z",
        "quote": {
          "USD": {
            "price": 0.005222905913434302,
            "volume_24h": 79279489.00037381,
            "volume_change_24h": -30.233,
            "percent_change_1h": -1.29470955,
            "percent_change_24h": -6.17258896,
            "percent_change_7d": 12.88652837,
            "percent_change_30d": -19.71460992,
            "percent_change_60d": -32.70408312,
            "percent_change_90d": -61.11729385,
            "market_cap": 904472702.3306098,
            "market_cap_dominance": 0.047,
            "fully_diluted_market_cap": 927689589.78,
            "last_updated": "2022-02-11T20:00:00.000Z"
          }
        }
      },
      {
        "id": 5864,
        "name": "yearn.finance",
        "symbol": "YFI",
        "slug": "yearn-finance",
        "num_market_pairs": 254,
        "date_added": "2020-07-18T00:00:00.000Z",
        "tags": [
          "defi",
          "yield-farming",
          "binance-smart-chain",
          "yield-aggregator",
          "yearn-partnerships",
          "three-arrows-capital-portfolio",
          "polychain-capital-portfolio",
          "governance",
          "blockchain-capital-portfolio",
          "framework-ventures-portfolio",
          "alameda-research-portfolio",
          "parafi-capital",
          "fantom-ecosystem"
        ],
        "max_supply": 36666,
        "circulating_supply": 36637.72122588,
        "total_supply": 36666,
        "platform": {
          "id": 1027,
          "name": "Ethereum",
          "symbol": "ETH",
          "slug": "ethereum",
          "token_address": "0x0bc529c00c6401aef6d220be8c6ea1667f6ad93e"
        },
        "cmc_rank": 93,
        "self_reported_circulating_supply": null,
        "self_reported_market_cap": null,
        "last_updated": "2022-02-11T20:00:00.000Z",
        "quote": {
          "USD": {
            "price": 23965.9697833476,
            "volume_24h": 99909501.22126806,
            "volume_change_24h": -29.1445,
            "percent_change_1h": -0.6029638,
            "percent_change_24h": -3.45044438,
            "percent_change_7d": -2.27405422,
            "percent_change_30d": -28.75955174,
            "percent_change_60d": 22.8032532,
            "percent_change_90d": -26.60795711,
            "market_cap": 878058519.830153,
            "market_cap_dominance": 0.0455,
            "fully_diluted_market_cap": 878736248.08,
            "last_updated": "2022-02-11T20:00:00.000Z"
          }
        }
      },
      {
        "id": 5692,
        "name": "Compound",
        "symbol": "COMP",
        "slug": "compound",
        "num_market_pairs": 243,
        "date_added": "2020-06-16T00:00:00.000Z",
        "tags": [
          "defi",
          "dao",
          "yield-farming",
          "binance-smart-chain",
          "polkadot-ecosystem",
          "coinbase-ventures-portfolio",
          "three-arrows-capital-portfolio",
          "polychain-capital-portfolio",
          "lending-borowing",
          "dragonfly-capital-portfolio",
          "alameda-research-portfolio",
          "a16z-portfolio",
          "pantera-capital-portfolio",
          "paradigm-portfolio"
        ],
        "max_supply": 10000000,
        "circulating_supply": 6558937.93041396,
        "total_supply": 10000000,
        "platform": {
          "id": 1027,
          "name": "Ethereum",
          "symbol": "ETH",
          "slug": "ethereum",
          "token_address": "0xc00e94cb662c3520282e6f5717214004a7f26888"
        },
        "cmc_rank": 94,
        "self_reported_circulating_supply": null,
        "self_reported_market_cap": null,
        "last_updated": "2022-02-11T20:00:00.000Z",
        "quote": {
          "USD": {
            "price": 131.5153760806768,
            "volume_24h": 71076082.21818775,
            "volume_change_24h": -30.78,
            "percent_change_1h": -1.7370061,
            "percent_change_24h": -3.00723281,
            "percent_change_7d": -0.5018501,
            "percent_change_30d": -33.58469917,
            "percent_change_60d": -25.89918135,
            "percent_change_90d": -62.03147868,
            "market_cap": 862601188.6082078,
            "market_cap_dominance": 0.0448,
            "fully_diluted_market_cap": 1315153760.81,
            "last_updated": "2022-02-11T20:00:00.000Z"
          }
        }
      },
      {
        "id": 8104,
        "name": "1inch Network",
        "symbol": "1INCH",
        "slug": "1inch",
        "num_market_pairs": 203,
        "date_added": "2020-12-25T00:00:00.000Z",
        "tags": [
          "decentralized-exchange",
          "defi",
          "amm",
          "binance-smart-chain",
          "binance-labs-portfolio",
          "blockchain-capital-portfolio",
          "dragonfly-capital-portfolio",
          "fabric-ventures-portfolio",
          "alameda-research-portfolio",
          "parafi-capital",
          "spartan-group"
        ],
        "max_supply": null,
        "circulating_supply": 468182350.868383,
        "total_supply": 1500000000,
        "platform": {
          "id": 1027,
          "name": "Ethereum",
          "symbol": "ETH",
          "slug": "ethereum",
          "token_address": "0x111111111117dc0aa78b770fa6a738034120c302"
        },
        "cmc_rank": 95,
        "self_reported_circulating_supply": 468182350.868383,
        "self_reported_market_cap": 823147479.4429365,
        "last_updated": "2022-02-11T20:00:00.000Z",
        "quote": {
          "USD": {
            "price": 1.7581770818916294,
            "volume_24h": 73892833.11422856,
            "volume_change_24h": -37.294,
            "percent_change_1h": -0.70499635,
            "percent_change_24h": -3.48840975,
            "percent_change_7d": 0.85272922,
            "percent_change_30d": -21.75544888,
            "percent_change_60d": -23.11845428,
            "percent_change_90d": -57.70151136,
            "market_cap": 823147479.4429365,
            "market_cap_dominance": 0.0427,
            "fully_diluted_market_cap": 2637265622.84,
            "last_updated": "2022-02-11T20:00:00.000Z"
          }
        }
      },
      {
        "id": 2700,
        "name": "Celsius",
        "symbol": "CEL",
        "slug": "celsius",
        "num_market_pairs": 56,
        "date_added": "2018-05-18T00:00:00.000Z",
        "tags": [
          "lending-borowing",
          "exnetwork-capital-portfolio"
        ],
        "max_supply": 695658160,
        "circulating_supply": 238863519.826,
        "total_supply": 695658160,
        "platform": {
          "id": 1027,
          "name": "Ethereum",
          "symbol": "ETH",
          "slug": "ethereum",
          "token_address": "0xaaaebe6fe48e54f431b0c390cfaf0b017d09d42d"
        },
        "cmc_rank": 96,
        "self_reported_circulating_supply": 510732063,
        "self_reported_market_cap": 1688214044.1163194,
        "last_updated": "2022-02-11T20:00:00.000Z",
        "quote": {
          "USD": {
            "price": 3.305478873207769,
            "volume_24h": 3063203.63390748,
            "volume_change_24h": -40.7519,
            "percent_change_1h": -2.13250874,
            "percent_change_24h": -4.35615737,
            "percent_change_7d": 21.97252812,
            "percent_change_30d": -0.76943083,
            "percent_change_60d": -10.94252484,
            "percent_change_90d": -29.51757764,
            "market_cap": 789558318.3648881,
            "market_cap_dominance": 0.041,
            "fully_diluted_market_cap": 2299483350.85,
            "last_updated": "2022-02-11T20:00:00.000Z"
          }
        }
      },
      {
        "id": 2634,
        "name": "XDC Network",
        "symbol": "XDC",
        "slug": "xinfin",
        "num_market_pairs": 50,
        "date_added": "2018-04-12T00:00:00.000Z",
        "tags": [],
        "max_supply": null,
        "circulating_supply": 12305012698.75,
        "total_supply": 37705012698.75,
        "platform": null,
        "cmc_rank": 97,
        "self_reported_circulating_supply": null,
        "self_reported_market_cap": null,
        "last_updated": "2022-02-11T20:00:00.000Z",
        "quote": {
          "USD": {
            "price": 0.06132765191997329,
            "volume_24h": 9296065.97305277,
            "volume_change_24h": 1.0634,
            "percent_change_1h": -0.82762326,
            "percent_change_24h": -4.97006671,
            "percent_change_7d": 0.84086041,
            "percent_change_30d": -33.26938679,
            "percent_change_60d": -12.03501078,
            "percent_change_90d": -36.15056909,
            "market_cap": 754637535.6597911,
            "market_cap_dominance": 0.0392,
            "fully_diluted_market_cap": 2312359894.43,
            "last_updated": "2022-02-11T20:00:00.000Z"
          }
        }
      },
      {
        "id": 2577,
        "name": "Ravencoin",
        "symbol": "RVN",
        "slug": "ravencoin",
        "num_market_pairs": 93,
        "date_added": "2018-03-10T00:00:00.000Z",
        "tags": [
          "mineable",
          "pow",
          "platform",
          "crowdfunding"
        ],
        "max_supply": 21000000000,
        "circulating_supply": 10473290000,
        "total_supply": 10473290000,
        "platform": null,
        "cmc_rank": 98,
        "self_reported_circulating_supply": null,
        "self_reported_market_cap": null,
        "last_updated": "2022-02-11T20:00:00.000Z",
        "quote": {
          "USD": {
            "price": 0.06973319332729154,
            "volume_24h": 45089370.30751042,
            "volume_change_24h": -5.7787,
            "percent_change_1h": -1.29240708,
            "percent_change_24h": -4.07934365,
            "percent_change_7d": -1.97712749,
            "percent_change_30d": -32.75582326,
            "percent_change_60d": -12.97700717,
            "percent_change_90d": -45.07368642,
            "market_cap": 730335956.3427892,
            "market_cap_dominance": 0.0379,
            "fully_diluted_market_cap": 1464397059.87,
            "last_updated": "2022-02-11T20:00:00.000Z"
          }
        }
      },
      {
        "id": 5777,
        "name": "renBTC",
        "symbol": "RENBTC",
        "slug": "renbtc",
        "num_market_pairs": 39,
        "date_added": "2020-06-28T00:00:00.000Z",
        "tags": [
          "defi",
          "binance-smart-chain",
          "wrapped-tokens",
          "fantom-ecosystem"
        ],
        "max_supply": 13698,
        "circulating_supply": 16249.49945327,
        "total_supply": 16249.49945327,
        "platform": {
          "id": 1027,
          "name": "Ethereum",
          "symbol": "ETH",
          "slug": "ethereum",
          "token_address": "0xeb4c2781e4eba804ce9a9803c67d0893436bb27d"
        },
        "cmc_rank": 100,
        "self_reported_circulating_supply": null,
        "self_reported_market_cap": null,
        "last_updated": "2022-02-11T20:00:00.000Z",
        "quote": {
          "USD": {
            "price": 42431.6409657774,
            "volume_24h": 2869266.32247841,
            "volume_change_24h": -65.8049,
            "percent_change_1h": -0.73972484,
            "percent_change_24h": -4.30623466,
            "percent_change_7d": 6.20110248,
            "percent_change_30d": -0.60135294,
            "percent_change_60d": -8.32609486,
            "percent_change_90d": -33.95621247,
            "market_cap": 689492926.6747488,
            "market_cap_dominance": 0.0358,
            "fully_diluted_market_cap": 581228617.95,
            "last_updated": "2022-02-11T20:00:00.000Z"
          }
        }
      },
      {
        "id": 7455,
        "name": "Audius",
        "symbol": "AUDIO",
        "slug": "audius",
        "num_market_pairs": 75,
        "date_added": "2020-10-20T00:00:00.000Z",
        "tags": [
          "music",
          "coinbase-ventures-portfolio",
          "binance-labs-portfolio",
          "solana-ecosystem",
          "pantera-capital-portfolio",
          "multicoin-capital-portfolio",
          "web3"
        ],
        "max_supply": null,
        "circulating_supply": 608321992,
        "total_supply": 1078933974,
        "platform": {
          "id": 1027,
          "name": "Ethereum",
          "symbol": "ETH",
          "slug": "ethereum",
          "token_address": "0x18aaa7115705e8be94bffebde57af9bfc265b998"
        },
        "cmc_rank": 99,
        "self_reported_circulating_supply": null,
        "self_reported_market_cap": null,
        "last_updated": "2022-02-11T20:00:00.000Z",
        "quote": {
          "USD": {
            "price": 1.1331384590608802,
            "volume_24h": 63387230.7151634,
            "volume_change_24h": 86.1692,
            "percent_change_1h": -2.21795637,
            "percent_change_24h": -3.81076688,
            "percent_change_7d": 12.38940342,
            "percent_change_30d": -24.41542734,
            "percent_change_60d": -20.84012081,
            "percent_change_90d": -52.12780679,
            "market_cap": 689313044.6277251,
            "market_cap_dominance": 0.0358,
            "fully_diluted_market_cap": 1222581580.73,
            "last_updated": "2022-02-11T20:00:00.000Z"
          }
        }
      }
    ]
  }
