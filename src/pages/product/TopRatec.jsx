import HeroSection, { PriorSection, ProductList } from "./index";

export default function TopRated() {
  return (
    <div>
        <HeroSection />
        <PriorSection />
        <ProductList />
        <section>
            <div>
                <h3>Top Rated Products</h3>
            </div>
        </section>
    </div>
  );
}