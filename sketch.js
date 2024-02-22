let xSerangga = 50; // posisi awal serangga

function setup() {
  createCanvas(600, 400); // membuat canvas dengan lebar 600 dan tinggi 400
}

function draw() {
  background(220); // mengatur warna latar belakang canvas
  
  // Menggambar objek serangga di bagian kiri
  fill(255, 255, 0); // warna kuning
  ellipse(150, 200, 40, 20); // kepala
  ellipse(120, 200, 20, 20); // mata kiri
  ellipse(180, 200, 20, 20); // mata kanan
  rect(110, 200, 10, 50); // kaki kiri
  rect(140, 200, 10, 50); // kaki tengah
  rect(170, 200, 10, 50); // kaki kanan
  ellipse(160, 220, 10, 30); // antena kanan
  ellipse(140, 220, 10, 30); // antena kiri

  // Menggambar objek serangga di bagian kanan
  fill(0, 255, 0); // warna hijau
  ellipse(xSerangga, 300, 40, 20); // kepala
  ellipse(xSerangga - 30, 300, 20, 20); // mata kiri
  ellipse(xSerangga + 30, 300, 20, 20); // mata kanan
  rect(xSerangga - 40, 300, 10, 50); // kaki kiri
  rect(xSerangga - 10, 300, 10, 50); // kaki tengah
  rect(xSerangga + 20, 300, 10, 50); // kaki kanan
  ellipse(xSerangga + 30, 320, 10, 30); // antena kanan
  ellipse(xSerangga - 30, 320, 10, 30); // antena kiri

  // Mengatur pergerakan serangga ke kanan
  xSerangga += 5;
  
  // Jika serangga mencapai batas kanan canvas, kembali ke posisi awal di kiri
  if (xSerangga > width) {
    xSerangga = -50;
  }
}