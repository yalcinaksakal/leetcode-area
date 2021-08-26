const isMacth = (s, p) => {
  if (!p) return !s;
  indexS = 0;
  x = p.split("*").length - 1;
  if (s.length < p.length - 2 * x) return false;
  for (i = 0; i < p.length; i++) {
    if (p[i] === "*") continue;
    if (p[i + 1] === "*") {
      while ((p[i] === s[indexS] || p[i] === ".") && indexS < s.length)
        indexS++;

      continue;
    }
    if (p[i] === s[indexS] || (p[i] === "." && s[indexS])) {
      indexS++;
      continue;
    }
    if (p[i] !== s[indexS] && p[i] !== "." && s[indexS]) {
      return false;
    }

    if (p[i - 1] === "*") {
      indexS -= p.length - i;
      i--;
      continue;
    }
    return false;
  }
  return indexS >= s.length;
};
result = isMacth("a", "ab*a");
console.log(result);

// Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of the line i is at (i, ai) and (i, 0). Find two lines, which, together with the x-axis forms a container, such that the container contains the most water.

var maxArea = function (height) {
  maxArea = 0;
  left = 0;
  right = height.length - 1;
  while (left < right) {
    maxArea = Math.max(
      maxArea,
      Math.min(height[left], height[right]) * (right - left)
    );
    if (height[left] < height[right]) left++;
    else right--;
  }
  return maxArea;
};
