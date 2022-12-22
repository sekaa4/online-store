import CreateElement from './CreateElement';
import { CreateElementParams } from '../../interfaces/CreateElementParams';
import { DataProducts } from '../../interfaces/Data';

export default class Card extends CreateElement {
  private readonly id: number;
  private readonly brand: string;
  private readonly category: string;
  private readonly description: string;
  private readonly discountPercentage: number;
  private readonly images: string[];
  private readonly price: number;
  private readonly rating: number;
  private readonly stock: number;
  private readonly thumbnail: string;
  private readonly title: string;

  constructor(
    protected readonly name: string,
    protected readonly dataParams: DataProducts,
    protected readonly paramsObject?: CreateElementParams
  ) {
    super(name, paramsObject);
    this.id = dataParams.id;
    this.brand = dataParams.brand;
    this.category = dataParams.category;
    this.description = dataParams.description;
    this.discountPercentage = dataParams.discountPercentage;
    this.images = dataParams.images;
    this.price = dataParams.price;
    this.rating = dataParams.rating;
    this.stock = dataParams.stock;
    this.thumbnail = dataParams.thumbnail;
    this.title = dataParams.title;
  }
}
