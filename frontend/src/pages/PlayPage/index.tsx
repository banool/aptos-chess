import {
  Box,
  Center,
  Flex,
  Grid,
  GridItem,
  Input,
  InputGroup,
  InputLeftAddon,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { isValidAccountAddress } from "../../utils";
import { MyChessboard } from "./MyChessboard";

export const PlayPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [address, setAddress] = useState<string>("");

  //<MyChessboard />
  return (
    <Box h="100%">
      <Flex w="full" h="full" color="white">
        <Box bg="red.800" w="20%" h="100%"></Box>
        <Box w="80%" bg="green.800">
          <Input onChange={(event) => setAddress(event.target.value)} />
          <MyChessboard objectAddress={address} />
        </Box>
      </Flex>
    </Box>
  );
};
