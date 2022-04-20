function loadVertexAndFragmentShader(gl, vertexShaderId, fragmentShaderId) {
    const vertexShaderScript = document.getElementById(vertexShaderId);
    const vertexShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShader, vertexShaderScript.innerHTML);
    gl.compileShader(vertexShader);
  
    const fragmentShaderScript = document.getElementById(fragmentShaderId);
    const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShader, fragmentShaderScript.innerHTML);
    gl.compileShader(fragmentShader);
  
    const shaderProgram = gl.createProgram();
    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);
    gl.linkProgram(shaderProgram);
  
    return shaderProgram;
  }
  
  // Get A WebGL context
  const canvas = document.getElementById('gl-canvas');
  const gl =
    canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
  
  // Function oadVertexAndFragmentShader
  const shaderProgram = loadVertexAndFragmentShader(
    gl,
    'vertex-shader',
    'fragment-shader'
  );
  gl.useProgram(shaderProgram);
  
  // Pulls attribute a_position out of vertex shader
  const vertexPositionAttribute = gl.getAttribLocation(
    shaderProgram,
    'a_position'
  );
  
  // Circle
  const n = 100;
  const rad = 0.5;

  //Array for cos and sin
  const array = [];
  
  // Circle
  const steps = 360 / n;
  for (let i = 0.0; i <= 360 + steps; i += steps) {
    const j = i * (Math.PI / 180);
  
    array.push(Math.sin(j) * rad);
    array.push(Math.cos(j) * rad);
  }
  
  
  // Buffer
  const buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(array), gl.STATIC_DRAW);
  
  // Vertex shader 
  gl.enableVertexAttribArray(vertexPositionAttribute);
  // Bind vertex+ buffer
  gl.vertexAttribPointer(vertexPositionAttribute, 2, gl.FLOAT, false, 0, 0);
  
  gl.clearColor(0.1375, 0.152, 0.164, 1.0);
  // Clear 
  gl.clear(gl.COLOR_BUFFER_BIT);
  // Draw
  gl.drawArrays(gl.LINE_STRIP, 0, array.length / 2);