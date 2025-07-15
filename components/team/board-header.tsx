"use client"
import Image from 'next/image'


export default function BoardHeaderImage() {
    return (
            <div className="w-full">
                <Image className="w-full mb-30" src="/images/team/board/board-header.png" alt="2025 ACM Board picture" width={2233} height={1016} />
            </div>
    );
}