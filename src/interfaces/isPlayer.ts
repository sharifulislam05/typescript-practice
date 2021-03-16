export interface IsPlayer {
  name: string;
  country: string;
  age: number;
  play(): void;
  getProperty(): number;
}
