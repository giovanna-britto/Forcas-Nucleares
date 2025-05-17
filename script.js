
let angle = 0;

function setup() {
  createCanvas(400, 400);
  noStroke();
}

function draw() {
  background(10, 10, 30); 

  translate(width / 2, height / 2);

  // Pulsação do núcleo (usando seno para simular vibração quântica)
  let scaleFactor = map(sin(frameCount * 0.05), -1, 1, 0.8, 1.2);
  push();
  scale(scaleFactor);
  fill(255, 204, 0); 
  ellipse(0, 0, 50, 50);
  pop();

  // Número de partículas em órbita
  let numParticles = 6;

  for (let i = 0; i < numParticles; i++) {
    push();

    // Rotação de cada partícula em torno do núcleo
    rotate(angle + TWO_PI * i / numParticles);

    // Raio da órbita controlado pelo mouse na horizontal
    let orbitRadius = map(mouseX, 0, width, 80, 250);

    // Translação para posição da partícula
    translate(orbitRadius, 0);

    // Escala controlada pelo mouse na vertical
    let particleSize = map(mouseY, 0, height, 5, 20);
    scale(map(mouseY, 0, height, 0.5, 1.5));

    fill(0, 255, 255); // Ciano para as partículas
    ellipse(0, 0, particleSize, particleSize);

    pop();
  }

  // Aumenta o ângulo para a próxima rotação
  angle += map(mouseX, 0, width, 0.01, 0.05);
}
