import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class LogService {
    logMessage(msg: string): void {
        alert(msg)
    }
}