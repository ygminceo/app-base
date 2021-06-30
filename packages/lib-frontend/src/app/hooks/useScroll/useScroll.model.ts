export type UseScrollModel = () => UseScrollReturnsModel;

export interface UseScrollReturnsModel {
  isMinimized: boolean;
  handleScroll(y: number): any;
}
