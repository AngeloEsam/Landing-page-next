'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function MohamiProPage() {
  const [daysRemaining, setDaysRemaining] = useState(0);
  const [animatedCount, setAnimatedCount] = useState(0);

  useEffect(() => {
    // Calculate target date (120 days from now)
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 120);

    // Calculate days remaining
    const calculateDaysRemaining = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();
      const days = Math.ceil(difference / (1000 * 60 * 60 * 24));
      return Math.max(0, days);
    };

    const actualDaysRemaining = calculateDaysRemaining();
    setDaysRemaining(actualDaysRemaining);

    // Animate counter from 0 to actual days remaining
    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = actualDaysRemaining / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= actualDaysRemaining) {
        setAnimatedCount(actualDaysRemaining);
        clearInterval(timer);
      } else {
        setAnimatedCount(Math.floor(current));
      }
    }, duration / steps);

    // Update the counter every hour
    const updateInterval = setInterval(() => {
      const newDays = calculateDaysRemaining();
      setDaysRemaining(newDays);
      setAnimatedCount(newDays);
    }, 1000 * 60 * 60); // Update every hour

    return () => {
      clearInterval(timer);
      clearInterval(updateInterval);
    };
  }, []);

  const features = [
    {
      icon: '⚖️',
      title: 'إدارة القضايا',
      description: 'نظام متكامل لإدارة ومتابعة القضايا القانونية'
    },
    {
      icon: '📊',
      title: 'التقارير الذكية',
      description: 'تقارير تفصيلية وتحليلات متقدمة لأداء المكتب'
    },
    {
      icon: '👥',
      title: 'إدارة العملاء',
      description: 'قاعدة بيانات شاملة لجميع العملاء والمستندات'
    },
    {
      icon: '📅',
      title: 'التقويم القانوني',
      description: 'جدولة المواعيد والجلسات بكفاءة عالية'
    }
  ];

  return (
    <>
    <Header/>
    <div style={{ minHeight: '100vh',marginTop:"100px", background: 'linear-gradient(135deg, #F5F5F5 0%, #E8E8E8 100%)' }}>
      <div style={{ maxWidth: '1440px', margin: '0 auto', padding: 'clamp(30px, 6vw, 60px) clamp(16px, 4vw, 64px)' }}>
        
        {/* Hero Section with Logo and Title */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 'clamp(20px, 4vw, 30px)',
            marginBottom: 'clamp(40px, 6vw, 60px)'
          }}
        >
          {/* Logo */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ 
              type: 'spring',
              stiffness: 260,
              damping: 20,
              delay: 0.3 
            }}
            style={{
              position: 'relative',
              width: 'clamp(140px, 25vw, 200px)',
              height: 'clamp(130px, 23vw, 185px)',
              filter: 'drop-shadow(0px 10px 30px rgba(199, 166, 78, 0.3))'
            }}
          >
            <Image
              src="/images/mohami-pro-logo.png"
              alt="Mohami Pro"
              fill
              className="object-contain"
            />
          </motion.div>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            style={{ textAlign: 'center' }}
          >
            <h1 style={{
              fontFamily: 'Almarai, sans-serif',
              fontWeight: '700',
              fontSize: 'clamp(40px, 6vw, 60px)',
              background: 'linear-gradient(135deg, #4E4E4E 0%, #C7A64E 50%, #90853d 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              margin: '0 0 16px 0',
              letterSpacing: '2px'
            }}>
              Mohami Pro
            </h1>
            <p style={{
              fontFamily: 'Cairo, sans-serif',
              fontWeight: '700',
              fontSize: 'clamp(28px, 4vw, 44px)',
              color: '#4E4E4E',
              margin: 0
            }}>
              محامي برو
            </p>
          </motion.div>
        </motion.div>

        {/* Countdown Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.7, type: 'spring' }}
          style={{
            background: 'linear-gradient(135deg, #FFFFFF 0%, #F5F5F5 100%)',
            borderRadius: 'clamp(16px, 3vw, 24px)',
            padding: 'clamp(30px, 5vw, 50px) clamp(20px, 4vw, 40px)',
            marginBottom: 'clamp(40px, 6vw, 60px)',
            boxShadow: '0px 20px 60px rgba(0, 0, 0, 0.15)',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Animated Background */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear'
            }}
            style={{
              position: 'absolute',
              top: '-50%',
              right: '-10%',
              width: '400px',
              height: '400px',
              background: 'radial-gradient(circle, rgba(199, 166, 78, 0.1) 0%, transparent 70%)',
              pointerEvents: 'none'
            }}
          />

          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              rotate: [360, 180, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: 'linear'
            }}
            style={{
              position: 'absolute',
              bottom: '-50%',
              left: '-10%',
              width: '500px',
              height: '500px',
              background: 'radial-gradient(circle, rgba(144, 133, 61, 0.08) 0%, transparent 70%)',
              pointerEvents: 'none'
            }}
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            style={{
              fontFamily: 'Cairo, sans-serif',
              fontWeight: '600',
              fontSize: 'clamp(20px, 3.5vw, 32px)',
              color: '#4E4E4E',
              marginBottom: 'clamp(20px, 4vw, 30px)',
              position: 'relative',
              zIndex: 1
            }}
          >
            الإطلاق الرسمي بعد 
          </motion.p>

          {/* Counter */}
          <motion.div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 'clamp(12px, 3vw, 20px)',
              position: 'relative',
              zIndex: 1,
              flexWrap: 'wrap'
            }}
          >
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              style={{
                background: 'linear-gradient(135deg, #C7A64E 0%, #90853d 100%)',
                borderRadius: 'clamp(12px, 2.5vw, 20px)',
                padding: 'clamp(20px, 4vw, 30px) clamp(30px, 6vw, 50px)',
                boxShadow: '0px 15px 40px rgba(199, 166, 78, 0.4)',
                minWidth: 'clamp(160px, 30vw, 200px)'
              }}
            >
              <motion.p
                key={animatedCount}
                initial={{ scale: 1.2, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                style={{
                  fontFamily: 'Almarai, sans-serif',
                  fontWeight: '800',
                  fontSize: 'clamp(50px, 10vw, 90px)',
                  color: '#FFFFFF',
                  margin: 0,
                  textShadow: '2px 4px 8px rgba(0, 0, 0, 0.2)'
                }}
              >
                {animatedCount}
              </motion.p>
              <p style={{
                fontFamily: 'Cairo, sans-serif',
                fontWeight: '600',
                fontSize: 'clamp(16px, 3vw, 24px)',
                color: '#FFFFFF',
                margin: 'clamp(8px, 1.5vw, 10px) 0 0 0'
              }}>
                يوم
              </p>
            </motion.div>

            <motion.div
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
              style={{
                fontSize: 'clamp(35px, 7vw, 60px)'
              }}
            >
              ⏳
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Features Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          style={{ marginBottom: 'clamp(40px, 6vw, 60px)' }}
        >
          <h2 style={{
            fontFamily: 'Cairo, sans-serif',
            fontWeight: '700',
            fontSize: 'clamp(28px, 5vw, 44px)',
            color: '#4E4E4E',
            textAlign: 'center',
            marginBottom: 'clamp(30px, 5vw, 50px)'
          }}>
            المميزات القادمة
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
            gap: 'clamp(20px, 4vw, 30px)',
            justifyItems: 'center'
          }}>
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.7 + (index * 0.15), duration: 0.6 }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0px 20px 50px rgba(199, 166, 78, 0.3)',
                  transition: { duration: 0.3 }
                }}
                style={{
                  background: '#FFFFFF',
                  borderRadius: 'clamp(12px, 2vw, 16px)',
                  padding: 'clamp(20px, 4vw, 30px)',
                  textAlign: 'center',
                  boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.1)',
                  cursor: 'pointer',
                  width: '100%',
                  maxWidth: '350px'
                }}
              >
                <motion.div
                  animate={{
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.5
                  }}
                  style={{
                    fontSize: 'clamp(45px, 8vw, 60px)',
                    marginBottom: 'clamp(12px, 2.5vw, 20px)'
                  }}
                >
                  {feature.icon}
                </motion.div>
                <h3 style={{
                  fontFamily: 'Cairo, sans-serif',
                  fontWeight: '700',
                  fontSize: 'clamp(20px, 3.5vw, 24px)',
                  color: '#C7A64E',
                  marginBottom: 'clamp(8px, 1.5vw, 12px)'
                }}>
                  {feature.title}
                </h3>
                <p style={{
                  fontFamily: 'Cairo, sans-serif',
                  fontWeight: '400',
                  fontSize: 'clamp(14px, 2.2vw, 16px)',
                  color: '#4E4E4E',
                  lineHeight: 'clamp(22px, 3.5vw, 26px)',
                  margin: 0
                }}>
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 0.6 }}
          style={{
            background: 'linear-gradient(135deg, #C7A64E 0%, #90853d 100%)',
            borderRadius: 'clamp(12px, 2.5vw, 20px)',
            padding: 'clamp(25px, 5vw, 40px)',
            textAlign: 'center',
            boxShadow: '0px 15px 50px rgba(199, 166, 78, 0.4)'
          }}
        >
          <p style={{
            fontFamily: 'Cairo, sans-serif',
            fontWeight: '700',
            fontSize: 'clamp(20px, 4vw, 32px)',
            color: '#FFFFFF',
            marginBottom: 'clamp(12px, 2vw, 16px)'
          }}>
            كن أول من يعلم بالإطلاق!
          </p>
          <p style={{
            fontFamily: 'Cairo, sans-serif',
            fontWeight: '400',
            fontSize: 'clamp(15px, 2.5vw, 20px)',
            color: '#FFFFFF',
            margin: 0,
            opacity: 0.95
          }}>
            تابعنا للحصول على آخر التحديثات والأخبار حول محامي برو
          </p>
        </motion.div>

      </div>
    </div>
    <Footer/>
    </>
  );
}
