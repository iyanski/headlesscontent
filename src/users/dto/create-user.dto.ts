import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsEmail,
  IsEnum,
  MinLength,
  MaxLength,
} from 'class-validator';
import { UserRole } from '@prisma/client';

export class CreateUserDto {
  @ApiProperty({
    example: 'john.doe@example.com',
    description: 'Email address of the user',
    format: 'email',
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    example: 'johndoe',
    description: 'Username of the user',
    minLength: 3,
    maxLength: 30,
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(30)
  username: string;

  @ApiProperty({
    example: 'password123',
    description: 'Password for the user account',
    minLength: 8,
    maxLength: 100,
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  @MaxLength(100)
  password: string;

  @ApiPropertyOptional({
    example: 'John',
    description: 'First name of the user',
    maxLength: 50,
  })
  @IsOptional()
  @IsString()
  @MaxLength(50)
  firstName?: string;

  @ApiPropertyOptional({
    example: 'Doe',
    description: 'Last name of the user',
    maxLength: 50,
  })
  @IsOptional()
  @IsString()
  @MaxLength(50)
  lastName?: string;

  @ApiProperty({
    enum: UserRole,
    example: UserRole.EDITOR,
    description: 'Role of the user in the organization',
  })
  @IsEnum(UserRole)
  @IsNotEmpty()
  role: UserRole;

  @ApiProperty({
    example: 'clx1234567890abcdef',
    description: 'ID of the organization the user belongs to',
    minLength: 1,
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  organizationId: string;
}
