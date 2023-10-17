let circles = [];

function setup() {
  createCanvas(400, 400);

  for (let i = 0; i < 20; i++) {
    createRandomCircle();
  }
}

function draw() {
  background(220);

  for (let circle of circles) {
    fill(circle.color);
    ellipse(circle.x, circle.y, circle.radius * 2);
    
    if (circle.x < 0 || circle.x > width) {
      circle.xSpeed *= -1;
    }
    if (circle.y < 0 || circle.y > height) {
      circle.ySpeed *= -1;
    }

    circle.x += circle.xSpeed;
    circle.y += circle.ySpeed;

    
    for (let other of circles) {
      if (circle !== other) {
        let distance = dist(circle.x, circle.y, other.x, other.y);
        if (distance < circle.radius + other.radius) {
          circle.color = lerpColor(circle.color, other.color, 0.05);
          other.color = lerpColor(other.color, circle.color, 0.05);
        }
      }
    }
  }
}

function createRandomCircle() {
  let circle = {
    x: random(width),
    y: random(height),
    radius: random(10, 50),
    xSpeed: random(1, 3),
    ySpeed: random(1, 3),
    color: color(random(255), random(255), random(255))
  };
  circles.push(circle);
}

function mousePressed() {
  createRandomCircle();
}

// 본 과제는 원의 색상을 섞는 부분과 원 들이 벽에 튕겨나오는 표현을 구현하는 과정에서 Chat GPT의 도움을 받았습니다.
