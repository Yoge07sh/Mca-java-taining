/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 31908:
/***/ (function(__unused_webpack_module, exports) {

/*!
 * 1DS JS SDK Core, 4.2.2
 * Copyright (c) Microsoft and contributors. All rights reserved.
 * (Microsoft Internal Only)
 */
(function (global, factory) {
     true ? factory(exports) :
    0;
})(this, (function (exports) { 'use strict';

    var strShimFunction = "function";
    var strShimObject = "object";
    var strShimUndefined = "undefined";
    var strShimPrototype = "prototype";
    var ObjClass$1 = Object;
    var ObjProto$1 = ObjClass$1[strShimPrototype];

    /*! https://github.com/nevware21/ts-utils v0.11.2 */
    /*#__NO_SIDE_EFFECTS__*/
    function _pureAssign(func1, func2) {
        return func1 || func2;
    }
    /*#__NO_SIDE_EFFECTS__*/
    function _pureRef(value, name) {
        return value[name];
    }
    var UNDEF_VALUE = undefined;
    var NULL_VALUE = null;
    var EMPTY = "";
    var FUNCTION = "function";
    var OBJECT = "object";
    var PROTOTYPE = "prototype";
    var __PROTO__ = "__proto__";
    var UNDEFINED = "undefined";
    var CONSTRUCTOR = "constructor";
    var SYMBOL = "Symbol";
    var POLYFILL_TAG = "_polyfill";
    var LENGTH = "length";
    var NAME = "name";
    var CALL = "call";
    var TO_STRING = "toString";
    var ObjClass = ( /*#__PURE__*/_pureAssign(Object));
    var ObjProto = ( /*#__PURE__*/_pureRef(ObjClass, PROTOTYPE));
    var StrCls = ( /*#__PURE__*/_pureAssign(String));
    var StrProto = ( /*#__PURE__*/_pureRef(StrCls, PROTOTYPE));
    var MathCls = ( /*#__PURE__*/_pureAssign(Math));
    var ArrCls = ( /*#__PURE__*/_pureAssign(Array));
    var ArrProto = ( /*#__PURE__*/_pureRef(ArrCls, PROTOTYPE));
    var ArrSlice = ( /*#__PURE__*/_pureRef(ArrProto, "slice"));
    function safe(func, argArray) {
        try {
            return {
                v: func.apply(this, argArray)
            };
        }
        catch (e) {
            return { e: e };
        }
    }
    /*#__NO_SIDE_EFFECTS__*/
    function safeGet(cb, defValue) {
        var result = safe(cb);
        return result.e ? defValue : result.v;
    }
    var _primitiveTypes;
    /*#__NO_SIDE_EFFECTS__*/
    function _createIs(theType) {
        return function (value) {
            return typeof value === theType;
        };
    }
    /*#__NO_SIDE_EFFECTS__*/
    function _createObjIs(theName) {
        var theType = "[object " + theName + "]";
        return function (value) {
            return !!(value && objToString(value) === theType);
        };
    }
    /*#__NO_SIDE_EFFECTS__*/
    function objToString(value) {
        return ObjProto[TO_STRING].call(value);
    }
    /*#__NO_SIDE_EFFECTS__*/
    function isTypeof(value, theType) {
        return typeof value === theType;
    }
    /*#__NO_SIDE_EFFECTS__*/
    function isUndefined(value) {
        return typeof value === UNDEFINED || value === UNDEFINED;
    }
    /*#__NO_SIDE_EFFECTS__*/
    function isNullOrUndefined(value) {
        return value === NULL_VALUE || isUndefined(value);
    }
    /*#__NO_SIDE_EFFECTS__*/
    function isStrictNullOrUndefined(value) {
        return value === NULL_VALUE || !isDefined(value);
    }
    /*#__NO_SIDE_EFFECTS__*/
    function isDefined(arg) {
        return !!arg || arg !== UNDEF_VALUE;
    }
    /*#__NO_SIDE_EFFECTS__*/
    function isPrimitiveType(theType) {
        !_primitiveTypes && (_primitiveTypes = ["string", "number", "boolean", UNDEFINED, "symbol", "bigint"]);
        return theType !== OBJECT && _primitiveTypes.indexOf(theType) !== -1;
    }
    var isString = ( /*#__PURE__*/_createIs("string"));
    var isFunction = ( /*#__PURE__*/_createIs(FUNCTION));
    /*#__NO_SIDE_EFFECTS__*/
    function isObject(value) {
        if (!value && isNullOrUndefined(value)) {
            return false;
        }
        return !!value && typeof value === OBJECT;
    }
    var isArray = ( /* #__PURE__*/_pureRef(ArrCls, "isArray"));
    var isDate = ( /*#__PURE__*/_createObjIs("Date"));
    var isNumber = ( /*#__PURE__*/_createIs("number"));
    var isBoolean = ( /*#__PURE__*/_createIs("boolean"));
    var isError = ( /*#__PURE__*/_createObjIs("Error"));
    /*#__NO_SIDE_EFFECTS__*/
    function isPromiseLike(value) {
        return !!(value && value.then && isFunction(value.then));
    }
    /*#__NO_SIDE_EFFECTS__*/
    function isNotTruthy(value) {
        return !value || !isTruthy(value);
    }
    /*#__NO_SIDE_EFFECTS__*/
    function isTruthy(value) {
        return !(!value || safeGet(function () { return !(value && (0 + value)); }, !value));
    }
    var objGetOwnPropertyDescriptor = ( /* #__PURE__ */_pureRef(ObjClass, "getOwnPropertyDescriptor"));
    /*#__NO_SIDE_EFFECTS__*/
    function objHasOwnProperty(obj, prop) {
        return !!obj && ObjProto.hasOwnProperty[CALL](obj, prop);
    }
    var objHasOwn = ( /*#__PURE__*/_pureAssign(( /* #__PURE__ */_pureRef(ObjClass, "hasOwn")), polyObjHasOwn));
    /*#__NO_SIDE_EFFECTS__*/
    function polyObjHasOwn(obj, prop) {
        return objHasOwnProperty(obj, prop) || !!objGetOwnPropertyDescriptor(obj, prop);
    }
    function objForEachKey(theObject, callbackfn, thisArg) {
        if (theObject && isObject(theObject)) {
            for (var prop in theObject) {
                if (objHasOwn(theObject, prop)) {
                    if (callbackfn[CALL](thisArg || theObject, prop, theObject[prop]) === -1) {
                        break;
                    }
                }
            }
        }
    }
    /*#__NO_SIDE_EFFECTS__*/
    function _createKeyValueMap(values, keyType, valueType, completeFn) {
        var theMap = {};
        objForEachKey(values, function (key, value) {
            theMap[key] = keyType ? value : key;
            theMap[value] = valueType ? value : key;
        });
        return completeFn(theMap);
    }
    var asString = ( /* #__PURE__ */_pureAssign(StrCls));
    var ERROR_TYPE = "[object Error]";
    /*#__NO_SIDE_EFFECTS__*/
    function dumpObj(object, format) {
        var propertyValueDump = EMPTY;
        var objType = ObjProto[TO_STRING][CALL](object);
        if (objType === ERROR_TYPE) {
            object = { stack: asString(object.stack), message: asString(object.message), name: asString(object.name) };
        }
        try {
            propertyValueDump = JSON.stringify(object, NULL_VALUE, format ? ((typeof format === "number") ? format : 4) : UNDEF_VALUE);
            propertyValueDump = (propertyValueDump && propertyValueDump.replace(/"(\w+)"\s*:\s{0,1}/g, "$1: ")) || asString(object);
        }
        catch (e) {
            propertyValueDump = " - " + dumpObj(e, format);
        }
        return objType + ": " + propertyValueDump;
    }
    function throwError(message) {
        throw new Error(message);
    }
    function throwTypeError(message) {
        throw new TypeError(message);
    }
    var _objFreeze = ( /* #__PURE__ */_pureRef(ObjClass, "freeze"));
    function _doNothing(value) {
        return value;
    }
    /*#__NO_SIDE_EFFECTS__*/
    function _getProto(value) {
        return value[__PROTO__] || NULL_VALUE;
    }
    var objAssign = ( /*#__PURE__*/_pureRef(ObjClass, "assign"));
    var objKeys = ( /*#__PURE__*/_pureRef(ObjClass, "keys"));
    function objDeepFreeze(value) {
        if (_objFreeze) {
            objForEachKey(value, function (key, value) {
                if (isArray(value) || isObject(value)) {
                    _objFreeze(value);
                }
            });
        }
        return objFreeze(value);
    }
    var objFreeze = ( /* #__PURE__*/_pureAssign(_objFreeze, _doNothing));
    var objSeal = ( /* #__PURE__*/_pureAssign(( /* #__PURE__*/_pureRef(ObjClass, "seal")), _doNothing));
    var objGetPrototypeOf = ( /* #__PURE__*/_pureAssign(( /* #__PURE__*/_pureRef(ObjClass, "getPrototypeOf")), _getProto));
    /*#__NO_SIDE_EFFECTS__*/
    function createEnum(values) {
        return _createKeyValueMap(values, 1 , 0 , objDeepFreeze);
    }
    /*#__NO_SIDE_EFFECTS__*/
    function createEnumKeyMap(values) {
        return _createKeyValueMap(values, 0 , 0 , objDeepFreeze);
    }
    var _wellKnownSymbolMap = /*#__PURE__*/ createEnumKeyMap({
        asyncIterator: 0 ,
        hasInstance: 1 ,
        isConcatSpreadable: 2 ,
        iterator: 3 ,
        match: 4 ,
        matchAll: 5 ,
        replace: 6 ,
        search: 7 ,
        species: 8 ,
        split: 9 ,
        toPrimitive: 10 ,
        toStringTag: 11 ,
        unscopables: 12
    });
    var GLOBAL_CONFIG_KEY = "__tsUtils$gblCfg";
    var _globalCfg;
    /*#__NO_SIDE_EFFECTS__*/
    function _getGlobalValue() {
        var result;
        if (typeof globalThis !== UNDEFINED) {
            result = globalThis;
        }
        if (!result && typeof self !== UNDEFINED) {
            result = self;
        }
        if (!result && typeof window !== UNDEFINED) {
            result = window;
        }
        if (!result && typeof global !== UNDEFINED) {
            result = global;
        }
        return result;
    }
    /*#__NO_SIDE_EFFECTS__*/
    function _getGlobalConfig() {
        if (!_globalCfg) {
            var gbl = safe(_getGlobalValue).v || {};
            _globalCfg = gbl[GLOBAL_CONFIG_KEY] = gbl[GLOBAL_CONFIG_KEY] || {};
        }
        return _globalCfg;
    }
    var _unwrapFunction = ( _unwrapFunctionWithPoly);
    /*#__NO_SIDE_EFFECTS__*/
    function _unwrapFunctionWithPoly(funcName, clsProto, polyFunc) {
        var clsFn = clsProto && clsProto[funcName];
        return function (thisArg) {
            var theFunc = (thisArg && thisArg[funcName]) || clsFn;
            if (theFunc || polyFunc) {
                var theArgs = arguments;
                return (theFunc || polyFunc).apply(thisArg, theFunc ? ArrSlice[CALL](theArgs, 1) : theArgs);
            }
            throwTypeError("\"" + asString(funcName) + "\" not defined for " + dumpObj(thisArg));
        };
    }
    /*#__NO_SIDE_EFFECTS__*/
    function _unwrapProp(propName) {
        return function (thisArg) {
            return thisArg[propName];
        };
    }
    var mathMax = ( /*#__PURE__*/_pureRef(MathCls, "max"));
    var strSlice = ( /*#__PURE__*/_unwrapFunction("slice", StrProto));
    var strSubstring = ( /*#__PURE__*/_unwrapFunction("substring", StrProto));
    var strSubstr = ( /*#__PURE__*/_unwrapFunctionWithPoly("substr", StrProto, polyStrSubstr));
    /*#__NO_SIDE_EFFECTS__*/
    function polyStrSubstr(value, start, length) {
        if (isNullOrUndefined(value)) {
            throwTypeError("Invalid " + dumpObj(value));
        }
        if (length < 0) {
            return EMPTY;
        }
        start = start || 0;
        if (start < 0) {
            start = mathMax(start + value[LENGTH], 0);
        }
        if (isUndefined(length)) {
            return strSlice(value, start);
        }
        return strSlice(value, start, start + length);
    }
    /*#__NO_SIDE_EFFECTS__*/
    function strLeft(value, count) {
        return strSubstring(value, 0, count);
    }
    var UNIQUE_REGISTRY_ID = "_urid";
    var _polySymbols;
    /*#__NO_SIDE_EFFECTS__*/
    function _globalSymbolRegistry() {
        if (!_polySymbols) {
            var gblCfg = _getGlobalConfig();
            _polySymbols = gblCfg.gblSym = gblCfg.gblSym || { k: {}, s: {} };
        }
        return _polySymbols;
    }
    var _wellKnownSymbolCache;
    /*#__NO_SIDE_EFFECTS__*/
    function polyNewSymbol(description) {
        var theSymbol = {
            description: asString(description),
            toString: function () { return SYMBOL + "(" + description + ")"; }
        };
        theSymbol[POLYFILL_TAG] = true;
        return theSymbol;
    }
    /*#__NO_SIDE_EFFECTS__*/
    function polySymbolFor(key) {
        var registry = _globalSymbolRegistry();
        if (!objHasOwn(registry.k, key)) {
            var newSymbol_1 = polyNewSymbol(key);
            var regId_1 = objKeys(registry.s).length;
            newSymbol_1[UNIQUE_REGISTRY_ID] = function () { return regId_1 + "_" + newSymbol_1[TO_STRING](); };
            registry.k[key] = newSymbol_1;
            registry.s[newSymbol_1[UNIQUE_REGISTRY_ID]()] = asString(key);
        }
        return registry.k[key];
    }
    /*#__NO_SIDE_EFFECTS__*/
    function polyGetKnownSymbol(name) {
        !_wellKnownSymbolCache && (_wellKnownSymbolCache = {});
        var result;
        var knownName = _wellKnownSymbolMap[name];
        if (knownName) {
            result = _wellKnownSymbolCache[knownName] = _wellKnownSymbolCache[knownName] || polyNewSymbol(SYMBOL + "." + knownName);
        }
        return result;
    }
    var propMap = {
        e: "enumerable",
        c: "configurable",
        v: "value",
        w: "writable",
        g: "get",
        s: "set"
    };
    /*#__NO_SIDE_EFFECTS__*/
    function _createProp(value) {
        var prop = {};
        prop[propMap["c"]] = true;
        prop[propMap["e"]] = true;
        if (value.l) {
            prop.get = function () { return value.l.v; };
            var desc = objGetOwnPropertyDescriptor(value.l, "v");
            if (desc && desc.set) {
                prop.set = function (newValue) {
                    value.l.v = newValue;
                };
            }
        }
        objForEachKey(value, function (key, value) {
            prop[propMap[key]] = isUndefined(value) ? prop[propMap[key]] : value;
        });
        return prop;
    }
    var objDefineProp = ( /*#__PURE__*/_pureRef(ObjClass, "defineProperty"));
    function objDefineAccessors(target, prop, getProp, setProp, configurable, enumerable) {
        var desc = {
            e: enumerable,
            c: configurable
        };
        if (getProp) {
            desc.g = getProp;
        }
        if (setProp) {
            desc.s = setProp;
        }
        return objDefineProp(target, prop, _createProp(desc));
    }
    function objDefine(target, key, propDesc) {
        return objDefineProp(target, key, _createProp(propDesc));
    }
    var _globalLazyTestHooks;
    function _initTestHooks() {
        _globalLazyTestHooks = _getGlobalConfig();
    }
    /*#__NO_SIDE_EFFECTS__*/
    function getLazy(cb) {
        var lazyValue = {};
        !_globalLazyTestHooks && _initTestHooks();
        lazyValue.b = _globalLazyTestHooks.lzy;
        objDefineProp(lazyValue, "v", {
            configurable: true,
            get: function () {
                var result = cb();
                if (!_globalLazyTestHooks.lzy) {
                    objDefineProp(lazyValue, "v", {
                        value: result
                    });
                }
                lazyValue.b = _globalLazyTestHooks.lzy;
                return result;
            }
        });
        return lazyValue;
    }
    /*#__NO_SIDE_EFFECTS__*/
    function createCachedValue(value) {
        return objDefineProp({
            toJSON: function () { return value; }
        }, "v", { value: value });
    }
    var WINDOW = "window";
    var _cachedGlobal;
    function _getGlobalInstFn(getFn, theArgs) {
        var cachedValue;
        return function () {
            !_globalLazyTestHooks && _initTestHooks();
            (!cachedValue || _globalLazyTestHooks.lzy) && (cachedValue = createCachedValue(safe(getFn, theArgs).v));
            return cachedValue.v;
        };
    }
    /*#__NO_SIDE_EFFECTS__*/
    function getGlobal(useCached) {
        !_globalLazyTestHooks && _initTestHooks();
        (!_cachedGlobal || useCached === false || _globalLazyTestHooks.lzy) && (_cachedGlobal = createCachedValue(safe(_getGlobalValue).v || NULL_VALUE));
        return _cachedGlobal.v;
    }
    /*#__NO_SIDE_EFFECTS__*/
    function getInst(name, useCached) {
        var gbl = (!_cachedGlobal || useCached === false) ? getGlobal(useCached) : _cachedGlobal.v;
        if (gbl && gbl[name]) {
            return gbl[name];
        }
        if (name === WINDOW) {
            return getWindow();
        }
        return NULL_VALUE;
    }
    /*#__NO_SIDE_EFFECTS__*/
    function hasDocument() {
        return !!( /*#__PURE__*/getDocument());
    }
    var getDocument = ( /*#__PURE__*/_getGlobalInstFn(getInst, ["document"]));
    /*#__NO_SIDE_EFFECTS__*/
    function hasWindow() {
        return !!( /*#__PURE__*/getWindow());
    }
    var getWindow = ( /*#__PURE__*/_getGlobalInstFn(getInst, [WINDOW]));
    /*#__NO_SIDE_EFFECTS__*/
    function hasNavigator() {
        return !!( /*#__PURE__*/getNavigator());
    }
    var getNavigator = ( /*#__PURE__*/_getGlobalInstFn(getInst, ["navigator"]));
    /*#__NO_SIDE_EFFECTS__*/
    function hasHistory() {
        return !!( /*#__PURE__*/getHistory());
    }
    var getHistory = ( /*#__PURE__*/_getGlobalInstFn(getInst, ["history"]));
    var isNode = ( /*#__PURE__*/_getGlobalInstFn(function () {
        return !!( safe(function () { return (process && (process.versions || {}).node); }).v);
    }));
    var _symbol;
    var _symbolFor;
    /*#__NO_SIDE_EFFECTS__*/
    function _initSymbol() {
        _symbol = ( /*#__PURE__*/createCachedValue(safe((getInst), [SYMBOL]).v));
        return _symbol;
    }
    function _getSymbolKey(key) {
        var gblSym = ((!_globalLazyTestHooks.lzy ? _symbol : 0) || _initSymbol());
        return (gblSym.v ? gblSym.v[key] : UNDEF_VALUE);
    }
    /*#__NO_SIDE_EFFECTS__*/
    function hasSymbol() {
        return !!( /*#__PURE__*/getSymbol());
    }
    /*#__NO_SIDE_EFFECTS__*/
    function getSymbol() {
        !_globalLazyTestHooks && _initTestHooks();
        return ((!_globalLazyTestHooks.lzy ? _symbol : 0) || _initSymbol()).v;
    }
    /*#__NO_SIDE_EFFECTS__*/
    function getKnownSymbol(name, noPoly) {
        var knownName = _wellKnownSymbolMap[name];
        !_globalLazyTestHooks && _initTestHooks();
        var sym = ((!_globalLazyTestHooks.lzy ? _symbol : 0) || _initSymbol());
        return sym.v ? sym.v[knownName || name] : (!noPoly ? polyGetKnownSymbol(name) : UNDEF_VALUE);
    }
    /*#__NO_SIDE_EFFECTS__*/
    function newSymbol(description, noPoly) {
        !_globalLazyTestHooks && _initTestHooks();
        var sym = ((!_globalLazyTestHooks.lzy ? _symbol : 0) || _initSymbol());
        return sym.v ? sym.v(description) : (!noPoly ? polyNewSymbol(description) : NULL_VALUE);
    }
    /*#__NO_SIDE_EFFECTS__*/
    function symbolFor(key) {
        !_globalLazyTestHooks && _initTestHooks();
        _symbolFor = ((!_globalLazyTestHooks.lzy ? _symbolFor : 0) || ( /*#__PURE__*/createCachedValue(safe((_getSymbolKey), ["for"]).v)));
        return (_symbolFor.v || polySymbolFor)(key);
    }
    /*#__NO_SIDE_EFFECTS__*/
    function isIterator(value) {
        return !!value && isFunction(value.next);
    }
    /*#__NO_SIDE_EFFECTS__*/
    function isIterable(value) {
        return !isStrictNullOrUndefined(value) && isFunction(value[getKnownSymbol(3 )]);
    }
    var _iterSymbol$1;
    function iterForOf(iter, callbackfn, thisArg) {
        if (iter) {
            if (!isIterator(iter)) {
                !_iterSymbol$1 && (_iterSymbol$1 = createCachedValue(getKnownSymbol(3 )));
                iter = iter[_iterSymbol$1.v] ? iter[_iterSymbol$1.v]() : null;
            }
            if (isIterator(iter)) {
                var err = UNDEF_VALUE;
                var iterResult = UNDEF_VALUE;
                try {
                    var count = 0;
                    while (!(iterResult = iter.next()).done) {
                        if (callbackfn[CALL](thisArg || iter, iterResult.value, count, iter) === -1) {
                            break;
                        }
                        count++;
                    }
                }
                catch (failed) {
                    err = { e: failed };
                    if (iter.throw) {
                        iterResult = NULL_VALUE;
                        iter.throw(err);
                    }
                }
                finally {
                    try {
                        if (iterResult && !iterResult.done) {
                            iter.return && iter.return(iterResult);
                        }
                    }
                    finally {
                        if (err) {
                            throw err.e;
                        }
                    }
                }
            }
        }
    }
    function fnApply(fn, thisArg, argArray) {
        return fn.apply(thisArg, argArray);
    }
    function arrAppend(target, elms) {
        if (!isUndefined(elms) && target) {
            if (isArray(elms)) {
                fnApply(target.push, target, elms);
            }
            else if (isIterator(elms) || isIterable(elms)) {
                iterForOf(elms, function (elm) {
                    target.push(elm);
                });
            }
            else {
                target.push(elms);
            }
        }
        return target;
    }
    function arrForEach(theArray, callbackfn, thisArg) {
        if (theArray) {
            var len = theArray[LENGTH] >>> 0;
            for (var idx = 0; idx < len; idx++) {
                if (idx in theArray) {
                    if (callbackfn[CALL](thisArg || theArray, theArray[idx], idx, theArray) === -1) {
                        break;
                    }
                }
            }
        }
    }
    var arrIndexOf = ( /*#__PURE__*/_unwrapFunction("indexOf", ArrProto));
    var arrMap = ( /*#__PURE__*/_unwrapFunction("map", ArrProto));
    function arrSlice(theArray, start, end) {
        return ((theArray && theArray["slice"]) || ArrSlice).apply(theArray, ArrSlice[CALL](arguments, 1));
    }
    /*#__NO_SIDE_EFFECTS__*/
    function polyArrIncludes(theArray, searchElement, fromIndex) {
        return arrIndexOf(theArray, searchElement, fromIndex) !== -1;
    }
    var arrIncludes = ( /*#__PURE__*/_unwrapFunctionWithPoly("includes", ArrProto, polyArrIncludes));
    var arrReduce = ( /*#__PURE__*/_unwrapFunction("reduce", ArrProto));
    var objCreate = ( /* #__PURE__*/_pureAssign(( /* #__PURE__*/_pureRef(ObjClass, "create")), polyObjCreate));
    /*#__NO_SIDE_EFFECTS__*/
    function polyObjCreate(obj) {
        if (!obj) {
            return {};
        }
        var type = typeof obj;
        if (type !== OBJECT && type !== FUNCTION) {
            throwTypeError("Prototype must be an Object or function: " + dumpObj(obj));
        }
        function tempFunc() { }
        tempFunc[PROTOTYPE] = obj;
        return new tempFunc();
    }
    var _isProtoArray;
    function objSetPrototypeOf(obj, proto) {
        var fn = ObjClass["setPrototypeOf"] ||
            function (d, b) {
                var _a;
                !_isProtoArray && (_isProtoArray = createCachedValue((_a = {}, _a[__PROTO__] = [], _a) instanceof Array));
                _isProtoArray.v ? d[__PROTO__] = b : objForEachKey(b, function (key, value) { return d[key] = value; });
            };
        return fn(obj, proto);
    }
    /*#__NO_SIDE_EFFECTS__*/
    function _createCustomError(name, d, b) {
        safe(objDefine, [d, NAME, { v: name, c: true, e: false }]);
        d = objSetPrototypeOf(d, b);
        function __() {
            this[CONSTRUCTOR] = d;
            safe(objDefine, [this, NAME, { v: name, c: true, e: false }]);
        }
        d[PROTOTYPE] = b === NULL_VALUE ? objCreate(b) : (__[PROTOTYPE] = b[PROTOTYPE], new __());
        return d;
    }
    function _setName(baseClass, name) {
        name && (baseClass[NAME] = name);
    }
    /*#__NO_SIDE_EFFECTS__*/
    function createCustomError(name, constructCb, errorBase) {
        var theBaseClass = errorBase || Error;
        var orgName = theBaseClass[PROTOTYPE][NAME];
        var captureFn = Error.captureStackTrace;
        return _createCustomError(name, function () {
            var _this = this;
            var theArgs = arguments;
            try {
                safe(_setName, [theBaseClass, name]);
                var _self = fnApply(theBaseClass, _this, ArrSlice[CALL](theArgs)) || _this;
                if (_self !== _this) {
                    var orgProto = objGetPrototypeOf(_this);
                    if (orgProto !== objGetPrototypeOf(_self)) {
                        objSetPrototypeOf(_self, orgProto);
                    }
                }
                captureFn && captureFn(_self, _this[CONSTRUCTOR]);
                constructCb && constructCb(_self, theArgs);
                return _self;
            }
            finally {
                safe(_setName, [theBaseClass, orgName]);
            }
        }, theBaseClass);
    }
    /*#__NO_SIDE_EFFECTS__*/
    function utcNow() {
        return (Date.now || polyUtcNow)();
    }
    /*#__NO_SIDE_EFFECTS__*/
    function polyUtcNow() {
        return new Date().getTime();
    }
    /*#__NO_SIDE_EFFECTS__*/
    function _createTrimFn(exp) {
        return function _doTrim(value) {
            if (isNullOrUndefined(value)) {
                throwTypeError("strTrim called [" + dumpObj(value) + "]");
            }
            if (value && value.replace) {
                value = value.replace(exp, EMPTY);
            }
            return value;
        };
    }
    var polyStrTrim = ( /*#__PURE__*/_createTrimFn(/^\s+|(?=\s)\s+$/g));
    var strTrim = ( /*#__PURE__*/_unwrapFunctionWithPoly("trim", StrProto, polyStrTrim));
    var _fnToString;
    var _objCtrFnString;
    var _gblWindow;
    /*#__NO_SIDE_EFFECTS__*/
    function isPlainObject(value) {
        if (!value || typeof value !== OBJECT) {
            return false;
        }
        if (!_gblWindow) {
            _gblWindow = hasWindow() ? getWindow() : true;
        }
        var result = false;
        if (value !== _gblWindow) {
            if (!_objCtrFnString) {
                _fnToString = Function[PROTOTYPE][TO_STRING];
                _objCtrFnString = _fnToString[CALL](ObjClass);
            }
            try {
                var proto = objGetPrototypeOf(value);
                result = !proto;
                if (!result) {
                    if (objHasOwnProperty(proto, CONSTRUCTOR)) {
                        proto = proto[CONSTRUCTOR];
                    }
                    result = proto && typeof proto === FUNCTION && _fnToString[CALL](proto) === _objCtrFnString;
                }
            }
            catch (ex) {
            }
        }
        return result;
    }
    /*#__NO_SIDE_EFFECTS__*/
    function _defaultDeepCopyHandler(details) {
        details.value && plainObjDeepCopyHandler(details);
        return true;
    }
    var defaultDeepCopyHandlers = [
        arrayDeepCopyHandler,
        plainObjDeepCopyHandler,
        functionDeepCopyHandler,
        dateDeepCopyHandler
    ];
    /*#__NO_SIDE_EFFECTS__*/
    function _getSetVisited(visitMap, source, newPath, cb) {
        var theEntry;
        arrForEach(visitMap, function (entry) {
            if (entry.k === source) {
                theEntry = entry;
                return -1;
            }
        });
        if (!theEntry) {
            theEntry = { k: source, v: source };
            visitMap.push(theEntry);
            cb(theEntry);
        }
        return theEntry.v;
    }
    function _deepCopy(visitMap, value, ctx, key) {
        var userHandler = ctx.handler;
        var newPath = ctx.path ? (key ? ctx.path.concat(key) : ctx.path) : [];
        var newCtx = {
            handler: ctx.handler,
            src: ctx.src,
            path: newPath
        };
        var theType = typeof value;
        var isPlain = false;
        var isPrim = false;
        if (value && theType === OBJECT) {
            isPlain = isPlainObject(value);
        }
        else {
            isPrim = value === NULL_VALUE || isPrimitiveType(theType);
        }
        var details = {
            type: theType,
            isPrim: isPrim,
            isPlain: isPlain,
            value: value,
            result: value,
            path: newPath,
            origin: ctx.src,
            copy: function (source, newKey) {
                return _deepCopy(visitMap, source, newKey ? newCtx : ctx, newKey);
            },
            copyTo: function (target, source) {
                return _copyProps(visitMap, target, source, newCtx);
            }
        };
        if (!details.isPrim) {
            return _getSetVisited(visitMap, value, newPath, function (newEntry) {
                objDefine(details, "result", {
                    g: function () {
                        return newEntry.v;
                    },
                    s: function (newValue) {
                        newEntry.v = newValue;
                    }
                });
                var idx = 0;
                var handler = userHandler;
                while (!(handler || (idx < defaultDeepCopyHandlers.length ? defaultDeepCopyHandlers[idx++] : _defaultDeepCopyHandler))[CALL](ctx, details)) {
                    handler = NULL_VALUE;
                }
            });
        }
        if (userHandler && userHandler[CALL](ctx, details)) {
            return details.result;
        }
        return value;
    }
    function _copyProps(visitMap, target, source, ctx) {
        if (!isNullOrUndefined(source)) {
            for (var key in source) {
                target[key] = _deepCopy(visitMap, source[key], ctx, key);
            }
        }
        return target;
    }
    function objCopyProps(target, source, handler) {
        var ctx = {
            handler: handler,
            src: source,
            path: []
        };
        return _copyProps([], target, source, ctx);
    }
    /*#__NO_SIDE_EFFECTS__*/
    function objDeepCopy(source, handler) {
        var ctx = {
            handler: handler,
            src: source
        };
        return _deepCopy([], source, ctx);
    }
    function arrayDeepCopyHandler(details) {
        var value = details.value;
        if (isArray(value)) {
            var target = details.result = [];
            target.length = value.length;
            details.copyTo(target, value);
            return true;
        }
        return false;
    }
    function dateDeepCopyHandler(details) {
        var value = details.value;
        if (isDate(value)) {
            details.result = new Date(value.getTime());
            return true;
        }
        return false;
    }
    function functionDeepCopyHandler(details) {
        if (details.type === FUNCTION) {
            return true;
        }
        return false;
    }
    function plainObjDeepCopyHandler(details) {
        var value = details.value;
        if (value && details.isPlain) {
            var target = details.result = {};
            details.copyTo(target, value);
            return true;
        }
        return false;
    }
    function _doExtend(target, theArgs) {
        arrForEach(theArgs, function (theArg) {
            objCopyProps(target, theArg);
        });
        return target;
    }
    function deepExtend(target, obj1, obj2, obj3, obj4, obj5, obj6) {
        return _doExtend(objDeepCopy(target) || {}, ArrSlice[CALL](arguments));
    }
    var getLength = ( /*#__PURE__*/_unwrapProp(LENGTH));
    var _perf;
    /*#__NO_SIDE_EFFECTS__*/
    function getPerformance() {
        !_globalLazyTestHooks && _initTestHooks();
        (!_perf || _globalLazyTestHooks.lzy) && (_perf = createCachedValue(safe((getInst), ["performance"]).v));
        return _perf.v;
    }
    /*#__NO_SIDE_EFFECTS__*/
    function perfNow() {
        var perf = getPerformance();
        if (perf && perf.now) {
            return perf.now();
        }
        return utcNow();
    }
    var strEndsWith = ( /*#__PURE__*/_unwrapFunctionWithPoly("endsWith", StrProto, polyStrEndsWith));
    /*#__NO_SIDE_EFFECTS__*/
    function polyStrEndsWith(value, searchString, length) {
        if (!isString(value)) {
            throwTypeError("'" + dumpObj(value) + "' is not a string");
        }
        var searchValue = isString(searchString) ? searchString : asString(searchString);
        var end = !isUndefined(length) && length < value[LENGTH] ? length : value[LENGTH];
        return strSubstring(value, end - searchValue[LENGTH], end) === searchValue;
    }
    var strIndexOf = ( /*#__PURE__*/_unwrapFunction("indexOf", StrProto));
    var strStartsWith = ( /*#__PURE__*/_unwrapFunctionWithPoly("startsWith", StrProto, polyStrStartsWith));
    /*#__NO_SIDE_EFFECTS__*/
    function polyStrStartsWith(value, searchString, position) {
        if (!isString(value)) {
            throwTypeError("'" + dumpObj(value) + "' is not a string");
        }
        var searchValue = isString(searchString) ? searchString : asString(searchString);
        var pos = position > 0 ? position : 0;
        return strSubstring(value, pos, pos + searchValue[LENGTH]) === searchValue;
    }
    var REF = "ref";
    var UNREF = "unref";
    var HAS_REF = "hasRef";
    var ENABLED = "enabled";
    /*#__NO_SIDE_EFFECTS__*/
    function _createTimerHandler(startTimer, refreshFn, cancelFn) {
        var ref = true;
        var timerId = startTimer ? refreshFn(NULL_VALUE) : NULL_VALUE;
        var theTimerHandler;
        function _unref() {
            ref = false;
            timerId && timerId[UNREF] && timerId[UNREF]();
            return theTimerHandler;
        }
        function _cancel() {
            timerId && cancelFn(timerId);
            timerId = NULL_VALUE;
        }
        function _refresh() {
            timerId = refreshFn(timerId);
            if (!ref) {
                _unref();
            }
            return theTimerHandler;
        }
        function _setEnabled(value) {
            !value && timerId && _cancel();
            value && !timerId && _refresh();
        }
        theTimerHandler = {
            cancel: _cancel,
            refresh: _refresh
        };
        theTimerHandler[HAS_REF] = function () {
            if (timerId && timerId[HAS_REF]) {
                return timerId[HAS_REF]();
            }
            return ref;
        };
        theTimerHandler[REF] = function () {
            ref = true;
            timerId && timerId[REF] && timerId[REF]();
            return theTimerHandler;
        };
        theTimerHandler[UNREF] = _unref;
        theTimerHandler = objDefineProp(theTimerHandler, ENABLED, {
            get: function () { return !!timerId; },
            set: _setEnabled
        });
        return {
            h: theTimerHandler,
            dn: function () {
                timerId = NULL_VALUE;
            }
        };
    }
    function _createTimeoutWith(startTimer, overrideFn, theArgs) {
        var isArr = isArray(overrideFn);
        var len = isArr ? overrideFn.length : 0;
        var setFn = (len > 0 ? overrideFn[0] : (!isArr ? overrideFn : UNDEF_VALUE)) || setTimeout;
        var clearFn = (len > 1 ? overrideFn[1] : UNDEF_VALUE) || clearTimeout;
        var timerFn = theArgs[0];
        theArgs[0] = function () {
            handler.dn();
            fnApply(timerFn, UNDEF_VALUE, ArrSlice[CALL](arguments));
        };
        var handler = _createTimerHandler(startTimer, function (timerId) {
            if (timerId) {
                if (timerId.refresh) {
                    timerId.refresh();
                    return timerId;
                }
                fnApply(clearFn, UNDEF_VALUE, [timerId]);
            }
            return fnApply(setFn, UNDEF_VALUE, theArgs);
        }, function (timerId) {
            fnApply(clearFn, UNDEF_VALUE, [timerId]);
        });
        return handler.h;
    }
    function scheduleTimeout(callback, timeout) {
        return _createTimeoutWith(true, UNDEF_VALUE, ArrSlice[CALL](arguments));
    }
    function createTimeout(callback, timeout) {
        return _createTimeoutWith(false, UNDEF_VALUE, ArrSlice[CALL](arguments));
    }

    var strHasOwnProperty = "hasOwnProperty";
    var extendStaticsFn = function (d, b) {
        extendStaticsFn = ObjClass$1["setPrototypeOf"] ||
            ({ __proto__: [] } instanceof Array && function (d, b) {
                d.__proto__ = b;
            }) ||
            function (d, b) {
                for (var p in b) {
                    if (b[strHasOwnProperty](p)) {
                        d[p] = b[p];
                    }
                }
            };
        return extendStaticsFn(d, b);
    };
    function __extendsFn(d, b) {
        if (typeof b !== strShimFunction && b !== null) {
            throwTypeError("Class extends value " + String(b) + " is not a constructor or null");
        }
        extendStaticsFn(d, b);
        function __() {
            this.constructor = d;
        }
        d[strShimPrototype] = b === null ? objCreate(b) : (__[strShimPrototype] = b[strShimPrototype], new __());
    }
    function __spreadArrayFn(to, from) {
        for (var i = 0, il = from.length, j = to.length; i < il; i++, j++) {
            to[j] = from[i];
        }
        return to;
    }

    var _a$5;
    var Constructor = 'constructor';
    var Prototype = 'prototype';
    var strFunction = 'function';
    var DynInstFuncTable = '_dynInstFuncs';
    var DynProxyTag = '_isDynProxy';
    var DynClassName = '_dynClass';
    var DynClassNamePrefix = '_dynCls$';
    var DynInstChkTag = '_dynInstChk';
    var DynAllowInstChkTag = DynInstChkTag;
    var DynProtoDefaultOptions = '_dfOpts';
    var UnknownValue = '_unknown_';
    var str__Proto = "__proto__";
    var DynProtoBaseProto = "_dyn" + str__Proto;
    var DynProtoGlobalSettings = "__dynProto$Gbl";
    var DynProtoCurrent = "_dynInstProto";
    var strUseBaseInst = 'useBaseInst';
    var strSetInstFuncs = 'setInstFuncs';
    var Obj = Object;
    var _objGetPrototypeOf = Obj["getPrototypeOf"];
    var _objGetOwnProps = Obj["getOwnPropertyNames"];
    var _gbl = getGlobal();
    var _gblInst = _gbl[DynProtoGlobalSettings] || (_gbl[DynProtoGlobalSettings] = {
        o: (_a$5 = {},
            _a$5[strSetInstFuncs] = true,
            _a$5[strUseBaseInst] = true,
            _a$5),
        n: 1000
    });
    function _isObjectOrArrayPrototype(target) {
        return target && (target === Obj[Prototype] || target === Array[Prototype]);
    }
    function _isObjectArrayOrFunctionPrototype(target) {
        return _isObjectOrArrayPrototype(target) || target === Function[Prototype];
    }
    function _getObjProto(target) {
        var newProto;
        if (target) {
            if (_objGetPrototypeOf) {
                return _objGetPrototypeOf(target);
            }
            var curProto = target[str__Proto] || target[Prototype] || (target[Constructor] ? target[Constructor][Prototype] : null);
            newProto = target[DynProtoBaseProto] || curProto;
            if (!objHasOwnProperty(target, DynProtoBaseProto)) {
                delete target[DynProtoCurrent];
                newProto = target[DynProtoBaseProto] = target[DynProtoCurrent] || target[DynProtoBaseProto];
                target[DynProtoCurrent] = curProto;
            }
        }
        return newProto;
    }
    function _forEachProp(target, func) {
        var props = [];
        if (_objGetOwnProps) {
            props = _objGetOwnProps(target);
        }
        else {
            for (var name_1 in target) {
                if (typeof name_1 === "string" && objHasOwnProperty(target, name_1)) {
                    props.push(name_1);
                }
            }
        }
        if (props && props.length > 0) {
            for (var lp = 0; lp < props.length; lp++) {
                func(props[lp]);
            }
        }
    }
    function _isDynamicCandidate(target, funcName, skipOwn) {
        return (funcName !== Constructor && typeof target[funcName] === strFunction && (skipOwn || objHasOwnProperty(target, funcName)) && funcName !== str__Proto && funcName !== Prototype);
    }
    function _throwTypeError(message) {
        throwTypeError("DynamicProto: " + message);
    }
    function _getInstanceFuncs(thisTarget) {
        var instFuncs = objCreate(null);
        _forEachProp(thisTarget, function (name) {
            if (!instFuncs[name] && _isDynamicCandidate(thisTarget, name, false)) {
                instFuncs[name] = thisTarget[name];
            }
        });
        return instFuncs;
    }
    function _hasVisited(values, value) {
        for (var lp = values.length - 1; lp >= 0; lp--) {
            if (values[lp] === value) {
                return true;
            }
        }
        return false;
    }
    function _getBaseFuncs(classProto, thisTarget, instFuncs, useBaseInst) {
        function _instFuncProxy(target, funcHost, funcName) {
            var theFunc = funcHost[funcName];
            if (theFunc[DynProxyTag] && useBaseInst) {
                var instFuncTable = target[DynInstFuncTable] || {};
                if (instFuncTable[DynAllowInstChkTag] !== false) {
                    theFunc = (instFuncTable[funcHost[DynClassName]] || {})[funcName] || theFunc;
                }
            }
            return function () {
                return theFunc.apply(target, arguments);
            };
        }
        var baseFuncs = objCreate(null);
        _forEachProp(instFuncs, function (name) {
            baseFuncs[name] = _instFuncProxy(thisTarget, instFuncs, name);
        });
        var baseProto = _getObjProto(classProto);
        var visited = [];
        while (baseProto && !_isObjectArrayOrFunctionPrototype(baseProto) && !_hasVisited(visited, baseProto)) {
            _forEachProp(baseProto, function (name) {
                if (!baseFuncs[name] && _isDynamicCandidate(baseProto, name, !_objGetPrototypeOf)) {
                    baseFuncs[name] = _instFuncProxy(thisTarget, baseProto, name);
                }
            });
            visited.push(baseProto);
            baseProto = _getObjProto(baseProto);
        }
        return baseFuncs;
    }
    function _getInstFunc(target, funcName, proto, currentDynProtoProxy) {
        var instFunc = null;
        if (target && objHasOwnProperty(proto, DynClassName)) {
            var instFuncTable = target[DynInstFuncTable] || objCreate(null);
            instFunc = (instFuncTable[proto[DynClassName]] || objCreate(null))[funcName];
            if (!instFunc) {
                _throwTypeError("Missing [" + funcName + "] " + strFunction);
            }
            if (!instFunc[DynInstChkTag] && instFuncTable[DynAllowInstChkTag] !== false) {
                var canAddInst = !objHasOwnProperty(target, funcName);
                var objProto = _getObjProto(target);
                var visited = [];
                while (canAddInst && objProto && !_isObjectArrayOrFunctionPrototype(objProto) && !_hasVisited(visited, objProto)) {
                    var protoFunc = objProto[funcName];
                    if (protoFunc) {
                        canAddInst = (protoFunc === currentDynProtoProxy);
                        break;
                    }
                    visited.push(objProto);
                    objProto = _getObjProto(objProto);
                }
                try {
                    if (canAddInst) {
                        target[funcName] = instFunc;
                    }
                    instFunc[DynInstChkTag] = 1;
                }
                catch (e) {
                    instFuncTable[DynAllowInstChkTag] = false;
                }
            }
        }
        return instFunc;
    }
    function _getProtoFunc(funcName, proto, currentDynProtoProxy) {
        var protoFunc = proto[funcName];
        if (protoFunc === currentDynProtoProxy) {
            protoFunc = _getObjProto(proto)[funcName];
        }
        if (typeof protoFunc !== strFunction) {
            _throwTypeError("[" + funcName + "] is not a " + strFunction);
        }
        return protoFunc;
    }
    function _populatePrototype(proto, className, target, baseInstFuncs, setInstanceFunc) {
        function _createDynamicPrototype(proto, funcName) {
            var dynProtoProxy = function () {
                var instFunc = _getInstFunc(this, funcName, proto, dynProtoProxy) || _getProtoFunc(funcName, proto, dynProtoProxy);
                return instFunc.apply(this, arguments);
            };
            dynProtoProxy[DynProxyTag] = 1;
            return dynProtoProxy;
        }
        if (!_isObjectOrArrayPrototype(proto)) {
            var instFuncTable = target[DynInstFuncTable] = target[DynInstFuncTable] || objCreate(null);
            if (!_isObjectOrArrayPrototype(instFuncTable)) {
                var instFuncs_1 = instFuncTable[className] = (instFuncTable[className] || objCreate(null));
                if (instFuncTable[DynAllowInstChkTag] !== false) {
                    instFuncTable[DynAllowInstChkTag] = !!setInstanceFunc;
                }
                if (!_isObjectOrArrayPrototype(instFuncs_1)) {
                    _forEachProp(target, function (name) {
                        if (_isDynamicCandidate(target, name, false) && target[name] !== baseInstFuncs[name]) {
                            instFuncs_1[name] = target[name];
                            delete target[name];
                            if (!objHasOwnProperty(proto, name) || (proto[name] && !proto[name][DynProxyTag])) {
                                proto[name] = _createDynamicPrototype(proto, name);
                            }
                        }
                    });
                }
            }
        }
    }
    function _checkPrototype(classProto, thisTarget) {
        if (_objGetPrototypeOf) {
            var visited = [];
            var thisProto = _getObjProto(thisTarget);
            while (thisProto && !_isObjectArrayOrFunctionPrototype(thisProto) && !_hasVisited(visited, thisProto)) {
                if (thisProto === classProto) {
                    return true;
                }
                visited.push(thisProto);
                thisProto = _getObjProto(thisProto);
            }
            return false;
        }
        return true;
    }
    function _getObjName(target, unknownValue) {
        if (objHasOwnProperty(target, Prototype)) {
            return target.name || unknownValue || UnknownValue;
        }
        return (((target || {})[Constructor]) || {}).name || unknownValue || UnknownValue;
    }
    function dynamicProto(theClass, target, delegateFunc, options) {
        if (!objHasOwnProperty(theClass, Prototype)) {
            _throwTypeError("theClass is an invalid class definition.");
        }
        var classProto = theClass[Prototype];
        if (!_checkPrototype(classProto, target)) {
            _throwTypeError("[" + _getObjName(theClass) + "] not in hierarchy of [" + _getObjName(target) + "]");
        }
        var className = null;
        if (objHasOwnProperty(classProto, DynClassName)) {
            className = classProto[DynClassName];
        }
        else {
            className = DynClassNamePrefix + _getObjName(theClass, "_") + "$" + _gblInst.n;
            _gblInst.n++;
            classProto[DynClassName] = className;
        }
        var perfOptions = dynamicProto[DynProtoDefaultOptions];
        var useBaseInst = !!perfOptions[strUseBaseInst];
        if (useBaseInst && options && options[strUseBaseInst] !== undefined) {
            useBaseInst = !!options[strUseBaseInst];
        }
        var instFuncs = _getInstanceFuncs(target);
        var baseFuncs = _getBaseFuncs(classProto, target, instFuncs, useBaseInst);
        delegateFunc(target, baseFuncs);
        var setInstanceFunc = !!_objGetPrototypeOf && !!perfOptions[strSetInstFuncs];
        if (setInstanceFunc && options) {
            setInstanceFunc = !!options[strSetInstFuncs];
        }
        _populatePrototype(classProto, className, target, instFuncs, setInstanceFunc !== false);
    }
    dynamicProto[DynProtoDefaultOptions] = _gblInst.o;

    var MinChannelPriorty = 100;

    var createEnumStyle = createEnum;

    var EventsDiscardedReason = createEnumStyle({
        Unknown: 0 ,
        NonRetryableStatus: 1 ,
        InvalidEvent: 2 ,
        SizeLimitExceeded: 3 ,
        KillSwitch: 4 ,
        QueueFull: 5
    });

    var _DYN_TO_LOWER_CASE = "toLowerCase";
    var _DYN_BLK_VAL = "blkVal";
    var _DYN_LENGTH$1 = "length";
    var _DYN_RD_ONLY = "rdOnly";
    var _DYN_NOTIFY = "notify";
    var _DYN_WARN_TO_CONSOLE = "warnToConsole";
    var _DYN_THROW_INTERNAL = "throwInternal";
    var _DYN_SET_DF = "setDf";
    var _DYN_WATCH = "watch";
    var _DYN_LOGGER$1 = "logger";
    var _DYN_APPLY = "apply";
    var _DYN_PUSH = "push";
    var _DYN_SPLICE = "splice";
    var _DYN_HDLR = "hdlr";
    var _DYN_CANCEL = "cancel";
    var _DYN_INITIALIZE$1 = "initialize";
    var _DYN_IDENTIFIER = "identifier";
    var _DYN_REMOVE_NOTIFICATION_0 = "removeNotificationListener";
    var _DYN_ADD_NOTIFICATION_LIS1 = "addNotificationListener";
    var _DYN_IS_INITIALIZED = "isInitialized";
    var _DYN_GET_NOTIFY_MGR = "getNotifyMgr";
    var _DYN_GET_PLUGIN = "getPlugin";
    var _DYN_POLL_INTERNAL_LOGS$1 = "pollInternalLogs";
    var _DYN_NAME = "name";
    var _DYN_TIME = "time";
    var _DYN_PROCESS_NEXT = "processNext";
    var _DYN_GET_PROCESS_TEL_CONT2 = "getProcessTelContext";
    var _DYN_ENABLED = "enabled";
    var _DYN_STOP_POLLING_INTERNA3 = "stopPollingInternalLogs";
    var _DYN_UNLOAD = "unload";
    var _DYN_ON_COMPLETE = "onComplete";
    var _DYN_VERSION = "version";
    var _DYN_LOGGING_LEVEL_CONSOL4 = "loggingLevelConsole";
    var _DYN_CREATE_NEW = "createNew";
    var _DYN_TEARDOWN = "teardown";
    var _DYN_MESSAGE_ID = "messageId";
    var _DYN_MESSAGE = "message";
    var _DYN_IS_ASYNC = "isAsync";
    var _DYN_DIAG_LOG = "diagLog";
    var _DYN__DO_TEARDOWN = "_doTeardown";
    var _DYN_UPDATE = "update";
    var _DYN_GET_NEXT = "getNext";
    var _DYN_SET_NEXT_PLUGIN = "setNextPlugin";
    var _DYN_PROTOCOL = "protocol";
    var _DYN_USER_AGENT = "userAgent";
    var _DYN_SPLIT = "split";
    var _DYN_NODE_TYPE = "nodeType";
    var _DYN_REPLACE = "replace";
    var _DYN_LOG_INTERNAL_MESSAGE = "logInternalMessage";
    var _DYN_TYPE = "type";
    var _DYN_HANDLER = "handler";
    var _DYN_STATUS = "status";
    var _DYN_GET_RESPONSE_HEADER = "getResponseHeader";
    var _DYN_GET_ALL_RESPONSE_HEA5 = "getAllResponseHeaders";
    var _DYN_IS_CHILD_EVT = "isChildEvt";
    var _DYN_DATA = "data";
    var _DYN_GET_CTX = "getCtx";
    var _DYN_SET_CTX = "setCtx";
    var _DYN_COMPLETE = "complete";
    var _DYN_ITEMS_RECEIVED = "itemsReceived";
    var _DYN_URL_STRING = "urlString";
    var _DYN_SEND_POST = "sendPOST";
    var _DYN_HEADERS = "headers";
    var _DYN_TIMEOUT = "timeout";
    var _DYN_SET_REQUEST_HEADER = "setRequestHeader";
    var _DYN_TRACE_ID = "traceId";
    var _DYN_SPAN_ID = "spanId";
    var _DYN_TRACE_FLAGS = "traceFlags";

    var aggregationErrorType;
    function throwAggregationError(message, sourceErrors) {
        if (!aggregationErrorType) {
            aggregationErrorType = createCustomError("AggregationError", function (self, args) {
                if (args[_DYN_LENGTH$1 ] > 1) {
                    self.errors = args[1];
                }
            });
        }
        var theMessage = message || "One or more errors occurred.";
        arrForEach(sourceErrors, function (srcError, idx) {
            theMessage += "\n".concat(idx, " > ").concat(dumpObj(srcError));
        });
        throw new aggregationErrorType(theMessage, sourceErrors || []);
    }

    /*!
     * NevWare21 - ts-async, 0.5.1
     * https://github.com/nevware21/ts-async
     * Copyright (c) NevWare21 and contributors. All rights reserved.
     * Licensed under the MIT license.
     */
    var STR_PROMISE = "Promise";
    var REJECTED = "rejected";
    function doAwaitResponse(value, cb) {
        return doAwait(value, function (value) {
            return cb ? cb({
                status: "fulfilled",
                rejected: false,
                value: value
            }) : value;
        }, function (reason) {
            return cb ? cb({
                status: REJECTED,
                rejected: true,
                reason: reason
            }) : reason;
        });
    }
    function doAwait(value, resolveFn, rejectFn, finallyFn) {
        var result = value;
        try {
            if (isPromiseLike(value)) {
                if (resolveFn || rejectFn) {
                    result = value.then(resolveFn, rejectFn);
                }
            }
            else {
                try {
                    if (resolveFn) {
                        result = resolveFn(value);
                    }
                }
                catch (err) {
                    if (rejectFn) {
                        result = rejectFn(err);
                    }
                    else {
                        throw err;
                    }
                }
            }
        }
        finally {
            if (finallyFn) {
                doFinally(result, finallyFn);
            }
        }
        return result;
    }
    function doFinally(value, finallyFn) {
        var result = value;
        if (finallyFn) {
            if (isPromiseLike(value)) {
                if (value.finally) {
                    result = value.finally(finallyFn);
                }
                else {
                    result = value.then(function (value) {
                        finallyFn();
                        return value;
                    }, function (reason) {
                        finallyFn();
                        throw reason;
                    });
                }
            }
            else {
                finallyFn();
            }
        }
        return result;
    }
    var STRING_STATES =  [
        "pending", "resolving", "resolved", REJECTED
    ];
    var DISPATCH_EVENT = "dispatchEvent";
    var _hasInitEvent;
    function _hasInitEventFn(doc) {
        var evt;
        if (doc && doc.createEvent) {
            evt = doc.createEvent("Event");
        }
        return (!!evt && evt.initEvent);
    }
    function emitEvent(target, evtName, populateEvent, useNewEvent) {
        var doc = getDocument();
        !_hasInitEvent && (_hasInitEvent = createCachedValue(!!safe(_hasInitEventFn, [doc]).v));
        var theEvt = _hasInitEvent.v ? doc.createEvent("Event") : (useNewEvent ? new Event(evtName) : {});
        populateEvent && populateEvent(theEvt);
        if (_hasInitEvent.v) {
            theEvt.initEvent(evtName, false, true);
        }
        if (theEvt && target[DISPATCH_EVENT]) {
            target[DISPATCH_EVENT](theEvt);
        }
        else {
            var handler = target["on" + evtName];
            if (handler) {
                handler(theEvt);
            }
            else {
                var theConsole = getInst("console");
                theConsole && (theConsole["error"] || theConsole["log"])(evtName, dumpObj(theEvt));
            }
        }
    }
    var NODE_UNHANDLED_REJECTION = "unhandledRejection";
    var UNHANDLED_REJECTION = NODE_UNHANDLED_REJECTION.toLowerCase();
    var _unhandledRejectionTimeout = 10;
    var _hasPromiseRejectionEvent;
    function dumpFnObj(value) {
        if (isFunction(value)) {
            return value.toString();
        }
        return dumpObj(value);
    }
    function _createPromise(newPromise, processor, executor) {
        var additionalArgs = arrSlice(arguments, 3);
        var _state = 0 ;
        var _hasResolved = false;
        var _settledValue;
        var _queue = [];
        var _handled = false;
        var _unHandledRejectionHandler = null;
        var _thePromise;
        function _then(onResolved, onRejected) {
            try {
                _handled = true;
                _unHandledRejectionHandler && _unHandledRejectionHandler.cancel();
                _unHandledRejectionHandler = null;
                var thenPromise = newPromise(function (resolve, reject) {
                    _queue.push(function () {
                        try {
                            var handler = _state === 2  ? onResolved : onRejected;
                            var value = isUndefined(handler) ? _settledValue : (isFunction(handler) ? handler(_settledValue) : handler);
                            if (isPromiseLike(value)) {
                                value.then(resolve, reject);
                            }
                            else if (handler) {
                                resolve(value);
                            }
                            else if (_state === 3 ) {
                                reject(value);
                            }
                            else {
                                resolve(value);
                            }
                        }
                        catch (e) {
                            reject(e);
                        }
                    });
                    if (_hasResolved) {
                        _processQueue();
                    }
                }, additionalArgs);
                return thenPromise;
            }
            finally {
            }
        }
        function _catch(onRejected) {
            return _then(undefined, onRejected);
        }
        function _finally(onFinally) {
            var thenFinally = onFinally;
            var catchFinally = onFinally;
            if (isFunction(onFinally)) {
                thenFinally = function (value) {
                    onFinally && onFinally();
                    return value;
                };
                catchFinally = function (reason) {
                    onFinally && onFinally();
                    throw reason;
                };
            }
            return _then(thenFinally, catchFinally);
        }
        function _strState() {
            return STRING_STATES[_state];
        }
        function _processQueue() {
            if (_queue.length > 0) {
                var pending = _queue.slice();
                _queue = [];
                _handled = true;
                _unHandledRejectionHandler && _unHandledRejectionHandler.cancel();
                _unHandledRejectionHandler = null;
                processor(pending);
            }
        }
        function _createSettleIfFn(newState, allowState) {
            return function (theValue) {
                if (_state === allowState) {
                    if (newState === 2  && isPromiseLike(theValue)) {
                        _state = 1 ;
                        theValue.then(_createSettleIfFn(2 , 1 ), _createSettleIfFn(3 , 1 ));
                        return;
                    }
                    _state = newState;
                    _hasResolved = true;
                    _settledValue = theValue;
                    _processQueue();
                    if (!_handled && newState === 3  && !_unHandledRejectionHandler) {
                        _unHandledRejectionHandler = scheduleTimeout(_notifyUnhandledRejection, _unhandledRejectionTimeout);
                    }
                }
            };
        }
        function _notifyUnhandledRejection() {
            if (!_handled) {
                _handled = true;
                if (isNode()) {
                    process.emit(NODE_UNHANDLED_REJECTION, _settledValue, _thePromise);
                }
                else {
                    var gbl = getWindow() || getGlobal();
                    !_hasPromiseRejectionEvent && (_hasPromiseRejectionEvent = createCachedValue(safe((getInst), [STR_PROMISE + "RejectionEvent"]).v));
                    emitEvent(gbl, UNHANDLED_REJECTION, function (theEvt) {
                        objDefine(theEvt, "promise", { g: function () { return _thePromise; } });
                        theEvt.reason = _settledValue;
                        return theEvt;
                    }, !!_hasPromiseRejectionEvent.v);
                }
            }
        }
        _thePromise = {
            then: _then,
            "catch": _catch,
            finally: _finally
        };
        objDefineProp(_thePromise, "state", {
            get: _strState
        });
        if (hasSymbol()) {
            _thePromise[getKnownSymbol(11 )] = "IPromise";
        }
        function _toString() {
            return "IPromise" + ("") + " " + _strState() + (_hasResolved ? (" - " + dumpFnObj(_settledValue)) : "") + ("");
        }
        _thePromise.toString = _toString;
        (function _initialize() {
            if (!isFunction(executor)) {
                throwTypeError(STR_PROMISE + ": executor is not a function - " + dumpFnObj(executor));
            }
            var _rejectFn = _createSettleIfFn(3 , 0 );
            try {
                executor.call(_thePromise, _createSettleIfFn(2 , 0 ), _rejectFn);
            }
            catch (e) {
                _rejectFn(e);
            }
        })();
        return _thePromise;
    }
    /*#__NO_SIDE_EFFECTS__*/
    function _createAllPromise(newPromise) {
        return function (input) {
            var additionalArgs = arrSlice(arguments, 1);
            return newPromise(function (resolve, reject) {
                try {
                    var values_1 = [];
                    var pending_1 = 1;
                    iterForOf(input, function (item, idx) {
                        if (item) {
                            pending_1++;
                            doAwait(item, function (value) {
                                values_1[idx] = value;
                                if (--pending_1 === 0) {
                                    resolve(values_1);
                                }
                            }, reject);
                        }
                    });
                    pending_1--;
                    if (pending_1 === 0) {
                        resolve(values_1);
                    }
                }
                catch (e) {
                    reject(e);
                }
            }, additionalArgs);
        };
    }
    function syncItemProcessor(pending) {
        arrForEach(pending, function (fn) {
            try {
                fn();
            }
            catch (e) {
            }
        });
    }
    function timeoutItemProcessor(timeout) {
        var callbackTimeout = isNumber(timeout) ? timeout : 0;
        return function (pending) {
            scheduleTimeout(function () {
                syncItemProcessor(pending);
            }, callbackTimeout);
        };
    }
    function createAsyncPromise(executor, timeout) {
        return _createPromise(createAsyncPromise, timeoutItemProcessor(timeout), executor, timeout);
    }
    var _promiseCls;
    function createNativePromise(executor, timeout) {
        !_promiseCls && (_promiseCls = createCachedValue((safe(getInst, [STR_PROMISE]).v) || null));
        var PrmCls = _promiseCls.v;
        if (!PrmCls) {
            return createAsyncPromise(executor);
        }
        if (!isFunction(executor)) {
            throwTypeError(STR_PROMISE + ": executor is not a function - " + dumpObj(executor));
        }
        var _state = 0 ;
        function _strState() {
            return STRING_STATES[_state];
        }
        var thePromise = new PrmCls(function (resolve, reject) {
            function _resolve(value) {
                _state = 2 ;
                resolve(value);
            }
            function _reject(reason) {
                _state = 3 ;
                reject(reason);
            }
            executor(_resolve, _reject);
        });
        objDefineProp(thePromise, "state", {
            get: _strState
        });
        return thePromise;
    }
    var _promiseCreator;
    function createPromise(executor, timeout) {
        !_promiseCreator && (_promiseCreator = createCachedValue(createNativePromise));
        return _promiseCreator.v.call(this, executor, timeout);
    }
    var createAllPromise = /*#__PURE__*/ _createAllPromise(createPromise);

    var UNDEFINED_VALUE = undefined;
    var STR_EMPTY$2 = "";
    var STR_CHANNELS = "channels";
    var STR_CORE = "core";
    var STR_CREATE_PERF_MGR = "createPerfMgr";
    var STR_DISABLED = "disabled";
    var STR_EXTENSION_CONFIG = "extensionConfig";
    var STR_EXTENSIONS = "extensions";
    var STR_PROCESS_TELEMETRY = "processTelemetry";
    var STR_PRIORITY = "priority";
    var STR_EVENTS_SENT = "eventsSent";
    var STR_EVENTS_DISCARDED = "eventsDiscarded";
    var STR_EVENTS_SEND_REQUEST = "eventsSendRequest";
    var STR_PERF_EVENT = "perfEvent";
    var STR_OFFLINE_STORE = "offlineEventsStored";
    var STR_OFFLINE_SENT = "offlineBatchSent";
    var STR_OFFLINE_DROP = "offlineBatchDrop";
    var STR_GET_PERF_MGR = "getPerfMgr";
    var STR_DOMAIN = "domain";
    var STR_PATH = "path";
    var STR_NOT_DYNAMIC_ERROR = "Not dynamic - ";

    var rCamelCase = /-([a-z])/g;
    var rNormalizeInvalid = /([^\w\d_$])/g;
    var rLeadingNumeric = /^(\d+[\w\d_$])/;
    function isNotNullOrUndefined(value) {
        return !isNullOrUndefined(value);
    }
    function normalizeJsName(name) {
        var value = name;
        if (value && isString(value)) {
            value = value[_DYN_REPLACE ](rCamelCase, function (_all, letter) {
                return letter.toUpperCase();
            });
            value = value[_DYN_REPLACE ](rNormalizeInvalid, "_");
            value = value[_DYN_REPLACE ](rLeadingNumeric, function (_all, match) {
                return "_" + match;
            });
        }
        return value;
    }
    function strContains(value, search) {
        if (value && search) {
            return strIndexOf(value, search) !== -1;
        }
        return false;
    }
    function toISOString(date) {
        return date && date.toISOString() || "";
    }
    function getExceptionName(object) {
        if (isError(object)) {
            return object[_DYN_NAME ];
        }
        return STR_EMPTY$2;
    }
    function setValue(target, field, value, valChk, srcChk) {
        var theValue = value;
        if (target) {
            theValue = target[field];
            if (theValue !== value && (!srcChk || srcChk(theValue)) && (!valChk || valChk(value))) {
                theValue = value;
                target[field] = theValue;
            }
        }
        return theValue;
    }
    function getSetValue(target, field, defValue) {
        var theValue;
        if (target) {
            theValue = target[field];
            if (!theValue && isNullOrUndefined(theValue)) {
                theValue = !isUndefined(defValue) ? defValue : {};
                target[field] = theValue;
            }
        }
        else {
            theValue = !isUndefined(defValue) ? defValue : {};
        }
        return theValue;
    }
    function _createProxyFunction(source, funcName) {
        var srcFunc = null;
        var src = null;
        if (isFunction(source)) {
            srcFunc = source;
        }
        else {
            src = source;
        }
        return function () {
            var originalArguments = arguments;
            if (srcFunc) {
                src = srcFunc();
            }
            if (src) {
                return src[funcName][_DYN_APPLY ](src, originalArguments);
            }
        };
    }
    function proxyAssign(target, source, chkSet) {
        if (target && source && isObject(target) && isObject(source)) {
            var _loop_1 = function (field) {
                if (isString(field)) {
                    var value = source[field];
                    if (isFunction(value)) {
                        if (!chkSet || chkSet(field, true, source, target)) {
                            target[field] = _createProxyFunction(source, field);
                        }
                    }
                    else if (!chkSet || chkSet(field, false, source, target)) {
                        if (objHasOwn(target, field)) {
                            delete target[field];
                        }
                        objDefine(target, field, {
                            g: function () {
                                return source[field];
                            },
                            s: function (theValue) {
                                source[field] = theValue;
                            }
                        });
                    }
                }
            };
            for (var field in source) {
                _loop_1(field);
            }
        }
        return target;
    }
    function proxyFunctionAs(target, name, source, theFunc, overwriteTarget) {
        if (target && name && source) {
            if (overwriteTarget !== false || isUndefined(target[name])) {
                target[name] = _createProxyFunction(source, theFunc);
            }
        }
    }
    function proxyFunctions(target, source, functionsToProxy, overwriteTarget) {
        if (target && source && isObject(target) && isArray(functionsToProxy)) {
            arrForEach(functionsToProxy, function (theFuncName) {
                if (isString(theFuncName)) {
                    proxyFunctionAs(target, theFuncName, source, theFuncName, overwriteTarget);
                }
            });
        }
        return target;
    }
    function optimizeObject(theObject) {
        if (theObject && objAssign) {
            theObject = ObjClass$1(objAssign({}, theObject));
        }
        return theObject;
    }
    function getResponseText(xhr) {
        try {
            return xhr.responseText;
        }
        catch (e) {
        }
        return null;
    }
    function formatErrorMessageXdr(xdr, message) {
        if (xdr) {
            return "XDomainRequest,Response:" + getResponseText(xdr) || 0;
        }
        return message;
    }
    function formatErrorMessageXhr(xhr, message) {
        if (xhr) {
            return "XMLHttpRequest,Status:" + xhr[_DYN_STATUS ] + ",Response:" + getResponseText(xhr) || 0 || 0;
        }
        return message;
    }
    function prependTransports(theTransports, newTransports) {
        if (newTransports) {
            if (isNumber(newTransports)) {
                theTransports = [newTransports].concat(theTransports);
            }
            else if (isArray(newTransports)) {
                theTransports = newTransports.concat(theTransports);
            }
        }
        return theTransports;
    }
    var strDisabledPropertyName$1 = "Microsoft_ApplicationInsights_BypassAjaxInstrumentation";
    var strWithCredentials$1 = "withCredentials";
    var strTimeout$1 = "timeout";
    function openXhr$1(method, urlString, withCredentials, disabled, isSync, timeout) {
        if (disabled === void 0) { disabled = false; }
        if (isSync === void 0) { isSync = false; }
        function _wrapSetXhrProp(xhr, prop, value) {
            try {
                xhr[prop] = value;
            }
            catch (e) {
            }
        }
        var xhr = new XMLHttpRequest();
        if (disabled) {
            _wrapSetXhrProp(xhr, strDisabledPropertyName$1, disabled);
        }
        if (withCredentials) {
            _wrapSetXhrProp(xhr, strWithCredentials$1, withCredentials);
        }
        xhr.open(method, urlString, !isSync);
        if (withCredentials) {
            _wrapSetXhrProp(xhr, strWithCredentials$1, withCredentials);
        }
        if (!isSync && timeout) {
            _wrapSetXhrProp(xhr, strTimeout$1, timeout);
        }
        return xhr;
    }
    function convertAllHeadersToMap(headersString) {
        var headers = {};
        if (isString(headersString)) {
            var headersArray = strTrim(headersString)[_DYN_SPLIT ](/[\r\n]+/);
            arrForEach(headersArray, function (headerEntry) {
                if (headerEntry) {
                    var idx = headerEntry.indexOf(": ");
                    if (idx !== -1) {
                        var header = strTrim(headerEntry.substring(0, idx))[_DYN_TO_LOWER_CASE ]();
                        var value = strTrim(headerEntry.substring(idx + 1));
                        headers[header] = value;
                    }
                    else {
                        headers[strTrim(headerEntry)] = 1;
                    }
                }
            });
        }
        return headers;
    }
    function _appendHeader(theHeaders, xhr, name) {
        if (!theHeaders[name] && xhr && xhr[_DYN_GET_RESPONSE_HEADER ]) {
            var value = xhr[_DYN_GET_RESPONSE_HEADER ](name);
            if (value) {
                theHeaders[name] = strTrim(value);
            }
        }
        return theHeaders;
    }
    var STR_KILL_DURATION_HEADER = "kill-duration";
    var STR_KILL_DURATION_SECONDS_HEADER = "kill-duration-seconds";
    var STR_TIME_DELTA_HEADER = "time-delta-millis";
    function _getAllResponseHeaders(xhr, isOneDs) {
        var theHeaders = {};
        if (!xhr[_DYN_GET_ALL_RESPONSE_HEA5 ]) {
            if (!!isOneDs) {
                theHeaders = _appendHeader(theHeaders, xhr, STR_TIME_DELTA_HEADER);
                theHeaders = _appendHeader(theHeaders, xhr, STR_KILL_DURATION_HEADER);
                theHeaders = _appendHeader(theHeaders, xhr, STR_KILL_DURATION_SECONDS_HEADER);
            }
        }
        else {
            theHeaders = convertAllHeadersToMap(xhr[_DYN_GET_ALL_RESPONSE_HEA5 ]());
        }
        return theHeaders;
    }

    var strDocumentMode = "documentMode";
    var strLocation = "location";
    var strConsole = "console";
    var strJSON = "JSON";
    var strCrypto = "crypto";
    var strMsCrypto = "msCrypto";
    var strReactNative = "ReactNative";
    var strMsie = "msie";
    var strTrident = "trident/";
    var strXMLHttpRequest = "XMLHttpRequest";
    var _isTrident = null;
    var _navUserAgentCheck = null;
    var _enableMocks = false;
    var _useXDomainRequest = null;
    var _beaconsSupported = null;
    function _hasProperty(theClass, property) {
        var supported = false;
        if (theClass) {
            try {
                supported = property in theClass;
                if (!supported) {
                    var proto = theClass[strShimPrototype];
                    if (proto) {
                        supported = property in proto;
                    }
                }
            }
            catch (e) {
            }
            if (!supported) {
                try {
                    var tmp = new theClass();
                    supported = !isUndefined(tmp[property]);
                }
                catch (e) {
                }
            }
        }
        return supported;
    }
    function setEnableEnvMocks(enabled) {
        _enableMocks = enabled;
    }
    function getLocation(checkForMock) {
        if (checkForMock && _enableMocks) {
            var mockLocation = getInst("__mockLocation");
            if (mockLocation) {
                return mockLocation;
            }
        }
        if (typeof location === strShimObject && location) {
            return location;
        }
        return getInst(strLocation);
    }
    function getConsole() {
        if (typeof console !== strShimUndefined) {
            return console;
        }
        return getInst(strConsole);
    }
    function hasJSON() {
        return Boolean((typeof JSON === strShimObject && JSON) || getInst(strJSON) !== null);
    }
    function getJSON() {
        if (hasJSON()) {
            return JSON || getInst(strJSON);
        }
        return null;
    }
    function getCrypto() {
        return getInst(strCrypto);
    }
    function getMsCrypto() {
        return getInst(strMsCrypto);
    }
    function isReactNative() {
        var nav = getNavigator();
        if (nav && nav.product) {
            return nav.product === strReactNative;
        }
        return false;
    }
    function isIE() {
        var nav = getNavigator();
        if (nav && (nav[_DYN_USER_AGENT ] !== _navUserAgentCheck || _isTrident === null)) {
            _navUserAgentCheck = nav[_DYN_USER_AGENT ];
            var userAgent = (_navUserAgentCheck || STR_EMPTY$2)[_DYN_TO_LOWER_CASE ]();
            _isTrident = (strContains(userAgent, strMsie) || strContains(userAgent, strTrident));
        }
        return _isTrident;
    }
    function getIEVersion(userAgentStr) {
        if (userAgentStr === void 0) { userAgentStr = null; }
        if (!userAgentStr) {
            var navigator_1 = getNavigator() || {};
            userAgentStr = navigator_1 ? (navigator_1.userAgent || STR_EMPTY$2)[_DYN_TO_LOWER_CASE ]() : STR_EMPTY$2;
        }
        var ua = (userAgentStr || STR_EMPTY$2)[_DYN_TO_LOWER_CASE ]();
        if (strContains(ua, strMsie)) {
            var doc = getDocument() || {};
            return Math.max(parseInt(ua[_DYN_SPLIT ](strMsie)[1]), (doc[strDocumentMode] || 0));
        }
        else if (strContains(ua, strTrident)) {
            var tridentVer = parseInt(ua[_DYN_SPLIT ](strTrident)[1]);
            if (tridentVer) {
                return tridentVer + 4;
            }
        }
        return null;
    }
    function isBeaconsSupported(useCached) {
        if (_beaconsSupported === null || useCached === false) {
            _beaconsSupported = hasNavigator() && Boolean(getNavigator().sendBeacon);
        }
        return _beaconsSupported;
    }
    function isFetchSupported(withKeepAlive) {
        var isSupported = false;
        try {
            isSupported = !!getInst("fetch");
            var request = getInst("Request");
            if (isSupported && withKeepAlive && request) {
                isSupported = _hasProperty(request, "keepalive");
            }
        }
        catch (e) {
        }
        return isSupported;
    }
    function useXDomainRequest() {
        if (_useXDomainRequest === null) {
            _useXDomainRequest = (typeof XDomainRequest !== strShimUndefined);
            if (_useXDomainRequest && isXhrSupported()) {
                _useXDomainRequest = _useXDomainRequest && !_hasProperty(getInst(strXMLHttpRequest), "withCredentials");
            }
        }
        return _useXDomainRequest;
    }
    function isXhrSupported() {
        var isSupported = false;
        try {
            var xmlHttpRequest = getInst(strXMLHttpRequest);
            isSupported = !!xmlHttpRequest;
        }
        catch (e) {
        }
        return isSupported;
    }
    function _getNamedValue(values, name) {
        if (values) {
            for (var i = 0; i < values[_DYN_LENGTH$1 ]; i++) {
                var value = values[i];
                if (value[_DYN_NAME ]) {
                    if (value[_DYN_NAME ] === name) {
                        return value;
                    }
                }
            }
        }
        return {};
    }
    function findMetaTag(name) {
        var doc = getDocument();
        if (doc && name) {
            return _getNamedValue(doc.querySelectorAll("meta"), name).content;
        }
        return null;
    }
    function findNamedServerTiming(name) {
        var value;
        var perf = getPerformance();
        if (perf) {
            var navPerf = perf.getEntriesByType("navigation") || [];
            value = _getNamedValue((navPerf[_DYN_LENGTH$1 ] > 0 ? navPerf[0] : {}).serverTiming, name).description;
        }
        return value;
    }

    var UInt32Mask = 0x100000000;
    var MaxUInt32 = 0xffffffff;
    var SEED1 = 123456789;
    var SEED2 = 987654321;
    var _mwcSeeded = false;
    var _mwcW = SEED1;
    var _mwcZ = SEED2;
    function _mwcSeed(seedValue) {
        if (seedValue < 0) {
            seedValue >>>= 0;
        }
        _mwcW = (SEED1 + seedValue) & MaxUInt32;
        _mwcZ = (SEED2 - seedValue) & MaxUInt32;
        _mwcSeeded = true;
    }
    function _autoSeedMwc() {
        try {
            var now = utcNow() & 0x7fffffff;
            _mwcSeed(((Math.random() * UInt32Mask) ^ now) + now);
        }
        catch (e) {
        }
    }
    function randomValue(maxValue) {
        if (maxValue > 0) {
            return Math.floor((random32() / MaxUInt32) * (maxValue + 1)) >>> 0;
        }
        return 0;
    }
    function random32(signed) {
        var value = 0;
        var c = getCrypto() || getMsCrypto();
        if (c && c.getRandomValues) {
            value = c.getRandomValues(new Uint32Array(1))[0] & MaxUInt32;
        }
        if (value === 0 && isIE()) {
            if (!_mwcSeeded) {
                _autoSeedMwc();
            }
            value = mwcRandom32() & MaxUInt32;
        }
        if (value === 0) {
            value = Math.floor((UInt32Mask * Math.random()) | 0);
        }
        if (!signed) {
            value >>>= 0;
        }
        return value;
    }
    function mwcRandom32(signed) {
        _mwcZ = (36969 * (_mwcZ & 0xFFFF) + (_mwcZ >> 16)) & MaxUInt32;
        _mwcW = (18000 * (_mwcW & 0xFFFF) + (_mwcW >> 16)) & MaxUInt32;
        var value = (((_mwcZ << 16) + (_mwcW & 0xFFFF)) >>> 0) & MaxUInt32 | 0;
        if (!signed) {
            value >>>= 0;
        }
        return value;
    }
    function newId(maxLength) {
        if (maxLength === void 0) { maxLength = 22; }
        var base64chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
        var number = random32() >>> 0;
        var chars = 0;
        var result = STR_EMPTY$2;
        while (result[_DYN_LENGTH$1 ] < maxLength) {
            chars++;
            result += base64chars.charAt(number & 0x3F);
            number >>>= 6;
            if (chars === 5) {
                number = (((random32() << 2) & 0xFFFFFFFF) | (number & 0x03)) >>> 0;
                chars = 0;
            }
        }
        return result;
    }

    var version = '3.2.2';
    var instanceName = "." + newId(6);
    var _dataUid = 0;
    function _canAcceptData(target) {
        return target[_DYN_NODE_TYPE ] === 1 || target[_DYN_NODE_TYPE ] === 9 || !(+target[_DYN_NODE_TYPE ]);
    }
    function _getCache(data, target) {
        var theCache = target[data.id];
        if (!theCache) {
            theCache = {};
            try {
                if (_canAcceptData(target)) {
                    objDefine(target, data.id, {
                        e: false,
                        v: theCache
                    });
                }
            }
            catch (e) {
            }
        }
        return theCache;
    }
    function createUniqueNamespace(name, includeVersion) {
        if (includeVersion === void 0) { includeVersion = false; }
        return normalizeJsName(name + (_dataUid++) + (includeVersion ? "." + version : STR_EMPTY$2) + instanceName);
    }
    function createElmNodeData(name) {
        var data = {
            id: createUniqueNamespace("_aiData-" + (name || STR_EMPTY$2) + "." + version),
            accept: function (target) {
                return _canAcceptData(target);
            },
            get: function (target, name, defValue, addDefault) {
                var theCache = target[data.id];
                if (!theCache) {
                    if (addDefault) {
                        theCache = _getCache(data, target);
                        theCache[normalizeJsName(name)] = defValue;
                    }
                    return defValue;
                }
                return theCache[normalizeJsName(name)];
            },
            kill: function (target, name) {
                if (target && target[name]) {
                    try {
                        delete target[name];
                    }
                    catch (e) {
                    }
                }
            }
        };
        return data;
    }

    function _isConfigDefaults(value) {
        return (value && isObject(value) && (value.isVal || value.fb || objHasOwn(value, "v") || objHasOwn(value, "mrg") || objHasOwn(value, "ref") || value.set));
    }
    function _getDefault(dynamicHandler, theConfig, cfgDefaults) {
        var defValue;
        var isDefaultValid = cfgDefaults.dfVal || isDefined;
        if (theConfig && cfgDefaults.fb) {
            var fallbacks = cfgDefaults.fb;
            if (!isArray(fallbacks)) {
                fallbacks = [fallbacks];
            }
            for (var lp = 0; lp < fallbacks[_DYN_LENGTH$1 ]; lp++) {
                var fallback = fallbacks[lp];
                var fbValue = theConfig[fallback];
                if (isDefaultValid(fbValue)) {
                    defValue = fbValue;
                }
                else if (dynamicHandler) {
                    fbValue = dynamicHandler.cfg[fallback];
                    if (isDefaultValid(fbValue)) {
                        defValue = fbValue;
                    }
                    dynamicHandler.set(dynamicHandler.cfg, asString(fallback), fbValue);
                }
                if (isDefaultValid(defValue)) {
                    break;
                }
            }
        }
        if (!isDefaultValid(defValue) && isDefaultValid(cfgDefaults.v)) {
            defValue = cfgDefaults.v;
        }
        return defValue;
    }
    function _resolveDefaultValue(dynamicHandler, theConfig, cfgDefaults) {
        var theValue = cfgDefaults;
        if (cfgDefaults && _isConfigDefaults(cfgDefaults)) {
            theValue = _getDefault(dynamicHandler, theConfig, cfgDefaults);
        }
        if (theValue) {
            if (_isConfigDefaults(theValue)) {
                theValue = _resolveDefaultValue(dynamicHandler, theConfig, theValue);
            }
            var newValue_1;
            if (isArray(theValue)) {
                newValue_1 = [];
                newValue_1[_DYN_LENGTH$1 ] = theValue[_DYN_LENGTH$1 ];
            }
            else if (isPlainObject(theValue)) {
                newValue_1 = {};
            }
            if (newValue_1) {
                objForEachKey(theValue, function (key, value) {
                    if (value && _isConfigDefaults(value)) {
                        value = _resolveDefaultValue(dynamicHandler, theConfig, value);
                    }
                    newValue_1[key] = value;
                });
                theValue = newValue_1;
            }
        }
        return theValue;
    }
    function _applyDefaultValue(dynamicHandler, theConfig, name, defaultValue) {
        var isValid;
        var setFn;
        var defValue;
        var cfgDefaults = defaultValue;
        var mergeDf;
        var reference;
        var readOnly;
        var blkDynamicValue;
        if (_isConfigDefaults(cfgDefaults)) {
            isValid = cfgDefaults.isVal;
            setFn = cfgDefaults.set;
            readOnly = cfgDefaults[_DYN_RD_ONLY ];
            blkDynamicValue = cfgDefaults[_DYN_BLK_VAL ];
            mergeDf = cfgDefaults.mrg;
            reference = cfgDefaults.ref;
            if (!reference && isUndefined(reference)) {
                reference = !!mergeDf;
            }
            defValue = _getDefault(dynamicHandler, theConfig, cfgDefaults);
        }
        else {
            defValue = defaultValue;
        }
        if (blkDynamicValue) {
            dynamicHandler[_DYN_BLK_VAL ](theConfig, name);
        }
        var theValue;
        var usingDefault = true;
        var cfgValue = theConfig[name];
        if (cfgValue || !isNullOrUndefined(cfgValue)) {
            theValue = cfgValue;
            usingDefault = false;
            if (isValid && theValue !== defValue && !isValid(theValue)) {
                theValue = defValue;
                usingDefault = true;
            }
            if (setFn) {
                theValue = setFn(theValue, defValue, theConfig);
                usingDefault = theValue === defValue;
            }
        }
        if (!usingDefault) {
            if (isPlainObject(theValue) || isArray(defValue)) {
                if (mergeDf && defValue && (isPlainObject(defValue) || isArray(defValue))) {
                    objForEachKey(defValue, function (dfName, dfValue) {
                        _applyDefaultValue(dynamicHandler, theValue, dfName, dfValue);
                    });
                }
            }
        }
        else if (defValue) {
            theValue = _resolveDefaultValue(dynamicHandler, theConfig, defValue);
        }
        else {
            theValue = defValue;
        }
        dynamicHandler.set(theConfig, name, theValue);
        if (reference) {
            dynamicHandler.ref(theConfig, name);
        }
        if (readOnly) {
            dynamicHandler[_DYN_RD_ONLY ](theConfig, name);
        }
    }

    var CFG_HANDLER_LINK = symbolFor("[[ai_dynCfg_1]]");
    var BLOCK_DYNAMIC = symbolFor("[[ai_blkDynCfg_1]]");
    var FORCE_DYNAMIC = symbolFor("[[ai_frcDynCfg_1]]");
    function _cfgDeepCopy(source) {
        if (source) {
            var target_1;
            if (isArray(source)) {
                target_1 = [];
                target_1[_DYN_LENGTH$1 ] = source[_DYN_LENGTH$1 ];
            }
            else if (isPlainObject(source)) {
                target_1 = {};
            }
            if (target_1) {
                objForEachKey(source, function (key, value) {
                    target_1[key] = _cfgDeepCopy(value);
                });
                return target_1;
            }
        }
        return source;
    }
    function getDynamicConfigHandler(value) {
        if (value) {
            var handler = value[CFG_HANDLER_LINK] || value;
            if (handler.cfg && (handler.cfg === value || handler.cfg[CFG_HANDLER_LINK] === handler)) {
                return handler;
            }
        }
        return null;
    }
    function blockDynamicConversion(value) {
        if (value && (isPlainObject(value) || isArray(value))) {
            try {
                value[BLOCK_DYNAMIC] = true;
            }
            catch (e) {
            }
        }
        return value;
    }
    function forceDynamicConversion(value) {
        if (value) {
            try {
                value[FORCE_DYNAMIC] = true;
            }
            catch (e) {
            }
        }
        return value;
    }
    function _canMakeDynamic(getFunc, state, value) {
        var result = false;
        if (value && !getFunc[state.blkVal]) {
            result = value[FORCE_DYNAMIC];
            if (!result && !value[BLOCK_DYNAMIC]) {
                result = isPlainObject(value) || isArray(value);
            }
        }
        return result;
    }
    function throwInvalidAccess(message) {
        throwTypeError("InvalidAccess:" + message);
    }

    var arrayMethodsToPatch = [
        "push",
        "pop",
        "shift",
        "unshift",
        "splice"
    ];
    var _throwDynamicError = function (logger, name, desc, e) {
        logger && logger[_DYN_THROW_INTERNAL ](3 , 108 , "".concat(desc, " [").concat(name, "] failed - ") + dumpObj(e));
    };
    function _patchArray(state, target, name) {
        if (isArray(target)) {
            arrForEach(arrayMethodsToPatch, function (method) {
                var orgMethod = target[method];
                target[method] = function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    var result = orgMethod[_DYN_APPLY ](this, args);
                    _makeDynamicObject(state, target, name, "Patching");
                    return result;
                };
            });
        }
    }
    function _getOwnPropGetter(target, name) {
        var propDesc = objGetOwnPropertyDescriptor(target, name);
        return propDesc && propDesc.get;
    }
    function _createDynamicProperty(state, theConfig, name, value) {
        var detail = {
            n: name,
            h: [],
            trk: function (handler) {
                if (handler && handler.fn) {
                    if (arrIndexOf(detail.h, handler) === -1) {
                        detail.h[_DYN_PUSH ](handler);
                    }
                    state.trk(handler, detail);
                }
            },
            clr: function (handler) {
                var idx = arrIndexOf(detail.h, handler);
                if (idx !== -1) {
                    detail.h[_DYN_SPLICE ](idx, 1);
                }
            }
        };
        var checkDynamic = true;
        var isObjectOrArray = false;
        function _getProperty() {
            if (checkDynamic) {
                isObjectOrArray = isObjectOrArray || _canMakeDynamic(_getProperty, state, value);
                if (value && !value[CFG_HANDLER_LINK] && isObjectOrArray) {
                    value = _makeDynamicObject(state, value, name, "Converting");
                }
                checkDynamic = false;
            }
            var activeHandler = state.act;
            if (activeHandler) {
                detail.trk(activeHandler);
            }
            return value;
        }
        _getProperty[state.prop] = {
            chng: function () {
                state.add(detail);
            }
        };
        function _setProperty(newValue) {
            if (value !== newValue) {
                if (!!_getProperty[state.ro] && !state.upd) {
                    throwInvalidAccess("[" + name + "] is read-only:" + dumpObj(theConfig));
                }
                if (checkDynamic) {
                    isObjectOrArray = isObjectOrArray || _canMakeDynamic(_getProperty, state, value);
                    checkDynamic = false;
                }
                var isReferenced = isObjectOrArray && _getProperty[state.rf];
                if (isObjectOrArray) {
                    if (isReferenced) {
                        objForEachKey(value, function (key) {
                            value[key] = newValue ? newValue[key] : UNDEFINED_VALUE;
                        });
                        try {
                            objForEachKey(newValue, function (key, theValue) {
                                _setDynamicProperty(state, value, key, theValue);
                            });
                            newValue = value;
                        }
                        catch (e) {
                            _throwDynamicError((state.hdlr || {})[_DYN_LOGGER$1 ], name, "Assigning", e);
                            isObjectOrArray = false;
                        }
                    }
                    else if (value && value[CFG_HANDLER_LINK]) {
                        objForEachKey(value, function (key) {
                            var getter = _getOwnPropGetter(value, key);
                            if (getter) {
                                var valueState = getter[state.prop];
                                valueState && valueState.chng();
                            }
                        });
                    }
                }
                if (newValue !== value) {
                    var newIsObjectOrArray = newValue && _canMakeDynamic(_getProperty, state, newValue);
                    if (!isReferenced && newIsObjectOrArray) {
                        newValue = _makeDynamicObject(state, newValue, name, "Converting");
                    }
                    value = newValue;
                    isObjectOrArray = newIsObjectOrArray;
                }
                state.add(detail);
            }
        }
        objDefine(theConfig, detail.n, { g: _getProperty, s: _setProperty });
    }
    function _setDynamicProperty(state, target, name, value) {
        if (target) {
            var getter = _getOwnPropGetter(target, name);
            var isDynamic = getter && !!getter[state.prop];
            if (!isDynamic) {
                _createDynamicProperty(state, target, name, value);
            }
            else {
                target[name] = value;
            }
        }
        return target;
    }
    function _setDynamicPropertyState(state, target, name, flags) {
        if (target) {
            var getter = _getOwnPropGetter(target, name);
            var isDynamic = getter && !!getter[state.prop];
            var inPlace = flags && flags[0 ];
            var rdOnly = flags && flags[1 ];
            var blkProp = flags && flags[2 ];
            if (!isDynamic) {
                if (blkProp) {
                    try {
                        blockDynamicConversion(target);
                    }
                    catch (e) {
                        _throwDynamicError((state.hdlr || {})[_DYN_LOGGER$1 ], name, "Blocking", e);
                    }
                }
                try {
                    _setDynamicProperty(state, target, name, target[name]);
                    getter = _getOwnPropGetter(target, name);
                }
                catch (e) {
                    _throwDynamicError((state.hdlr || {})[_DYN_LOGGER$1 ], name, "State", e);
                }
            }
            if (inPlace) {
                getter[state.rf] = inPlace;
            }
            if (rdOnly) {
                getter[state.ro] = rdOnly;
            }
            if (blkProp) {
                getter[state.blkVal] = true;
            }
        }
        return target;
    }
    function _makeDynamicObject(state, target, name, desc) {
        try {
            objForEachKey(target, function (key, value) {
                _setDynamicProperty(state, target, key, value);
            });
            if (!target[CFG_HANDLER_LINK]) {
                objDefineProp(target, CFG_HANDLER_LINK, {
                    get: function () {
                        return state[_DYN_HDLR ];
                    }
                });
                _patchArray(state, target, name);
            }
        }
        catch (e) {
            _throwDynamicError((state.hdlr || {})[_DYN_LOGGER$1 ], name, desc, e);
        }
        return target;
    }

    var symPrefix = "[[ai_";
    var symPostfix = "]]";
    function _createState(cfgHandler) {
        var _a;
        var dynamicPropertySymbol = newSymbol(symPrefix + "get" + cfgHandler.uid + symPostfix);
        var dynamicPropertyReadOnly = newSymbol(symPrefix + "ro" + cfgHandler.uid + symPostfix);
        var dynamicPropertyReferenced = newSymbol(symPrefix + "rf" + cfgHandler.uid + symPostfix);
        var dynamicPropertyBlockValue = newSymbol(symPrefix + "blkVal" + cfgHandler.uid + symPostfix);
        var dynamicPropertyDetail = newSymbol(symPrefix + "dtl" + cfgHandler.uid + symPostfix);
        var _waitingHandlers = null;
        var _watcherTimer = null;
        var theState;
        function _useHandler(activeHandler, callback) {
            var prevWatcher = theState.act;
            try {
                theState.act = activeHandler;
                if (activeHandler && activeHandler[dynamicPropertyDetail]) {
                    arrForEach(activeHandler[dynamicPropertyDetail], function (detail) {
                        detail.clr(activeHandler);
                    });
                    activeHandler[dynamicPropertyDetail] = [];
                }
                callback({
                    cfg: cfgHandler.cfg,
                    set: cfgHandler.set.bind(cfgHandler),
                    setDf: cfgHandler[_DYN_SET_DF ].bind(cfgHandler),
                    ref: cfgHandler.ref.bind(cfgHandler),
                    rdOnly: cfgHandler[_DYN_RD_ONLY ].bind(cfgHandler)
                });
            }
            catch (e) {
                var logger = cfgHandler[_DYN_LOGGER$1 ];
                if (logger) {
                    logger[_DYN_THROW_INTERNAL ](1 , 107 , dumpObj(e));
                }
                throw e;
            }
            finally {
                theState.act = prevWatcher || null;
            }
        }
        function _notifyWatchers() {
            if (_waitingHandlers) {
                var notifyHandlers = _waitingHandlers;
                _waitingHandlers = null;
                _watcherTimer && _watcherTimer[_DYN_CANCEL ]();
                _watcherTimer = null;
                var watcherFailures_1 = [];
                arrForEach(notifyHandlers, function (handler) {
                    if (handler) {
                        if (handler[dynamicPropertyDetail]) {
                            arrForEach(handler[dynamicPropertyDetail], function (detail) {
                                detail.clr(handler);
                            });
                            handler[dynamicPropertyDetail] = null;
                        }
                        if (handler.fn) {
                            try {
                                _useHandler(handler, handler.fn);
                            }
                            catch (e) {
                                watcherFailures_1[_DYN_PUSH ](e);
                            }
                        }
                    }
                });
                if (_waitingHandlers) {
                    try {
                        _notifyWatchers();
                    }
                    catch (e) {
                        watcherFailures_1[_DYN_PUSH ](e);
                    }
                }
                if (watcherFailures_1[_DYN_LENGTH$1 ] > 0) {
                    throwAggregationError("Watcher error(s): ", watcherFailures_1);
                }
            }
        }
        function _addWatcher(detail) {
            if (detail && detail.h[_DYN_LENGTH$1 ] > 0) {
                if (!_waitingHandlers) {
                    _waitingHandlers = [];
                }
                if (!_watcherTimer) {
                    _watcherTimer = scheduleTimeout(function () {
                        _watcherTimer = null;
                        _notifyWatchers();
                    }, 0);
                }
                for (var idx = 0; idx < detail.h[_DYN_LENGTH$1 ]; idx++) {
                    var handler = detail.h[idx];
                    if (handler && arrIndexOf(_waitingHandlers, handler) === -1) {
                        _waitingHandlers[_DYN_PUSH ](handler);
                    }
                }
            }
        }
        function _trackHandler(handler, detail) {
            if (handler) {
                var details = handler[dynamicPropertyDetail] = handler[dynamicPropertyDetail] || [];
                if (arrIndexOf(details, detail) === -1) {
                    details[_DYN_PUSH ](detail);
                }
            }
        }
        theState = (_a = {
                prop: dynamicPropertySymbol,
                ro: dynamicPropertyReadOnly,
                rf: dynamicPropertyReferenced
            },
            _a[_DYN_BLK_VAL ] = dynamicPropertyBlockValue,
            _a[_DYN_HDLR ] = cfgHandler,
            _a.add = _addWatcher,
            _a[_DYN_NOTIFY ] = _notifyWatchers,
            _a.use = _useHandler,
            _a.trk = _trackHandler,
            _a);
        return theState;
    }

    function _createAndUseHandler(state, configHandler) {
        var handler = {
            fn: configHandler,
            rm: function () {
                handler.fn = null;
                state = null;
                configHandler = null;
            }
        };
        objDefine(handler, "toJSON", { v: function () { return "WatcherHandler" + (handler.fn ? "" : "[X]"); } });
        state.use(handler, configHandler);
        return handler;
    }
    function _createDynamicHandler(logger, target, inPlace) {
        var _a;
        var dynamicHandler = getDynamicConfigHandler(target);
        if (dynamicHandler) {
            return dynamicHandler;
        }
        var uid = createUniqueNamespace("dyncfg", true);
        var newTarget = (target && inPlace !== false) ? target : _cfgDeepCopy(target);
        var theState;
        function _notifyWatchers() {
            theState[_DYN_NOTIFY ]();
        }
        function _setValue(target, name, value) {
            try {
                target = _setDynamicProperty(theState, target, name, value);
            }
            catch (e) {
                _throwDynamicError(logger, name, "Setting value", e);
            }
            return target[name];
        }
        function _watch(configHandler) {
            return _createAndUseHandler(theState, configHandler);
        }
        function _block(configHandler, allowUpdate) {
            theState.use(null, function (details) {
                var prevUpd = theState.upd;
                try {
                    if (!isUndefined(allowUpdate)) {
                        theState.upd = allowUpdate;
                    }
                    configHandler(details);
                }
                finally {
                    theState.upd = prevUpd;
                }
            });
        }
        function _ref(target, name) {
            var _a;
            return _setDynamicPropertyState(theState, target, name, (_a = {}, _a[0 ] = true, _a))[name];
        }
        function _rdOnly(target, name) {
            var _a;
            return _setDynamicPropertyState(theState, target, name, (_a = {}, _a[1 ] = true, _a))[name];
        }
        function _blkPropValue(target, name) {
            var _a;
            return _setDynamicPropertyState(theState, target, name, (_a = {}, _a[2 ] = true, _a))[name];
        }
        function _applyDefaults(theConfig, defaultValues) {
            if (defaultValues) {
                objForEachKey(defaultValues, function (name, value) {
                    _applyDefaultValue(cfgHandler, theConfig, name, value);
                });
            }
            return theConfig;
        }
        var cfgHandler = (_a = {
                uid: null,
                cfg: newTarget
            },
            _a[_DYN_LOGGER$1 ] = logger,
            _a[_DYN_NOTIFY ] = _notifyWatchers,
            _a.set = _setValue,
            _a[_DYN_SET_DF ] = _applyDefaults,
            _a[_DYN_WATCH ] = _watch,
            _a.ref = _ref,
            _a[_DYN_RD_ONLY ] = _rdOnly,
            _a[_DYN_BLK_VAL ] = _blkPropValue,
            _a._block = _block,
            _a);
        objDefine(cfgHandler, "uid", {
            c: false,
            e: false,
            w: false,
            v: uid
        });
        theState = _createState(cfgHandler);
        _makeDynamicObject(theState, newTarget, "config", "Creating");
        return cfgHandler;
    }
    function _logInvalidAccess(logger, message) {
        if (logger) {
            logger[_DYN_WARN_TO_CONSOLE ](message);
            logger[_DYN_THROW_INTERNAL ](2 , 108 , message);
        }
        else {
            throwInvalidAccess(message);
        }
    }
    function createDynamicConfig(config, defaultConfig, logger, inPlace) {
        var dynamicHandler = _createDynamicHandler(logger, config || {}, inPlace);
        if (defaultConfig) {
            dynamicHandler[_DYN_SET_DF ](dynamicHandler.cfg, defaultConfig);
        }
        return dynamicHandler;
    }
    function onConfigChange(config, configHandler, logger) {
        var handler = config[CFG_HANDLER_LINK] || config;
        if (handler.cfg && (handler.cfg === config || handler.cfg[CFG_HANDLER_LINK] === handler)) {
            return handler[_DYN_WATCH ](configHandler);
        }
        _logInvalidAccess(logger, STR_NOT_DYNAMIC_ERROR + dumpObj(config));
        return createDynamicConfig(config, null, logger)[_DYN_WATCH ](configHandler);
    }

    function runTargetUnload(target, isAsync) {
        if (target && target[_DYN_UNLOAD ]) {
            return target[_DYN_UNLOAD ](isAsync);
        }
    }
    function doUnloadAll(targets, isAsync, done) {
        var result;
        if (!done) {
            result = createPromise(function (resolved) {
                done = resolved;
            });
        }
        if (targets && getLength(targets) > 0) {
            doAwaitResponse(runTargetUnload(targets[0], isAsync), function () {
                doUnloadAll(arrSlice(targets, 1), isAsync, done);
            });
        }
        else {
            done();
        }
        return result;
    }

    var ChannelControllerPriority = 500;
    var DisabledPropertyName = "Microsoft_ApplicationInsights_BypassAjaxInstrumentation";

    function cfgDfMerge(defaultValue) {
        return {
            mrg: true,
            v: defaultValue
        };
    }

    var listenerFuncs = [STR_EVENTS_SENT, STR_EVENTS_DISCARDED, STR_EVENTS_SEND_REQUEST, STR_PERF_EVENT];
    var _aiNamespace = null;
    var _debugListener;
    function _listenerProxyFunc(name, config) {
        return function () {
            var args = arguments;
            var dbgExt = getDebugExt(config);
            if (dbgExt) {
                var listener = dbgExt.listener;
                if (listener && listener[name]) {
                    listener[name][_DYN_APPLY ](listener, args);
                }
            }
        };
    }
    function _getExtensionNamespace() {
        var target = getInst("Microsoft");
        if (target) {
            _aiNamespace = target["ApplicationInsights"];
        }
        return _aiNamespace;
    }
    function getDebugExt(config) {
        var ns = _aiNamespace;
        if (!ns && config.disableDbgExt !== true) {
            ns = _aiNamespace || _getExtensionNamespace();
        }
        return ns ? ns["ChromeDbgExt"] : null;
    }
    function getDebugListener(config) {
        if (!_debugListener) {
            _debugListener = {};
            for (var lp = 0; lp < listenerFuncs[_DYN_LENGTH$1 ]; lp++) {
                _debugListener[listenerFuncs[lp]] = _listenerProxyFunc(listenerFuncs[lp], config);
            }
        }
        return _debugListener;
    }

    var _a$4;
    var STR_WARN_TO_CONSOLE = "warnToConsole";
    var AiNonUserActionablePrefix = "AI (Internal): ";
    var AiUserActionablePrefix = "AI: ";
    var AIInternalMessagePrefix = "AITR_";
    var defaultValues$2 = {
        loggingLevelConsole: 0,
        loggingLevelTelemetry: 1,
        maxMessageLimit: 25,
        enableDebug: false
    };
    var _logFuncs = (_a$4 = {},
        _a$4[0 ] = null,
        _a$4[1 ] = "errorToConsole",
        _a$4[2 ] = STR_WARN_TO_CONSOLE,
        _a$4[3 ] = "debugToConsole",
        _a$4);
    function _sanitizeDiagnosticText(text) {
        if (text) {
            return "\"" + text[_DYN_REPLACE ](/\"/g, STR_EMPTY$2) + "\"";
        }
        return STR_EMPTY$2;
    }
    function _logToConsole(func, message) {
        var theConsole = getConsole();
        if (!!theConsole) {
            var logFunc = "log";
            if (theConsole[func]) {
                logFunc = func;
            }
            if (isFunction(theConsole[logFunc])) {
                theConsole[logFunc](message);
            }
        }
    }
    var _InternalLogMessage = /** @class */ (function () {
        function _InternalLogMessage(msgId, msg, isUserAct, properties) {
            if (isUserAct === void 0) { isUserAct = false; }
            var _self = this;
            _self[_DYN_MESSAGE_ID ] = msgId;
            _self[_DYN_MESSAGE ] =
                (isUserAct ? AiUserActionablePrefix : AiNonUserActionablePrefix) +
                    msgId;
            var strProps = STR_EMPTY$2;
            if (hasJSON()) {
                strProps = getJSON().stringify(properties);
            }
            var diagnosticText = (msg ? " message:" + _sanitizeDiagnosticText(msg) : STR_EMPTY$2) +
                (properties ? " props:" + _sanitizeDiagnosticText(strProps) : STR_EMPTY$2);
            _self[_DYN_MESSAGE ] += diagnosticText;
        }
        _InternalLogMessage.dataType = "MessageData";
        return _InternalLogMessage;
    }());
    function safeGetLogger(core, config) {
        return (core || {})[_DYN_LOGGER$1 ] || new DiagnosticLogger(config);
    }
    var DiagnosticLogger = /** @class */ (function () {
        function DiagnosticLogger(config) {
            this.identifier = "DiagnosticLogger";
            this.queue = [];
            var _messageCount = 0;
            var _messageLogged = {};
            var _loggingLevelConsole;
            var _loggingLevelTelemetry;
            var _maxInternalMessageLimit;
            var _enableDebug;
            var _unloadHandler;
            dynamicProto(DiagnosticLogger, this, function (_self) {
                _unloadHandler = _setDefaultsFromConfig(config || {});
                _self.consoleLoggingLevel = function () { return _loggingLevelConsole; };
                _self[_DYN_THROW_INTERNAL ] = function (severity, msgId, msg, properties, isUserAct) {
                    if (isUserAct === void 0) { isUserAct = false; }
                    var message = new _InternalLogMessage(msgId, msg, isUserAct, properties);
                    if (_enableDebug) {
                        throw dumpObj(message);
                    }
                    else {
                        var logFunc = _logFuncs[severity] || STR_WARN_TO_CONSOLE;
                        if (!isUndefined(message[_DYN_MESSAGE ])) {
                            if (isUserAct) {
                                var messageKey = +message[_DYN_MESSAGE_ID ];
                                if (!_messageLogged[messageKey] && _loggingLevelConsole >= severity) {
                                    _self[logFunc](message[_DYN_MESSAGE ]);
                                    _messageLogged[messageKey] = true;
                                }
                            }
                            else {
                                if (_loggingLevelConsole >= severity) {
                                    _self[logFunc](message[_DYN_MESSAGE ]);
                                }
                            }
                            _logInternalMessage(severity, message);
                        }
                        else {
                            _debugExtMsg("throw" + (severity === 1  ? "Critical" : "Warning"), message);
                        }
                    }
                };
                _self.debugToConsole = function (message) {
                    _logToConsole("debug", message);
                    _debugExtMsg("warning", message);
                };
                _self[_DYN_WARN_TO_CONSOLE ] = function (message) {
                    _logToConsole("warn", message);
                    _debugExtMsg("warning", message);
                };
                _self.errorToConsole = function (message) {
                    _logToConsole("error", message);
                    _debugExtMsg("error", message);
                };
                _self.resetInternalMessageCount = function () {
                    _messageCount = 0;
                    _messageLogged = {};
                };
                _self[_DYN_LOG_INTERNAL_MESSAGE ] = _logInternalMessage;
                _self[_DYN_UNLOAD ] = function (isAsync) {
                    _unloadHandler && _unloadHandler.rm();
                    _unloadHandler = null;
                };
                function _logInternalMessage(severity, message) {
                    if (_areInternalMessagesThrottled()) {
                        return;
                    }
                    var logMessage = true;
                    var messageKey = AIInternalMessagePrefix + message[_DYN_MESSAGE_ID ];
                    if (_messageLogged[messageKey]) {
                        logMessage = false;
                    }
                    else {
                        _messageLogged[messageKey] = true;
                    }
                    if (logMessage) {
                        if (severity <= _loggingLevelTelemetry) {
                            _self.queue[_DYN_PUSH ](message);
                            _messageCount++;
                            _debugExtMsg((severity === 1  ? "error" : "warn"), message);
                        }
                        if (_messageCount === _maxInternalMessageLimit) {
                            var throttleLimitMessage = "Internal events throttle limit per PageView reached for this app.";
                            var throttleMessage = new _InternalLogMessage(23 , throttleLimitMessage, false);
                            _self.queue[_DYN_PUSH ](throttleMessage);
                            if (severity === 1 ) {
                                _self.errorToConsole(throttleLimitMessage);
                            }
                            else {
                                _self[_DYN_WARN_TO_CONSOLE ](throttleLimitMessage);
                            }
                        }
                    }
                }
                function _setDefaultsFromConfig(config) {
                    return onConfigChange(createDynamicConfig(config, defaultValues$2, _self).cfg, function (details) {
                        var config = details.cfg;
                        _loggingLevelConsole = config[_DYN_LOGGING_LEVEL_CONSOL4 ];
                        _loggingLevelTelemetry = config.loggingLevelTelemetry;
                        _maxInternalMessageLimit = config.maxMessageLimit;
                        _enableDebug = config.enableDebug;
                    });
                }
                function _areInternalMessagesThrottled() {
                    return _messageCount >= _maxInternalMessageLimit;
                }
                function _debugExtMsg(name, data) {
                    var dbgExt = getDebugExt(config || {});
                    if (dbgExt && dbgExt[_DYN_DIAG_LOG ]) {
                        dbgExt[_DYN_DIAG_LOG ](name, data);
                    }
                }
            });
        }
        DiagnosticLogger.__ieDyn=1;
        return DiagnosticLogger;
    }());
    function _getLogger(logger) {
        return (logger || new DiagnosticLogger());
    }
    function _throwInternal(logger, severity, msgId, msg, properties, isUserAct) {
        if (isUserAct === void 0) { isUserAct = false; }
        _getLogger(logger)[_DYN_THROW_INTERNAL ](severity, msgId, msg, properties, isUserAct);
    }
    function _warnToConsole(logger, message) {
        _getLogger(logger)[_DYN_WARN_TO_CONSOLE ](message);
    }
    function _logInternalMessage(logger, severity, message) {
        _getLogger(logger)[_DYN_LOG_INTERNAL_MESSAGE ](severity, message);
    }

    var _a$3, _b;
    var strToGMTString = "toGMTString";
    var strToUTCString = "toUTCString";
    var strCookie = "cookie";
    var strExpires = "expires";
    var strIsCookieUseDisabled = "isCookieUseDisabled";
    var strDisableCookiesUsage = "disableCookiesUsage";
    var strConfigCookieMgr = "_ckMgr";
    var _supportsCookies = null;
    var _allowUaSameSite = null;
    var _parsedCookieValue = null;
    var _doc;
    var _cookieCache = {};
    var _globalCookieConfig = {};
    var rootDefaultConfig = (_a$3 = {
            cookieCfg: cfgDfMerge((_b = {},
                _b[STR_DOMAIN] = { fb: "cookieDomain", dfVal: isNotNullOrUndefined },
                _b.path = { fb: "cookiePath", dfVal: isNotNullOrUndefined },
                _b.enabled = UNDEFINED_VALUE,
                _b.ignoreCookies = UNDEFINED_VALUE,
                _b.blockedCookies = UNDEFINED_VALUE,
                _b)),
            cookieDomain: UNDEFINED_VALUE,
            cookiePath: UNDEFINED_VALUE
        },
        _a$3[strDisableCookiesUsage] = UNDEFINED_VALUE,
        _a$3);
    function _getDoc() {
        !_doc && (_doc = getLazy(function () { return getDocument(); }));
    }
    function _gblCookieMgr(config, logger) {
        var inst = createCookieMgr[strConfigCookieMgr] || _globalCookieConfig[strConfigCookieMgr];
        if (!inst) {
            inst = createCookieMgr[strConfigCookieMgr] = createCookieMgr(config, logger);
            _globalCookieConfig[strConfigCookieMgr] = inst;
        }
        return inst;
    }
    function _isMgrEnabled(cookieMgr) {
        if (cookieMgr) {
            return cookieMgr.isEnabled();
        }
        return true;
    }
    function _isIgnoredCookie(cookieMgrCfg, name) {
        if (name && cookieMgrCfg && isArray(cookieMgrCfg.ignoreCookies)) {
            return arrIndexOf(cookieMgrCfg.ignoreCookies, name) !== -1;
        }
        return false;
    }
    function _isBlockedCookie(cookieMgrCfg, name) {
        if (name && cookieMgrCfg && isArray(cookieMgrCfg.blockedCookies)) {
            if (arrIndexOf(cookieMgrCfg.blockedCookies, name) !== -1) {
                return true;
            }
        }
        return _isIgnoredCookie(cookieMgrCfg, name);
    }
    function _isCfgEnabled(rootConfig, cookieMgrConfig) {
        var isCfgEnabled = cookieMgrConfig[_DYN_ENABLED ];
        if (isNullOrUndefined(isCfgEnabled)) {
            var cookieEnabled = void 0;
            if (!isUndefined(rootConfig[strIsCookieUseDisabled])) {
                cookieEnabled = !rootConfig[strIsCookieUseDisabled];
            }
            if (!isUndefined(rootConfig[strDisableCookiesUsage])) {
                cookieEnabled = !rootConfig[strDisableCookiesUsage];
            }
            isCfgEnabled = cookieEnabled;
        }
        return isCfgEnabled;
    }
    function safeGetCookieMgr(core, config) {
        var cookieMgr;
        if (core) {
            cookieMgr = core.getCookieMgr();
        }
        else if (config) {
            var cookieCfg = config.cookieCfg;
            if (cookieCfg && cookieCfg[strConfigCookieMgr]) {
                cookieMgr = cookieCfg[strConfigCookieMgr];
            }
            else {
                cookieMgr = createCookieMgr(config);
            }
        }
        if (!cookieMgr) {
            cookieMgr = _gblCookieMgr(config, (core || {})[_DYN_LOGGER$1 ]);
        }
        return cookieMgr;
    }
    function createCookieMgr(rootConfig, logger) {
        var _a;
        var cookieMgrConfig;
        var _path;
        var _domain;
        var unloadHandler;
        var _enabled;
        var _getCookieFn;
        var _setCookieFn;
        var _delCookieFn;
        rootConfig = createDynamicConfig(rootConfig || _globalCookieConfig, null, logger).cfg;
        unloadHandler = onConfigChange(rootConfig, function (details) {
            details[_DYN_SET_DF ](details.cfg, rootDefaultConfig);
            cookieMgrConfig = details.ref(details.cfg, "cookieCfg");
            _path = cookieMgrConfig[STR_PATH ] || "/";
            _domain = cookieMgrConfig[STR_DOMAIN ];
            _enabled = _isCfgEnabled(rootConfig, cookieMgrConfig) !== false;
            _getCookieFn = cookieMgrConfig.getCookie || _getCookieValue;
            _setCookieFn = cookieMgrConfig.setCookie || _setCookieValue;
            _delCookieFn = cookieMgrConfig.delCookie || _setCookieValue;
        }, logger);
        var cookieMgr = (_a = {
                isEnabled: function () {
                    var enabled = _isCfgEnabled(rootConfig, cookieMgrConfig) !== false && _enabled && areCookiesSupported(logger);
                    var gblManager = _globalCookieConfig[strConfigCookieMgr];
                    if (enabled && gblManager && cookieMgr !== gblManager) {
                        enabled = _isMgrEnabled(gblManager);
                    }
                    return enabled;
                },
                setEnabled: function (value) {
                    _enabled = value !== false;
                    cookieMgrConfig[_DYN_ENABLED ] = value;
                },
                set: function (name, value, maxAgeSec, domain, path) {
                    var result = false;
                    if (_isMgrEnabled(cookieMgr) && !_isBlockedCookie(cookieMgrConfig, name)) {
                        var values = {};
                        var theValue = strTrim(value || STR_EMPTY$2);
                        var idx = strIndexOf(theValue, ";");
                        if (idx !== -1) {
                            theValue = strTrim(strLeft(value, idx));
                            values = _extractParts(strSubstring(value, idx + 1));
                        }
                        setValue(values, STR_DOMAIN, domain || _domain, isTruthy, isUndefined);
                        if (!isNullOrUndefined(maxAgeSec)) {
                            var _isIE = isIE();
                            if (isUndefined(values[strExpires])) {
                                var nowMs = utcNow();
                                var expireMs = nowMs + (maxAgeSec * 1000);
                                if (expireMs > 0) {
                                    var expiry = new Date();
                                    expiry.setTime(expireMs);
                                    setValue(values, strExpires, _formatDate(expiry, !_isIE ? strToUTCString : strToGMTString) || _formatDate(expiry, _isIE ? strToGMTString : strToUTCString) || STR_EMPTY$2, isTruthy);
                                }
                            }
                            if (!_isIE) {
                                setValue(values, "max-age", STR_EMPTY$2 + maxAgeSec, null, isUndefined);
                            }
                        }
                        var location_1 = getLocation();
                        if (location_1 && location_1[_DYN_PROTOCOL ] === "https:") {
                            setValue(values, "secure", null, null, isUndefined);
                            if (_allowUaSameSite === null) {
                                _allowUaSameSite = !uaDisallowsSameSiteNone((getNavigator() || {})[_DYN_USER_AGENT ]);
                            }
                            if (_allowUaSameSite) {
                                setValue(values, "SameSite", "None", null, isUndefined);
                            }
                        }
                        setValue(values, STR_PATH, path || _path, null, isUndefined);
                        _setCookieFn(name, _formatCookieValue(theValue, values));
                        result = true;
                    }
                    return result;
                },
                get: function (name) {
                    var value = STR_EMPTY$2;
                    if (_isMgrEnabled(cookieMgr) && !_isIgnoredCookie(cookieMgrConfig, name)) {
                        value = _getCookieFn(name);
                    }
                    return value;
                },
                del: function (name, path) {
                    var result = false;
                    if (_isMgrEnabled(cookieMgr)) {
                        result = cookieMgr.purge(name, path);
                    }
                    return result;
                },
                purge: function (name, path) {
                    var _a;
                    var result = false;
                    if (areCookiesSupported(logger)) {
                        var values = (_a = {},
                            _a[STR_PATH] = path ? path : "/",
                            _a[strExpires] = "Thu, 01 Jan 1970 00:00:01 GMT",
                            _a);
                        if (!isIE()) {
                            values["max-age"] = "0";
                        }
                        _delCookieFn(name, _formatCookieValue(STR_EMPTY$2, values));
                        result = true;
                    }
                    return result;
                }
            },
            _a[_DYN_UNLOAD ] = function (isAsync) {
                unloadHandler && unloadHandler.rm();
                unloadHandler = null;
            },
            _a);
        cookieMgr[strConfigCookieMgr] = cookieMgr;
        return cookieMgr;
    }
    function areCookiesSupported(logger) {
        if (_supportsCookies === null) {
            _supportsCookies = false;
            !_doc && _getDoc();
            try {
                var doc = _doc.v || {};
                _supportsCookies = doc[strCookie] !== undefined;
            }
            catch (e) {
                _throwInternal(logger, 2 , 68 , "Cannot access document.cookie - " + getExceptionName(e), { exception: dumpObj(e) });
            }
        }
        return _supportsCookies;
    }
    function _extractParts(theValue) {
        var values = {};
        if (theValue && theValue[_DYN_LENGTH$1 ]) {
            var parts = strTrim(theValue)[_DYN_SPLIT ](";");
            arrForEach(parts, function (thePart) {
                thePart = strTrim(thePart || STR_EMPTY$2);
                if (thePart) {
                    var idx = strIndexOf(thePart, "=");
                    if (idx === -1) {
                        values[thePart] = null;
                    }
                    else {
                        values[strTrim(strLeft(thePart, idx))] = strTrim(strSubstring(thePart, idx + 1));
                    }
                }
            });
        }
        return values;
    }
    function _formatDate(theDate, func) {
        if (isFunction(theDate[func])) {
            return theDate[func]();
        }
        return null;
    }
    function _formatCookieValue(value, values) {
        var cookieValue = value || STR_EMPTY$2;
        objForEachKey(values, function (name, theValue) {
            cookieValue += "; " + name + (!isNullOrUndefined(theValue) ? "=" + theValue : STR_EMPTY$2);
        });
        return cookieValue;
    }
    function _getCookieValue(name) {
        var cookieValue = STR_EMPTY$2;
        !_doc && _getDoc();
        if (_doc.v) {
            var theCookie = _doc.v[strCookie] || STR_EMPTY$2;
            if (_parsedCookieValue !== theCookie) {
                _cookieCache = _extractParts(theCookie);
                _parsedCookieValue = theCookie;
            }
            cookieValue = strTrim(_cookieCache[name] || STR_EMPTY$2);
        }
        return cookieValue;
    }
    function _setCookieValue(name, cookieValue) {
        !_doc && _getDoc();
        if (_doc.v) {
            _doc.v[strCookie] = name + "=" + cookieValue;
        }
    }
    function uaDisallowsSameSiteNone(userAgent) {
        if (!isString(userAgent)) {
            return false;
        }
        if (strContains(userAgent, "CPU iPhone OS 12") || strContains(userAgent, "iPad; CPU OS 12")) {
            return true;
        }
        if (strContains(userAgent, "Macintosh; Intel Mac OS X 10_14") && strContains(userAgent, "Version/") && strContains(userAgent, "Safari")) {
            return true;
        }
        if (strContains(userAgent, "Macintosh; Intel Mac OS X 10_14") && strEndsWith(userAgent, "AppleWebKit/605.1.15 (KHTML, like Gecko)")) {
            return true;
        }
        if (strContains(userAgent, "Chrome/5") || strContains(userAgent, "Chrome/6")) {
            return true;
        }
        if (strContains(userAgent, "UnrealEngine") && !strContains(userAgent, "Chrome")) {
            return true;
        }
        if (strContains(userAgent, "UCBrowser/12") || strContains(userAgent, "UCBrowser/11")) {
            return true;
        }
        return false;
    }

    var defaultValues$1 = {
        perfEvtsSendAll: false
    };
    function _runScheduledListeners(asyncNotifications) {
        asyncNotifications.h = null;
        var callbacks = asyncNotifications.cb;
        asyncNotifications.cb = [];
        arrForEach(callbacks, function (cb) {
            safe(cb.fn, [cb.arg]);
        });
    }
    function _runListeners(listeners, name, asyncNotifications, callback) {
      