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
    const response = await fetch(this._base_url + url, {
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
    let latestPriceUrl: string =
      `/daily/${ticker}/prices?resampleFreq=${freq}&`;

    if (startDate) {
      latestPriceUrl += `startDate=${startDate}&`;
    } else if (endDate) {
      latestPriceUrl += `endDate=${endDate}&`;
    } else if (columns) {
      latestPriceUrl += `columns=${columns}`;
    }

    return this._getRequest(latestPriceUrl);
  }

  async ticker_meta(ticker: string): Promise<Response> {
    const metaUrl: string = `/daily/${ticker}`;

    return this._getRequest(metaUrl);
  }

  async news(
    { tickers, tags, source, startDate }: {
      tickers?: string[];
      tags?: string[];
      source?: string[];
      startDate?: string;
      endDate?: string;
      limit?: number;
      offset?: number;
    },
  ): Promise<Response> {
    return this._getRequest("/news");
  }

  // async tickertNews(): Promise<Response> {
  //   return this._getRequest('/news');
  // }

  async fundamentals(): Promise<Response> {
    
    return this._getRequest('/fundementals')
  }
}
