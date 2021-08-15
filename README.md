# Tiingo API client for Deno
## Usage

First initialize
```typescript
const tiingo = new Tiingo(apiKey);
```
#### End-of-Day Endpoint Examples
[Tiingo documentation for End-of-Day](https://api.tiingo.com/documentation/end-of-day)
```typescript
// get the ticker HOOD, with weekly prices from August 1st thru the 14th only returning high and low columns (date is alwaays returned)
// see the Tiingo documentation for more detail about frequency
let hood = await tiingo.eod({
  ticker: "HOOD",
  freq: "weekly",
  startDate: "2021-08-01",
  endDate: "2021-08-14",
  columns: ["high", "low"],
});

console.log(await hood.json());
// [
//   { date: "2021-07-30T00:00:00.000Z", high: 40.25, low: 33.25 },
//   { date: "2021-08-06T00:00:00.000Z", high: 85, low: 35.3 },
//   { date: "2021-08-13T00:00:00.000Z", high: 59.96, low: 47.52 }
// ]
```