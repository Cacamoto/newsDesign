export const useTheme = () =>
  useState<boolean>("isDarkTheme", () => useCookie("isDarkTheme"));

export const useOverlay = () => useState<boolean>("isOverlayOpen", () => false);
export const useMenu = () => useState<boolean>("isMenuOpen", () => false);
export const useCategoryMenu = () =>
  useState<boolean>("isCategoryMenuOpen", () => false);

export const useArticles = () => useState<[]>("articles", () => []);
export const useRandomArticle = () =>
  useState<null>("randomArticle", () => null);
export const useAllArticles = () => useState<[]>("allArticles", () => []);
export const useRouterPath = () => useState<[]>("route", () => []);
