function Footer() {
  const footer = [
    "Perusahaan",
    "Produk & Layanan",
    "Kerjasama",
    "Informasi",
    "Support",
  ];

  const menus = [
    [
      "Tentang Kami",
      "Domain",
      "Reseller Domain",
      "Pembayaran",
      "Panduan Pengguna",
    ],
    ["Hosting", "VPS", "SSL", "Email", "Website Builder"],
    ["Mitra Bisnis", "Reseller", "Afiliasi", "Kemitraan"],
    ["FAQ", "Blog", "Berita", "Karir"],
    ["Kontak", "Bantuan", "Ticket Support", "Live Chat"],
  ];

  return (
    <div className="footer">
      {footer.map((title, index) => (
        <div key={index} className="footer-section">
          <h4>{title}</h4>
          <ul className="footer-menu">
            {menus[index]?.map((menu, i) => (
              <li key={i}>{menu}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Footer;
