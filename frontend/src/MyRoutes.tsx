import { Navigate, Route, Routes } from "react-router-dom";
import { PlayPage } from "./pages/PlayPage";
import PlayLayout from "./layouts/PlayLayout";

export default function MyRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/play" replace />} />
      <Route
        path="/play"
        element={
          <PlayLayout>
            <PlayPage />
          </PlayLayout>
        }
      />
    </Routes>
  );
}
