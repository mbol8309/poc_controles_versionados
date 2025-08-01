import { useComponentLoader } from "./context/ComponentLoaderContext";

const Builder = ({ vista }) => {
    
    const { currentVersion, loadVersion } = useComponentLoader();

    console.log(vista);

}

export default Builder;