import React, { ReactNode } from "react";
import {
  Box,
  Text,
  Spinner,
  Card,
  CardHeader,
  CardBody,
  Heading,
} from "@chakra-ui/react";
import { useWallet } from "@aptos-labs/wallet-adapter-react";
import { Link as ReactRouterLink, useLocation } from "react-router-dom";
import { useGlobalState } from "../context/GlobalState";
import { useGames } from "../api/useGames";

export const Sidebar = () => {
  // Just for demo purposes.
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const noSidebar = searchParams.has("noSidebar");

  const { account, isLoading: walletIsLoading } = useWallet();
  const userAddress = account?.address;
  const [globalState] = useGlobalState();

  const { data, isLoading, error } = useGames(userAddress!, {
    enabled: !!userAddress,
  });

  const width = "300px";

  const skeleton = (inner?: ReactNode) => (
    <Box
      p={4}
      width={width}
      borderRight="1px solid"
      borderRightColor="gray.200"
      overflowY="auto"
    >
      {inner || <Spinner />}
    </Box>
  );

  if (noSidebar) {
    return skeleton("Sidebar has no query to power it!");
  }

  if (walletIsLoading) {
    return skeleton("Wallet connecting...");
  }

  if (!userAddress) {
    return skeleton("Connect your wallet.");
  }

  if (isLoading) {
    return skeleton();
  }

  if (error) {
    return skeleton(`Error loading games: ${JSON.stringify(error)}`);
  }

  const createdGames = data?.created || [];
  const invitedGames = data?.invited || [];

  return (
    <Box
      width={width}
      p={4}
      borderRight="1px solid"
      borderRightColor="gray.200"
      overflowY="auto"
    >
      <Box mb={6}>
        <Text fontSize="lg" fontWeight="bold" mb={2}>
          My Games
        </Text>
        {createdGames.length > 0 ? (
          createdGames.map((game) => (
            <Card
              key={game.object_address}
              mb={4}
              variant="outline"
              size="sm"
              as={ReactRouterLink}
              to={`/${game.object_address}?network=${globalState.network}`}
            >
              <CardHeader pb={2}>
                <Heading size="sm">Game with {game.opponent_address}</Heading>
              </CardHeader>
              <CardBody pt={0}>
                <Text fontSize="xs" color="gray.600">
                  Created at{" "}
                  {new Date(game.game_created_timestamp).toLocaleString()}
                </Text>
              </CardBody>
            </Card>
          ))
        ) : (
          <Text>No games found.</Text>
        )}
      </Box>
      <Box>
        <Text fontSize="lg" fontWeight="bold" mb={2}>
          Invites
        </Text>
        {invitedGames.length > 0 ? (
          invitedGames.map((game) => (
            <Card
              key={game.object_address}
              mb={4}
              variant="outline"
              size="sm"
              as={ReactRouterLink}
              to={`/${game.object_address}?network=${globalState.network}`}
            >
              <CardHeader pb={2}>
                <Heading size="sm">Game with {game.creator_address}</Heading>
              </CardHeader>
              <CardBody pt={0}>
                <Text fontSize="xs" color="gray.600">
                  Invited on{" "}
                  {new Date(game.game_created_timestamp).toLocaleString()}
                </Text>
              </CardBody>
            </Card>
          ))
        ) : (
          <Text>No invites found.</Text>
        )}
      </Box>
    </Box>
  );
};
