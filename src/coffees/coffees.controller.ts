import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

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
  create(@Body('name') name: string): string {
    return `This action adds a new coffee: ${name}`;
  }

  /**
   * @name updateCoffee
   * @param {string} id
   * @param {string} name
   * @returns A string with the id of the coffee and the name of the coffee.
   * @description This method is used to update a coffee.
   * @example
   * PATCH /coffees/1
   * {
   *  "name": "Americano"
   * }
   * @example
   * PATCH /coffees/2
   * {
   * "name": "Cappuccino"
   * }
   */
  @Patch('/:id')
  //   Param and body decorators are required in a PATCH method
  update(@Param('id') id: string, @Body('name') name: string): string {
    return `This action updates a #${id} coffee to ${name}`;
  }

  /**
   * @name deleteCoffee
   * @param {string} id
   * @returns A string with the id of the coffee.
   * @description This method is used to delete a coffee.
   * @example
   * DELETE /coffees/1
   * {
   * "name": "Americano"
   * }
   *
   * @example
   * DELETE /coffees/2
   * {
   * "name": "Cappuccino"
   * }
   *
   */
  @Delete('/:id')
  remove(@Param('id') id: string): string {
    return `This action removes a #${id} coffee`;
  }
}
