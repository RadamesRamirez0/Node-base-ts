class Service {
    errors: Array<string> = [];

    addError(error: string) {
        this.errors.push(error);
    }

    removeErrors() {
        this.errors = [];
    }

    addErrors(newErrors: Array<string>) {
        this.errors = this.errors.concat(newErrors);
    }

    hasErrors(): boolean {
        return this.errors.length > 0;
    }

    isValid(): boolean {
        return !this.hasErrors();
    }

    errorsToString(): string {
        return this.errors.join("\n");
    }

    performValidations(): void {
        throw new Error("Method not implemented.");
    }
}

export default Service;
