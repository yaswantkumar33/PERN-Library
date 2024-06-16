import React, { useEffect, useState } from "react";

export default function Library() {
  const [books, SetBooks] = useState([]);
  useEffect(() => {
    const fetchdata = async () => {
      const response = await fetch("http://localhost:4343/api/books");
      const jsondata = await response.json();
      SetBooks(jsondata);
    };
    fetchdata();
  }, []);
  return (
    <>
      <div>
        <h1>Libaray</h1>
        <ul>
          {books.map((item, index) => {
            return (
              <li key={index} style={{ padding: "10px" }}>
                <div>Name : {item.name}</div>
                <div>Author : {item.author}</div>
                <div>Year Published : {item.year_published}</div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
