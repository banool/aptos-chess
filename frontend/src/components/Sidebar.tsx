import React from "react";
import {
  Box,
  Text,
  Link as ChakraLink,
  Spinner,
  Card,
  CardHeader,
  CardBody,
  Heading,
} from "@chakra-ui/react";
import { useWallet } from "@aptos-labs/wallet-adapter-react";
import { Link as ReactRouterLink } from "react-router-dom";
import { useGlobalState } from "../context/GlobalState";
import { useGames } from "../api/useGames";

export const Sidebar = () => {
  const { account } = useWallet();
  const userAddress = account?.address;
  const [globalState] = useGlobalState();

  const { data, isLoading, error } = useGames(userAddress!, {
    enabled: !!userAddress,
  });

  const width = "300px";

  const skeleton = (
    <Box p={4} width={width}>
      <Spinner />
    </Box>
  );

  if (!userAddress || isLoading) {
    return skeleton;
  }

  if (error) {
    return (
      <Box p={4} width={width}>
        <Text>Error loading games {JSON.stringify(error)}</Text>
      </Box>
    );
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

export default Sidebar;
