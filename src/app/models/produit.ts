export interface Produit {
  id?: number;
  nom: string;
  nomCourt: string;
  prixBase: number;
  prixVente: number;
  maxRemise: number;
  unite: string;
  image: string;
  qteInitial: number;
  qteActuel: number;
}
