import { useReadContract } from 'wagmi'
import productABI from "../abis/product.json";
import { PRODUCT_CONTRACT_ADDRESS } from '../constant';

export default function PRODUCTDETAILS() {
    const { data, isLoading, isError} = useReadContract({
        abi: productABI,
        address: PRODUCT_CONTRACT_ADDRESS,
        functionName: "PRODUCTS",
      });

      if (isLoading) {
      return <div>Loading token...</div>;
      }
      return (
    <section>
    <h1> Product Details</h1>
    <div>PRODUCT ID: {data?.toString()}</div>
    <div>PRODUCT NAME: {data?.toString()}</div>
    <div>PRODUCT QUANTITY: {data?.toString()}</div>
    </section>
  );
}