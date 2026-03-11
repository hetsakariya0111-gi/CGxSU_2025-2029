const Footer = () => {
  return (
    <footer className="mt-12 bg-white text-gray-700 py-16 px-[8%] border-t border-gray-300">
      {/* Footer Top Links */}
      <div className="flex flex-wrap justify-between gap-10 mb-10">
        {/* Column 1 */}
        <div className="flex-1 min-w-[200px]">
          <h3 className="text-base font-bold">Get support</h3>
          <p className="my-2">Help Center</p>
          <p className="my-2">Live chat</p>
          <p className="my-2">Check order status</p>
          <p className="my-2">Refunds</p>
          <p className="my-2">Report abuse</p>
        </div>

        {/* Column 2 */}
        <div className="flex-1 min-w-[200px]">
          <h3 className="text-base font-bold">Payments and protections</h3>
          <p className="my-2">Safe and easy payments</p>
          <p className="my-2">Money-back policy</p>
          <p className="my-2">On-time shipping</p>
          <p className="my-2">After-sales protections</p>
          <p className="my-2">Product monitoring services</p>
        </div>

        {/* Column 3 */}
        <div className="flex-1 min-w-[200px]">
          <h3 className="text-base font-bold">Source on Alibaba.com</h3>
          <p className="my-2">Request for Quotation</p>
          <p className="my-2">Membership program</p>
          <p className="my-2">Sales tax and VAT</p>
          <p className="my-2">Alibaba.com Reads</p>
        </div>

        {/* Column 4 */}
        <div className="flex-1 min-w-[200px]">
          <h3 className="text-base font-bold">Sell on Alibaba.com</h3>
          <p className="my-2">Start selling</p>
          <p className="my-2">Seller Central</p>
          <p className="my-2">Become a Verified Supplier</p>
          <p className="my-2">Partnerships</p>
          <p className="my-2">Download the app for suppliers</p>
        </div>

        {/* Column 5 */}
        <div className="flex-1 min-w-[200px]">
          <h3 className="text-base font-bold">Get to know us</h3>
          <p className="my-2">About Alibaba.com</p>
          <p className="my-2">Corporate responsibility</p>
          <p className="my-2">News center</p>
          <p className="my-2">Careers</p>

          <h4 className="text-sm font-bold mt-5">Stay Connected</h4>
          <div className="mt-2.5 text-2xl">
            <span className="mr-2.5">🌐</span>
            <span className="mr-2.5">💼</span>
            <span className="mr-2.5">📷</span>
            <span className="mr-2.5">🐦</span>
            <span className="mr-2.5">🎵</span>
          </div>
        </div>
      </div>

      {/* Payment Icons */}
      <div className="flex flex-wrap items-center gap-2.5 justify-center mb-8">
        <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png" alt="Mastercard" className="h-7" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/5/5a/Visa_Inc._logo.svg" alt="Visa" className="h-7" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-7" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="Apple Pay" className="h-7" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/d/d0/Google_Pay_Logo.svg" alt="Google Pay" className="h-7" />
      </div>

      {/* App Download */}
      <div className="text-center mb-10">
        <p className="text-sm">
          Trade on the go with the{' '}
          <strong>
            <a href="#" className="text-blue-600 no-underline">
              Alibaba.com app
            </a>
          </strong>
        </p>
        <div className="flex justify-center gap-4 mt-2.5">
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/5f/Available_on_the_App_Store_%28black%29_SVG.svg" alt="App Store" className="h-10" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="h-10" />
        </div>
      </div>

      {/* Bottom Links */}
      <div className="text-center text-sm text-gray-500">
        <p>AliExpress | 1688.com | Tmall Taobao World | Alipay | Lazada | Taobao Global | Trendyol | Europages</p>
        <p className="mt-2.5">
          Policies and rules • Legal Notice • Product Listing Policy • Intellectual Property Protection • Privacy
          Policy • Terms of Use • Integrity Compliance
        </p>
        <p className="mt-2.5">© 1999–2025 Alibaba.com. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;