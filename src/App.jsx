import { Routes, Route } from "@solidjs/router";
import { onMount } from "solid-js";

import WeTube from "./pages/WeTube";
import SearchBar from "./components/SearchBar";

export default function App() {
  onMount(() => {});

  return (
    <Routes>
      <Route path="/videos/:videoId" component={WeTube} />
      <Route path="/" component={SearchBar} />
    </Routes>
  );
}
