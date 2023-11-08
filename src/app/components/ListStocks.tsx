import { Stock } from "../model";

async function getStocks(): Promise<Stock[]> {
  // Cache baseado em tempo
  // const response = await fetch("http://localhost:3333/stocks", {
  //   next: { revalidate: 15 },
  // });

  // Cache definitivo
  // const response = await fetch("http://localhost:3333/stocks");
  // return response.json();

  const response = await fetch("http://localhost:3333/stocks", {
    next: { tags: ["stocks"] },
  });
  return response.json();
}

export async function ListStocks() {
  const stocks = await getStocks();

  return (
    <div>
      <h1>Stocks List</h1>
      <ul>
        {stocks.map((stock) => (
          <li key={stock.id}>
            {stock.name} - {stock.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
