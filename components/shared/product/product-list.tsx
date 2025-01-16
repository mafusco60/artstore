import ProductCard from "./product-card";
const ProductList = ({
  data,
  title,
  limit,
}: {
  data: any;
  title?: string;
  limit?: number;
}) => {
  const limitedData = limit ? data.slice(0, limit) : data;
  return (
    <div className="my-10">
      <h2 className="h2-bold mb-4">{title}</h2>
      {data.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:cols-3 lg:grid-cols-4 gap-4">
          {limitedData.map((product: any) => (
            <ProductCard key={product.tags} product={product}></ProductCard>
          ))}
        </div>
      ) : (
        <div>
          <p>No artworks found</p>
        </div>
      )}
    </div>
  );
};

export default ProductList;
