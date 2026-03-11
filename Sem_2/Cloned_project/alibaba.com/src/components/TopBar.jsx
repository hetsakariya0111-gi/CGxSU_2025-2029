const TopBar = () => {
  return (
    <div className="bg-topbar-bg text-white flex justify-between items-center px-4 md:px-10 py-2 text-sm">
      <div>
        <strong>Alibaba Lens</strong> | Instantly find suppliers with image on any website by our AI search extension!
      </div>
      <a href="#" className="bg-white text-black no-underline px-3.5 py-1.5 rounded font-medium">
        Add to Chrome
      </a>
    </div>
  );
};

export default TopBar;