import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Button, HStack, Text } from "@chakra-ui/react";

const Transaction = (transaction) => {
  const context = useContext(GlobalContext);

  const { deleteTransaction } = context;
  const sign = transaction.amount > 0 ? "+" : "_";
  return (
    <HStack>
      <Text>{transaction.text}</Text>
      <Text
        borderRight={
          transaction.amount > 0 ? "2px solid green" : "2px solid red"
        }
      >
        {sign} $ {Math.abs(transaction.amount)}
      </Text>
      <Button onClick={() => deleteTransaction(transaction.id)}>Delete</Button>
    </HStack>
  );
};
export const TransactionList = () => {
  const context = useContext(GlobalContext);
  const { transactions } = context;

  return (
    <>
      {transactions?.map((transaction) => (
        <Transaction {...transaction} key={transaction.id} />
      ))}
    </>
  );
};
