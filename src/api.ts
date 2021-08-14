class HTTPError extends Error {}
export class Tiingo {
  private _base_url: string;
  public headers: { [name: string]: string };
  public apiKey: string;

  constructor(apiKey: string) {
    this._base_url = "https://api.tiingo.com/tiingo";
    this.apiKey = `&token=${apiKey}`;
    this.headers = {
      "Authorization": `Token ${apiKey}`,
      "Content-Type": "application/json",
    };
  }
// work on constructing the request with the optional variables
  // possibly add logic for sorting
  // TODO add error catching maybe
  async eod(
    ticker: string,
    startDate?: string,
    endDate?: string,
    freq = 'daily',
    sort?: string,
    columns?: string[],
  ): Promise<Response> {
    const metaDataUrl: string = `/daily/${ticker}`;
    const latestPriceUrl: string = `/daily/${ticker}/prices`;

    const response = await fetch(this._base_url + latestPriceUrl, {
      method: "GET",
      headers: this.headers,
    });
    return response;
  }
}
