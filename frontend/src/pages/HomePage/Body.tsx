import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  TableContainer,
  Tooltip,
  Text,
  Button,
  Td,
  Input,
  Link,
  Flex,
  Card,
  CardBody,
  CardHeader,
  Center,
  CardFooter,
  Heading,
  Spacer,
  useToast,
  Select,
  Divider,
} from "@chakra-ui/react";
import React, { ReactNode, useCallback, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useGlobalState } from "../../context/GlobalState";
import { AccountAddress } from "@aptos-labs/ts-sdk";
import { sum } from "../../utils/utils";

export const Body = () => {
  const [globalState] = useGlobalState();
  const [searchParams, setSearchParams] = useSearchParams();
  const [addresses, updateAddresses] = useState<string[]>([]);

  const updateAddressesWrapper = useCallback(
    (newAddresses: string[]) => {
      updateAddresses(newAddresses);
      let paramUpdate: any = {};
      if (newAddresses.length > 0) {
        paramUpdate.addresses = newAddresses.join(",");
      }
      setSearchParams((prev) => {
        return { ...prev, ...paramUpdate };
      });
    },
    [setSearchParams],
  );

  // Set the addresses based on the query params.
  useEffect(() => {
    const addressesRaw = searchParams.get("addresses");
    if (addressesRaw) {
      updateAddressesWrapper(addressesRaw.split(","));
    }
  }, [searchParams, updateAddressesWrapper]);

  const handleOnInputPaste = (event: any) => {
    event.preventDefault();
    const pasted = event.clipboardData.getData("text/plain");
    const newAddresses = pasted.split(/[\s,\n]+/);
    updateAddressesWrapper(newAddresses);
  };

  const getRowFrame = (
    address: string,
    index: number,
    tdElements: ReactNode,
  ) => {
    const onPaste = index === 0 ? handleOnInputPaste : undefined;
    return (
      <Tr key={index}>
        <Td w="1px">
          <Input
            value={address}
            minW="675px"
            onPaste={onPaste}
            onChange={(event) => {
              let newAddresses = [...addresses];
              // Handle removing an item if the address is changed to an empty string.
              if (event.target.value === "") {
                newAddresses.splice(index, 1);
              } else {
                newAddresses[index] = event.target.value;
              }
              updateAddressesWrapper(newAddresses);
            }}
            placeholder="0x96daeefd..."
          />
        </Td>
        {tdElements}
      </Tr>
    );
  };

  const clearButton = (
    <Button
      onClick={() => {
        updateAddressesWrapper([]);
      }}
      disabled={addresses.length === 0}
    >
      Clear Addresses
    </Button>
  );

  return (
    <Box>
      <Flex p={2} alignContent="center">
        <Spacer />
        <Box w="1%" />
        {clearButton}
        <Spacer />
      </Flex>
      <TableContainer p={4} w="100%">
        <Table
          variant="simple"
          // This makes the border for the last row thicker.
          sx={{
            "& tr:nth-last-of-type(2) td": {
              borderBottomWidth: "3px",
            },
          }}
        >
          <Thead>
            <Tr>
              <Th>Addresses</Th>
              <Th>Total Value </Th>
              <Th>
                Known Assets{" "}
                <Tooltip
                  label="The number of assets for which we could determine the value."
                  placement="auto"
                >
                  ⓘ
                </Tooltip>
              </Th>
              <Th>
                Unknown Assets{" "}
                <Tooltip
                  label="The number of assets for which we could not determine the value. These are not included in the total value of the account."
                  placement="auto"
                >
                  ⓘ
                </Tooltip>
              </Th>
              <Th>Details</Th>
            </Tr>
          </Thead>
        </Table>
      </TableContainer>
    </Box>
  );
};
