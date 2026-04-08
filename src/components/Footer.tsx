export function Footer() {
  return (
    <footer className="w-full border-t border-black bg-white py-20 mt-20">
      <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="md:w-1/2">
          <h3 className="quote-label mb-4 uppercase tracking-widest">Contact</h3>
          <p className="text-xl font-medium">hello@levicoto.com</p>
          <p className="text-gray-500 mt-2">San Salvador, El Salvador</p>
        </div>
        <div className="md:w-1/2 flex flex-col gap-4">
          <h3 className="quote-label uppercase tracking-widest">Social</h3>
          <div className="flex gap-6">
            <a href="https://github.com/levi-coto" target="_blank" rel="noopener noreferrer" className="font-mono hover:line-through transition-all uppercase tracking-widest text-xs">Github</a>
            <a href="https://www.linkedin.com/in/lev%C3%ADcoto" target="_blank" rel="noopener noreferrer" className="font-mono hover:line-through transition-all uppercase tracking-widest text-xs">Linkedin</a>
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-6 mt-20 pt-8 border-t border-gray-100 flex justify-between items-center">
        <p className="quote-label text-gray-400 uppercase tracking-widest">© 2026 Leví Coto</p>
        <p className="quote-label text-gray-400 uppercase tracking-widest">For Display Only</p>
      </div>
    </footer>
  );
}
