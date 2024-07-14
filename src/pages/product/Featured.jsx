import HeroSection, { PriorSection, ProductList } from ".";

export default function Featured() {
  return (
    <div>
        <HeroSection />
        <PriorSection />
        <ProductList />
        <section>
            <div>
                <h3>Featured Products</h3>
            </div>
        </section>
    </div>
  );
}