export interface IMealCategory {
  idCategory: string;
  strCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: string;
}

export interface IMealsCategoryResponse {
  categories: IMealCategory[];
}
