import {
  Td,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
  Button,
  Box,
  useDisclosure,
} from "@chakra-ui/react";
import { AppraiseResult, OutputCurrency } from "@banool/aptos-account-value";
import { AppraisalModal } from "./AssetInformation";

export type RowInfoInputEmpty = {
  kind: "empty";
};

// e.g. the account address is invalid.
export type RowInfoInputInvalid = {
  kind: "invalid";
  reason: string;
};

export type RowInfoInputLoading = {
  kind: "loading";
};

export type RowInfoInputPresent = {
  kind: "present";
  result: AppraiseResult;
};

export type RowInfoInputError = {
  kind: "error";
  error: unknown;
};

export type RowInfoInput =
  | RowInfoInputEmpty
  | RowInfoInputInvalid
  | RowInfoInputLoading
  | RowInfoInputPresent
  | RowInfoInputError;

export const RowInfo = ({
  input,
  outputCurrency,
}: {
  input: RowInfoInput;
  outputCurrency: OutputCurrency;
}) => {
  const getEarlyReturn = (finalItem: React.ReactElement) => (
    <>
      <Td></Td>
      <Td></Td>
      <Td></Td>
      <Td>{finalItem}</Td>
    </>
  );

  switch (input.kind) {
    case "empty":
      return getEarlyReturn(<Box />);
    case "invalid":
      return getEarlyReturn(<InvalidPopover reason={input.reason} />);
    case "loading":
      return getEarlyReturn(<Button>⏳</Button>);
    case "error":
      return getEarlyReturn(<ErrorPopover error={input.error} />);
  }

  const result = input.result;

  return (
    <>
      <Td>{formatAmount(result.totalValue, outputCurrency)}</Td>
      <Td>{result.knownAssets.length}</Td>
      <Td>{result.unknownAssets.length}</Td>
      <Td>
        <AppraisalButton result={result} />
      </Td>
    </>
  );
};

// ErrorPopover Component
const ErrorPopover = ({ error }: { error: unknown }) => {
  return (
    <Popover>
      <PopoverTrigger>
        <Button>😵</Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader>Error Details</PopoverHeader>
        <PopoverBody>{JSON.stringify(error)}</PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

const InvalidPopover = ({ reason }: { reason: string }) => {
  return (
    <Popover>
      <PopoverTrigger>
        <Button>😑</Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader>Invalid</PopoverHeader>
        <PopoverBody>{reason}</PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

const AppraisalButton = ({ result }: { result: AppraiseResult }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen}>🧐</Button>
      <AppraisalModal isOpen={isOpen} onClose={onClose} result={result} />
    </>
  );
};

export function formatAmount(amount: number, currency: OutputCurrency): string {
  let prefix = "";
  let suffix = "";
  if (currency === OutputCurrency.USD) {
    prefix = "$";
  }
  if (currency === OutputCurrency.APT) {
    suffix = OutputCurrency.APT;
  }
  return `${prefix}${amount.toFixed(2)} ${suffix}`;
}
