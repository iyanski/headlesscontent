import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UpdateMediaDto {
  @ApiProperty({ example: 'A beautiful sunset', required: false })
  @IsOptional()
  @IsString()
  alt?: string;

  @ApiProperty({ example: 'Sunset over the mountains', required: false })
  @IsOptional()
  @IsString()
  caption?: string;
}
