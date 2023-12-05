import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";

async function getData() {
  // rebuild every 10 seconds
  // next: { revalidate: 10 },

  // opting out of caching
  // cache: "no-store"

  const res = await fetch("https://jsonplaceholder.typicode.com/posts/", {
    cache: "no-store",
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Blog = async () => {
  const data = await getData();
  return (
    <div className={styles.mainContainer}>
      {data.map((post) => (
        <Link
          href={`/blog/${post.id}`}
          className={styles.container}
          key={post.id}
        >
          <div className={styles.imageContainer}>
            <Image
              src={`https://picsum.photos/id/${post.id}/400/250`}
              alt=""
              width={400}
              height={250}
              className={styles.image}
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>{post.title}</h1>
            <p className={styles.desc}>{post.body}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Blog;
