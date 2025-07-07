'use client';

export default function Marquee() {
  return (
    <div className="banner-container">
        <div className="red-dot"></div>
        <div className="scrolling-text">
            <span className="text-item">
                <span className="red-text">RED</span>
                <span className="separator">●</span>
                LATEST WORK AND 
                <span className="featured-text">FEATURED</span>
                <span className="separator">●</span>
                LATEST WORK AND 
                <span className="featured-text">FEATURED</span>
                <span className="separator">●</span>
                LATEST WORK AND 
                <span className="featured-text">FEATURED</span>
                <span className="separator">●</span>
                <span className="red-text">RED</span>
                <span className="separator">●</span>
                LATEST WORK AND 
                <span className="featured-text">FEATURED</span>
                <span className="separator">●</span>
                LATEST WORK AND 
                <span className="featured-text">FEATURED</span>
                <span className="separator">●</span>
                LATEST WORK AND 
                <span className="featured-text">FEATURED</span>
            </span>
        </div>
    </div>
  );
}
