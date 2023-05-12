import { useEffect, useState, useCallback } from "react";
import { OpenStreetMapProvider } from "leaflet-geosearch";

const useMapLocation = (address) => {
  const [location, setLocation] = useState(null);

  const handleSearchLocation = useCallback(async () => {
    const provider = new OpenStreetMapProvider();
    const results = await provider.search({ query: address });
    if (results.length > 0) {
      const { x: lng, y: lat } = results[0];
      setLocation([lat, lng]);
    }
  }, [address]);

  useEffect(() => {
    handleSearchLocation();
    return () => {};
  }, [handleSearchLocation]);
  return { location };
};

export default useMapLocation;
