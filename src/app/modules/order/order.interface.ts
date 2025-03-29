export type Order = {
  email: string;
  productId: string;
  userId: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
  status: "pending" | "completed" | "cancelled";
  stock: number;
};
