import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
} from 'class-validator';

export class CreateBlogDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  summary: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  @IsUrl()
  thumbnail: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  content: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsArray()
  categoryIds: string[];

  @ApiProperty()
  @IsOptional()
  tags: string[];
}
