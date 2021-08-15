# Tiingo API client for Deno
WIP
## Usage

First initialize
```typescript
const tiingo = new Tiingo(apiKey);
```

### End of Day Endpoint Examples

[Tiingo documentation for End-of-Day](https://api.tiingo.com/documentation/end-of-day)


Latest end of day price request.
```typescript
const nvda = await tiingo.eod({
  ticker: "NVDA",
});

console.log(await nvda.json());

// [
//   {
//     adjClose: 201.88,
//     adjHigh: 202.1381,
//     adjLow: 198.51,
//     adjOpen: 199.05,
//     adjVolume: 18059898,
//     close: 201.88,
//     date: "2021-08-13T00:00:00+00:00",
//     divCash: 0,
//     high: 202.1381,
//     low: 198.51,
//     open: 199.05,
//     splitFactor: 1,
//     volume: 18059898
//   }
// ]
```
A more complex request with historical data
```typescript
// get the ticker NVDA, with weekly prices from July 30th thru August 14th
// only returning high and low columns (date is alwaays returned)
// see the Tiingo documentation for more detail about frequency
const nvda = await tiingo.eod({
  ticker: "NVDA",
  freq: "weekly",
  startDate: "2021-07-30",
  endDate: "2021-08-14",
  columns: ["high", "low"],
});

console.log(await nvda.json());

// [
//   { date: "2021-07-30T00:00:00.000Z", high: 198.53, low: 187.41 },
//   { date: "2021-08-06T00:00:00.000Z", high: 207.33, low: 192.2 },
//   { date: "2021-08-13T00:00:00.000Z", high: 205.0799, low: 194.3 }
// ]
```

### Meta Information Endpoint Example

[Tiingo documentation for Meta Information](https://api.tiingo.com/documentation/end-of-day)

Get information about a ticker Tiingo supports
```typescript
const nvda = await tiingo.ticker_meta('NVDA');

console.log(await nvda.json());

// {
//   name: "NVIDIA Corp",
//   description: "NVIDIA ’s invention of the GPU in 1999 sparked the growth of the PC ...",
//   exchangeCode: "NASDAQ",
//   endDate: "2021-08-13",
//   ticker: "NVDA",
//   startDate: "1999-01-22"
// }
```