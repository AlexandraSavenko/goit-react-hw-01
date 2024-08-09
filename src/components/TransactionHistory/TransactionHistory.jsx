import TransactionHistoryItem from "../TransactionHistoryItem/TransactionHistoryItem";
export default function TransactionHistory({ items }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => {
          return (
            <tr key={item.id}>
              <TransactionHistoryItem thItem={item} />
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
