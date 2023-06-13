import Image from "next/image";
import Link from "next/link";

export default function Article({ article }) {
  return (
    <>
      <Link href={`/blog/article?id=${article.id}`} key={article.id} article={article} className="post-link">
        <div className="post">
          <div className="img-cat-container">
            <Image src={article.img.guid} width={160} height={90} alt="Image"></Image>
            <p className="post-category">{article["_embedded"]["wp:term"]["0"]["0"].name}</p>
          </div>
          <h3>{article.title.rendered}</h3>
          <p>{article.short}</p>
          <div className="open-post">
            <button className="btn-card">Læs mere</button>
          </div>
        </div>
      </Link>
    </>
  );
}
