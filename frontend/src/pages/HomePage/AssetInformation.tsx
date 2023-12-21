import { AppraiseResult, OutputCurrency } from "@banool/aptos-account-value";
import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  Text,
  Box,
  Tooltip,
  HStack,
  useClipboard,
  useToast,
  forwardRef,
} from "@chakra-ui/react";

type AppraisalModalProps = {
  isOpen: boolean;
  onClose: () => void;
  result: AppraiseResult;
};

export const AppraisalModal: React.FC<AppraisalModalProps> = ({
  isOpen,
  onClose,
  result,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered size="xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Appraisal</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <HStack mb={4}>
            <Text fontSize="lg" fontWeight="bold">
              Total Value:
            </Text>
            <Text fontSize="md">${result.totalValue.toLocaleString()}</Text>
          </HStack>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Asset Name</Th>
                <Tooltip label="The amount of the asset that is owned by the account. This takes decimals into account, e.g. shows APT as APT, not OCTAs.">
                  <Th isNumeric>Amount</Th>
                </Tooltip>
              </Tr>
            </Thead>
            <Tbody>
              {result.knownAssets.map((asset, index) => (
                <Tr key={index}>
                  <Tooltip label={asset.typeString}>
                    <span>
                      <CopyableTextCell
                        typeString={asset.typeString}
                        prettyName={asset.prettyName ?? "Unknown"}
                      />
                    </span>
                  </Tooltip>
                  <Td isNumeric>
                    {(asset.amount / 10 ** (asset.decimals ?? 1)).toFixed(2)}
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
          {result.unknownAssets.length > 0 && (
            <Box>
              <Text paddingBottom={3} mt={4} fontSize="lg" fontWeight="bold">
                Unknown Assets
              </Text>
              <Table variant="simple">
                <Thead>
                  <Tr>
                    <Th>Asset Name</Th>
                    <Th isNumeric>Amount</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {result.unknownAssets.map((asset, index) => (
                    <Tr key={index}>
                      <Tooltip label={asset.typeString}>
                        <span>
                          <CopyableTextCell
                            typeString={asset.typeString}
                            prettyName={asset.prettyName ?? "Unknown"}
                          />
                        </span>
                      </Tooltip>
                      <Td isNumeric>{asset.amount.toLocaleString()}</Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </Box>
          )}
        </ModalBody>
        <ModalFooter>
          <Button onClick={onClose}>Close</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

const CopyableTextCell = forwardRef(
  (
    { typeString, prettyName }: { typeString: string; prettyName: string },
    ref,
  ) => {
    const toast = useToast();

    const handleCopy = () => {
      navigator.clipboard.writeText(typeString).then(() => {
        toast({
          title: "Copied to clipboard",
          description: `${typeString} has been copied to your clipboard.`,
          status: "success",
          duration: 2000,
          isClosable: true,
        });
      });
    };

    return (
      <Td ref={ref} onClick={handleCopy} cursor="pointer">
        <Text>{prettyName ?? "Unknown"}</Text>
      </Td>
    );
  },
);

CopyableTextCell.displayName = "CopyableTextCell";
