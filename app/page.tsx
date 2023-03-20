"use client";
import createCanvas from "lib/p5";
import background from "lib/p5";
import ellipse from "lib/p5";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    function setup() {
      createCanvas(1080, 1920);
    }

    function draw() {
      background(220);
      ellipse(50, 50, 80, 80);
    }
    setup();
    draw();
  }, []);

  return <div className="w-full h-full bg-black text-white text-7xl">test</div>;
}
