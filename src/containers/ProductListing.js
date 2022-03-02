import ProductCard from "../components/ProductCard";
import productImage from "../assets/profilelistimage.jpg";

const ProductListing = () => {
  return (
    <div className="profile-card-listing mt-3 grid grid-cols-3 lg:grid-cols-4 gap-3">
      <ProductCard productImage={productImage} />
      <ProductCard productImage={productImage} />
      <ProductCard productImage={productImage} />
      <ProductCard productImage={productImage} />
    </div>
  );
};

export default ProductListing;
