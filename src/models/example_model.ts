import { DataTypes, Model, Sequelize } from 'sequelize';
import db from '../config/sequelize';


class ExampleModel extends Model { }
ExampleModel.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('GETDATE()'),
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: true,
    },

}, {
    sequelize: db,
    modelName: 'TableName',
    tableName: 'TableName',
    freezeTableName: true,
    timestamps: false,
});

export default ExampleModel;


