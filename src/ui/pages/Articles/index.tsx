import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Flex, Table } from "../..";
import { fetchArticles, RootState } from "../../../store";

export const COLUMNS: { title: string; name: string }[] = [
  { name: "id", title: "Id" },
  { name: "userId", title: "User" },
  { name: "title", title: "Title" },
];

const Articles = () => {
  const dispatch = useDispatch();
  const articles = useSelector((state: RootState) => state.articles.data);

  useEffect(() => {
    //fetchPosts();
    dispatch(fetchArticles());
  }, [dispatch]);

  return (
    <Flex justifyContent="center">
      <Table columns={COLUMNS} data={articles} width="700px" />
    </Flex>
  );
};

export default Articles;
