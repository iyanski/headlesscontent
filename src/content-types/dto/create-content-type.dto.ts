import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsArray,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

export class FieldDefinitionDto {
  @ApiProperty({ example: 'title' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 'Title' })
  @IsString()
  @IsNotEmpty()
  label: string;

  @ApiProperty({
    example: 'text',
    enum: ['text', 'textarea', 'number', 'boolean', 'date', 'media', 'select'],
  })
  @IsString()
  @IsNotEmpty()
  type: string;

  @ApiProperty({ example: true, required: false })
  @IsOptional()
  required?: boolean;

  @ApiProperty({ example: 'Enter the title', required: false })
  @IsOptional()
  @IsString()
  placeholder?: string;

  @ApiProperty({ example: ['option1', 'option2'], required: false })
  @IsOptional()
  @IsArray()
  options?: string[];
}

export class CreateContentTypeDto {
  @ApiProperty({ example: 'Blog Post' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 'blog-post' })
  @IsString()
  @IsNotEmpty()
  slug: string;

  @ApiProperty({ example: 'A blog post content type', required: false })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({ type: [FieldDefinitionDto] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => FieldDefinitionDto)
  fields: FieldDefinitionDto[];
}
