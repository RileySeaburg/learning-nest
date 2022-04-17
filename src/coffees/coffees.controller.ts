import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';
import { Coffee } from './entities/coffee.entity';

@Controller('coffees')
export class CoffeesController {
  // Using built in keywords for privacy and security
  // Dependency injection resolved by the type.
  constructor(private readonly coffeesService: CoffeesService) {}

  @Get()
  findAll(@Query() paginationQuery): Coffee[] {
    //   Destructuring the query object
    const { limit, offset } = paginationQuery;
    return this.coffeesService.findAll();
  }

  /**
   * @name findCoffeeByID
   * @description
   * This method is used to find a coffee by its ID.
   * @param {string} id
   * @returns A string with the id of the coffee.
   */
  @Get('/:id')
  findOne(@Param('id') id: string): Coffee {
    return this.coffeesService.findOne(id);
  }

  /**
   * @name createCoffee
   * @param {string} name
   * @returns A string with the id of the coffee and the name of the coffee.
   * @description This method is used to create a coffee.
   */
  @Post()
  create(@Body() createCoffeeDto: CreateCoffeeDto) {
    return this.coffeesService.create(createCoffeeDto);
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
  update(@Param('id') id: string, @Body() updateCoffeeDto): UpdateCoffeeDto {
    return this.coffeesService.update(id, updateCoffeeDto);
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
  remove(@Param('id') id: string): CreateCoffeeDto {
    return this.coffeesService.delete(id);
  }
}
