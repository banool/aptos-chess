import { BloctoWallet } from "@blocto/aptos-wallet-adapter-plugin";
import { MartianWallet } from "@martianwallet/aptos-wallet-adapter";
import { PetraWallet } from "petra-plugin-wallet-adapter";
import { PontemWallet } from "@pontem/wallet-adapter-plugin";
import { RiseWallet } from "@rise-wallet/wallet-adapter";
import { TrustWallet } from "@trustwallet/aptos-wallet-adapter";
import { WelldoneWallet } from "@welldone-studio/aptos-wallet-adapter";
import {
  AptosWalletAdapterProvider,
  NetworkName,
} from "@aptos-labs/wallet-adapter-react";

import { AutoConnectProvider, useAutoConnect } from "./AutoConnectProvider";
import { FC, ReactNode } from "react";

const WalletContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const { autoConnect } = useAutoConnect();

  const wallets = [
    // Blocto supports Testnet/Mainnet for now.
    new BloctoWallet({
      network: NetworkName.Testnet,
      bloctoAppId: "6d85f56e-5f2e-46cd-b5f2-5cf9695b4d46",
    }),
    new MartianWallet(),
    new PetraWallet(),
    new PontemWallet(),
    new RiseWallet(),
    new TrustWallet(),
    new WelldoneWallet(),
  ];

  return (
    <AptosWalletAdapterProvider plugins={wallets} autoConnect={autoConnect}>
      {children}
    </AptosWalletAdapterProvider>
  );
};

export const AppContext: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <AutoConnectProvider>
      <WalletContextProvider>{children}</WalletContextProvider>
    </AutoConnectProvider>
  );
};
