module.exports = function (sequelize, DataTypes) {

    const Reservation = sequelize.define("Reservation", {
        customer: {
            type: DataTypes.STRING,
            allowNull: false
        },
        customerEmail: {
            type: DataTypes.STRING,
            validate: {
                isEmail: true //regex behind the scenes
            },
            allowNull: false
        },
        customerPhone: {
            type: DataTypes.STRING,
            allowNull: false
        },
        isOnWaitlist: {
            type: DataTypes.BOOLEAN,
            defaultValue:true
        }
    });
    return Reservation;
};

//how to get id, etc, is that in index?