import Image from "next/image";

const DownloadAppSection = () => {
  return (
    <div className="flex flex-col bg-slate-200 p-4 mb-10 rounded-lg border border-gray-300 gap-2">
      <div className="flex gap-2 items-center">
        <div className="font-bold text-sm">DOWNLOAD APP</div>
        <div className="text-xs text-green-500">1 Crore+ Downloads</div>
      </div>
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <div>
            <Image
              src="https://indcdn.indmoney.com/cdn-cgi/image/quality=auto,format=auto,width=48/https://indcdn.indmoney.com/cdn/images/seo/website/apple_round_logo.png"
              alt="Logo"
              width={20}
              height={20}
            />
          </div>
          <div className="text-xs">4.7 ⭐️⭐️⭐️⭐️⭐️</div>
        </div>
        <div className="flex items-center gap-2">
          <div>
            <Image
              src="https://indcdn.indmoney.com/cdn-cgi/image/quality=auto,format=auto,width=48/https://indcdn.indmoney.com/cdn/images/seo/website/playstore_round_logo.png"
              alt="Logo"
              width={20}
              height={20}
            />
          </div>
          <div className="text-xs">4.7 ⭐️⭐️⭐️⭐️⭐️</div>
        </div>
      </div>
    </div>
  );
};

export default DownloadAppSection;
