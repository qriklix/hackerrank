String.prototype.append = function(c) {
  return this + c
}

String.prototype.delete = function() {
  return this.slice(0, -1)
}

function appendAndDelete(s, t, k) {
  if (s.length + t.length <= k) {
    return 'Yes'
  }

  for (let i = 0; i < k; i++) {
    if (s.length > t.length) {
      s = s.delete()
      continue
    }

    if (s.length < t.length && t.indexOf(s) === 0) {
      s = s.append(t[s.length])
      continue
    }

    s = s.delete()
  }

  return s === t ? 'Yes' : 'No'
}
