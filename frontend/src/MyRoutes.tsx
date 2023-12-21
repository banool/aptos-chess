import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";
import { NotFoundPage } from "./pages/NotFoundPage";
import { GamePage } from "./pages/GamePage";

export default function MyRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <MainLayout>
            <HomePage />
          </MainLayout>
        }
      />
      <Route
        path="/:game_address"
        element={
          <MainLayout>
            <GamePage />
          </MainLayout>
        }
      />
      <Route
        path="*"
        element={
          <MainLayout>
            <NotFoundPage />
          </MainLayout>
        }
      />
    </Routes>
  );
}
