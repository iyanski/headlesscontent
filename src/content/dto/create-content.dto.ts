import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsObject,
  IsArray,
} from 'class-validator';

export class CreateContentDto {
  @ApiProperty({ example: 'My First Blog Post' })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({ example: 'my-first-blog-post' })
  @IsString()
  @IsNotEmpty()
  slug: string;

  @ApiProperty({ example: { title: 'My Post', body: 'Content here...' } })
  @IsObject()
  content: Record<string, any>;

  @ApiProperty({ example: 'clx1234567890abcdef' })
  @IsString()
  @IsNotEmpty()
  contentTypeId: string;

  @ApiProperty({ example: 'clx1234567890abcdef' })
  @IsString()
  @IsNotEmpty()
  organizationId: string;

  @ApiProperty({ example: ['clx1234567890abcdef'], required: false })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  categoryIds?: string[];

  @ApiProperty({ example: ['clx1234567890abcdef'], required: false })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  tagIds?: string[];
}
