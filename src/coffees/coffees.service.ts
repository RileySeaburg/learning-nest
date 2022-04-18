import { Injectable } from '@nestjs/common';
import { Coffee } from './entities/coffee.entity';

/**
 * @name CoffeesService
 * @type {Service}
 * @description
 * This service is used to manage the coffees.
 * @example
 * import { CoffeesService } from './coffees.service';
 * @example
 * const coffeesService = new CoffeesService();
 * @example
 * coffeesService.findAll();
 * @example
 * coffeesService.findOne(1);
 * @example
 * coffeesService.create('Cappuccino');
 * @example
 * coffeesService.update(1, 'Cappuccino');
 * @example
 * coffeesService.delete(1);
 */
@Injectable()
export class CoffeesService {
  private coffees: Coffee[] = [
    {
      id: 1,
      name: 'Cappuccino',
      brand: 'Froilà',
      flavors: ['Chocolate', 'Vanilla'],
    },
  ];
  /**
   * @name findAll
   * @returns A list of coffees.
   * @description This method is used to return a list of coffees.
   * @example
   * GET /coffees
   * {
   * "coffees": [
   * {
   * "id": 1,
   * "name": "Cappuccino",
   * "brand": "Froilà",
   * "flavors": ["Chocolate", "Vanilla"]
   * },
   */
  findAll() {
    return this.coffees;
  }

  /**
   * @name findOne
   * @param {string} id
   * @returns A coffee.
   * @description This method is used to return a coffee.
   * @example
   * GET /coffees/1
   * {
   * "id": 1,
   * "name": "Cappuccino",
   * "brand": "Froilà",
   * "flavors": ["Chocolate", "Vanilla"]
   * }
   */
  findOne(id: string) {
    return this.coffees.find((coffee) => coffee.id === + id );
  }

  /**
   * @name create
   * @param {Coffee} coffee
   * @returns A coffee.
   * @description This method is used to create a coffee.
   * @example
   * POST /coffees
   * {
   * "name": "Cappuccino",
   * "brand": "Froilà",
   * "flavors": ["Chocolate", "Vanilla"]
   * }
   * @example
   * POST /coffees
   * {
   * "name": "Americano",
   * "brand": "Froilà",
   * "flavors": ["Chocolate", "Vanilla"]
   * }
   */
  create(createCoffeeDto: any) {
    this.coffees.push(createCoffeeDto);
  }

  /**
   * @name update
   * @param {string} id
   * @param {Coffee} coffee
   * @returns A coffee.
   * @description This method is used to update a coffee.
   * @example
   * PATCH /coffees/1
   * {
   * "name": "Americano"
   * }
   * @example
   * PATCH /coffees/2
   * {
   * "name": "Cappuccino"
   * }
   */
  update(id: string, updateCoffeeDto: any) {
    const existingCoffee = this.findOne(id);
    if (existingCoffee) {
      // update existing coffee
      existingCoffee.name = updateCoffeeDto.name;
      existingCoffee.brand = updateCoffeeDto.brand;
      existingCoffee.flavors = updateCoffeeDto.flavors;
    }
  }

  /**
   * @name delete
   * @param {string} id
   * @returns A coffee.
   * @description This method is used to delete a coffee.
   * @example
   * DELETE /coffees/1
   * {
   * "name": "Americano"
   * }
   *
   */
  delete(id: string): Coffee {
    const index = this.coffees.findIndex((c) => c.id === Number(id));
    const coffee = this.coffees[index];
    this.coffees.splice(index, 1);
    return coffee;
  }
}
