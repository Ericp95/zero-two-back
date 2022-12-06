const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define( 'animes',
   
    {
     id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
     },
     userCount:{

        type:DataTypes.INTEGER,
     }, 
     name:{
        type:DataTypes.TEXT,
        allowNull: false,
     },
     synopsis:{
        type:DataTypes.TEXT,
     },
     titles:{
        type:DataTypes.STRING(50),
        allowNull: false,
     },
     averageRating:{
        type:DataTypes.FLOAT,
     },
     favoriteCount:{
        type:DataTypes.INTEGER,

     },
     startDate:{
        type:DataTypes.DATE,
     },
     endDate:{
        type:DataTypes.DATE,
     },
     popularityRank:{
        type:DataTypes.INTEGER,
     },
     ratingRank:{
        type:DataTypes.INTEGER,
     },
     status:{
        type:DataTypes.ENUM("conectado", "desconectado"),
     },
     posterImage:{
        type:DataTypes.JSONB,
     },
     coverImage:{
        type:DataTypes.JSONB,
     },
     episodeCount:{
        type:DataTypes.INTEGER,
     },
     episodeLength:{
        type:DataTypes.INTEGER,
     },
     youtubeVideoId:{
        type:DataTypes.TEXT,
     },
     nsfw:{
        type:DataTypes.TEXT,
     },
     /*subtype:{
        type:DataTypes.ENUM,
     },
     showType:{
        type:DataTypes.ENUM,
     },*/
     ageRatingGuide:{
        type:DataTypes.TEXT,
     },
     genre_id:{
        type:DataTypes.INTEGER,
     }
    },
    { timestamps: false }
  );
};
