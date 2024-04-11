export function useMyFetch({ endpoint, options }: IParams) {}

type HTTPMethods = "GET" | "POST" | "PUT" | "DELETE" | "HEAD" | "OPTIONS";

interface IParams {
  endpoint: string;
  options?: Partial<IOptions>;
}

interface IOptions {
  method: HTTPMethods;
  contentType: "application/json" | "form-data";
  body: any;
}
