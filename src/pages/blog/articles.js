import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Article from "../../../components/Article";

export default function ArticlesPage({ articles }) {
  // const [template, setTemplate] = useState();
  // const [article, setArticle] = useState();
  // const [title, setTitle] = useState();

  useEffect(() => {
    console.log(articles);
  });

  return (
    <>
      <div className="grid-blog">
        {articles.map((article) => (
          <Article key={article.id} article={article}></Article>
        ))}
      </div>
    </>
  );
}

// Fetch Article from Wordpress API
export async function getServerSideProps() {
  const url = "https://sesejose.com/kea/wp_boliglaan/wp-json/wp/v2/article?_embed";
  // Await then execute the code.
  const res = await fetch(url); // Fetchs the data (await)
  const articles = await res.json(); // After getting the data convert it to json.

  return {
    props: {
      articles,
    },
  };
}
