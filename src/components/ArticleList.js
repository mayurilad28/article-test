import {useParams} from "react-router-dom"

const ArticleList = (props)=> {
    const {articleId} = useParams()
    const list = props.articleList.results
    const findArticle = list.find((res) => {
        res.asset_id === articleId
    })
    console.log('rr', findArticle)
    return (
        <>
        <div className="container">
            <h1>This is my detail page</h1>        
            <p>
                In this senerio, I am trying to match article Id with selected article Id but everytime it's changed so not able to get details of article. Please understand.
            </p>
        </div>
        </>
    )
}

export default ArticleList