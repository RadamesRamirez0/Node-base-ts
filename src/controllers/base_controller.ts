import { Request, Response, NextFunction } from "express";

class Controller {
    public async get(req: Request, res: Response, next: NextFunction): Promise<void> {
        throw new Error("Method not implemented.");
    }

    public async post(req: Request, res: Response, next: NextFunction): Promise<void> {
        throw new Error("Method not implemented.");
    }

    public async put(req: Request, res: Response, next: NextFunction): Promise<void> {
        throw new Error("Method not implemented.");
    }

    public async delete(req: Request, res: Response, next: NextFunction): Promise<void> {
        throw new Error("Method not implemented.");
    }
}

export default Controller;
