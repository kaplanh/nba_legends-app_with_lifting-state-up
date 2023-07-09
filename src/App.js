import CardContainer from "./components/cardcontainer/CardContainer";
import Header from "./components/header/Header";

import { useState } from "react";

function App() {
    const [search, setSearch] = useState("");
    return (
        <div>
            <Header setSearch={setSearch} />
            <CardContainer search={search} />
        </div>
    );
}

export default App;
