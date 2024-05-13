import LinkedIn from 'react-feather/dist/icons/linkedin'
import Instagram from 'react-feather/dist/icons/instagram'
import GitHub from 'react-feather/dist/icons/github'
import Twitter from 'react-feather/dist/icons/twitter'
import RSS from 'react-feather/dist/icons/rss'

function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="w-full mx-auto pb-16">
      <ul className="font-sm w-full flex flex-row justify-between text-slate-600 dark:text-slate-300">
        <li>
          <a
            className="flex items-center transition-all hover:text-slate-800 dark:hover:text-slate-100 no-underline"
            rel="noopener noreferrer"
            target="_blank"
            href="/rss"
          >
            <RSS size={16} />
            <p className="ml-2">RSS</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-slate-800 dark:hover:text-slate-100 no-underline"
            rel="noopener noreferrer"
            target="_blank"
            href="https://twitter.com/mxstbr"
          >
            <Twitter size={16} />
            <p className="ml-2">Twitter</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-slate-800 dark:hover:text-slate-100 no-underline"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/mxstbr"
          >
            <GitHub size={16} />
            <p className="ml-2">GitHub</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-slate-800 dark:hover:text-slate-100 no-underline"
            rel="noopener noreferrer"
            target="_blank"
            href="https://linkedin.com/in/mxstbr"
          >
            <LinkedIn size={16} />
            <p className="ml-2">LinkedIn</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-slate-800 dark:hover:text-slate-100 no-underline"
            rel="noopener noreferrer"
            target="_blank"
            href="https://instagram.com/mxstbr"
          >
            <Instagram size={16} />
            <p className="ml-2">Instagram</p>
          </a>
        </li>
      </ul>
    </footer>
  )
}
