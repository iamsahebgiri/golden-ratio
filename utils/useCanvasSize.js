import useWindowResize from './useWindowResize';

// this hook returns the pre-calculated side of the canvas
export default function useCanvasSize() {
  // get current width of the window for reponsive canvas
  const [width] = useWindowResize();

  // xl - 1280px
  if (width > 1280) return [809, 500];
  // sm - 640px
  return [340, 202];
}
