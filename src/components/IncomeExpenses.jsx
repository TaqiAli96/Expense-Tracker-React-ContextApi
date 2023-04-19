import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { HStack, Text } from "@chakra-ui/react";

export const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);

  const amount = transactions.map((transaction) => transaction.amount);
  const income = amount
    .filter((item) => item > 0)
    .reduce((acc, elem) => acc + elem, 0);

  const expense =
    amount.filter((item) => item < 0).reduce((acc, elem) => acc + elem, 0) * -1;
  return (
    <HStack justify={"center"}>
      <Text>
        Income : <span>${income}</span>
      </Text>

      <Text>
        Expense :<span>${expense}</span>
      </Text>
    </HStack>
  );
};
