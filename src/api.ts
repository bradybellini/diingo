class HTTPError extends Error {}
export class Tiingo {
  private base_url: string;
  public headers: { [name: string]: string };
  private apiKey: string;

  constructor(apiKey: string) {
    this.base_url = "https://api.tiingo.com/tiingo";
    this.apiKey = `&token=${apiKey}`;
    this.headers = {
      "Authorization": `Token ${apiKey}`,
      "Content-Type": "application/json",
    };
  }

  eod(ticker: string) {
    const metaDataUrl: string = `/daily/${ticker}`;
    const latestPriceUrl: string = `/daily/${ticker}/prices`;

    const json = fetch(this.base_url + latestPriceUrl, {
      method: "GET",
      headers: this.headers,
    });

    json.then((response) => {
      return response.json();
    }).then((jsonData) => {
      console.log(typeof (jsonData));
    });

    // if (!response.ok) {
    //   throw new HTTPError(`Fetch error: ${response.statusText}`);
    // }
    //   console.log(await response.json());
    // return response.json();
  }
}
