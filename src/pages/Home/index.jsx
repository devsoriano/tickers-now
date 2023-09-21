import { DataList } from "../../components/DataList";
import { Layout } from "../../components/Layout";
import { Pagination } from "../../components/Pagination";

export const Home = () => {
  return (
    <Layout>
      <DataList />
      <Pagination />
    </Layout>
  );
};
