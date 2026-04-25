import { createRequire as __better_createRequire } from 'node:module';
const require = __better_createRequire(import.meta.url);
var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/external.js
var external_exports = {};
__export(external_exports, {
  BRAND: () => BRAND,
  DIRTY: () => DIRTY,
  EMPTY_PATH: () => EMPTY_PATH,
  INVALID: () => INVALID,
  NEVER: () => NEVER,
  OK: () => OK,
  ParseStatus: () => ParseStatus,
  Schema: () => ZodType,
  ZodAny: () => ZodAny,
  ZodArray: () => ZodArray,
  ZodBigInt: () => ZodBigInt,
  ZodBoolean: () => ZodBoolean,
  ZodBranded: () => ZodBranded,
  ZodCatch: () => ZodCatch,
  ZodDate: () => ZodDate,
  ZodDefault: () => ZodDefault,
  ZodDiscriminatedUnion: () => ZodDiscriminatedUnion,
  ZodEffects: () => ZodEffects,
  ZodEnum: () => ZodEnum,
  ZodError: () => ZodError,
  ZodFirstPartyTypeKind: () => ZodFirstPartyTypeKind,
  ZodFunction: () => ZodFunction,
  ZodIntersection: () => ZodIntersection,
  ZodIssueCode: () => ZodIssueCode,
  ZodLazy: () => ZodLazy,
  ZodLiteral: () => ZodLiteral,
  ZodMap: () => ZodMap,
  ZodNaN: () => ZodNaN,
  ZodNativeEnum: () => ZodNativeEnum,
  ZodNever: () => ZodNever,
  ZodNull: () => ZodNull,
  ZodNullable: () => ZodNullable,
  ZodNumber: () => ZodNumber,
  ZodObject: () => ZodObject,
  ZodOptional: () => ZodOptional,
  ZodParsedType: () => ZodParsedType,
  ZodPipeline: () => ZodPipeline,
  ZodPromise: () => ZodPromise,
  ZodReadonly: () => ZodReadonly,
  ZodRecord: () => ZodRecord,
  ZodSchema: () => ZodType,
  ZodSet: () => ZodSet,
  ZodString: () => ZodString,
  ZodSymbol: () => ZodSymbol,
  ZodTransformer: () => ZodEffects,
  ZodTuple: () => ZodTuple,
  ZodType: () => ZodType,
  ZodUndefined: () => ZodUndefined,
  ZodUnion: () => ZodUnion,
  ZodUnknown: () => ZodUnknown,
  ZodVoid: () => ZodVoid,
  addIssueToContext: () => addIssueToContext,
  any: () => anyType,
  array: () => arrayType,
  bigint: () => bigIntType,
  boolean: () => booleanType,
  coerce: () => coerce,
  custom: () => custom,
  date: () => dateType,
  datetimeRegex: () => datetimeRegex,
  defaultErrorMap: () => en_default,
  discriminatedUnion: () => discriminatedUnionType,
  effect: () => effectsType,
  enum: () => enumType,
  function: () => functionType,
  getErrorMap: () => getErrorMap,
  getParsedType: () => getParsedType,
  instanceof: () => instanceOfType,
  intersection: () => intersectionType,
  isAborted: () => isAborted,
  isAsync: () => isAsync,
  isDirty: () => isDirty,
  isValid: () => isValid,
  late: () => late,
  lazy: () => lazyType,
  literal: () => literalType,
  makeIssue: () => makeIssue,
  map: () => mapType,
  nan: () => nanType,
  nativeEnum: () => nativeEnumType,
  never: () => neverType,
  null: () => nullType,
  nullable: () => nullableType,
  number: () => numberType,
  object: () => objectType,
  objectUtil: () => objectUtil,
  oboolean: () => oboolean,
  onumber: () => onumber,
  optional: () => optionalType,
  ostring: () => ostring,
  pipeline: () => pipelineType,
  preprocess: () => preprocessType,
  promise: () => promiseType,
  quotelessJson: () => quotelessJson,
  record: () => recordType,
  set: () => setType,
  setErrorMap: () => setErrorMap,
  strictObject: () => strictObjectType,
  string: () => stringType,
  symbol: () => symbolType,
  transformer: () => effectsType,
  tuple: () => tupleType,
  undefined: () => undefinedType,
  union: () => unionType,
  unknown: () => unknownType,
  util: () => util,
  void: () => voidType
});

// node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/helpers/util.js
var util;
(function(util2) {
  util2.assertEqual = (_) => {
  };
  function assertIs(_arg) {
  }
  util2.assertIs = assertIs;
  function assertNever(_x) {
    throw new Error();
  }
  util2.assertNever = assertNever;
  util2.arrayToEnum = (items) => {
    const obj = {};
    for (const item of items) {
      obj[item] = item;
    }
    return obj;
  };
  util2.getValidEnumValues = (obj) => {
    const validKeys = util2.objectKeys(obj).filter((k) => typeof obj[obj[k]] !== "number");
    const filtered = {};
    for (const k of validKeys) {
      filtered[k] = obj[k];
    }
    return util2.objectValues(filtered);
  };
  util2.objectValues = (obj) => {
    return util2.objectKeys(obj).map(function(e) {
      return obj[e];
    });
  };
  util2.objectKeys = typeof Object.keys === "function" ? (obj) => Object.keys(obj) : (object) => {
    const keys = [];
    for (const key in object) {
      if (Object.prototype.hasOwnProperty.call(object, key)) {
        keys.push(key);
      }
    }
    return keys;
  };
  util2.find = (arr, checker) => {
    for (const item of arr) {
      if (checker(item))
        return item;
    }
    return void 0;
  };
  util2.isInteger = typeof Number.isInteger === "function" ? (val) => Number.isInteger(val) : (val) => typeof val === "number" && Number.isFinite(val) && Math.floor(val) === val;
  function joinValues(array, separator = " | ") {
    return array.map((val) => typeof val === "string" ? `'${val}'` : val).join(separator);
  }
  util2.joinValues = joinValues;
  util2.jsonStringifyReplacer = (_, value) => {
    if (typeof value === "bigint") {
      return value.toString();
    }
    return value;
  };
})(util || (util = {}));
var objectUtil;
(function(objectUtil2) {
  objectUtil2.mergeShapes = (first, second) => {
    return {
      ...first,
      ...second
      // second overwrites first
    };
  };
})(objectUtil || (objectUtil = {}));
var ZodParsedType = util.arrayToEnum([
  "string",
  "nan",
  "number",
  "integer",
  "float",
  "boolean",
  "date",
  "bigint",
  "symbol",
  "function",
  "undefined",
  "null",
  "array",
  "object",
  "unknown",
  "promise",
  "void",
  "never",
  "map",
  "set"
]);
var getParsedType = (data) => {
  const t = typeof data;
  switch (t) {
    case "undefined":
      return ZodParsedType.undefined;
    case "string":
      return ZodParsedType.string;
    case "number":
      return Number.isNaN(data) ? ZodParsedType.nan : ZodParsedType.number;
    case "boolean":
      return ZodParsedType.boolean;
    case "function":
      return ZodParsedType.function;
    case "bigint":
      return ZodParsedType.bigint;
    case "symbol":
      return ZodParsedType.symbol;
    case "object":
      if (Array.isArray(data)) {
        return ZodParsedType.array;
      }
      if (data === null) {
        return ZodParsedType.null;
      }
      if (data.then && typeof data.then === "function" && data.catch && typeof data.catch === "function") {
        return ZodParsedType.promise;
      }
      if (typeof Map !== "undefined" && data instanceof Map) {
        return ZodParsedType.map;
      }
      if (typeof Set !== "undefined" && data instanceof Set) {
        return ZodParsedType.set;
      }
      if (typeof Date !== "undefined" && data instanceof Date) {
        return ZodParsedType.date;
      }
      return ZodParsedType.object;
    default:
      return ZodParsedType.unknown;
  }
};

// node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/ZodError.js
var ZodIssueCode = util.arrayToEnum([
  "invalid_type",
  "invalid_literal",
  "custom",
  "invalid_union",
  "invalid_union_discriminator",
  "invalid_enum_value",
  "unrecognized_keys",
  "invalid_arguments",
  "invalid_return_type",
  "invalid_date",
  "invalid_string",
  "too_small",
  "too_big",
  "invalid_intersection_types",
  "not_multiple_of",
  "not_finite"
]);
var quotelessJson = (obj) => {
  const json = JSON.stringify(obj, null, 2);
  return json.replace(/"([^"]+)":/g, "$1:");
};
var ZodError = class _ZodError extends Error {
  get errors() {
    return this.issues;
  }
  constructor(issues) {
    super();
    this.issues = [];
    this.addIssue = (sub) => {
      this.issues = [...this.issues, sub];
    };
    this.addIssues = (subs = []) => {
      this.issues = [...this.issues, ...subs];
    };
    const actualProto = new.target.prototype;
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(this, actualProto);
    } else {
      this.__proto__ = actualProto;
    }
    this.name = "ZodError";
    this.issues = issues;
  }
  format(_mapper) {
    const mapper = _mapper || function(issue) {
      return issue.message;
    };
    const fieldErrors = { _errors: [] };
    const processError = (error) => {
      for (const issue of error.issues) {
        if (issue.code === "invalid_union") {
          issue.unionErrors.map(processError);
        } else if (issue.code === "invalid_return_type") {
          processError(issue.returnTypeError);
        } else if (issue.code === "invalid_arguments") {
          processError(issue.argumentsError);
        } else if (issue.path.length === 0) {
          fieldErrors._errors.push(mapper(issue));
        } else {
          let curr = fieldErrors;
          let i = 0;
          while (i < issue.path.length) {
            const el = issue.path[i];
            const terminal = i === issue.path.length - 1;
            if (!terminal) {
              curr[el] = curr[el] || { _errors: [] };
            } else {
              curr[el] = curr[el] || { _errors: [] };
              curr[el]._errors.push(mapper(issue));
            }
            curr = curr[el];
            i++;
          }
        }
      }
    };
    processError(this);
    return fieldErrors;
  }
  static assert(value) {
    if (!(value instanceof _ZodError)) {
      throw new Error(`Not a ZodError: ${value}`);
    }
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, util.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(mapper = (issue) => issue.message) {
    const fieldErrors = {};
    const formErrors = [];
    for (const sub of this.issues) {
      if (sub.path.length > 0) {
        const firstEl = sub.path[0];
        fieldErrors[firstEl] = fieldErrors[firstEl] || [];
        fieldErrors[firstEl].push(mapper(sub));
      } else {
        formErrors.push(mapper(sub));
      }
    }
    return { formErrors, fieldErrors };
  }
  get formErrors() {
    return this.flatten();
  }
};
ZodError.create = (issues) => {
  const error = new ZodError(issues);
  return error;
};

// node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/locales/en.js
var errorMap = (issue, _ctx) => {
  let message;
  switch (issue.code) {
    case ZodIssueCode.invalid_type:
      if (issue.received === ZodParsedType.undefined) {
        message = "Required";
      } else {
        message = `Expected ${issue.expected}, received ${issue.received}`;
      }
      break;
    case ZodIssueCode.invalid_literal:
      message = `Invalid literal value, expected ${JSON.stringify(issue.expected, util.jsonStringifyReplacer)}`;
      break;
    case ZodIssueCode.unrecognized_keys:
      message = `Unrecognized key(s) in object: ${util.joinValues(issue.keys, ", ")}`;
      break;
    case ZodIssueCode.invalid_union:
      message = `Invalid input`;
      break;
    case ZodIssueCode.invalid_union_discriminator:
      message = `Invalid discriminator value. Expected ${util.joinValues(issue.options)}`;
      break;
    case ZodIssueCode.invalid_enum_value:
      message = `Invalid enum value. Expected ${util.joinValues(issue.options)}, received '${issue.received}'`;
      break;
    case ZodIssueCode.invalid_arguments:
      message = `Invalid function arguments`;
      break;
    case ZodIssueCode.invalid_return_type:
      message = `Invalid function return type`;
      break;
    case ZodIssueCode.invalid_date:
      message = `Invalid date`;
      break;
    case ZodIssueCode.invalid_string:
      if (typeof issue.validation === "object") {
        if ("includes" in issue.validation) {
          message = `Invalid input: must include "${issue.validation.includes}"`;
          if (typeof issue.validation.position === "number") {
            message = `${message} at one or more positions greater than or equal to ${issue.validation.position}`;
          }
        } else if ("startsWith" in issue.validation) {
          message = `Invalid input: must start with "${issue.validation.startsWith}"`;
        } else if ("endsWith" in issue.validation) {
          message = `Invalid input: must end with "${issue.validation.endsWith}"`;
        } else {
          util.assertNever(issue.validation);
        }
      } else if (issue.validation !== "regex") {
        message = `Invalid ${issue.validation}`;
      } else {
        message = "Invalid";
      }
      break;
    case ZodIssueCode.too_small:
      if (issue.type === "array")
        message = `Array must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `more than`} ${issue.minimum} element(s)`;
      else if (issue.type === "string")
        message = `String must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `over`} ${issue.minimum} character(s)`;
      else if (issue.type === "number")
        message = `Number must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${issue.minimum}`;
      else if (issue.type === "bigint")
        message = `Number must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${issue.minimum}`;
      else if (issue.type === "date")
        message = `Date must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${new Date(Number(issue.minimum))}`;
      else
        message = "Invalid input";
      break;
    case ZodIssueCode.too_big:
      if (issue.type === "array")
        message = `Array must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `less than`} ${issue.maximum} element(s)`;
      else if (issue.type === "string")
        message = `String must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `under`} ${issue.maximum} character(s)`;
      else if (issue.type === "number")
        message = `Number must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
      else if (issue.type === "bigint")
        message = `BigInt must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
      else if (issue.type === "date")
        message = `Date must be ${issue.exact ? `exactly` : issue.inclusive ? `smaller than or equal to` : `smaller than`} ${new Date(Number(issue.maximum))}`;
      else
        message = "Invalid input";
      break;
    case ZodIssueCode.custom:
      message = `Invalid input`;
      break;
    case ZodIssueCode.invalid_intersection_types:
      message = `Intersection results could not be merged`;
      break;
    case ZodIssueCode.not_multiple_of:
      message = `Number must be a multiple of ${issue.multipleOf}`;
      break;
    case ZodIssueCode.not_finite:
      message = "Number must be finite";
      break;
    default:
      message = _ctx.defaultError;
      util.assertNever(issue);
  }
  return { message };
};
var en_default = errorMap;

// node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/errors.js
var overrideErrorMap = en_default;
function setErrorMap(map) {
  overrideErrorMap = map;
}
function getErrorMap() {
  return overrideErrorMap;
}

// node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/helpers/parseUtil.js
var makeIssue = (params) => {
  const { data, path, errorMaps, issueData } = params;
  const fullPath = [...path, ...issueData.path || []];
  const fullIssue = {
    ...issueData,
    path: fullPath
  };
  if (issueData.message !== void 0) {
    return {
      ...issueData,
      path: fullPath,
      message: issueData.message
    };
  }
  let errorMessage = "";
  const maps = errorMaps.filter((m) => !!m).slice().reverse();
  for (const map of maps) {
    errorMessage = map(fullIssue, { data, defaultError: errorMessage }).message;
  }
  return {
    ...issueData,
    path: fullPath,
    message: errorMessage
  };
};
var EMPTY_PATH = [];
function addIssueToContext(ctx, issueData) {
  const overrideMap = getErrorMap();
  const issue = makeIssue({
    issueData,
    data: ctx.data,
    path: ctx.path,
    errorMaps: [
      ctx.common.contextualErrorMap,
      // contextual error map is first priority
      ctx.schemaErrorMap,
      // then schema-bound map if available
      overrideMap,
      // then global override map
      overrideMap === en_default ? void 0 : en_default
      // then global default map
    ].filter((x) => !!x)
  });
  ctx.common.issues.push(issue);
}
var ParseStatus = class _ParseStatus {
  constructor() {
    this.value = "valid";
  }
  dirty() {
    if (this.value === "valid")
      this.value = "dirty";
  }
  abort() {
    if (this.value !== "aborted")
      this.value = "aborted";
  }
  static mergeArray(status, results) {
    const arrayValue = [];
    for (const s of results) {
      if (s.status === "aborted")
        return INVALID;
      if (s.status === "dirty")
        status.dirty();
      arrayValue.push(s.value);
    }
    return { status: status.value, value: arrayValue };
  }
  static async mergeObjectAsync(status, pairs) {
    const syncPairs = [];
    for (const pair of pairs) {
      const key = await pair.key;
      const value = await pair.value;
      syncPairs.push({
        key,
        value
      });
    }
    return _ParseStatus.mergeObjectSync(status, syncPairs);
  }
  static mergeObjectSync(status, pairs) {
    const finalObject = {};
    for (const pair of pairs) {
      const { key, value } = pair;
      if (key.status === "aborted")
        return INVALID;
      if (value.status === "aborted")
        return INVALID;
      if (key.status === "dirty")
        status.dirty();
      if (value.status === "dirty")
        status.dirty();
      if (key.value !== "__proto__" && (typeof value.value !== "undefined" || pair.alwaysSet)) {
        finalObject[key.value] = value.value;
      }
    }
    return { status: status.value, value: finalObject };
  }
};
var INVALID = Object.freeze({
  status: "aborted"
});
var DIRTY = (value) => ({ status: "dirty", value });
var OK = (value) => ({ status: "valid", value });
var isAborted = (x) => x.status === "aborted";
var isDirty = (x) => x.status === "dirty";
var isValid = (x) => x.status === "valid";
var isAsync = (x) => typeof Promise !== "undefined" && x instanceof Promise;

// node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/helpers/errorUtil.js
var errorUtil;
(function(errorUtil2) {
  errorUtil2.errToObj = (message) => typeof message === "string" ? { message } : message || {};
  errorUtil2.toString = (message) => typeof message === "string" ? message : message?.message;
})(errorUtil || (errorUtil = {}));

// node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/types.js
var ParseInputLazyPath = class {
  constructor(parent, value, path, key) {
    this._cachedPath = [];
    this.parent = parent;
    this.data = value;
    this._path = path;
    this._key = key;
  }
  get path() {
    if (!this._cachedPath.length) {
      if (Array.isArray(this._key)) {
        this._cachedPath.push(...this._path, ...this._key);
      } else {
        this._cachedPath.push(...this._path, this._key);
      }
    }
    return this._cachedPath;
  }
};
var handleResult = (ctx, result) => {
  if (isValid(result)) {
    return { success: true, data: result.value };
  } else {
    if (!ctx.common.issues.length) {
      throw new Error("Validation failed but no issues detected.");
    }
    return {
      success: false,
      get error() {
        if (this._error)
          return this._error;
        const error = new ZodError(ctx.common.issues);
        this._error = error;
        return this._error;
      }
    };
  }
};
function processCreateParams(params) {
  if (!params)
    return {};
  const { errorMap: errorMap2, invalid_type_error, required_error, description } = params;
  if (errorMap2 && (invalid_type_error || required_error)) {
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  }
  if (errorMap2)
    return { errorMap: errorMap2, description };
  const customMap = (iss, ctx) => {
    const { message } = params;
    if (iss.code === "invalid_enum_value") {
      return { message: message ?? ctx.defaultError };
    }
    if (typeof ctx.data === "undefined") {
      return { message: message ?? required_error ?? ctx.defaultError };
    }
    if (iss.code !== "invalid_type")
      return { message: ctx.defaultError };
    return { message: message ?? invalid_type_error ?? ctx.defaultError };
  };
  return { errorMap: customMap, description };
}
var ZodType = class {
  get description() {
    return this._def.description;
  }
  _getType(input) {
    return getParsedType(input.data);
  }
  _getOrReturnCtx(input, ctx) {
    return ctx || {
      common: input.parent.common,
      data: input.data,
      parsedType: getParsedType(input.data),
      schemaErrorMap: this._def.errorMap,
      path: input.path,
      parent: input.parent
    };
  }
  _processInputParams(input) {
    return {
      status: new ParseStatus(),
      ctx: {
        common: input.parent.common,
        data: input.data,
        parsedType: getParsedType(input.data),
        schemaErrorMap: this._def.errorMap,
        path: input.path,
        parent: input.parent
      }
    };
  }
  _parseSync(input) {
    const result = this._parse(input);
    if (isAsync(result)) {
      throw new Error("Synchronous parse encountered promise.");
    }
    return result;
  }
  _parseAsync(input) {
    const result = this._parse(input);
    return Promise.resolve(result);
  }
  parse(data, params) {
    const result = this.safeParse(data, params);
    if (result.success)
      return result.data;
    throw result.error;
  }
  safeParse(data, params) {
    const ctx = {
      common: {
        issues: [],
        async: params?.async ?? false,
        contextualErrorMap: params?.errorMap
      },
      path: params?.path || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data,
      parsedType: getParsedType(data)
    };
    const result = this._parseSync({ data, path: ctx.path, parent: ctx });
    return handleResult(ctx, result);
  }
  "~validate"(data) {
    const ctx = {
      common: {
        issues: [],
        async: !!this["~standard"].async
      },
      path: [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data,
      parsedType: getParsedType(data)
    };
    if (!this["~standard"].async) {
      try {
        const result = this._parseSync({ data, path: [], parent: ctx });
        return isValid(result) ? {
          value: result.value
        } : {
          issues: ctx.common.issues
        };
      } catch (err) {
        if (err?.message?.toLowerCase()?.includes("encountered")) {
          this["~standard"].async = true;
        }
        ctx.common = {
          issues: [],
          async: true
        };
      }
    }
    return this._parseAsync({ data, path: [], parent: ctx }).then((result) => isValid(result) ? {
      value: result.value
    } : {
      issues: ctx.common.issues
    });
  }
  async parseAsync(data, params) {
    const result = await this.safeParseAsync(data, params);
    if (result.success)
      return result.data;
    throw result.error;
  }
  async safeParseAsync(data, params) {
    const ctx = {
      common: {
        issues: [],
        contextualErrorMap: params?.errorMap,
        async: true
      },
      path: params?.path || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data,
      parsedType: getParsedType(data)
    };
    const maybeAsyncResult = this._parse({ data, path: ctx.path, parent: ctx });
    const result = await (isAsync(maybeAsyncResult) ? maybeAsyncResult : Promise.resolve(maybeAsyncResult));
    return handleResult(ctx, result);
  }
  refine(check, message) {
    const getIssueProperties = (val) => {
      if (typeof message === "string" || typeof message === "undefined") {
        return { message };
      } else if (typeof message === "function") {
        return message(val);
      } else {
        return message;
      }
    };
    return this._refinement((val, ctx) => {
      const result = check(val);
      const setError = () => ctx.addIssue({
        code: ZodIssueCode.custom,
        ...getIssueProperties(val)
      });
      if (typeof Promise !== "undefined" && result instanceof Promise) {
        return result.then((data) => {
          if (!data) {
            setError();
            return false;
          } else {
            return true;
          }
        });
      }
      if (!result) {
        setError();
        return false;
      } else {
        return true;
      }
    });
  }
  refinement(check, refinementData) {
    return this._refinement((val, ctx) => {
      if (!check(val)) {
        ctx.addIssue(typeof refinementData === "function" ? refinementData(val, ctx) : refinementData);
        return false;
      } else {
        return true;
      }
    });
  }
  _refinement(refinement) {
    return new ZodEffects({
      schema: this,
      typeName: ZodFirstPartyTypeKind.ZodEffects,
      effect: { type: "refinement", refinement }
    });
  }
  superRefine(refinement) {
    return this._refinement(refinement);
  }
  constructor(def) {
    this.spa = this.safeParseAsync;
    this._def = def;
    this.parse = this.parse.bind(this);
    this.safeParse = this.safeParse.bind(this);
    this.parseAsync = this.parseAsync.bind(this);
    this.safeParseAsync = this.safeParseAsync.bind(this);
    this.spa = this.spa.bind(this);
    this.refine = this.refine.bind(this);
    this.refinement = this.refinement.bind(this);
    this.superRefine = this.superRefine.bind(this);
    this.optional = this.optional.bind(this);
    this.nullable = this.nullable.bind(this);
    this.nullish = this.nullish.bind(this);
    this.array = this.array.bind(this);
    this.promise = this.promise.bind(this);
    this.or = this.or.bind(this);
    this.and = this.and.bind(this);
    this.transform = this.transform.bind(this);
    this.brand = this.brand.bind(this);
    this.default = this.default.bind(this);
    this.catch = this.catch.bind(this);
    this.describe = this.describe.bind(this);
    this.pipe = this.pipe.bind(this);
    this.readonly = this.readonly.bind(this);
    this.isNullable = this.isNullable.bind(this);
    this.isOptional = this.isOptional.bind(this);
    this["~standard"] = {
      version: 1,
      vendor: "zod",
      validate: (data) => this["~validate"](data)
    };
  }
  optional() {
    return ZodOptional.create(this, this._def);
  }
  nullable() {
    return ZodNullable.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return ZodArray.create(this);
  }
  promise() {
    return ZodPromise.create(this, this._def);
  }
  or(option) {
    return ZodUnion.create([this, option], this._def);
  }
  and(incoming) {
    return ZodIntersection.create(this, incoming, this._def);
  }
  transform(transform) {
    return new ZodEffects({
      ...processCreateParams(this._def),
      schema: this,
      typeName: ZodFirstPartyTypeKind.ZodEffects,
      effect: { type: "transform", transform }
    });
  }
  default(def) {
    const defaultValueFunc = typeof def === "function" ? def : () => def;
    return new ZodDefault({
      ...processCreateParams(this._def),
      innerType: this,
      defaultValue: defaultValueFunc,
      typeName: ZodFirstPartyTypeKind.ZodDefault
    });
  }
  brand() {
    return new ZodBranded({
      typeName: ZodFirstPartyTypeKind.ZodBranded,
      type: this,
      ...processCreateParams(this._def)
    });
  }
  catch(def) {
    const catchValueFunc = typeof def === "function" ? def : () => def;
    return new ZodCatch({
      ...processCreateParams(this._def),
      innerType: this,
      catchValue: catchValueFunc,
      typeName: ZodFirstPartyTypeKind.ZodCatch
    });
  }
  describe(description) {
    const This = this.constructor;
    return new This({
      ...this._def,
      description
    });
  }
  pipe(target) {
    return ZodPipeline.create(this, target);
  }
  readonly() {
    return ZodReadonly.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
};
var cuidRegex = /^c[^\s-]{8,}$/i;
var cuid2Regex = /^[0-9a-z]+$/;
var ulidRegex = /^[0-9A-HJKMNP-TV-Z]{26}$/i;
var uuidRegex = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i;
var nanoidRegex = /^[a-z0-9_-]{21}$/i;
var jwtRegex = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/;
var durationRegex = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/;
var emailRegex = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
var _emojiRegex = `^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$`;
var emojiRegex;
var ipv4Regex = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;
var ipv4CidrRegex = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/;
var ipv6Regex = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/;
var ipv6CidrRegex = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/;
var base64Regex = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
var base64urlRegex = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/;
var dateRegexSource = `((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))`;
var dateRegex = new RegExp(`^${dateRegexSource}$`);
function timeRegexSource(args) {
  let secondsRegexSource = `[0-5]\\d`;
  if (args.precision) {
    secondsRegexSource = `${secondsRegexSource}\\.\\d{${args.precision}}`;
  } else if (args.precision == null) {
    secondsRegexSource = `${secondsRegexSource}(\\.\\d+)?`;
  }
  const secondsQuantifier = args.precision ? "+" : "?";
  return `([01]\\d|2[0-3]):[0-5]\\d(:${secondsRegexSource})${secondsQuantifier}`;
}
function timeRegex(args) {
  return new RegExp(`^${timeRegexSource(args)}$`);
}
function datetimeRegex(args) {
  let regex = `${dateRegexSource}T${timeRegexSource(args)}`;
  const opts = [];
  opts.push(args.local ? `Z?` : `Z`);
  if (args.offset)
    opts.push(`([+-]\\d{2}:?\\d{2})`);
  regex = `${regex}(${opts.join("|")})`;
  return new RegExp(`^${regex}$`);
}
function isValidIP(ip, version) {
  if ((version === "v4" || !version) && ipv4Regex.test(ip)) {
    return true;
  }
  if ((version === "v6" || !version) && ipv6Regex.test(ip)) {
    return true;
  }
  return false;
}
function isValidJWT(jwt, alg) {
  if (!jwtRegex.test(jwt))
    return false;
  try {
    const [header] = jwt.split(".");
    if (!header)
      return false;
    const base64 = header.replace(/-/g, "+").replace(/_/g, "/").padEnd(header.length + (4 - header.length % 4) % 4, "=");
    const decoded = JSON.parse(atob(base64));
    if (typeof decoded !== "object" || decoded === null)
      return false;
    if ("typ" in decoded && decoded?.typ !== "JWT")
      return false;
    if (!decoded.alg)
      return false;
    if (alg && decoded.alg !== alg)
      return false;
    return true;
  } catch {
    return false;
  }
}
function isValidCidr(ip, version) {
  if ((version === "v4" || !version) && ipv4CidrRegex.test(ip)) {
    return true;
  }
  if ((version === "v6" || !version) && ipv6CidrRegex.test(ip)) {
    return true;
  }
  return false;
}
var ZodString = class _ZodString extends ZodType {
  _parse(input) {
    if (this._def.coerce) {
      input.data = String(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.string) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.string,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    const status = new ParseStatus();
    let ctx = void 0;
    for (const check of this._def.checks) {
      if (check.kind === "min") {
        if (input.data.length < check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            minimum: check.value,
            type: "string",
            inclusive: true,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        if (input.data.length > check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            maximum: check.value,
            type: "string",
            inclusive: true,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "length") {
        const tooBig = input.data.length > check.value;
        const tooSmall = input.data.length < check.value;
        if (tooBig || tooSmall) {
          ctx = this._getOrReturnCtx(input, ctx);
          if (tooBig) {
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_big,
              maximum: check.value,
              type: "string",
              inclusive: true,
              exact: true,
              message: check.message
            });
          } else if (tooSmall) {
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_small,
              minimum: check.value,
              type: "string",
              inclusive: true,
              exact: true,
              message: check.message
            });
          }
          status.dirty();
        }
      } else if (check.kind === "email") {
        if (!emailRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "email",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "emoji") {
        if (!emojiRegex) {
          emojiRegex = new RegExp(_emojiRegex, "u");
        }
        if (!emojiRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "emoji",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "uuid") {
        if (!uuidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "uuid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "nanoid") {
        if (!nanoidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "nanoid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "cuid") {
        if (!cuidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "cuid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "cuid2") {
        if (!cuid2Regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "cuid2",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "ulid") {
        if (!ulidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "ulid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "url") {
        try {
          new URL(input.data);
        } catch {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "url",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "regex") {
        check.regex.lastIndex = 0;
        const testResult = check.regex.test(input.data);
        if (!testResult) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "regex",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "trim") {
        input.data = input.data.trim();
      } else if (check.kind === "includes") {
        if (!input.data.includes(check.value, check.position)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: { includes: check.value, position: check.position },
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "toLowerCase") {
        input.data = input.data.toLowerCase();
      } else if (check.kind === "toUpperCase") {
        input.data = input.data.toUpperCase();
      } else if (check.kind === "startsWith") {
        if (!input.data.startsWith(check.value)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: { startsWith: check.value },
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "endsWith") {
        if (!input.data.endsWith(check.value)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: { endsWith: check.value },
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "datetime") {
        const regex = datetimeRegex(check);
        if (!regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: "datetime",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "date") {
        const regex = dateRegex;
        if (!regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: "date",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "time") {
        const regex = timeRegex(check);
        if (!regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: "time",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "duration") {
        if (!durationRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "duration",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "ip") {
        if (!isValidIP(input.data, check.version)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "ip",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "jwt") {
        if (!isValidJWT(input.data, check.alg)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "jwt",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "cidr") {
        if (!isValidCidr(input.data, check.version)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "cidr",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "base64") {
        if (!base64Regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "base64",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "base64url") {
        if (!base64urlRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "base64url",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return { status: status.value, value: input.data };
  }
  _regex(regex, validation, message) {
    return this.refinement((data) => regex.test(data), {
      validation,
      code: ZodIssueCode.invalid_string,
      ...errorUtil.errToObj(message)
    });
  }
  _addCheck(check) {
    return new _ZodString({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  email(message) {
    return this._addCheck({ kind: "email", ...errorUtil.errToObj(message) });
  }
  url(message) {
    return this._addCheck({ kind: "url", ...errorUtil.errToObj(message) });
  }
  emoji(message) {
    return this._addCheck({ kind: "emoji", ...errorUtil.errToObj(message) });
  }
  uuid(message) {
    return this._addCheck({ kind: "uuid", ...errorUtil.errToObj(message) });
  }
  nanoid(message) {
    return this._addCheck({ kind: "nanoid", ...errorUtil.errToObj(message) });
  }
  cuid(message) {
    return this._addCheck({ kind: "cuid", ...errorUtil.errToObj(message) });
  }
  cuid2(message) {
    return this._addCheck({ kind: "cuid2", ...errorUtil.errToObj(message) });
  }
  ulid(message) {
    return this._addCheck({ kind: "ulid", ...errorUtil.errToObj(message) });
  }
  base64(message) {
    return this._addCheck({ kind: "base64", ...errorUtil.errToObj(message) });
  }
  base64url(message) {
    return this._addCheck({
      kind: "base64url",
      ...errorUtil.errToObj(message)
    });
  }
  jwt(options) {
    return this._addCheck({ kind: "jwt", ...errorUtil.errToObj(options) });
  }
  ip(options) {
    return this._addCheck({ kind: "ip", ...errorUtil.errToObj(options) });
  }
  cidr(options) {
    return this._addCheck({ kind: "cidr", ...errorUtil.errToObj(options) });
  }
  datetime(options) {
    if (typeof options === "string") {
      return this._addCheck({
        kind: "datetime",
        precision: null,
        offset: false,
        local: false,
        message: options
      });
    }
    return this._addCheck({
      kind: "datetime",
      precision: typeof options?.precision === "undefined" ? null : options?.precision,
      offset: options?.offset ?? false,
      local: options?.local ?? false,
      ...errorUtil.errToObj(options?.message)
    });
  }
  date(message) {
    return this._addCheck({ kind: "date", message });
  }
  time(options) {
    if (typeof options === "string") {
      return this._addCheck({
        kind: "time",
        precision: null,
        message: options
      });
    }
    return this._addCheck({
      kind: "time",
      precision: typeof options?.precision === "undefined" ? null : options?.precision,
      ...errorUtil.errToObj(options?.message)
    });
  }
  duration(message) {
    return this._addCheck({ kind: "duration", ...errorUtil.errToObj(message) });
  }
  regex(regex, message) {
    return this._addCheck({
      kind: "regex",
      regex,
      ...errorUtil.errToObj(message)
    });
  }
  includes(value, options) {
    return this._addCheck({
      kind: "includes",
      value,
      position: options?.position,
      ...errorUtil.errToObj(options?.message)
    });
  }
  startsWith(value, message) {
    return this._addCheck({
      kind: "startsWith",
      value,
      ...errorUtil.errToObj(message)
    });
  }
  endsWith(value, message) {
    return this._addCheck({
      kind: "endsWith",
      value,
      ...errorUtil.errToObj(message)
    });
  }
  min(minLength, message) {
    return this._addCheck({
      kind: "min",
      value: minLength,
      ...errorUtil.errToObj(message)
    });
  }
  max(maxLength, message) {
    return this._addCheck({
      kind: "max",
      value: maxLength,
      ...errorUtil.errToObj(message)
    });
  }
  length(len, message) {
    return this._addCheck({
      kind: "length",
      value: len,
      ...errorUtil.errToObj(message)
    });
  }
  /**
   * Equivalent to `.min(1)`
   */
  nonempty(message) {
    return this.min(1, errorUtil.errToObj(message));
  }
  trim() {
    return new _ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    });
  }
  toLowerCase() {
    return new _ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    });
  }
  toUpperCase() {
    return new _ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "toUpperCase" }]
    });
  }
  get isDatetime() {
    return !!this._def.checks.find((ch) => ch.kind === "datetime");
  }
  get isDate() {
    return !!this._def.checks.find((ch) => ch.kind === "date");
  }
  get isTime() {
    return !!this._def.checks.find((ch) => ch.kind === "time");
  }
  get isDuration() {
    return !!this._def.checks.find((ch) => ch.kind === "duration");
  }
  get isEmail() {
    return !!this._def.checks.find((ch) => ch.kind === "email");
  }
  get isURL() {
    return !!this._def.checks.find((ch) => ch.kind === "url");
  }
  get isEmoji() {
    return !!this._def.checks.find((ch) => ch.kind === "emoji");
  }
  get isUUID() {
    return !!this._def.checks.find((ch) => ch.kind === "uuid");
  }
  get isNANOID() {
    return !!this._def.checks.find((ch) => ch.kind === "nanoid");
  }
  get isCUID() {
    return !!this._def.checks.find((ch) => ch.kind === "cuid");
  }
  get isCUID2() {
    return !!this._def.checks.find((ch) => ch.kind === "cuid2");
  }
  get isULID() {
    return !!this._def.checks.find((ch) => ch.kind === "ulid");
  }
  get isIP() {
    return !!this._def.checks.find((ch) => ch.kind === "ip");
  }
  get isCIDR() {
    return !!this._def.checks.find((ch) => ch.kind === "cidr");
  }
  get isBase64() {
    return !!this._def.checks.find((ch) => ch.kind === "base64");
  }
  get isBase64url() {
    return !!this._def.checks.find((ch) => ch.kind === "base64url");
  }
  get minLength() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min;
  }
  get maxLength() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max;
  }
};
ZodString.create = (params) => {
  return new ZodString({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodString,
    coerce: params?.coerce ?? false,
    ...processCreateParams(params)
  });
};
function floatSafeRemainder(val, step) {
  const valDecCount = (val.toString().split(".")[1] || "").length;
  const stepDecCount = (step.toString().split(".")[1] || "").length;
  const decCount = valDecCount > stepDecCount ? valDecCount : stepDecCount;
  const valInt = Number.parseInt(val.toFixed(decCount).replace(".", ""));
  const stepInt = Number.parseInt(step.toFixed(decCount).replace(".", ""));
  return valInt % stepInt / 10 ** decCount;
}
var ZodNumber = class _ZodNumber extends ZodType {
  constructor() {
    super(...arguments);
    this.min = this.gte;
    this.max = this.lte;
    this.step = this.multipleOf;
  }
  _parse(input) {
    if (this._def.coerce) {
      input.data = Number(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.number) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.number,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    let ctx = void 0;
    const status = new ParseStatus();
    for (const check of this._def.checks) {
      if (check.kind === "int") {
        if (!util.isInteger(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_type,
            expected: "integer",
            received: "float",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "min") {
        const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
        if (tooSmall) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            minimum: check.value,
            type: "number",
            inclusive: check.inclusive,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
        if (tooBig) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            maximum: check.value,
            type: "number",
            inclusive: check.inclusive,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "multipleOf") {
        if (floatSafeRemainder(input.data, check.value) !== 0) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_multiple_of,
            multipleOf: check.value,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "finite") {
        if (!Number.isFinite(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_finite,
            message: check.message
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return { status: status.value, value: input.data };
  }
  gte(value, message) {
    return this.setLimit("min", value, true, errorUtil.toString(message));
  }
  gt(value, message) {
    return this.setLimit("min", value, false, errorUtil.toString(message));
  }
  lte(value, message) {
    return this.setLimit("max", value, true, errorUtil.toString(message));
  }
  lt(value, message) {
    return this.setLimit("max", value, false, errorUtil.toString(message));
  }
  setLimit(kind, value, inclusive, message) {
    return new _ZodNumber({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind,
          value,
          inclusive,
          message: errorUtil.toString(message)
        }
      ]
    });
  }
  _addCheck(check) {
    return new _ZodNumber({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  int(message) {
    return this._addCheck({
      kind: "int",
      message: errorUtil.toString(message)
    });
  }
  positive(message) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  negative(message) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  nonpositive(message) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  nonnegative(message) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  multipleOf(value, message) {
    return this._addCheck({
      kind: "multipleOf",
      value,
      message: errorUtil.toString(message)
    });
  }
  finite(message) {
    return this._addCheck({
      kind: "finite",
      message: errorUtil.toString(message)
    });
  }
  safe(message) {
    return this._addCheck({
      kind: "min",
      inclusive: true,
      value: Number.MIN_SAFE_INTEGER,
      message: errorUtil.toString(message)
    })._addCheck({
      kind: "max",
      inclusive: true,
      value: Number.MAX_SAFE_INTEGER,
      message: errorUtil.toString(message)
    });
  }
  get minValue() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min;
  }
  get maxValue() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max;
  }
  get isInt() {
    return !!this._def.checks.find((ch) => ch.kind === "int" || ch.kind === "multipleOf" && util.isInteger(ch.value));
  }
  get isFinite() {
    let max = null;
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "finite" || ch.kind === "int" || ch.kind === "multipleOf") {
        return true;
      } else if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      } else if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return Number.isFinite(min) && Number.isFinite(max);
  }
};
ZodNumber.create = (params) => {
  return new ZodNumber({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodNumber,
    coerce: params?.coerce || false,
    ...processCreateParams(params)
  });
};
var ZodBigInt = class _ZodBigInt extends ZodType {
  constructor() {
    super(...arguments);
    this.min = this.gte;
    this.max = this.lte;
  }
  _parse(input) {
    if (this._def.coerce) {
      try {
        input.data = BigInt(input.data);
      } catch {
        return this._getInvalidInput(input);
      }
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.bigint) {
      return this._getInvalidInput(input);
    }
    let ctx = void 0;
    const status = new ParseStatus();
    for (const check of this._def.checks) {
      if (check.kind === "min") {
        const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
        if (tooSmall) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            type: "bigint",
            minimum: check.value,
            inclusive: check.inclusive,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
        if (tooBig) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            type: "bigint",
            maximum: check.value,
            inclusive: check.inclusive,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "multipleOf") {
        if (input.data % check.value !== BigInt(0)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_multiple_of,
            multipleOf: check.value,
            message: check.message
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return { status: status.value, value: input.data };
  }
  _getInvalidInput(input) {
    const ctx = this._getOrReturnCtx(input);
    addIssueToContext(ctx, {
      code: ZodIssueCode.invalid_type,
      expected: ZodParsedType.bigint,
      received: ctx.parsedType
    });
    return INVALID;
  }
  gte(value, message) {
    return this.setLimit("min", value, true, errorUtil.toString(message));
  }
  gt(value, message) {
    return this.setLimit("min", value, false, errorUtil.toString(message));
  }
  lte(value, message) {
    return this.setLimit("max", value, true, errorUtil.toString(message));
  }
  lt(value, message) {
    return this.setLimit("max", value, false, errorUtil.toString(message));
  }
  setLimit(kind, value, inclusive, message) {
    return new _ZodBigInt({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind,
          value,
          inclusive,
          message: errorUtil.toString(message)
        }
      ]
    });
  }
  _addCheck(check) {
    return new _ZodBigInt({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  positive(message) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  negative(message) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  nonpositive(message) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  nonnegative(message) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  multipleOf(value, message) {
    return this._addCheck({
      kind: "multipleOf",
      value,
      message: errorUtil.toString(message)
    });
  }
  get minValue() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min;
  }
  get maxValue() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max;
  }
};
ZodBigInt.create = (params) => {
  return new ZodBigInt({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodBigInt,
    coerce: params?.coerce ?? false,
    ...processCreateParams(params)
  });
};
var ZodBoolean = class extends ZodType {
  _parse(input) {
    if (this._def.coerce) {
      input.data = Boolean(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.boolean) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.boolean,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodBoolean.create = (params) => {
  return new ZodBoolean({
    typeName: ZodFirstPartyTypeKind.ZodBoolean,
    coerce: params?.coerce || false,
    ...processCreateParams(params)
  });
};
var ZodDate = class _ZodDate extends ZodType {
  _parse(input) {
    if (this._def.coerce) {
      input.data = new Date(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.date) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.date,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    if (Number.isNaN(input.data.getTime())) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_date
      });
      return INVALID;
    }
    const status = new ParseStatus();
    let ctx = void 0;
    for (const check of this._def.checks) {
      if (check.kind === "min") {
        if (input.data.getTime() < check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            message: check.message,
            inclusive: true,
            exact: false,
            minimum: check.value,
            type: "date"
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        if (input.data.getTime() > check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            message: check.message,
            inclusive: true,
            exact: false,
            maximum: check.value,
            type: "date"
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return {
      status: status.value,
      value: new Date(input.data.getTime())
    };
  }
  _addCheck(check) {
    return new _ZodDate({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  min(minDate, message) {
    return this._addCheck({
      kind: "min",
      value: minDate.getTime(),
      message: errorUtil.toString(message)
    });
  }
  max(maxDate, message) {
    return this._addCheck({
      kind: "max",
      value: maxDate.getTime(),
      message: errorUtil.toString(message)
    });
  }
  get minDate() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min != null ? new Date(min) : null;
  }
  get maxDate() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max != null ? new Date(max) : null;
  }
};
ZodDate.create = (params) => {
  return new ZodDate({
    checks: [],
    coerce: params?.coerce || false,
    typeName: ZodFirstPartyTypeKind.ZodDate,
    ...processCreateParams(params)
  });
};
var ZodSymbol = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.symbol) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.symbol,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodSymbol.create = (params) => {
  return new ZodSymbol({
    typeName: ZodFirstPartyTypeKind.ZodSymbol,
    ...processCreateParams(params)
  });
};
var ZodUndefined = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.undefined) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.undefined,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodUndefined.create = (params) => {
  return new ZodUndefined({
    typeName: ZodFirstPartyTypeKind.ZodUndefined,
    ...processCreateParams(params)
  });
};
var ZodNull = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.null) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.null,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodNull.create = (params) => {
  return new ZodNull({
    typeName: ZodFirstPartyTypeKind.ZodNull,
    ...processCreateParams(params)
  });
};
var ZodAny = class extends ZodType {
  constructor() {
    super(...arguments);
    this._any = true;
  }
  _parse(input) {
    return OK(input.data);
  }
};
ZodAny.create = (params) => {
  return new ZodAny({
    typeName: ZodFirstPartyTypeKind.ZodAny,
    ...processCreateParams(params)
  });
};
var ZodUnknown = class extends ZodType {
  constructor() {
    super(...arguments);
    this._unknown = true;
  }
  _parse(input) {
    return OK(input.data);
  }
};
ZodUnknown.create = (params) => {
  return new ZodUnknown({
    typeName: ZodFirstPartyTypeKind.ZodUnknown,
    ...processCreateParams(params)
  });
};
var ZodNever = class extends ZodType {
  _parse(input) {
    const ctx = this._getOrReturnCtx(input);
    addIssueToContext(ctx, {
      code: ZodIssueCode.invalid_type,
      expected: ZodParsedType.never,
      received: ctx.parsedType
    });
    return INVALID;
  }
};
ZodNever.create = (params) => {
  return new ZodNever({
    typeName: ZodFirstPartyTypeKind.ZodNever,
    ...processCreateParams(params)
  });
};
var ZodVoid = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.undefined) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.void,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodVoid.create = (params) => {
  return new ZodVoid({
    typeName: ZodFirstPartyTypeKind.ZodVoid,
    ...processCreateParams(params)
  });
};
var ZodArray = class _ZodArray extends ZodType {
  _parse(input) {
    const { ctx, status } = this._processInputParams(input);
    const def = this._def;
    if (ctx.parsedType !== ZodParsedType.array) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.array,
        received: ctx.parsedType
      });
      return INVALID;
    }
    if (def.exactLength !== null) {
      const tooBig = ctx.data.length > def.exactLength.value;
      const tooSmall = ctx.data.length < def.exactLength.value;
      if (tooBig || tooSmall) {
        addIssueToContext(ctx, {
          code: tooBig ? ZodIssueCode.too_big : ZodIssueCode.too_small,
          minimum: tooSmall ? def.exactLength.value : void 0,
          maximum: tooBig ? def.exactLength.value : void 0,
          type: "array",
          inclusive: true,
          exact: true,
          message: def.exactLength.message
        });
        status.dirty();
      }
    }
    if (def.minLength !== null) {
      if (ctx.data.length < def.minLength.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_small,
          minimum: def.minLength.value,
          type: "array",
          inclusive: true,
          exact: false,
          message: def.minLength.message
        });
        status.dirty();
      }
    }
    if (def.maxLength !== null) {
      if (ctx.data.length > def.maxLength.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_big,
          maximum: def.maxLength.value,
          type: "array",
          inclusive: true,
          exact: false,
          message: def.maxLength.message
        });
        status.dirty();
      }
    }
    if (ctx.common.async) {
      return Promise.all([...ctx.data].map((item, i) => {
        return def.type._parseAsync(new ParseInputLazyPath(ctx, item, ctx.path, i));
      })).then((result2) => {
        return ParseStatus.mergeArray(status, result2);
      });
    }
    const result = [...ctx.data].map((item, i) => {
      return def.type._parseSync(new ParseInputLazyPath(ctx, item, ctx.path, i));
    });
    return ParseStatus.mergeArray(status, result);
  }
  get element() {
    return this._def.type;
  }
  min(minLength, message) {
    return new _ZodArray({
      ...this._def,
      minLength: { value: minLength, message: errorUtil.toString(message) }
    });
  }
  max(maxLength, message) {
    return new _ZodArray({
      ...this._def,
      maxLength: { value: maxLength, message: errorUtil.toString(message) }
    });
  }
  length(len, message) {
    return new _ZodArray({
      ...this._def,
      exactLength: { value: len, message: errorUtil.toString(message) }
    });
  }
  nonempty(message) {
    return this.min(1, message);
  }
};
ZodArray.create = (schema, params) => {
  return new ZodArray({
    type: schema,
    minLength: null,
    maxLength: null,
    exactLength: null,
    typeName: ZodFirstPartyTypeKind.ZodArray,
    ...processCreateParams(params)
  });
};
function deepPartialify(schema) {
  if (schema instanceof ZodObject) {
    const newShape = {};
    for (const key in schema.shape) {
      const fieldSchema = schema.shape[key];
      newShape[key] = ZodOptional.create(deepPartialify(fieldSchema));
    }
    return new ZodObject({
      ...schema._def,
      shape: () => newShape
    });
  } else if (schema instanceof ZodArray) {
    return new ZodArray({
      ...schema._def,
      type: deepPartialify(schema.element)
    });
  } else if (schema instanceof ZodOptional) {
    return ZodOptional.create(deepPartialify(schema.unwrap()));
  } else if (schema instanceof ZodNullable) {
    return ZodNullable.create(deepPartialify(schema.unwrap()));
  } else if (schema instanceof ZodTuple) {
    return ZodTuple.create(schema.items.map((item) => deepPartialify(item)));
  } else {
    return schema;
  }
}
var ZodObject = class _ZodObject extends ZodType {
  constructor() {
    super(...arguments);
    this._cached = null;
    this.nonstrict = this.passthrough;
    this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    const shape = this._def.shape();
    const keys = util.objectKeys(shape);
    this._cached = { shape, keys };
    return this._cached;
  }
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.object) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    const { status, ctx } = this._processInputParams(input);
    const { shape, keys: shapeKeys } = this._getCached();
    const extraKeys = [];
    if (!(this._def.catchall instanceof ZodNever && this._def.unknownKeys === "strip")) {
      for (const key in ctx.data) {
        if (!shapeKeys.includes(key)) {
          extraKeys.push(key);
        }
      }
    }
    const pairs = [];
    for (const key of shapeKeys) {
      const keyValidator = shape[key];
      const value = ctx.data[key];
      pairs.push({
        key: { status: "valid", value: key },
        value: keyValidator._parse(new ParseInputLazyPath(ctx, value, ctx.path, key)),
        alwaysSet: key in ctx.data
      });
    }
    if (this._def.catchall instanceof ZodNever) {
      const unknownKeys = this._def.unknownKeys;
      if (unknownKeys === "passthrough") {
        for (const key of extraKeys) {
          pairs.push({
            key: { status: "valid", value: key },
            value: { status: "valid", value: ctx.data[key] }
          });
        }
      } else if (unknownKeys === "strict") {
        if (extraKeys.length > 0) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.unrecognized_keys,
            keys: extraKeys
          });
          status.dirty();
        }
      } else if (unknownKeys === "strip") {
      } else {
        throw new Error(`Internal ZodObject error: invalid unknownKeys value.`);
      }
    } else {
      const catchall = this._def.catchall;
      for (const key of extraKeys) {
        const value = ctx.data[key];
        pairs.push({
          key: { status: "valid", value: key },
          value: catchall._parse(
            new ParseInputLazyPath(ctx, value, ctx.path, key)
            //, ctx.child(key), value, getParsedType(value)
          ),
          alwaysSet: key in ctx.data
        });
      }
    }
    if (ctx.common.async) {
      return Promise.resolve().then(async () => {
        const syncPairs = [];
        for (const pair of pairs) {
          const key = await pair.key;
          const value = await pair.value;
          syncPairs.push({
            key,
            value,
            alwaysSet: pair.alwaysSet
          });
        }
        return syncPairs;
      }).then((syncPairs) => {
        return ParseStatus.mergeObjectSync(status, syncPairs);
      });
    } else {
      return ParseStatus.mergeObjectSync(status, pairs);
    }
  }
  get shape() {
    return this._def.shape();
  }
  strict(message) {
    errorUtil.errToObj;
    return new _ZodObject({
      ...this._def,
      unknownKeys: "strict",
      ...message !== void 0 ? {
        errorMap: (issue, ctx) => {
          const defaultError = this._def.errorMap?.(issue, ctx).message ?? ctx.defaultError;
          if (issue.code === "unrecognized_keys")
            return {
              message: errorUtil.errToObj(message).message ?? defaultError
            };
          return {
            message: defaultError
          };
        }
      } : {}
    });
  }
  strip() {
    return new _ZodObject({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new _ZodObject({
      ...this._def,
      unknownKeys: "passthrough"
    });
  }
  // const AugmentFactory =
  //   <Def extends ZodObjectDef>(def: Def) =>
  //   <Augmentation extends ZodRawShape>(
  //     augmentation: Augmentation
  //   ): ZodObject<
  //     extendShape<ReturnType<Def["shape"]>, Augmentation>,
  //     Def["unknownKeys"],
  //     Def["catchall"]
  //   > => {
  //     return new ZodObject({
  //       ...def,
  //       shape: () => ({
  //         ...def.shape(),
  //         ...augmentation,
  //       }),
  //     }) as any;
  //   };
  extend(augmentation) {
    return new _ZodObject({
      ...this._def,
      shape: () => ({
        ...this._def.shape(),
        ...augmentation
      })
    });
  }
  /**
   * Prior to zod@1.0.12 there was a bug in the
   * inferred type of merged objects. Please
   * upgrade if you are experiencing issues.
   */
  merge(merging) {
    const merged = new _ZodObject({
      unknownKeys: merging._def.unknownKeys,
      catchall: merging._def.catchall,
      shape: () => ({
        ...this._def.shape(),
        ...merging._def.shape()
      }),
      typeName: ZodFirstPartyTypeKind.ZodObject
    });
    return merged;
  }
  // merge<
  //   Incoming extends AnyZodObject,
  //   Augmentation extends Incoming["shape"],
  //   NewOutput extends {
  //     [k in keyof Augmentation | keyof Output]: k extends keyof Augmentation
  //       ? Augmentation[k]["_output"]
  //       : k extends keyof Output
  //       ? Output[k]
  //       : never;
  //   },
  //   NewInput extends {
  //     [k in keyof Augmentation | keyof Input]: k extends keyof Augmentation
  //       ? Augmentation[k]["_input"]
  //       : k extends keyof Input
  //       ? Input[k]
  //       : never;
  //   }
  // >(
  //   merging: Incoming
  // ): ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"],
  //   NewOutput,
  //   NewInput
  // > {
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  setKey(key, schema) {
    return this.augment({ [key]: schema });
  }
  // merge<Incoming extends AnyZodObject>(
  //   merging: Incoming
  // ): //ZodObject<T & Incoming["_shape"], UnknownKeys, Catchall> = (merging) => {
  // ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"]
  // > {
  //   // const mergedShape = objectUtil.mergeShapes(
  //   //   this._def.shape(),
  //   //   merging._def.shape()
  //   // );
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  catchall(index) {
    return new _ZodObject({
      ...this._def,
      catchall: index
    });
  }
  pick(mask) {
    const shape = {};
    for (const key of util.objectKeys(mask)) {
      if (mask[key] && this.shape[key]) {
        shape[key] = this.shape[key];
      }
    }
    return new _ZodObject({
      ...this._def,
      shape: () => shape
    });
  }
  omit(mask) {
    const shape = {};
    for (const key of util.objectKeys(this.shape)) {
      if (!mask[key]) {
        shape[key] = this.shape[key];
      }
    }
    return new _ZodObject({
      ...this._def,
      shape: () => shape
    });
  }
  /**
   * @deprecated
   */
  deepPartial() {
    return deepPartialify(this);
  }
  partial(mask) {
    const newShape = {};
    for (const key of util.objectKeys(this.shape)) {
      const fieldSchema = this.shape[key];
      if (mask && !mask[key]) {
        newShape[key] = fieldSchema;
      } else {
        newShape[key] = fieldSchema.optional();
      }
    }
    return new _ZodObject({
      ...this._def,
      shape: () => newShape
    });
  }
  required(mask) {
    const newShape = {};
    for (const key of util.objectKeys(this.shape)) {
      if (mask && !mask[key]) {
        newShape[key] = this.shape[key];
      } else {
        const fieldSchema = this.shape[key];
        let newField = fieldSchema;
        while (newField instanceof ZodOptional) {
          newField = newField._def.innerType;
        }
        newShape[key] = newField;
      }
    }
    return new _ZodObject({
      ...this._def,
      shape: () => newShape
    });
  }
  keyof() {
    return createZodEnum(util.objectKeys(this.shape));
  }
};
ZodObject.create = (shape, params) => {
  return new ZodObject({
    shape: () => shape,
    unknownKeys: "strip",
    catchall: ZodNever.create(),
    typeName: ZodFirstPartyTypeKind.ZodObject,
    ...processCreateParams(params)
  });
};
ZodObject.strictCreate = (shape, params) => {
  return new ZodObject({
    shape: () => shape,
    unknownKeys: "strict",
    catchall: ZodNever.create(),
    typeName: ZodFirstPartyTypeKind.ZodObject,
    ...processCreateParams(params)
  });
};
ZodObject.lazycreate = (shape, params) => {
  return new ZodObject({
    shape,
    unknownKeys: "strip",
    catchall: ZodNever.create(),
    typeName: ZodFirstPartyTypeKind.ZodObject,
    ...processCreateParams(params)
  });
};
var ZodUnion = class extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const options = this._def.options;
    function handleResults(results) {
      for (const result of results) {
        if (result.result.status === "valid") {
          return result.result;
        }
      }
      for (const result of results) {
        if (result.result.status === "dirty") {
          ctx.common.issues.push(...result.ctx.common.issues);
          return result.result;
        }
      }
      const unionErrors = results.map((result) => new ZodError(result.ctx.common.issues));
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union,
        unionErrors
      });
      return INVALID;
    }
    if (ctx.common.async) {
      return Promise.all(options.map(async (option) => {
        const childCtx = {
          ...ctx,
          common: {
            ...ctx.common,
            issues: []
          },
          parent: null
        };
        return {
          result: await option._parseAsync({
            data: ctx.data,
            path: ctx.path,
            parent: childCtx
          }),
          ctx: childCtx
        };
      })).then(handleResults);
    } else {
      let dirty = void 0;
      const issues = [];
      for (const option of options) {
        const childCtx = {
          ...ctx,
          common: {
            ...ctx.common,
            issues: []
          },
          parent: null
        };
        const result = option._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: childCtx
        });
        if (result.status === "valid") {
          return result;
        } else if (result.status === "dirty" && !dirty) {
          dirty = { result, ctx: childCtx };
        }
        if (childCtx.common.issues.length) {
          issues.push(childCtx.common.issues);
        }
      }
      if (dirty) {
        ctx.common.issues.push(...dirty.ctx.common.issues);
        return dirty.result;
      }
      const unionErrors = issues.map((issues2) => new ZodError(issues2));
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union,
        unionErrors
      });
      return INVALID;
    }
  }
  get options() {
    return this._def.options;
  }
};
ZodUnion.create = (types, params) => {
  return new ZodUnion({
    options: types,
    typeName: ZodFirstPartyTypeKind.ZodUnion,
    ...processCreateParams(params)
  });
};
var getDiscriminator = (type) => {
  if (type instanceof ZodLazy) {
    return getDiscriminator(type.schema);
  } else if (type instanceof ZodEffects) {
    return getDiscriminator(type.innerType());
  } else if (type instanceof ZodLiteral) {
    return [type.value];
  } else if (type instanceof ZodEnum) {
    return type.options;
  } else if (type instanceof ZodNativeEnum) {
    return util.objectValues(type.enum);
  } else if (type instanceof ZodDefault) {
    return getDiscriminator(type._def.innerType);
  } else if (type instanceof ZodUndefined) {
    return [void 0];
  } else if (type instanceof ZodNull) {
    return [null];
  } else if (type instanceof ZodOptional) {
    return [void 0, ...getDiscriminator(type.unwrap())];
  } else if (type instanceof ZodNullable) {
    return [null, ...getDiscriminator(type.unwrap())];
  } else if (type instanceof ZodBranded) {
    return getDiscriminator(type.unwrap());
  } else if (type instanceof ZodReadonly) {
    return getDiscriminator(type.unwrap());
  } else if (type instanceof ZodCatch) {
    return getDiscriminator(type._def.innerType);
  } else {
    return [];
  }
};
var ZodDiscriminatedUnion = class _ZodDiscriminatedUnion extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.object) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const discriminator = this.discriminator;
    const discriminatorValue = ctx.data[discriminator];
    const option = this.optionsMap.get(discriminatorValue);
    if (!option) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union_discriminator,
        options: Array.from(this.optionsMap.keys()),
        path: [discriminator]
      });
      return INVALID;
    }
    if (ctx.common.async) {
      return option._parseAsync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      });
    } else {
      return option._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      });
    }
  }
  get discriminator() {
    return this._def.discriminator;
  }
  get options() {
    return this._def.options;
  }
  get optionsMap() {
    return this._def.optionsMap;
  }
  /**
   * The constructor of the discriminated union schema. Its behaviour is very similar to that of the normal z.union() constructor.
   * However, it only allows a union of objects, all of which need to share a discriminator property. This property must
   * have a different value for each object in the union.
   * @param discriminator the name of the discriminator property
   * @param types an array of object schemas
   * @param params
   */
  static create(discriminator, options, params) {
    const optionsMap = /* @__PURE__ */ new Map();
    for (const type of options) {
      const discriminatorValues = getDiscriminator(type.shape[discriminator]);
      if (!discriminatorValues.length) {
        throw new Error(`A discriminator value for key \`${discriminator}\` could not be extracted from all schema options`);
      }
      for (const value of discriminatorValues) {
        if (optionsMap.has(value)) {
          throw new Error(`Discriminator property ${String(discriminator)} has duplicate value ${String(value)}`);
        }
        optionsMap.set(value, type);
      }
    }
    return new _ZodDiscriminatedUnion({
      typeName: ZodFirstPartyTypeKind.ZodDiscriminatedUnion,
      discriminator,
      options,
      optionsMap,
      ...processCreateParams(params)
    });
  }
};
function mergeValues(a, b) {
  const aType = getParsedType(a);
  const bType = getParsedType(b);
  if (a === b) {
    return { valid: true, data: a };
  } else if (aType === ZodParsedType.object && bType === ZodParsedType.object) {
    const bKeys = util.objectKeys(b);
    const sharedKeys = util.objectKeys(a).filter((key) => bKeys.indexOf(key) !== -1);
    const newObj = { ...a, ...b };
    for (const key of sharedKeys) {
      const sharedValue = mergeValues(a[key], b[key]);
      if (!sharedValue.valid) {
        return { valid: false };
      }
      newObj[key] = sharedValue.data;
    }
    return { valid: true, data: newObj };
  } else if (aType === ZodParsedType.array && bType === ZodParsedType.array) {
    if (a.length !== b.length) {
      return { valid: false };
    }
    const newArray = [];
    for (let index = 0; index < a.length; index++) {
      const itemA = a[index];
      const itemB = b[index];
      const sharedValue = mergeValues(itemA, itemB);
      if (!sharedValue.valid) {
        return { valid: false };
      }
      newArray.push(sharedValue.data);
    }
    return { valid: true, data: newArray };
  } else if (aType === ZodParsedType.date && bType === ZodParsedType.date && +a === +b) {
    return { valid: true, data: a };
  } else {
    return { valid: false };
  }
}
var ZodIntersection = class extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    const handleParsed = (parsedLeft, parsedRight) => {
      if (isAborted(parsedLeft) || isAborted(parsedRight)) {
        return INVALID;
      }
      const merged = mergeValues(parsedLeft.value, parsedRight.value);
      if (!merged.valid) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_intersection_types
        });
        return INVALID;
      }
      if (isDirty(parsedLeft) || isDirty(parsedRight)) {
        status.dirty();
      }
      return { status: status.value, value: merged.data };
    };
    if (ctx.common.async) {
      return Promise.all([
        this._def.left._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        }),
        this._def.right._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        })
      ]).then(([left, right]) => handleParsed(left, right));
    } else {
      return handleParsed(this._def.left._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      }), this._def.right._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      }));
    }
  }
};
ZodIntersection.create = (left, right, params) => {
  return new ZodIntersection({
    left,
    right,
    typeName: ZodFirstPartyTypeKind.ZodIntersection,
    ...processCreateParams(params)
  });
};
var ZodTuple = class _ZodTuple extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.array) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.array,
        received: ctx.parsedType
      });
      return INVALID;
    }
    if (ctx.data.length < this._def.items.length) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.too_small,
        minimum: this._def.items.length,
        inclusive: true,
        exact: false,
        type: "array"
      });
      return INVALID;
    }
    const rest = this._def.rest;
    if (!rest && ctx.data.length > this._def.items.length) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.too_big,
        maximum: this._def.items.length,
        inclusive: true,
        exact: false,
        type: "array"
      });
      status.dirty();
    }
    const items = [...ctx.data].map((item, itemIndex) => {
      const schema = this._def.items[itemIndex] || this._def.rest;
      if (!schema)
        return null;
      return schema._parse(new ParseInputLazyPath(ctx, item, ctx.path, itemIndex));
    }).filter((x) => !!x);
    if (ctx.common.async) {
      return Promise.all(items).then((results) => {
        return ParseStatus.mergeArray(status, results);
      });
    } else {
      return ParseStatus.mergeArray(status, items);
    }
  }
  get items() {
    return this._def.items;
  }
  rest(rest) {
    return new _ZodTuple({
      ...this._def,
      rest
    });
  }
};
ZodTuple.create = (schemas, params) => {
  if (!Array.isArray(schemas)) {
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  }
  return new ZodTuple({
    items: schemas,
    typeName: ZodFirstPartyTypeKind.ZodTuple,
    rest: null,
    ...processCreateParams(params)
  });
};
var ZodRecord = class _ZodRecord extends ZodType {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.object) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const pairs = [];
    const keyType = this._def.keyType;
    const valueType = this._def.valueType;
    for (const key in ctx.data) {
      pairs.push({
        key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, key)),
        value: valueType._parse(new ParseInputLazyPath(ctx, ctx.data[key], ctx.path, key)),
        alwaysSet: key in ctx.data
      });
    }
    if (ctx.common.async) {
      return ParseStatus.mergeObjectAsync(status, pairs);
    } else {
      return ParseStatus.mergeObjectSync(status, pairs);
    }
  }
  get element() {
    return this._def.valueType;
  }
  static create(first, second, third) {
    if (second instanceof ZodType) {
      return new _ZodRecord({
        keyType: first,
        valueType: second,
        typeName: ZodFirstPartyTypeKind.ZodRecord,
        ...processCreateParams(third)
      });
    }
    return new _ZodRecord({
      keyType: ZodString.create(),
      valueType: first,
      typeName: ZodFirstPartyTypeKind.ZodRecord,
      ...processCreateParams(second)
    });
  }
};
var ZodMap = class extends ZodType {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.map) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.map,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const keyType = this._def.keyType;
    const valueType = this._def.valueType;
    const pairs = [...ctx.data.entries()].map(([key, value], index) => {
      return {
        key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, [index, "key"])),
        value: valueType._parse(new ParseInputLazyPath(ctx, value, ctx.path, [index, "value"]))
      };
    });
    if (ctx.common.async) {
      const finalMap = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const pair of pairs) {
          const key = await pair.key;
          const value = await pair.value;
          if (key.status === "aborted" || value.status === "aborted") {
            return INVALID;
          }
          if (key.status === "dirty" || value.status === "dirty") {
            status.dirty();
          }
          finalMap.set(key.value, value.value);
        }
        return { status: status.value, value: finalMap };
      });
    } else {
      const finalMap = /* @__PURE__ */ new Map();
      for (const pair of pairs) {
        const key = pair.key;
        const value = pair.value;
        if (key.status === "aborted" || value.status === "aborted") {
          return INVALID;
        }
        if (key.status === "dirty" || value.status === "dirty") {
          status.dirty();
        }
        finalMap.set(key.value, value.value);
      }
      return { status: status.value, value: finalMap };
    }
  }
};
ZodMap.create = (keyType, valueType, params) => {
  return new ZodMap({
    valueType,
    keyType,
    typeName: ZodFirstPartyTypeKind.ZodMap,
    ...processCreateParams(params)
  });
};
var ZodSet = class _ZodSet extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.set) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.set,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const def = this._def;
    if (def.minSize !== null) {
      if (ctx.data.size < def.minSize.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_small,
          minimum: def.minSize.value,
          type: "set",
          inclusive: true,
          exact: false,
          message: def.minSize.message
        });
        status.dirty();
      }
    }
    if (def.maxSize !== null) {
      if (ctx.data.size > def.maxSize.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_big,
          maximum: def.maxSize.value,
          type: "set",
          inclusive: true,
          exact: false,
          message: def.maxSize.message
        });
        status.dirty();
      }
    }
    const valueType = this._def.valueType;
    function finalizeSet(elements2) {
      const parsedSet = /* @__PURE__ */ new Set();
      for (const element of elements2) {
        if (element.status === "aborted")
          return INVALID;
        if (element.status === "dirty")
          status.dirty();
        parsedSet.add(element.value);
      }
      return { status: status.value, value: parsedSet };
    }
    const elements = [...ctx.data.values()].map((item, i) => valueType._parse(new ParseInputLazyPath(ctx, item, ctx.path, i)));
    if (ctx.common.async) {
      return Promise.all(elements).then((elements2) => finalizeSet(elements2));
    } else {
      return finalizeSet(elements);
    }
  }
  min(minSize, message) {
    return new _ZodSet({
      ...this._def,
      minSize: { value: minSize, message: errorUtil.toString(message) }
    });
  }
  max(maxSize, message) {
    return new _ZodSet({
      ...this._def,
      maxSize: { value: maxSize, message: errorUtil.toString(message) }
    });
  }
  size(size, message) {
    return this.min(size, message).max(size, message);
  }
  nonempty(message) {
    return this.min(1, message);
  }
};
ZodSet.create = (valueType, params) => {
  return new ZodSet({
    valueType,
    minSize: null,
    maxSize: null,
    typeName: ZodFirstPartyTypeKind.ZodSet,
    ...processCreateParams(params)
  });
};
var ZodFunction = class _ZodFunction extends ZodType {
  constructor() {
    super(...arguments);
    this.validate = this.implement;
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.function) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.function,
        received: ctx.parsedType
      });
      return INVALID;
    }
    function makeArgsIssue(args, error) {
      return makeIssue({
        data: args,
        path: ctx.path,
        errorMaps: [ctx.common.contextualErrorMap, ctx.schemaErrorMap, getErrorMap(), en_default].filter((x) => !!x),
        issueData: {
          code: ZodIssueCode.invalid_arguments,
          argumentsError: error
        }
      });
    }
    function makeReturnsIssue(returns, error) {
      return makeIssue({
        data: returns,
        path: ctx.path,
        errorMaps: [ctx.common.contextualErrorMap, ctx.schemaErrorMap, getErrorMap(), en_default].filter((x) => !!x),
        issueData: {
          code: ZodIssueCode.invalid_return_type,
          returnTypeError: error
        }
      });
    }
    const params = { errorMap: ctx.common.contextualErrorMap };
    const fn = ctx.data;
    if (this._def.returns instanceof ZodPromise) {
      const me = this;
      return OK(async function(...args) {
        const error = new ZodError([]);
        const parsedArgs = await me._def.args.parseAsync(args, params).catch((e) => {
          error.addIssue(makeArgsIssue(args, e));
          throw error;
        });
        const result = await Reflect.apply(fn, this, parsedArgs);
        const parsedReturns = await me._def.returns._def.type.parseAsync(result, params).catch((e) => {
          error.addIssue(makeReturnsIssue(result, e));
          throw error;
        });
        return parsedReturns;
      });
    } else {
      const me = this;
      return OK(function(...args) {
        const parsedArgs = me._def.args.safeParse(args, params);
        if (!parsedArgs.success) {
          throw new ZodError([makeArgsIssue(args, parsedArgs.error)]);
        }
        const result = Reflect.apply(fn, this, parsedArgs.data);
        const parsedReturns = me._def.returns.safeParse(result, params);
        if (!parsedReturns.success) {
          throw new ZodError([makeReturnsIssue(result, parsedReturns.error)]);
        }
        return parsedReturns.data;
      });
    }
  }
  parameters() {
    return this._def.args;
  }
  returnType() {
    return this._def.returns;
  }
  args(...items) {
    return new _ZodFunction({
      ...this._def,
      args: ZodTuple.create(items).rest(ZodUnknown.create())
    });
  }
  returns(returnType) {
    return new _ZodFunction({
      ...this._def,
      returns: returnType
    });
  }
  implement(func) {
    const validatedFunc = this.parse(func);
    return validatedFunc;
  }
  strictImplement(func) {
    const validatedFunc = this.parse(func);
    return validatedFunc;
  }
  static create(args, returns, params) {
    return new _ZodFunction({
      args: args ? args : ZodTuple.create([]).rest(ZodUnknown.create()),
      returns: returns || ZodUnknown.create(),
      typeName: ZodFirstPartyTypeKind.ZodFunction,
      ...processCreateParams(params)
    });
  }
};
var ZodLazy = class extends ZodType {
  get schema() {
    return this._def.getter();
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const lazySchema = this._def.getter();
    return lazySchema._parse({ data: ctx.data, path: ctx.path, parent: ctx });
  }
};
ZodLazy.create = (getter, params) => {
  return new ZodLazy({
    getter,
    typeName: ZodFirstPartyTypeKind.ZodLazy,
    ...processCreateParams(params)
  });
};
var ZodLiteral = class extends ZodType {
  _parse(input) {
    if (input.data !== this._def.value) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_literal,
        expected: this._def.value
      });
      return INVALID;
    }
    return { status: "valid", value: input.data };
  }
  get value() {
    return this._def.value;
  }
};
ZodLiteral.create = (value, params) => {
  return new ZodLiteral({
    value,
    typeName: ZodFirstPartyTypeKind.ZodLiteral,
    ...processCreateParams(params)
  });
};
function createZodEnum(values, params) {
  return new ZodEnum({
    values,
    typeName: ZodFirstPartyTypeKind.ZodEnum,
    ...processCreateParams(params)
  });
}
var ZodEnum = class _ZodEnum extends ZodType {
  _parse(input) {
    if (typeof input.data !== "string") {
      const ctx = this._getOrReturnCtx(input);
      const expectedValues = this._def.values;
      addIssueToContext(ctx, {
        expected: util.joinValues(expectedValues),
        received: ctx.parsedType,
        code: ZodIssueCode.invalid_type
      });
      return INVALID;
    }
    if (!this._cache) {
      this._cache = new Set(this._def.values);
    }
    if (!this._cache.has(input.data)) {
      const ctx = this._getOrReturnCtx(input);
      const expectedValues = this._def.values;
      addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_enum_value,
        options: expectedValues
      });
      return INVALID;
    }
    return OK(input.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    const enumValues = {};
    for (const val of this._def.values) {
      enumValues[val] = val;
    }
    return enumValues;
  }
  get Values() {
    const enumValues = {};
    for (const val of this._def.values) {
      enumValues[val] = val;
    }
    return enumValues;
  }
  get Enum() {
    const enumValues = {};
    for (const val of this._def.values) {
      enumValues[val] = val;
    }
    return enumValues;
  }
  extract(values, newDef = this._def) {
    return _ZodEnum.create(values, {
      ...this._def,
      ...newDef
    });
  }
  exclude(values, newDef = this._def) {
    return _ZodEnum.create(this.options.filter((opt) => !values.includes(opt)), {
      ...this._def,
      ...newDef
    });
  }
};
ZodEnum.create = createZodEnum;
var ZodNativeEnum = class extends ZodType {
  _parse(input) {
    const nativeEnumValues = util.getValidEnumValues(this._def.values);
    const ctx = this._getOrReturnCtx(input);
    if (ctx.parsedType !== ZodParsedType.string && ctx.parsedType !== ZodParsedType.number) {
      const expectedValues = util.objectValues(nativeEnumValues);
      addIssueToContext(ctx, {
        expected: util.joinValues(expectedValues),
        received: ctx.parsedType,
        code: ZodIssueCode.invalid_type
      });
      return INVALID;
    }
    if (!this._cache) {
      this._cache = new Set(util.getValidEnumValues(this._def.values));
    }
    if (!this._cache.has(input.data)) {
      const expectedValues = util.objectValues(nativeEnumValues);
      addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_enum_value,
        options: expectedValues
      });
      return INVALID;
    }
    return OK(input.data);
  }
  get enum() {
    return this._def.values;
  }
};
ZodNativeEnum.create = (values, params) => {
  return new ZodNativeEnum({
    values,
    typeName: ZodFirstPartyTypeKind.ZodNativeEnum,
    ...processCreateParams(params)
  });
};
var ZodPromise = class extends ZodType {
  unwrap() {
    return this._def.type;
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.promise && ctx.common.async === false) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.promise,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const promisified = ctx.parsedType === ZodParsedType.promise ? ctx.data : Promise.resolve(ctx.data);
    return OK(promisified.then((data) => {
      return this._def.type.parseAsync(data, {
        path: ctx.path,
        errorMap: ctx.common.contextualErrorMap
      });
    }));
  }
};
ZodPromise.create = (schema, params) => {
  return new ZodPromise({
    type: schema,
    typeName: ZodFirstPartyTypeKind.ZodPromise,
    ...processCreateParams(params)
  });
};
var ZodEffects = class extends ZodType {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === ZodFirstPartyTypeKind.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    const effect = this._def.effect || null;
    const checkCtx = {
      addIssue: (arg) => {
        addIssueToContext(ctx, arg);
        if (arg.fatal) {
          status.abort();
        } else {
          status.dirty();
        }
      },
      get path() {
        return ctx.path;
      }
    };
    checkCtx.addIssue = checkCtx.addIssue.bind(checkCtx);
    if (effect.type === "preprocess") {
      const processed = effect.transform(ctx.data, checkCtx);
      if (ctx.common.async) {
        return Promise.resolve(processed).then(async (processed2) => {
          if (status.value === "aborted")
            return INVALID;
          const result = await this._def.schema._parseAsync({
            data: processed2,
            path: ctx.path,
            parent: ctx
          });
          if (result.status === "aborted")
            return INVALID;
          if (result.status === "dirty")
            return DIRTY(result.value);
          if (status.value === "dirty")
            return DIRTY(result.value);
          return result;
        });
      } else {
        if (status.value === "aborted")
          return INVALID;
        const result = this._def.schema._parseSync({
          data: processed,
          path: ctx.path,
          parent: ctx
        });
        if (result.status === "aborted")
          return INVALID;
        if (result.status === "dirty")
          return DIRTY(result.value);
        if (status.value === "dirty")
          return DIRTY(result.value);
        return result;
      }
    }
    if (effect.type === "refinement") {
      const executeRefinement = (acc) => {
        const result = effect.refinement(acc, checkCtx);
        if (ctx.common.async) {
          return Promise.resolve(result);
        }
        if (result instanceof Promise) {
          throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        }
        return acc;
      };
      if (ctx.common.async === false) {
        const inner = this._def.schema._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (inner.status === "aborted")
          return INVALID;
        if (inner.status === "dirty")
          status.dirty();
        executeRefinement(inner.value);
        return { status: status.value, value: inner.value };
      } else {
        return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((inner) => {
          if (inner.status === "aborted")
            return INVALID;
          if (inner.status === "dirty")
            status.dirty();
          return executeRefinement(inner.value).then(() => {
            return { status: status.value, value: inner.value };
          });
        });
      }
    }
    if (effect.type === "transform") {
      if (ctx.common.async === false) {
        const base = this._def.schema._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (!isValid(base))
          return INVALID;
        const result = effect.transform(base.value, checkCtx);
        if (result instanceof Promise) {
          throw new Error(`Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.`);
        }
        return { status: status.value, value: result };
      } else {
        return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((base) => {
          if (!isValid(base))
            return INVALID;
          return Promise.resolve(effect.transform(base.value, checkCtx)).then((result) => ({
            status: status.value,
            value: result
          }));
        });
      }
    }
    util.assertNever(effect);
  }
};
ZodEffects.create = (schema, effect, params) => {
  return new ZodEffects({
    schema,
    typeName: ZodFirstPartyTypeKind.ZodEffects,
    effect,
    ...processCreateParams(params)
  });
};
ZodEffects.createWithPreprocess = (preprocess, schema, params) => {
  return new ZodEffects({
    schema,
    effect: { type: "preprocess", transform: preprocess },
    typeName: ZodFirstPartyTypeKind.ZodEffects,
    ...processCreateParams(params)
  });
};
var ZodOptional = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType === ZodParsedType.undefined) {
      return OK(void 0);
    }
    return this._def.innerType._parse(input);
  }
  unwrap() {
    return this._def.innerType;
  }
};
ZodOptional.create = (type, params) => {
  return new ZodOptional({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodOptional,
    ...processCreateParams(params)
  });
};
var ZodNullable = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType === ZodParsedType.null) {
      return OK(null);
    }
    return this._def.innerType._parse(input);
  }
  unwrap() {
    return this._def.innerType;
  }
};
ZodNullable.create = (type, params) => {
  return new ZodNullable({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodNullable,
    ...processCreateParams(params)
  });
};
var ZodDefault = class extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    let data = ctx.data;
    if (ctx.parsedType === ZodParsedType.undefined) {
      data = this._def.defaultValue();
    }
    return this._def.innerType._parse({
      data,
      path: ctx.path,
      parent: ctx
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
};
ZodDefault.create = (type, params) => {
  return new ZodDefault({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodDefault,
    defaultValue: typeof params.default === "function" ? params.default : () => params.default,
    ...processCreateParams(params)
  });
};
var ZodCatch = class extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const newCtx = {
      ...ctx,
      common: {
        ...ctx.common,
        issues: []
      }
    };
    const result = this._def.innerType._parse({
      data: newCtx.data,
      path: newCtx.path,
      parent: {
        ...newCtx
      }
    });
    if (isAsync(result)) {
      return result.then((result2) => {
        return {
          status: "valid",
          value: result2.status === "valid" ? result2.value : this._def.catchValue({
            get error() {
              return new ZodError(newCtx.common.issues);
            },
            input: newCtx.data
          })
        };
      });
    } else {
      return {
        status: "valid",
        value: result.status === "valid" ? result.value : this._def.catchValue({
          get error() {
            return new ZodError(newCtx.common.issues);
          },
          input: newCtx.data
        })
      };
    }
  }
  removeCatch() {
    return this._def.innerType;
  }
};
ZodCatch.create = (type, params) => {
  return new ZodCatch({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodCatch,
    catchValue: typeof params.catch === "function" ? params.catch : () => params.catch,
    ...processCreateParams(params)
  });
};
var ZodNaN = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.nan) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.nan,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return { status: "valid", value: input.data };
  }
};
ZodNaN.create = (params) => {
  return new ZodNaN({
    typeName: ZodFirstPartyTypeKind.ZodNaN,
    ...processCreateParams(params)
  });
};
var BRAND = Symbol("zod_brand");
var ZodBranded = class extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const data = ctx.data;
    return this._def.type._parse({
      data,
      path: ctx.path,
      parent: ctx
    });
  }
  unwrap() {
    return this._def.type;
  }
};
var ZodPipeline = class _ZodPipeline extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.common.async) {
      const handleAsync = async () => {
        const inResult = await this._def.in._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (inResult.status === "aborted")
          return INVALID;
        if (inResult.status === "dirty") {
          status.dirty();
          return DIRTY(inResult.value);
        } else {
          return this._def.out._parseAsync({
            data: inResult.value,
            path: ctx.path,
            parent: ctx
          });
        }
      };
      return handleAsync();
    } else {
      const inResult = this._def.in._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      });
      if (inResult.status === "aborted")
        return INVALID;
      if (inResult.status === "dirty") {
        status.dirty();
        return {
          status: "dirty",
          value: inResult.value
        };
      } else {
        return this._def.out._parseSync({
          data: inResult.value,
          path: ctx.path,
          parent: ctx
        });
      }
    }
  }
  static create(a, b) {
    return new _ZodPipeline({
      in: a,
      out: b,
      typeName: ZodFirstPartyTypeKind.ZodPipeline
    });
  }
};
var ZodReadonly = class extends ZodType {
  _parse(input) {
    const result = this._def.innerType._parse(input);
    const freeze = (data) => {
      if (isValid(data)) {
        data.value = Object.freeze(data.value);
      }
      return data;
    };
    return isAsync(result) ? result.then((data) => freeze(data)) : freeze(result);
  }
  unwrap() {
    return this._def.innerType;
  }
};
ZodReadonly.create = (type, params) => {
  return new ZodReadonly({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodReadonly,
    ...processCreateParams(params)
  });
};
function cleanParams(params, data) {
  const p = typeof params === "function" ? params(data) : typeof params === "string" ? { message: params } : params;
  const p2 = typeof p === "string" ? { message: p } : p;
  return p2;
}
function custom(check, _params = {}, fatal) {
  if (check)
    return ZodAny.create().superRefine((data, ctx) => {
      const r = check(data);
      if (r instanceof Promise) {
        return r.then((r2) => {
          if (!r2) {
            const params = cleanParams(_params, data);
            const _fatal = params.fatal ?? fatal ?? true;
            ctx.addIssue({ code: "custom", ...params, fatal: _fatal });
          }
        });
      }
      if (!r) {
        const params = cleanParams(_params, data);
        const _fatal = params.fatal ?? fatal ?? true;
        ctx.addIssue({ code: "custom", ...params, fatal: _fatal });
      }
      return;
    });
  return ZodAny.create();
}
var late = {
  object: ZodObject.lazycreate
};
var ZodFirstPartyTypeKind;
(function(ZodFirstPartyTypeKind2) {
  ZodFirstPartyTypeKind2["ZodString"] = "ZodString";
  ZodFirstPartyTypeKind2["ZodNumber"] = "ZodNumber";
  ZodFirstPartyTypeKind2["ZodNaN"] = "ZodNaN";
  ZodFirstPartyTypeKind2["ZodBigInt"] = "ZodBigInt";
  ZodFirstPartyTypeKind2["ZodBoolean"] = "ZodBoolean";
  ZodFirstPartyTypeKind2["ZodDate"] = "ZodDate";
  ZodFirstPartyTypeKind2["ZodSymbol"] = "ZodSymbol";
  ZodFirstPartyTypeKind2["ZodUndefined"] = "ZodUndefined";
  ZodFirstPartyTypeKind2["ZodNull"] = "ZodNull";
  ZodFirstPartyTypeKind2["ZodAny"] = "ZodAny";
  ZodFirstPartyTypeKind2["ZodUnknown"] = "ZodUnknown";
  ZodFirstPartyTypeKind2["ZodNever"] = "ZodNever";
  ZodFirstPartyTypeKind2["ZodVoid"] = "ZodVoid";
  ZodFirstPartyTypeKind2["ZodArray"] = "ZodArray";
  ZodFirstPartyTypeKind2["ZodObject"] = "ZodObject";
  ZodFirstPartyTypeKind2["ZodUnion"] = "ZodUnion";
  ZodFirstPartyTypeKind2["ZodDiscriminatedUnion"] = "ZodDiscriminatedUnion";
  ZodFirstPartyTypeKind2["ZodIntersection"] = "ZodIntersection";
  ZodFirstPartyTypeKind2["ZodTuple"] = "ZodTuple";
  ZodFirstPartyTypeKind2["ZodRecord"] = "ZodRecord";
  ZodFirstPartyTypeKind2["ZodMap"] = "ZodMap";
  ZodFirstPartyTypeKind2["ZodSet"] = "ZodSet";
  ZodFirstPartyTypeKind2["ZodFunction"] = "ZodFunction";
  ZodFirstPartyTypeKind2["ZodLazy"] = "ZodLazy";
  ZodFirstPartyTypeKind2["ZodLiteral"] = "ZodLiteral";
  ZodFirstPartyTypeKind2["ZodEnum"] = "ZodEnum";
  ZodFirstPartyTypeKind2["ZodEffects"] = "ZodEffects";
  ZodFirstPartyTypeKind2["ZodNativeEnum"] = "ZodNativeEnum";
  ZodFirstPartyTypeKind2["ZodOptional"] = "ZodOptional";
  ZodFirstPartyTypeKind2["ZodNullable"] = "ZodNullable";
  ZodFirstPartyTypeKind2["ZodDefault"] = "ZodDefault";
  ZodFirstPartyTypeKind2["ZodCatch"] = "ZodCatch";
  ZodFirstPartyTypeKind2["ZodPromise"] = "ZodPromise";
  ZodFirstPartyTypeKind2["ZodBranded"] = "ZodBranded";
  ZodFirstPartyTypeKind2["ZodPipeline"] = "ZodPipeline";
  ZodFirstPartyTypeKind2["ZodReadonly"] = "ZodReadonly";
})(ZodFirstPartyTypeKind || (ZodFirstPartyTypeKind = {}));
var instanceOfType = (cls, params = {
  message: `Input not instance of ${cls.name}`
}) => custom((data) => data instanceof cls, params);
var stringType = ZodString.create;
var numberType = ZodNumber.create;
var nanType = ZodNaN.create;
var bigIntType = ZodBigInt.create;
var booleanType = ZodBoolean.create;
var dateType = ZodDate.create;
var symbolType = ZodSymbol.create;
var undefinedType = ZodUndefined.create;
var nullType = ZodNull.create;
var anyType = ZodAny.create;
var unknownType = ZodUnknown.create;
var neverType = ZodNever.create;
var voidType = ZodVoid.create;
var arrayType = ZodArray.create;
var objectType = ZodObject.create;
var strictObjectType = ZodObject.strictCreate;
var unionType = ZodUnion.create;
var discriminatedUnionType = ZodDiscriminatedUnion.create;
var intersectionType = ZodIntersection.create;
var tupleType = ZodTuple.create;
var recordType = ZodRecord.create;
var mapType = ZodMap.create;
var setType = ZodSet.create;
var functionType = ZodFunction.create;
var lazyType = ZodLazy.create;
var literalType = ZodLiteral.create;
var enumType = ZodEnum.create;
var nativeEnumType = ZodNativeEnum.create;
var promiseType = ZodPromise.create;
var effectsType = ZodEffects.create;
var optionalType = ZodOptional.create;
var nullableType = ZodNullable.create;
var preprocessType = ZodEffects.createWithPreprocess;
var pipelineType = ZodPipeline.create;
var ostring = () => stringType().optional();
var onumber = () => numberType().optional();
var oboolean = () => booleanType().optional();
var coerce = {
  string: (arg) => ZodString.create({ ...arg, coerce: true }),
  number: (arg) => ZodNumber.create({ ...arg, coerce: true }),
  boolean: (arg) => ZodBoolean.create({
    ...arg,
    coerce: true
  }),
  bigint: (arg) => ZodBigInt.create({ ...arg, coerce: true }),
  date: (arg) => ZodDate.create({ ...arg, coerce: true })
};
var NEVER = INVALID;

// packages/connector-protocol/dist/permissions.js
var PermissionSchema = external_exports.object({
  // ===================== 数据 =====================
  /** 数据存储：own = 仅自己命名空间下的表，禁止访问其他 connector 数据。 */
  storage: external_exports.enum(["own", "none"]).default("own"),
  /**
   * 文件系统访问（`host.files.*` capability + HTTP GET `/api/v1/connector-files/:id/*`）。
   * none = 拒绝；data = 仅 `<workspace>/connector-files/<connectorId>/`。
   */
  fs: external_exports.enum(["none", "data"]).default("none"),
  /**
   * Secrets：connector 自己的加密 KV，走 OS Keychain（safeStorage）/ AES fallback。
   * own = 读写自己的 secret namespace；none = 拒绝。（v1 新增）
   */
  secrets: external_exports.enum(["none", "own"]).default("none"),
  // ===================== AI =====================
  /**
   * 调用宿主 LLM 能力。
   * - complete / stream / embed：v0 已有
   * - json：结构化 JSON 输出（schema 约束 + retry），v1 新增
   * - image / agent：多模态 + tool-use loop，v1.1 预留
   */
  ai: external_exports.array(external_exports.enum(["complete", "stream", "embed", "json", "image", "agent"])).default([]),
  // ===================== 调度 / 通知 / 事件 =====================
  /**
   * 调度器（host scheduler）。
   * - none：禁用 host.schedule.*
   * - cron：允许注册 cron job
   * - all：cron + 一次性 delay
   * （v1 新增）
   */
  schedule: external_exports.enum(["none", "cron", "all"]).default("none"),
  /**
   * 通知能力。
   * - none：禁用 host.notify.*
   * - inApp：仅 in-app toast / badge
   * - os：含 OS 系统级 push（要求 manifest.notifications 配套声明）
   * （v1 新增）
   */
  notify: external_exports.enum(["none", "inApp", "os"]).default("none"),
  /**
   * 事件总线。topic 白名单，支持 `*` 通配。
   * - publish：本 connector 允许 `host.events.publish` 的 topic
   * - subscribe：本 connector 允许 `host.events.subscribe` 的 topic
   * （v1 新增）
   */
  events: external_exports.object({
    publish: external_exports.array(external_exports.string()).default([]),
    subscribe: external_exports.array(external_exports.string()).default([])
  }).default({ publish: [], subscribe: [] }),
  // ===================== 跨边界 =====================
  /**
   * 跨 connector skill 调用白名单。值形如 `'other_connector.skill_name'`。
   * 通配支持 `'other_connector.*'`。
   */
  callSkills: external_exports.array(external_exports.string()).default([]),
  /** 出网白名单（host name 列表，'*' 表示任意；fetch 在 SDK 层强制校验）。 */
  net: external_exports.array(external_exports.string()).default([]),
  // ===================== 系统 =====================
  /** 剪贴板访问（v1 新增，host 端 v1.1 实现）。 */
  clipboard: external_exports.enum(["none", "read", "write", "readwrite"]).default("none"),
  /** 屏幕捕获（v1 新增，host 端 v1.1 实现）。 */
  screen: external_exports.enum(["none", "capture"]).default("none")
});
var DEFAULT_PERMISSIONS = {
  storage: "own",
  fs: "none",
  secrets: "none",
  ai: [],
  schedule: "none",
  notify: "none",
  events: { publish: [], subscribe: [] },
  callSkills: [],
  net: [],
  clipboard: "none",
  screen: "none"
};

// packages/connector-protocol/dist/manifest.js
var NameMapSchema = external_exports.record(external_exports.string(), external_exports.string());
var SemverRange = external_exports.string().min(1);
var StorageTableSchema = external_exports.object({
  name: external_exports.string().regex(/^[a-z][a-z0-9_]*$/, "table name must be snake_case lower").max(48),
  /** 列定义。值是 SQL 列类型 + 修饰符（保留 sqlite 表达力，避免造一套 ORM）。 */
  columns: external_exports.record(external_exports.string(), external_exports.string()),
  /**
   * 表级约束（追加到 CREATE TABLE 内 columns 之后）。
   * 例：`["PRIMARY KEY (page_id, property_id)"]` / `["UNIQUE (a, b)"]`。
   * 不做 SQL 解析；写入方负责保证只是合法 sqlite 约束。
   */
  constraints: external_exports.array(external_exports.string()).optional(),
  /** 可选 index 定义：[ ['idx_name', 'col_a, col_b'] ]。*/
  indexes: external_exports.array(external_exports.tuple([external_exports.string(), external_exports.string()])).optional()
});
var SkillParamSchema = external_exports.lazy(() => external_exports.object({
  type: external_exports.enum(["string", "number", "integer", "boolean", "array", "object"]),
  description: external_exports.string().optional(),
  enum: external_exports.array(external_exports.unknown()).optional(),
  items: SkillParamSchema.optional(),
  properties: external_exports.record(external_exports.string(), SkillParamSchema).optional(),
  required: external_exports.array(external_exports.string()).optional(),
  default: external_exports.unknown().optional()
}));
var SkillManifestSchema = external_exports.object({
  name: external_exports.string().regex(/^[a-z][a-z0-9_]*$/, "skill name must be snake_case lower"),
  description: external_exports.string(),
  /** 仅写操作需要 reverse；reverse handler 同样在子进程中实现。*/
  write: external_exports.boolean().default(false),
  parameters: external_exports.record(external_exports.string(), SkillParamSchema).optional(),
  /** 必填参数名列表；省略表示 parameters 中所有参数都必填。*/
  required: external_exports.array(external_exports.string()).optional()
});
var LabelSchema = external_exports.union([
  external_exports.string(),
  external_exports.object({ i18nKey: external_exports.string() }),
  external_exports.record(external_exports.string(), external_exports.string())
]);
var SidebarSlotSchema = external_exports.object({
  id: external_exports.string().min(1),
  /** 路由路径（相对宿主壳 `/AIBetterDay/<connectorId>` 下的 splat，'/' 表示 root）。*/
  route: external_exports.string().default("/"),
  /** lucide-react icon 名（PascalCase），由 host 渲染。 */
  icon: external_exports.string().optional(),
  /** 显示名；string 表示直接展示，i18nKey 走宿主 i18n，locale-map 按当前 locale 选。 */
  label: LabelSchema
});
var LauncherSlotSchema = external_exports.object({
  id: external_exports.string().min(1),
  label: LabelSchema,
  /** 触发 skill name；执行结果由 host 决定（toast / navigate / nothing）。 */
  invokeSkill: external_exports.string().optional(),
  /** 直达 URL（同 sidebar 风格的相对路径）。 */
  navigate: external_exports.string().optional(),
  /** 例如 'cmd+t'；由 host 全局快捷键系统注册。 */
  shortcut: external_exports.string().optional()
});
var AutoMentionSchema = external_exports.object({
  /** Regex 字符串，捕获组命名为 id（用 named group `(?<id>...)` ）。 */
  pattern: external_exports.string(),
  /** chat context_docs 里的 kind 名。*/
  kind: external_exports.string().min(1)
});
var ScheduleJobSchema = external_exports.object({
  /** Connector 内唯一 id，用作 cancel/list 句柄；snake_case lower。 */
  id: external_exports.string().regex(/^[a-z][a-z0-9_]*$/, "schedule id must be snake_case lower"),
  /** node-cron 语法。例：'0 9 * * *' 每天 9 点。 */
  cron: external_exports.string().min(1),
  /** 触发时调用的 skill 名（不带 connector 前缀）。 */
  invokeSkill: external_exports.string().min(1),
  /** 给用户看的描述，可多语言。 */
  description: external_exports.union([external_exports.string(), NameMapSchema]).optional()
});
var NotificationActionSchema = external_exports.object({
  id: external_exports.string().regex(/^[a-z][a-z0-9_]*$/, "notification action id must be snake_case lower"),
  label: LabelSchema,
  /** 点击后调用本 connector 哪个 skill。 */
  invokeSkill: external_exports.string().optional(),
  /** 点击后导航的 host URL，例如 '/AIBetterDay/todos/items/abc'。 */
  navigate: external_exports.string().optional()
});
var NotificationsManifestSchema = external_exports.object({
  /** 是否需要"关 app 后也能弹"的真正系统级通知。申请权限时用。 */
  requiresPersistent: external_exports.boolean().default(false),
  /** 通知按钮预声明。host.notify.os 只能引用这里 id。 */
  actions: external_exports.array(NotificationActionSchema).default([])
});
var SettingsFieldSchema = external_exports.object({
  /** 字段 key，snake_case lower。host 用它当 storage key。 */
  key: external_exports.string().regex(/^[a-z][a-z0-9_]*$/, "settings field key must be snake_case lower"),
  /** UI 上展示的标题（支持多语言）。 */
  label: external_exports.union([external_exports.string(), NameMapSchema]),
  /** UI 上的副标题/说明。 */
  description: external_exports.union([external_exports.string(), NameMapSchema]).optional(),
  type: external_exports.enum(["string", "number", "boolean", "select", "secret"]),
  /** select 型必填；其它类型忽略。 */
  options: external_exports.array(external_exports.object({
    value: external_exports.union([external_exports.string(), external_exports.number()]),
    label: external_exports.union([external_exports.string(), NameMapSchema])
  })).optional(),
  /** 默认值；secret 型禁止有默认（避免 manifest 泄密）。 */
  default: external_exports.union([external_exports.string(), external_exports.number(), external_exports.boolean()]).optional(),
  /** UI 占位符（type=string/number/secret）。 */
  placeholder: external_exports.string().optional(),
  required: external_exports.boolean().default(false)
});
var CommandManifestSchema = external_exports.object({
  id: external_exports.string().regex(/^[a-z][a-z0-9_-]*$/, "command id must be snake_case lower"),
  title: external_exports.union([external_exports.string(), NameMapSchema]),
  description: external_exports.union([external_exports.string(), NameMapSchema]).optional(),
  /** 命令图标，lucide id（PascalCase）或 emoji。 */
  icon: external_exports.string().optional(),
  /** 触发时调用本 connector 的 skill；不填则只 emit 事件给 ui 自己处理。 */
  invokeSkill: external_exports.string().optional(),
  /** 默认快捷键（host 全局），如 'cmd+t' / 'ctrl+shift+p'。 */
  shortcut: external_exports.string().optional(),
  /** 在命令面板的分类（默认 connector 名）。 */
  category: external_exports.string().optional()
});
var ChatRendererManifestSchema = external_exports.object({
  /** 用于 message part `kind` 字段的匹配。 */
  kind: external_exports.string().min(1),
  /** UI 标题，调试用。 */
  title: external_exports.union([external_exports.string(), NameMapSchema]).optional()
});
var ContextProviderManifestSchema = external_exports.object({
  kind: external_exports.string().min(1),
  whenRouteMatches: external_exports.string().min(1)
});
var CONNECTOR_ID_PATTERN = /^[a-z][a-z0-9-]*(?:\.[a-z][a-z0-9_-]*)?$/;
var ConnectorManifestSchema = external_exports.object({
  /**
   * Connector ID：全局唯一。新规：`<vendor>.<short-name>`，旧规（仅内置）：`<short-name>`。
   * Storage 表前缀由此派生（点替换为下划线，详见 storage-service）。
   */
  id: external_exports.string().regex(CONNECTOR_ID_PATTERN, 'connector id must look like "<vendor>.<short-name>" (lowercase, hyphens ok); legacy single-segment ids are reserved for grandfathered builtins'),
  version: external_exports.string().min(1),
  /** 兼容的宿主 SDK 大版本范围，遵循 SemVer。host 在装载时校验。 */
  engines: external_exports.object({ better: SemverRange }),
  /** 多语言展示名：{ zh: "待办", en: "Todo" }。host 按当前 locale 选择。 */
  name: NameMapSchema,
  /** 多语言简介。 */
  description: NameMapSchema.optional(),
  /** 相对 manifest 文件的图标路径（svg/png）。 */
  icon: external_exports.string().optional(),
  /** Connector 类别：用于 store 分类展示。 */
  category: external_exports.enum([
    "productivity",
    "creative",
    "finance",
    "wellness",
    "lifestyle",
    "developer",
    "other"
  ]).default("other"),
  /** Vendor 标识（如 "AIBetterDay"），用于 store 来源信息。 */
  vendor: external_exports.string().optional(),
  /** UI 入口。entry 是相对 manifest 文件的 HTML 路径，host 用 iframe 加载。 */
  ui: external_exports.object({
    entry: external_exports.string(),
    /** Content-Security-Policy；不填则用 host 默认严格策略。 */
    csp: external_exports.string().optional()
  }).optional(),
  /** Skills 子进程入口。可选：纯 UI connector 不需要 skill 进程。 */
  skills: external_exports.object({
    /** 相对 manifest 文件的 .js 路径，由 child_process.fork 加载。 */
    entry: external_exports.string(),
    /** Node 子进程 max-old-space-size，单位 MB。 */
    memoryLimitMb: external_exports.number().int().positive().default(256)
  }).optional(),
  /** Storage schema 声明：host 在 enable 时自动建 c_<id>_<table> 表。 */
  storage: external_exports.object({
    tables: external_exports.array(StorageTableSchema).default([])
  }).default({ tables: [] }),
  /** Agent / LLM 集成。连接器若不暴露 skill，可省略整个 agent 字段。 */
  agent: external_exports.object({
    /**
     * Agent namespace —— 决定 LLM 工具名前缀。
     *
     * v1：'todos'（snake_case，单段）。
     * v2：'pazchen.wishes'（点分隔的命名空间，与 manifest.id 同形式）。
     *     工具名 sanitize 时点会被替换成下划线：`pazchen_wishes_create`。
     *
     * 推荐让 namespace 与 manifest.id 完全一致——这样 dispatchSkills 自调路径
     * 用 `<callerId>.<skill>` 形式 fqName 时一对一干净。
     */
    namespace: external_exports.string().regex(/^[a-z][a-z0-9-]*(?:\.[a-z][a-z0-9_-]*)?$/),
    /** 相对 manifest 的 prompt 文件（markdown 或纯文本）。 */
    promptFile: external_exports.string().optional(),
    /** 静态 skill 声明（动态注册后会与之 merge / 校验）。 */
    skills: external_exports.array(SkillManifestSchema).default([])
  }).optional(),
  /** UI 槽位声明（数据驱动 sidebar / launcher）。 */
  slots: external_exports.object({
    sidebar: external_exports.array(SidebarSlotSchema).default([]),
    launcher: external_exports.array(LauncherSlotSchema).default([])
  }).default({ sidebar: [], launcher: [] }),
  /** Chat 自动 @ 当前页：surface URL 匹配 pattern 时，自动加 [context_docs:<kind>:<id>]。 */
  autoMention: external_exports.array(AutoMentionSchema).default([]),
  /**
   * Cron / 调度 job 静态声明（v1）。
   *
   * 这些 job 在 connector 启用时自动注册到 host scheduler，关 app 也跑；
   * 触发时 host 通过 IPC 调用 `invokeSkill` 指定的本 connector skill。
   * 需要 `permissions.schedule` 至少为 `'cron'`。
   */
  schedule: external_exports.array(ScheduleJobSchema).default([]),
  /**
   * 通知能力静态声明（v1）。`actions[]` 必须预声明所有按钮 id；
   * `host.notify.os({ actions: [id, ...] })` 调用时只能引用已声明的 action。
   * 需要 `permissions.notify` 为 `'inApp'` 或 `'os'`。
   */
  notifications: NotificationsManifestSchema.optional(),
  /**
   * Context 提供者静态声明（v1）。
   *
   * host AI 在每个回合检查当前 active route 是否命中 `whenRouteMatches`；
   * 命中时调用本 connector 已 `registerContextLoader(kind)` 的 loader 拉
   * 当前实体并注入 chat prompt。无需 permissions（不算敏感能力）。
   */
  contextProviders: external_exports.array(ContextProviderManifestSchema).default([]),
  /**
   * 用户可见配置字段声明（v1.1）。
   *
   * Host 会自动渲染设置页（不需要 connector 自己写 UI）；用户改动后通过
   * `host.settings.get(key)` / `host.settings.subscribe(...)` 在 ui & skills 两端读取。
   * 值的存储位置：connector 自己的 KV namespace（key 形如 `__settings__/<field.key>`）。
   */
  settings: external_exports.object({
    fields: external_exports.array(SettingsFieldSchema).default([])
  }).default({ fields: [] }),
  /**
   * Commands 静态声明（v1.1）。命令面板 + 快捷键 + launcher 复用同一份。
   * launcher slot 仍然兼容（slot.invokeSkill 等同于声明一条匿名 command）。
   */
  commands: external_exports.array(CommandManifestSchema).default([]),
  /**
   * Chat message renderer 声明（v1.1）。
   *
   * 让 AI 回答的某些 part 由 connector iframe 渲染，而不是普通 markdown。
   * 实际 render 函数在 ui 通过 `host.chat.contributeMessageRenderer` 注册。
   */
  chatRenderers: external_exports.array(ChatRendererManifestSchema).default([]),
  /** 权限 manifest（capability-based）。 */
  permissions: PermissionSchema.default(DEFAULT_PERMISSIONS)
});

// packages/connector-protocol/dist/rpc.js
var Id = external_exports.union([external_exports.string(), external_exports.number()]);
var HostCallRequestSchema = external_exports.object({
  kind: external_exports.literal("host:call"),
  id: Id,
  /** capability namespace：'storage' | 'files' | 'log' | 'ai' | 'agent' | 'theme' | 'i18n' | 'ui' | ... */
  capability: external_exports.string(),
  /** 同 capability 下的 method 名。 */
  method: external_exports.string(),
  /** 入参（结构由具体 method 决定，host 侧用单独 schema 校验）。 */
  params: external_exports.unknown().optional()
});
var HostCallResponseSchema = external_exports.object({
  kind: external_exports.literal("host:return"),
  id: Id,
  ok: external_exports.boolean(),
  /** ok=true 时的返回值。 */
  result: external_exports.unknown().optional(),
  /** ok=false 时的错误。code 用于程序判断，message 给用户/日志。 */
  error: external_exports.object({
    code: external_exports.string(),
    message: external_exports.string(),
    data: external_exports.unknown().optional()
  }).optional()
});
var HostEventSchema = external_exports.object({
  kind: external_exports.literal("host:event"),
  /** 事件名：'theme.changed' / 'i18n.locale.changed' / 'route.params.changed' / ... */
  event: external_exports.string(),
  payload: external_exports.unknown().optional()
});
var SkillInvokeRequestSchema = external_exports.object({
  kind: external_exports.literal("skill:invoke"),
  id: Id,
  /** Skill 名，不带 connector 前缀。 */
  skill: external_exports.string(),
  params: external_exports.unknown().optional(),
  /** 调用上下文：trace id、调用源（'agent' | 'host' | 'connector:<id>'）等。 */
  ctx: external_exports.object({
    traceId: external_exports.string().optional(),
    source: external_exports.string().optional()
  }).optional()
});
var SkillInvokeResponseSchema = external_exports.object({
  kind: external_exports.literal("skill:return"),
  id: Id,
  ok: external_exports.boolean(),
  result: external_exports.unknown().optional(),
  error: external_exports.object({
    code: external_exports.string(),
    message: external_exports.string(),
    data: external_exports.unknown().optional()
  }).optional()
});
var SkillRegisterSchema = external_exports.object({
  kind: external_exports.literal("skill:register"),
  /** 静态可见的 skill 元数据（与 manifest agent.skills 字段同结构子集）。 */
  skills: external_exports.array(external_exports.object({
    name: external_exports.string(),
    description: external_exports.string(),
    write: external_exports.boolean().default(false),
    parameters: external_exports.unknown().optional(),
    hasReverse: external_exports.boolean().default(false)
  })),
  /** Connector 注册到 connector-prompts 的整段文本（替代旧 CONNECTOR_PROMPTS 静态映射）。 */
  prompt: external_exports.string().optional(),
  /** Connector 注册的 chat context_docs loader 的 kinds（实际 loader 在子进程里）。 */
  contextLoaderKinds: external_exports.array(external_exports.string()).default([]),
  /** Connector 是否注册 cron / lifecycle hook。 */
  hasCron: external_exports.boolean().default(false),
  hasOnActivate: external_exports.boolean().default(false),
  hasOnDeactivate: external_exports.boolean().default(false)
});
var SkillReadySchema = external_exports.object({
  kind: external_exports.literal("skill:ready")
});
var RpcEnvelopeSchema = external_exports.discriminatedUnion("kind", [
  HostCallRequestSchema,
  HostCallResponseSchema,
  HostEventSchema,
  SkillInvokeRequestSchema,
  SkillInvokeResponseSchema,
  SkillRegisterSchema,
  SkillReadySchema
]);
var RPC_ERROR = {
  /** 未知 capability 或 method。 */
  NOT_FOUND: "rpc.not_found",
  /** 入参 schema 校验失败。 */
  INVALID_PARAMS: "rpc.invalid_params",
  /** 权限不足（manifest 未声明）。 */
  PERMISSION_DENIED: "rpc.permission_denied",
  /** 处理过程中抛出未被捕获的异常。 */
  INTERNAL: "rpc.internal",
  /** 跨进程通信中断（子进程退出 / iframe 销毁）。 */
  DISCONNECTED: "rpc.disconnected",
  /** 调用超时。 */
  TIMEOUT: "rpc.timeout"
};

// packages/connector-sdk-server/dist/transport.js
var IpcBridge = class {
  transport;
  nextId = 1;
  pending = /* @__PURE__ */ new Map();
  invokeHandler = null;
  /**
   * `host:event` 订阅者按 event 名字组织。
   * 用于 v1 host.events.subscribe / v0 ai.stream / theme.subscribe 等推送形态的能力。
   */
  eventHandlers = /* @__PURE__ */ new Map();
  timeoutMs;
  constructor(transport, opts = {}) {
    this.transport = transport;
    this.timeoutMs = opts.timeoutMs ?? 6e4;
    transport.onMessage((env) => this.handleEnvelope(env));
  }
  /** Outbound: skill calls a host capability. */
  call(capability, method, params) {
    const id = this.nextId++;
    const req = { kind: "host:call", id, capability, method, params };
    return new Promise((resolve, reject) => {
      const timer = this.timeoutMs > 0 ? setTimeout(() => {
        this.pending.delete(id);
        reject(new RpcError(RPC_ERROR.TIMEOUT, `${capability}.${method} timed out`));
      }, this.timeoutMs) : null;
      this.pending.set(id, {
        resolve: (v) => resolve(v),
        reject,
        timer
      });
      try {
        this.transport.send(req);
      } catch (err) {
        this.pending.delete(id);
        if (timer)
          clearTimeout(timer);
        reject(err instanceof Error ? err : new Error(String(err)));
      }
    });
  }
  /** Outbound: announce skill list / prompt / context loaders. */
  announce(register) {
    this.transport.send(register);
  }
  /** Outbound: notify host the skill process is ready (after first announce). */
  signalReady() {
    this.transport.send({ kind: "skill:ready" });
  }
  /** Inbound: register the dispatcher for skill:invoke requests. */
  setInvokeHandler(handler) {
    this.invokeHandler = handler;
  }
  /**
   * Subscribe to `host:event` pushes filtered by event name.
   * Returns an unsubscribe function.
   *
   * Multi-listener safe: many subscribers can listen to the same event name.
   */
  onEvent(name, handler) {
    let set = this.eventHandlers.get(name);
    if (!set) {
      set = /* @__PURE__ */ new Set();
      this.eventHandlers.set(name, set);
    }
    set.add(handler);
    return () => {
      const s = this.eventHandlers.get(name);
      if (!s)
        return;
      s.delete(handler);
      if (s.size === 0)
        this.eventHandlers.delete(name);
    };
  }
  handleEnvelope(env) {
    if (env.kind === "host:return") {
      this.resolveHostCall(env);
      return;
    }
    if (env.kind === "skill:invoke") {
      this.handleInvoke(env);
      return;
    }
    if (env.kind === "host:event") {
      this.handleHostEvent(env);
      return;
    }
  }
  handleHostEvent(evt) {
    const listeners = this.eventHandlers.get(evt.event);
    if (!listeners || listeners.size === 0)
      return;
    for (const fn of [...listeners]) {
      try {
        fn(evt.payload);
      } catch {
      }
    }
  }
  resolveHostCall(res) {
    const pending = this.pending.get(res.id);
    if (!pending)
      return;
    this.pending.delete(res.id);
    if (pending.timer)
      clearTimeout(pending.timer);
    if (res.ok) {
      pending.resolve(res.result);
    } else {
      const err = res.error ?? { code: RPC_ERROR.INTERNAL, message: "unknown error" };
      pending.reject(new RpcError(err.code, err.message, err.data));
    }
  }
  async handleInvoke(req) {
    if (!this.invokeHandler) {
      this.respond(req.id, false, void 0, {
        code: RPC_ERROR.NOT_FOUND,
        message: "no invoke handler registered"
      });
      return;
    }
    try {
      const result = await this.invokeHandler(req);
      this.respond(req.id, true, result);
    } catch (err) {
      const ducked = err && typeof err === "object" && "code" in err ? err.code : null;
      const code = err instanceof RpcError ? err.code : typeof ducked === "string" && ducked.length > 0 ? ducked : RPC_ERROR.INTERNAL;
      const data = err && typeof err === "object" && "data" in err ? err.data : void 0;
      const message = err instanceof Error ? err.message : String(err);
      this.respond(req.id, false, void 0, { code, message, data });
    }
  }
  respond(id, ok, result, error) {
    const env = { kind: "skill:return", id, ok, result, error };
    this.transport.send(env);
  }
};
var RpcError = class extends Error {
  code;
  data;
  constructor(code, message, data) {
    super(message);
    this.code = code;
    this.data = data;
    this.name = "RpcError";
  }
};
function processIpcTransport() {
  if (typeof process === "undefined" || typeof process.send !== "function") {
    throw new Error("processIpcTransport() requires node child_process.fork (process.send unavailable)");
  }
  return {
    send(env) {
      process.send(env);
    },
    onMessage(handler) {
      process.on("message", (msg) => {
        if (msg && typeof msg === "object" && "kind" in msg) {
          handler(msg);
        }
      });
    }
  };
}

// packages/connector-sdk-server/dist/host.js
function buildServerHost(bridge, meta) {
  const call = (cap, method, params) => bridge.call(cap, method, params);
  const contextProviders = /* @__PURE__ */ new Map();
  contextProviderRegistry.set(meta.connectorId, contextProviders);
  return {
    meta,
    storage: {
      sql: (query, params) => call("storage", "sql", { query, params }),
      query: (query, params) => call("storage", "query", { query, params }),
      kv: {
        get: (key) => call("storage", "kv.get", { key }),
        set: (key, value) => call("storage", "kv.set", { key, value }),
        delete: (key) => call("storage", "kv.delete", { key }),
        keys: (prefix) => call("storage", "kv.keys", { prefix })
      }
    },
    ai: {
      complete: (opts) => call("ai", "complete", opts),
      embed: (text) => call("ai", "embed", { text }),
      stream: (opts) => streamCall(bridge, opts),
      json: (opts) => call("ai", "json", opts)
    },
    files: {
      write: (p) => call("files", "write", p),
      read: (p) => call("files", "read", p),
      remove: (p) => call("files", "remove", p),
      stat: (p) => call("files", "stat", p),
      publicUrl: (p) => call("files", "publicUrl", p),
      list: (p) => call("files", "list", p ?? {})
    },
    log: {
      debug: (msg, extra) => fireLog(bridge, "debug", msg, extra),
      info: (msg, extra) => fireLog(bridge, "info", msg, extra),
      warn: (msg, extra) => fireLog(bridge, "warn", msg, extra),
      error: (msg, extra) => fireLog(bridge, "error", msg, extra)
    },
    // ─── v1 ────────────────────────────────────────────────────────────────
    schedule: {
      cron: (opts) => call("schedule", "cron", opts),
      in: (opts) => call("schedule", "in", opts),
      cancel: (id) => call("schedule", "cancel", { id }),
      list: () => call("schedule", "list", {})
    },
    notify: {
      inApp: (opts) => call("notify", "inApp", opts),
      os: (opts) => call("notify", "os", opts),
      dismiss: (id) => call("notify", "dismiss", { id }),
      setBadge: (count) => call("notify", "setBadge", { count })
    },
    events: {
      publish: (topic, payload) => call("events", "publish", { topic, payload }),
      subscribe: (topic, handler) => {
        const eventName = `events.${topic}`;
        const off = bridge.onEvent(eventName, (raw) => {
          const env = raw ?? {};
          handler(env.payload, {
            fromConnector: env.fromConnector ?? "",
            ts: env.ts ?? Date.now()
          });
        });
        void call("events", "subscribe", { topic }).catch(() => void 0);
        return () => {
          off();
          void call("events", "unsubscribe", { topic }).catch(() => void 0);
        };
      }
    },
    secrets: {
      get: (key) => call("secrets", "get", { key }),
      set: (key, value) => call("secrets", "set", { key, value }).then(() => void 0),
      delete: (key) => call("secrets", "delete", { key }).then(() => void 0),
      keys: () => call("secrets", "keys", {})
    },
    context: {
      provide: (provider) => {
        contextProviders.set(provider.kind, provider);
        void call("context", "register", { kind: provider.kind }).catch(() => void 0);
        return () => {
          contextProviders.delete(provider.kind);
          void call("context", "unregister", { kind: provider.kind }).catch(() => void 0);
        };
      }
    },
    skills: {
      invoke: (fqName, params, opts) => call("skills", "invoke", { fqName, params, explainWhy: opts?.explainWhy })
    },
    // ─── v1.1 ──────────────────────────────────────────────────────────────
    settings: {
      getAll: () => call("settings", "getAll", {}),
      get: (key) => call("settings", "get", { key }),
      set: (key, value) => call("settings", "set", { key, value }).then(() => void 0),
      subscribe: (handler) => bridge.onEvent("settings.changed", (raw) => handler(raw))
    },
    agent: {
      // Backwards-compat shim: old SDK callers passed `'<connector>.<skill>'`.
      // We just route through the new skills.invoke endpoint; permission rules
      // stay identical (cross-connector still requires callSkills allow-list).
      invoke: (skillId, params) => call("skills", "invoke", { fqName: skillId, params })
    }
  };
}
var contextProviderRegistry = /* @__PURE__ */ new Map();
function fireLog(bridge, level, msg, extra) {
  bridge.call("log", level, { msg, extra }).catch(() => void 0);
}
async function* streamCall(bridge, opts) {
  const streamId = await bridge.call("ai", "streamStart", opts);
  try {
    while (true) {
      const next = await bridge.call("ai", "streamPull", {
        streamId
      });
      for (const c of next.chunks)
        yield c;
      if (next.done)
        return;
    }
  } finally {
    bridge.call("ai", "streamCancel", { streamId }).catch(() => void 0);
  }
}

// packages/connector-sdk-server/dist/connect.js
async function connect(opts = {}) {
  const connectorId = opts.connectorId ?? process.env.BETTER_CONNECTOR_ID;
  const version = opts.version ?? process.env.BETTER_CONNECTOR_VERSION ?? "0.0.0";
  const sdkApi = opts.sdkApi ?? process.env.BETTER_SDK_API ?? "1";
  if (!connectorId) {
    throw new Error("connect(): BETTER_CONNECTOR_ID env not set. Connector skill processes must be spawned by host loader.");
  }
  const transport = processIpcTransport();
  const bridge = new IpcBridge(transport);
  const host2 = buildServerHost(bridge, { connectorId, version, sdkApi });
  const skills = /* @__PURE__ */ new Map();
  const contextLoaders = /* @__PURE__ */ new Map();
  const crons = /* @__PURE__ */ new Map();
  let promptText;
  let onActivate = null;
  let onDeactivate = null;
  function buildSkillCtx(req, h) {
    return { host: h, traceId: req.ctx?.traceId, source: req.ctx?.source };
  }
  const broadcast = () => {
    bridge.announce({
      kind: "skill:register",
      skills: Array.from(skills.values()).map((s) => ({
        name: s.meta.name,
        description: s.meta.description,
        write: s.meta.write ?? false,
        parameters: s.meta.parameters,
        hasReverse: typeof s.reverse === "function"
      })),
      prompt: promptText,
      contextLoaderKinds: Array.from(contextLoaders.keys()),
      hasCron: crons.size > 0,
      hasOnActivate: !!onActivate,
      hasOnDeactivate: !!onDeactivate
    });
  };
  bridge.setInvokeHandler(async (req) => {
    if (req.skill === "$activate" && onActivate) {
      await onActivate(buildSkillCtx(req, host2));
      return { ok: true };
    }
    if (req.skill === "$deactivate" && onDeactivate) {
      await onDeactivate(buildSkillCtx(req, host2));
      return { ok: true };
    }
    if (req.skill === "$cron" && req.params && typeof req.params === "object") {
      const id = req.params.id;
      const cron = id ? crons.get(id) : void 0;
      if (!cron)
        throw new RpcError("rpc.not_found", `cron ${id} not registered`);
      await cron.handler(buildSkillCtx(req, host2));
      return { ok: true };
    }
    if (req.skill.startsWith("$contextLoader:")) {
      const kind = req.skill.slice("$contextLoader:".length);
      const loader = contextLoaders.get(kind);
      if (!loader)
        throw new RpcError("rpc.not_found", `context loader ${kind} not registered`);
      const id = req.params?.id;
      if (!id)
        throw new RpcError("rpc.invalid_params", "context loader requires { id }");
      return await loader.load(id, buildSkillCtx(req, host2));
    }
    if (req.skill.startsWith("$contextProvider:")) {
      const kind = req.skill.slice("$contextProvider:".length);
      const providers = contextProviderRegistry.get(connectorId);
      const provider = providers?.get(kind);
      if (!provider) {
        throw new RpcError("rpc.not_found", `context provider ${kind} not registered`);
      }
      return await provider.getCurrent();
    }
    if (req.skill.startsWith("$reverse:")) {
      const name = req.skill.slice("$reverse:".length);
      const skill2 = skills.get(name);
      if (!skill2?.reverse)
        throw new RpcError("rpc.not_found", `reverse handler for ${name}`);
      return await skill2.reverse(req.params, buildSkillCtx(req, host2));
    }
    const skill = skills.get(req.skill);
    if (!skill)
      throw new RpcError("rpc.not_found", `skill ${req.skill} not registered`);
    return await skill.handler(req.params, buildSkillCtx(req, host2));
  });
  return {
    host: host2,
    registerSkill(reg) {
      skills.set(reg.meta.name, reg);
      broadcast();
    },
    registerPrompt(text) {
      promptText = text;
      broadcast();
    },
    registerContextLoader(reg) {
      contextLoaders.set(reg.kind, reg);
      broadcast();
    },
    registerCron(reg) {
      crons.set(reg.id, reg);
      broadcast();
    },
    onActivate(handler) {
      onActivate = handler;
      broadcast();
    },
    onDeactivate(handler) {
      onDeactivate = handler;
      broadcast();
    }
  };
}

// node_modules/.pnpm/nanoid@5.1.7/node_modules/nanoid/index.js
import { webcrypto as crypto } from "node:crypto";

// node_modules/.pnpm/nanoid@5.1.7/node_modules/nanoid/url-alphabet/index.js
var urlAlphabet = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";

// node_modules/.pnpm/nanoid@5.1.7/node_modules/nanoid/index.js
var POOL_SIZE_MULTIPLIER = 128;
var pool;
var poolOffset;
function fillPool(bytes) {
  if (!pool || pool.length < bytes) {
    pool = Buffer.allocUnsafe(bytes * POOL_SIZE_MULTIPLIER);
    crypto.getRandomValues(pool);
    poolOffset = 0;
  } else if (poolOffset + bytes > pool.length) {
    crypto.getRandomValues(pool);
    poolOffset = 0;
  }
  poolOffset += bytes;
}
function nanoid(size = 21) {
  fillPool(size |= 0);
  let id = "";
  for (let i = poolOffset - size; i < poolOffset; i++) {
    id += urlAlphabet[pool[i] & 63];
  }
  return id;
}

// connectors/AIBetterDay/todos/skills/src/main.ts
var ALL_COLUMNS = "id, title, description, priority, status, due_date, date_start, remind_at, reminder_enabled, repeat_rule, parent_id, sort_order, completed_at, color, tags, created_at, updated_at";
function format(row) {
  let tags = [];
  try {
    tags = JSON.parse(row.tags || "[]");
  } catch {
    tags = [];
  }
  let repeatRule = { type: "none" };
  try {
    repeatRule = JSON.parse(row.repeat_rule || '{"type":"none"}');
  } catch {
  }
  return {
    id: row.id,
    title: row.title,
    description: row.description,
    priority: row.priority,
    status: row.status,
    dueDate: row.due_date,
    dateStart: row.date_start,
    remindAt: row.remind_at,
    reminderEnabled: !!row.reminder_enabled,
    repeatRule,
    parentId: row.parent_id,
    sortOrder: row.sort_order,
    completedAt: row.completed_at,
    color: row.color,
    tags,
    createdAt: row.created_at,
    updatedAt: row.updated_at
  };
}
var conn = await connect();
var { host } = conn;
async function findById(id) {
  const rows = await host.storage.query(
    `SELECT ${ALL_COLUMNS} FROM items WHERE id = ?`,
    [id]
  );
  return rows[0] ?? null;
}
async function nextSortOrder(parentId) {
  const rows = parentId ? await host.storage.query(
    `SELECT coalesce(max(sort_order), -1) AS m FROM items WHERE parent_id = ?`,
    [parentId]
  ) : await host.storage.query(
    `SELECT coalesce(max(sort_order), -1) AS m FROM items WHERE parent_id IS NULL`
  );
  return (rows[0]?.m ?? -1) + 1;
}
var DEFAULT_TODO_DURATION_MIN = 30;
var pad = (n) => String(n).padStart(2, "0");
var fmtLocal = (d) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`;
var hasTime = (v) => !!v && v.includes("T");
var addMinutes = (iso, minutes) => {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return null;
  return fmtLocal(new Date(d.getTime() + minutes * 60 * 1e3));
};
function derivePlacement(input) {
  let dateStart = input.dateStart ?? null;
  let dueDate = input.dueDate ?? null;
  const remindAt = input.remindAt ?? null;
  if (hasTime(dateStart) && !hasTime(dueDate)) {
    dueDate = addMinutes(dateStart, DEFAULT_TODO_DURATION_MIN) ?? dueDate;
  } else if (hasTime(dueDate) && !hasTime(dateStart)) {
    dateStart = addMinutes(dueDate, -DEFAULT_TODO_DURATION_MIN) ?? dateStart;
  }
  if (dateStart || dueDate) return { dateStart, dueDate };
  if (!remindAt) return { dateStart, dueDate };
  if (!hasTime(remindAt)) return { dateStart: remindAt, dueDate: remindAt };
  const end = addMinutes(remindAt, DEFAULT_TODO_DURATION_MIN);
  if (!end) return { dateStart, dueDate };
  return { dateStart: remindAt, dueDate: end };
}
function normalizeNullable(v) {
  if (v === void 0) return void 0;
  if (v === null) return null;
  if (v === "" || v === "null") return null;
  return v;
}
var MAX_PAGE_SIZE = 2e3;
var DEFAULT_PAGE_SIZE = 500;
conn.registerSkill({
  meta: {
    name: "list",
    description: "\u5217\u51FA\u5F85\u529E\uFF0C\u652F\u6301\u6309\u72B6\u6001/\u4F18\u5148\u7EA7/\u65E5\u671F/tag/\u8FC7\u671F\u7B5B\u9009",
    write: false
  },
  handler: async (params, _ctx) => {
    const page = Math.max(1, params.page ?? 1);
    const pageSize = Math.min(MAX_PAGE_SIZE, Math.max(1, params.pageSize ?? DEFAULT_PAGE_SIZE));
    const wheres = [];
    const args = [];
    if (params.status) {
      wheres.push("status = ?");
      args.push(params.status);
    }
    if (params.priority) {
      wheres.push("priority = ?");
      args.push(params.priority);
    }
    if (params.dateFrom && params.dateTo) {
      const inRange = `(
        (date_start IS NOT NULL OR due_date IS NOT NULL)
        AND substr(coalesce(date_start, due_date), 1, 10) <= ?
        AND substr(coalesce(due_date, date_start), 1, 10) >= ?
      )`;
      if (params.includeUndated) {
        wheres.push(`(${inRange} OR (date_start IS NULL AND due_date IS NULL))`);
      } else {
        wheres.push(inRange);
      }
      args.push(params.dateTo, params.dateFrom);
    } else if (params.date) {
      const inDay = `(
        (date_start IS NOT NULL OR due_date IS NOT NULL)
        AND substr(coalesce(date_start, due_date), 1, 10) <= ?
        AND substr(coalesce(due_date, date_start), 1, 10) >= ?
      )`;
      if (params.includeUndated) {
        wheres.push(`(${inDay} OR (date_start IS NULL AND due_date IS NULL))`);
      } else {
        wheres.push(inDay);
      }
      args.push(params.date, params.date);
    }
    if (params.overdue) {
      const today = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
      wheres.push(`(
        (due_date IS NOT NULL AND substr(due_date, 1, 10) < ?)
        OR (due_date IS NULL AND date_start IS NOT NULL AND substr(date_start, 1, 10) < ?)
      )`);
      args.push(today, today);
      wheres.push(`status NOT IN ('completed', 'cancelled')`);
    } else if (params.dueBefore) {
      wheres.push(`(
        (due_date IS NOT NULL AND substr(due_date, 1, 10) <= ?)
        OR (due_date IS NULL AND date_start IS NOT NULL AND substr(date_start, 1, 10) <= ?)
      )`);
      args.push(params.dueBefore, params.dueBefore);
      wheres.push(`status NOT IN ('completed', 'cancelled')`);
    }
    if (params.tag) {
      wheres.push("tags LIKE ?");
      args.push(`%"${params.tag}"%`);
    }
    const whereSql = wheres.length ? `WHERE ${wheres.join(" AND ")}` : "";
    const offset = (page - 1) * pageSize;
    const items = await host.storage.query(
      `SELECT ${ALL_COLUMNS} FROM items ${whereSql}
       ORDER BY parent_id ASC, sort_order ASC, created_at ASC
       LIMIT ? OFFSET ?`,
      [...args, pageSize, offset]
    );
    const totalRow = await host.storage.query(
      `SELECT count(*) AS c FROM items ${whereSql}`,
      args
    );
    return {
      items: items.map(format),
      meta: { total: totalRow[0]?.c ?? 0, page, pageSize }
    };
  }
});
conn.registerSkill({
  meta: {
    name: "get",
    description: "\u83B7\u53D6\u5355\u4E2A\u5F85\u529E\u8BE6\u60C5",
    write: false,
    parameters: { id: { type: "string" } }
  },
  handler: async ({ id }) => {
    const row = await findById(id);
    if (!row) {
      throw Object.assign(new Error("\u5F85\u529E\u4E8B\u9879\u4E0D\u5B58\u5728"), { code: "rpc.not_found" });
    }
    return format(row);
  }
});
conn.registerSkill({
  meta: {
    name: "create",
    description: "\u521B\u5EFA\u65B0\u5F85\u529E\uFF08\u652F\u6301\u65F6\u95F4\u7A97 + \u63D0\u9192 + \u91CD\u590D\u89C4\u5219\uFF09",
    write: true,
    parameters: { title: { type: "string" } },
    required: ["title"]
  },
  handler: async (input) => {
    if (!input.title || typeof input.title !== "string") {
      throw Object.assign(new Error("title required"), { code: "rpc.invalid_params" });
    }
    const ts = (/* @__PURE__ */ new Date()).toISOString();
    const parentId = input.parentId ?? null;
    const sortOrder = await nextSortOrder(parentId);
    const { dateStart, dueDate } = derivePlacement(input);
    const id = nanoid();
    const repeatRule = JSON.stringify(input.repeatRule ?? { type: "none" });
    const tags = JSON.stringify(input.tags ?? []);
    const reminderEnabled = input.reminderEnabled ?? !!input.remindAt;
    await host.storage.sql(
      `INSERT INTO items
        (id, title, description, priority, status, due_date, date_start, remind_at,
         reminder_enabled, repeat_rule, parent_id, sort_order, completed_at, color, tags,
         created_at, updated_at)
       VALUES (?, ?, ?, ?, 'pending', ?, ?, ?, ?, ?, ?, ?, NULL, ?, ?, ?, ?)`,
      [
        id,
        input.title,
        input.description ?? null,
        input.priority ?? "medium",
        dueDate,
        dateStart,
        input.remindAt ?? null,
        reminderEnabled ? 1 : 0,
        repeatRule,
        parentId,
        sortOrder,
        input.color ?? null,
        tags,
        ts,
        ts
      ]
    );
    const row = await findById(id);
    return { ...format(row), _undo: { id } };
  },
  reverse: async (input) => {
    const id = input?._undo?.id ?? input?.id ?? null;
    if (!id) return;
    await host.storage.sql("DELETE FROM items WHERE id = ?", [id]);
  }
});
conn.registerSkill({
  meta: {
    name: "update",
    description: "\u66F4\u65B0\u5F85\u529E\u5185\u5BB9\u6216\u72B6\u6001\u3002status=completed \u65F6\u81EA\u52A8\u5199 completedAt \u5E76\u6E05\u9664\u63D0\u9192",
    write: true,
    parameters: { id: { type: "string" } },
    required: ["id"]
  },
  handler: async (input) => {
    const before = await findById(input.id);
    if (!before) {
      throw Object.assign(new Error("\u5F85\u529E\u4E8B\u9879\u4E0D\u5B58\u5728"), { code: "rpc.not_found" });
    }
    const sets = ["updated_at = ?"];
    const args = [(/* @__PURE__ */ new Date()).toISOString()];
    const push = (col, val) => {
      sets.push(`${col} = ?`);
      args.push(val);
    };
    if (input.title !== void 0) push("title", input.title);
    if (input.description !== void 0) push("description", input.description);
    if (input.priority !== void 0) push("priority", input.priority);
    if (input.status !== void 0) {
      push("status", input.status);
      if (input.status === "completed") {
        push("completed_at", (/* @__PURE__ */ new Date()).toISOString());
        push("reminder_enabled", 0);
        push("remind_at", null);
      } else {
        push("completed_at", null);
      }
    }
    if (input.dueDate !== void 0) push("due_date", input.dueDate);
    if (input.dateStart !== void 0) push("date_start", input.dateStart);
    if (input.remindAt !== void 0) push("remind_at", input.remindAt);
    if (input.reminderEnabled !== void 0) push("reminder_enabled", input.reminderEnabled ? 1 : 0);
    if (input.repeatRule !== void 0) push("repeat_rule", JSON.stringify(input.repeatRule));
    if (input.parentId !== void 0) push("parent_id", input.parentId);
    if (input.sortOrder !== void 0) push("sort_order", input.sortOrder);
    if (input.color !== void 0) push("color", input.color);
    if (input.tags !== void 0) push("tags", JSON.stringify(input.tags));
    args.push(input.id);
    await host.storage.sql(`UPDATE items SET ${sets.join(", ")} WHERE id = ?`, args);
    const after = await findById(input.id);
    return { ...format(after), _undo: { snapshot: before } };
  },
  reverse: async (input) => {
    const snap = input?._undo?.snapshot ?? input?.snapshot;
    if (!snap?.id) return;
    await restoreRow(snap);
  }
});
conn.registerSkill({
  meta: {
    name: "bulk_update",
    description: "\u6279\u91CF\u66F4\u65B0\u5F85\u529E\uFF1A\u4E00\u6B21\u6539\u671F\u3001\u6279\u91CF\u5B8C\u6210/\u53D6\u6D88\u3001\u6279\u91CF\u6539\u4F18\u5148\u7EA7\u6216 tag",
    write: true,
    parameters: { ids: { type: "array", items: { type: "string" } } },
    required: ["ids"]
  },
  handler: async (params) => {
    const ids = Array.isArray(params.ids) ? params.ids.filter((id) => typeof id === "string" && id) : [];
    const snapshots = [];
    if (ids.length === 0) {
      return { updated: 0, skipped: 0, items: [], _undo: { snapshots } };
    }
    const now = (/* @__PURE__ */ new Date()).toISOString();
    const addTags = Array.isArray(params.addTags) ? params.addTags.filter(Boolean) : [];
    const removeTags = Array.isArray(params.removeTags) ? params.removeTags.filter(Boolean) : [];
    let updated = 0;
    let skipped = 0;
    const items = [];
    for (const id of ids) {
      const before = await findById(id);
      if (!before) {
        skipped += 1;
        continue;
      }
      snapshots.push(before);
      const sets = ["updated_at = ?"];
      const args = [now];
      const push = (col, val) => {
        sets.push(`${col} = ?`);
        args.push(val);
      };
      if (params.status !== void 0) {
        push("status", params.status);
        if (params.status === "completed") {
          push("completed_at", now);
          push("reminder_enabled", 0);
          push("remind_at", null);
        } else {
          push("completed_at", null);
        }
      }
      if (params.priority !== void 0) push("priority", params.priority);
      const due = normalizeNullable(params.dueDate ?? void 0);
      if (due !== void 0) push("due_date", due);
      const ds = normalizeNullable(params.dateStart ?? void 0);
      if (ds !== void 0) push("date_start", ds);
      const ra = normalizeNullable(params.remindAt ?? void 0);
      if (ra !== void 0) push("remind_at", ra);
      if (params.reminderEnabled !== void 0) push("reminder_enabled", params.reminderEnabled ? 1 : 0);
      if (params.color !== void 0) push("color", params.color);
      if (addTags.length || removeTags.length) {
        let tags = [];
        try {
          tags = JSON.parse(before.tags || "[]");
        } catch {
          tags = [];
        }
        const set = new Set(tags);
        for (const t of removeTags) set.delete(t);
        for (const t of addTags) set.add(t);
        push("tags", JSON.stringify([...set]));
      }
      args.push(id);
      await host.storage.sql(`UPDATE items SET ${sets.join(", ")} WHERE id = ?`, args);
      const after = await findById(id);
      if (after) {
        updated += 1;
        items.push(format(after));
      } else {
        skipped += 1;
      }
    }
    return { updated, skipped, items, _undo: { snapshots } };
  },
  reverse: async (input) => {
    const snaps = input?._undo?.snapshots ?? input?.snapshots ?? [];
    for (const snap of snaps) {
      if (snap?.id) await restoreRow(snap);
    }
  }
});
conn.registerSkill({
  meta: {
    name: "delete",
    description: "\u5220\u9664\u5F85\u529E\uFF08host undo \u6846\u67B6\u53EF\u8FD8\u539F\uFF09",
    write: true,
    parameters: { id: { type: "string" } },
    required: ["id"]
  },
  handler: async ({ id }) => {
    const before = await findById(id);
    if (!before) {
      throw Object.assign(new Error("\u5F85\u529E\u4E8B\u9879\u4E0D\u5B58\u5728"), { code: "rpc.not_found" });
    }
    await host.storage.sql("DELETE FROM items WHERE id = ?", [id]);
    return { deleted: true, _undo: { snapshot: before } };
  },
  reverse: async (input) => {
    const snap = input?._undo?.snapshot ?? input?.snapshot;
    if (!snap?.id) return;
    await restoreRow(snap);
  }
});
conn.registerSkill({
  meta: {
    name: "host_mention_hits",
    description: "Host @-mention\uFF1A\u5F85\u529E\u6807\u9898",
    write: false
  },
  handler: async (params) => {
    const limit = Math.min(30, Math.max(1, params.limit ?? 6));
    const q = (params.q ?? "").trim();
    const rows = !q ? await host.storage.query(
      `SELECT ${ALL_COLUMNS} FROM items ORDER BY updated_at DESC LIMIT ?`,
      [limit]
    ) : await host.storage.query(
      `SELECT ${ALL_COLUMNS} FROM items WHERE title LIKE ? ORDER BY updated_at DESC LIMIT ?`,
      [`%${q}%`, limit]
    );
    return {
      hits: rows.map((r) => ({
        kind: "todo",
        id: r.id,
        title: r.title,
        connectorId: "todo",
        subtitle: "\u5F85\u529E",
        updatedAt: r.updated_at
      }))
    };
  }
});
async function restoreRow(row) {
  const existing = await findById(row.id);
  if (existing) {
    await host.storage.sql(
      `UPDATE items SET
         title = ?, description = ?, priority = ?, status = ?,
         due_date = ?, date_start = ?, remind_at = ?, reminder_enabled = ?,
         repeat_rule = ?, parent_id = ?, sort_order = ?, completed_at = ?,
         color = ?, tags = ?, created_at = ?, updated_at = ?
       WHERE id = ?`,
      [
        row.title,
        row.description,
        row.priority,
        row.status,
        row.due_date,
        row.date_start,
        row.remind_at,
        row.reminder_enabled,
        row.repeat_rule,
        row.parent_id,
        row.sort_order,
        row.completed_at,
        row.color,
        row.tags,
        row.created_at,
        row.updated_at,
        row.id
      ]
    );
  } else {
    await host.storage.sql(
      `INSERT INTO items
        (id, title, description, priority, status, due_date, date_start, remind_at,
         reminder_enabled, repeat_rule, parent_id, sort_order, completed_at, color, tags,
         created_at, updated_at)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        row.id,
        row.title,
        row.description,
        row.priority,
        row.status,
        row.due_date,
        row.date_start,
        row.remind_at,
        row.reminder_enabled,
        row.repeat_rule,
        row.parent_id,
        row.sort_order,
        row.completed_at,
        row.color,
        row.tags,
        row.created_at,
        row.updated_at
      ]
    );
  }
}
conn.registerPrompt(
  [
    "## \u3010Todo \u6307\u5357\u3011",
    "\u6838\u5FC3\uFF1A\u628A\u7528\u6237\u60F3\u6CD5\u843D\u6210\u53EF\u6267\u884C\u5F85\u529E\uFF0C\u5E76**\u5728\u65E5\u5386\u4E0A\u80FD\u88AB\u770B\u89C1**\u3002",
    "",
    "\u5173\u952E\u89C4\u5219\uFF1A",
    '- \u7528\u6237\u7ED9\u4E86**\u5177\u4F53\u65F6\u95F4\u70B9**\uFF08"10 \u70B9\u63D0\u9192\u6211 X"\u3001"\u660E\u65E9 8 \u70B9"\uFF09\u2192 **\u53EA\u586B dateStart \u548C remindAt**\uFF08\u90FD\u662F `YYYY-MM-DDTHH:mm`\uFF09\u3002**\u4E0D\u8981\u586B dueDate**\u2014\u2014\u540E\u7AEF\u4F1A\u81EA\u52A8\u8865\u4E00\u4E2A 30 \u5206\u949F\u7A97\u53E3\uFF1B\u4F60\u624B\u52A8\u585E\u4E00\u4E2A\u7EAF\u65E5\u671F\u7684 dueDate \u4F1A\u8BA9\u65E5\u5386\u628A\u8FD9\u6761\u753B\u6210\u6574\u5929\u957F\u6761\u3002',
    '- \u53EA\u9700\u8981\u63D0\u9192\u4E0D\u9700\u8981\u5177\u4F53\u65F6\u957F\uFF08"\u4E0B\u5468\u4E8C\u53BB\u533B\u9662"\uFF09\u2192 \u53EA\u586B dateStart\uFF08\u53EF\u542B\u65F6\u95F4\u6216\u4EC5\u65E5\u671F\uFF09\uFF0CdueDate \u7559\u7A7A\u3002',
    "- \u65E5\u671F\u683C\u5F0F\u7528 ISO\uFF1A\u4EC5\u65E5\u671F `YYYY-MM-DD`\uFF0C\u5E26\u65F6\u95F4 `YYYY-MM-DDTHH:mm`\uFF08\u672C\u5730\u65F6\u533A\uFF0C\u4E0D\u8981\u5E26 Z\uFF09\u3002**\u4E0D\u8981\u7ED9\u4E00\u8FB9\u5E26 T\uFF0C\u53E6\u4E00\u8FB9\u4E0D\u5E26 T \u7684\u6DF7\u5408\u683C\u5F0F\u3002**",
    '- \u7528\u6237\u8BF4"\u5B8C\u6210\u4E86 X" \u2192 `todo.update` \u628A status \u8BBE\u4E3A `completed`\uFF0C\u4E0D\u8981\u65B0\u5EFA\u3002',
    '- \u5C0F\u9897\u7C92"\u5E2E\u6211\u8BB0\u4E00\u4E0B" \u2192 \u76F4\u63A5 `todo.create`\uFF0C\u4E0D\u8D70 plan_card\u3002',
    '- \u4E0D\u8981\u4E3A\u4E86"\u5148\u786E\u8BA4\u4E00\u4E0B\u6709\u6CA1\u6709\u91CD\u590D"\u800C\u989D\u5916\u8C03\u7528 `todo.list`\u2014\u2014\u91CD\u590D\u4E0D\u662F\u95EE\u9898\uFF0C\u5570\u55E6\u624D\u662F\u3002',
    "",
    "\u521B\u5EFA\u6210\u529F\u540E\u7684\u56DE\u590D\uFF1A",
    '- UI \u5DF2\u7ECF\u6709\u4E00\u6761"\u5F85\u529E\u521B\u5EFA\u6210\u529F"\u7684\u56FE\u6807\u72B6\u6001\u884C\u4F5C\u4E3A\u7CFB\u7EDF\u53CD\u9988\u2014\u2014\u4F60\u4E0D\u9700\u8981\u518D\u91CD\u590D"\u6211\u5DF2\u521B\u5EFA / \u52A0\u597D\u4E86 / \u8BB0\u4E0B\u4E86"\u3002',
    '- \u4F46\u8981**\u7528\u81EA\u7136\u8BED\u8A00\u628A\u4E8B\u4EF6\u672C\u8EAB\u8BB2\u6E05**\uFF1A\u6807\u9898 + \u5177\u4F53\u65F6\u95F4\uFF08"\u660E\u65E9 8 \u70B9"\u800C\u975E ISO\uFF09+ \u63D0\u9192\u72B6\u6001\u30021 \u53E5\uFF0C\u6709\u6E29\u5EA6\uFF0C\u4E0D\u717D\u60C5\u3002'
  ].join("\n")
);
