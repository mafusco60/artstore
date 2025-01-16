import sampleData from "@/db/sample-data";
import ProductList from "@/components/shared/product/product-list";

const Homepage = () => {
  return (
    <>
      <ProductList
        data={sampleData.products}
        title="Most Recent Artworks"
        limit={4}
      />
    </>
  );
};

export default Homepage;
