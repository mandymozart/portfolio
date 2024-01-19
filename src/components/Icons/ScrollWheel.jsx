const ScrollWheel = () => {
  return (
    <svg
      xmlns:dc='http://purl.org/dc/elements/1.1/'
      xmlns:svg='http://www.w3.org/2000/svg'
      xmlns='http://www.w3.org/2000/svg'
      version='1.1'
      viewBox='0 0 30 70'
      height='64'
      width='32'>
      <defs>
        <clipPath
          id='innerMouse'
          clipPathUnits='userSpaceOnUse'
          transform='translate(0,20)'>
          <path d='M -5,-5 H 35 V 55 H -5 Z M 15,2 C 7.798,2 2,7.7363825 2,14.861844 V 35.138156 C 2,42.263618 7.798,48 15,48 22.202,48 28,42.263618 28,35.138156 V 14.861844 C 28,7.7363825 22.202,2 15,2 Z m 0,12.591668 c -1.108,0 -2,0.892 -2,2 v 3 c 0,1.108 0.892,2 2,2 v 0 c 1.108,0 2,-0.892 2,-2 v -3 c 0,-1.108 -0.892,-2 -2,-2 z' />
        </clipPath>
      </defs>
      <rect
        type='rect'
        clip-path='url(#innerMouse)'
        rx='15'
        x='0'
        y='20'
        height='50'
        width='30'
        id='rect21'
      />
      <g transform='translate(0,10)'>
        <path
          id='arrowUp'
          d='M 15,4.3825497 9.8039349,7.382367 10.803874,9.114561 15,6.6919697 19.196127,9.114561 20.196065,7.382367 Z'
        />
        <animateTransform
          attributeName='transform'
          attributeType='XML'
          type='translate'
          from='0 8'
          to='0 -2'
          dur='1s'
          repeatCount='indefinite'
        />
        <animate
          id='op1'
          attributeName='opacity'
          from='0'
          to='1'
          dur='0.5s'
          begin='0s;op2.end'
        />
        <animate
          id='op2'
          attributeName='opacity'
          from='1'
          to='0'
          dur='0.5s'
          begin='op1.end'
        />
      </g>
    </svg>
  );
};

export default ScrollWheel;
