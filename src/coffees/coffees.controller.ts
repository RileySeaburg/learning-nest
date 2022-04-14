import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  @Get()
  findAll(): string {
    return 'This action returns all coffees';
  }

  /**
   * @name findCoffeeByID
   * @description
   * This method is used to find a coffee by its ID.
   * @param params General Parameters for the request.
   * @returns A string with the id of the coffee.
   */
  @Get('/:id')
  findOne(@Param('id') id: string): string {
    return `This action returns a #${id} coffee`;
  }

  /**
   * @name createCoffee
   * @param body General Parameters for the request.
   * @returns A string with the id of the coffee and the name of the coffee.
   * @description This method is used to create a coffee.
   */
  @Post()
  create(@Body() body: any): string {
    return `This action adds a new coffee: ${body.name}`;
  }
}
