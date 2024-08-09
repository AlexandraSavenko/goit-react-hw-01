export default function TransactionHistoryItem({
  thItem: { currency, amount, type },
}) {
  return (
    <div>
      <td>{type} </td>
      <td>{amount} </td>
      <td>{currency}</td>
    </div>
  );
}
