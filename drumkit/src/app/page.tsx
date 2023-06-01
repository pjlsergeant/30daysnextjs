'use client';

const drums = {
    "bass": makeAudio("bass.wav"),
    "snare": makeAudio("snare.wav"),
    "block": makeAudio("block.wav"),
}

let playQueue = Promise.resolve();

function makeAudio(filename: string) : () => Promise<void> {
    // Audio only available client-side
    if (typeof window !== "undefined") {
        const sound = new Audio(filename);
        return () => sound.play()
    } else {
        return () => { throw new Error("attempt to play server-side") }
    }
}

function enqueue( fn: () => Promise<void> ) : () => void {
    return () => {
        playQueue = playQueue.then( fn );
    }
}

export default function Home() {
  return (
    <main>
        <button className="square" onClick={enqueue(drums['bass'])}>bass</button>
        <button className="square" onClick={enqueue(drums['snare'])}>snare</button>
        <button className="square" onClick={enqueue(drums['block'])}>block</button>
    </main>
  )
}
