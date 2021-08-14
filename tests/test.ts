import { Tiingo } from "../src/api.ts";

const tiingo = new Tiingo("123");

// tiingo.eod("HOOD").then(
//   (jsonData: any) => console.log(jsonData)
// );

// tiingo.eod("HOOD").then(data => console.log(data[0]['high']))

let hood = await tiingo.eod('HOOD')

console.log(await hood.json().then(data => data))