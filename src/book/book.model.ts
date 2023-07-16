import { Prisma } from "@prisma/client";


export class Book implements Prisma.BookCreateInput{
     id: number;
     title: string;
     description?: string;
}