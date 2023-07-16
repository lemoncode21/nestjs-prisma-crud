import { Module } from "@nestjs/common";
import { BookController } from "./book.controller";
import { BookService } from "./book.service";
import { PrismaService } from "src/prisma.service";



@Module({
     controllers: [BookController],
     providers: [BookService, PrismaService]
})
export class BookModule{}