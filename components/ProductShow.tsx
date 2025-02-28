import React from "react";


interface Product {
  url: string;
  pic: string;
  productName: string;
  productPrice: number;
  height: number;
  width: number;
  type: string;
  material: string;
  desc: string;
}

interface ProductShowProps {
  products: Product[];
}


const ProductShow: React.FC<ProductShowProps> = ({ products }) => {
  return (
      <div>
        <table className="table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2">url</th>
              <th className="px-4 py-2">pic</th>
              <th className="px-4 py-2">productName</th>
              <th className="px-4 py-2">width</th>
              <th className="px-4 py-2">height</th>
              <th className="px-4 py-2">Price</th>
              <th className="px-4 py-2">Type</th>
              <th className="px-4 py-2">Material</th>
              <th className="px-4 py-2">Description</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.url}>
                <td className="border px-4 py-2">{product.url}</td>
                <td className="border px-4 py-2">{product.pic}</td>
                <td className="border px-4 py-2">{product.productName}</td>
                <td className="border px-4 py-2">{product.width}</td>
                <td className="border px-4 py-2">{product.height}</td>
                <td className="border px-4 py-2">{product.productPrice}</td>
                <td className="border px-4 py-2">{product.type}</td>
                <td className="border px-4 py-2">{product.material}</td>
                <td className="border px-4 py-2">{product.desc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
  );
};

export default ProductShow;
