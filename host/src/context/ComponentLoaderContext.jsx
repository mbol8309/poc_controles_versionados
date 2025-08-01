// src/contexts/ComponentLoaderContext.jsx
import React, { createContext, useContext, useState, useRef } from 'react';

const ComponentLoaderContext = createContext();

export function ComponentLoaderProvider({ children }) {
  const [currentVersion, setCurrentVersion] = useState(null);
  const [components, setComponents] = useState({});
  const loadedVersions = useRef({});
  const loading = useRef(false);

  const loadVersion = async (version) => {
    if (!version || loading.current) return;

    if (loadedVersions.current[version]) {
      setCurrentVersion(version);
      setComponents(loadedVersions.current[version]);
      return;
    }

    loading.current = true;

    const scriptUrl = `/versions/controles.${version}.js`;

    const script = document.createElement('script');
    script.src = scriptUrl;
    script.async = true;

    script.onload = () => {
      loading.current = false;
      const exported = window.Components?.[version];
      if (exported) {
        loadedVersions.current[version] = exported;
        setCurrentVersion(version);
        setComponents(exported);
      } else {
        console.error(`La versión ${version} no exportó nada`);
      }
    };

    script.onerror = () => {
      loading.current = false;
      console.error(`Error cargando ${scriptUrl}`);
    };

    document.body.appendChild(script);
  };

  return (
    <ComponentLoaderContext.Provider value={{ currentVersion, components, loadVersion }}>
      {children}
    </ComponentLoaderContext.Provider>
  );
}

export function useComponentLoader() {
  return useContext(ComponentLoaderContext);
}
