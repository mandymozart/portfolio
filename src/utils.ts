interface Props {
  emoji: string;
  hueA: number;
  hueB: number;
}

export const hue = (h: number) => `hsl(${h}, 100%, 50%)`;
