import React from 'react';
import Nav from '../components/nav';

export default function credits() {
  return (
    <div>
      <div className="bg-gray-800 mb-4">
        <Nav />
      </div>

      <div className="p-2 md:px-8 mb-8 flex items-center flex-col">
        <div className="font-heading text-center leading-10 text-3xl md:text-4xl mb-2 tracking-tight font-semibold capitalize px-4 md:p-0 text-neutral">
          <span className="text-highlight">
            Bibliography
          </span>
        </div>
        <ul className="flex mt-4 max-w-lg flex-wrap px-4 items-center justify-center">
          <li className="mr-6">
            <a href=" https://www.goldennumber.net/" target="_blank" rel="noopener noreferrer">Golden Number</a>
          </li>
          <li className="mr-6">
            <a href=" https://dribbble.com/" target="_blank" rel="noopener noreferrer">Dribbble</a>
          </li>
          <li className="mr-6">
            <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">Instagram</a>
          </li>
          <li className="mr-6">
            <a href="https://en.wikipedia.org/wiki/Golden_ratio" target="_blank" rel="noopener noreferrer">Wikipedia</a>
          </li>
          <li className="mr-6">
            <a href="https://www.britannica.com/science/golden-ratio" target="_blank" rel="noopener noreferrer">Britannica</a>
          </li>
          <li className="mr-6">
            <a href="https://www.canva.com/learn/what-is-the-golden-ratio/" target="_blank" rel="noopener noreferrer">Canva</a>
          </li>
          <li className="mr-6">
            <a href="https://mathworld.wolfram.com/GoldenRatio.html" target="_blank" rel="noopener noreferrer">Mathworld</a>
          </li>
          <li className="mr-6">
            <a href="https://www.omnicalculator.com/math/golden-ratio" target="_blank" rel="noopener noreferrer">Omni Calculator</a>
          </li>
          <li className="mr-6">
            <a href="https://www.youtube.com/watch?v=ztTskI4YW6g" target="_blank" rel="noopener noreferrer">Youtube</a>
          </li>
          <li className="mr-6">
            <a href="https://www.creativebloq.com/design/designers-guide-golden-ratio-12121546" target="_blank" rel="noopener noreferrer">Creative Bloq</a>
          </li>
          <li>
            <a href="https://www.khanacademy.org/math/geometry-home/geometry-lines/the-golden-ratio/v/the-golden-ratio" target="_blank" rel="noopener noreferrer">Khan Academy</a>
          </li>

        </ul>
      </div>
      <div className="p-2 md:px-8">
        <div className="font-heading text-center leading-10 mb-2  text-3xl md:text-4xl tracking-tight font-semibold capitalize px-4 md:p-0 text-neutral">
          <span className="text-highlight">
            Credits
          </span>
        </div>
        <ul className="flex items-center flex-wrap justify-center">
          <li className="mr-6">
            <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">
              <svg height="50" viewBox="0 0 148 90" version="1.1"><path d="M34.992 23.495h27.855v2.219H37.546v16.699h23.792v2.219H37.546v18.334h25.591v2.219H34.992v-41.69zm30.35 0h2.96l13.115 18.334 13.405-18.334L113.055.207 83.1 43.756l15.436 21.429H95.46L81.417 45.683 67.316 65.185h-3.018L79.85 43.756 65.343 23.495zm34.297 2.219v-2.219h31.742v2.219h-14.623v39.47h-2.554v-39.47H99.64zM.145 23.495h3.192l44.011 66.003L29.16 65.185 2.814 26.648l-.116 38.537H.145v-41.69zm130.98 38.801c-.523 0-.914-.405-.914-.928 0-.524.391-.929.913-.929.528 0 .913.405.913.929 0 .523-.385.928-.913.928zm2.508-2.443H135c.019.742.56 1.24 1.354 1.24.888 0 1.391-.535 1.391-1.539v-6.356h1.391v6.362c0 1.808-1.043 2.849-2.77 2.849-1.62 0-2.732-1.01-2.732-2.556zm7.322-.08h1.379c.118.853.95 1.395 2.149 1.395 1.117 0 1.937-.58 1.937-1.377 0-.685-.521-1.097-1.708-1.377l-1.155-.28c-1.62-.38-2.36-1.166-2.36-2.487 0-1.602 1.304-2.668 3.26-2.668 1.82 0 3.15 1.066 3.23 2.58h-1.354c-.13-.828-.85-1.346-1.894-1.346-1.1 0-1.832.53-1.832 1.34 0 .642.472 1.01 1.64 1.284l.987.243c1.838.43 2.596 1.178 2.596 2.53 0 1.72-1.33 2.799-3.453 2.799-1.987 0-3.323-1.029-3.422-2.637z" fill="#000" fillRule="nonzero" /></svg>
            </a>
          </li>
          <li className="mr-6">
            <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
              <img className="h-12" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K" alt="" height="20" />
            </a>
          </li>
          <li className="mr-6">
            <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer">
              <svg className="w-auto hidden md:block h-12" viewBox="0 0 273 64" fill="none">
                <title>Tailwind CSS</title>
                <path fill="url(#paint0_linear)" fillRule="evenodd" clipRule="evenodd" d="M32 16C24.8 16 20.3 19.6 18.5 26.8C21.2 23.2 24.35 21.85 27.95 22.75C30.004 23.2635 31.4721 24.7536 33.0971 26.4031C35.7443 29.0901 38.8081 32.2 45.5 32.2C52.7 32.2 57.2 28.6 59 21.4C56.3 25 53.15 26.35 49.55 25.45C47.496 24.9365 46.0279 23.4464 44.4029 21.7969C41.7557 19.1099 38.6919 16 32 16ZM18.5 32.2C11.3 32.2 6.8 35.8 5 43C7.7 39.4 10.85 38.05 14.45 38.95C16.504 39.4635 17.9721 40.9536 19.5971 42.6031C22.2443 45.2901 25.3081 48.4 32 48.4C39.2 48.4 43.7 44.8 45.5 37.6C42.8 41.2 39.65 42.55 36.05 41.65C33.996 41.1365 32.5279 39.6464 30.9029 37.9969C28.2557 35.3099 25.1919 32.2 18.5 32.2Z" />
                <path fill="#2D3748" fillRule="evenodd" clipRule="evenodd" d="M85.996 29.652H81.284V38.772C81.284 41.204 82.88 41.166 85.996 41.014V44.7C79.688 45.46 77.18 43.712 77.18 38.772V29.652H73.684V25.7H77.18V20.596L81.284 19.38V25.7H85.996V29.652ZM103.958 25.7H108.062V44.7H103.958V41.964C102.514 43.978 100.272 45.194 97.308 45.194C92.14 45.194 87.846 40.824 87.846 35.2C87.846 29.538 92.14 25.206 97.308 25.206C100.272 25.206 102.514 26.422 103.958 28.398V25.7ZM97.954 41.28C101.374 41.28 103.958 38.734 103.958 35.2C103.958 31.666 101.374 29.12 97.954 29.12C94.534 29.12 91.95 31.666 91.95 35.2C91.95 38.734 94.534 41.28 97.954 41.28ZM114.902 22.85C113.458 22.85 112.28 21.634 112.28 20.228C112.28 18.784 113.458 17.606 114.902 17.606C116.346 17.606 117.524 18.784 117.524 20.228C117.524 21.634 116.346 22.85 114.902 22.85ZM112.85 44.7V25.7H116.954V44.7H112.85ZM121.704 44.7V16.96H125.808V44.7H121.704ZM152.446 25.7H156.778L150.812 44.7H146.784L142.832 31.894L138.842 44.7H134.814L128.848 25.7H133.18L136.866 38.81L140.856 25.7H144.77L148.722 38.81L152.446 25.7ZM161.87 22.85C160.426 22.85 159.248 21.634 159.248 20.228C159.248 18.784 160.426 17.606 161.87 17.606C163.314 17.606 164.492 18.784 164.492 20.228C164.492 21.634 163.314 22.85 161.87 22.85ZM159.818 44.7V25.7H163.922V44.7H159.818ZM178.666 25.206C182.922 25.206 185.962 28.094 185.962 33.034V44.7H181.858V33.452C181.858 30.564 180.186 29.044 177.602 29.044C174.904 29.044 172.776 30.64 172.776 34.516V44.7H168.672V25.7H172.776V28.132C174.03 26.156 176.082 25.206 178.666 25.206ZM205.418 18.1H209.522V44.7H205.418V41.964C203.974 43.978 201.732 45.194 198.768 45.194C193.6 45.194 189.306 40.824 189.306 35.2C189.306 29.538 193.6 25.206 198.768 25.206C201.732 25.206 203.974 26.422 205.418 28.398V18.1ZM199.414 41.28C202.834 41.28 205.418 38.734 205.418 35.2C205.418 31.666 202.834 29.12 199.414 29.12C195.994 29.12 193.41 31.666 193.41 35.2C193.41 38.734 195.994 41.28 199.414 41.28ZM223.278 45.194C217.54 45.194 213.246 40.824 213.246 35.2C213.246 29.538 217.54 25.206 223.278 25.206C227.002 25.206 230.232 27.144 231.752 30.108L228.218 32.16C227.382 30.374 225.52 29.234 223.24 29.234C219.896 29.234 217.35 31.78 217.35 35.2C217.35 38.62 219.896 41.166 223.24 41.166C225.52 41.166 227.382 39.988 228.294 38.24L231.828 40.254C230.232 43.256 227.002 45.194 223.278 45.194ZM238.592 30.944C238.592 34.402 248.814 32.312 248.814 39.342C248.814 43.142 245.508 45.194 241.404 45.194C237.604 45.194 234.868 43.484 233.652 40.748L237.186 38.696C237.794 40.406 239.314 41.432 241.404 41.432C243.228 41.432 244.634 40.824 244.634 39.304C244.634 35.922 234.412 37.822 234.412 31.02C234.412 27.448 237.49 25.206 241.366 25.206C244.482 25.206 247.066 26.65 248.396 29.158L244.938 31.096C244.254 29.614 242.924 28.93 241.366 28.93C239.884 28.93 238.592 29.576 238.592 30.944ZM256.11 30.944C256.11 34.402 266.332 32.312 266.332 39.342C266.332 43.142 263.026 45.194 258.922 45.194C255.122 45.194 252.386 43.484 251.17 40.748L254.704 38.696C255.312 40.406 256.832 41.432 258.922 41.432C260.746 41.432 262.152 40.824 262.152 39.304C262.152 35.922 251.93 37.822 251.93 31.02C251.93 27.448 255.008 25.206 258.884 25.206C262 25.206 264.584 26.65 265.914 29.158L262.456 31.096C261.772 29.614 260.442 28.93 258.884 28.93C257.402 28.93 256.11 29.576 256.11 30.944Z" />
                <defs>
                  <linearGradient id="paint0_linear" x1="3.5" y1="16" x2="59" y2="48" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#2298BD" />
                    <stop offset="1" stopColor="#0ED7B5" />
                  </linearGradient>
                </defs>
              </svg>
            </a>
          </li>
          <li className="mr-6">
            <a href="https://www.framer.com/motion/" target="_blank" rel="noopener noreferrer">
              <svg className="h-12 fill-current text-red-brand" viewBox="0 0 13 15"><path d="M0 14V1l6.5 6.5L13 1v13l-3.25-3.25L6.5 14l-3.25-3.25z" /></svg>
            </a>
          </li>
          <li>
            <a href="https://konvajs.org/" target="_blank" rel="noopener noreferrer">
              <img className="h-12" src="https://konvajs.org/css/images/logo@2x.png" alt="Konva JS" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
