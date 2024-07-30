import React, { useState, useEffect } from 'react';

function Counter({ counterTitle, counterNumber }) {
    const [count, setCount] = useState(0);
    const duration = 5000; // Total duration in milliseconds (5 seconds)
    
    useEffect(() => {
        const startTime = Date.now();
        const endTime = startTime + duration;
        const initialCount = count;
        const increment = counterNumber / duration * 16; // Increment per frame, 16ms approx for 60fps

        const updateCounter = () => {
            const now = Date.now();
            if (now < endTime) {
                setCount(prevCount => {
                    const newCount = Math.min(counterNumber, prevCount + increment);
                    if (newCount >= counterNumber) {
                        return counterNumber;
                    }
                    return newCount;
                });
                requestAnimationFrame(updateCounter);
            }
        };

        updateCounter(); // Start the animation

        // Cleanup function
        return () => cancelAnimationFrame(updateCounter);
    }, [counterNumber]);

    const styles = {
        color: '#4682B4',
        textDecoration: 'underline',
    }

    const moreStyles = {
        color: '#333333'
    }

    return (
        <div>
            <h3 style={moreStyles}>{counterTitle}</h3>
            <h2 style={styles}>{Math.round(count)}</h2> {/* Round for cleaner display */}
        </div>
    );
}

export default Counter;
