import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-gray-950 text-white mt-16">
      <div className="max-w-6xl mx-auto px-6 py-12">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="text-green-400 font-bold text-lg mb-3">
              AlphaWithShivam
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Stock market education in Hindi — free tools, articles and
              resources for Indian investors.
            </p>
            <div className="flex gap-3 mt-4 flex-wrap">

  {/* YouTube */}
  <a href="https://www.youtube.com/@AlphaWithShivam" target="_blank"
    className="bg-gray-800 hover:bg-red-600 transition p-2 rounded-lg">
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  </a>

  {/* WhatsApp */}
  <a href="https://wa.me/916202823588" target="_blank"
    className="bg-gray-800 hover:bg-green-600 transition p-2 rounded-lg">
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  </a>

  {/* Instagram */}
  <a href="https://www.instagram.com/alphawithshivam/" target="_blank"
    className="bg-gray-800 hover:bg-pink-600 transition p-2 rounded-lg">
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
    </svg>
  </a>

  {/* Facebook */}
  <a href="https://www.facebook.com/profile.php?id=61590518280985" target="_blank"
    className="bg-gray-800 hover:bg-blue-600 transition p-2 rounded-lg">
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  </a>

  {/* X (Twitter) */}
  <a href="https://x.com/AlphaWithShivam" target="_blank"
    className="bg-gray-800 hover:bg-gray-600 transition p-2 rounded-lg">
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  </a>

  {/* Threads */}
  <a href="#" target="_blank"
    className="bg-gray-800 hover:bg-gray-500 transition p-2 rounded-lg">
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.851 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.964-.065-1.19.408-2.285 1.33-3.082.88-.76 2.119-1.207 3.583-1.291a13.853 13.853 0 0 1 3.02.142c-.126-.742-.375-1.332-.75-1.757-.513-.586-1.308-.883-2.378-.889h-.02c-.806 0-1.894.227-2.525 1.block l-1.670-1.34C8.316 5.978 9.616 5.5 11.186 5.5h.02c3.237.01 5.166 1.937 5.339 5.296.108.042.215.087.32.133 1.47.641 2.49 1.68 2.951 3.005.673 1.905.51 5.07-2.169 7.637-1.845 1.798-4.133 2.671-7.46 2.429z"/>
    </svg>
  </a>

</div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-sm">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/blog", label: "Blog" },
                { href: "/tools", label: "Tools" },
                { href: "/resources", label: "Resources" },
                { href: "/about", label: "About" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href}
                    className="text-gray-400 hover:text-green-400 text-sm transition">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Tools */}
          <div>
            <h4 className="font-semibold mb-4 text-sm">Free Tools</h4>
            <ul className="space-y-2">
              {[
                { href: "/tools/sip", label: "SIP Calculator" },
                { href: "/tools/income-tax", label: "Income Tax Calculator" },
                { href: "/tools/rr", label: "Risk/Reward Calculator" },
                { href: "/tools/position", label: "Position Size Calculator" },
                { href: "/tools/brokerage", label: "Brokerage Calculator" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href}
                    className="text-gray-400 hover:text-green-400 text-sm transition">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-sm">Contact & Work</h4>
            <ul className="space-y-2">
              {[
                { href: "/hire-me", label: "Hire Me" },
                { href: "/bundles", label: "Bundles" },
                { href: "https://wa.me/916202823588", label: "WhatsApp", external: true },
                { href: "https://www.youtube.com/@AlphaWithShivam", label: "YouTube", external: true },
              ].map((l) => (
                <li key={l.label}>
                  {l.external ? (
                    <a href={l.href} target="_blank"
                      className="text-gray-400 hover:text-green-400 text-sm transition">
                      {l.label}
                    </a>
                  ) : (
                    <Link href={l.href}
                      className="text-gray-400 hover:text-green-400 text-sm transition">
                      {l.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-gray-600 text-xs">
            © {new Date().getFullYear()} AlphaWithShivam. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs">
            * Affiliate links present. Investing involves risk — do your own research.
          </p>
        </div>

      </div>
    </footer>
  )
}