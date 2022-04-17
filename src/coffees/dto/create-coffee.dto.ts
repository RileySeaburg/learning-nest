import {IsString} from 'class-validator'

export class CreateCoffeeDto {
    // Must be a string
    @IsString()
    readonly name: string;
    // Must be a string
    @IsString()
    readonly brand: string;
    // Validate each item in the array to be a string
    @IsString({each: true})
   readonly flavors: string[];

}
