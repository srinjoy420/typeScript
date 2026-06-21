"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let age = 21;
let userName = "John Doe";
let big = 5465443464n;
let noting = null;
let notAssigned = undefined;
let isActive = true;
console.log("real age", age);
console.log("real name", userName);
// tuple
let array = ["123", 45, true];
// array
let scores = [1, 2, 3];
//union
let id = "01001";
// enum
let role = "admin";
var Status;
(function (Status) {
    Status[Status["PENDING"] = 0] = "PENDING";
    Status[Status["SUCCESS"] = 1] = "SUCCESS";
    Status[Status["FAILED"] = 2] = "FAILED";
})(Status || (Status = {}));
let eCom = Status.PENDING;
//# sourceMappingURL=index.js.map