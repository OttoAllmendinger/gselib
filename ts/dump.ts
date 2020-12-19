export const dump = (v, opts: { all?: boolean; values?: boolean } = { values: true, all: false }) => {
  const segments: string[] = [];
  const makeSegments = (v: any, objects: any[] = [], indent = 1) => {
    if (indent > 10) {
      segments.push(' ... (indent limit)');
      return;
    }

    if (segments.length > 1000) {
      segments.push(' ... (segment limit)');
      return;
    }

    if (v === null || v === undefined) {
      segments.push(String(v));
      return;
    }

    let asString;
    try {
      asString = String(v);
    } catch (e) {
      asString = '<???>';
    }

    const isArguments = asString === '[object Arguments]';
    let isArray = false;
    let isObject = false;
    try {
      isObject = !isArguments && v.constructor === Object;
      isArray = v.constructor === Array;
    } catch (e) {
      // isUnknown = true;
    }

    let keys: string[] | null = null;
    try {
      if (opts.all) {
        keys = Object.getOwnPropertyNames(v);
      } else {
        keys = Object.keys(v);
      }
    } catch (e) {
      /* noop */
    }

    const hasKeys = keys !== null;

    if (isArguments) {
      v = Array.prototype.slice.call(v);
    }

    const type = typeof v;
    const isPrimitive = v == null || (type != 'object' && type != 'function');

    if (isArray || isArguments || isObject || hasKeys) {
      if (objects.indexOf(v) >= 0) {
        segments.push('(recursion)');
        return;
      }
    }

    const nextObjects = objects.concat([v]);

    if (isArray || isArguments) {
      segments.push('[');
      v.forEach((x, i) => {
        if (i > 0) {
          segments.push(', ');
        }
        makeSegments(x, nextObjects, indent + 1);
      });
      segments.push(']');
    } else if (!isPrimitive && (isObject || hasKeys)) {
      segments.push('{ <', asString, '> ');
      let keys;
      if (opts.all) {
        keys = Object.getOwnPropertyNames(v);
      } else {
        keys = Object.keys(v);
      }
      keys.forEach((k, i) => {
        if (i > 0) {
          segments.push(', ');
        }
        segments.push(k.toString());
        segments.push(': ');
        if (opts.values) {
          const props = Object.getOwnPropertyDescriptor(v, k);
          if (props && 'value' in props) {
            makeSegments(v[k], nextObjects, indent + 1);
          } else {
            segments.push('(property)');
          }
        } else {
          segments.push('(', typeof v[k], ')');
        }
      });
      segments.push('}');
    } else {
      segments.push(asString, ' (', typeof v, ')');
    }
  };
  makeSegments(v);
  return segments.join('');
};
