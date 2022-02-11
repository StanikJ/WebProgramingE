import {Offer} from "./offer.js";
import { Product } from "./product.js";

const table = new Offer();

table.addProduct(new Product("Website","per Page", 150, 0));
table.addProduct(new Product("Coding","per Class", 200, 0));
table.addProduct(new Product("Design","per Hour", 180, 0));
table.addProduct(new Product("Support","per Hour", 50, 0));

table.create(document.body);