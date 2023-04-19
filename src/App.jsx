import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { IncomeExpenses } from "./components/IncomeExpenses";
import { AddTransaction } from "./components/AddTransaction";
import { GlobalProvider } from "./context/GlobalState";
import { Layout } from "./components/Layout";
import { TransactionList } from "./components/TransactionList";
function App() {
  return (
    <GlobalProvider>
      <Layout>
        <Header />
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </Layout>
    </GlobalProvider>
  );
}

export default App;
