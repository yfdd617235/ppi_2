function HomePage() {
  return (
    <div className="flex items-center justify-center h-screen">
      <img
        src={`${import.meta.env.BASE_URL}logoT.png`}
        alt="Centered"
        className="w-1/2 h-auto object-contain"
      />
    </div>
  );
}

export default HomePage;
