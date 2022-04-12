import { Controller, Get, Post } from "@nestjs/common";
import { ProductService } from "./product.service";

@Controller('product')
export class ProductController {
    constructor(private productService: ProductService) {
    }
    @Get('/')
    index(): any {
        const result = this.productService.productList();
        return {result: result};
    }
    @Post('add')
    addProduct(): any {

    }
}