import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateCategoryDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  readonly description: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  readonly order: number;
}
