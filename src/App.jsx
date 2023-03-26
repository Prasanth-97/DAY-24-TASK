import "./App.css";
import NavBar from "./Navbar/NavBar";
import Header from "./Header/header";
import Products from "./Products/Products";
import Footer from "./Footer/Footer";
import { useState } from "react";

function App() {
  const products = [
    {
      img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-pro-model-unselect-gallery-2-202209_GEO_EMEA?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1660753617539",
      productName: "Apple 14 Pro",
      prize: "$999",
      rating: "⭐⭐⭐⭐⭐",
    },
    {
      img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-pro-model-unselect-gallery-2-202209_GEO_EMEA?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1660753617539",
      productName: "Apple 14 ",
      prize: "$900",
      rating: "⭐⭐⭐⭐⭐",
    },
    {
      img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-pro-model-unselect-gallery-2-202209_GEO_EMEA?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1660753617539",
      productName: "Apple 13 pro",
      prize: "$800",
      rating: "⭐⭐⭐",
    },
    {
      img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-pro-model-unselect-gallery-2-202209_GEO_EMEA?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1660753617539",
      productName: "Apple 13 ",
      prize: "$750",
      rating: "⭐⭐⭐⭐",
    },
    {
      img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-pro-model-unselect-gallery-2-202209_GEO_EMEA?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1660753617539",
      productName: "Apple 12 pro max ",
      prize: "$800",
      rating: "⭐⭐⭐⭐",
    },
    {
      img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-pro-model-unselect-gallery-2-202209_GEO_EMEA?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1660753617539",
      productName: "Apple 12 pro ",
      prize: "$700",
      rating: "⭐⭐⭐⭐",
    },
    {
      img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-pro-model-unselect-gallery-2-202209_GEO_EMEA?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1660753617539",
      productName: "Apple 13 ",
      prize: "$800",
      rating: "⭐⭐⭐",
    },
    {
      img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-pro-model-unselect-gallery-2-202209_GEO_EMEA?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1660753617539",
      productName: "Apple 11 pro ",
      prize: "$600",
      rating: "⭐⭐⭐",
    },
  ];
  const [item, setItems] = useState(0);
  return (
    <div className="App">
      <NavBar item={item} />
      <Header />
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {products.map((ele, idx) => {
              return (
                <Products
                  value={ele}
                  key={idx}
                  item={item}
                  setItems={setItems}
                />
              );
            })}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;
