export namespace School{
    export interface loginForm{
        data: any,
        isUsernameValid: boolean;
        error: Error | AppError;
    }

    export interface AppError {

        // Depricated
        error?: string;
    
        // Depricated
        message?: string;
    
        msg?: string;
        code?: any;
        errorCode?: any;
    }
}