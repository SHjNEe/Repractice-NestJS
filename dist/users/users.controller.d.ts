import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';
import { UsersService } from './users.service';
export declare class UsersController {
    private userService;
    constructor(userService: UsersService);
    createUser(body: CreateUserDto): Promise<import("./user.entity").User>;
    findUser(id: string): Promise<import("./user.entity").User[]>;
    findAllUser(email: string): Promise<import("./user.entity").User[]>;
    removeUser(id: string): Promise<import("./user.entity").User[]>;
    updateUser(id: string, body: UpdateUserDto): Promise<import("./user.entity").User[]>;
}
