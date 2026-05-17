export default function Footer() {
  return (
    <footer
      id="location"
      className="bg-black text-gray-400 py-10 px-6 text-center text-sm"
    >
      <p className="text-white font-bold text-lg mb-1">Phillips Flea</p>

      <p>179 Broad St, Phillipsburg, NJ 08865</p>

      <p className="mt-2">
        <a
          href="tel:+19083445061"
          className="hover:text-white transition-colors"
        >
          908.344.5061
        </a>
        {" · "}
        <a
          href="mailto:junkdrunkflea@gmail.com"
          className="hover:text-white transition-colors"
        >
          junkdrunkflea@gmail.com
        </a>
      </p>

      <p className="mt-4 text-xs text-gray-400">
        &copy; {new Date().getFullYear()} Phillips Flea Market. All rights reserved.
      </p>
    </footer>
  );
}