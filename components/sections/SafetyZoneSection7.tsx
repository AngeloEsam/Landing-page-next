'use client';

import ScrollReveal from '@/components/animations/ScrollReveal';

export default function SafetyZoneSection7() {
  return (
    <section id="safety-zone-section-7" className="safety-zone-section-7" style={{ width: '100%', background: '#FFFFFF', padding: '80px 0' }}>
      <ScrollReveal>
        <div style={{ maxWidth: '1312px', margin: '0 auto', padding: '0 64px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', alignItems: 'center' }}>
            {/* Section Header */}
            <h2 style={{
              fontFamily: 'Cairo, sans-serif',
              fontWeight: '700',
              fontSize: '44px',
              lineHeight: 'normal',
              color: '#4E4E4E',
              textAlign: 'center',
              margin: 0
            }}>
              القسم السابع
            </h2>
            
            {/* Section Content */}
            <div style={{
              fontFamily: 'Cairo, sans-serif',
              fontWeight: '400',
              fontSize: '18px',
              lineHeight: '28px',
              color: '#4E4E4E',
              textAlign: 'center',
              maxWidth: '800px'
            }}>
              <p>محتوى القسم السابع - سيتم تعديله لاحقاً</p>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
