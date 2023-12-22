import { MyChessboard } from "./MyChessboard";
import { useParams } from "react-router-dom";

export const GamePage = () => {
  // Get the object address from the URL using react-router-dom.
  const { game_address } = useParams();

  if (game_address === undefined) {
    return (
      <div>Game address is undefined, you got to this page by accident!</div>
    );
  }

  return <MyChessboard gameAddress={game_address} />;
};
