import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const ProductCard = ({ product }: { product: any }) => {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader className="p-0 items-center">
        <Link href={`/product/${product.tags}`} prefetch={false}>
          <Image
            src={product.images[0]}
            alt={product.name}
            width={300}
            height={400}
            priority={true}
            className="h-[400px] w-auto max-w-[300px]"
          />
        </Link>
      </CardHeader>
      <CardContent>
        <div className="p-4">
          <p className="text-sm">
            {product.category} by {product.artist}
          </p>
          <h3 className="h3-bold mb-2">{product.name}</h3>

          <p className="text-sm ">
            {product.rating} stars ({product.numReviews} reviews)
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
