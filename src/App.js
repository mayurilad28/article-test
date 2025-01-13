import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './assets/style.scss';
import Article from './components/Article';
import ArticleList from './components/ArticleList';

function App() {
 const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json?api-key=womXnauYXFFsmUuForyGAb39oEuI67Wd')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => setError(error));
    //   console.log('rr', data.results)
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data) {
    return <div className='load-screen'>Loading...</div>;
  }
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Article articleList={data} />} />
        <Route path="/:articleId" element={<ArticleList articleList={data} />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
