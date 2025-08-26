import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional, IsHexColor } from 'class-validator';

export class CreateTagDto {
  @ApiProperty({ example: 'JavaScript' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 'javascript' })
  @IsString()
  @IsNotEmpty()
  slug: string;

  @ApiProperty({ example: 'JavaScript related content', required: false })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({ example: '#F7DF1E', required: false })
  @IsOptional()
  @IsHexColor()
  color?: string;
}
