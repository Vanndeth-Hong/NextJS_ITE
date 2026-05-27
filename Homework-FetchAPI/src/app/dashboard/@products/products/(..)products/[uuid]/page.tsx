import { ProductDetailModalComponent } from "@/components/modal/ProductDetailModalComponent";

export default async function ProductDetailModal({
  params,
}: {
  params: Promise<{ uuid: string }>;
}) {
  const { uuid } = await params;
  const data = await fetchDetail(uuid);

  return (
    <div>
      <ProductDetailModalComponent
        thumbnail={data.thumbnail}
        price={data.price}
        title={data.title}
        description={data.description}
        id={data.id}
        category={data.category}
        rating={data.rating}
        stock={data.stock}
        brand={data.brand}
      />
    </div>
  );
}

export async function fetchDetail(uuid: string) {
  try {
    const res = await fetch(`https://dummyjson.com/products/${uuid}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const data = await res.json();
    return data;
  } catch (error) {
    throw new Error(`Failed to fetch product details: ${error}`);
  }
}
