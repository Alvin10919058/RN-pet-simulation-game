# Monster Exploration - A Location-based Pet Simulation Game App

## Inspiration
In September 2015, inspired by the concept video of 'Pokemon GO', we decided to create a location-based pet simulation game that could be used on both Android and iOS systems. This game serves as a vessel for showcasing the rich content of Fu Jen Catholic University. Through GPS positioning, players can explore the entire Fu Jen campus, learn about its stories and culture, and catch unique and adorable pets. The pet-raising mechanics also provide opportunities for increased social interaction.


## Story
The game's story is built upon the three major organizations at Fu Jen Catholic University: the Society of the Divine Word, the Society of Jesus, and the Chinese clergy. These three organizations correspond to the three factions of Courage, Hope, and Freedom, respectively. The Courage faction inherits the power of fire, the Hope faction develops the power of wood, and the Freedom faction has always represented the power of water. The Fu Jen region is also set as an ancient civilization ruin - Osran, which is rich in powerful Natus minerals. These minerals have given birth to unique life forms here, known as monster spirits.

![alt text](https://github.com/KevinHu2014/RN-IceSpeed/blob/master/Screenshots/御三家.png "御三家")

For hundreds of years, our ancestors have built a civilization on this land, coexisting and thriving with the spirits, and upholding the belief in goodness and love. This tradition has been passed down from generation to generation. However, an excess of power led to the destruction of this place. Greedy individuals tirelessly sought the Natus ore veins, extracting high-purity ores at any cost. When the core of the Natus mineral was finally discovered at the center of the city-state, the overjoyed fools prepared to mine it on a large scale. However, the Natus core began to go berserk due to excessive disturbances, and a large number of terrifying and powerful monsters appeared in the city center. Since then, this place has become a ruin, leaving only desolation and emptiness.

The three factions each began their research on this. Players take on the role of adventurers, joining the faction they prefer and exploring the Fu Jen region to their heart's content. They live with the monster spirits, laughing and growing together, writing their own stories.

![alt text](https://github.com/KevinHu2014/RN-IceSpeed/blob/master/Screenshots/校園地圖.png "校園地圖")


## Trailer

[![IMAGE ALT TEXT HERE](http://img.youtube.com/vi/CL-RnqUOTXY/0.jpg)](http://www.youtube.com/watch?v=CL-RnqUOTXY)

## Interface
The main interface of the game is in the form of a map, with an 'Explore' button at the bottom.

> The Floating Action Button is designed with reference to Google's Material Design.

![alt text](https://github.com/KevinHu2014/RN-IceSpeed/blob/master/Screenshots/主畫面.gif "遊戲主介面")


## Explore
After clicking the 'Explore' button, the game will first capture the user's location and monster points will appear around it. Different colors of monster points represent different levels of rarity.

![alt text](https://github.com/KevinHu2014/RN-IceSpeed/blob/master/Screenshots/探索.gif "探索")


## Battle
The game adopts a one-on-one turn-based battle system.

Activating skills requires MP, and you gain two MP each turn.

There is an option to run away.

> The pet images are all original designs.
> The buttons are designed with reference to Google's Material Design.

![alt text](https://github.com/KevinHu2014/RN-IceSpeed/blob/master/Screenshots/戰鬥.gif "戰鬥介面")



## Gym on Single Player Mode
In single-player mode, the gym content includes campus introductions and game tips.

Once all gyms have been visited, you can enter multiplayer mode.

![alt text](https://github.com/KevinHu2014/RN-IceSpeed/blob/master/Screenshots/單人.gif "單人世界的道館")

In specific gyms, there will be 360-degree VR panoramic images for users to experience.

![alt text](https://github.com/KevinHu2014/RN-IceSpeed/blob/master/Screenshots/VR.gif "VR")

## Gym on Multiplayer Mode
In multiplayer mode, you can battle the gym leaders in the gyms.

The difficulty level of the stages is determined by the number of 'Fu Jen Treasures' you contribute.

![alt text](https://github.com/KevinHu2014/RN-IceSpeed/blob/master/Screenshots/多人.png "多人世界的道館")

## Pet Center
In the Pet Center, players can fully restore the health of the pets in their backpacks.

![alt text](https://github.com/KevinHu2014/RN-IceSpeed/blob/master/Screenshots/寶貝中心.gif "寵物中心")

## Pet Backpacks

![alt text](https://github.com/KevinHu2014/RN-IceSpeed/blob/master/Screenshots/背包.png "寵物背包")

## Enhancement System
Pets can be enhanced using experience stones.

![alt text](https://github.com/KevinHu2014/RN-IceSpeed/blob/master/Screenshots/強化.gif "強化")

## Store
Place to Purchase Items

![alt text](https://github.com/KevinHu2014/RN-IceSpeed/blob/master/Screenshots/商店.png "商店")


## Full Demo Video

[![IMAGE ALT TEXT HERE](http://img.youtube.com/vi/An_2t2BB9z8/0.jpg)](http://www.youtube.com/watch?v=An_2t2BB9z8)



## System Architecture

The database uses both SQL and NoSQL.

The map uses the highly customizable Mapbox.


![alt text](https://github.com/KevinHu2014/RN-IceSpeed/blob/master/Screenshots/架構圖.png "架構圖")


## Installation

1. `git clone https://github.com/KevinHu2014/RN-IceSpeed.git`
2. `npm install ` or `yarn add`
3. `react-native run-android`


## Upcoming

+ Added tutorial for beginners
+ Added quest system
+ Multiplayer co-op mechanism
+ Updated move special effects
+ iOS version of the game





