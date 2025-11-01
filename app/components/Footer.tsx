export default function Footer() {
    return (
      <footer id="contact" className="bg-black text-gray-300 py-10">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} BJJ Club. All rights reserved.</p>
          <div className="space-x-4">
            <a href="#" className="hover:text-green-400">Instagram</a>
            <a href="#" className="hover:text-green-400">Facebook</a>
            <a href="#" className="hover:text-green-400">YouTube</a>
          </div>
        </div>
      </footer>
    );
  }
  