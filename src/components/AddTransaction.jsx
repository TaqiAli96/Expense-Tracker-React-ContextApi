import React, { useContext } from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { GlobalContext } from "../context/GlobalState";

export const AddTransaction = () => {
  const { addTransaction } = useContext(GlobalContext);
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text && !amount) return;
    if (text && amount) {
      const newTransaction = {
        id: Math.floor(Math.random() * 100000),
        text,
        amount: +amount,
      };
      addTransaction(newTransaction);
      setText("");
      setAmount("");
    }
  };
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <VStack spacing={5}>
        <FormControl>
          <FormLabel>Text</FormLabel>
          <Input
            type="text"
            placeholder="Enter Text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </FormControl>

        <FormControl>
          <FormLabel>Amount</FormLabel>
          <Input
            type="number"
            placeholder="Enter Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <FormHelperText>
            (negative - expense, positive - income)
          </FormHelperText>
        </FormControl>
        <Button colorScheme="blue" type="submit">
          Add Transaction
        </Button>
      </VStack>
    </form>
  );
};
