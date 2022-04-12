import { Injectable } from "@nestjs/common";

@Injectable({})
export class ProductService {
    productList = () => {
        return "hello from product service!!";
    }
}