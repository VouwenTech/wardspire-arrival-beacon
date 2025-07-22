const Index = () => {
  return (
    <div className="relative min-h-screen bg-hero-mountain bg-cover bg-center bg-no-repeat overflow-hidden">
      {/* Dark overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/60" />
      
      {/* Main content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4">
        <div className="text-center">
          <h1 className="font-display font-black text-white text-6xl sm:text-8xl md:text-9xl lg:text-[12rem] xl:text-[14rem] tracking-tight leading-none mb-4 drop-shadow-2xl">
            WARDSPIRE
          </h1>
          <p className="font-display font-light text-white text-sm sm:text-base md:text-lg tracking-[0.4em] uppercase drop-shadow-lg">
            COMING SOON
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-0 left-0 right-0 z-20">
        <div className="backdrop-blur-sm bg-black/30 border-t border-white/10">
          <div className="px-6 py-4">
            <p className="text-center text-white/70 text-xs font-display font-light tracking-wide">
              © {new Date().getFullYear()} WARDSPIRE. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
