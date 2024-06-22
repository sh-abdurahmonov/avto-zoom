import React from "react";
import { useFetch } from "./hooks/useFetch";
import { Space, Table, Tag } from "antd";
import Header from "./components/Header";
import { FaRegTrashAlt, FaRegEdit } from "react-icons/fa";
import Create from "./components/Create";
const columns = [
  {
    title: "Color",
    dataIndex: "color",
    key: "color",
    render: (color) => <a>{color}</a>,
  },
  {
    title: "Brand",
    dataIndex: "brand",
    key: "brand",
    render: (brand) => <p>{brand.title}</p>,
  },
  {
    title: "model",
    dataIndex: "model",
    key: "model",
    render: (model) => <p>{model.name}</p>,
  },
  {
    title: "Category",
    dataIndex: "category",
    key: "category",
    render: (category) => <p>{category.name_en}</p>,
  },
  {
    title: "Location",
    dataIndex: "location",
    key: "location",
    render: (location) => <p>{location.name}</p>,
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <a>
          <FaRegEdit className="text-green-700 text-2xl" />
        </a>
        <a>
          <FaRegTrashAlt className="text-red-700 text-2xl" />
        </a>
      </Space>
    ),
  },
];
function App() {
  const { data, error, isPending } = useFetch(
    `${import.meta.env.VITE_API_URL}/cars`
  );
  console.log(data?.data);
  return (
    <section className="max-w-full max-w-7xl mx-auto px-6">
      <Header />
      <Create />
      <Table columns={columns} dataSource={data?.data} />
    </section>
  );
}

export default App;
