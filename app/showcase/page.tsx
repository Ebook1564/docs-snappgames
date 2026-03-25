'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  Gamepad2, 
  Trophy, 
  Zap, 
  Star, 
  ExternalLink, 
  Play,
  Flame,
  Puzzle,
  Joystick,
  Target,
  Smile,
  LayoutGrid
} from 'lucide-react';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';

interface Game {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  gameUrl: string;
  rating: number;
  isNew: boolean;
}

const categoryIcons: { [key: string]: any } = {
  'Trending': Flame,
  'Puzzle': Puzzle,
  'Arcade': Joystick,
  'Strategy': Target,
  'Casual': Smile,
  'Featured': Sparkles
};

const categoryEmojis: { [key: string]: string } = {
  'Trending': '🔥',
  'Puzzle': '🧩',
  'Arcade': '🕹️',
  'Strategy': '🎯',
  'Casual': '🎈',
  'Featured': '✨'
};

export default function Showcase() {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    async function fetchGames() {
      try {
        const res = await fetch('/api/games');
        const data = await res.json();
        setGames(data);
      } catch (error) {
        console.error('Failed to fetch games:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchGames();
  }, []);

  const filteredGames = activeCategory === 'All' 
    ? games 
    : games.filter(game => game.category === activeCategory);

  const categories = ['All', ...Array.from(new Set(games.map(g => g.category)))];

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-blue-500/20 border-t-blue-500 rounded-full animate-spin"></div>
          <Gamepad2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 text-blue-500" />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Header />
      <div className="flex pt-16">
        <Sidebar className="hidden lg:block w-72 h-[calc(100vh-4rem)] border-r border-border sticky top-16" />
        
        <main className="flex-1 p-6 lg:p-10 max-w-5xl mx-auto overflow-x-hidden">
          {/* Hero Section */}
          <div id="overview" className="relative mb-12 scroll-mt-24">
            <div className="absolute -top-20 -left-20 w-80 h-80 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none dark:opacity-50" />
            <div className="absolute top-20 right-0 w-64 h-64 bg-purple-500/5 rounded-full blur-[100px] pointer-events-none dark:opacity-30" />
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 mb-6 font-bold text-xs uppercase tracking-widest shadow-sm">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Live Showcase</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter leading-tight text-zinc-900 dark:text-white">
                Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff00cc] to-[#3333ff]">Games</span> 🎮
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
                Experience the magic of SnappGames! Explore our curated collection of premium HTML5 games, 
                built with love and designed for instant fun. ✨
              </p>
            </div>
          </div>

          {/* Category Filter */}
          <div id="categories" className="flex flex-wrap gap-2 mb-10 pb-4 border-b border-border scroll-mt-24">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-bold transition-all flex items-center gap-2 ${
                  activeCategory === cat 
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20 scale-105' 
                  : 'bg-secondary text-secondary-foreground hover:bg-border'
                }`}
              >
                {cat === 'All' ? <LayoutGrid className="w-4 h-4" /> : React.createElement(categoryIcons[cat] || Gamepad2, { className: "w-4 h-4" })}
                {cat} {cat !== 'All' && categoryEmojis[cat]}
              </button>
            ))}
          </div>

          {/* Games Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
            {filteredGames.map((game, index) => (
              <motion.div
                key={game.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group relative"
              >
                <div className="relative bg-card border border-border rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl hover:shadow-blue-500/5 hover:-translate-y-2 transition-all duration-500 ring-1 ring-black/[0.03] dark:ring-white/[0.03]">
                  {/* Thumbnail */}
                  <div className="relative h-52 overflow-hidden bg-muted">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 transition-transform duration-700" />
                    
                    {/* Actual Game Image */}
                    <img 
                      src={game.imageUrl} 
                      alt={game.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://www.snappgames.com/favicon.ico';
                      }}
                    />
                    
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />

                    {game.isNew && (
                      <div className="absolute top-4 left-4 px-3 py-1 bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg">
                         New 🚀
                      </div>
                    )}
                    
                    <div className="absolute top-4 right-4 px-2 py-1 bg-black/50 backdrop-blur-md rounded-lg flex items-center gap-1 border border-white/20">
                      <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                      <span className="text-[10px] font-bold text-white">{game.rating}</span>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-6 lg:p-7">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-blue-500/10 text-[10px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-widest">
                        {categoryEmojis[game.category]} {game.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-black mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors tracking-tighter">
                      {game.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-6 line-clamp-2 leading-relaxed h-10">
                      {game.description}
                    </p>

                    <div className="flex items-center gap-3">
                      <a
                        href={game.gameUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-2.5 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl transition-all active:scale-95 shadow-lg shadow-blue-600/20"
                      >
                        <Play className="w-4 h-4 fill-current" />
                        Play Now
                      </a>
                      <a
                        href={game.gameUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-secondary hover:bg-border text-secondary-foreground rounded-2xl transition-all border border-border"
                        title="Open in new tab"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <div id="integration" className="mt-24 p-8 lg:p-12 rounded-[3rem] bg-gradient-to-br from-blue-600/[0.03] to-indigo-600/[0.03] border border-border text-center relative overflow-hidden group scroll-mt-24">
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000" />
            
            <div className="relative z-10">
              <div className="w-16 h-16 bg-blue-600/10 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-blue-600/20">
                <LayoutGrid className="w-8 h-8 text-blue-600" />
              </div>
              <h2 className="text-3xl font-black mb-4 tracking-tighter text-zinc-900 dark:text-white">
                Want to Embed These Games? 🚀
              </h2>
              <p className="text-muted-foreground mb-10 max-w-xl mx-auto leading-relaxed">
                Our integration guides make it incredibly simple to bring SnappGames to your platform. 
                Whether you're on Web, Android, or Unity, we've got you covered.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-6">
                <a href="/web" className="group flex items-center gap-2 font-bold text-blue-600 dark:text-blue-400 hover:gap-3 transition-all">
                  Web Guide <Zap className="w-4 h-4 fill-current" />
                </a>
                <div className="w-1.5 h-1.5 rounded-full bg-border" />
                <a href="/android-cct" className="group flex items-center gap-2 font-bold text-blue-600 dark:text-blue-400 hover:gap-3 transition-all">
                  Android CCT <Zap className="w-4 h-4 fill-current" />
                </a>
                <div className="w-1.5 h-1.5 rounded-full bg-border" />
                <a href="/unity" className="group flex items-center gap-2 font-bold text-blue-600 dark:text-blue-400 hover:gap-3 transition-all">
                  Unity Plugin <Zap className="w-4 h-4 fill-current" />
                </a>
              </div>
            </div>
          </div>
        </main>

        {/* Right Sidebar - On This Page */}
        <aside className="hidden xl:block w-64 flex-none p-10 scroll-mt-24">
          <nav className="sticky top-28">
            <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500 mb-6">
              On this page
            </h3>
            <ul className="space-y-4 text-sm font-medium">
              <li>
                <a href="#overview" className="text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-2 group">
                  <div className="w-1 h-1 rounded-full bg-zinc-300 dark:bg-zinc-800 group-hover:bg-blue-600 transition-colors" />
                  Overview
                </a>
              </li>
              <li>
                <a href="#categories" className="text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-2 group">
                  <div className="w-1 h-1 rounded-full bg-zinc-300 dark:bg-zinc-800 group-hover:bg-blue-600 transition-colors" />
                  Game Categories
                </a>
              </li>
              <li>
                <a href="#integration" className="text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-2 group">
                  <div className="w-1 h-1 rounded-full bg-zinc-300 dark:bg-zinc-800 group-hover:bg-blue-600 transition-colors" />
                  Integration Guides
                </a>
              </li>
            </ul>
          </nav>
        </aside>
      </div>
    </div>
  );
}
