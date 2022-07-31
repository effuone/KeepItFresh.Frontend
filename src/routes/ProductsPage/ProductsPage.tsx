import * as React from "react";
import useBem from "../../hooks/useBem";
import SearchBar from "material-ui-search-bar";
import jwt_decode from "jwt-decode";
import "./IndexPage.scss";
import ContentContainer from "../../shared/layout/ContentContainer";
import SectionContainer from "../../shared/layout/SectionContainer";
import { useState } from "react";
import Product from "../../shared/Product";
import NotFoundPage from "../NotFoundPage";
import { useNavigate, useParams } from "react-router-dom";
import { useGetAllProductsQuery } from "../../redux/services/productsAll.api";

export default function ProductsPage() {
  let { page } = useParams();
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("Сортировка по рейтингу");

  const {
    currentData: productsData,
    isLoading: productsIsLoading,
    error,
  } = useGetAllProductsQuery({ page });
  console.log(productsData);
  // use useSelector to get the currentData from the store
  const handleChange = (text: string) => {
    setSearch(text);
  };
  const handleSort = () => {
    sort === "Сортировка по рейтингу"
      ? setSort("Сортировка по цене")
      : setSort("Сортировка по рейтингу");
  };
  const { bemBlock, bemElement } = useBem("ProductsPage");

  // @ts-ignore
  if (productsIsLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <NotFoundPage />;
  }
  function increasePage() {
    if (productsData?.next) {
      let nextPage = Number(page) + 1;
      navigate(`/allProducts/${nextPage++}`);
    }
  }
  function decreasePage() {
    if (productsData?.previous) {
      let prevPage = Number(page) - 1;
      navigate(`/allProducts/${prevPage++}`);
    }
  }

  return (
    <SectionContainer className={bemBlock()}>
      <ContentContainer className={bemElement("content-container")}>
        <div className={bemElement("bar-block")}>
          <SearchBar
            className={bemElement("bar-block", { "search-bar": true })}
            placeholder={"Поиск на keep it fresh"}
            onChange={(text) => handleChange(text)}
            onRequestSearch={() => console.log("onRequestSearch")}
          />
        </div>
        <div className={bemElement("filters-container")}>
          <div
            className={bemElement("filters-container", { "sort-block": true })}
          >
            <h3 onClick={handleSort}>{sort}</h3>
          </div>
          <div
            className={bemElement("filters-container", {
              "filter-block": true,
            })}
          >
            <button className={bemElement("button", { plus: true })}>+</button>
            <button className={bemElement("button", { filter: true })}>
              Пригодна к переработке
            </button>
            <button className={bemElement("button", { filter: true })}>
              Жирная кожа
            </button>
          </div>
        </div>
        <div>
          <div className={bemElement("products-container")}>
            {productsData?.results.map((product, index: any) => {
              return (
                <Product
                  key={index}
                  name={product.name}
                  image={product.image}
                  price={product.price}
                />
              );
            })}
          </div>
        </div>
        <div className={bemElement("pagination-container")}>
          <button
            onClick={() => {
              decreasePage();
            }}
          >
            -
          </button>
          <button>{page}</button>
          <button
            onClick={() => {
              increasePage();
            }}
          >
            +
          </button>
        </div>
      </ContentContainer>
    </SectionContainer>
  );
}
