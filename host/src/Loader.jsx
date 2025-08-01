import React, { useRef, useState } from 'react';
import { useComponentLoader } from './context/ComponentLoaderContext';

const versions = [
    'v1.0',
    'v1.1',
    'v2.0',
    'v2.1',
];

export default function Loader({ onLoad }) {
    const { currentVersion, loadVersion } = useComponentLoader();

    const [selectedVersion, setSelectedVersion] = useState("");
    const [loadedVersions, setLoadedVersions] = useState({});      // ✅ almacena versiones cargadas
    

    const handleLoad = () => {
        if (selectedVersion) {
            loadVersion(selectedVersion);
        }
    };

    console.log("loadedVersions", loadedVersions);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                <select
                    value={selectedVersion}
                    onChange={e => setSelectedVersion(e.target.value)}
                >
                    <option value="" disabled>
                        Ninguna versión cargada
                    </option>
                    {versions.map(version => (
                        <option key={version} value={version}>
                            {version}
                        </option>
                    ))}
                </select>
                <button onClick={handleLoad} disabled={!selectedVersion}>
                    Load
                </button>
            </div>
            <div>
                Versiones actual: {currentVersion}
            </div>
        </div>
    );
}