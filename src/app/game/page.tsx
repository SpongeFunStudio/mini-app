// src/app/game/page.tsx

export default function Game() {
  return (
    <div className="flex flex-col items-center justify-center flex-grow">
      <iframe
        src="https://liaovq.github.io/yulegeyu/"
        className="w-full flex-1 bg-transparent"
      />
    </div>
  );
}
