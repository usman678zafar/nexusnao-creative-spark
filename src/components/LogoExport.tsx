
import { useRef, useState, useEffect } from 'react';
import Logo from './Logo';

const LogoExport = () => {
  const [logoSize, setLogoSize] = useState<'sm' | 'md' | 'lg'>('lg');
  const [withText, setWithText] = useState(true);
  const [variant, setVariant] = useState<'default' | 'simple'>('default');
  const [darkBackground, setDarkBackground] = useState(false);
  const [generating, setGenerating] = useState(false);
  const logoRef = useRef<HTMLDivElement>(null);

  const exportToPng = async () => {
    if (!logoRef.current) return;
    
    try {
      setGenerating(true);
      
      // Import html-to-image dynamically
      const htmlToImage = await import('html-to-image');
      
      // Convert SVG to PNG
      const dataUrl = await htmlToImage.toPng(logoRef.current, {
        quality: 1.0,
        pixelRatio: 3, // Higher resolution
        skipFonts: false
      });
      
      // Create download link
      const link = document.createElement('a');
      link.download = `nexusnao-logo-${variant}-${logoSize}${withText ? '-with-text' : ''}.png`;
      link.href = dataUrl;
      link.click();
    } catch (error) {
      console.error('Error generating PNG:', error);
    } finally {
      setGenerating(false);
    }
  };

  return (
    <div className="flex flex-col items-center gap-8 p-6">
      <h2 className="text-2xl font-display font-semibold">Logo PNG Export</h2>
      
      {/* Logo Preview */}
      <div 
        ref={logoRef} 
        className={`p-12 rounded-xl flex items-center justify-center ${
          darkBackground ? 'bg-nexus-darkBlue' : 'bg-white'
        }`}
        style={{ 
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
          minWidth: '320px',
          minHeight: '180px'
        }}
      >
        <Logo 
          size={logoSize} 
          variant={variant} 
          withText={withText} 
          className={darkBackground ? 'text-white' : ''}
        />
      </div>
      
      {/* Controls */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl w-full">
        <div className="space-y-2">
          <label className="text-sm font-medium text-nexus-darkGray">Size</label>
          <div className="flex gap-3">
            {(['sm', 'md', 'lg'] as const).map((size) => (
              <button
                key={size}
                onClick={() => setLogoSize(size)}
                className={`px-4 py-2 rounded-md transition-colors ${
                  logoSize === size 
                    ? 'bg-nexus-blue text-white' 
                    : 'bg-gray-100 text-nexus-darkGray hover:bg-gray-200'
                }`}
              >
                {size.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
        
        <div className="space-y-2">
          <label className="text-sm font-medium text-nexus-darkGray">Style</label>
          <div className="flex gap-3">
            {(['default', 'simple'] as const).map((v) => (
              <button
                key={v}
                onClick={() => setVariant(v)}
                className={`px-4 py-2 rounded-md transition-colors ${
                  variant === v 
                    ? 'bg-nexus-blue text-white' 
                    : 'bg-gray-100 text-nexus-darkGray hover:bg-gray-200'
                }`}
              >
                {v.charAt(0).toUpperCase() + v.slice(1)}
              </button>
            ))}
          </div>
        </div>
        
        <div className="space-y-2">
          <label className="text-sm font-medium text-nexus-darkGray">Show Text</label>
          <div className="flex gap-3">
            <button
              onClick={() => setWithText(true)}
              className={`px-4 py-2 rounded-md transition-colors ${
                withText ? 'bg-nexus-blue text-white' : 'bg-gray-100 text-nexus-darkGray hover:bg-gray-200'
              }`}
            >
              With Text
            </button>
            <button
              onClick={() => setWithText(false)}
              className={`px-4 py-2 rounded-md transition-colors ${
                !withText ? 'bg-nexus-blue text-white' : 'bg-gray-100 text-nexus-darkGray hover:bg-gray-200'
              }`}
            >
              Icon Only
            </button>
          </div>
        </div>
        
        <div className="space-y-2">
          <label className="text-sm font-medium text-nexus-darkGray">Background</label>
          <div className="flex gap-3">
            <button
              onClick={() => setDarkBackground(false)}
              className={`px-4 py-2 rounded-md transition-colors ${
                !darkBackground ? 'bg-nexus-blue text-white' : 'bg-gray-100 text-nexus-darkGray hover:bg-gray-200'
              }`}
            >
              Light
            </button>
            <button
              onClick={() => setDarkBackground(true)}
              className={`px-4 py-2 rounded-md transition-colors ${
                darkBackground ? 'bg-nexus-blue text-white' : 'bg-gray-100 text-nexus-darkGray hover:bg-gray-200'
              }`}
            >
              Dark
            </button>
          </div>
        </div>
      </div>
      
      {/* Export Button */}
      <button
        onClick={exportToPng}
        disabled={generating}
        className={`px-6 py-3 rounded-full font-medium transition-all ${
          generating 
            ? 'bg-gray-300 text-gray-600 cursor-not-allowed' 
            : 'bg-nexus-blue text-white hover:bg-nexus-darkBlue'
        }`}
      >
        {generating ? 'Generating...' : 'Download PNG'}
      </button>
    </div>
  );
};

export default LogoExport;
