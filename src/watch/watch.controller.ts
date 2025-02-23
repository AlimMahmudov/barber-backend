import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { WatchService } from './watch.service';
import { CreateWatchDto } from './dto/create-watch.dto';
import { UpdateWatchDto } from './dto/update-watch.dto';

@Controller('watch')
export class WatchController {
  constructor(private readonly watchService: WatchService) {}

  @Post('create')
  async create(@Body() createWatchDto: CreateWatchDto) {
    return await this.watchService.create(createWatchDto);
  }

  @Get('get-all')
  async findAll() {
    return await this.watchService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.watchService.findOne(+id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateWatchDto: UpdateWatchDto,
  ) {
    return await this.watchService.update(+id, updateWatchDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.watchService.remove(+id);
  }
}
