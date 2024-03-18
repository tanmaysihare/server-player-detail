
module.exports = (sequelize,DataTypes)=>{
    const PlayerDetails = sequelize.define("PlayerDetails",{
        name:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        DOB:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        photoUrl:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        birthPlace:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        CareerDescription:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        numberOfMatches:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        score:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        fifties:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        centuries:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        wickets:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        average:{
            type: DataTypes.STRING,
            allowNull: false,
        },
    });
    return PlayerDetails;
};