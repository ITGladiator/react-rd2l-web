import React, { useState, useEffect } from "react";
import axios from "axios";

function JSONContainer({ url }) {
  const [data, setData] = useState({ divisions: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(url);
      setData(result.data);
    };
    fetchData();
  }, [url]);
return(data)
}

export default JSONContainer;