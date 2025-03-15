import { motion } from 'framer-motion';

const Hero = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 10 
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 10,
        delay: 0.8
      }
    },
    hover: { 
      scale: 1.05, 
      boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.4)",
      transition: { 
        type: "spring", 
        stiffness: 400, 
        damping: 10 
      }
    },
    tap: { scale: 0.95 }
  };

  const secondaryButtonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 10,
        delay: 0.9
      }
    },
    hover: { 
      scale: 1.05, 
      borderColor: "rgba(255, 255, 255, 0.3)",
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      transition: { 
        type: "spring", 
        stiffness: 400, 
        damping: 10 
      }
    },
    tap: { scale: 0.95 }
  };

  const glowVariants = {
    initial: {
      opacity: 0.5,
      scale: 0.8,
    },
    animate: {
      opacity: [0.4, 0.6, 0.4],
      scale: [0.8, 1.2, 0.8],
      transition: {
        duration: 8,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="min-h-screen pt-24 pb-16 flex items-center justify-center relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[#060606] z-0">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl"
          variants={glowVariants}
          initial="initial"
          animate="animate"
          custom={1}
        ></motion.div>
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-400/10 rounded-full filter blur-3xl"
          variants={glowVariants}
          initial="initial"
          animate="animate"
          custom={2}
          transition={{
            delay: 2,
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        ></motion.div>
        
        {/* Additional subtle background elements */}
        <motion.div 
          className="absolute top-1/3 right-1/3 w-64 h-64 bg-purple-500/5 rounded-full filter blur-3xl"
          animate={{
            opacity: [0.3, 0.5, 0.3],
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        ></motion.div>
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <h2 className="text-sm font-medium text-blue-400 mb-3 tracking-wider uppercase">
              Tech Founder & Innovator
            </h2>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-gradient">Aditya Kamble</span>
            </h1>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <p className="text-xl md:text-2xl font-medium text-white/90 mb-8">
              Founder & CEO of AdiVirtus AI
            </p>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <p className="text-base md:text-lg text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed">
              Tech visionary and entrepreneur dedicated to building innovative AI solutions 
              that transform industries and enhance human potential.
            </p>
          </motion.div>
          
          <div className="flex flex-wrap items-center justify-center gap-5">
            <motion.a
              href="#projects"
              className="inline-flex items-center justify-center bg-gradient-to-r from-blue-400 to-blue-600 text-white px-6 py-3 rounded-full text-sm font-medium hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-200 backdrop-blur-sm"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              View My Work
            </motion.a>
            
            <motion.a
              href="#contact"
              className="inline-flex items-center justify-center bg-white/[0.05] backdrop-blur-sm text-white border border-white/10 px-6 py-3 rounded-full text-sm font-medium hover:bg-white/[0.1] transition-all duration-200"
              variants={secondaryButtonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Get In Touch
            </motion.a>
          </div>
        </motion.div>
        
        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          <motion.div 
            className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center items-start p-1"
            initial={{ opacity: 0.5 }}
          >
            <motion.div 
              className="w-1 h-2 bg-white/60 rounded-full"
              animate={{ y: [0, 6, 0] }}
              transition={{ 
                repeat: Infinity, 
                duration: 1.5,
                ease: "easeInOut" 
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 