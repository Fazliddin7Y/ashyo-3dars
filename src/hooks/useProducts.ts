import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchElectronics = async () => {
  const { data } = await axios.get("https://fakestoreapi.com/products/category/electronics");
  return data;
};

export const useProducts = () => {
  return useQuery({ queryKey: ["electronics"], queryFn: fetchElectronics });
};
