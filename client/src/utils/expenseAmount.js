export const getExpenseAmount = (expense) => {
  if (typeof expense.amount === 'number') return expense.amount;

  const savedAmounts = (expense.amounts || [])
    .map(({ amountValue }) => Number(amountValue))
    .filter((value) => Number.isFinite(value) && value >= 0);

  return savedAmounts.length
    ? savedAmounts.reduce((total, value) => total + value, 0)
    : null;
};

export const formatMoney = (amount) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency', currency: 'USD',
  }).format(amount);
