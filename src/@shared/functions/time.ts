export function pad(num: number, zeroes: number = 2): string {
  return ("00" + num).slice(-zeroes);
}

export function msToTime(msTime: number, showHours: boolean = false): string {
  var ms = msTime % 1000;
  msTime = (msTime - ms) / 1000;
  var secs = msTime % 60;
  msTime = (msTime - secs) / 60;
  var mins = msTime % 60;
  var hrs = (msTime - mins) / 60;

  var ret = pad(mins) + ":" + pad(secs) + "." + pad(ms, 3);
  if (showHours) {
    ret = pad(hrs) + ":" + ret
  }
  return ret
}
