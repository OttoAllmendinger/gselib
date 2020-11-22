export function versionArray(v) {
  return v.split('.').map(Number);
}

export function zip(a, b, defaultValue?) {
  if (a.length === 0 && b.length === 0) {
    return [];
  }
  const headA = a.length > 0 ? a.shift() : defaultValue;
  const headB = b.length > 0 ? b.shift() : defaultValue;
  return [[headA, headB]].concat(zip(a, b, defaultValue));
}

export function versionEqual(a, b) {
  return zip(versionArray(a), versionArray(b), 0).reduce((prev, [a, b]) => prev && a === b, true);
}

export function versionGreater(a, b) {
  const diff = zip(versionArray(a), versionArray(b), 0).find(([a, b]) => a !== b);
  if (!diff) {
    return false;
  }
  const [x, y] = diff;
  return x > y;
}

export function versionSmaller(a, b) {
  return !versionEqual(a, b) && !versionGreater(a, b);
}

export function currentVersion() {
  return new Version(imports.misc.config.PACKAGE_VERSION);
}

export class Version {
  private packageVersion: string;

  constructor(packageVersion) {
    this.packageVersion = packageVersion;
  }

  equal(v) {
    return versionEqual(this.packageVersion, v);
  }

  greater(v) {
    return versionGreater(this.packageVersion, v);
  }

  smaller(v) {
    return versionSmaller(this.packageVersion, v);
  }

  greaterEqual(v) {
    return this.equal(v) || this.greater(v);
  }

  smallerEqual(v) {
    return this.equal(v) || this.smaller(v);
  }
}
