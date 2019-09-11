export class Color {
  id: number;
  color_key: string;
  color: string;

  constructor(id: number, color_key: string, color: string) {
    this.id = id;
    this.color_key = color_key;
    this.color = color;
  }
}
