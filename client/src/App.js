import './App.css';
import {useEffect, useState} from "react";
import axios from "axios";

const instance = axios.create({
  baseURL: 'https://collections-server.vercel.app', // Your default base URL here
});

function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await instance.get('/');
        console.log(response)
        setData(response.data)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="App">
      {data && data}
    </div>
  );
}

export default App;
