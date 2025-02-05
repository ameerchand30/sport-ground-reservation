import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/database';

export class Ground extends Model {
    public id!: number;
    public name!: string;
    public location!: string;
    public gameType!: string;
    public availability!: boolean;
    public price!: number;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

Ground.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    location: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    gameType: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    availability: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
}, {
    sequelize,
    tableName: 'grounds',
});