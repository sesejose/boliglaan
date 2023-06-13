import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import ArticleTilAndre from "../../../components/ArticleTilAndre";

export default function ArticlePage({ articles }) {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const [title, setTitle] = useState();
  const [text, setText] = useState();
  const [img, setImage] = useState();
  const [date, setDate] = useState();
  const [creator, setCreator] = useState();
  const [category, setCategory] = useState();

  useEffect(() => {
    async function gettingId() {
      const url = "http://sesejose.com/kea/wp_boliglaan/wp-json/wp/v2/article/" + id + "?_embed";
      console.log(id);
      // Await then execute the code.
      const res = await fetch(url); // Fetchs the data (await)
      const articleSelected = await res.json(); // After getting the data convert it to json.
      // const article = JSON.stringify(articleSelected);
      showArticle(articleSelected);
    }
    gettingId();
  }, []);

  function showArticle(articleSelected) {
    console.log(articleSelected);
    // setArticleOpen(articleSelected);
    setTitle(articleSelected["title"].rendered);
    setText(articleSelected.text);
    setImage(articleSelected["img"].guid);
    setDate(articleSelected["img"].post_date);
    setCreator(articleSelected.creator);
    setCategory(articleSelected["_embedded"]["wp:term"]["0"]["0"].name);
    console.log(category);
  }

  return (
    <>
      <div id="article-container" className="col-12 grid-center">
        <div className="hero-title-container">
          <h4>{category}</h4>
          <h1>{title}</h1>
          <div className="date-creator-container small bold">
            <div>{creator}</div>
            <div>{date}</div>
          </div>
        </div>
        <div className="hero-img-container">
          <div className="overlay"></div>
          <Image src={img} width="1920" height="1080" alt="Image"></Image>
        </div>
      </div>
      <div className="blog-content">
        <div className="">
          <p className="mtb">{text}</p>
        </div>
      </div>
      <div className="relatered-artikler">
        <h2 className="flex-row-center">Relateret artikler</h2>
        <div className="grid-blog">
          {articles.map((article) => (
            <ArticleTilAndre key={article.id} article={article}></ArticleTilAndre>
          ))}
        </div>
      </div>
    </>
  );
}

// Fetch Article from Wordpress API
export async function getServerSideProps() {
  const url = "http://sesejose.com/kea/wp_boliglaan/wp-json/wp/v2/article?_embed=1&per_page=4";
  // Await then execute the code.
  const res = await fetch(url); // Fetchs the data (await)
  const articles = await res.json(); // After getting the data convert it to json.

  return {
    props: {
      articles,
    },
  };
}
