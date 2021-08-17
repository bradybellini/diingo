# Tiingo API client for Deno
WIP

To Do:
* CSV support
* WebSocket support
* Better documentation
* environment variable support for apikey
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
  endDate: "2021-08-13",
  columns: ["high", "low"],
});

console.log(await nvda.json());

```

### Meta Information Endpoint Example

[Tiingo documentation for Meta Information](https://api.tiingo.com/documentation/end-of-day)

Get information about a ticker Tiingo supports
```typescript
const nvda = await tiingo.ticker_meta('NVDA');

console.log(await nvda.json());

```