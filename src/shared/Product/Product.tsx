import React from "react";
import useBem from "../../hooks/useBem";

import "./Product.scss";

interface IProductProps {
  name: string;
  image: string;
  price: number;
  onClick?: () => void;
  className: string;
}

function Product(props: IProductProps) {
  const { bem, bemBlock, bemElement } = useBem("Product");
  return (
    <div
      className={bem(
        bemBlock({
        }),
        props.className
      )}
      onClick={props.onClick}
    >
      <img src={props.image} alt={props.name} />
      <div className={bemElement("text-info")}>
        <h3>{props.name}</h3>
        <p>{props.price} tg</p>
      </div>
    </div>
  );
}

Product.defaultProps = {
  className: "",
};

export default Product;
