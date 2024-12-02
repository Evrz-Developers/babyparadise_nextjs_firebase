import DummyCard from '@/components/common/DummyCard';

// Fetch product data on the server side
// async function fetchProductData(id) {
//     // Replace with your actual data fetching logic
//     const response = await fetch(`https://api.example.com/products/${id}`);
//     if (!response.ok) {
//         throw new Error('Failed to fetch product data');
//     }
//     return response.json();
// }

export default async function ProductDetailPage({ params }) {
    const { id } = params;
    // const product = await fetchProductData(id); // Fetch product data (commented out)

    return (
            <DummyCard
                gradientColor="#2634"
                title={id}
                description="product id 👆!"
            />
    );
}