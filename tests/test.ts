import { Tiingo } from "../src/api.ts";

const tiingo = new Tiingo("123");

// tiingo.eod("HOOD").then(
//   (jsonData: any) => console.log(jsonData)
// );

// tiingo.eod("HOOD").then(data => console.log(data[0]['high']))

let hood = await tiingo.eod({
  ticker: "HOOD",
  freq: "weekly",
  startDate: "2021-08-01",
  endDate: "2021-08-14",
  columns: ["high", "low"],
});

console.log(await hood.json());
