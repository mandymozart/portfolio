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
