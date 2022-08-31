import { Request, Response, NextFunction } from "express";

class Controller {
    public get(req: Request, res: Response, next: NextFunction): void {
        throw new Error("Method not implemented.");
    }

    public post(req: Request, res: Response, next: NextFunction): void {
        throw new Error("Method not implemented.");
    }

    public put(req: Request, res: Response, next: NextFunction): void {
        throw new Error("Method not implemented.");
    }

    public delete(req: Request, res: Response, next: NextFunction): void {
        throw new Error("Method not implemented.");
    }
}

export default Controller;
