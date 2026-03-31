const Footer = ({ siteInfo }) => (
  <footer className="bg-neutral-950 text-neutral-300 py-20">
    <div className="max-w-[1920px] mx-auto px-6 lg:px-12 grid md:grid-cols-2 gap-12">
      <div>
        <span className="text-3xl md:text-4xl font-black text-white italic">{siteInfo.title}</span>
        <p className="mt-2 text-neutral-400 text-xs md:text-sm max-w-xs">© 2026 DOLGO-DOLA. All rights reserved.</p>
      </div>
      
      <div className="grid grid-cols-2 gap-8 text-sm">
        <div className="flex flex-col space-y-3">
          <h5 className="font-bold text-white text-xs uppercase tracking-widest">Info</h5>
					<a href="#" className="hover:text-white transition">About Us</a>
					<a href="#" className="hover:text-white transition">Careers</a>
					<a href="#" className="hover:text-white transition">Legal</a>
        </div>
        
        <div className="flex flex-col space-y-3">
          <h5 className="font-bold text-white text-xs uppercase tracking-widest">Social</h5>
					<a href="#" className="hover:text-white transition">Instagram</a>
					<a href="#" className="hover:text-white transition">Contact</a>
					<a href="#" className="hover:text-white transition">FAQ</a>
        </div>
      </div>
    </div>
		{/* <div className="max-w-[1920px] mx-auto px-6 lg:px-12 mt-16 pt-8 border-t border-neutral-800 text-center text-xs text-neutral-600 font-mono">
			© 2026 {siteInfo.title}. All rights reserved.
		</div> */}
  </footer>
);

export default Footer;