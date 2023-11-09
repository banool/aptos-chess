// pages/index.tsx

import React from 'react';
import { useGames } from '../queries/useGames';
import { ChessGame, InviteGame, EndedGame } from '../types/ChessGameTypes';

const HomePage: React.FC = () => {
  const { ongoing, invites, ended } = useGames();

  return (
    <Container>
      <Text h1>Welcome to Chess World</Text>

      <Text h3>Ongoing Games</Text>
      <Row wrap="wrap" gap={1}>
        {ongoing.map((game: ChessGame) => (
          <Col key={game.id}>
            <Card hoverable clickable>
              <Card.Body>
                <Text>{`Game ID: ${game.id}`}</Text>
                <Text>{`Players: ${game.players.join(' vs ')}`}</Text>
                {game.createdByYou && <Text>You created this game</Text>}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Text h3>Invitations</Text>
      <Row wrap="wrap" gap={1}>
        {invites.map((invite: InviteGame) => (
          <Col key={invite.id}>
            <Card hoverable clickable>
              <Card.Body>
                <Text>{`Game ID: ${invite.id}`}</Text>
                <Text>{`Players: ${invite.players.join(' vs ')}`}</Text>
                {!invite.createdByYou && <Text>You were invited to this game</Text>}
                <Button color="primary" auto ghost>
                  Join Game
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Text h3>Ended Games</Text>
      <Row wrap="wrap" gap={1}>
        {ended.map((game: EndedGame) => (
          <Col key={game.id}>
            <Card hoverable clickable>
              <Card.Body>
                <Text>{`Game ID: ${game.id}`}</Text>
                <Text>{`Players: ${game.players.join(' vs ')}`}</Text>
                <Text>{`Result: You ${game.result}`}</Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default HomePage;
