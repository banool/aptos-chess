import {
  Box,
  Button,
  Center,
  Flex,
  Grid,
  GridItem,
  Heading,
  Input,
  InputGroup,
  InputLeftAddon,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { isValidAccountAddress } from "../../utils";
import { MyChessboard } from "./MyChessboard";

export const MySidebar = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  /*
  let body;
  if (chatRooms === undefined) {
    body = <Text>Fetching chat rooms</Text>;
  } else if (chatRooms!.length === 0) {
    body = <Text>You are not in any chat rooms!</Text>;
  } else {
    let cards = [];
    let index = 0;
    for (const chatRoom of chatRooms!) {
      const createdByString = `Created by ${creatorNames![index]}`;
      const chatRoomKey = getChatRoomKey(chatRoom);
      let bg = undefined;
      if (chatRoomKey === currentChatRoomKey) {
        bg = "gray.200";
      }
      cards.push(
        <Card
          onClick={(e) => handleJoinRoom(e, chatRoomKey)}
          margin={3}
          bg={bg}
          key={chatRoomKey}
        >
          <CardHeader>
            <Heading size="md">{chatRoom.collection_name}</Heading>
          </CardHeader>
          <CardBody>
            <Text>{createdByString}</Text>
          </CardBody>
        </Card>
      );
      index += 1;
      body = <Box overflowY={"auto"}>{cards}</Box>;
    }

    return (
      <Box p={4}>
        <Heading p={4} textAlign={"center"}>
          Games
        </Heading>
        {body}
        <Spacer />
        <Button minHeight={50} onClick={onOpen} margin={3} bg={"gray.200"}>
          Create Game
        </Button>
      </Box>
    );
  }*/

  return (<Box/>);
};
