export const PATH_SHAPES = "/shapes";
export const PATH_FIGURES = "/figures";
export const PATH_ABOUT = "/about";

export const useNavLinks = () => {
  return [
    { key: "shapes", label: "Shapes", path: PATH_SHAPES },
    { key: "figures", label: "Solid Figures", path: PATH_FIGURES },
  ];
};
