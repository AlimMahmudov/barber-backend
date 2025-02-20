import { HttpStatus, Injectable } from '@nestjs/common';
import { CreateVideoDto } from './dto/create-video.dto';
import { UpdateVideoDto } from './dto/update-video.dto';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class VideoService {
  constructor(private prismaService: PrismaService) {}

  async create(createVideoDto: CreateVideoDto) {
    const newVideo = await this.prismaService.video.create({
      data: {
        youtube: createVideoDto.youtube,
      },
    });
    return { status: HttpStatus.CREATED, newVideo };
  }

  async findAll() {
    return await this.prismaService.video.findMany();
  }

  async findOne(id: number) {
    const video = await this.prismaService.video.findUnique({
      where: { id },
    });
    if (!video) {
      return {
        status: HttpStatus.NOT_FOUND,
        message: `video с id ${id} не найдена`,
      };
    }
    return video;
  }

  async update(id: number, updateVideoDto: UpdateVideoDto) {
    const updateVideo = await this.prismaService.video.update({
      where: { id },
      data: updateVideoDto,
    });
    return { status: HttpStatus.OK, updateVideoDto };
  }

  async remove(id: number) {
    const deleteVideo = await this.prismaService.video.delete({
      where: { id },
    });
    return { status: HttpStatus.OK, deleteVideo };
  }
}
