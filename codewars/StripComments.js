function solution(text, markers) {
    const combinedText = Array.isArray(text) ? text.join("") : text;
  
    const lines = combinedText.split("\n");
  
    const result = lines.map((line) => {
      let minMarkerPos = line.length;
      markers.forEach((marker) => {
        const markerPos = line.indexOf(marker);
        if (markerPos !== -1 && markerPos < minMarkerPos) {
          minMarkerPos = markerPos;
        }
      });
  
      return line.slice(0, minMarkerPos).trimEnd();
    });
  
    return result.join("\n");
  }