import { Column, Entity, PrimaryGeneratedColumn, Unique } from 'typeorm';

@Entity({ schema: 'sports' })
@Unique(['username'])
@Unique(['email'])
export class User {
  @PrimaryGeneratedColumn('uuid', { name: 'id' }) public id: string;

  @Column({ name: 'name', default: '', nullable: false })
  public name: string;

  @Column({ name: 'username', default: '', nullable: false })
  public username: string;

  @Column({ name: 'email', default: '', nullable: false })
  public email: string;

  @Column({ name: 'password', default: '', nullable: false })
  public password: string;

  @Column({ name: 'isActive', default: true, nullable: false })
  public isActive: boolean;
}
