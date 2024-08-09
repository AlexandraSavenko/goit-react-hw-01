export default function TransactionHistoryItem({
  thItem: { currency, amount, type },
}) {
  return (
    <>
      <td>{type} </td>
      <td>{amount} </td>
      <td>{currency}</td>
    </>
  );
}
