import { FormControl, FormLabel, Switch, Tooltip } from "@chakra-ui/react";
import { useGlobalState } from "../context/GlobalState";

// Toggle in the header that controls whether transactions are sponsored by the
// gas station (fee payer) or submitted directly by the user. Useful for
// debugging wallet flows (e.g. Petra Web) where the gas station may reject the
// signer with INVALID_AUTH_KEY.
export default function FeePayerToggle() {
  const [state, { setUseFeePayer }] = useGlobalState();

  return (
    <Tooltip
      label="When on, transactions are sponsored by the gas station. Turn off to pay gas yourself."
      hasArrow
      placement="bottom"
    >
      <FormControl display="flex" alignItems="center" width="auto">
        <FormLabel htmlFor="fee-payer-toggle" mb="0" fontSize="sm">
          Gas station
        </FormLabel>
        <Switch
          id="fee-payer-toggle"
          isChecked={state.useFeePayer}
          onChange={(event) => setUseFeePayer(event.target.checked)}
        />
      </FormControl>
    </Tooltip>
  );
}
