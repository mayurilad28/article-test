
import { Link } from "react-router-dom";

function Article(props) {
  return (
    <div className='container'>
      <h1 className='heading text-center'>Most Viewed Articles</h1>
      <ul className='cards'>
        {props.articleList.results.map((article) => (
          <li key={article.id} className='card-body'>
            <p>{article.asset_id}</p>
            <h2 className='card-title'>
                <Link to={`/${article.asset_id}`}>{article.title}</Link>
            </h2>
            <p className='card-text'>{article.abstract}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Article;