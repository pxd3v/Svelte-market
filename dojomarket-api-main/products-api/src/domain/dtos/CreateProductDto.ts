export class CreateProductDto {
  constructor(
    public name: string,
    public description: string,
    public price: number
  ) {}
}
