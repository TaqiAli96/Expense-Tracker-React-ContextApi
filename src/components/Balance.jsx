import { Text, VStack } from "@chakra-ui/react";
import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  const amount = transactions.map((transaction) => transaction.amount);
  const total = amount.reduce((acc, elem) => acc + elem, 0).toFixed(2);
  console.log(total);
  return (
    <VStack>
      <Text>Your Balance</Text>
      <Text>${total}</Text>
    </VStack>
  );
};
