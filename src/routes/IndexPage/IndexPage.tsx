import * as React from "react";
import useBem from "../../hooks/useBem";
import SearchBar from "material-ui-search-bar";
import jwt_decode from "jwt-decode";
import "./IndexPage.scss";
import ContentContainer from "../../shared/layout/ContentContainer";
import SectionContainer from "../../shared/layout/SectionContainer";
import { useState } from "react";
import Product from "../../shared/Product";
import { useGetProductsQuery } from "../../redux/services/products.api";
import NotFoundPage from "../NotFoundPage";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "../../hooks/useSelector";
//TODO:
// Надо сделать профили по query params
export default function IndexPage() {
  let { page } = useParams();
  const navigate = useNavigate();

  const user = useSelector((state) => state.auth.user);
  const userId = () => {
    const parsedUser: any = jwt_decode(user.token);
    return parsedUser?.id;
  };

  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("Рекомендации");

  const {
    currentData: productsData,
    isLoading: productsIsLoading,
    error,
  } = useGetProductsQuery({ userId: userId(), page });

  // use useSelector to get the currentData from the store
  const handleChange = (text: string) => {
    setSearch(text);
  };
  const { bemBlock, bemElement } = useBem("IndexPage");

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
      navigate(`/products/${nextPage++}`);
    }
  }
  function decreasePage() {
    if (productsData?.previous) {
      let prevPage = Number(page) - 1;
      navigate(`/products/${prevPage++}`);
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
            <h3>{sort}</h3>
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
