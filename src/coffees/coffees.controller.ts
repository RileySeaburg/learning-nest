import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post } from '@nestjs/common';

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
   * @param {string} id
   * @returns A string with the id of the coffee.
   */
  @Get('/:id')
  findOne(@Param('id') id: string): string {
    return `This action returns a #${id} coffee`;
  }

  /**
   * @name createCoffee
   * @param {string} name
   * @returns A string with the id of the coffee and the name of the coffee.
   * @description This method is used to create a coffee.
   */
  @Post()
  @HttpCode(HttpStatus.GONE)
  create(@Body('name') name: string): string {
    return `This action adds a new coffee: ${name}`;
  }
}
