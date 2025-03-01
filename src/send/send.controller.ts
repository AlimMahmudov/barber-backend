import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SendService } from './send.service';
import { CreateSendDto } from './dto/create-send.dto';
import { UpdateSendDto } from './dto/update-send.dto';

@Controller('send')
export class SendController {
  constructor(private readonly sendService: SendService) {}

  @Post('create')
  async create(@Body() createSendDto: CreateSendDto) {
    return await this.sendService.create(createSendDto);
  }

  @Get('get-all')
  async findAll() {
    return await this.sendService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.sendService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateSendDto: UpdateSendDto) {
    return await this.sendService.update(+id, updateSendDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.sendService.remove(+id);
  }
}
