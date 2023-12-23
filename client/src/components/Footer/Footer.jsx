function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="py-8 text-center sm:text-lg text-sm text-white tracking-wider bg-black">
      <p>copy & copyright &copy; by Alimisolution, {year}</p>
    </div>
  );
}

export default Footer;
