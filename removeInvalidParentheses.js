/*
Given a string s that contains parentheses and letters, remove the minimum number of invalid parentheses to make the input string valid.

Return all the possible results. You may return the answer in any order.
Example 1:
Input: s = "()())()"
Output: ["(())()","()()()"]

Contsraints:
1 <= s.length <= 25
s consists of lowercase English letters and parentheses '(' and ')'.
There will be at most 20 parentheses in s.
*/

var removeInvalidParentheses = function(s) {
  let breakpoint = -1;
  let left = 0, right = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      left++;
    } else if (s[i] === ')') {
      right++;
    } else {
      continue;
    }
    if (left < right) {
      left = 0;
      right = 0;
      breakpoint = i;
    }
  }

  let breakpoint2 = -1;
  let left2 = 0, right2 = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === '(') {
      left2++;
    } else if (s[i] === ')') {
      right2++;
    } else {
      continue;
    }
    if (left2 < right2) {
      left2 = 0;
      right2 = 0;
      breakpoint2 = i;
    }
  }
  let results = [];
  if (breakpoint !== -1) {
    results.push(s.substring(0, breakpoint) + s.substring(breakpoint + 1));
  }
  if (breakpoint2 !== -1) {
    results.push(s.substring(0, breakpoint2) + s.substring(breakpoint2 + 1));
  }
  return results;
};
