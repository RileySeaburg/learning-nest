import { Controller, Get, Param } from '@nestjs/common';

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
  findOne(@Param('id') params): string {
    return `This action returns a #${id} coffee`;
  }
}
