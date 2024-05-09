
<html>
<head>
  <title>Visit Counter</title>
</head>
<body>
  <h1>Welcome to the Visit Counter!</h1>
  
  <div>
    <p>Total Visits: <span id="visitCount">0</span></p>
  </div>

  <script>
    // Check if visit count exists in local storage
    let visitCount = localStorage.getItem('visitCount');
    if (!visitCount) {
      visitCount = 0
    }

    // Update visit count display
    document.getElementById('visitCount').textContent = visitCount;

    // Increment visit count and update local storage
    visitCount++;
    localStorage.setItem('visitCount', visitCount.toString());
  </script>
</body>
</html>
