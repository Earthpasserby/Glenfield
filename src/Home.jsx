import HeroCarousel from "./Components/HeroCarousel";

const slides = [
  {
    id: 1,
    title: "Fresh produce from trusted local farmers",
    subtitle:
      "Explore seasonal fruits and vegetables harvested at peak freshness.",
    ctaText: "Shop Products",
    ctaTo: "/products",
    imageUrl:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Meet the farmers behind your food",
    subtitle:
      "Discover sustainable farming practices and stories from our community.",
    ctaText: "View Farmers",
    ctaTo: "/farmers",
    imageUrl:
      "https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Sell your farm products with ease",
    subtitle: "Join Glenfield and reach more customers online.",
    ctaText: "Start Selling",
    ctaTo: "/sell",
    imageUrl:
      "https://images.unsplash.com/photo-1589924708291-8fc8f3f32450?q=80&w=1600&auto=format&fit=crop",
  },
];

const Home = () => {
  return (
    <main>
      <HeroCarousel slides={slides} />
    </main>
  );
};
export default Home;
