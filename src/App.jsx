function App() {
  return (
    <>
    <div className="relative w-screen h-screen overflow-hidden bg-[#E0E8FF] flex justify-center items-center">
  {/* Mobile Background */}
  <div className="md:hidden absolute top-0 left-0 w-full h-[50vh] bg-[url('./pattern-background-mobile.svg')] bg-cover bg-center bg-no-repeat"></div>
  
  {/* Desktop Background */}
  <div className="hidden md:block absolute top-0 left-0 w-full h-[50vh] bg-[url('./pattern-background-desktop.svg')] bg-cover bg-center bg-no-repeat"></div>

  {/* Main Card */}
  <div className="z-10 w-[330px] md:w-[450px] h-[570px] md:h-[695px] bg-white rounded-2xl overflow-hidden shadow-xl">
    <img
      src="illustration-hero.svg"
      alt="Hero illustration"
      className="object-cover mb-[35px] md:mb-[50px]"
    />
    <div className="p-5">
      <h1 className="text-center font-bold text-xl md:text-2xl mb-5">
        Order Summary
      </h1>
      <p className="text-gray-400 text-center text-base md:text-lg mb-5">
        You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!
      </p>
      <div className="h-20 w-full rounded-xl bg-[#F8F9FE] flex items-center mb-5">
        <div className="flex items-center w-[80%]">
          <div className="h-[50px] w-[50px] rounded-full bg-[#DDE5F8] flex justify-center items-center">
            <img src="icon-music.svg" alt="Music icon" />
          </div>
          <div className="ml-5">
            <p className="font-bold">Annual Plan</p>
            <p className="text-gray-500">$59.99/year</p>
          </div>
        </div>
        <div className="ml-auto">
          <a
            href="https://github.com/fatintawsifhoque"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#433B91] font-bold underline hover:text-[#786FC8] cursor-pointer"
          >
            Change
          </a>
        </div>
      </div>
      <button className="h-[50px] w-full bg-[#382AE1] hover:bg-[#766CF1] rounded-2xl text-lg font-bold text-white mb-[35px]">
        Proceed to Payment
      </button>
      <button className="text-gray-500 w-full font-semibold hover:text-gray-800">
        Cancel Order
      </button>
    </div>
  </div>

  {/* ✨ Enhanced Signature with Animation & Icon */}
  <a
    href="https://github.com/fatintawsifhoque"
    target="_blank"
    rel="noopener noreferrer"
    className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 group"
  >
    <div className="flex items-center space-x-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30 transition-all duration-300 hover:bg-white hover:shadow-lg hover:-translate-y-1">
      {/* GitHub Icon (inline SVG) */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="text-gray-700 group-hover:text-[#333] transition-colors"
      >
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>

      {/* Signature Text */}
      <span className="text-gray-700 font-semibold text-lg bg-clip-text group-hover:text-[#433B91] transition-colors duration-300">
        Coded by Fatin Tawsif Hoque
      </span>
    </div>
  </a>
</div>
    </>
  );
}

export default App;
