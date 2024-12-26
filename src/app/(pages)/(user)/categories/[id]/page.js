import DummyCard from "@/components/common/DummyCard";
import PageWrapper from "@/components/common/layouts/PageWrapper";

export default async function CategoryDetailPage({ searchParams }) {
  const params = await searchParams;
  const category = params?.category ? JSON.parse(params.category) : null;

  return (
    <>
      {category ? (
        <PageWrapper breadcrumbItems={[{ label: category?.name, href: `#` }]}>
          <DummyCard
            gradientColor="#2634"
            title="🚧"
            description="We'll be back soon."
          />
        </PageWrapper>
      ) : (
        <div>
          <h2 className="title flex justify-center text-heading-4 pb-2">
            No category details to show!
          </h2>
        </div>
      )}
    </>
  );
}
