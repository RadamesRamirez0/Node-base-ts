"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Service {
    constructor() {
        this.errors = [];
    }
    addError(error) {
        this.errors.push(error);
    }
    removeErrors() {
        this.errors = [];
    }
    addErrors(newErrors) {
        this.errors = this.errors.concat(newErrors);
    }
    hasErrors() {
        return this.errors.length > 0;
    }
    isValid() {
        return !this.hasErrors();
    }
    errorsToString() {
        return this.errors.join("\n");
    }
    performValidations() {
        throw new Error("Method not implemented.");
    }
}
exports.default = Service;
//# sourceMappingURL=base_service.js.map