import TelegramIcon from 'assets/icon/telegram.svg';
import TwitterIcon from 'assets/icon/twitter.svg';

export default function Footer() {
  return (
    <footer>
      <div className="text-opacity-50 text-white/50 flex justify-center text-sm pb-1">
        Contact Us
      </div>
      <div className="flex justify-center gap-2 pb-12 text-secondaryTextColor">
        <div>
          <a
            className="
              group
              text-white/50 hover:text-white/80 active:text-blue-300/80
            "
            href="https://twitter.com/bowtiednightowl"
            target="_blank"
            rel="noreferrer"
          >
            <TwitterIcon className="w-5 h-5 -mt-1 mr-1 inline text-blue-500 group-hover:text-blue-300 group-active:text-blue-300/80" />
          </a>
        </div>
        <div className="text-opacity-50 text-secondaryTextColor">
          <a
            className="
              group
              text-white/50 hover:text-white/80 active:text-blue-300/80
            "
            href="https://t.me/onlyapes"
            target="_blank"
            rel="noreferrer"
          >
            <TelegramIcon className="w-5 h-5 -mt-1 mr-1 inline text-sky-500 group-hover:text-sky-300 group-active:text-sky-300/80" />
          </a>
        </div>
      </div>
    </footer>
  )
}