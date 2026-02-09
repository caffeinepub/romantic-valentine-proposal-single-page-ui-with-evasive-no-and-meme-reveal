import { useState, useCallback, useEffect } from 'react';

interface Position {
  x: number;
  y: number;
}

const BUTTON_WIDTH = 240;
const BUTTON_HEIGHT = 90;
const PADDING = 30;
const MIN_DISTANCE = 150; // Minimum distance from previous position

export function useEvasiveNoButton() {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const [previousPosition, setPreviousPosition] = useState<Position>({ x: 0, y: 0 });

  // Initialize position on mount
  useEffect(() => {
    const updatePosition = () => {
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      
      // Center the button initially (roughly where it would be in the flex layout)
      const centerX = (viewportWidth - BUTTON_WIDTH) / 2 + 150; // Offset to the right of Yes button
      const centerY = (viewportHeight - BUTTON_HEIGHT) / 2;
      
      setPosition({ x: centerX, y: centerY });
      setPreviousPosition({ x: centerX, y: centerY });
    };

    updatePosition();
    window.addEventListener('resize', updatePosition);
    return () => window.removeEventListener('resize', updatePosition);
  }, []);

  const getRandomPosition = useCallback((): Position => {
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    const maxX = viewportWidth - BUTTON_WIDTH - PADDING;
    const maxY = viewportHeight - BUTTON_HEIGHT - PADDING;

    let attempts = 0;
    let newX: number;
    let newY: number;

    // Try to find a position that's far enough from the previous one
    do {
      newX = Math.max(PADDING, Math.random() * maxX);
      newY = Math.max(PADDING, Math.random() * maxY);
      attempts++;
      
      const distance = Math.sqrt(
        Math.pow(newX - previousPosition.x, 2) + 
        Math.pow(newY - previousPosition.y, 2)
      );
      
      if (distance >= MIN_DISTANCE || attempts > 10) {
        break;
      }
    } while (attempts <= 10);

    return { x: newX, y: newY };
  }, [previousPosition]);

  const handlePointerEnter = useCallback(() => {
    const newPos = getRandomPosition();
    setPreviousPosition(position);
    setPosition(newPos);
  }, [getRandomPosition, position]);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    e.preventDefault();
    const newPos = getRandomPosition();
    setPreviousPosition(position);
    setPosition(newPos);
  }, [getRandomPosition, position]);

  return {
    position,
    handlePointerEnter,
    handleTouchStart,
  };
}
