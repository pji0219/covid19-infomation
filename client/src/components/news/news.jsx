import React, {useEffect} from 'react';
import axios from 'axios';

function News() {
  useEffect(() => {
    axios
      .get('/api/news')
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1>news</h1>
    </div>
  );
}

export default News;
