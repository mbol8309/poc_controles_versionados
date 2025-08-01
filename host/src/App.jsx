import React, { useState } from "react";
import Loader from "./Loader";
import { ComponentLoaderProvider } from "./context/ComponentLoaderContext";
import Pages from "./Pages";

function App() {
    
    return (
        <div>
            <ComponentLoaderProvider>
                <Loader />
                <Pages />
                </ComponentLoaderProvider>
        </div>
    );
}

export default App;