
import Table from './Table';

const netIncomes = [
  { brand: 'McDonalds', income: 1291283 },
  { brand: 'Burger King', income: 1927361 },
  { brand: 'KFC', income: 1098463 }
];

const App = () => {
  const totalIncome = netIncomes.reduce((accum, item) => accum + item.income, 0);
  const averageIncome = totalIncome / netIncomes.length;

  return (
    <div>
      <Table netIncomes={netIncomes} />
      <p>Promedio de ingreso neto: {averageIncome.toFixed(2)}</p>
    </div>
  );
};

export default App;