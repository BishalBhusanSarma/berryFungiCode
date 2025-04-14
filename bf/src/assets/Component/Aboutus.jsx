function Aboutus() {
  const mailToLink = `mailto:bishalbhusnsarma87787@gmail.com?subject=Order%20Inquiry&body=Hello,%20I%20am%20interested%20in%20your%20mushroom%20products.%20Please%20provide%20more%20details.`;

  return (
    <>
      <div className='min-h-screen text-black' id='aboutus'>
        <h1 className='pt-2 text-5xl font-normal mb-12'>About Us</h1>
        <p className='px-8 md:px-32 text-lg md:text-xl font-light text-justify'>
          Welcome to <strong>BerryFungi</strong>, where nature meets innovation. We are passionate about harnessing the power of fungi to create sustainable, high-quality, and nutrient-rich solutions for everyday life.
        </p>
        <p className='px-8 md:px-32 text-lg md:text-xl font-light text-justify mt-4'>
          At BerryFungi, we specialize in fresh mushrooms, dried mushrooms, and delicious mushroom pickles. Our mission is to cultivate and deliver the best fungal-based solutions while promoting sustainability and environmental responsibility.
        </p>
        <p className='px-8 md:px-32 text-lg md:text-xl font-light text-justify mt-4'>
          Have any questions or want to place an order? Contact us at 
          <span> </span>
          <a href={mailToLink} className='text-blue-600 underline'>
            bishalbhusnsarma87787@gmail.com
          </a>
          <span> </span> or scan the QR code below to visit our WhatsApp store.
        </p>
        <div className='flex justify-center mt-8'>
          <img src='/scanner.jpg' alt='Scan to visit our WhatsApp store' className='w-64 h-auto shadow-lg rounded-lg' />
        </div>
      </div>
    </>
  );
}

export default Aboutus;
