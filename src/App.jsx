import Navbar from "./components/Navbar";
import axios from "axios";
import React, { useState, useEffect } from "react";
import Card from "./components/Card";
import Pagination from "./components/Pagination";

const App = () => {
  const [dataArray, setDataArray] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postPerPage = 4;

  useEffect(() => {
    const fetchPost = () => {
      axios
        .get("https://jsonplaceholder.typicode.com/users/")
        .then((res) => {
          if (res?.data) {
            setDataArray(res.data);
            //console.log(dataArray);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    };

    fetchPost();
  }, []);

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = dataArray.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const RenderCard = ({ dataArray }) => {
    if (dataArray?.length > 0) {
      return dataArray.map((data) => <Card key={data.id} {...data} />);
    }
  };

  return (
    <div className="absolute overflow-scroll bg-slate-200 h-full w-full">
      <Navbar />
      <div className="my-10 mx-5">
        <RenderCard dataArray={currentPosts} />
      </div>
      <footer>
        <Pagination postPerPage={postPerPage} totalPosts={dataArray.length} paginate={paginate}/>
      </footer>
    </div>
  );
};

export default App;
