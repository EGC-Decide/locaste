import { HttpClient } from '@angular/common/http';
import { ConfigService } from './../../config/configService';
import { AbstractService } from './abstractService';
import { Injectable } from "@angular/core";

@Injectable()
export class RestService extends AbstractService {
    path: string;

    constructor(
        private config: ConfigService,
        http: HttpClient
    ) {
        super(http);
        //Localhost:8080
        this.path = this.config.getConfig().restUrlPrefix;
    }

    //Methods
    public logout(): Promise<any> {
        return this.makeGetRequest(this.path + 'authentication/logout/', null).then((res) => {
            return Promise.resolve(res);
        }).catch((error) => {
            return Promise.reject(error);
        });
    }

    public login(username: string, pass: string): Promise<any> {
        let fd = new FormData();
        fd.append('username', username);
        fd.append('password', pass);

        return this.makePostRequest(this.path + 'rest-auth/login/', fd).then((res) => {
            console.log("Se ha logueado exitosamente");
            return Promise.resolve(res);
        }).catch((error) => {
            console.log("Error: " + error);
            return Promise.reject(error);
        })
    }

    public signUp(username: string, password: string, birthdate: string, gender: string): Promise<any> {
        let fd = new FormData();
        fd.append('username', username);
        fd.append('password1', password);
        fd.append('password2', password);
        fd.append('birthdate', birthdate);
        fd.append('gender', gender);


        return this.makePostRequest(this.path + 'authentication/signup/', fd).then((res) => {
            console.log("Se ha registrado correctamente");
            return Promise.resolve(res);
        }).catch((error) => {
            console.log("Error " + error);
            return Promise.reject(error);
        });
    }

    public getPollsUserLogged(): Promise<any> {
        return this.makeGetRequest(this.path + '', null).then((res) => {
            return Promise.resolve(res);
        }).catch((error) => {
            console.log("Error " + error);
            return Promise.reject(error);
        });
    }


}