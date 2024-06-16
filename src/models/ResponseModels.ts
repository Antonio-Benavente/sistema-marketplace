export class ResponseModel {
    success: boolean;
    message: string;
    status: number;
    data: any;

    constructor(success: boolean, message: string, status: number, data: any){ 
        this.success = success;
        this.message = message;
        this.status = status;
        this.data = data;
    }

    static success(data: any, message: string = 'OK'){
        return new ResponseModel(true,message,200,data);
    }

    static error(message: string){
        return new ResponseModel(false,message,500,null);
    }

}