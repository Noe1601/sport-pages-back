import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ schema: 'sports' })
export class Game {
  @PrimaryGeneratedColumn('uuid', { name: 'id' }) public id: string;

  @Column({ name: 'team_1', default: '', nullable: false })
  public team1: string;

  @Column({ name: 'team_2', default: '', nullable: false })
  public team2: string;

  @Column({ name: 'score_team_1', default: '', nullable: false })
  public scoreTeam1: string;

  @Column({ name: 'score_team_2', default: '', nullable: false })
  public scoreTeam2: string;

  @Column({ name: 'date', default: new Date(), nullable: false })
  public date: Date;

  @Column({ name: 'type', default: '', nullable: false })
  public type: string;
}
