import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional, IsUrl } from 'class-validator';

export class CreateOrganizationDto {
  @ApiProperty({ example: 'Acme Corporation' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 'acme-corp' })
  @IsString()
  @IsNotEmpty()
  slug: string;

  @ApiProperty({ example: 'A leading technology company', required: false })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({ example: 'acme.com', required: false })
  @IsOptional()
  @IsUrl()
  domain?: string;
}
