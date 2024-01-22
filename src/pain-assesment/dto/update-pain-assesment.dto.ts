import { PartialType } from '@nestjs/swagger';
import { CreatePainAssesmentDto } from './create-pain-assesment.dto';

export class UpdatePainAssesmentDto extends PartialType(CreatePainAssesmentDto) {}
