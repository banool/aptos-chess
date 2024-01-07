import { Box, Text, Button, Input, Flex, useToast } from "@chakra-ui/react";
import React, { useState } from "react";
import { getChessIdentifier, useGlobalState } from "../../context/GlobalState";
import { AccountAddress, TransactionResponseType } from "@aptos-labs/ts-sdk";
import { useWallet } from "@aptos-labs/wallet-adapter-react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";

export const Body = () => {
  const { account, signAndSubmitTransaction } = useWallet();
  const [globalState] = useGlobalState();
  const [inputValue, setInputValue] = useState("");
  const [gameAddress, setGameAddress] = useState("");
  const toast = useToast();

  const handleInputChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = async () => {
    const data = {
      function: getChessIdentifier(globalState, "create_game") as any,
      typeArguments: [],
      functionArguments: [inputValue],
    };

    try {
      let submissionResponse = await signAndSubmitTransaction({
        sender: account!.address,
        data,
      });
      const waitResponse = await globalState.client.waitForTransaction({
        transactionHash: submissionResponse.hash,
        options: { checkSuccess: true, waitForIndexer: true },
      });

      // Needed to make the type checker happy.
      if (waitResponse.type !== TransactionResponseType.User) {
        throw new Error("Transaction was unexpectedly the wrong type");
      }

      // TODO: A function to get the objects created in a txn would be nice. I don't
      // believe such a function exists still, so I use the event I emit instead for
      // now.

      const objectAddress = waitResponse.events[0].data.object_address;
      setGameAddress(objectAddress);
    } catch (error) {
      console.log(`Error creating game: ${JSON.stringify(error)}`);
      toast({
        title: "Error creating game",
        status: "error",
        duration: 4000,
        isClosable: true,
      });
    }
  };

  const inputValid = AccountAddress.isValid({
    input: inputValue,
    strict: true,
  }).valid;

  const buttonEnabled = inputValid && account !== null;

  // TODO: Support ANS.
  return (
    <Box p={10}>
      <Box paddingBottom={3}>
        <Text>{"Who would you like to play a game with?"}</Text>
      </Box>
      <Flex alignContent="center">
        <Input
          placeholder="Enter account address (ANS not supported right now sorry!!)"
          value={inputValue}
          onChange={handleInputChange}
          mb={4}
        />
        <Box ml={4} />
        <Button
          paddingLeft={6}
          paddingRight={6}
          onClick={handleSubmit}
          isDisabled={!buttonEnabled}
        >
          Create Game
        </Button>
      </Flex>
      {gameAddress && (
        <Box>
          <Text>
            {"Game created at "}
            <ChakraLink
              color="lightblue"
              as={ReactRouterLink}
              to={`/${gameAddress}?network=${globalState.network}`}
            >
              {gameAddress}
            </ChakraLink>
            {"."}
          </Text>
        </Box>
      )}
    </Box>
  );
};
