export class Currency {
  static toBRL (number: number): string {
    return number.toLocaleString("pt-br", { style: "currency", currency: "BRL" });
  }
}
