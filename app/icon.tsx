import { ImageResponse } from 'next/og'

// Route segment config
export const runtime = 'edge'

// Image metadata
export const size = {
    width: 512,
    height: 512,
}
export const contentType = 'image/png'

// Image generation
export default function Icon() {
    return new ImageResponse(
        (
            // ImageResponse JSX element
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'transparent',
                }}
            >
                {/* Background rotated square */}
                <div
                    style={{
                        position: 'absolute',
                        width: '400px',
                        height: '400px',
                        background: '#704a2f', // sage-800
                        borderRadius: '64px',
                        transform: 'rotate(6deg)',
                    }}
                />
                {/* Foreground rotated square */}
                <div
                    style={{
                        position: 'absolute',
                        width: '400px',
                        height: '400px',
                        background: 'white',
                        border: '24px solid #704a2f', // sage-800
                        borderRadius: '64px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transform: 'rotate(0deg)', // Simplified from -3deg for cleaner icon
                    }}
                >
                    {/* Sprout Icon SVG */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="256"
                        height="256"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#8B5E3C" // sage-700
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M7 20h10" />
                        <path d="M10 20c5.5-2.5.8-6.4 3-10" />
                        <path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z" />
                        <path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z" />
                    </svg>
                </div>
            </div>
        ),
        // ImageResponse options
        {
            ...size,
        }
    )
}
