import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);

  // Animation variants for the loader
  const containerVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.5,
        when: "afterChildren",
        staggerChildren: 0.1,
        staggerDirection: -1
      }
    }
  };

  const loaderVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.3,
        ease: "easeIn"
      }
    }
  };

  const textVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
        ease: "easeIn"
      }
    }
  };

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <motion.div 
          key="loader"
          className="min-h-screen flex flex-col items-center justify-center bg-[#060606]"
          variants={containerVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <motion.div 
            className="relative"
            variants={loaderVariants}
          >
            <div className="w-20 h-20 relative">
              <motion.div 
                className="w-full h-full rounded-full border-t-2 border-b-2 border-blue-400"
                animate={{ 
                  rotate: 360,
                  transition: { 
                    duration: 1.5, 
                    ease: "linear", 
                    repeat: Infinity 
                  }
                }}
              />
              <motion.div 
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full border-t-2 border-b-2 border-teal-400"
                animate={{ 
                  rotate: -360,
                  transition: { 
                    duration: 2, 
                    ease: "linear", 
                    repeat: Infinity 
                  }
                }}
              />
              <motion.div 
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full border-t-2 border-b-2 border-purple-400"
                animate={{ 
                  rotate: 360,
                  transition: { 
                    duration: 2.5, 
                    ease: "linear", 
                    repeat: Infinity 
                  }
                }}
              />
            </div>
          </motion.div>
          <motion.p 
            className="mt-6 text-white/70 text-sm font-medium"
            variants={textVariants}
          >
            Loading Experience
          </motion.p>
        </motion.div>
      ) : (
        <motion.div 
          key="content"
          className="min-h-screen bg-[#060606] text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Header />
          <main>
            <Hero />
          </main>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default App
