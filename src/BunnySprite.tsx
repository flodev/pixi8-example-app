import { Assets, Texture } from "pixi.js";
import { useEffect, useRef, useState } from "react";

export function BunnySprite() {
  // The Pixi.js `Sprite`
  const spriteRef = useRef(null);
  const [position, setPosition] = useState({ x: 100, y: 100 });

  const [texture, setTexture] = useState(Texture.EMPTY);

  const onmousedown = () => {
    window.addEventListener("mousemove", (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    });
  };

  // Preload the sprite if it hasn't been loaded yet
  useEffect(() => {
    if (texture === Texture.EMPTY) {
      Assets.load("https://pixijs.com/assets/bunny.png").then((result) => {
        setTexture(result);
      });
    }
  }, [texture]);

  return (
    <pixiSprite
      ref={spriteRef}
      anchor={0.5}
      eventMode={"static"}
      texture={texture}
      x={position.x}
      y={position.y}
      scale={2}
      onMouseDown={onmousedown}
    />
  );
}
