import { HttpStatus, Injectable } from '@nestjs/common';
import { CreateWatchDto } from './dto/create-watch.dto';
import { UpdateWatchDto } from './dto/update-watch.dto';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class WatchService {
  constructor(private prismaService: PrismaService) {}

  async create(createWatchDto: CreateWatchDto) {
    const newWatch = await this.prismaService.watch.create({
      data: {
        oclock: createWatchDto.oclock,
      },
    });
    return { status: HttpStatus.CREATED, newWatch };
  }

  async findAll() {
    return await this.prismaService.watch.findMany();
  }

  async findOne(id: number) {
    const watch = await this.prismaService.watch.findUnique({
      where: { id },
    });
    if (!watch) {
      return {
        status: HttpStatus.NOT_FOUND,
        message: `Время с id ${id} не найдена`,
      };
    }
    return watch;
  }

  async update(id: number, updateWatchDto: UpdateWatchDto) {
    const updataWatch = await this.prismaService.watch.update({
      where: { id },
      data: updateWatchDto,
    });
    return { status: HttpStatus.OK, updataWatch };
  }

  async remove(id: number) {
    const deleteWatch = await this.prismaService.watch.delete({
      where: { id },
    });
    return { statu: HttpStatus.OK, deleteWatch };
  }
}
