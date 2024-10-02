import { useFetchData } from "../hooks/useFetchData";

export const Product = () => {
  const { data, loading, error } = useFetchData("https://dummyjson.com/products");
  console.log(data?.products);
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="flex justify-center items-center text-3xl font-bold my-2">
        Products
      </h1>
      {data && data.products && data.products.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {data.products.map((product: any) => (
            <div
              className="bg-white shadow-lg rounded-lg overflow-hidden"
              key={product.id}
            >
              <div className="mx-auto flex w-full justify-center items-center">
              <img src={product.thumbnail} alt={product.title} className=" h-48 object-contain rounded-lg p-4 border border-solid border-slate-600" />

              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
                <p className="text-gray-600 mb-4">{product.description}</p>
               <div className="text-lg font-bold">Price: {product.price}</div>
               <button className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600">Add to cart</button>
              </div>
              <div>

              </div>
             
            </div>
          ))}
        </div>
      ) : (
        <p>No products available.</p>
      )}
    </div>
  );
};
