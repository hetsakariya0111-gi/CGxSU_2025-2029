import React, { useState } from 'react';
import { FaMusic, FaPlay, FaPause, FaXmark } from 'react-icons/fa6';

export default function MusicPlayer() {
    const [isOpen, setIsOpen] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <div className="fixed bottom-6 right-6 z-50 flex items-end gap-4">
            {/* Player Box */}
            {isOpen && (
                <div className="bg-white/90 backdrop-blur-md p-4 rounded-3xl shadow-2xl border border-amber-200 w-64 animate-in fade-in slide-in-from-bottom-5 duration-300">
                    <div className="flex items-center justify-between mb-3">
                        <span className="font-bold text-amber-900">Now Playing</span>
                        <button 
                            onClick={() => setIsOpen(false)}
                            className="text-amber-900 hover:bg-amber-100 p-1 rounded-full transition-colors"
                        >
                            <FaXmark />
                        </button>
                    </div>
                    
                    <div className="bg-amber-100/50 p-4 rounded-2xl flex items-center gap-4">
                        <div className="w-12 h-12 bg-amber-400 rounded-xl flex items-center justify-center text-white text-xl shadow-lg">
                            <FaMusic className={isPlaying ? "animate-pulse" : ""} />
                        </div>
                        <div className="flex-1">
                            <p className="text-sm font-semibold text-amber-950 truncate">Gen-Z Vibes</p>
                            <p className="text-xs text-amber-700/70">Creative Beats</p>
                        </div>
                    </div>

                    <div className="mt-4 flex justify-center">
                        <button 
                            onClick={() => setIsPlaying(!isPlaying)}
                            className="bg-amber-500 hover:bg-amber-600 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-md transition-all active:scale-95 text-xl"
                        >
                            {isPlaying ? <FaPause /> : <FaPlay className="ml-1" />}
                        </button>
                    </div>
                </div>
            )}

            {/* Music Button (FAB) */}
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className={`w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 active:scale-90 ${
                    isOpen ? 'bg-amber-600' : 'bg-amber-400 hover:bg-amber-500'
                } text-white text-2xl group relative overflow-hidden`}
            >
                <FaMusic className={isPlaying ? "animate-spin-slow" : "group-hover:scale-110 transition-transform"} />
                {isPlaying && !isOpen && (
                    <span className="absolute inset-0 border-4 border-amber-300/30 rounded-full animate-ping"></span>
                )}
            </button>

            <style>{`
                @keyframes spin-slow {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                .animate-spin-slow {
                    animation: spin-slow 8s linear infinite;
                }
            `}</style>
        </div>
    );
}
