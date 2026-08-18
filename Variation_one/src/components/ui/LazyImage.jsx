import React, { useState, useEffect, useRef } from 'react';

export default function LazyImage({
  src,
  alt,
  className = '',
  width,
  height,
  aspectRatio,
  loading = 'lazy',
  style,
  ...props
}) {
  const [isInView, setIsInView] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(img);
        }
      },
      {
        rootMargin: '200px 0px',
        threshold: 0.01
      }
    );

    observer.observe(img);

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const containerStyle = {
    ...(aspectRatio ? { aspectRatio } : {}),
    ...(width && height ? { aspectRatio: `${width} / ${height}` } : {}),
    ...style,
  };

  const imgStyle = {
    opacity: isLoaded ? 1 : 0,
    transition: 'opacity 0.6s ease-in-out',
  };

  return (
    <img
      ref={imgRef}
      {...props}
      alt={alt}
      loading={loading}
      onLoad={handleLoad}
      style={{ ...imgStyle, ...style }}
      className={`${className}`}
      src={isInView ? src : ''}
    />
  );
}
