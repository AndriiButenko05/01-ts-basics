interface ProductInterface {
  readonly id: number;
  title: string;
  description?: string;
}

const product: ProductInterface = {
  id: 1,
  title: "Tablet",
  description: "Compact and fast",
};

console.log(`Product: ${JSON.stringify(product)}`);
