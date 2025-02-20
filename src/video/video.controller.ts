import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { VideoService } from './video.service';
import { CreateVideoDto } from './dto/create-video.dto';
import { UpdateVideoDto } from './dto/update-video.dto';

@Controller('video')
export class VideoController {
  constructor(private readonly videoService: VideoService) {}

  @Post('create')
  async create(@Body() createVideoDto: CreateVideoDto) {
    return await this.videoService.create(createVideoDto);
  }

  @Get('get-all')
  async findAll() {
    return await this.videoService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.videoService.findOne(+id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateVideoDto: UpdateVideoDto,
  ) {
    return await this.videoService.update(+id, updateVideoDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.videoService.remove(+id);
  }
}
