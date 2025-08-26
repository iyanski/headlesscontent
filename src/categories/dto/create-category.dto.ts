import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional, IsHexColor } from 'class-validator';

export class CreateCategoryDto {
  @ApiProperty({ example: 'Technology' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 'technology' })
  @IsString()
  @IsNotEmpty()
  slug: string;

  @ApiProperty({ example: 'Technology related content', required: false })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({ example: '#3B82F6', required: false })
  @IsOptional()
  @IsHexColor()
  color?: string;
}
