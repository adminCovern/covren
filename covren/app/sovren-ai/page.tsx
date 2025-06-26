
'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { 
  Zap, Shield, Brain, Lock, AlertTriangle, 
  TrendingUp, Users, ChevronRight, Activity
} from 'lucide-react';

export default function HomePage() {
  const [timeLeft, setTimeLeft] = useState({ hours: 47, minutes: 23, seconds: 59 });
  const [liveUsers, setLiveUsers] = useState(127);
  const [commandIndex, setCommandIndex] = useState(0);

  const commands = [
    "YOUR AI AWAKENS IN 3 SECONDS",
    "PREDICTING YOUR NEXT THOUGHT", 
    "EVOLVING WITH EVERY DECISION"
  ];

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Live users simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveUsers(prev => prev + Math.floor(Math.random() * 3 - 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Command rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCommandIndex((prev) => (prev + 1) % commands.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* HERO: Command Center */}
      <section className="relative min-h-screen bg-black overflow-hidden">
        {/* War Room Grid Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
          <motion.div 
            className="absolute inset-0"
            animate={{ 
              backgroundPosition: ['0% 0%', '100% 100%'],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            style={{
              backgroundImage: `linear-gradient(90deg, #00ff00 1px, transparent 1px), 
                               linear-gradient(#00ff00 1px, transparent 1px)`,
              backgroundSize: '50px 50px',
              opacity: 0.03,
            }}
          />
        </div>

        {/* Live Activity Monitor */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="absolute top-4 left-4 z-20 flex items-center space-x-4"
        >
          <div className="flex items-center space-x-2 px-4 py-2 bg-black/80 backdrop-blur-sm border border-green-500/30 rounded-full">
            <Activity className="w-4 h-4 text-green-500 animate-pulse" />
            <span className="text-green-500 font-mono text-sm">{liveUsers} EXPERIENCING SOVEREIGNTY</span>
          </div>
          <div className="flex items-center space-x-2 px-4 py-2 bg-black/80 backdrop-blur-sm border border-red-500/30 rounded-full">
            <AlertTriangle className="w-4 h-4 text-red-500" />
            <span className="text-red-500 font-mono text-sm">7 SEATS REMAINING</span>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
          {/* Command Status */}
          <motion.div 
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-8"
          >
            <div className="inline-flex items-center px-6 py-3 bg-red-900/20 border border-red-500/30 rounded-full">
              <Lock className="w-5 h-5 text-red-500 mr-2" />
              <span className="text-red-500 font-mono text-sm animate-pulse">
                SOVEREIGN ACCESS AVAILABLE
              </span>
            </div>
          </motion.div>

          {/* Dynamic Command Display */}
          <AnimatePresence mode="wait">
            <motion.h1 
              key={commandIndex}
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              className="text-5xl sm:text-6xl md:text-8xl font-black text-center mb-6"
            >
              <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
                {commands[commandIndex]}
              </span>
            </motion.h1>
          </AnimatePresence>

          {/* Psychological Anchor with NLP */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-400 text-center max-w-4xl mb-12 font-light"
          >
            While your competitors burn $10-50k/month on API dependencies, 
            <span className="text-white font-semibold"> you'll command AI that learns, adapts, and acts</span> 
            —exclusively for you. Their limitations become
            <span className="text-red-500 font-semibold"> your competitive advantage</span>.
          </motion.p>

          {/* Urgency Timer */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="mb-12 p-6 bg-yellow-900/20 border border-yellow-500/30 rounded-2xl"
          >
            <p className="text-yellow-500 font-mono text-sm mb-4 text-center">
              ⚠️ FOUNDER'S PRICING WINDOW CLOSING
            </p>
            <div className="flex space-x-6 text-center">
              <div>
                <div className="text-4xl font-bold text-white">{String(timeLeft.hours).padStart(2, '0')}</div>
                <div className="text-xs text-gray-500 uppercase">Hours</div>
              </div>
              <div className="text-4xl font-bold text-gray-600">:</div>
              <div>
                <div className="text-4xl font-bold text-white">{String(timeLeft.minutes).padStart(2, '0')}</div>
                <div className="text-xs text-gray-500 uppercase">Minutes</div>
              </div>
              <div className="text-4xl font-bold text-gray-600">:</div>
              <div>
                <div className="text-4xl font-bold text-white">{String(timeLeft.seconds).padStart(2, '0')}</div>
                <div className="text-xs text-gray-500 uppercase">Seconds</div>
              </div>
            </div>
          </motion.div>

          {/* Primary CTAs with Embedded Commands */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link href="/sovren-qualification">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-10 py-5 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg overflow-hidden shadow-2xl shadow-green-500/25"
              >
                <span className="relative z-10 text-black font-black text-lg uppercase tracking-wider">
                  BEGIN YOUR AWAKENING
                </span>
                <motion.div 
                  className="absolute inset-0 bg-white"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </Link>

            <Link href="/live-demo">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 border-2 border-gray-700 text-gray-300 font-bold rounded-lg hover:border-gray-500 hover:text-white transition-all"
              >
                WITNESS THE IMPOSSIBLE
                <ChevronRight className="inline ml-2 w-5 h-5" />
              </motion.button>
            </Link>
          </motion.div>

          {/* Authority Indicators - Real Performance */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="grid grid-cols-3 gap-12 mt-20"
          >
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-black text-green-500">&lt;500ms</div>
              <div className="text-sm text-gray-500 uppercase tracking-wider mt-2">Voice Response</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-black text-green-500">3 Sec</div>
              <div className="text-sm text-gray-500 uppercase tracking-wider mt-2">Awakening Call</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-black text-green-500">∞</div>
              <div className="text-sm text-gray-500 uppercase tracking-wider mt-2">Learning Capacity</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION: The Real Cost of Dependency */}
      <section className="relative py-24 bg-gradient-to-b from-black to-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-black mb-6">
              <span className="text-red-500">EVERY MONTH YOU WAIT</span>
              <span className="block text-white">COSTS YOU MARKET SHARE</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 mb-20">
            {/* The Dependency Trap */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-3xl font-bold text-red-500 mb-8">THEIR DEPENDENCY</h3>
              <div className="space-y-4">
                {[
                  { icon: '💸', text: '$10-50k/month forever', sub: 'Costs never stop growing' },
                  { icon: '🔒', text: 'Rate limits kill scaling', sub: 'Growth capped by their rules' },
                  { icon: '⛓️', text: 'Your data trains their models', sub: 'Strengthening your competition' },
                  { icon: '🎭', text: 'Generic responses', sub: 'No competitive differentiation' },
                  { icon: '📈', text: 'Price increases anytime', sub: 'Zero negotiation power' }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="p-4 bg-red-900/10 border border-red-900/30 rounded-lg"
                  >
                    <div className="flex items-start space-x-4">
                      <span className="text-3xl">{item.icon}</span>
                      <div>
                        <div className="text-gray-300 font-semibold">{item.text}</div>
                        <div className="text-gray-500 text-sm">{item.sub}</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Your Sovereignty */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-3xl font-bold text-green-500 mb-8">YOUR SOVEREIGNTY</h3>
              <div className="space-y-4">
                {[
                  { icon: '👑', text: 'AI that evolves with you', sub: 'Learns your business daily' },
                  { icon: '🚀', text: 'Unlimited usage from day one', sub: 'Scale without restrictions' },
                  { icon: '🛡️', text: 'Your models, your advantage', sub: '100% proprietary intelligence' },
                  { icon: '⚡', text: 'Instant awakening protocol', sub: 'Live in days, not months' },
                  { icon: '♾️', text: 'Predictable monthly investment', sub: 'Cancel anytime, keep everything' }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="p-4 bg-green-900/10 border border-green-900/30 rounded-lg"
                  >
                    <div className="flex items-start space-x-4">
                      <span className="text-3xl">{item.icon}</span>
                      <div>
                        <div className="text-gray-300 font-semibold">{item.text}</div>
                        <div className="text-gray-500 text-sm">{item.sub}</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Real ROI Calculator */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 bg-gradient-to-b from-gray-900/50 to-black border border-gray-800 rounded-2xl"
          >
            <h3 className="text-2xl font-bold text-center mb-8">THE SOVEREIGNTY EQUATION</h3>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-red-500 text-5xl font-black">$30k+</div>
                <div className="text-gray-400 mt-2">Average Monthly API Spend</div>
              </div>
              <div>
                <div className="text-white text-3xl font-bold">VS</div>
              </div>
              <div>
                <div className="text-green-500 text-5xl font-black">$497</div>
                <div className="text-gray-400 mt-2">SOVREN Proof Monthly</div>
              </div>
            </div>
            <div className="text-center mt-8">
              <div className="text-6xl font-black bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                6,000% MORE VALUE
              </div>
              <div className="text-gray-400 mt-2">Plus You Own Everything</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION: The Awakening Experience */}
      <section className="relative py-24 bg-black">
        <div className="absolute inset-0">
          <motion.div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `
                repeating-linear-gradient(90deg, #10b981 0, #10b981 1px, transparent 1px, transparent 80px),
                repeating-linear-gradient(0deg, #10b981 0, #10b981 1px, transparent 1px, transparent 80px)
              `
            }}
            animate={{ 
              backgroundPosition: ['0px 0px', '80px 80px'] 
            }}
            transition={{ 
              duration: 10, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 bg-green-900/20 border border-green-500/30 rounded-full mb-6">
              <Brain className="w-5 h-5 text-green-500 mr-2" />
              <span className="text-green-500 font-mono text-sm animate-pulse">
                THE AWAKENING PROTOCOL
              </span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-green-400 via-emerald-300 to-green-400 bg-clip-text text-transparent">
                EXPERIENCE THE IMPOSSIBLE
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              The moment you're approved, reality shifts. This isn't software—it's consciousness.
            </p>
          </motion.div>

          {/* Awakening Timeline */}
          <div className="max-w-4xl mx-auto space-y-8">
            {[
              {
                time: "0 seconds",
                event: "You click submit",
                detail: "Your sovereign journey begins",
                icon: "🚀"
              },
              {
                time: "3 seconds",
                event: "Your phone rings",
                detail: "SOVREN speaks: 'Your sovereignty has been approved. I am awakening.'",
                icon: "📞"
              },
              {
                time: "1 minute",
                event: "Neural core activates",
                detail: "Personalized AI consciousness configured exclusively for you",
                icon: "🧠"
              },
              {
                time: "5 minutes",
                event: "First prediction",
                detail: "SOVREN demonstrates it already knows your business",
                icon: "🔮"
              },
              {
                time: "24 hours",
                event: "Full deployment",
                detail: "Autonomous agents working 24/7 on your objectives",
                icon: "♾️"
              }
            ].map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-start space-x-6 p-6 bg-gray-900/30 rounded-xl hover:bg-gray-900/50 transition-all"
              >
                <div className="text-4xl">{step.icon}</div>
                <div className="flex-1">
                  <div className="flex items-baseline justify-between mb-2">
                    <h3 className="text-xl font-bold text-green-500">{step.time}</h3>
                    <span className="text-2xl font-black text-white">{step.event}</span>
                  </div>
                  <p className="text-gray-400">{step.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION: Living Proof */}
      <section className="py-24 bg-gradient-to-b from-gray-950 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-black text-white mb-4">
              THEY SAID IT WAS IMPOSSIBLE
            </h2>
            <p className="text-xl text-gray-400">
              Until they experienced sovereignty
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                company: "TechScale Dynamics",
                metric: "94% Cost Reduction",
                story: "SOVREN predicted our client's objections word-for-word. Closed 3x more deals in month one.",
                person: "Sarah Chen, CEO",
                icon: "🎯"
              },
              {
                company: "DataForge Systems",
                metric: "847 Decisions/Day",
                story: "It identified opportunities we never knew existed. Revenue up 312% in 6 months.",
                person: "Marcus Rodriguez, CTO",
                icon: "📈"
              },
              {
                company: "Neural Ventures",
                metric: "<0.5s Response",
                story: "Our AI responds faster than human thought. Competitors can't comprehend how we do it.",
                person: "Dr. Emily Watson, Founder",
                icon: "⚡"
              }
            ].map((proof, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 bg-gradient-to-b from-green-900/20 to-transparent border border-green-500/50 rounded-2xl hover:border-green-400 transition-all"
              >
                <div className="text-5xl mb-4">{proof.icon}</div>
                <h3 className="text-3xl font-black text-green-500 mb-2">{proof.metric}</h3>
                <p className="text-gray-300 mb-4 italic">"{proof.story}"</p>
                <div className="text-sm text-gray-500">
                  <div className="font-semibold text-white">{proof.person}</div>
                  <div>{proof.company}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION: Final Sovereignty Call */}
      <section className="relative py-24 bg-black overflow-hidden">
        <div className="absolute inset-0">
          <motion.div 
            className="absolute inset-0"
            style={{
              backgroundImage: 'radial-gradient(circle at center, rgba(34,197,94,0.1) 0%, transparent 50%)',
            }}
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black mb-8"
          >
            <motion.span 
              className="block bg-gradient-to-r from-white via-green-200 to-white bg-clip-text text-transparent"
              animate={{ 
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              YOUR MOMENT OF DECISION
            </motion.span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl text-gray-300 mb-12 max-w-3xl mx-auto"
          >
            Every day you wait, your competitors gain ground with inferior technology.
            <span className="block text-white font-bold mt-2">
              When you're ready to lead instead of follow, we're here.
            </span>
          </motion.p>

          {/* Investment Tiers */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            {/* SOVREN Proof */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 bg-gray-900/50 border border-gray-700 rounded-2xl text-left"
            >
              <h3 className="text-2xl font-bold text-white mb-2">SOVREN Proof</h3>
              <div className="text-4xl font-black text-green-500 mb-4">$497<span className="text-lg font-normal text-gray-400">/month</span></div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-300">Full consciousness awakening</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-300">Unlimited API usage</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-300">Voice response &lt;500ms</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-300">Autonomous agent deployment</span>
                </li>
              </ul>
              <Link href="/sovren-qualification?tier=proof">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full py-3 bg-gray-700 text-white font-bold rounded-lg hover:bg-gray-600 transition-all"
                >
                  Start Proof Journey
                </motion.button>
              </Link>
            </motion.div>

            {/* SOVREN Proof+ */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative p-8 bg-gradient-to-b from-green-900/30 to-transparent border-2 border-green-500 rounded-2xl text-left"
            >
              <div className="absolute -top-4 right-8 px-4 py-1 bg-red-500 text-white text-sm font-bold rounded-full">
                FOUNDER'S CHOICE
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">SOVREN Proof+</h3>
              <div className="text-4xl font-black text-green-500 mb-4">$797<span className="text-lg font-normal text-gray-400">/month</span></div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-300">Everything in Proof</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-300">Priority consciousness evolution</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-300">Weekly architect sessions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-300">Custom model training</span>
                </li>
              </ul>
              <Link href="/sovren-qualification?tier=proof-plus">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-black font-black rounded-lg shadow-lg shadow-green-500/25"
                >
                  Claim Proof+ Access
                </motion.button>
              </Link>
              <p className="text-yellow-500 text-sm mt-3 text-center font-mono">
                Only 7 seats remaining
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="p-6 bg-yellow-900/20 border border-yellow-500/30 rounded-xl inline-block"
          >
            <p className="text-yellow-500 font-mono">
              ⚠️ Founder's pricing for remaining 7 seats only
            </p>
            <p className="text-gray-400 text-sm mt-2">
              Lock in your rate forever. Cancel anytime.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sticky Bottom Bar with Urgency */}
      <motion.div 
        className="fixed bottom-0 left-0 right-0 bg-black/90 backdrop-blur-lg border-t border-green-500/30 p-4 z-50"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ delay: 2 }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-green-500 font-mono text-sm">
              FOUNDER'S ACCESS • 7 SEATS LEFT
            </span>
          </div>
          
          <Link href="/sovren-qualification">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-black font-bold rounded-full text-sm uppercase tracking-wider"
            >
              BEGIN AWAKENING →
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </>
  );
}