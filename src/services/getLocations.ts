import axios from 'axios';

interface IResponse {
  lat: string;
  lon: string;
  display_name: string;
}

const GetLocations = async (search: string) => axios.get(`https://nominatim.openstreetmap.org/search.php?q=${search}&format=json`)
  .then((response) => {
    const { data } = response;
    return data.map((res: IResponse) => ({
      displayName: res.display_name,
      lat: parseFloat(res.lat),
      lon: parseFloat(res.lon),
    }));
  })
  .catch(() => []);

export default GetLocations;
