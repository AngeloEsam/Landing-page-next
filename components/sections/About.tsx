'use client';

import Image from 'next/image';
import ScrollReveal from '@/components/animations/ScrollReveal';

export default function About() {
  return (
    <section id="about" className="about-section" style={{ width: '100%', background: '#FFFFFF', padding: 'clamp(10px, 2vw, 20px) 0' }}>
      <ScrollReveal>
        <div className="about-container" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 clamp(16px, 4vw, 64px)' }}>
          <div style={{ maxWidth: '1317px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 'clamp(30px, 5vw, 50px)', alignItems: 'center', justifyContent: 'center' }}>
          {/* Section Header with Underline */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', alignItems: 'center', justifyContent: 'center', width: '100%', maxWidth: '221px' }}>
            <div style={{ padding: '2px 0' }}>
              <h2 style={{
                fontFamily: 'Cairo, sans-serif',
                fontWeight: '700',
                fontSize: 'clamp(28px, 5vw, 44px)',
                lineHeight: 'normal',
                color: '#4E4E4E',
                textAlign: 'center',
                margin: 0
              }}>
                عن أوج تك
              </h2>
            </div>
            <div style={{ height: '6px', width: 'clamp(160px, 30vw, 220px)', position: 'relative' }}>
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '6px',
                background: '#C7A64E',
                borderRadius: '3px'
              }} />
            </div>
          </div>

          {/* Content Area: Image on Left, Text Cards on Right */}
          <div className="about-content" style={{ 
            display: 'flex', 
            gap: 'clamp(24px, 4vw, 50px)', 
            alignItems: 'flex-start', 
            justifyContent: 'space-between', 
            width: '100%',
            flexDirection: 'row'
          }}>
            {/* Image - Left Side */}
            <div className="about-image-wrapper" style={{ 
              height: 'clamp(350px, 45vw, 496px)', 
              width: '100%', 
              maxWidth: '589px', 
              minWidth: '300px',
              borderRadius: 'clamp(8px, 1vw, 12px)', 
              position: 'relative', 
              flexShrink: 0,
              flex: '0 0 auto'
            }}>
              <Image
                src="/images/team.jpg"
                alt="About Aug Tech Team"
                fill
                style={{
                  objectFit: 'cover',
                  objectPosition: '50% 50%',
                }}
                priority
              />
            </div>

            {/* Text Cards - Right Side */}
            <div className="about-text" style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: 'clamp(20px, 3vw, 32px)', 
              alignItems: 'flex-end', 
              justifyContent: 'flex-start', 
              flex: '1 1 0', 
              minWidth: '300px'
            }}>
              {/* الرسالة */}
              <div style={{ 
                width: '100%', 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'flex-end', 
                justifyContent: 'center', 
                lineHeight: 'normal',
                gap: 'clamp(8px, 2vw, 12px)'
              }}>
                <p style={{
                  fontFamily: 'Cairo, sans-serif',
                  fontWeight: '600',
                  fontSize: 'clamp(22px, 4vw, 32px)',
                  lineHeight: 'normal',
                  color: '#C7A64E',
                  textAlign: 'right',
                  margin: 0,
                  width: '100%'
                }}>
                  الرسالة
                </p>
                <p style={{
                  fontFamily: 'Cairo, sans-serif',
                  fontWeight: '500',
                  fontSize: 'clamp(16px, 3vw, 28px)',
                  lineHeight: 'clamp(26px, 4.5vw, 42px)',
                  color: '#4E4E4E',
                  textAlign: 'right',
                  margin: 0,
                  width: '100%',
                  whiteSpace: 'pre-wrap'
                }}>
                  في أوج تك، نحول الأفكار إلى حلول برمجية عملية تجمع بين الخبرة والابتكار. نقدم تطوير تطبيقات وأنظمة مخصصة، مع تحليل دقيق لاحتياجات العمل لضمان أداء سلس وفعّال وتمكين عملائنا من تحقيق الريادة.
                </p>
              </div>

              {/* الرؤية */}
              <div style={{ 
                width: '100%', 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'flex-end', 
                justifyContent: 'center', 
                lineHeight: 'normal',
                gap: 'clamp(8px, 2vw, 12px)'
              }}>
                <p style={{
                  fontFamily: 'Cairo, sans-serif',
                  fontWeight: '600',
                  fontSize: 'clamp(22px, 4vw, 32px)',
                  lineHeight: 'normal',
                  color: '#C7A64E',
                  textAlign: 'right',
                  margin: 0,
                  width: '100%'
                }}>
                  الرؤية
                </p>
                <p style={{
                  fontFamily: 'Cairo, sans-serif',
                  fontWeight: '500',
                  fontSize: 'clamp(16px, 3vw, 28px)',
                  lineHeight: 'clamp(26px, 4.5vw, 42px)',
                  color: '#4E4E4E',
                  textAlign: 'right',
                  margin: 0,
                  width: '100%',
                  whiteSpace: 'pre-wrap'
                }}>
                  أن نصبح الشريك التقى الأكثر موثوقية فى المنطقة بدمج خبرتنا العميقة مع شغفنا بأبتكار حلول برمجية و تقنيات لنقدم قيمة حقيقية تدوم .
                </p>
              </div>
            </div>
          </div>
        </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
