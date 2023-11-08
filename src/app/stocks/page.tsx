import { ClientComponent } from "../components/ClientComponent";
import { ListStocks } from "../components/ListStocks";

export default function StocksListPage() {
  return (
    <div>
      <ListStocks />
      <ClientComponent />
    </div>
  );
}
