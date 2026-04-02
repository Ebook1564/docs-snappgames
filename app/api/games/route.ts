import { NextResponse } from 'next/server';

export async function GET() {
  const games = [
    {
      id: 'beejump',
      title: 'Bee Jump 🐝',
      category: 'Arcade',
      description: 'Bounce upward from platform to platform as a determined bee, dodging obstacles and chasing high scores!',
      imageUrl: 'https://snappgames.com/assets/beejump.png',
      gameUrl: 'https://snappgames.com/games/beejump',
      rating: 4.8,
      isNew: true
    },
    {
      id: 'airhockey',
      title: 'Air Hockey 🏒',
      category: 'Arcade',
      description: 'Fast-paced air hockey action! Test your reflexes and outsmart your opponent in this classic arcade experience.',
      imageUrl: 'https://snappgames.com/assets/airhockey.png',
      gameUrl: 'https://snappgames.com/games/airhockey',
      rating: 4.5,
      isNew: false
    },
    {
      id: 'asteroids-crusher',
      title: 'Asteroids Crusher ☄️',
      category: 'Strategy',
      description: 'Defend your station against waves of incoming asteroids. Upgrade your weapons and survive the cosmic onslaught!',
      imageUrl: 'https://snappgames.com/assets/asteroids-crusher.png',
      gameUrl: 'https://snappgames.com/games/asteroids-crusher',
      rating: 4.7,
      isNew: false
    },
    {
      id: 'bit-tank',
      title: 'Bit Tank 🚜',
      category: 'Strategy',
      description: 'Command your mini-tank and destroy enemy forces. Retro-style combat with modern tactical depth.',
      imageUrl: 'https://snappgames.com/assets/bit-tank.png',
      gameUrl: 'https://snappgames.com/games/bit-tank',
      rating: 4.6,
      isNew: true
    },
    {
      id: 'candy-match3',
      title: 'Candy Match 3 🍭',
      category: 'Puzzle',
      description: 'Sweet and addictive match-3 puzzle game. Swipe and match candies to unlock delicious levels.',
      imageUrl: 'https://snappgames.com/assets/candy-match3.png',
      gameUrl: 'https://snappgames.com/games/candy-match3',
      rating: 4.4,
      isNew: false
    },
    {
      id: 'cars-racing',
      title: 'Cars Racing 🏎️',
      category: 'Arcade',
      description: 'High-speed racing action! Drift through corners and cross the finish line first in this thrilling racer.',
      imageUrl: 'https://snappgames.com/assets/cars-racing.png',
      gameUrl: 'https://snappgames.com/games/cars-racing',
      rating: 4.9,
      isNew: true
    },
    {
      id: '2048',
      title: '2048 🧩',
      category: 'Puzzle',
      description: 'The classic number puzzle. Join the tiles and get to the 2048 tile to win!',
      imageUrl: 'https://snappgames.com/assets/2048.png',
      gameUrl: 'https://snappgames.com/games/2048',
      rating: 4.3,
      isNew: false
    },
    {
      id: 'tower-builder',
      title: 'Tower Builder 🏗️',
      category: 'Arcade',
      description: 'Stack blocks as high as you can! Precision and timing are key to building the tallest tower in the world.',
      imageUrl: 'https://snappgames.com/assets/tower-builder.png',
      gameUrl: 'https://snappgames.com/games/tower-builder',
      rating: 4.5,
      isNew: false
    },
    {
      id: 'tic-tac-toe',
      title: 'Tic Tac Toe ⭕',
      category: 'Puzzle',
      description: 'The ultimate classic! Play against a friend or the CPU in this timeless game of strategy.',
      imageUrl: 'https://snappgames.com/assets/tic-tac-toe.png',
      gameUrl: 'https://snappgames.com/games/tictactoe',
      rating: 4.2,
      isNew: false
    },
    {
      id: 'burger-maker',
      title: 'Burger Maker 🍔',
      category: 'Casual',
      description: 'Run your own burger shop! Cook, stack, and serve delicious burgers to hungry customers.',
      imageUrl: 'https://snappgames.com/assets/burger-maker.png',
      gameUrl: 'https://snappgames.com/games/burger-maker',
      rating: 4.6,
      isNew: true
    },
    {
      id: 'zombies-attack',
      title: 'Zombie Attack 🧟',
      category: 'Arcade',
      description: 'Survive the apocalypse! Fend off waves of zombies using a variety of powerful weapons.',
      imageUrl: 'https://snappgames.com/assets/zombies-attack.png',
      gameUrl: 'https://snappgames.com/games/zombies-attack',
      rating: 4.7,
      isNew: false
    },
    {
      id: 'domino',
      title: 'Domino 🃏',
      category: 'Casual',
      description: 'Classic dominoes action! Place your tiles strategically and be the first to clear your hand.',
      imageUrl: 'https://snappgames.com/assets/domino.png',
      gameUrl: 'https://snappgames.com/games/domino',
      rating: 4.4,
      isNew: false
    }
  ];

  return NextResponse.json(games);
}
