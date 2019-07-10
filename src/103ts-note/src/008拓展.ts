// 因为Date是全局的，所以别的地方也会用format，所以加global
declare global {
  interface Date {
    format: (pattern: string) => string;
  }
}

Date.prototype.format = function(str) {
  return "";
};

export {}