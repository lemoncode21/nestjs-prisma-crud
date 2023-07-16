import { Body, Controller, Delete, Get, Param, Post, Put, Req, Res } from "@nestjs/common";
import { Book } from "./book.model";
import { BookService } from "./book.service";
import { Request, Response } from "express";

@Controller('api/v1/book')
export class BookController{

     constructor(private readonly bookService: BookService){}


     @Get()
     async getAllBook(@Req() request:Request, @Res() response:Response ):Promise<any>{
          const result =  await this.bookService.getAllBook()
          return response.status(200).json({
               status: "Ok!",
               message: "Successfully fetch data!",
               result: result 
          })
     }

     @Post()
     async postBook(@Body() postData: Book):Promise<Book>{
          return this.bookService.createBook(postData)
     }

     @Get(':id')
     async getBook(@Param('id') id:number):Promise<Book | null>{
          return this.bookService.getBook(id)
     }

     @Delete(':id')
     async deleteBook(@Param('id') id:number):Promise<Book>{
          return this.bookService.deleteBook(id)
     }

     @Put(':id')
     async updateBook(@Param('id') id: number,@Body() data: Book): Promise<Book> {
       return this.bookService.updateBook(id,data);
     }
}