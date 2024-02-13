interface Props {
  emoji: string;
  hueA: number;
  hueB: number;
}

export const hue = (h: number) => `hsl(${h}, 100%, 50%)`;

export const lerp = (from: number, to: number, speed: number) => {
  const r = (1 - speed) * from + speed * to;
  return Math.abs(from - to) < 0.001 ? to : r;
};

export function downloadFile(url: string, fileName: string) {
  //Create XMLHTTP Request.
  var req = new XMLHttpRequest();
  req.open('GET', url, true);
  req.responseType = 'blob';
  req.onload = function () {
    //Convert the Byte Data to BLOB object.
    var blob = new Blob([req.response], { type: 'application/octetstream' });

    const url = window.URL || window.webkitURL;
    const link = url.createObjectURL(blob);
    const a = document.createElement('a');
    a.setAttribute('download', fileName);
    a.setAttribute('href', link);
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };
  req.send();
}
