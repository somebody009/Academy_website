/* eslint-disable @typescript-eslint/no-unused-vars */
"use client;"

interface HeaderLogoProps {
  className?: string
  invert?: boolean
  filled?: boolean
  fillOnHover?: boolean
}

 const  HeaderLogo : React.FC<HeaderLogoProps> = ({
  className,
  invert = false,
  filled = false,
  fillOnHover = false,
  ...props
})=> {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={276.88} height={39.857} {...props}>
      <g data-name="Group 422">
        <g fill="#121212" data-name="Group 421">
          <path
            d="M0 17.558V.408h7.28a7.224 7.224 0 0 1 5.46 2.114 8.694 8.694 0 0 1 2.2 6.365 9.477 9.477 0 0 1-1.891 6.2 7.043 7.043 0 0 1-5.768 2.474ZM3.711 3.579v10.809H7.02a3.855 3.855 0 0 0 2.907-1.153 5.525 5.525 0 0 0 1.3-3.987 6.792 6.792 0 0 0-1.04-4.131A4.528 4.528 0 0 0 6.358 3.58Z"
            data-name="Path 41"
          />
          <path
            d="M20.376 8.959h-3.357a3.85 3.85 0 0 1 1.915-3.267 7.315 7.315 0 0 1 3.829-.889q5.366 0 5.366 3.531v6.461a5.966 5.966 0 0 0 .425 2.762h-3.4a4.724 4.724 0 0 1-.236-1.2 5.365 5.365 0 0 1-4.113 1.537 4.511 4.511 0 0 1-2.955-.913 3.421 3.421 0 0 1-1.206-2.81 3.263 3.263 0 0 1 1.3-2.834 6.992 6.992 0 0 1 2.86-.937q2.718-.384 2.766-.408 1.205-.312 1.206-1.225a1.474 1.474 0 0 0-.662-1.393 3.019 3.019 0 0 0-1.513-.288 1.922 1.922 0 0 0-2.225 1.873Zm4.4 3.8v-1.273a3.641 3.641 0 0 1-1.749.552 10.049 10.049 0 0 0-2.033.456 1.575 1.575 0 0 0-.993 1.537q0 1.586 2.057 1.585 2.714-.003 2.714-2.862Z"
            data-name="Path 42"
          />
          <path
            d="M34.983 1.417V5.14h2.458v2.282h-2.458v6.149a1.69 1.69 0 0 0 .284 1.153 1.625 1.625 0 0 0 1.134.288 5.21 5.21 0 0 0 1.04-.1v2.666a12.415 12.415 0 0 1-1.962.12q-3.853 0-3.853-2.954V7.418h-2.032V5.136h2.033V1.413Z"
            data-name="Path 43"
          />
          <path
            d="M42.264 8.959h-3.357a3.851 3.851 0 0 1 1.915-3.267 7.316 7.316 0 0 1 3.829-.889q5.365 0 5.366 3.531v6.461a5.964 5.964 0 0 0 .426 2.762h-3.4a4.724 4.724 0 0 1-.236-1.2 5.365 5.365 0 0 1-4.113 1.537 4.511 4.511 0 0 1-2.955-.913 3.421 3.421 0 0 1-1.205-2.81 3.263 3.263 0 0 1 1.3-2.834 6.992 6.992 0 0 1 2.86-.937q2.718-.384 2.766-.408 1.205-.312 1.206-1.225a1.474 1.474 0 0 0-.662-1.393 3.018 3.018 0 0 0-1.513-.288q-2.062 0-2.227 1.873Zm4.4 3.8v-1.273a3.641 3.641 0 0 1-1.749.552 10.046 10.046 0 0 0-2.033.456 1.575 1.575 0 0 0-.993 1.537q0 1.586 2.057 1.585 2.714-.003 2.714-2.862Z"
            data-name="Path 44"
          />
          <path
            d="M51.903 11.866h3.6a2.86 2.86 0 0 0 1.135 2.45 4.26 4.26 0 0 0 2.6.721 4.9 4.9 0 0 0 2.127-.409 1.816 1.816 0 0 0 1.158-1.73q0-1.464-2.6-2.21-4.492-1.3-4.846-1.489a4.206 4.206 0 0 1-2.6-4.011 4.569 4.569 0 0 1 2.009-3.915A7.248 7.248 0 0 1 58.786 0a7.966 7.966 0 0 1 4.7 1.273 4.9 4.9 0 0 1 2.056 4.252h-3.589q-.142-2.594-3.333-2.594a3.256 3.256 0 0 0-1.726.432 1.692 1.692 0 0 0-.827 1.513 1.432 1.432 0 0 0 .922 1.369 34.453 34.453 0 0 0 4.113 1.225 9.852 9.852 0 0 1 2.955 1.153 4.325 4.325 0 0 1 2.056 3.843 4.863 4.863 0 0 1-1.8 3.939 7.97 7.97 0 0 1-5.224 1.562 8.149 8.149 0 0 1-5.011-1.465 5.414 5.414 0 0 1-2.175-4.636Z"
            data-name="Path 45"
          />
          <path
            d="M67.957 21.932V5.142h3.191v1.585h.047a3.942 3.942 0 0 1 3.64-1.922 4.923 4.923 0 0 1 4.207 2.018 7.578 7.578 0 0 1 1.347 4.66 7.145 7.145 0 0 1-1.347 4.444 4.737 4.737 0 0 1-4.018 1.97 4.094 4.094 0 0 1-3.664-1.873h-.047v5.909Zm6.169-6.605q2.908 0 2.908-3.939a5.092 5.092 0 0 0-.662-2.738 2.505 2.505 0 0 0-2.269-1.273 2.449 2.449 0 0 0-2.269 1.249 5.293 5.293 0 0 0-.638 2.762 4.963 4.963 0 0 0 .662 2.714 2.492 2.492 0 0 0 2.268 1.222Z"
            data-name="Path 46"
          />
          <path
            d="M85.614 8.959h-3.356a3.85 3.85 0 0 1 1.915-3.267 7.316 7.316 0 0 1 3.829-.889q5.366 0 5.366 3.531v6.461a5.97 5.97 0 0 0 .425 2.762h-3.4a4.718 4.718 0 0 1-.236-1.2 5.365 5.365 0 0 1-4.113 1.537 4.511 4.511 0 0 1-2.955-.913 3.421 3.421 0 0 1-1.205-2.81 3.262 3.262 0 0 1 1.3-2.834 6.992 6.992 0 0 1 2.86-.937q2.718-.384 2.766-.408 1.205-.312 1.205-1.225a1.473 1.473 0 0 0-.662-1.393 3.018 3.018 0 0 0-1.513-.288 1.922 1.922 0 0 0-2.226 1.873Zm4.4 3.8v-1.273a3.641 3.641 0 0 1-1.749.552 10.053 10.053 0 0 0-2.033.456 1.575 1.575 0 0 0-.993 1.537q0 1.586 2.057 1.585 2.714-.003 2.714-2.862Z"
            data-name="Path 47"
          />
          <path
            d="M107.572 9.512h-3.285a2.262 2.262 0 0 0-2.482-2.138 2.469 2.469 0 0 0-2.246 1.321 5.514 5.514 0 0 0-.615 2.714 5.132 5.132 0 0 0 .615 2.618 2.355 2.355 0 0 0 2.175 1.3q2.316 0 2.671-2.522h3.238a5.617 5.617 0 0 1-1.879 3.771 6.013 6.013 0 0 1-4.006 1.321 5.91 5.91 0 0 1-4.455-1.777 6.334 6.334 0 0 1-1.714-4.588 6.941 6.941 0 0 1 1.631-4.8 5.846 5.846 0 0 1 4.609-1.922 6.344 6.344 0 0 1 3.877 1.153 4.593 4.593 0 0 1 1.866 3.549Z"
            data-name="Path 48"
          />
          <path
            d="M121.116 12.178h-8.818q.142 3.147 3 3.147a3.048 3.048 0 0 0 1.749-.528 1.873 1.873 0 0 0 .9-1.081h2.955a5.509 5.509 0 0 1-5.72 4.18 5.919 5.919 0 0 1-4.55-1.814 7.324 7.324 0 0 1 .047-9.416 5.881 5.881 0 0 1 4.5-1.861 5.353 5.353 0 0 1 4.609 2.258 7.593 7.593 0 0 1 1.328 5.115Zm-8.817-2.162h5.46q-.473-2.642-2.671-2.642a2.6 2.6 0 0 0-2.175.961 2.877 2.877 0 0 0-.615 1.681Z"
            data-name="Path 49"
          />
          <path
            d="m128.297 17.558 6.261-14.136h2.544l6.28 14.136h-2.7l-5.386-12.743h1.033l-5.366 12.743Zm2.882-3.271.7-2.06h7.512l.7 2.06Z"
            data-name="Path 50"
          />
          <path
            d="M158.347 17.761a8 8 0 0 1-2.951-.535 7.012 7.012 0 0 1-2.365-1.514 6.909 6.909 0 0 1-1.56-2.312 7.876 7.876 0 0 1 0-5.816 6.845 6.845 0 0 1 1.57-2.312 7.16 7.16 0 0 1 2.365-1.515 8.463 8.463 0 0 1 6.081.061 6.188 6.188 0 0 1 2.385 1.767l-1.669 1.6a5.058 5.058 0 0 0-1.689-1.242 4.954 4.954 0 0 0-2.027-.414 5.312 5.312 0 0 0-2 .363 4.623 4.623 0 0 0-2.6 2.605 5.615 5.615 0 0 0 0 4 4.685 4.685 0 0 0 1.033 1.575 4.637 4.637 0 0 0 1.57 1.03 5.31 5.31 0 0 0 2 .364 4.785 4.785 0 0 0 3.717-1.676l1.669 1.616a6.373 6.373 0 0 1-2.385 1.757 7.881 7.881 0 0 1-3.144.598Z"
            data-name="Path 51"
          />
          <path
            d="m171.047 17.558 6.26-14.136h2.544l6.28 14.136h-2.7l-5.386-12.743h1.033l-5.366 12.743Zm2.882-3.271.7-2.06h7.512l.7 2.06Z"
            data-name="Path 52"
          />
          <path
            d="M194.855 17.558V3.421h6.082a8.5 8.5 0 0 1 3.975.888 6.6 6.6 0 0 1 2.663 2.464 7.7 7.7 0 0 1 0 7.422 6.576 6.576 0 0 1-2.663 2.474 8.5 8.5 0 0 1-3.975.888Zm2.584-2.221h3.378a5.718 5.718 0 0 0 2.713-.606 4.338 4.338 0 0 0 1.769-1.7 5.5 5.5 0 0 0 0-5.1 4.355 4.355 0 0 0-1.769-1.687 5.718 5.718 0 0 0-2.713-.605h-3.378Z"
            data-name="Path 53"
          />
          <path
            d="M220.81 15.357h7.85v2.2h-10.434V3.421h10.156v2.2h-7.572Zm-.2-6.059h6.916v2.161h-6.916Z"
            data-name="Path 54"
          />
          <path
            d="M238.497 17.558V3.421h2.127l6.081 10.319h-1.114l5.982-10.319h2.126l.02 14.136h-2.445l-.02-10.239h.517l-5.088 8.623h-1.153l-5.167-8.623h.6v10.239Z"
            data-name="Path 55"
          />
          <path
            d="M267.851 17.558v-5.594l.577 1.615-6.042-10.158h2.762l4.849 8.179h-1.55l4.889-8.179h2.544l-6.042 10.158.6-1.615v5.594Z"
            data-name="Path 56"
          />
        </g>
        <path fill="#002bff" d="M5.796 6.514v5.154l3.2-2.4Z" data-name="Path 57" />
      </g>
      <text
        fill="#006ce8"
        data-name="Powered by Satts Cyber Tech"
        fontFamily="Helvetica-Oblique, Helvetica"
        fontSize={11}
        fontStyle="oblique"
        transform="translate(100.88 35.857)"
      >
        <tspan x={0} y={0}>
          {"Powered by"}
        </tspan>
        <tspan y={0} fill="#0d6efd" fontFamily="Helvetica" fontSize={13} fontStyle="normal" />
        <tspan
          y={0}
          fill="#121212"
          fontFamily="Helvetica-Bold, Helvetica"
          fontSize={14}
          fontStyle="normal"
          fontWeight={700}
        >
          {" Satts Cyber Tech"}
        </tspan>
      </text>
    </svg>
  )
}

export default HeaderLogo;
