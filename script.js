// Function to chunk a string into smaller chunks based on the provided chunk length
function chunkString(str, chunkLength) {
  if (!str || chunkLength <= 0) return []; // Return empty array if input string is null or chunk length is invalid
  const result = [];
  
  for (let i = 0; i < str.length; i += chunkLength) {
    result.push(str.slice(i, i + chunkLength));
  }
  
  return result;
}

// Event listener for the "Chunk String" button
document.getElementById('chunkButton').addEventListener('click', function() {
  const str = document.getElementById('strInput').value;
  const chunkLength = parseInt(document.getElementById('chunkSize').value);
  
  if (!str || chunkLength <= 0) {
    document.getElementById('result').textContent = 'Please provide valid inputs.';
    return;
  }

  const chunks = chunkString(str, chunkLength);
  document.getElementById('result').textContent = JSON.stringify(chunks, null, 2);
});
