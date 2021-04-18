export default function UseSVG() {
  return (
    <svg
      aria-hidden='true'
      style='position: absolute; width: 0; height: 0; overflow: hidden'
      xmlns='http://www.w3.org/2000/svg'>
      {/*返回键*/}
      <symbol id='arrow_left' viewBox='0 0 1024 1024'>
        <path d='M748.8 928 716.8 960 275.2 512l441.6-448 32 32L345.6 512 748.8 928z'></path>
      </symbol>
    </svg>
  )
}
