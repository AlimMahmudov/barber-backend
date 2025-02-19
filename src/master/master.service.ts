import { HttpStatus, Injectable } from '@nestjs/common';
import { CreateMasterDto } from './dto/create-master.dto';
import { UpdateMasterDto } from './dto/update-master.dto';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class MasterService {
  constructor(private prismaService: PrismaService) {}

  async create(createMasterDto: CreateMasterDto) {
    const newMaster = await this.prismaService.master.create({
      data: {
        human: createMasterDto.human,
        photo: createMasterDto.photo,
        work: createMasterDto.work,
      },
    });
    return { status: HttpStatus.CREATED, newMaster };
  }

  async findAll() {
    return await this.prismaService.master.findMany();
  }

  async findOne(id: number) {
    const master = await this.prismaService.master.findUnique({
      where: { id },
    });
    if (!master) {
      return {
        status: HttpStatus.NOT_FOUND,
        message: `Мастер с id ${id} не найдена`,
      };
    }
    return master;
  }

  async update(id: number, updateMasterDto: UpdateMasterDto) {
    const updateMaster = await this.prismaService.master.update({
      where: { id },
      data: updateMasterDto,
    });
    return { status: HttpStatus.OK, updateMasterDto };
  }

  async remove(id: number) {
    const deleteMaster = await this.prismaService.master.delete({
      where: { id },
    });
    return { status: HttpStatus.OK, deleteMaster };
  }
}
