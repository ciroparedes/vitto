import React from 'react';

const Maintenance: React.FC = () => {
  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap');
          
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          
          .maintenance-container {
            min-height: 100vh;
            background: #000;
            background-image: 
              radial-gradient(ellipse at top left, rgba(120, 0, 255, 0.15) 0%, transparent 40%),
              radial-gradient(ellipse at bottom right, rgba(255, 0, 150, 0.15) 0%, transparent 40%);
            position: relative;
            overflow: hidden;
            display: flex;
            justify-content: center;
            align-items: center;
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
            padding: 20px;
          }
          
          .stars {
            position: absolute;
            width: 100%;
            height: 100%;
            overflow: hidden;
          }
          
          .star {
            position: absolute;
            width: 2px;
            height: 2px;
            background: #fff;
            border-radius: 50%;
            opacity: 0;
            animation: twinkle 10s infinite;
          }
          
          @keyframes twinkle {
            0%, 100% { opacity: 0; }
            50% { opacity: 1; }
          }
          
          .content-wrapper {
            position: relative;
            z-index: 10;
            text-align: center;
            padding: 2rem;
            width: 100%;
            max-width: 480px;
            max-height: 90vh;
            overflow-y: auto;
            background: rgba(10, 10, 10, 0.95);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 24px;
            backdrop-filter: blur(20px);
            box-shadow: 
              0 0 0 1px rgba(255, 255, 255, 0.1) inset,
              0 20px 40px rgba(0, 0, 0, 0.5);
          }
          
          .content-wrapper::-webkit-scrollbar {
            width: 6px;
          }
          
          .content-wrapper::-webkit-scrollbar-track {
            background: rgba(255, 255, 255, 0.05);
            border-radius: 3px;
          }
          
          .content-wrapper::-webkit-scrollbar-thumb {
            background: rgba(255, 255, 255, 0.2);
            border-radius: 3px;
          }
          
          .title {
            font-size: 2rem;
            font-weight: 800;
            background: linear-gradient(135deg, #fff 0%, #ff0080 50%, #7000ff 100%);
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            margin-bottom: 1.5rem;
            letter-spacing: -0.02em;
            animation: gradient-shift 3s ease infinite;
            background-size: 200% 200%;
          }
          
          @keyframes gradient-shift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          
          .token-badge {
            display: inline-block;
            padding: 0.5rem 1rem;
            background: rgba(112, 0, 255, 0.2);
            border: 1px solid rgba(112, 0, 255, 0.4);
            border-radius: 100px;
            color: #a78bfa;
            font-size: 0.875rem;
            font-weight: 600;
            margin-bottom: 1rem;
            animation: pulse 2s ease-in-out infinite;
          }
          
          @keyframes pulse {
            0%, 100% { transform: scale(1); opacity: 1; }
            50% { transform: scale(1.05); opacity: 0.9; }
          }
          
          .cta-button {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            padding: 1rem 2rem;
            background: linear-gradient(135deg, #ff0080 0%, #7000ff 100%);
            color: #fff;
            text-decoration: none;
            font-weight: 600;
            font-size: 1rem;
            border-radius: 12px;
            position: relative;
            overflow: hidden;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            margin: 1rem 0;
            box-shadow: 0 4px 15px rgba(255, 0, 128, 0.4);
          }
          
          .cta-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(255, 0, 128, 0.6);
          }
          
          .cta-button::before {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, transparent 70%);
            transform: scale(0);
            transition: transform 0.6s ease;
          }
          
          .cta-button:hover::before {
            transform: scale(1);
          }
          
          .benefits-grid {
            display: grid;
            gap: 0.75rem;
            margin: 1.5rem 0;
            text-align: left;
          }
          
          .benefit-item {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            padding: 0.75rem;
            background: rgba(255, 255, 255, 0.03);
            border: 1px solid rgba(255, 255, 255, 0.06);
            border-radius: 12px;
            color: rgba(255, 255, 255, 0.9);
            font-size: 0.925rem;
            transition: all 0.2s ease;
          }
          
          .benefit-item:hover {
            background: rgba(255, 255, 255, 0.05);
            border-color: rgba(255, 255, 255, 0.1);
            transform: translateX(4px);
          }
          
          .benefit-icon {
            font-size: 1.25rem;
            filter: saturate(1.5);
          }
          
          .telegram-section {
            margin-top: 2rem;
            padding: 1.25rem;
            background: linear-gradient(135deg, rgba(0, 255, 255, 0.05) 0%, rgba(112, 0, 255, 0.05) 100%);
            border: 1px solid rgba(0, 255, 255, 0.2);
            border-radius: 16px;
          }
          
          .telegram-button {
            display: inline-flex;
            align-items: center;
            gap: 0.75rem;
            padding: 0.875rem 1.5rem;
            background: #229ED9;
            color: #fff;
            text-decoration: none;
            font-weight: 600;
            font-size: 0.95rem;
            border-radius: 12px;
            transition: all 0.3s ease;
            margin-top: 0.75rem;
            box-shadow: 0 4px 15px rgba(34, 158, 217, 0.3);
          }
          
          .telegram-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(34, 158, 217, 0.5);
            background: #1e8ec7;
          }
          
          .telegram-icon {
            width: 24px;
            height: 24px;
            fill: currentColor;
          }
          
          .footer-text {
            color: rgba(255, 255, 255, 0.7);
            font-size: 0.875rem;
            margin-top: 1rem;
            line-height: 1.5;
          }
          
          .footer-text strong {
            color: #fff;
            font-weight: 600;
          }
          
          @media (max-width: 640px) {
            .content-wrapper {
              padding: 1.5rem;
              max-height: 95vh;
            }
            
            .title {
              font-size: 1.75rem;
            }
            
            .cta-button {
              padding: 0.875rem 1.5rem;
              font-size: 0.95rem;
            }
            
            .benefit-item {
              font-size: 0.875rem;
              padding: 0.625rem;
            }
            
            .telegram-button {
              padding: 0.75rem 1.25rem;
              font-size: 0.9rem;
            }
          }
          
          @media (max-width: 480px) {
            .content-wrapper {
              padding: 1.25rem;
            }
            
            .title {
              font-size: 1.5rem;
            }
            
            .benefit-item {
              font-size: 0.825rem;
            }
          }
        `}
      </style>
      
      <div className="maintenance-container">
        <div className="stars">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="star"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${5 + Math.random() * 5}s`
              }}
            />
          ))}
        </div>
        
        <div className="content-wrapper">
          <h1 className="title">¡Actúa YA! 🚀</h1>
          
          <div className="token-badge">
            Token COFRE disponible ahora
          </div>
          
          <a 
            href="https://pancakeswap.finance/swap?outputCurrency=0x858559A3D1c2b353CCc27a2B4c091D23129a7680" 
            className="cta-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Comprar en PancakeSwap</span>
            <span>→</span>
          </a>
          
          <div className="benefits-grid">
            <div className="benefit-item">
              <span className="benefit-icon">🎮</span>
              <span>Beta exclusiva en nuestros juegos inmersivos</span>
            </div>
            <div className="benefit-item">
              <span className="benefit-icon">🛒</span>
              <span>Descuentos VIP en e-commerce al lanzamiento</span>
            </div>
            <div className="benefit-item">
              <span className="benefit-icon">🤖</span>
              <span>Airdrops y bonos IA sorpresa</span>
            </div>
          </div>
          
          <div className="telegram-section">
            <a 
              href="https://t.me/freedompumpw" 
              className="telegram-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="telegram-icon" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.223-.548.223l.188-2.85 5.18-4.685c.223-.198-.054-.308-.346-.11l-6.4 4.02-2.76-.918c-.6-.187-.612-.6.125-.89l10.782-4.156c.5-.18.94.12.78.88z"/>
              </svg>
              <span>Únete a nuestro Telegram</span>
            </a>
            
            <p className="footer-text">
              Asegura tu lugar en el grupo de fundadores.<br/>
              <strong>¡Mantén tus tokens y prepárate para despegar juntos!</strong>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Maintenance;