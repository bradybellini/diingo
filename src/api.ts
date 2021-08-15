export class Tiingo {
  private _base_url: string;
  private headers: { [name: string]: string };
  private apiKey: string;

  constructor(apiKey: string) {
    this._base_url = "https://api.tiingo.com/tiingo";

    this.apiKey = apiKey;

    this.headers = {
      "Authorization": `Token ${this.apiKey}`,
      "Content-Type": "application/json",
    };
  }

  async _getRequest(url: string): Promise<Response> {
    const response = await fetch(url, {
      method: "GET",
      headers: this.headers,
    });
    
    return response;
  }

  // possibly add logic for sorting
  // TODO add error catching maybe
  async eod(
    { ticker, startDate, endDate, freq = "daily", sort, columns }: {
      ticker: string;
      startDate?: string;
      endDate?: string;
      freq?: string;
      sort?: string;
      columns?: string[];
    },
  ): Promise<Response> {
    const metaDataUrl: string = `/daily/${ticker}`;

    let latestPriceUrl: string =
      `/daily/${ticker}/prices?resampleFreq=${freq}&`;

    if (startDate) {
      latestPriceUrl += `startDate=${startDate}&`;
    }

    if (endDate) {
      latestPriceUrl += `endDate=${endDate}&`;
    }

    if (columns) {
      latestPriceUrl += `columns=${columns}`;
    }

    return this._getRequest(this._base_url + latestPriceUrl);
  }
}
