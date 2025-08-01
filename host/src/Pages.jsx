import React, { useState, useEffect, useMemo } from "react";
import { useComponentLoader } from "./context/ComponentLoaderContext";
import Builder from "./Builder";

const pages = [
    { name: "Vista 1", file: "vista1.json" },
    { name: "Vista 2", file: "vista2.json" },
    { name: "Vista 3", file: "vista3.json" },
];

function Pages() {
    const [selectedPage, setSelectedPage] = useState(pages[0]);
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const { currentVersion, loadVersion } = useComponentLoader();





    useEffect(() => {
        setLoading(true);
        setError(null);
        setData(null);
        fetch(`/api/${selectedPage.file}`)
            .then((res) => {
                if (!res.ok) throw new Error("Error al descargar el JSON");
                return res.json();
            })
            .then(setData)
            .catch(setError)
            .finally(() => setLoading(false));
    }, [selectedPage]);

    const correctVersion = useMemo(() => {
        if (data?.controles_version == null) return false;
        if (data?.controles_version != currentVersion) {
            loadVersion(data.controles_version);
            return false;
        }
        return true;
    }, [currentVersion, data]);

    console.log(correctVersion) 

    return (
        <div>
            <div>
                {pages.map((page) => (
                    <button
                        key={page.file}
                        onClick={() => setSelectedPage(page)}
                        disabled={selectedPage.file === page.file}
                    >
                        {page.name}
                    </button>
                ))}
            </div>
            <div>
                Version correcta cargada: {correctVersion ? "Sí" : "No"}
            </div>
            <div>
                {correctVersion && <Builder vista={data} />}
            </div>
        </div>
    );
}

export default Pages;